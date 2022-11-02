-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Tempo de geração: 02/11/2022 às 13:08
-- Versão do servidor: 10.4.25-MariaDB
-- Versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_unit_condominio`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `eleitor`
--

CREATE TABLE `eleitor` (
  `id` smallint(6) NOT NULL,
  `cod` varchar(50) NOT NULL,
  `situacao` tinyint(1) DEFAULT NULL,
  `candidato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `eleitor`
--

INSERT INTO `eleitor` (`id`, `cod`, `situacao`, `candidato`) VALUES
(30, '345A', 1, 20),
(31, '567Y', 1, 2),
(32, '567U', 1, 20);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `eleitor`
--
ALTER TABLE `eleitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `eleitor`
--
ALTER TABLE `eleitor`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
