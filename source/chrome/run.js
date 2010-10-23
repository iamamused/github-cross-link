( function() {

    chrome.extension.sendRequest(
        {name: "getPreferences"},
        function( response ) {
            var settings = response;
            if (!settings.patterns || settigns.patterns.length == 0) {
                settings.patterns = '/iamamused/github-cross-link/*/test/php-library';
            }
            window.GitHubCrossLink.init( settings );
        }
    );

}() )