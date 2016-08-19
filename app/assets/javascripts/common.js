/**
 * Created by marco on 16-8-19.
 */

var Common = {};

Common.PanelChevron = function (collapse) {
    $('.fa-chevron-up').click(function () {
        var Panel = $(this).parent().parent().parent();

        var Display = Panel.find(collapse).css('display');

        if (Display == "none") {
            Panel.find(collapse).slideDown();
            $(this).css({transform: 'rotate(0deg)'});
        } else {
            Panel.find(collapse).slideUp();
            $(this).css({transform: 'rotate(180deg)'});
        }
    });
};