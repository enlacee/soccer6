Ext.define('MyApp.view.ViewThePopUp', {
	extend: 'Ext.Panel',
	alias: 'widget.Viewthepopup',
	xtype: 'viewthepopup',

	config: {
		centered: true,
		modal: true,
		hideOnMaskTap: true,
		width:'90%',

		refButtonId: false,

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
									// var myForm = Ext.ComponentQuery.query('formpanel')[0];
									var refForm = this.up('formpanel');
									var data = refForm.getValues();
									var refPopUp = this.up('viewthepopup');
									var refButton = this.up('viewthebutton');
									console.log('viewthepopup', refPopUp.getCls());
									console.log('viewthepopup.getRefButtonId', refPopUp.getRefButtonId());


									if (data.firstName.length > 0) {
										data.id = refPopUp.getRefButtonId();

										Ext.Ajax.request({
											url : jsVars.ajaxUrl + '/appview/user',
											params: data,
											method : "POST",
											success : function( response, request ) {
												//console.log("success -- response: "+response.responseText);
												refPopUp.hide();
												console.log('refPopUp', refPopUp);
												console.log('refButton', refButton);
												console.log('refForm', refForm);

												console.log(refPopUp.getId());
											},
											failure : function( response, request ) {
												//console.log("failed -- response: "+response.responseText);
											}
										});
									} else {
										Ext.Msg.alert('Error!', 'Ingrese el nombre del jugador');
									}
								}
							}
						]
					}
				],
			}
		]
	}
});
