Ext.define('MyApp.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [
		'Ext.TitleBar',
		'Ext.Video'
	],
	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				title: 'E 1',
				iconCls: 'team',
				ui: 'plain',
				scrollable: false,
				layout: 'fit',
				renderTo: 'one',
				items:[
					{
						xtype:"tabpanel",
						activeTab:0,
						items:[
							{
							xtype:"panel",
							title:"Equipo 1",
							layout: 'vbox',
							margin: '2',
							items:[
							{
								flex: 2,
								items: [
									{
										layout: 'hbox',
										height: '100%',
										items: [
											{ xtype: 'button', iconCls: 'user', flex: 1, margin: '0 1 2 0'},
											{ xtype: 'button', text: '2', flex: 1, margin: '0 0 2 1'},
										]
									}
								]
							},
							{
								flex: 2,
								items: [
									{
										layout: 'hbox',
										height: '100%',
										items: [
											{ xtype: 'button', text: '3', flex: 1, margin: '0 1 2 0'},
											{ xtype: 'button', text: '4', flex: 1, margin: '0 0 2 1'},
										]
									}
								]
							},
							{
								flex: 2,
								items: [
									{
										layout: 'hbox',
										height: '100%',
										items: [
											{ xtype: 'button', text: '5', flex: 1, margin: '0 1 2 0'},
											{ xtype: 'button', text: '6', flex: 1, margin: '0 0 2 1'},
										]
									}
								]
							},
							{
								flex: 1,
								items: [
										{
											xtype: 'container',
											layout: {
												type: 'hbox',
												align: 'stretch',
												pack: 'start'
											},
											height: '100%',
											items: [
												{ xtype: 'button', text: 'Pagar todos', flex: 1 },
											]
										},
								]
							},
							]
							},
							// {
							// 	xtype:"panel",
							// 	title:"Two"
							// },
							// {
							// 	xtype:"panel",
							// 	title:"Three"
							// }
						]
					}
				]
			},
			{
				title: 'E 2',
				iconCls: 'team',
				ui: 'plain',
				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Equipo 2'
					},
					{
						xtype: 'video',
						url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
						posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
					}
				]
			},
			{
				title: 'E 3',
				iconCls: 'team',
				ui: 'plain',

				items: [
					{
						docked: 'bottom',
						xtype: 'titlebar',
						title: 'Equipo 3'
					},
					{
						xtype: 'video',
						url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
						posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
					}
				]
			}
		]
	}
});
