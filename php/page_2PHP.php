<?php
require "bdd/connexionBdd.php";

if(isset($_GET["nom"]) && !empty($_GET['nom'])) {
	$nom = $_GET["nom"];
	$requete = "SELECT * FROM users WHERE name = :nom";
	$requeteresult = $bdd->prepare($requete);
	$resultat = $requeteresult->execute(array("nom" => $nom));
	$fetchresult = $requeteresult->fetch();
	if($fetchresult) {
		echo "nom = " . $fetchresult['name'] . "<br/>";
		echo "prenom = " . $fetchresult['prenom'] . "<br/>";
		echo "age = " . $fetchresult['age'] . "<br/>";
		echo "ville = " . $fetchresult['ville'] . "<br/>";
	}
	else {
		echo "<p>Pas de nom corespondant dans la base de donnée</p>";
	}
}
?>