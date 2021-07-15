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

  // Sanitize.
  $Username = mysqli_real_escape_string($conn, trim($request->Username));
  $Password= mysqli_real_escape_string($conn, trim($request->Password));
  $Job= mysqli_real_escape_string($conn, trim($request->Job));




  // Create.
  $sql = "SELECT Username,Password , Job FROM users  WHERE Username='{$Username}' and Password='{$Password}' and Job='{$Job}'";

$result = mysqli_query($conn,$sql);
 if($result )
{
  if(mysqli_num_rows($result)>0){
  		while($row = mysqli_fetch_assoc($result))
 		{
   			$data = array("Username"=>$row['Username'] , "Password"=>$row['Password'] ,  "Job"=>$row['Job']);
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
