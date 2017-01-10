package com.danneu.kobx.mobx

import com.danneu.kobx.js.Object
import com.danneu.kobx.js.objectOf


/**
 * This interface exists for observables (stores) to call `init { activate() }`,
 * injecting the mobx interop into their class during initialization.
 * Must be called after all observable properties and computer getters are defined,
 * else it won't see them.
 *
 * Would be cool to have mobx's @observable, @computed, etc., but kotlin
 * doesn't yet support annotation reflection in javascript.
 */
interface Observable {
    fun activate() {
        val props = Object.getOwnPropertyDescriptors(this)

        Object.keys(props)
            // Skip internal mobx functions
            .filter { key -> key[0] != '$' }
            .forEach { key ->
                val value = props[key].value
                val mapping = objectOf(key to value)
                println("key = $key, value = $value, mapping = ${JSON.stringify(mapping)})")
                extendObservable(this, mapping)
            }
    }
}
