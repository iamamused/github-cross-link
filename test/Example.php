<?php

/**
 * After installing the extension the Example_Class_Name text on 
 * this page will link to the file in /library/Example/Class/Name.php
 */

class Example extends Example_Class_Name {

    // Works on argument hints
    function myMethod( Example_Class_Name $class ) {
        
        // and static classes (methods and properties don't work yet).
        $var = Example_Class_Name::staticMethod();
    
        return;
    }

    function phpDocExamples() {
        // Various parts should like to PHP documentation.
        for ( $i=0; $i<count($test); $i++) {
            echo $i;
            $test = aFunction();
            $test = glob();
        }
    }
    
}