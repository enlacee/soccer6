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
	},

	miAccion: function(boton) {
		var popup = this.getMipopup(); // popup.setCls('');
		// console.log('xxx', popup.items.items[0].setTitle('pepito'));
		popup.setRefButtonId(boton.getId());
		popup.showBy(boton);
		popup.show();
	}
});
