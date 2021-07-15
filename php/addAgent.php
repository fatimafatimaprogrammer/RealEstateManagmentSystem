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
  if((int)$request->P_id < 0 || (int)$request->A_id < 0  )
  {
    return http_response_code(400);
  }

  // Sanitize.
  
  $P_id = mysqli_real_escape_string($conn, (int)$request->P_id);
  $A_id = mysqli_real_escape_string($conn, (int)$request->A_id);


  // Create.
  $sql = "INSERT INTO add_agent (P_id,A_id) VALUES ({$P_id},{$A_id})";

  if($result = $conn->query($sql))
  {
    http_response_code(201);
    $agents = [
      'P_id' => $P_id,
       'A_id' =>$A_id
    ];
    echo json_encode($agents);
  }
  else
  {
    http_response_code(422);
  }
}
$conn->close();
?>