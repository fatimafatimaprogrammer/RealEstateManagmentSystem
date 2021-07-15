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


$users = [];
$sql = "SELECT U_id, Name, Username , Password ,Phone,Job FROM users  where job='agent' ORDER bY U_id Asc";

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['U_id']    = $row['U_id'];
    $users[$i]['Name'] = $row['Name'];
     $users[$i]['Username'] = $row['Username'];
    $users[$i]['Password'] = $row['Password'];
     $users[$i]['Phone'] = $row['Phone'];
    $users[$i]['Job'] = $row['Job'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
$conn->close();
?>