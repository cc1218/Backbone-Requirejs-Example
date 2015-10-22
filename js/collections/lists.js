define([
    'underscore',
    'backbone',
    'models/listitem'
], function(_, Backbone,ListItem){
    var Lists = Backbone.Collection.extend({
        model: ListItem,
        url: 'api/news.php',
        parse: function(response) {
            return response.news;
        }
    });
    return new Lists();
});