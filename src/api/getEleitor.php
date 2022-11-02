<?php

include("ClassConexao.php");

class ClassEleitor extends ClassConexao{

  public function exibeEleitor()
  {
    $BFetch=$this->conectaDB()->prepare("select * from eleitor");
    $BFetch->execute();

    $ELEITOR = [];
    $INDEX = 0;

    while ($Fetch = $BFetch -> fetch(PDO::FETCH_ASSOC)) {
      $ELEITOR[$INDEX] = [
        'id'=>$Fetch['id'],
        'cod'=>$Fetch['cod'],
        'situacao'=>$Fetch['situacao'],
        'candidato'=>$Fetch['candidato'],
      ];
      $INDEX++;
    }

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    echo json_encode($ELEITOR);

  }
}

$getEleitor = new ClassEleitor();
$getEleitor->exibeEleitor();