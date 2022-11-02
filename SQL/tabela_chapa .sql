-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Tempo de geração: 02/11/2022 às 13:05
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
-- Estrutura para tabela `chapa`
--

CREATE TABLE `chapa` (
  `id` smallint(6) NOT NULL,
  `name_chapa` varchar(50) NOT NULL,
  `name_sindico` varchar(50) NOT NULL,
  `cpf_sindico` varchar(50) NOT NULL,
  `imagem_sindico` varchar(250) DEFAULT NULL,
  `name_sub_sindico` varchar(50) NOT NULL,
  `cpf_sub_sindico` varchar(50) NOT NULL,
  `imagem_sub_sindico` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `chapa`
--

INSERT INTO `chapa` (`id`, `name_chapa`, `name_sindico`, `cpf_sindico`, `imagem_sindico`, `name_sub_sindico`, `cpf_sub_sindico`, `imagem_sub_sindico`) VALUES
(2, 'Pilantras', 'Augustinho Carrara', '111222333-78', 'https://www.polemicaparaiba.com.br/wp-content/uploads/2021/02/Pedro-Cardoso-Agostinho-Carrara-1-1.jpg', 'Orlando Lero', '654.789.321-11', 'https://4.bp.blogspot.com/-ivwuSV4j5Iw/WBS8boARw4I/AAAAAAAAvkA/KQ9SUSO7mCYPoUrgjgjZuWLhSWAD80KeACLcB/s1600/rolando.jpg'),
(16, 'Metaleiros', 'Axel Rose', '666547897125-77', 'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1615125753/content-items/007/304/859/Axl-Rose-1600x2000-01-original.png?1615125753', 'Bruce Dickson', '789654123-99', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_U4JMC84XPa63dP01_r54ua4z7zCYuY48g&usqp=CAU'),
(20, 'Star Wars', 'Yoda', '789654123-85', 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info', 'Darth', '123456789-00', 'https://nerdcultnews.com/wp-content/uploads/2022/06/darth-vader-fortnite.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `chapa`
--
ALTER TABLE `chapa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `chapa`
--
ALTER TABLE `chapa`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
