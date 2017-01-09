package com.danneu.kobx.react


external interface WillMount {
    fun componentWillMount()
}

external interface DidMount {
    fun componentDidMount()
}

external interface DidUpdate {
    fun componentDidUpdate()
}

external interface WillUnmount {
    fun componentWillUnmount()
}


external interface Lifecycle :
    WillMount,
    DidMount,
    DidUpdate,
    WillUnmount
