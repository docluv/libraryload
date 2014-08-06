;

(function () {

    "use strict";

    var View = Class.extend({

        init: function (rootScope) {
            this.rootScope = rootScope;
        },

        rootScope:undefined,

        mergeData: function (targetSelector, templateName, data) {

            this.rootScope.viewEngine.mergeData(targetSelector, templateName, data);

        },

        version: "0.5.0",

        noResults: "<div class='no-results'>Sorry There are No Results Available</div>",

        mainTitle: document.querySelector(".view-title"),

        setMainTitle: function (title) {

            this.mainTitle.textContent = document.title = title.toLowerCase();
        }

    });

    return (window.View = View);

})();