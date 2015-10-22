define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/listitem.html'
], function($, _, Backbone,tplListItem) {
    var listItemView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template(tplListItem),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return listItemView;
});