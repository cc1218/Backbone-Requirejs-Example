define([
    'jquery',
    'underscore',
    'backbone',
    'collections/lists',
    'views/listitem'
], function($, _, Backbone, Lists, listItemView){
    ListView = Backbone.View.extend({
        el: '#books',
        initialize: function () {
            this.collection = Lists;
            this.collection.fetch({reset: true});
            this.render();
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'change', this.render);
        },
        render: function () {
            this.$el.html("");
            this.collection.each(function (item) {
                var listitemView = new listItemView({
                    model: item
                });
                this.$el.append(listitemView.render().el);
            }, this);
        }
    });
    return ListView;
});