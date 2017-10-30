Ext.define('MyApp.controller.Main', {
	extend: 'Ext.app.Controller',
	requires: [
		'MyApp.view.ViewThePopUp',
		'Ext.form.Panel'
	],

	config: {
		refs: {
			mibotonref: 'button[ui=black]',
		},
		control: {
			mibotonref: {
				tap: 'miAccion',
			}
		}
	},

	//called when the Application is launched, remove if not needed
	launch: function(app) {

	},

	miAccion: function(boton) {
		var me = this;
		var popup = Ext.widget('Viewthepopup'); // Get reference of the panel popup
		popup.showBy(boton);
		Ext.Viewport.add(popup);
		// Ext.Viewport.add({ xtype: 'viewthepopup'});
	}
});
