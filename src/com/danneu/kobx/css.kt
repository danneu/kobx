package com.danneu.kobx

// TODO: finish populating https://developer.mozilla.org/en/docs/Web/CSS/cursor
enum class Cursor {
    auto,
    default,
    none,
    pointer
}

class Css(
    var backgroundColor: String? = null,
    var border: Any? = null,
    var color: String? = null,
    var cursor: Cursor? = null,
    var display: String? = null,
    var height: String? = null,
    var marginRight: String? = null,
    var marginTop: String? = null,
    var padding: String? = null,
    var textAlign: String? = null,
    var width: String? = null
)
