-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-04-2024 a las 12:19:04
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegos_de_mesa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asociaciones`
--

CREATE TABLE `asociaciones` (
  `id_asociacion` int(3) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asociaciones`
--

INSERT INTO `asociaciones` (`id_asociacion`, `nombre`, `latitud`, `longitud`, `direccion`) VALUES
(1, 'La Cofradía', 41.42891638072589, 2.1800370338553683, 'Casal de Barrio Congrés-Indians\r\nCarrer de la Manigua, 25 - 35, Sant Andreu, 08027 Barcelona\r\n'),
(2, 'Associació Lúdica Barcelona Reapers', 41.38640934308414, 2.12740650055208, 'Gran Via de Carles III, 33, Les Corts, 08028 Barcelona'),
(3, 'Club de Rol La Ploma Negra', 41.40340526508549, 2.144414204321432, 'Carrer de Manuel Angelon, 1, Sarrià-Sant Gervasi, 08006 Barcelona'),
(4, 'Associació Lúdica Sants-Niggurath', 41.37316948379865, 2.1366263957525438, 'Lleialtat Santsenca, Carrer d\'Olzinelles, 31, Sants-Montjuïc, 08014 Barcelona'),
(5, 'JugarXHorta', 41.43781082108695, 2.1602934122604833, 'Carrer de Feliu i Codina, 7-9, Horta-Guinardó, 08031 Barcelona');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bares`
--

CREATE TABLE `bares` (
  `id_bar` int(3) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bares`
--

INSERT INTO `bares` (`id_bar`, `nombre`, `latitud`, `longitud`, `direccion`) VALUES
(1, 'Bar Queimada Nivell Q', 41.41442560191019, 2.180600916835595, 'C/ de la Independència, 323, Sant Martí, 08026 Barcelona'),
(2, 'Còctel Bar La Cotxera', 41.43236582380968, 2.176726221873478, 'Carrer de Costa i Cuxart, 31, Nou Barris, 08016 Barcelona'),
(3, 'La Musgaña', 41.443289928350296, 2.1726020081788144, ' Carrer de Lorena, 33, Nou Barris, 08042 Barcelona'),
(4, 'Ocio Bar', 41.40139797353506, 2.1816737753500375, 'C/ de Sardenya, 202, L\'Eixample, 08013 Barcelona'),
(5, 'Churrería La Nena', 41.40735439380094, 2.1588054324358343, 'C/ de Ramón y Cajal, 36, Gràcia, 08012 Barcelona\r\n'),
(6, 'Butyklan Les Corts\r\n', 41.39119914654302, 2.126353607536516, 'Travessera de les Corts, 160, Les Corts, 08020 Barcelona');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bibliotecas`
--

CREATE TABLE `bibliotecas` (
  `id_biblioteca` int(3) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bibliotecas`
--

INSERT INTO `bibliotecas` (`id_biblioteca`, `nombre`, `latitud`, `longitud`, `direccion`) VALUES
(1, 'Biblioteca El Clot - Josep Benet', 41.40844613399379, 2.188260371126321, 'Pl. de las Glorias Catalanas, 37-38, Sant Martí, 08013 Barcelona'),
(2, 'Biblioteca Nou Barris - Aurora Díaz Plaja', 41.440339392503596, 2.1707224118634354, 'Plaça Major de Nou Barris, 2, Nou Barris, 08042 Barcelona\r\n'),
(3, ' Biblioteca Ignasi Iglésias-Can Fabra', 41.439038749286006, 2.1921971958368784, 'Carrer del Segre, 24, planta baixa, San Andrés de Palomar, 08030 Barcelona'),
(4, 'Biblioteca Vilapicina i la Torre Llobeta - Carmen Laforet', 41.431997451984444, 2.175168602917989, 'Plaça de Carmen Laforet, 11, Distrito de Nou Barris, 08016 Barcelona');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `lugar` varchar(500) NOT NULL,
  `inicio` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `lugar`, `inicio`, `fin`, `descripcion`) VALUES
(1, 'LA COMARCON\'24', 'Av. Monge y Bielsa S/N Torrevieja Alicante España', '2024-04-20 09:00:00', '2024-04-21 21:00:00', 'X Jornada de ocio alternativo de Torrevieja'),
(2, 'LUDIVERS 2023', 'Jardins de la Devesa de Girona, Girona, España', '2024-05-02 09:00:00', '2024-05-05 21:00:00', '\"X festival del Joc i leș Cultures de la imaginación\"'),
(3, 'ZONA LÚDICA 2024', 'CEULAJ Avenida de la Américas MA-703, s/n, 29532 Mollina, Málaga', '2024-05-02 09:00:00', '2024-05-05 21:00:00', 'Encuentro de Juegos de Mesa, donde se desarrollaran numerosos torneos, partidas, concurso de prototipos, demostraciones y otras actividades.'),
(4, 'FIRA JUGAR X JUGAR 2024', 'Recinte Firal Carrer Londres, 1, 08401 Granollers Barcelona España', '2024-05-10 09:00:00', '2024-05-12 21:00:00', 'Una muestra lúdica con todas las novedades del sector editorial, actividades y torneos.'),
(5, 'TIERRA DE NADIE 2022 (TDN 2023)', 'CEULAJ Avenida de la Américas MA-703, s/n, 29532 Mollina, Málaga Málaga España', '2024-08-02 09:00:00', '2024-08-06 21:00:00', NULL),
(6, 'UMBRAS DE ALTER PARADOX 2024', 'Avenida Ugarrandía 2 Huarte Navarra España', '2024-08-16 09:00:00', '2024-08-18 21:00:00', 'Jornadas lúdicas gratuitas en las que se comparte un ocio alternativo y social, que deje volar la imaginación. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_juego` int(6) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `fecha_publicacion` year(4) NOT NULL,
  `editorial` varchar(50) NOT NULL,
  `autoria` text NOT NULL,
  `ilustracion` text NOT NULL,
  `participantes_min` int(3) NOT NULL,
  `participantes_max` int(4) NOT NULL,
  `duracion_minutos` int(4) NOT NULL,
  `edad_min` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_juego`, `titulo`, `fecha_publicacion`, `editorial`, `autoria`, `ilustracion`, `participantes_min`, `participantes_max`, `duracion_minutos`, `edad_min`) VALUES
(1, 'Skyjo', '2015', 'Magilano', 'Alexander Bernhardt', 'Alexander Bernhardt', 2, 8, 30, 8),
(2, 'Catan', '1995', 'Devir', 'Klaus Teuber', 'Michael Menzel', 3, 4, 90, 10),
(22, 'Pelusas', '2022', 'mercurio', 'Reiner Knizia', 'Miguel Ángel Galán', 2, 6, 20, 8),
(23, 'Sushi go!', '2018', 'Devir', 'Phil Walker-Harding', 'Nan Rangsima, Tobias Schweiger, Phil Walker-Harding', 2, 5, 15, 8),
(24, 'Dobble', '2009', 'Asmmodee', '	Denis Blanchot.', 'NA.', 2, 8, 15, 6),
(25, 'El rey de los dados', '2017', 'Haba', 'Nils Nilsson', 'Guss Batts', 2, 5, 30, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `id_tienda` int(3) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`id_tienda`, `nombre`, `latitud`, `longitud`, `direccion`) VALUES
(1, 'JugarXJugar', 41.40722278618941, 2.174564342649728, 'Av. de Gaudí, 39, L\'Eixample, 08025 Barcelona'),
(2, 'Kaburi', 41.39330266984625, 2.1780883968847893, 'Pg. de St. Joan, 11, L\'Eixample, 08010 Barcelona'),
(3, 'Mathom Maldà', 41.383547218379526, 2.173451103752235, 'c/ del Pi, 1 (Galeries, Local 10, 08002 Maldà, Barcelona'),
(4, 'Gameria', 41.39263125058313, 2.1774038241897595, 'C/ d\'Ausiàs Marc, 52, L\'Eixample, 08010 Barcelona'),
(5, 'Zacatrus', 41.38240655136882, 2.1629122977834827, 'Carrer de Casanova, 3, Eixample, 08011 Barcelona'),
(6, 'The Curiosity Shop', 41.40232164185671, 2.1579052221358146, 'C/ de Ramón y Cajal, 13, Gràcia, 08012 Barcelona'),
(7, 'Lupoteca', 41.40380495540293, 2.139431051049934, 'Ronda del General Mitre, 150, Sarrià-Sant Gervasi, 08006 Barcelona'),
(8, '4Dados', 41.39269225048907, 2.176259264431018, 'C/ de Bailèn, 21, L\'Eixample, 08010 Barcelona'),
(9, 'inGenio BCN Games', 41.39268640176218, 2.1796100444402353, 'Pg. de St. Joan, 16, L\'Eixample, 08010 Barcelona'),
(10, 'El Nucli', 41.37864473927091, 2.137115426998803, 'C/ de Valladolid, 41, Sants-Montjuïc, 08014 Barcelona'),
(11, 'La Tienda Scum', 41.42166892755371, 2.1994945468826774, 'C/ del Treball, 246, Sant Martí, 08020 Barcelona'),
(12, 'La Jungla', 41.40253651004061, 2.205636786620659, 'Plaça de Sant Bernat Calbó, 8, Sant Martí, 08005 Barcelona');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asociaciones`
--
ALTER TABLE `asociaciones`
  ADD PRIMARY KEY (`id_asociacion`);

--
-- Indices de la tabla `bares`
--
ALTER TABLE `bares`
  ADD PRIMARY KEY (`id_bar`);

--
-- Indices de la tabla `bibliotecas`
--
ALTER TABLE `bibliotecas`
  ADD PRIMARY KEY (`id_biblioteca`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_juego`);

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`id_tienda`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asociaciones`
--
ALTER TABLE `asociaciones`
  MODIFY `id_asociacion` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `bares`
--
ALTER TABLE `bares`
  MODIFY `id_bar` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `bibliotecas`
--
ALTER TABLE `bibliotecas`
  MODIFY `id_biblioteca` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_juego` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `id_tienda` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
