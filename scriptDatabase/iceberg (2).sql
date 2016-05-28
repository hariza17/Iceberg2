-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2016 a las 01:17:52
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iceberg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acciones`
--

CREATE TABLE `acciones` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `programa_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencias`
--

CREATE TABLE `asistencias` (
  `id` bigint(20) NOT NULL,
  `asistio` int(11) NOT NULL,
  `beneficiario_id` bigint(20) DEFAULT NULL,
  `programacion_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `beneficiarios`
--

CREATE TABLE `beneficiarios` (
  `id` bigint(20) NOT NULL,
  `barrio` varchar(255) DEFAULT NULL,
  `datos_ficha` longtext,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `primer_apellido` varchar(255) DEFAULT NULL,
  `primer_nombre` varchar(255) DEFAULT NULL,
  `segundo_apellido` varchar(255) DEFAULT NULL,
  `segundo_nombre` varchar(255) DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `zona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `beneficiarios_programas`
--

CREATE TABLE `beneficiarios_programas` (
  `beneficiarios_id` bigint(20) NOT NULL,
  `programas_id` bigint(20) NOT NULL,
  `periodo_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consejos_comunitarios`
--

CREATE TABLE `consejos_comunitarios` (
  `id` bigint(20) NOT NULL,
  `contacto` varchar(255) DEFAULT NULL,
  `estado` int(11) NOT NULL,
  `participantes` longtext,
  `periodo` varchar(255) DEFAULT NULL,
  `presidente` varchar(255) DEFAULT NULL,
  `zona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` bigint(20) NOT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `primer_apellido` varchar(255) DEFAULT NULL,
  `primer_nombre` varchar(255) DEFAULT NULL,
  `segundo_apellido` varchar(255) DEFAULT NULL,
  `segundo_nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `indicadores`
--

CREATE TABLE `indicadores` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `indicadores`
--

INSERT INTO `indicadores` (`id`, `descripcion`, `nombre`) VALUES
(2, '10448992', 'Indicador 2'),
(3, 'indicador 3', 'indicador 3'),
(4, 'indicador 4', 'indicador 4'),
(5, 'indicador 4', 'indicador 4'),
(6, 'indicador 4', 'indicador 4'),
(7, 'indicador ultimo', 'indicador ultimo'),
(8, 'indicador ultimo', 'indicador ultimo'),
(9, 'indicador ultimo', 'indicador ultimo'),
(10, 'indicador ultimo', 'indicador ultimo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivos`
--

CREATE TABLE `objetivos` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `objetivos`
--

INSERT INTO `objetivos` (`id`, `descripcion`, `nombre`) VALUES
(1, 'objetivo 4', 'objetivo4'),
(2, 'objetivo 2', 'objetivo2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivos_indicadores`
--

CREATE TABLE `objetivos_indicadores` (
  `id` bigint(20) NOT NULL,
  `indicador_id` bigint(20) DEFAULT NULL,
  `objetivo_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `objetivos_indicadores`
--

INSERT INTO `objetivos_indicadores` (`id`, `indicador_id`, `objetivo_id`) VALUES
(1, 8, 2),
(2, 9, 2),
(3, 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles_acciones`
--

CREATE TABLE `perfiles_acciones` (
  `perfiles_id` bigint(20) NOT NULL,
  `acciones_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo`
--

CREATE TABLE `periodo` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `descripcion` longtext,
  `estado` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programaciones`
--

CREATE TABLE `programaciones` (
  `id` bigint(20) NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `observaciones` longtext,
  `actividad_id` bigint(20) DEFAULT NULL,
  `zona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas`
--

CREATE TABLE `programas` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `empleado_id` bigint(20) DEFAULT NULL,
  `perfil_id` bigint(20) DEFAULT NULL,
  `zona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `id` bigint(20) NOT NULL,
  `descripcion` longtext,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acciones`
--
ALTER TABLE `acciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6uw1kvvefw1epi6l1a91tscly` (`programa_id`);

--
-- Indices de la tabla `asistencias`
--
ALTER TABLE `asistencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_s2a44fvvy62bc3ipet80tqt3j` (`beneficiario_id`),
  ADD KEY `FK_8jsshl4kex3wy32agjr38hksq` (`programacion_id`);

--
-- Indices de la tabla `beneficiarios`
--
ALTER TABLE `beneficiarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_m2qvm65vklvslsi50t7fx1utv` (`zona_id`);

--
-- Indices de la tabla `beneficiarios_programas`
--
ALTER TABLE `beneficiarios_programas`
  ADD KEY `FK_trahmhxbrhk66ulqbbbujs4pu` (`programas_id`),
  ADD KEY `FK_jdb5ec0f3tdit5idj6wd9mter` (`beneficiarios_id`),
  ADD KEY `fk_beneficiarios_programas_periodo1_idx` (`periodo_id`);

--
-- Indices de la tabla `consejos_comunitarios`
--
ALTER TABLE `consejos_comunitarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_udc66mx9ogjmer73ycro3p3q` (`zona_id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `indicadores`
--
ALTER TABLE `indicadores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `objetivos_indicadores`
--
ALTER TABLE `objetivos_indicadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_svw74wbdbrb7m7x0qdlidc16d` (`indicador_id`),
  ADD KEY `FK_7ts0d8atj0hnxtbccoev2u91c` (`objetivo_id`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfiles_acciones`
--
ALTER TABLE `perfiles_acciones`
  ADD KEY `FK_8p5hoyhtxggxxgb9urc9fgmxb` (`acciones_id`),
  ADD KEY `FK_75lt95k5p2mlku6yeltqt0qb2` (`perfiles_id`);

--
-- Indices de la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `programaciones`
--
ALTER TABLE `programaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_k20y9cnoqkeqa1bsesursfio3` (`actividad_id`),
  ADD KEY `FK_7pus7bd93waaukvi7au1y8q7d` (`zona_id`);

--
-- Indices de la tabla `programas`
--
ALTER TABLE `programas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_k4h29kj0svtgwny54aho7es8l` (`empleado_id`),
  ADD KEY `FK_o2ykvynsaiec73nta7y3yaeyx` (`perfil_id`),
  ADD KEY `FK_r6vdcmkkl8u00c08yi927wsib` (`zona_id`);

--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acciones`
--
ALTER TABLE `acciones`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `asistencias`
--
ALTER TABLE `asistencias`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `beneficiarios`
--
ALTER TABLE `beneficiarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `consejos_comunitarios`
--
ALTER TABLE `consejos_comunitarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `indicadores`
--
ALTER TABLE `indicadores`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `objetivos`
--
ALTER TABLE `objetivos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `objetivos_indicadores`
--
ALTER TABLE `objetivos_indicadores`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `programaciones`
--
ALTER TABLE `programaciones`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `programas`
--
ALTER TABLE `programas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `zonas`
--
ALTER TABLE `zonas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `FK_6uw1kvvefw1epi6l1a91tscly` FOREIGN KEY (`programa_id`) REFERENCES `programas` (`id`);

--
-- Filtros para la tabla `asistencias`
--
ALTER TABLE `asistencias`
  ADD CONSTRAINT `FK_8jsshl4kex3wy32agjr38hksq` FOREIGN KEY (`programacion_id`) REFERENCES `programaciones` (`id`),
  ADD CONSTRAINT `FK_s2a44fvvy62bc3ipet80tqt3j` FOREIGN KEY (`beneficiario_id`) REFERENCES `beneficiarios` (`id`);

--
-- Filtros para la tabla `beneficiarios`
--
ALTER TABLE `beneficiarios`
  ADD CONSTRAINT `FK_m2qvm65vklvslsi50t7fx1utv` FOREIGN KEY (`zona_id`) REFERENCES `zonas` (`id`);

--
-- Filtros para la tabla `beneficiarios_programas`
--
ALTER TABLE `beneficiarios_programas`
  ADD CONSTRAINT `FK_jdb5ec0f3tdit5idj6wd9mter` FOREIGN KEY (`beneficiarios_id`) REFERENCES `beneficiarios` (`id`),
  ADD CONSTRAINT `FK_trahmhxbrhk66ulqbbbujs4pu` FOREIGN KEY (`programas_id`) REFERENCES `programas` (`id`),
  ADD CONSTRAINT `fk_beneficiarios_programas_periodo1` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `consejos_comunitarios`
--
ALTER TABLE `consejos_comunitarios`
  ADD CONSTRAINT `FK_udc66mx9ogjmer73ycro3p3q` FOREIGN KEY (`zona_id`) REFERENCES `zonas` (`id`);

--
-- Filtros para la tabla `objetivos_indicadores`
--
ALTER TABLE `objetivos_indicadores`
  ADD CONSTRAINT `FK_7ts0d8atj0hnxtbccoev2u91c` FOREIGN KEY (`objetivo_id`) REFERENCES `objetivos` (`id`),
  ADD CONSTRAINT `FK_svw74wbdbrb7m7x0qdlidc16d` FOREIGN KEY (`indicador_id`) REFERENCES `indicadores` (`id`);

--
-- Filtros para la tabla `perfiles_acciones`
--
ALTER TABLE `perfiles_acciones`
  ADD CONSTRAINT `FK_75lt95k5p2mlku6yeltqt0qb2` FOREIGN KEY (`perfiles_id`) REFERENCES `perfiles` (`id`),
  ADD CONSTRAINT `FK_8p5hoyhtxggxxgb9urc9fgmxb` FOREIGN KEY (`acciones_id`) REFERENCES `acciones` (`id`);

--
-- Filtros para la tabla `programaciones`
--
ALTER TABLE `programaciones`
  ADD CONSTRAINT `FK_7pus7bd93waaukvi7au1y8q7d` FOREIGN KEY (`zona_id`) REFERENCES `zonas` (`id`),
  ADD CONSTRAINT `FK_k20y9cnoqkeqa1bsesursfio3` FOREIGN KEY (`actividad_id`) REFERENCES `actividades` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_k4h29kj0svtgwny54aho7es8l` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`),
  ADD CONSTRAINT `FK_o2ykvynsaiec73nta7y3yaeyx` FOREIGN KEY (`perfil_id`) REFERENCES `perfiles` (`id`),
  ADD CONSTRAINT `FK_r6vdcmkkl8u00c08yi927wsib` FOREIGN KEY (`zona_id`) REFERENCES `zonas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
