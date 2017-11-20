Ext.define('MyApp.store.User', {
	extend: 'Ext.data.Store',
	requires: ['MyApp.model.User'],
	config: {
		autoLoad: true,
		model: 'MyApp.model.User',
		storeId: 'Users',
		autoSync: true
	}
});
