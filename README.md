##What is GitHub Cross-link?

While browsing the github repositories I thought "Wouldn't it be neat if the classes were clickable?" Well, now they are.

<img src="http://github.com/iamamused/github-cross-link/raw/master/test/screenshot.jpg" />

At the moment, the extension only works for the PEAR / Zend Framework file structure where a class name uses an _ to represent a directory. For example:

    My_Class_Name.php

where the path the the file is:

    /path/to/library/My/Class/Name.php

I'll add more possibilities as necessary.

##Installation

1. Download the packaged extension for [Safari](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.safariextz/qr_code) or [Chrome](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.crx/qr_code)

2. If your browser doesn't prompt you to install it you may need to double click it the file or drag it to your browser icon.

3. To check if everything is working, [go here](http://github.com/iamamused/github-cross-link/blob/master/test/Example.php) and see if you can click the Example_Class_Name.

4. If that worked you just need to add your own include patterns:
  - In Safari go to: Safari > Preferences > Extensions > GitHub Cross-link 
  - In Chrome go to: Window > Extensions > and select "Options" for GitHub Cross-link 

### Include Patterns

For example, if you have a GitHub project called `MyProject` your `My_Class_Name` class would have a url something like this:

    https://github.com/myusername/MyProject/blob/master/library/My/Class/Name.php

for the Include pattern enter: 

    /myusername/MyProject/*/library
  
The `*` will be replaced with blob/master or the appropriate version if you're looking at a branch. If your library is in a sub directory such as /sub/library then enter:

    /myusername/MyProject/*/sub/library

and so on.

If you have more than one project, you can separate multiple patterns with a comma but only one per project is allowed. Sorry.