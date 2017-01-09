package com.danneu.kobx.react

interface ReactElement

external class Object

fun Map<*, *>.toJsObject(): Object {
    val obj: dynamic = object {}
    this.entries.forEach { (k, v) ->
        if (v is Map<*, *>) {
            obj[k] = v.toJsObject()
        } else {
            obj[k] = v
        }
    }
    return obj
}

@JsName("React")
external object React {
    fun createElement(component: Component, attrs: Object? = null, vararg kids: Any): ReactElement
    fun createElement(element: ReactElement, attrs: Object? = null, vararg kids: Any): ReactElement
    fun createElement(tag: String, attrs: Object? = null, vararg kids: dynamic): ReactElement
    fun createElement(jsclass: JsClass<*>, attrs: Object? = null, vararg kids: Any): ReactElement
}
