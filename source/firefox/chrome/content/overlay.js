var github-cross-link = {
  onLoad: function() {
  alert('overlay.js onLoad 1');
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("github-cross-link-strings");
  },

  onMenuItemCommand: function(e) {
  alert('overlay.js onMenuItemCommand 1');
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
  alert('overlay.js onToolbarButtonCommand 1');
    // just reuse the function above.  you can change this, obviously!
    github-cross-link.onMenuItemCommand(e);
  }
};

window.addEventListener("load", github-cross-link.onLoad, false);
