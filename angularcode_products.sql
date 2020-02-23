-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 24-Fev-2020 às 00:19
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angularcode_products`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `sku` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `mrp` double NOT NULL,
  `description` varchar(500) NOT NULL,
  `packing` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL,
  `category` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `manufactorer` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `price`, `mrp`, `description`, `packing`, `image`, `category`, `stock`, `status`, `manufactorer`) VALUES
(138, 5053, 'Aramusk Bath Soap For Men   ', 108, 108, '', '3 X 125 g ', 'aramusk-bath-soap-for-men-3-x-125-g.png', 140, 100, 'Active', NULL),
(248, 386, 'Adidas Deo Ice Dive Deo Body Spray   ', 199, 199, '', '150 ml ', 'adidas-adidas-body-deo-ice-dive-150-ml.png', 130, 20, 'Inactive', NULL),
(318, 6124, 'Baba Ramdev Patanjali Anti Bacterial Herbal Hand Wash Refill   ', 40, 40, '', '200 ml ', 'baba-ramdev-patanjali-anti-bacterial-herbal-hand-wash-refill-200-ml.png', 160, 50, 'Inactive', NULL),
(432, 5625, 'Adidas Ice Dive Shower Gel   ', 150, 150, '', '250 ml ', 'adidas-ice-dive-shower-gel-250-ml.png', 170, 0, 'Active', NULL),
(448, 2298, 'Axe Denim Cologne Talc   ', 115, 115, '', '300 g ', '1327941212-Jan30-1147.png', 180, 0, 'Active', NULL),
(490, 8909, 'All Out Off Family Insect Repellent Lotion   ', 39, 39, '', '50 ml ', 'missingimagegr200.png', 190, 0, 'Active', NULL),
(589, 4202, 'Baba Ramdev Patanjali Gulab Jal   ', 25, 25, '', '120 ml ', 'patanjali-gulab-jal-120-ml.png', 220, 0, 'Active', NULL),
(722, 8068, 'Areev Melon &amp; Peach Mild Shampoo   ', 275, 275, '', '300 ml ', 'areev-melon-peach-mild-shampoo-v-300-ml-3.png', 200, 0, 'Active', NULL),
(769, 8152, '18 Herbs K-Oil 100% Herbal Care   ', 275, 275, 'Hair Oil', '100 ml ', '18-herbs-18-herbs-k-oil-100-herbal-care-100-ml-1.png', 210, 100, 'Active', NULL),
(797, 8273, 'Baba Ramdev Patanjali Kesh Kanti Anti Dandruff Hair Cleanser With Natural Conditioner   ', 110, 110, 'Anti Dandruff Shampoo', '200 ml ', 'baba-ramdev-patanjali-kesh-kanti-hair-cleanser-with-natural-conditioner-200-ml.png', 230, 22, 'Active', NULL),
(901, 3936, 'Roots Hair Brush 2011   ', 175, 175, 'Hair Brush', '1 pc ', 'roots-hair-brush-2011-1-pc.png', 240, 5, 'Active', NULL),
(918, 4273, 'Biotique Bio Henna Fresh Powder Hair Color   ', 199, 199, 'Powder', '90 g ', 'biotique-bio-henna-fresh-powder-hair-color-90-g.png', 250, 50, 'Active', NULL),
(943, 7904, 'Brylcreem Anti Dandruff Aqua Oxy Hair Gel   ', 400, 40, 'Hair Gel', '50 g ', 'brylcreem-brylcreem-anti-dandruff-aqua-oxy-hair-gel-50-g.png', 260, 15, 'Active', NULL),
(949, 5848, 'Ayur Natural Rajasthani Heena Mehendi   ', 11, 25, 'Mehendi.', '100 gm', 'ayur-natural-rajasthani-heena-mehendi-100-g.png', 270, 150, 'Active', NULL),
(950, 0, 'GameBoy Advance Color', 15000, 0, 'Very very cool', '', '', 0, 132, 'Active', 'Nintendo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=951;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
