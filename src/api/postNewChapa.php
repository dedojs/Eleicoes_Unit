<?php

include("ClassConexao.php");

Class ClassPostNewChapa extends ClassConexao{

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

    public function enviarCadastro()
    {   
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
            ClassPostNewChapa::resposta(200, true, '');
        }

        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            ClassPostNewChapa::resposta(400, false, 'Método inválido');

        $body = file_get_contents('php://input');
        
        if (!$body) {
            echo json_encode('Corpo da requisição não encontrado');
            die;
        }
        $body = json_decode($body);
        $body->name_chapa = filter_var($body->name_chapa);
        $body->name_sindico = filter_var($body->name_sindico);
        $body->cpf_sindico = filter_var($body->cpf_sindico);
        $body->imagem_sindico = filter_var($body->imagem_sindico);
        $body->name_sub_sindico = filter_var($body->name_sub_sindico);
        $body->cpf_sub_sindico = filter_var($body->cpf_sub_sindico);
        $body->imagem_sub_sindico = filter_var($body->imagem_sub_sindico);


        $stm = $this->conectaDB()->prepare('INSERT INTO chapa (name_chapa, name_sindico, cpf_sindico, imagem_sindico, name_sub_sindico, cpf_sub_sindico, imagem_sub_sindico) VALUES (:name_chapa, :name_sindico, :cpf_sindico, :imagem_sindico, :name_sub_sindico, :cpf_sub_sindico, :imagem_sub_sindico)');
        $stm->bindParam('name_chapa', $body->name_chapa);
        $stm->bindParam('name_sindico', $body->name_sindico);
        $stm->bindParam('cpf_sindico', $body->cpf_sindico);
        $stm->bindParam('imagem_sindico', $body->imagem_sindico);
        $stm->bindParam('name_sub_sindico', $body->name_sub_sindico);
        $stm->bindParam('cpf_sub_sindico', $body->cpf_sub_sindico);
        $stm->bindParam('imagem_sub_sindico', $body->imagem_sub_sindico);

        $stm->execute();
        ClassPostNewChapa::resposta(200, true, 'Salvo com sucesso');
    }
}

// echo('Pagina de envio');
$postChapa = new ClassPostNewChapa();
$postChapa->enviarCadastro();