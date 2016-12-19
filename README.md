
# kobx

A toy virtual dom + a toy react implementation + mobx bindings,
written in kotlin.

An effort to play with kotlin-to-javascript compilation.

----

It started off as mobx bindings, but then I needed to
yak-shave some react bindings, which was tough for me
to figure out without much kotlin-to-javascript documentation,
so the only choice I had left was to start yak-shaving
a virtual-dom, altogether damning the future of this
repository.

But I made about 0.1% progress on each of those goals.

## Example

Displays a clock component that updates the time
every second, triggering a ui re-render each time.

``` kotlin
import com.danneu.kobx.mobx.Observable
import com.danneu.kobx.mobx.action
import com.danneu.kobx.ui.Component
import com.danneu.kobx.ui.mount
import kotlin.browser.document
import kotlin.browser.window

// === STORE

// All properties and getters are observable (trigger reactions).
// Getters map to mobx @computed properties.

class Store : Observable {
    // Observable property
    var time: Date = Date()
    
    // Computed property
    val millisSinceEpoch: Int 
        get() = time.getTime()
        
    // Stupid hack to generate the mobx boilerplate.
    // Must come after the properties are defined.
    init { activate() }
}

val store = Store()

// === ROOT COMPONENT

// By dereferencing `store.time` in render(), render()
// now observes the time.

class Clock : Component {
    override fun render(): VTree {
        val time = store.time
        return node("span") {
            text(time.toString())
        }
    }
}

fun main(args: Array<String>) {
    val clock = Clock()
    window.setInterval(action({ store.time = Date() }), 1000)
    mount(clock, document.body!!)
}
```

## Build

I couldn't figure out how to get Gradle to do the Kotlin->Javascript
build, so I used IntelliJ's wizard. Not sure how to build
the project without it.

Clone the project and visit `index.html` in the project root.

