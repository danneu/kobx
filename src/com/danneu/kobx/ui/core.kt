package com.danneu.kobx.ui

import com.danneu.kobx.mobx.autorun
import com.danneu.kobx.vdom.VTree
import com.danneu.kobx.vdom.patch
import org.w3c.dom.Element
import kotlin.dom.clear

/**
 * A toy react inspired implementation until I get farther enough along to switch to react.
 */

// COMPONENT LIFECYCLE

interface WillMount { @native fun componentWillMount() }
interface DidMount { @native fun componentDidMount() }
interface DidUpdate { @native fun componentDidUpdate() }
interface WillUnmount { @native fun componentWillUnmount() }

@native
interface FullLifecycle : WillMount, DidMount, DidUpdate, WillUnmount

// COMPONENT

/**
 * Example:
 *
 *     class Counter : Component, WillMount {
 *         override fun render()
 *         override fun componentWillMount()
 *     }
 */
interface Component {
    fun render(): VTree
}

/**
 * A one-time render to the DOM
 */
fun render(component: Component, domNode: Element) {
    domNode.apply { clear() }.appendChild(component.render().render())
}

/**
 * Render component to dom and react to changes
 */
fun mount(component: Component, rootNode: Element) {
    if (component is WillMount) component.componentWillMount()
    var prevTree = component.render()
    var prevDom = prevTree.render()
    rootNode.apply { clear() }.appendChild(prevDom)
    if (component is DidMount) component.componentDidMount()
    autorun {
        val nextTree = component.render()
        val nextDom = patch(rootNode, nextTree, prevTree)
        if (component is DidUpdate) component.componentDidUpdate()
        prevTree = nextTree
        prevDom = nextDom
    }
}
