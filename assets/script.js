// TODO: write sort fuction for sorting blog cards
function sort(type) {
    if (type == "code") {
        $( "div" ).remove( ".other" );
    } else {
        $( "div" ).remove( ".code" );
    }
}