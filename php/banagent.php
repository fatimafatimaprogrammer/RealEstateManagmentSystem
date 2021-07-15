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


$agents = [];
$sql = "SELECT * FROM users,agent_property,property  WHERE users.U_id = agent_property.U_id 
and agent_property.P_id = property.P_id;";

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $agents[$i]['U_id']    = $row['U_id'];
    $agents[$i]['Name'] = $row['Name'];
    $agents[$i]['Username'] = $row['Username'];
    $agents[$i]['Password'] = $row['Password'];
    $agents[$i]['Phone'] = $row['Phone'];
    $agents[$i]['Job'] = $row['Job'];
    $agents[$i]['Is_ban'] = $row['Is_ban'];
    $agents[$i]['P_id'] = $row['P_id'];
    $i++;
  }

  echo json_encode($agents);
}
else
{
  http_response_code(404);
}
$conn->close();
?>