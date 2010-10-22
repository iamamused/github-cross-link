( function() {

    function trim(str, chars) {
        return ltrim(rtrim(str, chars), chars);
    }
     
    function ltrim(str, chars) {
        chars = chars || "\\s";
        return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
    }
     
    function rtrim(str, chars) {
        chars = chars || "\\s";
        return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
    }

    var settings;
    var init = function() {
    // The guts.
    
    var url = window.location.href.split('/');
    var base = url[0] + '/' + url[1] + '/' + url[2];
    var user    = url[3];
    var project = url[4];
    var type    = url[5];
    var version = url[6];
    var extensionParts = url[url.length -1].split('.');
    var extension = extensionParts[extensionParts.length -1];
    
    var patterns = settings.patterns.split(',');
    var found = false, pattern, parts;
    for ( var i=0; i<patterns.length; i++ ) {
        pattern = trim(patterns[i],'/');
        parts = pattern.split('/');
        if ( parts[1] === project ) {
            found = true;
            break;
        }
    }

    if (!found) return;
    
    var libraryBase = base + '/' + pattern.replace( '*', type + '/' + version ) + '/';
    var classes = jQuery('.highlight .nx').each(function(i,e){
        var node = $(e);
        node.wrapInner(function() {
            return $('<a/>').attr({
                href : libraryBase + node.text().replace(/_/ig,'/') + '.' + extension,
                title : 'View source in ' + project
            }).css({
                color: 'inherit'
            });
        });
    });
    
  };



    chrome.extension.sendRequest({name: "getPreferences"},
     function(response)
     {
        settings = response;
        init();
     });
  
  // Done.
  
}() )