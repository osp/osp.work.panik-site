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

$("#advanced").organicTabs();

// Links to tag search
$("ul.tags li").each(function(){
    var link = 'search.html?tag=' + encodeURIComponent($(this).text());
    var tag = '<a href="' + link + '">' + $(this).text() + '</a>'
    $(this).html(tag);
})