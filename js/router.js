define(['backbone'],function (Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "home/" : "home",
            "detail/:id": "detail"
        },
        //http://segmentfault.com/q/1010000000191530
        switchView: function (view) {
            if (this.currentView) {
                this.currentView.remove();
            }
            this.currentView = view;
        },
        home: function() {
            require(['views/List'], function (ListView) {
               var listview=new ListView();
                this.switchView(listview);
            });
        },

        detail : function(id){
            require(['views/detail','models/detail'], function (detailView,Detail) {
                var detail=new Detail();
                var detailview=new detailView({model:detail,id:id});
                this.switchView(view);
            });
        }
    });
    return new AppRouter();
});