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
$sql = "SELECT B_Id, A_id ,Title , Address FROM book_tour , property WHERE book_tour.P_id=property.P_Id";

if($result = $conn->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['B_Id']    = $row['B_Id'];
     $users[$i]['A_id'] = $row['A_id'];
      $users[$i]['Title'] = $row['Title'];
     $users[$i]['Address'] = $row['Address'];

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