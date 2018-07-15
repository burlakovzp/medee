<?php

define ("DBHOST", "localhost");
define ("DBUSER", "autochekhol");
define ("DBPASS", "B274a78s12");
define ("DB", "Catalog");

$connection = @mysqli_connect(DBHOST, DBUSER, DBPASS, DB) or die ('Error db!');
mysqli_set_charset($connection, "utf8") or die ('Error utf8!');