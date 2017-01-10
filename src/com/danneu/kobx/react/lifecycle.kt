package com.danneu.kobx.react


external interface WillMount {
    fun componentWillMount()
}

external interface DidMount {
    fun componentDidMount()
}

external interface WillUnmount {
    fun componentWillUnmount()
}

external interface DidUnmount {
    fun componentDidUnmount()
}

external interface WillReceiveProps {
    fun componentWillReceiveProps()
}

external interface ShouldUpdate {
    fun shouldComponentUpdate(): Boolean
}

external interface WillUpdate {
    fun componentWillUpdate()
}

external interface DidUpdate {
    fun componentDidUpdate()
}

external interface Lifecycle :
    WillMount,
    DidMount,
    WillUnmount,
    DidUnmount,
    WillReceiveProps,
    ShouldUpdate,
    WillUpdate,
    DidUpdate

