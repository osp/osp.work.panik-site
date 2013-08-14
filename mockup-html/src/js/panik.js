var noSlash = function(path) {
    elements = path.split('/');
    return elements[elements.length - 1];
}

// add the class "active" to page currently being visited
$("nav.emission-menu li").each(function() {
    if ( noSlash($(this).children("a").attr('href')) === noSlash(document.location.pathname) ) { 
        $(this).addClass("active");
    };
});

// Accordeon effect on the Emission details page
$(".strip").click(function(e){
    e.preventDefault();
    $(this).next(".slide-out").slideToggle('easeInOutQuint');
});

// Accordeon effect on to show advanced search options
$("#toggle-advanced-search-options").click(function(e){
    $("#advanced").slideToggle('easeInOutQuint');
});

// Links to tag search
$("ul.tags li").each(function(){
    var link = 'search.html?tag=' + encodeURIComponent($(this).text());
    var tag = '<a href="' + link + '">' + $(this).text() + '</a>'
    $(this).html(tag);
});

// Link to a breve doesn’t open in a new page, but is loaded into the thing
$("#breves-content a").click(function(e){
    e.preventDefault();
    $("#breves-content").load("breve.html .breve");
});


// A tooltip with an emission’s info is displayed over the GRILLE

tipHTML = $(".grille-tip").html();

// 
$('#grille a[href]').each(function() {
   $(this).qtip({
            content: {
                text: tipHTML,
                button: false
            },
        });
    }
);