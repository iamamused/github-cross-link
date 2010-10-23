var github-cross-link = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("github-cross-link-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    github-cross-link.onMenuItemCommand(e);
  }
};

window.addEventListener("load", github-cross-link.onLoad, false);
