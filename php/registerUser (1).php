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
  if((int)$request->U_id < 0 || trim($request->Name) === '' || trim($request->Username) === '' || trim($request->Password) === '' ||   trim($request->Phone) === '' || trim($request->Job) === '' )
  {
    return http_response_code(400);
  }

  // Sanitize.
  
  $U_id = mysqli_real_escape_string($conn, (int)$request->U_id);
  $Name= mysqli_real_escape_string($conn, trim($request->Name));
  $Username = mysqli_real_escape_string($conn, trim($request->Username));
  $Password= mysqli_real_escape_string($conn, trim($request->Password));
  $Phone= mysqli_real_escape_string($conn, (int)$request->Phone);
  $Job= mysqli_real_escape_string($conn, trim($request->Job));
  


  // Create.
  $sql = "INSERT INTO users (U_id,Name,Username,Password,Phone,Job) VALUES ({$U_id},'{$Name}','{$Username}','{$Password}',{$Phone},'{$Job}')";

  if($result = $conn->query($sql))
  {
    http_response_code(201);
    $users = [
      'U_id' => $U_id,
      'Name' => $Name,
       'Username' => $Username,
      'Password'    => $Password,
       'Phone' => $Phone,
      'Job'=> $Job
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