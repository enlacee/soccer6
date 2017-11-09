Ext.define('MyApp.view.ViewThePopUp', {
	extend: 'Ext.Panel',
	alias: 'widget.Viewthepopup',
	xtype: 'viewthepopup',

	config: {
		centered: true,
		modal: true,
		hideOnMaskTap: true,
		width:'90%',

		refButton: false,
		refUserModel: false,

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
				url: 'save-form.php',
				// listener: {
				// 	'> field': {
				// 		change: function(field, newValue, oldValue){
				// 			var refPopUp = this.up('viewthepopup');
				// 			var model = getRefUserModel();
				// 			model.set(field.getFullName(), newValue);
				// 		}
				// 	}
				// },
				items: [
					{
						xtype: 'fieldset',
						items: [
							{
								xtype: 'hiddenfield',
								name: 'id',
								allowBlank: false,
								vtype: 'alpha',
							},
							{
								xtype: 'textfield',
								name: 'fullName',
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
										name : 'paid',
										value: false,
										label: 'No',
										checked: true,
									},
									{
										xtype: 'radiofield',
										name : 'paid',
										value: true,
										label: 'Si',
									},
								]
							},
							{
								xtype: 'button',
								text: 'Guardar',
								ui: 'confirm',
								handler: function () {
									var refForm = this.up('formpanel');
									var refPopUp = this.up('viewthepopup');
									var refButton = refPopUp.getRefButton();

									// set user to form
									var model = refPopUp.getRefUserModel();
									var data = refForm.getValues();
									model.set('fullName', data.fullName);
									model.set('paid', data.paid);
									var errors = model.validate();

									if (errors.isValid() === true) {

										model.save({
											success: function(model) {
												console.log("Saved Ed! His ID is "+ model.getId());
											}
										});
										refPopUp.hide();

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
