// Safari specific initiation.

( function() {

  // Listens for an incoming setSettings message.
  safari.self.addEventListener( "message", function( e ) {
    if( e.name === "setSettings" ) {
      var settings = e.message;
      if (!settings.patterns || settigns.patterns.length == 0) {
        settings.patterns = '/iamamused/github-cross-link/*/test/php-library';
      }
      window.GitHubCrossLink.init( settings );
    }
  }, false );

  // Asks global.html for settings then runs init.
  safari.self.tab.dispatchMessage( "getSettings" );

}() )
