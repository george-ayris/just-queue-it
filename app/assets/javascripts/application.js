var bower_path = 'lib/'
requirejs.config({
    paths: {
        'text': bower_path + 'requirejs-text/text',
        'durandal': bower_path + 'durandal/js',
        'plugins' : bower_path + 'durandal/js/plugins',
        'transitions' : bower_path + 'durandal/js/transitions',
        'knockout': bower_path + 'knockout.js/knockout',
        'bootstrap': bower_path + 'bootstrap/js/',
        'jquery': bower_path + 'jquery/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Just Queue It';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });

});