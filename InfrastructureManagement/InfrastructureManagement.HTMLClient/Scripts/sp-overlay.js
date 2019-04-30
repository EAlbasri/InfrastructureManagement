
(function ($) {
    $.fn.spOverlay = function (contentItem, imageUrl, options) {
        $element = this;
        var me = $.extend({
            width: 200,
            height: 200,
            displayName: contentItem.model.displayName,
            description: (contentItem.model.description) ? contentItem.model.description : '',
            element: this,
            imageUrl: imageUrl,
        }, options);

        me.createSpOverlay = function () {
            me.element.find('a').css({
                'background-image': 'url(' + me.imageUrl + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'width': '' + me.width + 'px',
                'height': '' + me.height + 'px'
            });
            setTimeout(function () {
                me.element.find('a').html(
                '<div style="width:100%;height:100%;position:relative;" >' +
                '    <div class="spOverlay" >' +
                '        <div class="spOverlayBackground"></div>' +
                '        <div class="spTitle"><p>' + me.displayName + '</p></div>' +
                '        <div class="spDescription">' + me.description + '</div> ' +
                '    </div>' +
                '</div>');
            });
        };

        me.createSpOverlay();
    };

}(jQuery));