if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kobx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kobx'.");
}
var kobx = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_eg9ybj$;
  var emptyList = Kotlin.kotlin.collections.emptyList;
  var to = Kotlin.kotlin.to_l1ob02$;
  var mapOf = Kotlin.kotlin.collections.mapOf_dvvt93$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_eoa9s7$;
  var listOf = Kotlin.kotlin.collections.listOf_9mqe4v$;
  var get_js = Kotlin.kotlin.js.get_js_t5ir34$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_za3rmp$;
  var Map = Kotlin.kotlin.collections.Map;
  Cursor.prototype = Object.create(Enum.prototype);
  Cursor.prototype.constructor = Cursor;
  BackgroundPicker.prototype = Object.create(React.Component.prototype);
  BackgroundPicker.prototype.constructor = BackgroundPicker;
  Clock.prototype = Object.create(React.Component.prototype);
  Clock.prototype.constructor = Clock;
  TabName.prototype = Object.create(Enum.prototype);
  TabName.prototype.constructor = TabName;
  TabA.prototype = Object.create(React.Component.prototype);
  TabA.prototype.constructor = TabA;
  TabB.prototype = Object.create(React.Component.prototype);
  TabB.prototype.constructor = TabB;
  TabC.prototype = Object.create(React.Component.prototype);
  TabC.prototype.constructor = TabC;
  Tabs.prototype = Object.create(React.Component.prototype);
  Tabs.prototype.constructor = Tabs;
  Counter.prototype = Object.create(React.Component.prototype);
  Counter.prototype.constructor = Counter;
  CounterList.prototype = Object.create(React.Component.prototype);
  CounterList.prototype.constructor = CounterList;
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
  function D(a, b, c) {
    if (b === void 0)
      b = null;
    this.a = a;
    this.b = b;
    this.kids = toMutableList(c);
  }
  function D$d$lambda() {
  }
  D.prototype.d_kj89xv$ = function (tag, attrs, block) {
    var tmp$;
    if (attrs === void 0)
      attrs = null;
    if (block === void 0)
      block = D$d$lambda;
    var kid = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    block.call(kid);
    var tmp$_0 = this.kids;
    var tmp$_1 = (tmp$ = React).createElement;
    var tmp$_2 = tmp$;
    var tmp$_3 = [kid.a, kid.b];
    var tmp$_4 = tmp$_3.concat.bind(tmp$_3);
    var $receiver = kid.kids;
    tmp$_0.add_za3rmp$(tmp$_1.apply(tmp$_2, tmp$_4(Kotlin.kotlin.collections.copyToArray($receiver))));
  };
  D.prototype.d_16rng9$ = function (tag, attrs, subkids) {
    var tmp$;
    if (attrs === void 0)
      attrs = null;
    this.kids.add_za3rmp$((tmp$ = React).createElement.apply(tmp$, [tag, attrs != null ? toJsObject(attrs) : null].concat(subkids)));
  };
  D.prototype.d_nxr5h6$ = function (jsclass) {
    this.kids.add_za3rmp$(React.createElement(jsclass));
  };
  D.prototype.d_3d1yi4$ = function (el) {
    this.kids.add_za3rmp$(el);
  };
  D.prototype.d_nd53m$ = function (c) {
    this.kids.add_za3rmp$(c);
  };
  D.prototype.ds_rtpmmf$ = function (list) {
    this.kids.add_za3rmp$(Kotlin.kotlin.collections.copyToArray(list));
  };
  D.prototype.ds_9mqe4v$ = function (array) {
    this.kids.add_za3rmp$(array);
  };
  D.prototype.text_61zpoe$ = function (string) {
    this.kids.add_za3rmp$(string);
  };
  D.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'D',
    baseClasses: []
  };
  function d$lambda() {
  }
  function d(tag, attrs, block) {
    var tmp$;
    if (attrs === void 0)
      attrs = null;
    if (block === void 0)
      block = d$lambda;
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    block.call(root);
    var tmp$_0 = (tmp$ = React).createElement;
    var tmp$_1 = tmp$;
    var tmp$_2 = [root.a, root.b];
    var tmp$_3 = tmp$_2.concat.bind(tmp$_2);
    var $receiver = root.kids;
    return tmp$_0.apply(tmp$_1, tmp$_3(Kotlin.kotlin.collections.copyToArray($receiver)));
  }
  function node$lambda() {
  }
  function node(tag, attrs, block) {
    var tmp$;
    if (attrs === void 0)
      attrs = null;
    if (block === void 0)
      block = node$lambda;
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    block.call(root);
    var tmp$_0 = (tmp$ = React).createElement;
    var tmp$_1 = tmp$;
    var tmp$_2 = [root.a, root.b];
    var tmp$_3 = tmp$_2.concat.bind(tmp$_2);
    var $receiver = root.kids;
    return tmp$_0.apply(tmp$_1, tmp$_3(Kotlin.kotlin.collections.copyToArray($receiver)));
  }
  function d_0(tag, attrs, text) {
    if (attrs === void 0)
      attrs = null;
    if (text === void 0)
      text = '';
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    return React.createElement(root.a, root.b, [text]);
  }
  function node_0(tag, attrs, text) {
    if (attrs === void 0)
      attrs = null;
    if (text === void 0)
      text = '';
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    return React.createElement(root.a, root.b, [text]);
  }
  function node_1(tag, attrs, children) {
    if (attrs === void 0)
      attrs = null;
    if (children === void 0)
      children = emptyList();
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    var tmp$ = root.a;
    var tmp$_0 = root.b;
    var $receiver = children;
    return React.createElement(tmp$, tmp$_0, Kotlin.kotlin.collections.copyToArray($receiver));
  }
  function node_2(tag, attrs, component) {
    if (attrs === void 0)
      attrs = null;
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    return React.createElement(root.a, root.b, component);
  }
  function Store() {
    this.backgroundColor = 'white';
    this.now = new Date();
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
  function BackgroundPicker$render$lambda$lambda() {
    this.text_61zpoe$('BackgroundPicker');
  }
  function BackgroundPicker$render$lambda$lambda$lambda$lambda$lambda(closure$color) {
    return function () {
      store.backgroundColor = closure$color;
    };
  }
  function BackgroundPicker$render$lambda$lambda$lambda$lambda(closure$isSelected, closure$color) {
    return function () {
      if (closure$isSelected) {
        this.d_kj89xv$('span', mapOf(to('dangerouslySetInnerHTML', mapOf(to('__html', '&rarr; ')))));
      }
      var tmp$ = this.d_16rng9$.bind(this);
      var tmp$_0 = to('className', 'btn btn-default');
      var $receiver = new Css(closure$color, void 0, void 0, Cursor$pointer_getInstance());
      if (closure$isSelected) {
        $receiver.border = 0;
        $receiver.backgroundColor = 'inherit';
        $receiver.color = 'black';
      }
      tmp$('button', mapOf_0([tmp$_0, to('style', $receiver), to('onClick', mobx.action(BackgroundPicker$render$lambda$lambda$lambda$lambda$lambda(closure$color))), to('disabled', closure$isSelected)]), [closure$color]);
    };
  }
  function BackgroundPicker$render$lambda$lambda_0() {
    var tmp$;
    tmp$ = BackgroundPicker$Companion_getInstance().colors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var isSelected = Kotlin.equals(store.backgroundColor, element);
      this.d_kj89xv$('li', void 0, BackgroundPicker$render$lambda$lambda$lambda$lambda(isSelected, element));
    }
  }
  function BackgroundPicker$render$lambda() {
    this.d_kj89xv$('h3', void 0, BackgroundPicker$render$lambda$lambda);
    this.d_kj89xv$('ul', mapOf(to('className', 'list-inline')), BackgroundPicker$render$lambda$lambda_0);
  }
  BackgroundPicker.prototype.render = function () {
    return d('div', void 0, BackgroundPicker$render$lambda);
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
  function Clock$render$lambda$lambda() {
    this.text_61zpoe$('Clock');
  }
  function Clock$render$lambda$lambda_0() {
    this.text_61zpoe$('Milliseconds since epoch: ');
    this.d_16rng9$('code', null, [store.millisSinceEpoch.toString()]);
    this.text_61zpoe$(' (@computed property)');
  }
  function Clock$render$lambda$lambda_1() {
    this.text_61zpoe$('The time is ');
    this.d_16rng9$('code', null, [store.now.toString()]);
    this.text_61zpoe$(' (@observable property) ');
  }
  function Clock$render$lambda$lambda_2() {
    store.now = new Date();
  }
  function Clock$render$lambda() {
    this.d_kj89xv$('h3', void 0, Clock$render$lambda$lambda);
    this.d_kj89xv$('p', void 0, Clock$render$lambda$lambda_0);
    this.d_kj89xv$('span', void 0, Clock$render$lambda$lambda_1);
    this.d_16rng9$('button', mapOf_0([to('onClick', mobx.action(Clock$render$lambda$lambda_2)), to('className', 'btn btn-default')]), ['Update to now']);
  }
  Clock.prototype.render = function () {
    var now = store.now;
    return d('div', void 0, Clock$render$lambda);
  };
  Clock.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Clock',
    baseClasses: []
  };
  function TabName(name, ordinal, prettyName) {
    Enum.call(this);
    this.prettyName = prettyName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TabName_initFields() {
    TabName_initFields = function () {
    };
    TabName$TabA_instance = new TabName('TabA', 0, 'Tab A');
    TabName$TabB_instance = new TabName('TabB', 1, 'Tab B');
    TabName$TabC_instance = new TabName('TabC', 2, 'Tab C');
  }
  var TabName$TabA_instance;
  function TabName$TabA_getInstance() {
    TabName_initFields();
    return TabName$TabA_instance;
  }
  var TabName$TabB_instance;
  function TabName$TabB_getInstance() {
    TabName_initFields();
    return TabName$TabB_instance;
  }
  var TabName$TabC_instance;
  function TabName$TabC_getInstance() {
    TabName_initFields();
    return TabName$TabC_instance;
  }
  TabName.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabName',
    baseClasses: [Enum]
  };
  function TabName$values() {
    return [TabName$TabA_getInstance(), TabName$TabB_getInstance(), TabName$TabC_getInstance()];
  }
  TabName.values = TabName$values;
  function TabName$valueOf(name) {
    switch (name) {
      case 'TabA':
        return TabName$TabA_getInstance();
      case 'TabB':
        return TabName$TabB_getInstance();
      case 'TabC':
        return TabName$TabC_getInstance();
      default:Kotlin.throwISE('No enum constant com.danneu.kobx.TabName.' + name);
    }
  }
  TabName.valueOf_61zpoe$ = TabName$valueOf;
  function TabA() {
    React.Component.call(this);
  }
  TabA.prototype.render = function () {
    return d_0('div', null, 'TabA Component');
  };
  TabA.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabA',
    baseClasses: []
  };
  function TabB() {
    React.Component.call(this);
  }
  TabB.prototype.render = function () {
    return d_0('div', null, 'TabB Component');
  };
  TabB.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabB',
    baseClasses: []
  };
  function TabC() {
    React.Component.call(this);
  }
  TabC.prototype.render = function () {
    return d_0('div', null, 'TabC Component');
  };
  TabC.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'TabC',
    baseClasses: []
  };
  function Tabs() {
    React.Component.call(this);
    mobxReact.observer(this);
    this.selectedTab = mobx.observable(TabName$TabA_getInstance());
  }
  function Tabs$renderTab$lambda(this$Tabs, closure$tab) {
    return function () {
      this$Tabs.selectedTab.set(closure$tab);
    };
  }
  function Tabs$renderTab$lambda_0(closure$tab) {
    return function () {
      this.text_61zpoe$(closure$tab.prettyName);
    };
  }
  Tabs.prototype.renderTab_uixppc$ = function (tab) {
    return d('a', mapOf_0([to('onClick', mobx.action(Tabs$renderTab$lambda(this, tab))), to('href', 'javascript:void(0)')]), Tabs$renderTab$lambda_0(tab));
  };
  function Tabs$render$lambda$lambda() {
    this.text_61zpoe$('TabList');
  }
  function Tabs$render$lambda$lambda$lambda$lambda(closure$tab, this$Tabs) {
    return function () {
      this.d_3d1yi4$(this$Tabs.renderTab_uixppc$(closure$tab));
    };
  }
  function Tabs$render$lambda$lambda_0(this$Tabs) {
    return function () {
      var $receiver = TabName$values();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var this$Tabs_0 = this$Tabs;
        var isSelected = element === this$Tabs_0.selectedTab.get();
        this.d_kj89xv$('li', mapOf(to('className', isSelected ? 'active' : '')), Tabs$render$lambda$lambda$lambda$lambda(element, this$Tabs_0));
      }
    };
  }
  function Tabs$render$lambda(this$Tabs) {
    return function () {
      var tmp$;
      this.d_kj89xv$('h3', void 0, Tabs$render$lambda$lambda);
      this.d_kj89xv$('ul', mapOf(to('className', 'nav nav-tabs')), Tabs$render$lambda$lambda_0(this$Tabs));
      tmp$ = this$Tabs.selectedTab.get();
      if (Kotlin.equals(tmp$, TabName$TabA_getInstance()))
        this.d_nxr5h6$(get_js(Kotlin.getKClass(TabA)));
      else if (Kotlin.equals(tmp$, TabName$TabB_getInstance()))
        this.d_nxr5h6$(get_js(Kotlin.getKClass(TabB)));
      else if (Kotlin.equals(tmp$, TabName$TabC_getInstance()))
        this.d_nxr5h6$(get_js(Kotlin.getKClass(TabC)));
    };
  }
  Tabs.prototype.render = function () {
    return d('div', void 0, Tabs$render$lambda(this));
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
    this.key = (tmp$.key = tmp$.key + 1, tmp$.key);
  }
  Counter.prototype.increment = function () {
    this.count.set(this.count.get() + 1);
  };
  Counter.prototype.decrement = function () {
    this.count.set(this.count.get() - 1);
  };
  function Counter$render$lambda$lambda(this$Counter) {
    return function () {
      this$Counter.decrement();
    };
  }
  function Counter$render$lambda$lambda_0(this$Counter) {
    return function () {
      this$Counter.increment();
    };
  }
  function Counter$render$lambda(this$Counter, closure$value) {
    return function () {
      this.d_16rng9$('button', mapOf_0([to('onClick', mobx.action(Counter$render$lambda$lambda(this$Counter))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['-1']);
      this.text_61zpoe$(' ' + closure$value.toString() + ' ');
      this.d_16rng9$('button', mapOf_0([to('onClick', mobx.action(Counter$render$lambda$lambda_0(this$Counter))), to('className', 'btn btn-xs btn-default'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '50px'))]), ['+1']);
    };
  }
  Counter.prototype.render = function () {
    Kotlin.println('[Counter#render] count = ' + this.count.get() + ', key = ' + this.key);
    var value = this.count.get();
    return d('div', mapOf(to('style', new Css(void 0, void 0, void 0, void 0, 'inline-block'))), Counter$render$lambda(this, value));
  };
  Counter.prototype.componentDidMount = function () {
    Kotlin.println('Counter ' + this.key + ' did mount');
  };
  function Counter$Companion() {
    Counter$Companion_instance = this;
    this.key = 0;
  }
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
  function CounterList() {
    React.Component.call(this);
    mobxReact.observer(this);
    var list = listOf_0(new Counter());
    this.counters = mobx.observable(Kotlin.kotlin.collections.copyToArray(list));
  }
  CounterList.prototype.addCounter = function () {
    this.counters.push(new Counter());
  };
  function CounterList$render$lambda$lambda$lambda(this$CounterList) {
    return function () {
      this.text_61zpoe$(' Counters: ' + this$CounterList.counters.length);
    };
  }
  function CounterList$render$lambda$lambda(this$CounterList) {
    return function () {
      this.text_61zpoe$('CounterList');
      this.d_kj89xv$('small', void 0, CounterList$render$lambda$lambda$lambda(this$CounterList));
    };
  }
  function CounterList$render$lambda$lambda$lambda_0(this$CounterList) {
    return function () {
      this$CounterList.addCounter();
    };
  }
  function CounterList$render$lambda$lambda_0(this$CounterList) {
    return function () {
      this.d_16rng9$('button', mapOf_0([to('onClick', mobx.action(CounterList$render$lambda$lambda$lambda_0(this$CounterList))), to('className', 'btn btn-success')]), ['Add Counter']);
    };
  }
  function CounterList$render$lambda$lambda$lambda$lambda$lambda(this$CounterList, closure$counter) {
    return function () {
      this$CounterList.counters.remove(closure$counter);
    };
  }
  function CounterList$render$lambda$lambda$lambda$lambda(this$CounterList, closure$counter) {
    return function () {
      this.d_16rng9$('button', mapOf_0([to('onClick', mobx.action(CounterList$render$lambda$lambda$lambda$lambda$lambda(this$CounterList, closure$counter))), to('className', 'btn btn-danger btn-xs'), to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, '20px'))]), ['Delete']);
      this.text_61zpoe$(' ');
      this.d_3d1yi4$(closure$counter.render());
    };
  }
  function CounterList$render$lambda$lambda$lambda_1(this$CounterList) {
    return function (counter) {
      return node('li', mapOf_0([to('key', counter.key), to('className', 'list-group-item')]), CounterList$render$lambda$lambda$lambda$lambda(this$CounterList, counter));
    };
  }
  function CounterList$render$lambda$lambda_1(this$CounterList) {
    return function () {
      this.ds_9mqe4v$(this$CounterList.counters.map(CounterList$render$lambda$lambda$lambda_1(this$CounterList)));
    };
  }
  function CounterList$render$lambda(this$CounterList) {
    return function () {
      this.d_kj89xv$('h3', void 0, CounterList$render$lambda$lambda(this$CounterList));
      this.d_kj89xv$('p', void 0, CounterList$render$lambda$lambda_0(this$CounterList));
      this.d_kj89xv$('ul', mapOf(to('className', 'list-group')), CounterList$render$lambda$lambda_1(this$CounterList));
    };
  }
  CounterList.prototype.render = function () {
    return d('div', void 0, CounterList$render$lambda(this));
  };
  CounterList.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'CounterList',
    baseClasses: []
  };
  function App() {
    React.Component.call(this);
    mobxReact.observer(this);
  }
  function App$render$lambda$lambda$lambda() {
    this.text_61zpoe$('Source: ');
    this.d_16rng9$('a', mapOf(to('href', 'https://github.com/danneu/kobx')), ['github.com/danneu/kobx']);
    this.text_61zpoe$(' \u2013 A demonstration of ');
    this.d_16rng9$('a', mapOf_0([to('href', 'https://github.com/mobxjs/mobx'), to('target', '_blank')]), ['MobX']);
    this.text_61zpoe$(' + ');
    this.d_16rng9$('a', mapOf_0([to('href', 'https://facebook.github.io/react/'), to('target', '_blank')]), ['React']);
    this.text_61zpoe$(' components written in Kotlin, compiled to Javascript');
  }
  function App$render$lambda$lambda() {
    this.d_kj89xv$('p', void 0, App$render$lambda$lambda$lambda);
  }
  function App$render$lambda() {
    this.d_kj89xv$('div', mapOf(to('style', new Css(void 0, void 0, void 0, void 0, void 0, void 0, void 0, '25px', void 0, 'right'))), App$render$lambda$lambda);
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(BackgroundPicker)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(Clock)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(Tabs)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(CounterList)));
  }
  App.prototype.render = function () {
    var style = new Css(store.backgroundColor, void 0, void 0, void 0, void 0, void 0, void 0, void 0, '20px');
    return d('div', mapOf(to('style', style)), App$render$lambda);
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
  var observable = Kotlin.defineInlineFunction('kobx.com.danneu.kobx.mobx.observable_rtpmmf$', function (observable$A_0, isA, list) {
    return mobx.observable(Kotlin.kotlin.collections.copyToArray(list));
  });
  function Observable() {
  }
  Observable.prototype.activate = function () {
    {
      var self = this;
      var obj = Object.getOwnPropertyDescriptors(this);
      Object.keys(obj).forEach(function (key) {
        var mapping = {};
        mapping[key] = obj[key].value;
        console.log('key is: "', key, '" , value is:', obj[key].value, 'mapping is', mapping);
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
  function ReactElement() {
  }
  ReactElement.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'ReactElement',
    baseClasses: []
  };
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
  package$kobx.D = D;
  package$kobx.d_kj89xv$ = d;
  package$kobx.node_kj89xv$ = node;
  package$kobx.d_oicq7u$ = d_0;
  package$kobx.node_oicq7u$ = node_0;
  package$kobx.node_h93uci$ = node_1;
  package$kobx.node_gm0inq$ = node_2;
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
  Object.defineProperty(TabName, 'TabA', {
    get: TabName$TabA_getInstance
  });
  Object.defineProperty(TabName, 'TabB', {
    get: TabName$TabB_getInstance
  });
  Object.defineProperty(TabName, 'TabC', {
    get: TabName$TabC_getInstance
  });
  package$kobx.TabName = TabName;
  package$kobx.TabA = TabA;
  package$kobx.TabB = TabB;
  package$kobx.TabC = TabC;
  package$kobx.Tabs = Tabs;
  Object.defineProperty(Counter, 'Companion', {
    get: Counter$Companion_getInstance
  });
  package$kobx.Counter = Counter;
  package$kobx.CounterList = CounterList;
  package$kobx.App = App;
  package$kobx.main_kand9s$ = main;
  var package$mobx = package$kobx.mobx || (package$kobx.mobx = {});
  package$mobx.observable_rtpmmf$ = observable;
  package$mobx.Observable = Observable;
  var package$react = package$kobx.react || (package$kobx.react = {});
  package$react.ReactElement = ReactElement;
  package$react.toJsObject_efxzmg$ = toJsObject;
  store = new Store();
  Kotlin.defineModule('kobx', _);
  main([]);
  return _;
}(typeof kobx === 'undefined' ? {} : kobx, kotlin);
