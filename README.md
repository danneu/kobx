
# kobx

Experimental mobx + react bindings for kotlin-javascript.

## Live Demo

The `main.kt` file is hosted live here: <https://www.danneu.com/kobx>

It demonstrates various component/UI interactions, and it's where I test
kobx functionality as I develop it.

## Quick Example

Displays a clock component that updates the time
every second, triggering a component re-render each time.

Clicking the time also updates the store.

``` kotlin
import com.danneu.kobx.mobx.Observable
import com.danneu.kobx.mobx.action
import com.danneu.kobx.react.Component
import com.danneu.kobx.react.ReactDOM
import com.danneu.kobx.react.ReactElement
import kotlin.browser.document
import kotlin.browser.window

// === STORE

// All properties and getters are observable (trigger reactions).
// Getters map to mobx @computed properties.

class Store : Observable {
    // Observable property
    var now = Date()
    
    // Computed property
    val millisSinceEpoch: Int 
        get() = now.getTime()
        
    // Stupid hack to generate the mobx boilerplate.
    // Must come after the properties are defined.
    init { activate() }
}

val store = Store()

// === ROOT COMPONENT


class Clock : Component() {
    // Upgrade component into observer which is what
    // hooks render() dereferences up to the store
    init { observer(this) }
    
    // By dereferencing `store.now` in render(), render()
    // observes the time and will re-render when `store.now` changes.
    override fun render(): ReactElement {
        return d("span", mapOf("onClick" to action { store.now = Date() })) {
            text(store.now.toString())
        }
    }
}

fun main(args: Array<String>) {
    val clock = Clock()
    window.setInterval(action({ store.now = Date() }), 1000)
    ReactDOM.render(React.createElement(Clock::class.js), document.querySelector("#root")!!)
}
```

## Build

I couldn't figure out how to get Gradle to do the Kotlin->Javascript
build, so I used IntelliJ's wizard. Not sure how to build
the project without it.

Clone the project and visit `index.html` in the project root.

