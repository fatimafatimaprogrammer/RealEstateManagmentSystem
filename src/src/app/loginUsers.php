<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost";
$username = "root";
$password = "";
$mydatabase="mydbcourseswala";

// Create connection
$conn = new mysqli($servername,$username, $password,$mydatabase);

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

  // Sanitize.
  $userName = mysqli_real_escape_string($conn, trim($request->userName));
  $password= mysqli_real_escape_string($conn, trim($request->password));


  // Create.
  $sql = "SELECT userName,password FROM users  WHERE userName='{$userName}' and password='{$password}'";

$result = mysqli_query($conn,$sql);
 if($result )
{
  if(mysqli_num_rows($result)>0){
  		while($row = mysqli_fetch_assoc($result))
 		{
   			$data = array("userName"=>$row['userName'] , "password"=>$row['password']);
 		}
  }
	else
	{
		$data=null;
		
	}
	echo json_encode($data);
}
$conn->close();
}
?>
