package com.danneu.kobx.vdom


import kotlin.browser.document
import org.w3c.dom.Node as DomNode
import org.w3c.dom.events.Event


/**
 * A virtual dom tree with a builder dsl
 *
 * - Nodes can have kids
 * - Text cannot (terminal)
 */
sealed class VTree {
    /**
     * Rendering transforms a virtual tree into a concrete DOM tree
     */
    abstract fun render(): DomNode
    abstract fun copy(): VTree

    class VNode(val name: String, val attrs: Attrs, val kids: MutableList<VTree> = mutableListOf()) : VTree() {
        fun node(name: String, attrs: Attrs = emptyMap(), block: VNode.() -> Unit = {}): VNode {
            val kid = VNode(name, attrs)
            kid.block()
            kids.add(kid)
            return kid
        }

        fun text(body: String): VTree.VText {
            return VTree.VText(body).apply { kids.add(this) }
        }

        override fun toString(): String {
            var str = "[$name"
            if (attrs.isNotEmpty()) {
                str += " $attrs"
            }
            if (kids.isNotEmpty()) {
                str += " ${kids.map(VTree::toString)}"
            }
            return str + "]"
        }

        override fun render(): org.w3c.dom.Node {
            val domNode = document.createElement(name)
            // build attributes (setAttr doesn't handle custom attrs like our event attrs)
            attrs.entries.forEach { entry -> setAttr(domNode, entry.key, entry.value) }
            // build events
            attrs.entries
                .filter { isEventAttr(it.key) }
                .filterIsInstance<Map.Entry<String, ((Event) -> Unit)?>>()
                .forEach { (key, handler) -> domNode.addEventListener(extractEventName(key), handler) }
            // build children
            kids.map(VTree::render).forEach { kid -> domNode.appendChild(kid) }
            return domNode
        }

        override fun copy(): VNode {
            return VNode(
                name,
                HashMap(attrs),
                kids.map(VTree::copy).toMutableList()
            )
        }
    }

    class VText(val body: String) : VTree() {
        override fun toString(): String {
            return "[Text \"$body\"]"
        }

        override fun render(): org.w3c.dom.Node {
            return document.createTextNode(body)
        }

        override fun copy(): VText = VText(body)
    }
}


/** Top-level builders. Should never have to construct with VNode/VText manually.
 *
 */


fun text(body: String): VTree.VText {
    return VTree.VText(body)
}


fun node(name: String, attrs: Attrs = emptyMap(), block: VTree.VNode.() -> Unit = {}): VTree.VNode {
    return VTree.VNode(name, attrs).apply(block)
}
