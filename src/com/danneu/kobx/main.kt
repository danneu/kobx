package com.danneu.kobx

import com.danneu.kobx.Cursor.pointer
import com.danneu.kobx.mobx.Observable
import com.danneu.kobx.mobx.action
import com.danneu.kobx.mobx.observer
import com.danneu.kobx.mobx.observable
import com.danneu.kobx.react.Component
import com.danneu.kobx.react.DidMount
import com.danneu.kobx.react.React
import com.danneu.kobx.react.ReactDOM
import com.danneu.kobx.react.ReactElement
import kotlin.browser.document
import kotlin.browser.window


class Store : Observable {
    // @observable properties
    var backgroundColor = "white"
    var now: Date = Date()

    // @computed properties
    val millisSinceEpoch: Int
        get() = now.getTime()

    init { activate() }
}

val store = Store()

class BackgroundPicker : Component() {
    init { observer(this) }

    override fun render(): ReactElement {
        println("render")
        return d("div") {
            d("ul") {
                colors.forEach { color ->
                    val isSelected = store.backgroundColor == color
                    d("li") {
                        if (isSelected) {
                            d("span", mapOf("dangerouslySetInnerHTML" to mapOf("__html" to "&rarr; ")))
                        }
                        d("button", mapOf(
                            "style" to Css(
                                cursor = pointer,
                                backgroundColor = color
                            ).apply {
                                if (isSelected) {
                                    this.border = 0
                                    this.backgroundColor = "inherit"
                                    this.color = "black"
                                }
                            },
                            "onClick" to action { store.backgroundColor = color },
                            "disabled" to isSelected
                        ), color)
                    }
                }
            }
        }
    }

    companion object {
        val colors = listOf("red", "orange", "yellow", "green", "blue", "violet", "white")
    }
}

class Clock : Component() {
    init { observer(this) }

    override fun render(): ReactElement {
        val now = store.now
        return d("div") {
            d("p", null, "Since epoch: ${store.millisSinceEpoch}")
            d("p", mapOf("onClick" to action { store.now = Date() }), "time is $now")
        }
    }
}


enum class TabName(val prettyName: String) { TabA("Tab A"), TabB("Tab B"), TabC("Tab C") }

class TabA : Component() {
    override fun render(): ReactElement = d("div", null, "TabA Component")
}
class TabB : Component() {
    override fun render(): ReactElement = d("div", null, "TabB Component")
}
class TabC : Component() {
    override fun render(): ReactElement = d("div", null, "TabC Component")
}

class Tabs : Component() {
    init { observer(this) }

    val selectedTab = observable(TabName.TabA)

    // TODO: Figure out how to support d(component) e.g. d(Tab(TabName.TabA))
//    class Tab(val tab: TabName) : Component() {
//        override fun render(): ReactElement = d("div", mapOf("style" to Css(height = "50px", width = "100px", border = "2px solid black"))) {
//            text(tab.prettyName)
//        }
//    }

    fun renderTab(tab: TabName, isSelected: Boolean): ReactElement = d("div") {
        text(tab.prettyName)
        if (isSelected) {
            text(" (Selected)")
        }
    }

    override fun render(): ReactElement = d("div") {
        d("ul") {
            TabName.values().forEach { tab ->
                d("li", mapOf(
                    "style" to Css(cursor = pointer),
                    "onClick" to action { selectedTab.set(tab) })
                ) {
                    d(renderTab(tab, isSelected = tab == selectedTab.get()))
                }
            }
        }
        when (selectedTab.get()) {
            TabName.TabA ->
                d(TabA::class.js)
            TabName.TabB ->
                d(TabB::class.js)
            TabName.TabC ->
                d(TabC::class.js)
        }
    }

}

class Counter : Component(), DidMount {
    init { observer(this) }
    val count = observable(0)
    val key = ++Companion.key
    fun increment() { count.set(count.get() + 1) }
    fun decrement() { count.set(count.get() - 1) }

    override fun render(): ReactElement {
        println("[Counter#render] count = ${count.get()}, key = $key")
        val value = count.get()
        return d("div") {
            d("button", mapOf("onClick" to action { decrement() }), "-")
            text(value.toString())
            d("button", mapOf("onClick" to action { increment() }), "+")
        }
    }

    override fun componentDidMount() {
        println("Counter $key did mount")
    }

    companion object {
        var key = 0
    }
}

class CounterList : Component() {
    init { observer(this) }
    val counters = observable(listOf(Counter()))

    fun addCounter() = counters.push(Counter())

    override fun render(): ReactElement {
        return d("div") {
            d("h3") {
                text("CounterList")
                d("small") {
                    text(" Counters: ${counters.length}")
                }
            }
            d("button", mapOf("onClick" to action { addCounter() }), "Add Counter")
            d("ul") {
                // TODO: Get this working
                ds(counters.map { counter ->
                    node("li", mapOf("key" to counter.key)) {
                        // FIXME: Re-renders each time. Figure out how to support `components.map { d(component) }`
                        d(counter.render())
                        d("button", mapOf("onClick" to action { counters.remove(counter) }), "Delete")
                    }
                })
            }
        }
    }
}


class App : Component() {
    init { observer(this) }
    override fun render(): ReactElement = d("div", mapOf("style" to Css(backgroundColor = store.backgroundColor))) {
        d(BackgroundPicker::class.js)
        d("hr")
        d(Clock::class.js)
        d("hr")
        d(Tabs::class.js)
        d("hr")
        d(CounterList::class.js)
    }
}



fun main(args: Array<String>) {
    window.setInterval(action({ store.now = Date() }), 1000)

    ReactDOM.render(React.createElement(App::class.js), document.querySelector("#root")!!)
}
