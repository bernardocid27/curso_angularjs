angular.module("CustomDirective", [])
    .directive("backImg", function() {
        return function(scope, element, attrs) {
            //attrs.backImg //Esto no
            attrs.$observe('backImg', function(value) {
                element.css({
                    "background": "url(" + value + ")",
                    "background-size": "cover",
                    "background-position": "center"
                })
            })
        }
    })
    .directive('myAutocomplete', function() {
        function postLink(scope, elem, attrs) {
            $(elem).autocomplete({
                source: scope.$eval(attrs.myAutocomplete),
                select: function(ev, ui) {
                    ev.preventDefault();
                    if (ui.item) {
                        scope.optionSelected(ui.item.value);
                    }
                },
                focus: function(ev, ui) {
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }
            });
        };
        return {
            link: postLink
        };
    })
    .controller("AppCtrl", function($scope, $http) {
        $http.get("https://api.github.com/users/codigofacilito/repos")
            .then(
                function(data) {
                    $scope.repos = data.data;
                },
                function(err) {
                    console.log(err);
                }
            );
        $scope.optionSelected = function(data) {
            $scope.$apply(function() {
                $scope.main_repo = data;
            })
        }
        $scope.clean = function() {
            $scope.main_repo = null;
            $('input').val('');
        };
    });