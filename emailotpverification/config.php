<?php 
// DB credentials.
define('DB_HOST','shareddb-p.hosting.stackcp.net');
define('DB_USER','root1');
define('DB_PASS','7t9i9082ld');
define('DB_NAME','emailoptverification-3131352fd9');
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