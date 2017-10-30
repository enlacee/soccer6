Ext.define('MyApp.view.ViewThePopUp', {
	extend: 'Ext.Panel',
	alias: 'widget.Viewthepopup',
	xtype: 'viewthepopup',

	config: {
		centered: true,
		modal: true,
		hideOnMaskTap: true,
		width:'90%',
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Jugador'
			},
			{
				xtype: 'formpanel',
				id: 'MyForm',
				name: 'MyForm',
				title: 'User Form',
				height: 280,
				// url: 'save-form.php',
				url: 'add_user',
				items: [
					{
						xtype: 'fieldset',
						items: [
							{
								xtype: 'textfield',
								name: 'firstName',
								id: 'firstName',
								allowBlank: false,
								vtype: 'alpha',
								placeHolder: 'Nombre',
								styleHtmlCls:true
							},
							{
								xtype: 'fieldset',
								title: 'Confirmado: ',
								items: [
									{
										xtype: 'radiofield',
										name : 'statusPayment',
										value: 0,
										label: 'No',
										checked: true,
									},
									{
										xtype: 'radiofield',
										name : 'statusPayment',
										value: 1,
										label: 'Si',
									},
								]
							},
							{
								xtype: 'button',
								text: 'Guardar',
								ui: 'confirm',
								handler: function () {
									var myForm = Ext.ComponentQuery.query('formpanel')[0];
									console.log( myForm.getValues() );
								}
							}
						]
					}
				],
			}
		]
	}
});
