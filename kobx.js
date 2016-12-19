var kobx = function (_, Kotlin) {
  'use strict';
  var imported$clear = Kotlin.kotlin.dom.clear_asww5t$;
  var imported$Continuation = Kotlin.kotlin.coroutines.Continuation;
  var imported$apply = Kotlin.kotlin.apply_ji1yox$;
  var imported$Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var imported$drop = Kotlin.kotlin.text.drop_n7iutu$;
  var imported$until = Kotlin.kotlin.ranges.until_rksjo2$;
  var imported$getOrNull = Kotlin.kotlin.collections.getOrNull_3iu80n$;
  var imported$kotlin = Kotlin.kotlin;
  var imported$emptyMap = Kotlin.kotlin.collections.emptyMap;
  var imported$plus = Kotlin.kotlin.collections.plus_y1w8a6$;
  var imported$forEach = Kotlin.kotlin.collections.forEach_lcecrh$;
  var imported$isNotEmpty = Kotlin.kotlin.collections.isNotEmpty_efxzmg$;
  var imported$isNotEmpty_0 = Kotlin.kotlin.collections.isNotEmpty_mwto7b$;
  var imported$map = Kotlin.kotlin.collections.map_fcza0h$;
  var imported$filter = Kotlin.kotlin.collections.filter_udlcbx$;
  var imported$Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var imported$filterIsInstance = Kotlin.kotlin.collections.filterIsInstance_q5oq31$;
  var imported$component1 = Kotlin.kotlin.collections.component1_95c3g$;
  var imported$component2 = Kotlin.kotlin.collections.component2_95c3g$;
  var imported$HashMap_init = Kotlin.kotlin.collections.HashMap_init_r12sna$;
  var imported$toMutableList = Kotlin.kotlin.collections.toMutableList_mwto7b$;
  var imported$mutableListOf = Kotlin.kotlin.collections.mutableListOf_9mqe4v$;
  VTree$VNode.prototype = Object.create(VTree.prototype);
  VTree$VNode.prototype.constructor = VTree$VNode;
  VTree$VText.prototype = Object.create(VTree.prototype);
  VTree$VText.prototype.constructor = VTree$VText;
  function Observable() {
  }
  Observable.prototype.activate = function () {
    {
      var self = this;
      var obj = Object.getOwnPropertyDescriptors(this);
      Object.keys(obj).forEach(function (key) {
        var mapping = {};
        mapping[key] = obj[key].value;
        mobx.extendObservable(self, mapping);
      });
    }
  };
  Observable.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Observable',
    baseClasses: []
  };
  function Counter() {
    this.count = 0;
    this.activate();
  }
  Object.defineProperty(Counter.prototype, 'twice', {
    get: function () {
      return this.count * 2;
    }
  });
  Counter.prototype.test = function () {
    return 42;
  };
  Counter.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Counter',
    baseClasses: [Observable]
  };
  function WillMount() {
  }
  WillMount.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'WillMount',
    baseClasses: []
  };
  function DidMount() {
  }
  DidMount.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'DidMount',
    baseClasses: []
  };
  function DidUpdate() {
  }
  DidUpdate.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'DidUpdate',
    baseClasses: []
  };
  function WillUnmount() {
  }
  WillUnmount.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'WillUnmount',
    baseClasses: []
  };
  function Component() {
  }
  Component.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Component',
    baseClasses: []
  };
  function render$lambda() {
    imported$clear(this);
  }
  function render(component, domNode) {
    imported$clear(domNode);
    domNode.appendChild(component.render().render());
  }
  function mount$lambda() {
    imported$clear(this);
  }
  function mount$lambda_0(closure$component, closure$rootNode, closure$prevTree, closure$prevDom) {
    return function () {
      var nextTree = closure$component.render();
      var nextDom = patch(closure$rootNode, nextTree, closure$prevTree.v);
      if (Kotlin.isType(closure$component, DidUpdate))
        closure$component.componentDidUpdate();
      closure$prevTree.v = nextTree;
      closure$prevDom.v = nextDom;
    };
  }
  function mount(component, rootNode) {
    if (Kotlin.isType(component, WillMount))
      component.componentWillMount();
    var prevTree = {v: component.render()};
    var prevDom = {v: prevTree.v.render()};
    imported$clear(rootNode);
    rootNode.appendChild(prevDom.v);
    if (Kotlin.isType(component, DidMount))
      component.componentDidMount();
    mobx.autorun(mount$lambda_0(component, rootNode, prevTree, prevDom));
  }
  function setAttr(domNode, key, value) {
    if (isCustomAttr(key))
      return;
    if (Kotlin.equals(value, false))
      return domNode.removeAttribute(key);
    else if (Kotlin.equals(value, true))
      return domNode.setAttribute(key, key);
    else
      return domNode.setAttribute(key, value.toString());
  }
  function removeAttr(domNode, key) {
    if (isCustomAttr(key))
      return;
    domNode.removeAttribute(key);
  }
  function isEventAttr(key) {
    return imported$Regex('^on[A-Z]').containsMatchIn_6bul2c$(key);
  }
  function extractEventName(key) {
    return imported$drop(key, 2).toLowerCase();
  }
  function isCustomAttr(key) {
    return isEventAttr(key) || Kotlin.equals(key, 'forceUpdate');
  }
  function changed(new_0, old) {
    if (Kotlin.isType(new_0, VTree$VNode) && Kotlin.isType(old, VTree$VText))
      return true;
    else if (Kotlin.isType(old, VTree$VNode) && Kotlin.isType(new_0, VTree$VText))
      return true;
    else if (Kotlin.isType(new_0, VTree$VText) && Kotlin.isType(old, VTree$VText) && new_0.body !== old.body)
      return true;
    else if (Kotlin.isType(new_0, VTree$VNode) && Kotlin.isType(old, VTree$VNode) && new_0.name !== old.name)
      return true;
    else if (Kotlin.isType(new_0, VTree$VNode) && new_0.attrs.get_za3rmp$('forceUpdate') != null)
      return true;
    else
      return false;
  }
  function patch(domParent, newNode, oldNode, index) {
    var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8;
    if (oldNode === void 0)
      oldNode = null;
    if (index === void 0)
      index = 0;
    if (oldNode == null)
      tmp$8 = domParent.appendChild((newNode != null ? newNode : Kotlin.throwNPE()).render());
    else if (newNode == null)
      tmp$8 = domParent.removeChild((tmp$0 = domParent.childNodes[index]) != null ? tmp$0 : Kotlin.throwNPE());
    else if (changed(newNode, oldNode))
      tmp$8 = domParent.replaceChild(newNode.render(), (tmp$1 = domParent.childNodes[index]) != null ? tmp$1 : Kotlin.throwNPE());
    else if (Kotlin.isType(newNode, VTree$VNode) && Kotlin.isType(oldNode, VTree$VNode)) {
      patchAttrs(Kotlin.isType(tmp$2 = domParent.childNodes[index], Element) ? tmp$2 : Kotlin.throwCCE(), newNode.attrs, oldNode.attrs);
      var newLength = newNode.kids.size;
      var oldLength = oldNode.kids.size;
      tmp$3 = imported$until(0, Math.max(newLength, oldLength));
      tmp$4 = tmp$3.first;
      tmp$5 = tmp$3.last;
      tmp$6 = tmp$3.step;
      for (var i = tmp$4; i <= tmp$5; i += tmp$6) {
        patch((tmp$7 = domParent.childNodes[index]) != null ? tmp$7 : Kotlin.throwNPE(), imported$getOrNull(newNode.kids, i), imported$getOrNull(oldNode.kids, i), i);
      }
      tmp$8 = domParent;
    }
     else {
      tmp$8 = domParent;
    }
    return tmp$8;
  }
  function patchAttr(domNode, key, newVal, oldVal) {
    if (oldVal === void 0)
      oldVal = null;
    if (newVal == null)
      removeAttr(domNode, key);
    else if (oldVal == null)
      setAttr(domNode, key, newVal);
    else if (!Kotlin.equals(newVal, oldVal))
      setAttr(domNode, key, newVal);
    else {
      imported$kotlin.Unit;
    }
  }
  function patchAttrs$lambda(closure$domNode, closure$newAttrs, closure$oldAttrs) {
    return function (key) {
      patchAttr(closure$domNode, key, closure$newAttrs.get_za3rmp$(key), closure$oldAttrs.get_za3rmp$(key));
    };
  }
  function patchAttrs(domNode, newAttrs, oldAttrs) {
    if (oldAttrs === void 0)
      oldAttrs = imported$emptyMap();
    var attrs = imported$plus(newAttrs, oldAttrs);
    var tmp$0;
    tmp$0 = attrs.keys.iterator();
    while (tmp$0.hasNext()) {
      var element = tmp$0.next();
      var closure$oldAttrs = oldAttrs;
      patchAttr(domNode, element, newAttrs.get_za3rmp$(element), closure$oldAttrs.get_za3rmp$(element));
    }
  }
  function Store() {
    this.time = new Date();
    this.activate();
  }
  Store.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Store',
    baseClasses: [Observable]
  };
  var store;
  function Clock() {
  }
  function Clock$render$lambda(closure$time) {
    return function () {
      this.text_61zpoe$(closure$time.toString());
    };
  }
  Clock.prototype.render = function () {
    var time = store.time;
    return node('span', void 0, Clock$render$lambda(time));
  };
  Clock.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Clock',
    baseClasses: [Component]
  };
  function main$lambda() {
    store.time = new Date();
  }
  function main(args) {
    var tmp$0;
    var clock = new Clock();
    window.setInterval(mobx.action(main$lambda), 1000);
    mount(clock, (tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE());
  }
  function VTree() {
  }
  function VTree$VNode(name, attrs, kids) {
    if (kids === void 0)
      kids = imported$mutableListOf([]);
    VTree.call(this);
    this.name = name;
    this.attrs = attrs;
    this.kids = kids;
  }
  function VTree$VNode$node$lambda() {
  }
  VTree$VNode.prototype.node_u1spbu$ = function (name, attrs, block) {
    if (attrs === void 0)
      attrs = imported$emptyMap();
    if (block === void 0)
      block = VTree$VNode$node$lambda;
    var kid = new VTree$VNode(name, attrs);
    block.call(kid);
    this.kids.add_za3rmp$(kid);
    return kid;
  };
  function VTree$VNode$text$lambda(this$VNode) {
    return function () {
      this$VNode.kids.add_za3rmp$(this);
    };
  }
  VTree$VNode.prototype.text_61zpoe$ = function (body) {
    var $receiver = new VTree$VText(body);
    this.kids.add_za3rmp$($receiver);
    return $receiver;
  };
  VTree$VNode.prototype.toString = function () {
    var str = '[' + this.name;
    if (!this.attrs.isEmpty()) {
      str += ' ' + this.attrs;
    }
    if (!this.kids.isEmpty()) {
      var $receiver_1 = this.kids;
      var transform = Kotlin.getCallableRefForMemberFunction(VTree, 'toString');
      var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver_1, 10));
      var tmp$0;
      tmp$0 = $receiver_1.iterator();
      while (tmp$0.hasNext()) {
        var item = tmp$0.next();
        destination.add_za3rmp$(transform(item));
      }
      str += ' ' + destination;
    }
    return str + ']';
  };
  function VTree$VNode$render$lambda(closure$domNode) {
    return function (entry) {
      setAttr(closure$domNode, entry.key, entry.value);
    };
  }
  function VTree$VNode$render$lambda_0(it) {
    return isEventAttr(it.key);
  }
  function VTree$VNode$render$lambda_1(closure$domNode) {
    return function (f) {
      var key = f.key;
      var handler = f.value;
      closure$domNode.addEventListener(extractEventName(key), handler);
    };
  }
  function VTree$VNode$render$lambda_2(closure$domNode) {
    return function (kid) {
      closure$domNode.appendChild(kid);
    };
  }
  VTree$VNode.prototype.render = function () {
    var domNode = document.createElement(this.name);
    var tmp$5;
    tmp$5 = this.attrs.entries.iterator();
    while (tmp$5.hasNext()) {
      var element = tmp$5.next();
      setAttr(domNode, element.key, element.value);
    }
    var $receiver_0 = this.attrs.entries;
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    var tmp$6;
    tmp$6 = $receiver_0.iterator();
    while (tmp$6.hasNext()) {
      var element_0 = tmp$6.next();
      if (isEventAttr(element_0.key)) {
        destination.add_za3rmp$(element_0);
      }
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    var tmp$7;
    tmp$7 = destination.iterator();
    while (tmp$7.hasNext()) {
      var element_1 = tmp$7.next();
      if (element_1 == null || Kotlin.isType(element_1, imported$Map$Entry)) {
        destination_0.add_za3rmp$(element_1);
      }
    }
    var tmp$8;
    tmp$8 = destination_0.iterator();
    while (tmp$8.hasNext()) {
      var element_2 = tmp$8.next();
      var key = element_2.key;
      var handler = element_2.value;
      domNode.addEventListener(extractEventName(key), handler);
    }
    var $receiver_3 = this.kids;
    var transform = Kotlin.getCallableRefForMemberFunction(VTree, 'render');
    var destination_1 = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver_3, 10));
    var tmp$9;
    tmp$9 = $receiver_3.iterator();
    while (tmp$9.hasNext()) {
      var item = tmp$9.next();
      destination_1.add_za3rmp$(transform(item));
    }
    var tmp$10;
    tmp$10 = destination_1.iterator();
    while (tmp$10.hasNext()) {
      var element_3 = tmp$10.next();
      domNode.appendChild(element_3);
    }
    return domNode;
  };
  VTree$VNode.prototype.copy = function () {
    var tmp$1 = this.name;
    var tmp$2 = imported$HashMap_init(this.attrs);
    var $receiver = this.kids;
    var transform = Kotlin.getCallableRefForMemberFunction(VTree, 'copy');
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
    var tmp$4;
    tmp$4 = $receiver.iterator();
    while (tmp$4.hasNext()) {
      var item = tmp$4.next();
      destination.add_za3rmp$(transform(item));
    }
    return new VTree$VNode(tmp$1, tmp$2, imported$toMutableList(destination));
  };
  VTree$VNode.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'VNode',
    baseClasses: [VTree]
  };
  function VTree$VText(body) {
    VTree.call(this);
    this.body = body;
  }
  VTree$VText.prototype.toString = function () {
    return '[Text ' + '"' + this.body + '"' + ']';
  };
  VTree$VText.prototype.render = function () {
    return document.createTextNode(this.body);
  };
  VTree$VText.prototype.copy = function () {
    return new VTree$VText(this.body);
  };
  VTree$VText.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'VText',
    baseClasses: [VTree]
  };
  VTree.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'VTree',
    baseClasses: []
  };
  function text_0(body) {
    return new VTree$VText(body);
  }
  function node$lambda() {
  }
  function node(name, attrs, block) {
    if (attrs === void 0)
      attrs = imported$emptyMap();
    if (block === void 0)
      block = node$lambda;
    var $receiver = new VTree$VNode(name, attrs);
    block.call($receiver);
    return $receiver;
  }
  Counter.prototype.activate = Observable.prototype.activate;
  Store.prototype.activate = Observable.prototype.activate;
  var package$com = _.com || (_.com = {});
  var package$danneu = package$com.danneu || (package$com.danneu = {});
  var package$kobx = package$danneu.kobx || (package$danneu.kobx = {});
  package$kobx.Observable = Observable;
  package$kobx.Counter = Counter;
  var package$ui = package$kobx.ui || (package$kobx.ui = {});
  package$ui.WillMount = WillMount;
  package$ui.DidMount = DidMount;
  package$ui.DidUpdate = DidUpdate;
  package$ui.WillUnmount = WillUnmount;
  package$ui.Component = Component;
  package$ui.render_br5t06$ = render;
  package$ui.mount_br5t06$ = mount;
  var package$vdom = package$kobx.vdom || (package$kobx.vdom = {});
  package$vdom.setAttr_3zp812$ = setAttr;
  package$vdom.removeAttr_t9mn69$ = removeAttr;
  package$vdom.isEventAttr_61zpoe$ = isEventAttr;
  package$vdom.extractEventName_61zpoe$ = extractEventName;
  package$vdom.isCustomAttr_61zpoe$ = isCustomAttr;
  package$vdom.changed_aksyjw$ = changed;
  package$vdom.patch_3mcib5$ = patch;
  package$vdom.patchAttr_b8zqcx$ = patchAttr;
  package$vdom.patchAttrs_1us6ib$ = patchAttrs;
  package$vdom.Store = Store;
  Object.defineProperty(package$vdom, 'store', {
    get: function () {
      return store;
    }
  });
  package$vdom.Clock = Clock;
  package$vdom.main_kand9s$ = main;
  VTree.VNode = VTree$VNode;
  VTree.VText = VTree$VText;
  package$vdom.VTree = VTree;
  package$vdom.text_61zpoe$ = text_0;
  package$vdom.node_u1spbu$ = node;
  store = new Store();
  Kotlin.defineModule('kobx', _);
  main([]);
  return _;
}(typeof kobx === 'undefined' ? {} : kobx, kotlin);
