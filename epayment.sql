-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2020 at 04:53 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `epayment`
--

-- --------------------------------------------------------

--
-- Table structure for table `tagihan`
--

CREATE TABLE `tagihan` (
  `id` int(11) NOT NULL,
  `nama` varchar(200) NOT NULL,
  `semester` int(200) NOT NULL,
  `nilai` int(20) NOT NULL,
  `terbayar` int(20) NOT NULL,
  `status_bayar` int(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tagihan`
--

INSERT INTO `tagihan` (`id`, `nama`, `semester`, `nilai`, `terbayar`, `status_bayar`, `created_at`) VALUES
(1, 'Ayam goreng + Telur + Nasi', 6, 12000, 0, 0, '2019-02-28 13:20:20'),
(2, 'Telur + Nasi', 6, 6000, 0, 0, '2019-02-27 21:30:00'),
(3, 'Ikan + Tempura + Nasi', 6, 10000, 0, 0, '2019-03-01 18:20:20'),
(4, 'Ayam', 6, 4000, 0, 0, '2020-03-02 11:35:38'),
(5, 'Ikan + Pentol + Nasi', 6, 9000, 0, 0, '2020-03-02 11:44:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tagihan`
--
ALTER TABLE `tagihan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tagihan`
--
ALTER TABLE `tagihan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
