<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html>
<head>
	<title>TOM AND JERRY GAME</title>
</head>
<style type="text/css">
	
	body{
		background-image: url(pngegg1.png);
		background-repeat: no-repeat;
		background-color:beige;
		
	}
		
	div{
		font-family:serif;
		font-weight:300 bold;
		margin-top: 13%;
		margin-left: 45%;
		text-align: center;
		color:brown;
		
	}
	</style>
<body>
	<div>
	WELCOME , <?php echo $user_data['user_name']; ?> TO TOM AND JERRY GAME 
	<h1> Click to Start The Game <h1>
	<a href="index.html">start game </a>


	<br>
	 <h2>To Log Out  </h2> <a href="logout.php">Click Here</a>
	 </div>
</body>
</html>