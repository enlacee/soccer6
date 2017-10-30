Ext.define('MyApp.view.ViewThePopUpForm', {
	extend: 'Ext.Panel',
	alias: 'widget.viewthepopupform',
	xtype: 'viewthepopupform',

	config: {
		fullscreen: true,

		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						name : 'nameeee',
						label: 'Name'
					},
					{
						xtype: 'emailfield',
						name : 'email',
						label: 'Email'
					},
					{
						xtype: 'passwordfield',
						name : 'password',
						label: 'Password'
					}
				]
			}
		]
	}
});
