var LightSwitchUtils = (function () {

    // constructor
    function LightSwitchUtils() { }

    // C# string.Format() equivalent.
    // e.g. var greeting = LSU.format("Hi, {0}", name);
    LightSwitchUtils.prototype.stringFormat = function () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    };

    // Render a tab strip using the .tabstrip css classes inside user-customization.css for the outer group contentItem where
    // each of the immediate contentItem children will be rendered as tabs.
    // Params activeTabIndex, leftMargin, rightMargin are optional and default to 0
    LightSwitchUtils.prototype.renderTabStrip = function (element, contentItem, activeTabIndex, leftMargin, rightMargin) {
        // optional params
        activeTabIndex = (typeof activeTabIndex === "undefined") ? 0 : activeTabIndex;
        leftMargin = (typeof leftMargin === "undefined") ? 0 : leftMargin;
        rightMargin = (typeof rightMargin === "undefined") ? 0 : rightMargin;

        // create the tabstrip HTML and add tab names to an array for re-use during click event (use the contentName as id of <ul/>)
        var html = LSU.stringFormat("<ul class='tabStrip' data-value='' style='margin-left:{0}px; margin-right:{1}px;' id={2}>",
                                    leftMargin, rightMargin, contentItem.name);
        var tabNames = [];
        for (var i = 0; i < contentItem.children.length; i++) {
            tabNames.push(contentItem.children[i].name);
            contentItem.children[i].isVisible = (activeTabIndex == i);
            html += (LSU.stringFormat("<li class='{0}' id='" + contentItem.children[i].name + "'>&nbsp;" +
                                      contentItem.children[i].displayName + "&nbsp;</li>",
                                      activeTabIndex == i ? "selected" : ""));
        };
        html += "</ul>";

        // render the HTML inserting it before the current element as it needs to show at the top of the contentItem group
        if (navigator.userAgent.match(/MSIE/) !== null) {
            $(element).css("margin-top", "-14px"); // IE 10 leaves a margin between tabs and content that needs to be removed
        }
        $(element).css("border-top", "1px solid #c0c0c0");
        $(element).css("border-left", "1px solid #c0c0c0");
        $(element).css("border-right", "1px solid #c0c0c0");
        $(element).css("border-bottom", "1px solid #c0c0c0");
        $(element).css("margin-left", LSU.stringFormat("{0}px", leftMargin));
        $(element).css("margin-right", LSU.stringFormat("{0}px", rightMargin));
        $(element).before($(html));
        // add a tab click event to facilitate the tab selection
        $(LSU.stringFormat("#{0} > li", contentItem.name)).click(function (e) {
            // select clicked tab
            var li = this;
            $(LSU.stringFormat("#{0} > li", contentItem.name)).removeClass("selected");
            $(li).parent().attr("data-value", $(li).text());
            $(li).addClass("selected");
            $(li).parent().attr("data-value", "");
            // make active content visible
            var selectedTab = $(li).attr('id');
            setTimeout(function () {
                // show selected tab and hide others
                tabNames.forEach(function (tab) {
                    contentItem.screen.findContentItem(tab).isVisible = (tab === selectedTab);
                });
            });
        });
    };
    return LightSwitchUtils;
})();

// -- create main object to use
var LSU = new LightSwitchUtils();
