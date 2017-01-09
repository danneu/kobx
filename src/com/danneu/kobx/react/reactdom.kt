package com.danneu.kobx.react

import org.w3c.dom.Element


@JsName("ReactDOM")
external object ReactDOM {
    fun render(element: ReactElement, domNode: Element)

    fun unmountComponentAtNode()

    fun findDOMNode()
}

