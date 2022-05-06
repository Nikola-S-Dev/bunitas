<?php 
// DB credentials.
define('DB_HOST','shareddb-p.hosting.stackcp.net');
define('DB_USER','root2-2e4f');
define('DB_PASS','12f1cqvaim');
define('DB_NAME','	
vendoremail-313637583a');
// Establish database connection.
try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}
?>