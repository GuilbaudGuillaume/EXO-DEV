<?php
try {
	$bdd = new PDO('mysql:host=localhost;dbname=exo;charset=utf8', 'root', '');
	/* Mamp pour Mac
	$bdd = new PDO('mysql:host=localhost;dbname=exo;charset=utf8', 'root', 'root');
	*/
}
catch (Exception $e)
{
	die('Erreur : ' . $e->getMessage());
}
?>