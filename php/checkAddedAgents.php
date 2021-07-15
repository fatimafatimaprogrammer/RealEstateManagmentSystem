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
$sql = "SELECT distinct property.P_id,add_agent.A_id,users.Name ,users.Username ,property.Title,property.Address ,property.Price
 FROM add_agent , property ,users  where property.P_id = add_agent.P_id and add_agent.A_id = users.U_id; ";

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['P_id']    = $row['P_id'];
    $users[$i]['A_id']    = $row['A_id'];
    $users[$i]['Name']    = $row['Name'];
    $users[$i]['Title'] = $row['Title'];
    $users[$i]['Username']    = $row['Username'];
     $users[$i]['Address'] = $row['Address'];
    $users[$i]['Price'] = $row['Price'];
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