package com.danneu.kobx

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

    // Before this can work, nested `d` need to return themselves instead of building onto receiver with side-effects
    fun ds(list: List<ReactElement>) {
        kids.add(list.toTypedArray())
    }

    fun text(string: String) {
        kids.add(string)
    }
}

fun d(tag: String, attrs: Map<*, *>? = null, block: D.() -> Unit = {}): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    root.block()
    return React.createElement(root.a, root.b, *root.kids.toTypedArray())
}

fun d(tag: String, attrs: Map<*, *>? = null, text: String = ""): ReactElement {
    val root = D(tag, attrs?.toJsObject())
    return React.createElement(root.a, root.b, arrayOf(text))
}
