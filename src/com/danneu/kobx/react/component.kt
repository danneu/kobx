package com.danneu.kobx.react


@JsName("React.Component")
external abstract class Component(val displayName: String? = null) {
    abstract fun render(): ReactElement
}

