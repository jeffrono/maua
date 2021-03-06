// load all of the dependencies asynchronously.

var paths={
    jqueryGrockit:'common/jquery.grockit.js',
    underscore:'common/lib/underscore.js',
    restAngularFactory:'common/restAngular/restAngular.service.js',
    restAngular:'common/restAngular/restAngular.module.js',
    home:'app/home/home.module.js',
    practiceGame:'app/practiceGame/practiceGame.module.js',
    generalServices:'common/services/general.services.js',
    authServices:'common/services/auth.services.js',
    accountModule:'app/account/account.module.js',
    accountCtrl:'app/account/auth/auth.ctrl.js',
    app:'app/app.js'
};

$script([
    paths.underscore,
    paths.generalServices,
    paths.restAngular,
    paths.home,
    paths.practiceGame,
    paths.authServices,
    paths.app
],'init')

    .ready('init', function(){
        $script([
            paths.restAngularFactory,
            paths.accountModule,
            paths.accountCtrl,
            paths.jqueryGrockit

        ], function() {
            angular.bootstrap(document, ['grockitApp']);
        });
    });