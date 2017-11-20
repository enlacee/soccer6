Ext.define('MyApp.view.ViewTheButton', {
	extend: 'Ext.tab.Panel',
	xtype: 'viewthebutton',
	config: {
		items: [
			{
				xtype:"panel",
				title:"Equipo",
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
									{
										xtype: 'button',
										// text: 'Nombre',
										iconCls: 'user',
										// iconAlign: 'right',
										flex: 1,
										margin: '0 1 2 0',
										cls: 'payReservation',
										ui: 'black',

									},
									{
										xtype: 'button',
										text: '2',
										flex: 1,
										margin: '0 0 2 1',
										cls: 'payReservation',
										ui: 'black'
									},
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
									{
										xtype: 'button',
										text: '3',
										flex: 1,
										margin: '0 1 2 0',
										ui: 'black'
									},
									{
										xtype: 'button',
										text: '4',
										flex: 1,
										margin: '0 0 2 1',
										ui: 'black'
									},
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
									{
										xtype: 'button',
										text: '5',
										flex: 1,
										margin: '0 1 2 0',
										ui: 'black'
									},
									{
										xtype: 'button',
										text: '6',
										flex: 1,
										margin: '0 0 2 1',
										ui: 'black'
									},
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
										// { xtype: 'button', text: 'Pagar todos', flex: 1 },
									]
								},
						]
					},
				]
			}
		]
	}
});
