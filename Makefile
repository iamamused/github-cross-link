all: safari chrome

safari:
	cp source/common/* source/safari.safariextension/

chrome:
	cp source/common/* source/chrome/

clean:
	rm source/safari.safariextension/GitHubCrossLink.js; 
	rm source/safari.safariextension/Icon*;