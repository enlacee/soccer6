Ext.define('MyApp.view.Main', {
	id: 'mainBody',
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [
		'Ext.TitleBar',
		'MyApp.view.ViewTheButton'
	],
	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				xtype: 'panel',
				title: 'Equipo 1',
				iconCls: 'team',
				ui: 'plain',
				scrollable: false,
				layout: 'fit',
				renderTo: 'one',
				items:[
					{
						xtype: 'viewthebutton'
					}
				]
			},
			{
				xtype: 'panel',
				title: 'Equipo 2',
				iconCls: 'team',
				ui: 'plain',
				scrollable: false,
				layout: 'fit',
				renderTo: 'one',
				items:[
					{
						xtype: 'viewthebutton'
					}
				]
			},
			{
				xtype: 'panel',
				title: 'Equipo 3',
				iconCls: 'team',
				ui: 'plain',
				scrollable: false,
				layout: 'fit',
				renderTo: 'one',
				items:[
					{
						xtype: 'viewthebutton'
					}
				]
			}
		]
	}
});
