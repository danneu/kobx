package com.danneu.kobx.mobx

import com.danneu.kobx.ui.Component

@native("mobxReact.observer")
fun observer(component: Component)

@native("mobx.observable")
fun observable(obj: dynamic): dynamic

@native("mobx.autorun")
fun autorun(block: () -> Unit)

@native("mobx.extendObservable")
fun extendObservable(instance: Any, props: dynamic)

@native("mobx.action")
fun action(block: () -> Unit): () -> dynamic

