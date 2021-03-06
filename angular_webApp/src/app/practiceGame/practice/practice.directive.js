
practiceGame.directive('ngOneChoice', function(oneChoiceFactory) {
    return {
        restrict: 'A',
        templateUrl : 'app/practiceGame/practice/directives.tpl/oneChoice.tpl.html',
        link: function() {
            oneChoiceFactory.execute();
        },
        scope: {
            items:'=items',
            showExplanation:'='
        }
    };
})

    .directive('ngMultipleChoice', function(multipleChoiceFactory) {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/multipleChoice.tpl.html',
            link: function() {
                multipleChoiceFactory.execute();
            },
            scope: {
                items:'=items',
                showExplanation:'='
            }
        };
    })

    .directive('ngMultipleMatrix2x3', function(matrix2x3ChoiceFactory) {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/matrix2x3.tpl.html',
            link: function() {
                matrix2x3ChoiceFactory.execute();
            },
            scope: {
                items:'=items',
                rows:'=rows',
                showExplanation:'='
            }
        };
    })

    .directive('ngMultipleMatrix3x3', function(matrix3x3ChoiceFactory) {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/matrix3x3.tpl.html',
            link: function() {
                matrix3x3ChoiceFactory.execute();
            },
            scope: {
                items:'=items',
                showExplanation:'='
            }
        };
    })

    .directive('ngSat', function() {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/sat.tpl.html',
            link: function() {

            },
            scope: {
                items:'=items',
                cols:'=cols'
            }
        };
    })

    .directive('ngNumericEntry', function() {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/numericEntry.tpl.html',
            link: function() {
            },
            scope: {
                items:'=items',
                showExplanation:'='
            }
        };
    })

    .directive('ngFractionEntry', function() {
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/fractionEntry.tpl.html',
            link: function() {

            },
            scope: {
                items:'=items'
            }
        };
    })

    .directive('ngTwoChoice', function(multipleChoiceTwoCorrect) {

        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/twoChoice.tpl.html',
            link: function() {
                multipleChoiceTwoCorrect.execute();
            },
            scope: {
                items:'=items'
            }
        };
    })

    .directive('ngAnswers', function(){
        return {
            restrict: 'A',
            templateUrl : 'app/practiceGame/practice/directives.tpl/answers.tpl.html'

        };
    });


