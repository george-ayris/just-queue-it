define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: ['', 'about'], title: 'About', moduleId: 'viewmodels/about', nav: true  },
                { route: 'simple', moduleId: 'viewmodels/simple', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});