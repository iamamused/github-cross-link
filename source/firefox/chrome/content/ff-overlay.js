//https://developer.mozilla.org/en/Code_snippets/On_page_load

var firefoxGHCLController = {
  init: function() {
  
    var appcontent = document.getElementById("appcontent");   // browser
    if(appcontent) {
      appcontent.addEventListener("DOMContentLoaded", firefoxGHCLController.onPageLoad, true);
    }
    
      document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ firefoxGHCLController.showFirefoxContextMenu(e); }, false);

  },

  onPageLoad: function(aEvent) {

    var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
    
    if ( doc.location.href.search("://github.com") > -1 ) {
    	window.GitHubCrossLink.init( { patterns:'/iamamused/github-cross-link/*/test/php-library' }, doc, doc ); 
    }

    
    
    // do something with the loaded page.
    // doc.location is a Location object (see below for a link).
    // You can use it to make your code executed on certain pages only.
    //if(doc.location.href.search("forum") > -1)
    //  alert("a forum page is loaded");
    
    // add event listener for page unload 
    aEvent.originalTarget.defaultView.addEventListener("unload", function(){ firefoxGHCLController.onPageUnload(); }, true);
  },

  onPageUnload: function(aEvent) {
    // do something
  },

  showFirefoxContextMenu: function(event) {
    // show or hide the menuitem based on what the context menu is on
    document.getElementById("context-github-cross-link").hidden = gContextMenu.onImage;
  }
  
}

window.addEventListener("load", function() { firefoxGHCLController.init(); }, false);

