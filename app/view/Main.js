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

				styleHtmlContent: true,
				scrollable: false,

// layout: {
//         type: 'hbox',
//         align: 'start',
//         pack: 'start'
//     },

				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Equipo 1'
					},
					{
						xtype: 'container',
						// html: 'Pack: ',
						style: 'background-color:red',
						docked: 'top',
						// fullscreen: true,
						layout: 'hbox',
						items: [
							{ xtype: 'button', text: 'Btn 1', margin: 2, flex: 1 },
							{ xtype: 'button', text: 'Btn 2', margin: 2 , flex: 1 },
						]
					},
					{
						xtype: 'container',
						style: 'background-color:blue',
						docked: 'top',
						layout: 'hbox',
						items: [
							{ xtype: 'button', text: 'Btn 1', margin: 2, flex: 1 },
							{ xtype: 'button', text: 'Btn 2', margin: 2 , flex: 1 },
						]
					},
					{
						xtype: 'container',
						style: 'background-color:blue',
						docked: 'top',
						layout: 'hbox',
						items: [
							{ xtype: 'button', text: 'Btn 1', margin: 2, flex: 1},
							{ xtype: 'button', text: 'Btn 2', margin: 2 , flex: 1},
						]
					},

					// { xtype: 'button', text: 'Btn 1', margin: 2, docked: 'top', flex: 1},
					// { xtype: 'button', text: 'Btn 1', margin: 3, height: 50, flex: 1, docked: 'top', style: 'color: yellow;background-color: #5E99CC;'},
					// { xtype: 'button', text: 'Btn 2', margin: 3, height: 50, flex: 1, docked: 'top'},
					// { xtype: 'button', text: 'Btn 3', margin: 3, height: 50, flex: 1, docked: 'top'}
				]
			},
			{
				title: 'Equipo 2',
				iconCls: 'team',
				ui: 'plain',

				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Getting Started'
					},
					{
						xtype: 'video',
						url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
						posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
					}
				]
			},
			{
				title: 'Equipo 3',
				iconCls: 'team',
				ui: 'plain',

				items: [
					{
						docked: 'bottom',
						xtype: 'titlebar',
						title: 'hi new'
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
