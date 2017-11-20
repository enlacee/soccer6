Ext.define('MyApp.controller.Main', {
	extend: 'Ext.app.Controller',
	requires: [
		'MyApp.view.ViewThePopUp',
		'Ext.form.Panel'
	],

	config: {
		refs: {
			miboton: 'button[ui=black]',
			mipopup: 'viewthepopup',
		},
		control: {
			miboton: {
				tap: 'miAccion',
			}
		}
	},

	//called when the Application is launched, remove if not needed
	launch: function(app) {
		var popup = Ext.widget('viewthepopup');
		Ext.Viewport.add(popup);
		popup.hide();

		// repaint all buttons
		this.reWriteAllButtons();
	},

	miAccion: function(boton) {
		var popup = this.getMipopup(); // popup.setCls(''); // console.log('title', popup.items.items[0].setTitle('pepito'));
		popup.setRefButton(boton);

		// add model to form
		var idUser = boton.getId().match(/\d+/).join();
		var modelUser = Ext.create('MyApp.model.User', {
			id: idUser,
			name: '',
			paid: 0
		});

		// load popup with data
		var User =  Ext.ModelManager.getModel('MyApp.model.User');
		User.load(idUser, {
			failure: function(record, operation) {
				Ext.Msg.alert('Error!', 'Ocurrio un problema, intente luego.');
			},
			success: function(record, operation) {

				if (record !== null) {
					modelUser.set('name', record.get('name'));
					modelUser.set('paid', record.get('paid'));
					popup.down('formpanel').setRecord(modelUser);
				} else {
					popup.down('formpanel').setRecord(modelUser);
				}

				popup.setRefUserModel(modelUser)
				popup.showBy(boton);
				popup.show();
			}
		});

	},

	/**
	 * rewrite the main button (main panel)
	 * set Name from players
	 */
	reWriteAllButtons: function() {
		var theMainButtons = Ext.ComponentQuery.query('viewthebutton button[ui=black]');
		var storeUser = Ext.create('MyApp.store.User');
		storeUser.load({
			scope: this,
			callback: function(records, operation, success) {
				if (success == true) {

					storeUser.each(function(record) {
						var theIndexButton = record.data.id - 1;
						theMainButtons[theIndexButton].setText(record.data.name)
						if (record.data.paid === 1) {
							theMainButtons[theIndexButton].setStyle('color: green');
						}
					});
				} else {
					Ext.Msg.alert('Error!', 'Ocurrio un problema, intente luego.');
				}
			}
		});

	}
});
