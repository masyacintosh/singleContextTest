//シングルコンテキストを理解する
Titanium.UI.setBackgroundColor('#000');
//tableViewTestで挑戦

//グローバルな変数を定義
var App = {};
App.ui = require('App/ui');
App.table = require('App/table');
App.hoge = require('App/hoge');

(function() {

//tabGroupを用意
App.tabGroup = App.ui.createAppsTabGroup();
alert(App.tabGroup);

App.tabGroup.open();
//App.createHoge('abc');

//var table1win = Ti.UI.createWindow({url:'table1.js'});
//var table2win = Ti.UI.createWindow({url:'table2.js'});
//var table3win = Ti.UI.createWindow({url:'table3.js'});
})();
