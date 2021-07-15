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
$postdata = file_get_contents("php://input");

// Get the posted data.
$U_id = json_decode($postdata)->U_id;

//echo $postdata;

$sql = "UPDATE agent_property set Is_ban=1 where U_id =" . $U_id;
    if ($conn->query($sql) === TRUE) {
        http_response_code(200);
        
    } else {
        echo "Error banning record: " . $conn->error;
    }

?>
