<?php

include("ClassConexao.php");

Class ClassPostNewVote extends ClassConexao{

    public function resposta($codigo, $ok, $msg) {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 1000");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
        header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
        http_response_code($codigo);
        echo (json_encode([
            'ok' => $ok,
            'msg' => $msg
        ]));
        die;
    }

    public function enviarVoto()
    {   
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
            ClassPostNewVote::resposta(200, true, '');
        }

        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            ClassPostNewVote::resposta(400, false, 'Método inválido');

        $body = file_get_contents('php://input');
        
        if (!$body) {
            echo json_encode('Corpo da requisição não encontrado');
            die;
        }
        $body = json_decode($body);
        $body->cod = filter_var($body->cod);
        $body->situacao = filter_var($body->situacao);
        $body->candidato = filter_var($body->candidato);

        $stm = $this->conectaDB()->prepare('INSERT INTO eleitor (cod, situacao, candidato) VALUES (:cod, :situacao, :candidato)');
        $stm->bindParam('cod', $body->cod);
        $stm->bindParam('situacao', $body->situacao);
        $stm->bindParam('candidato', $body->candidato);

        $stm->execute();
        ClassPostNewVote::resposta(200, true, 'Salvo com sucesso');
    }
}

// echo('Pagina de envio');
$postVote = new ClassPostNewVote();
$postVote->enviarVoto();