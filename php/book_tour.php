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

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// Get the posted data.
$postdata = file_get_contents("php://input");

//echo $postdata;
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  //echo $request;
  // Validate.

  if((int)$request->B_Id < 0 || (int)$request->P_id < 0  || (int)$request->A_id < 0 )
  {
    return http_response_code(400);
  }

  // Sanitize.
  
  $B_Id = mysqli_real_escape_string($conn, (int)$request->B_Id);
  $A_id = mysqli_real_escape_string($conn, (int)$request->A_id);
  $P_id = mysqli_real_escape_string($conn, (int)$request->P_id);
  


  // Create.
  $sql = "INSERT INTO book_tour (B_Id,A_id,P_id) VALUES ({$B_Id},{$A_id},{$P_id})";

  if($result = $conn->query($sql))
  {
    http_response_code(201);
    $users = [
      'B_Id' => $B_Id,
      'A_id' => $A_id,
      'P_id' => $P_id,
      ];
    echo json_encode($users);
  }
  else
  {
    http_response_code(422);
  }
}
$conn->close();
?>