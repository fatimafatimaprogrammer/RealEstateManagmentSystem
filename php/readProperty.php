<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "";
$mydatabase="mydbcourseswala1";

// Create connection
$conn = new mysqli($servername , $username, $password,$mydatabase,3307);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$properties = [];
$sql = "SELECT P_id,Title,Address,Price,Is_sold FROM property";

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $properties[$i]['P_id'] = $row['P_id'];
    $properties[$i]['Title'] = $row['Title'];
    $properties[$i]['Address'] = $row['Address'];
    $properties[$i]['Price']= $row['Price'];
    $properties[$i]['Is_sold'] = $row['Is_sold'];
    $i++;
  }

  echo json_encode($properties);
}
else
{
  http_response_code(404);
}
$conn->close();
?>