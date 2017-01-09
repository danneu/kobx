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
        return d("div") {
            d("h3") {
                text("BackgroundPicker")
            }
            d("ul", mapOf("className" to "list-inline")) {
                colors.forEach { color ->
                    val isSelected = store.backgroundColor == color
                    d("li") {
                        if (isSelected) {
                            d("span", mapOf("dangerouslySetInnerHTML" to mapOf("__html" to "&rarr; ")))
                        }
                        d("button", mapOf(
                            "className" to "btn btn-default",
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
            d("h3") {
                text("Clock")
            }
            d("p") {
                text("Milliseconds since epoch: ")
                d("code", null, store.millisSinceEpoch.toString())
                text(" (@computed property)")
            }
            d("span") {
                text("The time is ")
                d("code", null, store.now.toString())
                text(" (@observable property) ")
            }
            d("button", mapOf(
                "onClick" to action { store.now = Date() },
                "className" to "btn btn-default"
            ), "Update to now")
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

    fun renderTab(tab: TabName): ReactElement = d("a", mapOf(
        "onClick" to action { selectedTab.set(tab) },
        "href" to "javascript:void(0)"
    ))  {
        text(tab.prettyName)
    }

    override fun render(): ReactElement = d("div") {
        d("h3") {
            text("TabList")
        }
        d("ul", mapOf("className" to "nav nav-tabs")) {
            TabName.values().forEach { tab ->
                val isSelected = tab == selectedTab.get()
                d("li", mapOf("className" to (if (isSelected) "active" else ""))) {
                    d(renderTab(tab))
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
        return d("div", mapOf("style" to Css(display = "inline-block"))) {
            d("button", mapOf(
                "onClick" to action { decrement() },
                "className" to "btn btn-xs btn-default",
                "style" to Css(width = "50px")
            ), "-1")
            text(" " + value.toString() + " ")
            d("button", mapOf(
                "onClick" to action { increment() },
                "className" to "btn btn-xs btn-default",
                "style" to Css(width = "50px")
            ), "+1")
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
            d("p") {
                d("button", mapOf("onClick" to action { addCounter() }, "className" to "btn btn-success"), "Add Counter")
            }
            d("ul", mapOf("className" to "list-group")) {
                // TODO: Get this working
                ds(counters.map { counter ->
                    node("li", mapOf(
                        "key" to counter.key,
                        "className" to "list-group-item"
                    )) {
                        d("button", mapOf(
                            "onClick" to action { counters.remove(counter) },
                            "className" to "btn btn-danger btn-xs",
                            "style" to Css(marginRight = "20px")
                        ), "Delete")
                        text(" ")
                        // FIXME: Re-renders each time. Figure out how to support `components.map { d(component) }`
                        d(counter.render())
                    }
                })
            }
        }
    }
}
//<ul class="list-group">
//  <li class="list-group-item">Cras justo odio</li>
//  <li class="list-group-item">Dapibus ac facilisis in</li>
//  <li class="list-group-item">Morbi leo risus</li>
//  <li class="list-group-item">Porta ac consectetur ac</li>
//  <li class="list-group-item">Vestibulum at eros</li>
//</ul>


class App : Component() {
    init { observer(this) }

    override fun render(): ReactElement {
        val style = Css(backgroundColor = store.backgroundColor, padding = "20px")

        return d("div", mapOf("style" to style)) {
            d("div", mapOf("style" to Css(textAlign = "right", marginTop = "25px"))) {
                d("p") {
                    text("Source: ")
                    d("a", mapOf("href" to "https://github.com/danneu/kobx"), "github.com/danneu/kobx")
                    text(" – A demonstration of ")
                    d("a", mapOf("href" to "https://github.com/mobxjs/mobx", "target" to "_blank"), "MobX")
                    text(" + ")
                    d("a", mapOf("href" to "https://facebook.github.io/react/", "target" to "_blank"), "React")
                    text(" components written in Kotlin, compiled to Javascript")
                }
            }
            d("hr")
            d(BackgroundPicker::class.js)
            d("hr")
            d(Clock::class.js)
            d("hr")
            d(Tabs::class.js)
            d("hr")
            d(CounterList::class.js)
        }
    }
}



fun main(args: Array<String>) {
    // Update the time every second, which will trigger a re-render in the components that deref the time
    window.setInterval(action({
        store.now = Date()
    }), 1000)

    ReactDOM.render(React.createElement(App::class.js), document.querySelector("#root")!!)
}
