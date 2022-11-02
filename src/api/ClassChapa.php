<?php

include("ClassConexao.php");

class ClassChapa extends ClassConexao{

  public function exibeChapa()
  {
    $BFetch=$this->conectaDB()->prepare("select * from chapa");
    $BFetch->execute();

    $CHAPA = [];
    $INDEX = 0;

    while ($Fetch = $BFetch -> fetch(PDO::FETCH_ASSOC)) {
      $CHAPA[$INDEX] = [
        'id'=>$Fetch['id'],
        'name_chapa'=>$Fetch['name_chapa'],
        'name_sindico'=>$Fetch['name_sindico'],
        'cpf_sindico'=>$Fetch['cpf_sindico'],
        'imagem_sindico'=>$Fetch['imagem_sindico'],
        'name_sub_sindico'=>$Fetch['name_sub_sindico'],
        'cpf_sub_sindico'=>$Fetch['cpf_sub_sindico'],
        'imagem_sub_sindico'=>$Fetch['imagem_sub_sindico'],
        'votos'=>$Fetch['votos']
      ];
      $INDEX++;
    }

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    echo json_encode($CHAPA);

  }
}