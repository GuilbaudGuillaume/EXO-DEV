<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Page 2</title>
		<link rel="stylesheet" href="style/style.css">
		<?php require "php/page_2PHP.php"; ?>
	</head>
	<body>
		<div><p>Entrer un nom à chercher</p></div>
			<div>
				<form method="get">
					<input name="nom" type='text' placeholder="nom" />
					<input type="submit" value="valider" />
				</form>
			</div>
			<div id="meteo"></div>
			<div id="error"></div>
		<div class='lien'><a class="precedent" href="index.php">Page 1</a></div>
		<div class="lien"><a class='suivant' href="page_3.php">Page 3</a></div>
		<div id="time"><p>40 minute</p></div>
		<script type="text/javascript" src="script/scriptMeteo.js"></script>
	</body>
</html>