'use strict';

angular.module('myApp.mdFrame', [])

    .directive('appMdFrame', function() {
        return {
            restrict: 'E',
            scope: {
                url: '@url'
            },
            replace: true,
            template: '<div class="mdFrame-container"><iframe ng-src="{{trustedUrl}}"></iframe></div>',
            link: function(scope, el, attr) {
                el.find("iframe")[0].onload = function() {
                    scope["onIframeLoaded"]();
                };

            },
            controller: function($scope, $element, $sce) {
                $scope["onIframeLoaded"] = function() {
                    // Do whatever you need to do after the iframe has loaded
                    console.log('iframe was loaded');
                    // var iframe = $element[0].querySelector('iframe');
                    var iframe = $element.find('iframe')[0];
                    console.log('iframe contents: ', iframe);
                    // var childDocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
                    // console.debug(childDocument);
                };
                $scope["trustedUrl"] = $sce.trustAsResourceUrl($scope.url);
            }
        };
    });
