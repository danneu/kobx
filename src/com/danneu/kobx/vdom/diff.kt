package com.danneu.kobx.vdom

import org.w3c.dom.Element
import org.w3c.dom.Node

/**
 * Given the VTree at the same position before and after, is it a completely different VTree than before?
 * If so, we'll replace it. Else we'll patch it.
 */
fun changed (new: VTree, old: VTree): Boolean = when {
    // different node enums
    new is VTree.VNode && old is VTree.VText ->
        true
    old is VTree.VNode && new is VTree.VText ->
        true
    // different strings
    new is VTree.VText && old is VTree.VText && new.body !== old.body ->
        true
    // different elements
    new is VTree.VNode && old is VTree.VNode && new.name !== old.name ->
        true
    // forcing update
    new is VTree.VNode && new.attrs["forceUpdate"] != null ->
        true
    else ->
        false
}


// domParent must be an element since it has children
fun patch(domParent: Node, newNode: VTree?, oldNode: VTree? = null, index: Int = 0): Node {
    return when {
        oldNode == null -> {
            domParent.appendChild(newNode!!.render())
        }
        newNode == null -> {
            domParent.removeChild(domParent.childNodes[index]!!)
        }
        changed(newNode, oldNode) -> {
            domParent.replaceChild(newNode.render(), domParent.childNodes[index]!!)
        }
        newNode is VTree.VNode && oldNode is VTree.VNode -> {
            patchAttrs(domParent.childNodes[index] as Element, newNode.attrs, oldNode.attrs)
            val newLength = newNode.kids.size
            val oldLength = oldNode.kids.size
            for (i in 0.until(Math.max(newLength, oldLength))) {
                patch(
                    domParent.childNodes[index]!!,
                    newNode.kids.getOrNull(i),
                    oldNode.kids.getOrNull(i),
                    i
                )
            }
            domParent
        }
        else -> {
            domParent
        }
    }

}


fun patchAttr(domNode: Element, key: String, newVal: Any?, oldVal: Any? = null) = when {
    // Case 1: No attr with that key on newNode, so we must remove it
    // - new: <nav></nav>
    // - old: <nav class="foo"></nav>
    newVal == null -> {
        removeAttr(domNode, key)
    }
    // Case 2: No attr with that key on oldNode, so we must set it
    // - new: <nav style="color: blue;"></nav>
    // - old: <nav></nav>
    oldVal == null -> {
        setAttr(domNode, key, newVal)
    }
    // Case 3: Attr is set on both nodes but it's different, so use the new value
    // - new: <nav class="foo bar"></nav>
    // - old: <nav class="foo"></nav>
    // FIXME: This doesn't solve the case example.
    newVal != oldVal -> {
        setAttr(domNode, key, newVal)
    }
    // Case 4: Nothing to do
    else -> {
        Unit
    }
}


fun patchAttrs(domNode: Element, newAttrs: Attrs, oldAttrs: Attrs = emptyMap()) {
    // merge old into new
    val attrs = newAttrs.plus(oldAttrs)
    attrs.keys.forEach { key ->
        patchAttr(domNode, key, newAttrs[key], oldAttrs[key])
    }
}