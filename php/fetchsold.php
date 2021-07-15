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


$sold = [];
$sql = "SELECT * FROM property Where Is_sold = true order by P_Id ASC" ;

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $sold[$i]['P_Id'] = $row['P_Id'];
    $sold[$i]['Title'] = $row['Title'];
    $sold[$i]['Address'] = $row['Address'];
    $sold[$i]['Price']= $row['Price'];
    $sold[$i]['Is_sold'] = $row['Is_sold'];
    $i++;
  }

  echo json_encode($sold);
}
else
{
  http_response_code(404);
}
$conn->close();
?>