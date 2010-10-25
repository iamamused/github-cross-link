**NOTE: THe firefox extension is currently broken and desn't allow you to set you custom include path but it does highlihg PHP functions.**

##What is GitHub Cross-link?

While browsing the github repositories I thought "Wouldn't it be neat if teh source code was clickable?" Well, now it is.

<img src="http://github.com/iamamused/github-cross-link/raw/master/test/screenshot.jpg" />

At the moment, the extension only works for php and the PEAR / Zend Framework file structure where a class name uses an '_' to represent a directory. For example:

    class Example extends My_Class_Name { }

where the path to the file is:

    /path/to/library/My/Class/Name.php

I'll add more possibilities as necessary.

##Installation

1. Download the packaged extension for:
  * [Safari](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.safariextz/qr_code)
  * [Chrome](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.crx/qr_code)r_code)
  * [Firefox](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.xpi/qr_code)

2. If your browser doesn't prompt you to install it automatically you may need to double click it the file or drag it to your browser icon.

3. To check if everything is working, [go here](http://github.com/iamamused/github-cross-link/blob/master/test/Example.php) and see if you can click the Example_Class_Name or the PHP function names.

4. If that worked you just need to add your own include patterns:
  - In Safari go to: Safari > Preferences > Extensions > GitHub Cross-link 
  - In Chrome go to: Window > Extensions > and select "Options" for GitHub Cross-link 
  - In Firefox go to: Tools > Add-ons > GitHub Cross-link and then select preferences 

### Include Patterns

For example, if you have a GitHub project called `MyProject` your `My_Class_Name` class would have a url something like this:

    https://github.com/myusername/MyProject/blob/master/library/My/Class/Name.php

for the Include pattern enter: 

    /myusername/MyProject/*/library
  
The `*` will be replaced with blob/master or the appropriate version if you're looking at a branch. If your library is in a sub directory such as `/path/to/library` then enter:

    /myusername/MyProject/*/path/to/library

and so on.

If you have more than one project, you can separate multiple patterns with a comma but only one per project is allowed. Sorry.