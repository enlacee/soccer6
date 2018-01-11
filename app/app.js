function _2852ad87121835cea991300a5382b00fbc7ec7ab(){};function _e8ec9c25c5060cac4de95bb3acddd93fc715b29d(){};function _4abfd4ebfde177a66dfb8bc7163ab9c1e9847aee(){};function _e070bcef14257b19e612b14d4041968257f6ff6f(){};function _8c006b21a3dd303ad6ece8af7405b75ec6f133b0(){};function _7ce8ef33048e676218d134a27097ab0490174d0e(){};function _272f2415037d98bb6ad7f003c249c0af3eebf1b4(){};function _b6a88c8cc74b3fc4aaf8596742c796d91570b340(){};function _9b103ffb5efb8de19a8b0a7b4ed53524f2fdd1a1(){};function _5e85f77053db65c0b9a135bceb123496f6ff41c6(){};function _365e0f0821211122484ea0bd7b44b8092c2e6658(){};function _33daf411c35079aa71a446400ce790b8f999f576(){};function _20c1ba7a5b16c464b002e168f7743b126df6660e(){};/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MyApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    controllers: [
    	'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MyApp.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
