-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-10-2017 a las 03:46:44
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `utn2018`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` bigint(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100),
  `perfil` varchar(100) NOT NULL DEFAULT 'usuario'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `email`, `pass`, `perfil`) VALUES
(1, 'fhenseler@outlook.com', 'fdg231s', 'admin');


-- Índices para tablas volcadas


--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `compras`
-- --

CREATE TABLE `compras` (
  `idcompra` bigint(20) NOT NULL,
  `idusuario` bigint(20) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `precio` varchar(100) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Volcado de datos para la tabla `compras`
-- --

INSERT INTO `compras` (`idcompra`, `idusuario`, `marca`, `fecha`, `modelo`, `precio`) VALUES
(1, 1, 'Samsung', '12/11/2018','J7','1234.25');

-- --
-- -- Índices para tablas volcadas
-- --

-- --
-- -- Indices de la tabla `compras`
-- --
ALTER TABLE `compras`
  ADD PRIMARY KEY (`idcompra`);

-- --
-- -- AUTO_INCREMENT de las tablas volcadas
-- --

-- --
-- -- AUTO_INCREMENT de la tabla `compras`
-- --
ALTER TABLE `compras`
  MODIFY `idcompra` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;




-- -- --------------------------------------------------------

-- --
-- -- Estructura de tabla para la tabla `logs`
-- --

CREATE TABLE `logs` (
  `idlog` bigint(20) NOT NULL,
  `idusuario` bigint(20) NOT NULL,
  `metodo` varchar(100) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `hora` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- -- Volcado de datos para la tabla `logs`
-- --

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `logs`
--
-- ALTER TABLE `logs`
  ADD PRIMARY KEY (`idlog`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `logs`
--
-- ALTER TABLE `logs`
  MODIFY `idlog` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

