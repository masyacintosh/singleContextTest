//table.js
//tableViewの処理

(function(){
	
	App.createTable1 = function(){
		//tableViewに格納するテストデータ
		var rows = [
		    {title:'Row 1', hasChild:true},
		    {title:'Row 2', hasDetail:true},
		    {title:'Row 3', hasCheck:true},
		    {title:'Row 4'}
		];
		
		//tableViewを作る
		var tableView = Ti.UI.createTableView({
			data:rows
		});
		
		//click
		tableView.addEventListener('click',function(e){
			alert(e.rowData.title);
		});
		
		return tableView;
	};
})();
