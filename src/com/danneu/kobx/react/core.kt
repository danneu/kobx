package com.danneu.kobx.react

import com.danneu.kobx.js.Object
import com.danneu.kobx.js.toJsObject
import org.w3c.dom.Element

interface VNode

@JsName("React.Component")
external abstract class Component {
    abstract fun render(): VNode
}

@JsName("ReactDOM.render")
external fun render(vNode: VNode, domNode: Element)


@JsName("React.createElement")
external fun h(nodeName: String, attrs: Object? = null, vararg kids: Any?): VNode
@JsName("React.createElement")
external fun h(jsClass: JsClass<*>, attrs: Object? = null, vararg kids: Any?): VNode

fun h(nodeName: String, attrs: Map<String, Any>, vararg kids: Any?): VNode {
    // A List child will throw a runtime error, so preprocess lists into arrays before passing them on
    // to the external functions.
    return h(nodeName, attrs.toJsObject(), *kids.map { kid ->
        when (kid) {
            is List<*> ->
                kid.toTypedArray()
            else ->
                kid
        }
    }.toTypedArray())
}



