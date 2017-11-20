Ext.define('MyApp.store.User', {
	extend: 'Ext.data.Store',
	requires: ['MyApp.model.User'],
	config: {
		autoLoad: false,
		model: 'MyApp.model.User',
		storeId: 'Users',
		autoSync: true
	}
});
