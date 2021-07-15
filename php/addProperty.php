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
  if((int)$request->P_id < 0 || trim($request->Title) === '' || trim($request->Address) === '' || (int)$request->Price < 0 || trim($request->Is_sold) === '' )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $P_id = mysql_real_escape_string($conn,(int)$request->P_id);
  $Title = mysqli_real_escape_string($conn, trim($request->Title));
  $Address = mysqli_real_escape_string($conn, trim($request->Address));
  $Price= mysqli_real_escape_string($conn, (int)$request->Price);
  $Is_sold = mysqli_real_escape_string($conn , trim($request->Is_sold));


  // Create.
  $sql = "INSERT INTO property (P_id,Title,Address,Price,Is_sold) VALUES ('{$P_id}','{$Title}','{$Address}','{$Price}','{Is_sold}')";

  if($result = $conn->query($sql))
  {
    
    echo "record added successfully";
    http_response_code(201);
    $properties = [
      'P_id' => $P_id,
      'Title' => $Title,
      'Address' => $Address,
      'Price'    => $Prices,
      'Is_sold' => $Is_sold
    ];
    echo "record added successfully";
    echo json_encode($properties);
  }
  else
  {
    echo "data not added ";
     http_response_code(422);
  }
}
$conn->close();
?>