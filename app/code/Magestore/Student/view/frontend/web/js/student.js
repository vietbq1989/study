/**
 * Created by pikachu on 22/11/2016.
 */
define([
    "jquery",
    "jquery/ui"
], function($) {    //creating jquery widget
    $.widget('magestore.student', {
        _create: function() {
            console.log('success !');
        },
        studentregister: function (e) {
            console.log(e.a);
            console.log(e.b);
        }
    });
    return $.magestore.student;
});