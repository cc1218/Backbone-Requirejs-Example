define(['underscore', 'backbone'], function(_, Backbone) {

    Detail = Backbone.Model.extend({
        defaults:{
            title:'title',
            author:'author',
            content:'content'
        },
        urlRoot: 'api/detail.php',
        url : function(){
               var  url = this.urlRoot + "/?action=home&id=" + this.id;
            return url;
        }
    });
    return Detail;
});