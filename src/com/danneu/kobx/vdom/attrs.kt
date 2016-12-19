package com.danneu.kobx.vdom

import org.w3c.dom.Element

/**
 * Attrs are the key/val pairs that we pass to vdom nodes. Most of them
 * translate directly into DomNode#setAttribute calls, but not all of them.
 *
 * Some of them, we want to intercept. Like `onClick to { println("clicked") }`
 * since it's not an attribute but rather, of course, an event. That's why I
 * have these setAttr and removeAttr functions.
 */

typealias Attrs = Map<String, Any>


/**
 * Use this over Element#setAttribute since this handles more cases
 */
fun setAttr(domNode: Element, key: String, value: Any) {
    if (isCustomAttr(key)) return
    return when (value) {
        // Only want to set an attribute if it's true since merely setting an attribute will enable it
        false ->
            domNode.removeAttribute(key)
        true ->
            domNode.setAttribute(key, key)
        else ->
            domNode.setAttribute(key, value.toString())
    }
}

/**
 * Use this over Element#removeAttribute since this handles more cases
 */
fun removeAttr(domNode: Element, key: String) {
    if (isCustomAttr(key)) return
    domNode.removeAttribute(key)
}

// key starts with "on" followed by a capital letter
// isEventAttr("onDblClick")
fun isEventAttr(key: String): Boolean {
    return Regex("^on[A-Z]").containsMatchIn(key)
}


// extractEventName("onDblClick") == "dblclick"
fun extractEventName(key: String): String {
    return key.drop(2).toLowerCase()
}


fun isCustomAttr(key: String): Boolean {
    return isEventAttr(key) || key == "forceUpdate"
}
