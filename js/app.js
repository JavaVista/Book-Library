($ => {
    'use strict';

// Model
    let Book = Backbone.Model.extend({
        defaults: {
            coverImage: 'img/placeholder.png',
            title: 'Something',
            author: 'Tony Bicicleta',
            releaseDate: '2017',
            keywords: 'JS Programing'
        }
    });

    // View
    let BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'book-container',
        template: $('#book-template').html(),

        render: function () {
            // templ is a function that takes a JSON object and returns HTML
            let templ = _.template(this.template);
            // this.el is what we defined in tagName. use $el to get access to JQuery html() function
            this.$el.html(templ(this.model.toJSON()));
            return this;
        }
    });

    let book = new Book({
        title: 'Something',
        author: 'Tony Bicicleta',
        releaseDate: '2017',
        keywords: 'JS Programing'
    });

    let bookView = new BookView({
        model: book
    });

    $('#books').html(bookView.render().el);

})(jQuery);