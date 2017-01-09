if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kobx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kobx'.");
}
var kobx = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_eg9ybj$;
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
  function Css(backgroundColor, border, color, cursor, width, height) {
    if (backgroundColor === void 0)
      backgroundColor = null;
    if (border === void 0)
      border = null;
    if (color === void 0)
      color = null;
    if (cursor === void 0)
      cursor = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    this.backgroundColor = backgroundColor;
    this.border = border;
    this.color = color;
    this.cursor = cursor;
    this.width = width;
    this.height = height;
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
  D.prototype.ds_727x2e$ = function (list) {
    this.kids.add_za3rmp$(Kotlin.kotlin.collections.copyToArray(list));
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
  function d_0(tag, attrs, text) {
    if (attrs === void 0)
      attrs = null;
    if (text === void 0)
      text = '';
    var root = new D(tag, attrs != null ? toJsObject(attrs) : null, []);
    return React.createElement(root.a, root.b, [text]);
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
      var $receiver = new Css(closure$color, void 0, void 0, Cursor$pointer_getInstance());
      if (closure$isSelected) {
        $receiver.border = 0;
        $receiver.backgroundColor = 'inherit';
        $receiver.color = 'black';
      }
      tmp$('button', mapOf_0([to('style', $receiver), to('onClick', mobx.action(BackgroundPicker$render$lambda$lambda$lambda$lambda$lambda(closure$color))), to('disabled', closure$isSelected)]), [closure$color]);
    };
  }
  function BackgroundPicker$render$lambda$lambda() {
    var tmp$;
    tmp$ = BackgroundPicker$Companion_getInstance().colors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var isSelected = Kotlin.equals(store.backgroundColor, element);
      this.d_kj89xv$('li', void 0, BackgroundPicker$render$lambda$lambda$lambda$lambda(isSelected, element));
    }
  }
  function BackgroundPicker$render$lambda() {
    this.d_kj89xv$('ul', void 0, BackgroundPicker$render$lambda$lambda);
  }
  BackgroundPicker.prototype.render = function () {
    Kotlin.println('render');
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
    store.now = new Date();
  }
  function Clock$render$lambda(closure$now) {
    return function () {
      this.d_16rng9$('p', null, ['Since epoch: ' + store.millisSinceEpoch]);
      this.d_16rng9$('p', mapOf(to('onClick', mobx.action(Clock$render$lambda$lambda))), ['time is ' + closure$now]);
    };
  }
  Clock.prototype.render = function () {
    var now = store.now;
    return d('div', void 0, Clock$render$lambda(now));
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
  function Tabs$renderTab$lambda(closure$tab, closure$isSelected) {
    return function () {
      this.text_61zpoe$(closure$tab.prettyName);
      if (closure$isSelected) {
        this.text_61zpoe$(' (Selected)');
      }
    };
  }
  Tabs.prototype.renderTab_3cf6xz$ = function (tab, isSelected) {
    return d('div', void 0, Tabs$renderTab$lambda(tab, isSelected));
  };
  function Tabs$render$lambda$lambda$lambda$lambda(this$Tabs, closure$tab) {
    return function () {
      this$Tabs.selectedTab.set(closure$tab);
    };
  }
  function Tabs$render$lambda$lambda$lambda$lambda_0(closure$tab, this$Tabs) {
    return function () {
      this.d_3d1yi4$(this$Tabs.renderTab_3cf6xz$(closure$tab, closure$tab === this$Tabs.selectedTab.get()));
    };
  }
  function Tabs$render$lambda$lambda(this$Tabs) {
    return function () {
      var $receiver = TabName$values();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var this$Tabs_0 = this$Tabs;
        this.d_kj89xv$('li', mapOf_0([to('style', new Css(void 0, void 0, void 0, Cursor$pointer_getInstance())), to('onClick', mobx.action(Tabs$render$lambda$lambda$lambda$lambda(this$Tabs_0, element)))]), Tabs$render$lambda$lambda$lambda$lambda_0(element, this$Tabs_0));
      }
    };
  }
  function Tabs$render$lambda(this$Tabs) {
    return function () {
      var tmp$;
      this.d_kj89xv$('ul', void 0, Tabs$render$lambda$lambda(this$Tabs));
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
    Kotlin.println(this.count.get());
  };
  Counter.prototype.decrement = function () {
    this.count.set(this.count.get() - 1);
    Kotlin.println(this.count.get());
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
      this.d_16rng9$('button', mapOf(to('onClick', mobx.action(Counter$render$lambda$lambda(this$Counter)))), ['-']);
      this.text_61zpoe$(closure$value.toString());
      this.d_16rng9$('button', mapOf(to('onClick', mobx.action(Counter$render$lambda$lambda_0(this$Counter)))), ['+']);
    };
  }
  Counter.prototype.render = function () {
    Kotlin.println('[Counter#render] count = ' + this.count.get());
    var value = this.count.get();
    return d('div', void 0, Counter$render$lambda(this, value));
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
  function CounterList$render$lambda$lambda_0(this$CounterList) {
    return function () {
      this$CounterList.addCounter();
    };
  }
  function CounterList$render$lambda$lambda$lambda$lambda$lambda(this$CounterList, closure$counter) {
    return function () {
      this$CounterList.counters.remove(closure$counter);
    };
  }
  function CounterList$render$lambda$lambda$lambda$lambda(closure$counter, this$CounterList) {
    return function () {
      this.d_3d1yi4$(closure$counter.render());
      this.d_16rng9$('button', mapOf(to('onClick', mobx.action(CounterList$render$lambda$lambda$lambda$lambda$lambda(this$CounterList, closure$counter)))), ['Delete']);
    };
  }
  function CounterList$render$lambda$lambda$lambda_0(this$CounterList, this$) {
    return function (counter) {
      this$.d_kj89xv$('li', void 0, CounterList$render$lambda$lambda$lambda$lambda(counter, this$CounterList));
    };
  }
  function CounterList$render$lambda$lambda_1(this$CounterList) {
    return function () {
      this$CounterList.counters.forEach(CounterList$render$lambda$lambda$lambda_0(this$CounterList, this));
    };
  }
  function CounterList$render$lambda(this$CounterList) {
    return function () {
      this.d_kj89xv$('h3', void 0, CounterList$render$lambda$lambda(this$CounterList));
      this.d_16rng9$('button', mapOf(to('onClick', mobx.action(CounterList$render$lambda$lambda_0(this$CounterList)))), ['Add Counter']);
      this.d_kj89xv$('ul', void 0, CounterList$render$lambda$lambda_1(this$CounterList));
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
  function App$render$lambda() {
    this.d_nxr5h6$(get_js(Kotlin.getKClass(BackgroundPicker)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(Clock)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(Tabs)));
    this.d_kj89xv$('hr');
    this.d_nxr5h6$(get_js(Kotlin.getKClass(CounterList)));
  }
  App.prototype.render = function () {
    return d('div', mapOf(to('style', new Css(store.backgroundColor))), App$render$lambda);
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
  package$kobx.d_oicq7u$ = d_0;
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
