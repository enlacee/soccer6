Ext.define('MyApp.model.User', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.proxy.Rest'],
	config: {
		idProperty: 'id',
		fields: [
			{name: 'id',	type: 'int'},
			{name: 'name',	type: 'string'},
			{name: 'paid',	type: 'int'}
		],

		validations: [
			// { type: 'presence',	field: 'name' },
			{ type: 'length',	field: 'name', min: 2},
			{ type: 'inclusion',field: 'paid', list: [0, 1]},
		],

		proxy: {
			type: 'rest',
			url: jsVars.ajaxUrl + '/users',
			reader: {
				type: 'json',
				// root: 'users'
			},
			// withCredentials: true
		}


		// proxy: {
		// 	type: 'rest',
		// 	url: jsVars.ajaxUrl + '/appview/user',
		// 	render: {
		// 		type: 'json',
		// 		root: 'users'
		// 	}
		// }
	}
});
