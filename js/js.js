$(document).ready(function(){

    $( '.allclickable' ).click( function() {
        var clickLinkClass = $( this ).find( 'a.clicklink' );

        if( clickLinkClass.length ) {

          if( clickLinkClass.attr( 'target' ) == '_blank' ) {
            var link = clickLinkClass.attr( 'href' );
            window.open( link, '_blank');
          }
          else {
            window.location = clickLinkClass.attr( 'href' );
          }
        }
        return false;
    });

});