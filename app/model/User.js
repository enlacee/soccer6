Ext.define('MyApp.model.User', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'id',
		fields: [
			{name: 'id',			type: 'int'},
			{name: 'idSecondary',	type: 'int'},
			{name: 'fullName',		type: 'string'},
			{name: 'paid',			type: 'boolean'}
		],

		validations: [
			{ type: 'presence',	field: 'fullName' },
			{ type: 'length',	field: 'fullName', min: 2},
			{ type: 'inclusion',field: 'paid', list: [true, false]},
		],

		proxy: {
			type: 'rest',
			url: jsVars.ajaxUrl + '/appview/users',
			reader: {
				type: 'json',
				root: 'users'
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
