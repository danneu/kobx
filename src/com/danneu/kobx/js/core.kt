package com.danneu.kobx.js


// This package is for stubbing out native Javascript APIs
//
// Note: object { val foo = "bar", val qux = 42 } becomes {foo: 'bar', qux: 42}


@JsName("JSON")
external object JSON {
    fun stringify(thing: dynamic): String
}


@JsName("Object")
external class Object {
    companion object {
        fun getOwnPropertyDescriptors(obj: dynamic): dynamic
        fun keys(obj: dynamic): Array<String>
    }
}


// NON-NATIVE HELPERS


fun objectOf(vararg pairs: Pair<String, Any>): Object {
    val obj: dynamic = object {}
    pairs.forEach { (k, v) -> obj[k] = v }
    return obj
}

fun objectOf(map: Map<String, Any>): Object {
    val obj: dynamic = object {}
    map.entries.forEach { (k, v) -> obj[k] = v }
    return obj
}

fun Map<*, *>.toJsObject(): Object {
    val obj: dynamic = object {}
    this.entries.forEach { (k, v) ->
        if (v is Map<*, *>) {
            obj[k] = v.toJsObject()
        } else {
            obj[k] = v
        }
    }
    return obj
}
