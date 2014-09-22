angular.module("plainMean").
    directive("jumbotron", function(){
        return {
            restrict: 'A',
            link: function(scope,el,attrs) {
                el.on("mouseenter", function(){
                    el.addClass(attrs.jumbotron);
                });
                
                el.on("mouseleave", function(){
                    el.removeClass(attrs.jumbotron);
                });
            }
        };
    });
