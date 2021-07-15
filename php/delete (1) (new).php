<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "";
$mydatabase="mydbcourseswala1";

// Create connection
$conn = new mysqli($servername,$username, $password,$mydatabase,3307);


//echo $_GET['id'];

$sql = "DELETE FROM users WHERE U_id=" . $_GET['U_id'];
if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo "Record deleted successfully";
    
} else {
    echo "Error deleting record: " . $conn->error;
}

?>
