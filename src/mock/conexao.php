<?php

$hostname = 'localhost';
$bancodedados = "db_unit_condominio";
$usuario = "root";
$senha = '';

$mysqli = new $mysqli($hostname, $usuario, $senha, $bancodedados);

if ($mysqli->conect_errno) {
    echo "Falha ao conectar: (" . $mysqli->conect_errno . ") " . $mysqli->connect_error;
} else
    echo "Conectado!";