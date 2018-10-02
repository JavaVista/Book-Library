($ => {

    let Book = Backbone.Model.extend({
        defaults: {
            coverImage: "img/placeholder.png",
            title: "Something",
            author: "Tony Bicicleta",
            releaseDate: "2017",
            keywords: "JS Programing"
        }
    });
})(jQuery);