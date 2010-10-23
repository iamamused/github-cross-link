// Safari specific initiation.

( function() {

  // Listens for an incoming setSettings message.
  safari.self.addEventListener( "message", function( e ) {
    if( e.name === "setSettings" ) {
      var settings = e.message;
      window.GitHubCrossLink.init( settings );
    }
  }, false );

  // Asks global.html for settings then runs init.
  safari.self.tab.dispatchMessage( "getSettings" );

}() )
