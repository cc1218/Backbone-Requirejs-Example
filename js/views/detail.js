define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/detail.html'
], function($, _, Backbone,tplDetail) {
    var detailView = Backbone.View.extend({
        el: '#books',
        template: _.template(tplDetail),
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        initialize: function (options) {
            this.url = options.id;
            this.model.set({id: this.url});
            this.model.fetch();
            this.render();
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.model, 'change', this.render);
        }
    });
    return detailView;
});