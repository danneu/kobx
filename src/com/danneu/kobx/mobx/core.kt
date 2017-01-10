package com.danneu.kobx.mobx

import com.danneu.kobx.react.Component

@JsName("mobxReact.observer")
external fun observer(component: Component): Component

@JsName("mobx.observable")
external fun observable(value: String): ObservableBox<String>
@JsName("mobx.observable")
external fun observable(value: Int): ObservableBox<Int>
@JsName("mobx.observable")
external fun <T> observable(value: T): ObservableBox<T>
@JsName("mobx.observable")
external fun <A> observable(array: Array<A>): ObservableArray<A>
inline fun <reified A> observable(list: List<A>): ObservableArray<A> = observable(list.toTypedArray())

@JsName("mobx.autorun")
external fun autorun(block: () -> Unit)

@JsName("mobx.extendObservable")
external fun extendObservable(instance: Any, props: dynamic)

@JsName("mobx.action")
external inline fun action(block: () -> Unit): () -> dynamic

// https://mobxjs.github.io/mobx/refguide/boxed.html
external class ObservableBox <T> {
    fun get(): T
    fun set(newValue: T)
}

@JsName("ObservableArray")
external class ObservableArray <A> {
    // Javascript array methods

    fun push(item: A)
    val length: Int
    fun <B> map(xform: (A) -> B): Array<B>
    fun forEach(process: (A) -> Unit)

    // Mobx's array extensions

    fun remove(value: A): Boolean
}
