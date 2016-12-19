package com.danneu.kobx.mobx


/**
 * FIXME: Yyyikes.
 *
 * This interface exists for observables (stores) to call activate(),
 * injecting the mobx interop into their class during initialization.
 *
 * Would be cool to have mobx's @observable, @computed, etc., but kotlin
 * doesn't yet support annotation reflection in javascript.
 */
interface Observable {
    fun activate() {
        js("""
            var self = this

            var obj = Object.getOwnPropertyDescriptors(this)
            Object.keys(obj).forEach(function (key) {
                var mapping = {}
                mapping[key] = obj[key].value
                mobx.extendObservable(self, mapping)
            })
        """)
    }
}
