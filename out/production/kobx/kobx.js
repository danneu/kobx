if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kobx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kobx'.");
}
var kobx = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var to = Kotlin.kotlin.to_l1ob02$;
  var mapOf = Kotlin.kotlin.collections.mapOf_dvvt93$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_eoa9s7$;
  var listOf = Kotlin.kotlin.collections.listOf_9mqe4v$;
  var get_js = Kotlin.kotlin.js.get_js_t5ir34$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_za3rmp$;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  Cursor.prototype = Object.create(Enum.prototype);
  Cursor.prototype.constructor = Cursor;
  BackgroundPicker.prototype = Object.create(React.Component.prototype);
  BackgroundPicker.prototype.constructor = BackgroundPicker;
  Clock.prototype = Object.create(React.Component.prototype);
  Clock.prototype.constructor = Clock;
  Tab.prototype = Object.create(Enum.prototype);
  Tab.prototype.constructor = Tab;
  TabAContent.prototype = Object.create(React.Component.prototype);
  TabAContent.prototype.constructor = TabAContent;
  TabBContent.prototype = Object.create(React.Component.prototype);
  TabBContent.prototype.constructor = TabBContent;
  TabCContent.prototype = Object.create(React.Component.prototype);
  TabCContent.prototype.constructor = TabCContent;
  Tabs.prototype = Object.create(React.Component.prototype);
  Tabs.prototype.constructor = Tabs;
  Counter.prototype = Object.create(React.Component.prototype);
  Counter.prototype.constructor = Counter;
  Counter2$ObjectLiteral.prototype = Object.create(React.Component.prototype);
  Counter2$ObjectLiteral.prototype.constructor = Counter2$ObjectLiteral;
  CounterList.prototype = Object.create(React.Component.prototype);
  CounterList.prototype.constructor = CounterList;
  Foo.prototype = Object.create(React.Component.prototype);
  Foo.prototype.constructor = Foo;
  App.prototype = Object.create(React.Component.prototype);
  App.prototype.constructor = App;
  function Cursor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Cursor_initFields() {
    Cursor_initFields = function () {
    };
    Cursor$auto_instance = new Cursor('auto', 0);
    Cursor$default_instance = new Cursor('default', 1);
    Cursor$none_instance = new Cursor('none', 2);
    Cursor$pointer_instance = new Cursor('pointer', 3);
  }
  var Cursor$auto_instance;
  function Cursor$auto_getInstance() {
    Cursor_initFields();
    return Cursor$auto_instance;
  }
  var Cursor$default_instance;
  function Cursor$default_getInstance() {
    Cursor_initFields();
    return Cursor$default_instance;
  }
  var Cursor$none_instance;
  function Cursor$none_getInstance() {
    Cursor_initFields();
    return Cursor$none_instance;
  }
  var Cursor$pointer_instance;
  function Cursor$pointer_getInstance() {
    Cursor_initFields();
    return Cursor$pointer_instance;
  }
  Cursor.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Cursor',
    baseClasses: [Enum]
  };
  function Cursor$values() {
    return [Cursor$auto_getInstance(), Cursor$default_getInstance(), Cursor$none_getInstance(), Cursor$pointer_getInstance()];
  }
  Cursor.values = Cursor$values;
  function Cursor$valueOf(name) {
    switch (name) {
      case 'auto':
        return Cursor$auto_getInstance();
      case 'default':
        return Cursor$default_getInstance();
      case 'none':
        return Cursor$none_getInstance();
      case 'pointer':
        return Cursor$pointer_getInstance();
      default:Kotlin.throwISE('No enum constant com.danneu.kobx.Cursor.' + name);
    }
  }
  Cursor.valueOf_61zpoe$ = Cursor$valueOf;
  function Css(backgroundColor, border, color, cursor, display, height, marginRight, marginTop, padding, textAlign, width) {
    if (backgroundColor === void 0)
      backgroundColor = null;
    if (border === void 0)
      border = null;
    if (color === void 0)
      color = null;
    if (cursor === void 0)
      cursor = null;
    if (display === void 0)
      display = null;
    if (height === void 0)
      height = null;
    if (marginRight === void 0)
      marginRight = null;
    if (marginTop === void 0)
      marginTop = null;
    if (padding === void 0)
      padding = null;
    if (textAlign === void 0)
      textAlign = null;
    if (width === void 0)
      width = null;
    this.backgroundColor = backgroundColor;
    this.border = border;
    this.color = color;
    this.cursor = cursor;
    this.display = display;
    this.height = height;
    this.marginRight = marginRight;
    this.marginTop = marginTop;
    this.padding = padding;
    this.textAlign = textAlign;
    this.width = width;
  }
  Css.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Css',
    baseClasses: []
  };
  function Store() {
    this.backgroundColor = 'white';
    this.now = new Date();
    this.count = 0;
    this.activate();
  }
  Object.defineProperty(Store.prototype, 'millisSinceEpoch', {
    get: function () {
      return this.now.getTime();
    }
  });
  Store.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Store',
    baseClasses: [Observable]
  };
  var store;
  function BackgroundPicker() {
    BackgroundPicker$Companion_getInstance();
    React.Component.call(this);
    mobxReact.observer(this);
  }
  function BackgroundPicker$render$lambda$lambda(closure$color) {
    return function () {
      store.backgroundColor = closure$color;
    };
  }
  BackgroundPicker.prototype.render = function () {
    var tmp$ = React.createElement('h3', null, 'BackgroundPicker');
    var tmp$_0 = mapOf(to('className', 'list-inline'));
    var $receiver = BackgroundPicker$Companion_getInstance().colors;
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_za3rmp$.bind(destination);
      var tmp$_3, tmp$_4;
      var isSelected = Kotlin.equals(store.backgroundColor, item);
      tmp$_4 = mapOf(to('key', item));
      if (isSelected) {
        tmp$_3 = h('span', mapOf(to('dangerouslySetInnerHTML', mapOf(to('__html', '&rarr;')))), []);
      }
       else
        tmp$_3 = null;
      var tmp$_5 = to('className', 'btn btn-default');
      var $receiver_1 = new Css(item, void 0, void 0, Cursor$pointer_getInstance());
      if (isSelected) {
        $receiver_1.border = 0;
        $receiver_1.backgroundColor = 'inherit';
        $receiver_1.color = 'black';
      }
      tmp$_2(h('li', tmp$_4, [tmp$_3, h('button', mapOf_0([tmp$_5, to('style', $receiver_1), to('onClick', mobx.action(BackgroundPicker$render$lambda$lambda(item))), to('disabled', isSelected)]), [item])]));
    }
    return React.createElement('div', null, tmp$, h('ul', tmp$_0, [Kotlin.kotlin.collections.copyToArray(destination)]));
  };
  function BackgroundPicker$Companion() {
    BackgroundPicker$Companion_instance = this;
    this.colors = listOf(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'white']);
  }
  BackgroundPicker$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var BackgroundPicker$Companion_instance = null;
  function BackgroundPicker$Companion_getInstance() {
    if (BackgroundPicker$Companion_instance === null) {
      BackgroundPicker$Companion_instance = new BackgroundPicker$Companion();
    }
    return BackgroundPicker$Companion_instance;
  }
  BackgroundPicker.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'BackgroundPicker',
    baseClasses: []
  };
  function Clock() {
    React.Component.call(this);
    mobxReact.observer(this);
  }
  function Clock$render$lambda() {
    store.now = new Date();
  }
  Clock.prototype.render = function () {
    var now = store.now;
    return React.createElement('div', null, React.createElement('h3', null, 'Clock'), React.createElement('p', null, 'Milliseconds since epoch: ', React.createElement('code', null, store.millisSinceEpoch.toString()), ' (@computed property)'), React.createElement('span', null, 'The time is ', React.createElement('code', null, store.now.toString()), ' (@observable property) '), h('button', mapOf_0([to('onClick', mobx.action(Clock$render$lambda)), to('className', 'btn btn-default')]), ['Update to now']));
  };
  Clock.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Clock',
    baseClasses: []
  };
  function Tab(name, ordinal, prettyName) {
    Enum.call(this);
    this.prettyName = prettyName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Tab_initFields() {
    Tab_initFields = function () {
    };
    Tab$TabA_instance = new Tab('TabA', 0, 'Tab A');
    Tab$TabB_instance = new Tab('TabB', 1, 'Tab B');
    Tab$TabC_instance = new Tab('TabC', 2, 'Tab C');
  }
  var Tab$TabA_instance;
  function Tab$TabA_getInstance() {
    Tab_initFields();
    return Tab$TabA_instance;
  }
  var Tab$TabB_instance;
  function Tab$TabB_getInstance() {
    Tab_initFields();
    return Tab$TabB_instance;
  }
  var Tab$TabC_instance;
  function Tab$TabC_getInstance() {
    Tab_initFields();
    return Tab$TabC_instance;
  }
  Tab.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Tab',
    baseClasses: [Enum]
  };
  function Tab$values() {
    return [Tab$TabA_getInstance(), Tab$TabB_getInstance(), Tab$TabC_getInstance()];
  }
  Tab.values = Tab$values;
  function Tab$valueOf(name) {
    switch (name) {
      case 'TabA':
        return Tab$TabA_getInstance();
      case 'TabB':
        return Tab$TabB_getInstance();
      case 'TabC':
        return Tab$TabC_getInstance();
      default:Kotlin.throwISE('No enum constant com.danneu.kobx.Tab.' + name);
    }
  }
  Tab.valueOf_61zpoe$ = Tab$valueOf;
  function TabAContent() {
    React.Component.call(this);
  }
  TabAContent.prototype.render = function () {
    return React.createElement('div', null, 'TabA Component');
  };
  TabAContent.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabAContent',
    baseClasses: []
  };
  function TabBContent() {
    React.Component.call(this);
  }
  TabBContent.prototype.render = function () {
    return React.createElement('div', null, 'TabB Component');
  };
  TabBContent.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabBContent',
    baseClasses: []
  };
  function TabCContent() {
    React.Component.call(this);
  }
  TabCContent.prototype.render = function () {
    return React.createElement('div', null, 'TabC Component');
  };
  TabCContent.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabCContent',
    baseClasses: []
  };
  function Tabs() {
    React.Component.call(this);
    mobxReact.observer(this);
    this.selectedTab = mobx.observable(Tab$TabA_getInstance());
  }
  function Tabs$renderTab$lambda(this$Tabs, closure$tab) {
    return function () {
      this$Tabs.selectedTab.set(closure$tab);
    };
  }
  Tabs.prototype.renderTab_d1m69h$ = function (tab) {
    return h('a', mapOf_0([to('onClick', mobx.action(Tabs$renderTab$lambda(this, tab))), to('href', 'javascript:void(0)')]), [tab.prettyName]);
  };
  Tabs.prototype.renderSelectedTabContent_d1m69h$ = function (selectedTab) {
    if (Kotlin.equals(selectedTab, Tab$TabA_getInstance()))
      return React.createElement(get_js(Kotlin.getKClass(TabAContent)));
    else if (Kotlin.equals(selectedTab, Tab$TabB_getInstance()))
      return React.createElement(get_js(Kotlin.getKClass(TabBContent)));
    else if (Kotlin.equals(selectedTab, Tab$TabC_getInstance()))
      return React.createElement(get_js(Kotlin.getKClass(TabCContent)));
  };
  Tabs.prototype.render = function () {
    var tmp$ = React.createElement('h3', null, 'TabList');
    var tmp$_0 = mapOf(to('className', 'nav nav-tabs'));
    var $receiver = Tab$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$($receiver.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var item = $receiver[tmp$_1];
      var tmp$_2 = destination.add_za3rmp$.bind(destination);
      var isSelected = item === this.selectedTab.get();
      tmp$_2(h('li', mapOf_0([to('className', isSelected ? 'active' : ''), to('key', item.name)]), [this.renderTab_d1m69h$(item)]));
    }
    return React.createElement('div', null, tmp$, h('ul', tmp$_0, [destination]), this.renderSelectedTabContent_d1m69h$(this.selectedTab.get()));
  };
  Tabs.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Tabs',
    baseClasses: []
  };
  function Counter() {
    Counter$Companion_getInstance();
    React.Component.call(this);
    mobxReact.observer(this);
    this.count = mobx.observable(0);
    var tmp$;
    tmp$ = Counter$Companion_getInstance();
    this.key = (tmp$.key_0 = tmp$.key_0 + 1, tmp$.key_0);
  }
  Counter.prototype.increment = function () {
    this.count.set(this.count.get() + 1);
  };
  Counter.prototype.decrement = function () {
    this.count.set(this.count.get() - 1);
  };
  function Counter$render$lambda(this$Counter) {
    return function () {
      this$Counter.decrement();
    };
  }
  function Counter$render$lambda_0(this$Counter) {
    return function () {
      this$Counter.increment();
    };
  }
  Counter.prototype.render = function () {
    Kotlin.println('[Counter#render] count = ' + this.count.get() + ', key = ' + this.key);
    var value = this.count.get();
    return h('div', mapOf(to('style', new Css(void 0, void 0, void 0, void 0, 'inline-block'))), [h('button', mapOf_0([to('onClick', mobx.action(Counter$render$lambda(this))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['-1']), ' ' + value + ' ', h('button', mapOf_0([to('onClick', mobx.action(Counter$render$lambda_0(this))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['+1'])]);
  };
  Counter.prototype.componentDidMount = function () {
    Kotlin.println('Counter ' + this.key + ' did mount');
  };
  function Counter$Companion() {
    Counter$Companion_instance = this;
    this.key_0 = 0;
  }
  Counter$Companion.prototype.nextKey = function () {
    return ++Counter$Companion_getInstance().key_0;
  };
  Counter$Companion.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Companion',
    baseClasses: []
  };
  var Counter$Companion_instance = null;
  function Counter$Companion_getInstance() {
    if (Counter$Companion_instance === null) {
      Counter$Companion_instance = new Counter$Companion();
    }
    return Counter$Companion_instance;
  }
  Counter.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Counter',
    baseClasses: []
  };
  function Counter2$increment(closure$count) {
    return function () {
      closure$count.set(closure$count.get() + 1);
    };
  }
  function Counter2$decrement(closure$count) {
    return function () {
      closure$count.set(closure$count.get() - 1);
    };
  }
  function Counter2$ObjectLiteral(closure$count_0, closure$decrement_0, closure$increment_0) {
    this.closure$count_0 = closure$count_0;
    this.closure$decrement_0 = closure$decrement_0;
    this.closure$increment_0 = closure$increment_0;
    React.Component.call(this);
  }
  function Counter2$ObjectLiteral$render$lambda(closure$decrement) {
    return function () {
      closure$decrement();
    };
  }
  function Counter2$ObjectLiteral$render$lambda_0(closure$increment) {
    return function () {
      closure$increment();
    };
  }
  Counter2$ObjectLiteral.prototype.render = function () {
    Kotlin.println('[Counter2] rendering, ' + this.closure$count_0.get());
    return h('div', mapOf(to('style', new Css(void 0, void 0, void 0, void 0, 'inline-block'))), [h('button', mapOf_0([to('onClick', mobx.action(Counter2$ObjectLiteral$render$lambda(this.closure$decrement_0))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['-1']), ' ' + this.closure$count_0.get() + ' ', h('button', mapOf_0([to('onClick', mobx.action(Counter2$ObjectLiteral$render$lambda_0(this.closure$increment_0))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['+1'])]);
  };
  Counter2$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function Counter2() {
    var count = mobx.observable(0);
    var increment = Counter2$increment(count);
    var decrement = Counter2$decrement(count);
    return mobxReact.observer(new Counter2$ObjectLiteral(count, decrement, increment));
  }
  function CounterList() {
    React.Component.call(this);
    mobxReact.observer(this);
    var list = listOf_0(to(Counter$Companion_getInstance().nextKey(), Counter2()));
    this.counters = mobx.observable(Kotlin.kotlin.collections.copyToArray(list));
  }
  CounterList.prototype.addCounter = function () {
    this.counters.push(to(Counter$Companion_getInstance().nextKey(), Counter2()));
  };
  function CounterList$render$lambda(this$CounterList) {
    return function () {
      this$CounterList.addCounter();
    };
  }
  function CounterList$render$lambda$lambda(this$CounterList, closure$pair) {
    return function () {
      this$CounterList.counters.remove(closure$pair);
    };
  }
  function CounterList$render$lambda_0(this$CounterList) {
    return function (pair) {
      var tmp$ = pair
      , key = tmp$.component1()
      , counter = tmp$.component2();
      return h('li', mapOf_0([to('key', key), to('className', 'list-group-item')]), [h('button', mapOf_0([to('onClick', mobx.action(CounterList$render$lambda$lambda(this$CounterList, pair))), to('className', 'btn btn-danger btn-xs'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, '20px'))]), ['Delete']), ' ', counter.render()]);
    };
  }
  CounterList.prototype.render = function () {
    return React.createElement('div', null, React.createElement('h3', null, 'CounterList', React.createElement('small', null, ' Counters: ' + this.counters.length)), React.createElement('p', null, h('button', mapOf_0([to('onClick', mobx.action(CounterList$render$lambda(this))), to('className', 'btn btn-success')]), ['Add Counter'])), h('ul', mapOf(to('className', 'list-group')), [this.counters.map(CounterList$render$lambda_0(this))]));
  };
  CounterList.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'CounterList',
    baseClasses: []
  };
  function Foo() {
    React.Component.call(this);
    mobxReact.observer(this);
  }
  function Foo$render$lambda() {
    store.count = store.count + 1;
  }
  Foo.prototype.render = function () {
    return h('button', mapOf(to('onClick', mobx.action(Foo$render$lambda))), [store.count.toString()]);
  };
  Foo.prototype.componentDidMount = function () {
    Kotlin.println('Foo did mount');
  };
  Foo.prototype.componentDidUpdate = function () {
    Kotlin.println('Foo did update');
  };
  Foo.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Foo',
    baseClasses: []
  };
  function App() {
    React.Component.call(this);
    mobxReact.observer(this);
  }
  App.prototype.render = function () {
    var style = new Css(store.backgroundColor, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '20px');
    return h('div', mapOf(to('style', style)), [h('div', mapOf(to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, '25px', void 0, 'right'))), [React.createElement('p', null, 'Source: ', h('a', mapOf(to('href', 'https://github.com/danneu/kobx')), ['github.com/danneu/kobx']), ' \u2013 A demonstration of ', h('a', mapOf_0([to('href', 'https://github.com/mobxjs/mobx'), to('target', '_blank')]), ['MobX']), ' + ', h('a', mapOf_0([to('href', 'https://facebook.github.io/react/'), to('target', '_blank')]), ['React']), ' components written in Kotlin, compiled to Javascript')]), React.createElement('hr'), React.createElement(get_js(Kotlin.getKClass(BackgroundPicker))), React.createElement('hr'), React.createElement(get_js(Kotlin.getKClass(Clock))), React.createElement('hr'), React.createElement(get_js(Kotlin.getKClass(Tabs))), React.createElement('hr'), React.createElement(get_js(Kotlin.getKClass(CounterList))), React.createElement('hr'), React.createElement(get_js(Kotlin.getKClass(Foo))), React.createElement(get_js(Kotlin.getKClass(Foo))), React.createElement(get_js(Kotlin.getKClass(Foo)))]);
  };
  App.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'App',
    baseClasses: []
  };
  function main$lambda() {
    store.now = new Date();
  }
  function main(args) {
    var tmp$;
    window.setInterval(mobx.action(main$lambda), 1000);
    ReactDOM.render(React.createElement(get_js(Kotlin.getKClass(App))), (tmp$ = document.querySelector('#root')) != null ? tmp$ : Kotlin.throwNPE());
  }
  function objectOf$ObjectLiteral() {
  }
  objectOf$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function objectOf(pairs) {
    var obj = new objectOf$ObjectLiteral();
    var tmp$;
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var element = pairs[tmp$];
      var k = element.component1()
      , v = element.component2();
      obj[k] = v;
    }
    return obj;
  }
  function objectOf$ObjectLiteral_0() {
  }
  objectOf$ObjectLiteral_0.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function objectOf_0(map_1) {
    var obj = new objectOf$ObjectLiteral_0();
    var tmp$;
    tmp$ = map_1.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      obj[k] = v;
    }
    return obj;
  }
  function toJsObject$ObjectLiteral() {
  }
  toJsObject$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  function toJsObject($receiver) {
    var obj = new toJsObject$ObjectLiteral();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      if (Kotlin.isType(v, Map)) {
        obj[k] = toJsObject(v);
      }
       else {
        obj[k] = v;
      }
    }
    return obj;
  }
  var observable = Kotlin.defineInlineFunction('kobx.com.danneu.kobx.mobx.observable_rtpmmf$', function (observable$A_0, isA, list) {
    return mobx.observable(Kotlin.kotlin.collections.copyToArray(list));
  });
  function Observable() {
  }
  Observable.prototype.activate = function () {
    var props = Object.getOwnPropertyDescriptors(this);
    var $receiver = Object.keys(props);
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element.charAt(0) !== '$') {
        destination.add_za3rmp$(element);
      }
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var value = props[element_0].value;
      var mapping = objectOf([to(element_0, value)]);
      Kotlin.println('key = ' + element_0 + ', value = ' + value + ', mapping = ' + JSON.stringify(mapping) + ')');
      mobx.extendObservable(this, mapping);
    }
  };
  Observable.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Observable',
    baseClasses: []
  };
  function VNode() {
  }
  VNode.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'VNode',
    baseClasses: []
  };
  function h(nodeName, attrs, kids) {
    var tmp$ = React.createElement;
    var tmp$_0 = [nodeName, toJsObject(attrs)];
    var tmp$_1 = tmp$_0.concat.bind(tmp$_0);
    var destination = Kotlin.kotlin.collections.ArrayList_init_za3lpa$(kids.length);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== kids.length; ++tmp$_2) {
      var item = kids[tmp$_2];
      var tmp$_3 = destination.add_za3rmp$.bind(destination);
      var transform$result;
      if (Kotlin.isType(item, List)) {
        transform$result = Kotlin.kotlin.collections.copyToArray(item);
      }
       else {
        transform$result = item;
      }
      tmp$_3(transform$result);
    }
    return tmp$.apply(null, tmp$_1(Kotlin.kotlin.collections.copyToArray(destination)));
  }
  Store.prototype.activate = Observable.prototype.activate;
  Object.defineProperty(Cursor, 'auto', {
    get: Cursor$auto_getInstance
  });
  Object.defineProperty(Cursor, 'default', {
    get: Cursor$default_getInstance
  });
  Object.defineProperty(Cursor, 'none', {
    get: Cursor$none_getInstance
  });
  Object.defineProperty(Cursor, 'pointer', {
    get: Cursor$pointer_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$danneu = package$com.danneu || (package$com.danneu = {});
  var package$kobx = package$danneu.kobx || (package$danneu.kobx = {});
  package$kobx.Cursor = Cursor;
  package$kobx.Css = Css;
  package$kobx.Store = Store;
  Object.defineProperty(package$kobx, 'store', {
    get: function () {
      return store;
    }
  });
  Object.defineProperty(BackgroundPicker, 'Companion', {
    get: BackgroundPicker$Companion_getInstance
  });
  package$kobx.BackgroundPicker = BackgroundPicker;
  package$kobx.Clock = Clock;
  Object.defineProperty(Tab, 'TabA', {
    get: Tab$TabA_getInstance
  });
  Object.defineProperty(Tab, 'TabB', {
    get: Tab$TabB_getInstance
  });
  Object.defineProperty(Tab, 'TabC', {
    get: Tab$TabC_getInstance
  });
  package$kobx.Tab = Tab;
  package$kobx.TabAContent = TabAContent;
  package$kobx.TabBContent = TabBContent;
  package$kobx.TabCContent = TabCContent;
  package$kobx.Tabs = Tabs;
  Object.defineProperty(Counter, 'Companion', {
    get: Counter$Companion_getInstance
  });
  package$kobx.Counter = Counter;
  package$kobx.Counter2 = Counter2;
  package$kobx.CounterList = CounterList;
  package$kobx.Foo = Foo;
  package$kobx.App = App;
  package$kobx.main_kand9s$ = main;
  var package$js = package$kobx.js || (package$kobx.js = {});
  package$js.objectOf_eoa9s7$ = objectOf;
  package$js.objectOf_9qgf6b$ = objectOf_0;
  package$js.toJsObject_efxzmg$ = toJsObject;
  var package$mobx = package$kobx.mobx || (package$kobx.mobx = {});
  package$mobx.observable_rtpmmf$ = observable;
  package$mobx.Observable = Observable;
  var package$react = package$kobx.react || (package$kobx.react = {});
  package$react.VNode = VNode;
  package$react.h_hseq2$ = h;
  store = new Store();
  Kotlin.defineModule('kobx', _);
  main([]);
  return _;
}(typeof kobx === 'undefined' ? {} : kobx, kotlin);
