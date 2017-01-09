package com.danneu.kobx

import com.danneu.kobx.react.Component
import com.danneu.kobx.react.Object
import com.danneu.kobx.react.React
import com.danneu.kobx.react.ReactElement
import com.danneu.kobx.react.toJsObject

// A small builder API for creating react elements
//
//     d("div", null, "hello, world")
//     d(MyComponent::class.js)
//     d("button", mapOf("type" to "submit", "onClick" to action { sendMessage() }), "Send")

class D(val a: String, val b: Object? = null, vararg c: Any) {
    //val kids = mutableListOf<ReactElement>()
    val kids = c.toMutableList()

    fun d(tag: String, attrs: Map<*, *>? = null, block: D.() -> Unit = {}) {
        val kid = D(tag, attrs?.toJsObject())
        kid.block()
        kids.add(React.createElement(kid.a, kid.b, *kid.kids.toTypedArray()))
    }

    fun d(tag: String, attrs: Map<*, *>? = null, vararg subkids: Any) {
        kids.add(React.createElement(tag, attrs?.toJsObject(), *subkids))
    }

    fun d(jsclass: JsClass<*>) {
        kids.add(React.createElement(jsclass))
    }

    fun d(el: ReactElement) {
        kids.add(el)
    }

    fun d(c: Component) {
        kids.add(c)
    }

    // Before this can work, nested `d` need to return themselves instead of building onto receiver with side-effects
    fun ds(list: List<*>) {
        kids.add(list.toTypedArray())
    }
    fun ds(array: Array<*>) {
        kids.add(array)
    }

    fun text(string: String) {
        kids.add(string)
    }
}

// I introduced `node` alongside these top-level `d`s because I needed to differentiate node creators
// vs instance methods. Need to think about this API, mainly as it pertains to getting component
// arrays working, the analogue for `items.map((item) => <Component x={item.x}>)`
//
// Need to pick one or the other once I figure out a game plan.

fun d(tag: String, attrs: Map<*, *>? = null, block: D.() -> Unit = {}): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    root.block()
    return React.createElement(root.a, root.b, *root.kids.toTypedArray())
}

fun node(tag: String, attrs: Map<*, *>? = null, block: D.() -> Unit = {}): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    root.block()
    return React.createElement(root.a, root.b, *root.kids.toTypedArray())
}

fun d(tag: String, attrs: Map<*, *>? = null, text: String = ""): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    return React.createElement(root.a, root.b, arrayOf(text))
}

fun node(tag: String, attrs: Map<*, *>? = null, text: String = ""): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    return React.createElement(root.a, root.b, arrayOf(text))
}

// new

fun node(tag: String, attrs: Map<*, *>? = null, children: List<ReactElement> = emptyList()): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    return React.createElement(root.a, root.b, children.toTypedArray())
}

fun node(tag: String, attrs: Map<*, *>? = null, component: Component): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    return React.createElement(root.a, root.b, component)
}
