##What is GitHub Cross Link?

While browsing the github repositories I thought "Wouldn't it be neat if the classes were clickable?" Well, now they are.

At the moment, the extension only works for the PEAR / Zend Framework file structure where a class name uses an _ to represent a directory. For example:

    My_Class_Name.php

where the path the the file is:

    /path/to/library/My/Class/Name.php

I'll add more possibilities as necessary.

##Installation

1. [Download the packaged extension](http://github.com/downloads/iamamused/github-cross-link/github-cross-link.safariextz/qr_code)

2. If Safari doesn't prompt you to install, double click it.

3. Once installed go to Safari > Preferences > Extensions > github cross link and enter the include patterns for your library. 

### Include Patterns

For example, if you have a github project called `MyProject` your `My_Class_Name` class would have a url something like this:

    https://github.com/myusername/MyProject/blob/master/library/My/Class/Name.php

for the Include pattern enter: 

    /MyProject/*/library
  
The `*` will be replaced with blob/master or the appropriate version if you're looking at a branch. If your library is in a sub directory such as /sub/library then enter:

    /MyProject/*/sub/library

and so on.

If you have more than one project, you can separate multiple patterns with a comma but only one per project is allowed. Sorry.