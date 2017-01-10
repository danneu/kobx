package com.danneu.kobx

import com.danneu.kobx.Cursor.pointer
import com.danneu.kobx.mobx.Observable
import com.danneu.kobx.mobx.action
import com.danneu.kobx.mobx.observer
import com.danneu.kobx.mobx.observable
import com.danneu.kobx.react.Component
import com.danneu.kobx.react.DidMount
import com.danneu.kobx.react.DidUpdate
import com.danneu.kobx.react.VNode
import com.danneu.kobx.react.h
import com.danneu.kobx.react.render
import kotlin.browser.document
import kotlin.browser.window


class Store : Observable {
    // @observable properties
    var backgroundColor = "white"
    var now = Date()
    var count = 0

    // @computed properties
    val millisSinceEpoch: Int
        get() = now.getTime()

    init { activate() }
}

val store = Store()


class BackgroundPicker : Component() {
    init { observer(this) }

    override fun render(): VNode {
        return h("div", null,
            h("h3", null, "BackgroundPicker"),
            h("ul", mapOf("className" to "list-inline"),
                colors.map { color ->
                    val isSelected = store.backgroundColor == color
                    h("li", mapOf("key" to color),
                        if (isSelected) {
                            h("span", mapOf("dangerouslySetInnerHTML" to mapOf("__html" to "&rarr;")))
                        } else null,
                        h("button", mapOf(
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
                    )
                }.toTypedArray()
            )
        )
    }

    companion object {
        val colors = listOf("red", "orange", "yellow", "green", "blue", "violet", "white")
    }
}


class Clock : Component() {
    init { observer(this) }

    override fun render(): VNode {
        return h("div", null,
            h("h3", null, "Clock"),
            h("p", null,
                "Milliseconds since epoch: ",
                h("code", null, store.millisSinceEpoch.toString()),
                " (@computed property)"
            ),
            h("span", null,
                "The time is ",
                h("code", null, store.now.toString()),
                " (@observable property) "
            ),
            h("button", mapOf(
                "onClick" to action { store.now = Date() },
                "className" to "btn btn-default"
            ), "Update to now")
        )
    }
}

enum class Tab(val prettyName: String) { TabA("Tab A"), TabB("Tab B"), TabC("Tab C") }

class TabAContent : Component() {
    override fun render() = h("div", null, "TabA Component")
}
class TabBContent : Component() {
    override fun render() = h("div", null, "TabB Component")
}
class TabCContent : Component() {
    override fun render() = h("div", null, "TabC Component")
}

class Tabs : Component() {
    init { observer(this) }

    val selectedTab = observable(Tab.TabA)

    fun renderTab(tab: Tab) = h("a", mapOf(
        "onClick" to action { selectedTab.set(tab) },
        "href" to "javascript:void(0)"
    ), tab.prettyName)

    // Got compiler crash when I inlined the when() expression
    fun renderSelectedTabContent(selectedTab: Tab): VNode {
        return when (selectedTab) {
            Tab.TabA ->
                h(TabAContent::class.js)
            Tab.TabB ->
                h(TabBContent::class.js)
            Tab.TabC ->
                h(TabCContent::class.js)
        }
    }

    override fun render() = h("div", null,
        h("h3", null, "TabList"),
        h("ul", mapOf("className" to "nav nav-tabs"),
            Tab.values().map { tab ->
                val isSelected = tab == selectedTab.get()
                h("li", mapOf(
                    "className" to (if (isSelected) "active" else ""),
                    "key" to tab.name
                ),
                    renderTab(tab)
                )
            }
        ),
        renderSelectedTabContent(selectedTab.get())
    )
}


class Counter : Component(), DidMount {
    init { observer(this) }

    val count = observable(0)
    val key = ++Companion.key

    fun increment() { count.set(count.get() + 1) }
    fun decrement() { count.set(count.get() - 1) }

    override fun render(): VNode {
        println("[Counter#render] count = ${count.get()}, key = $key")
        val value = count.get()
        return h("div", mapOf("style" to Css(display = "inline-block")),
            h("button", mapOf(
                "onClick" to action { decrement() },
                "className" to "btn btn-xs btn-default",
                "style" to Css(width = "50px")
            ), "-1"),
            " $value ",
            h("button", mapOf(
                "onClick" to action { increment() },
                "className" to "btn btn-xs btn-default",
                "style" to Css(width = "50px")
            ), "+1")
        )
    }

    // FIXME: didMount will not fire since react isn't given control of this. Need to figure this out.
    override fun componentDidMount() = println("Counter $key did mount")

    companion object {
        private var key = 0
        fun nextKey() = ++key
    }
}


// Experimenting with () -> Component
fun Counter2(): Component {
    val count = observable(0)

    fun increment() { count.set(count.get() + 1) }
    fun decrement() { count.set(count.get() - 1) }

    return observer(object : Component() {
        override fun render(): VNode {
            println("[Counter2] rendering, ${count.get()}")
            return h("div", mapOf("style" to Css(display = "inline-block")),
                h("button", mapOf(
                    "onClick" to action { decrement() },
                    "className" to "btn btn-xs btn-default",
                    "style" to Css(width = "50px")
                ), "-1"),
                " ${count.get()} ",
                h("button", mapOf(
                    "onClick" to action { increment() },
                    "className" to "btn btn-xs btn-default",
                    "style" to Css(width = "50px")
                ), "+1")
            )
        }
    })
}

class CounterList : Component() {
    init { observer(this) }

    //val counters = observable(listOf(Counter()))
    val counters = observable(listOf(Counter.nextKey() to Counter2()))

    fun addCounter() = counters.push(Counter.nextKey() to Counter2())

    override fun render(): VNode {
        return h("div", null,
            h("h3", null, "CounterList",
                h("small", null, " Counters: ${counters.length}")
            ),
            h("p", null,
                h("button", mapOf(
                    "onClick" to action { addCounter() },
                    "className" to "btn btn-success"
                ), "Add Counter")
            ),
            h("ul", mapOf("className" to "list-group"),
                counters.map { pair ->
                    val (key, counter) = pair
                    h("li", mapOf("key" to key, "className" to "list-group-item"),
                        h("button", mapOf(
                            "onClick" to action { counters.remove(pair) },
                            "className" to "btn btn-danger btn-xs",
                            "style" to Css(marginRight = "20px")
                        ), "Delete"),
                        " ",
                        // FIXME: Re-renders each time. Figure out how to support `components.map { d(component) }`
                        counter.render()
                    )
                }
            )
        )
    }
}

// I tried Preact briefly, but switched back to React when I couldn't figure out why this Foo component
// was always firing didUpdate twice per update. Without any changes to the code, React only fired once.
class Foo : Component(), DidMount, DidUpdate {
    init { observer(this) }

    override fun render(): VNode {
        return h("button", mapOf("onClick" to action { store.count += 1 }), store.count.toString())
    }

    override fun componentDidMount() {
        println("Foo did mount")
    }

    override fun componentDidUpdate() {
        println("Foo did update")
    }
}


class App : Component() {
    init { observer(this) }

    override fun render(): VNode {
        val style = Css(backgroundColor = store.backgroundColor, padding = "20px")

        return h("div", mapOf("style" to style),
            h("div", mapOf("style" to Css(textAlign = "right", marginTop = "25px")),
                h("p", null,
                    "Source: ",
                    h("a", mapOf("href" to "https://github.com/danneu/kobx"), "github.com/danneu/kobx"),
                    " – A demonstration of ",
                    h("a", mapOf("href" to "https://github.com/mobxjs/mobx", "target" to "_blank"), "MobX"),
                    " + ",
                    h("a", mapOf("href" to "https://facebook.github.io/react/", "target" to "_blank"), "React"),
                    " components written in Kotlin, compiled to Javascript"
                )
            ),
            h("hr"),
            h(BackgroundPicker::class.js),
            h("hr"),
            h(Clock::class.js),
            h("hr"),
            h(Tabs::class.js),
            h("hr"),
            h(CounterList::class.js),
            h("hr"),
            h(Foo::class.js),
            h(Foo::class.js),
            h(Foo::class.js)
        )
    }
}



fun main(args: Array<String>) {
    // Update the time every second, which will trigger a re-render in the components that deref the time
    window.setInterval(action({
        store.now = Date()
    }), 1000)

    render(h(App::class.js), document.querySelector("#root")!!)
}
