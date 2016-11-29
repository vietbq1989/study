define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Components, ko) {
    "use strict";    return Components.extend({
        price: ko.observable(0),
        qty: ko.observable(0),
        initialize: function(){
            var self = this;
            this.total = ko.computed(function(){
                return self.price() * self.qty();
            });
        },
        loadProductArray: function () {
            var listproduct = window.getListProduct;
            alert(listproduct);
            $.get( listproduct, function( data ) {
                console.log(data);
            });
        }
    });
});