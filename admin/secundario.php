<?php
$servername = "localhost";
$username = "allan";
$password = "sistemaufrn";
$dbname = "web_imd";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT image FROM fotos";
$result = mysqli_query($conn, $sql);

$myArray = array();
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        $myArray[] = $row;
    }
}

mysqli_close($conn);

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
echo json_encode($myArray);
