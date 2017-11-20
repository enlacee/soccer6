Ext.define('MyApp.view.ViewThePopUp', {
	extend: 'Ext.Panel',
	alias: 'widget.Viewthepopup',
	xtype: 'viewthepopup',

	config: {
		centered: true,
		modal: true,
		hideOnMaskTap: true,
		width:'90%',
		// vars refers
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
								name: 'name',
								// styleHtmlContent: true,
								cls: 'inputFullName',
								allowBlank: false,
								vtype: 'alpha',
								placeHolder: 'Nombre',
								autoComplete: false,
								autoCapitalize: false,
								maxLength: 15,
								listeners:{
									painted: function() {
										this.focus();
									},
									change: function(field, newValue, oldValue){
										field.setValue(newValue.toLowerCase());
									}
								}
							},
							{
								xtype: 'fieldset',
								title: 'Confirmado: ',
								items: [
									{
										xtype: 'radiofield',
										name : 'paid',
										value: 0,
										label: 'No',
										checked: true,
									},
									{
										xtype: 'radiofield',
										name : 'paid',
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
									var refForm = this.up('formpanel');
									var refPopUp = this.up('viewthepopup');
									var refButton = refPopUp.getRefButton();

									// set user to form
									var model = refPopUp.getRefUserModel();
									var data = refForm.getValues();
									model.set('name', data.name);
									model.set('paid', data.paid);

									var errors = model.validate(); // console.log('All Errors:', errors.items);
									if ( errors.isValid() === true ) {
										model.save({
											success: function( model ) {
												refButton.setText( model.get( 'name' ) );
												if ( model.get( 'paid' ) === 1 ) {
													refButton.setStyle( 'color: green' );
												} else {
													refButton.setStyle( 'color: black' );
												}
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
