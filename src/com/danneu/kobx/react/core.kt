package com.danneu.kobx.react

import com.danneu.kobx.Css
import com.danneu.kobx.mobx.Observable
import com.danneu.kobx.mobx.action
import com.danneu.kobx.mobx.observable
import com.danneu.kobx.mobx.observer
import kotlin.browser.document
import kotlin.reflect.KClass

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
    fun createElement(tag: String, attrs: Object? = null, vararg kids: Any): ReactElement
    fun createElement(jsclass: JsClass<*>, attrs: Object? = null, vararg kids: Any): ReactElement
}
