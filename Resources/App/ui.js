//ui.js
//tabGroupを作ったりwindowを作ったりする

// UI処理
(function() {
    // ネームスペース定義
    //
    //App.ui = {};//　→　すでにapp.jsで定義してある
    
    //tab名、Window名を定義
    tabname1 = 'table1';
    tabname2 = 'table2';
    tabname3 = 'table3';
    
    //タブ用のWindowを生成
    //ローカルjs内で扱うときだけのfunctionならApp.funcは不要で同一ファイル内では呼び出せる
    exports.createAppWindow = function( _tabname ){
		var win = Ti.UI.createWindow();
		
		//tab1の処理
    	if(_tabname == 'table1'){
	    	win.title = 'テーブルビューのテスト1(ノーマルなTableView)';
			win.backgroundColor = '#933';
			
			//tableViewの処理
			var tableView = App.createTable1();
			win.add(tableView);
	    }else if(_tabname == 'table2'){
	    	win.title = 'テーブルビューのテスト2(ノーマルなTableView)';
			win.backgroundColor = '#933';
			
			//tableViewの処理
			var tableView = App.createTable1();
			win.add(tableView);
	    }else if(_tabname == 'table3'){
	    	win.title = 'テーブルビューのテスト3(ノーマルなTableView)';
			win.backgroundColor = '#933';
			
			//tableViewの処理
			var tableView = App.createTable1();
			win.add(tableView);
	    }
	    
	  	return win;
    	
    };

    exports.createAppsTabGroup = function(){
    	//tabGroupを用意
    	var tabGroup = Ti.UI.createTabGroup();
    	
    	//tab用のWindowを用意
    	var table1win = App.ui.createAppWindow(tabname1);
    	var table2win = App.ui.createAppWindow(tabname2);
    	var table3win = App.ui.createAppWindow(tabname3);
    	
    	//tabを用意
		App.ui.tab1 = Ti.UI.createTab({
			title: tabname1,
			window:table1win});
		App.ui.tab2 = Ti.UI.createTab({
			title: tabname2,
			window:table2win});
		App.ui.tab3 = Ti.UI.createTab({
			title: tabname3,
			window:table3win});
    	
    	//tabGroupにaddする
    	tabGroup.addTab(App.ui.tab1);
		tabGroup.addTab(App.ui.tab2);
		tabGroup.addTab(App.ui.tab3);
    	
    	return tabGroup;
    	
    };
 })();
