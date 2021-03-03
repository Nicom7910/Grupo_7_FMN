-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fmn
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Celulares'),(2,'Perifericos'),(3,'Gaming');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'Sony'),(2,'Motorola'),(3,'Samsung');
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Playstation','sdfsdf','unafoto.jpg',5,1,3,'2021-03-02 18:08:35','2021-03-02 18:08:35',NULL),(2,'Playstation','sdsd','photo-1614711407156.jpg',11,1,1,'2021-03-02 18:56:47','2021-03-02 18:56:47',NULL),(3,'celular','65654','photo-1614711986052.jpg',5,3,1,'2021-03-02 19:06:26','2021-03-02 19:06:26',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Francisco','','francsik23@gmail.com','$2b$12$cpepgJgdVb6Z9VPL6bkuYOWvHnjGYLcyAOhKBmM0jRxDP1LKAEctK','2021-02-12 14:35:02','2021-02-12 14:35:02',NULL,'francsik23@gmail.com-1613140502119.jpg',0,'','','',''),(2,'Francisco','','francsik23@gmail.com','$2b$12$1Cj6AuPVG6DUXu.kfavJPuGDzP8KGa/EDoKvRvXtTJ1.uOBgOrxDW','2021-02-12 14:38:08','2021-02-12 14:38:08',NULL,NULL,0,'','','',''),(3,'Juan','','juan@gmail.com','$2b$12$APXZ20X/ax214lqyiAwcs.JubGnhGqk5ps/OCJo3Q6Xs.6KFwtwqW','2021-02-12 14:50:13','2021-02-12 14:50:13',NULL,NULL,0,'','','',''),(4,'Francisco','','francsik23@gmail.com','$2b$12$2/v3ZDr6yEmD./3Y4Dx56eY9mMaDOCOfx7iJ4T.gl.7WELDDFO/jK','2021-02-12 14:50:32','2021-02-12 14:50:32',NULL,NULL,0,'','','',''),(5,'','','juan@gmail.com','$2b$12$9pb3iUCiVj9BZLhxB8UapeLDNwU7TJT.4bNtnAETXdl7K/yCXWZ72','2021-02-12 14:51:18','2021-02-12 14:51:18',NULL,NULL,0,'','','',''),(6,'','','juan@gmail.com','$2b$12$RQwlFjHkarNkjKoyXGemdeJTyY2XeHLDDpXsn2GgrulI8cYNPq06S','2021-02-12 14:53:15','2021-02-12 14:53:15',NULL,NULL,0,'','','',''),(7,'Francisco','','francsik23@gmail.com','$2b$12$PSlHwxHUAZzLoz8xeh7/L.9b8RdmN.vL7BD5BqwQfowsZ6dSEVUrK','2021-02-15 22:23:35','2021-02-15 22:23:35',NULL,NULL,0,'','','',''),(8,'Pedro','','pedro@gmail.com','$2b$12$pQbZaT40YqJTZsnkv6ZNleHUtIPbOwGwUGcLaSyCDpV7VM8n8Wwaq','2021-02-15 22:25:14','2021-02-15 22:25:14',NULL,NULL,0,'','','',''),(9,'Martin','','martin@gmail.com','$2b$12$itxskBgh4w8rzsWVNzsEg.t613XFb1YPsaF1Zc7dFN7J7SDbeMD56','2021-02-15 22:28:01','2021-02-15 22:28:01',NULL,NULL,0,'','','',''),(10,'Juancito','','juancito@gmail.com','$2b$12$khoyQ3eKS0/M9p7wkVPb6OcJzrKmg9bGpbAp5PuekDw.SoavLT/ia','2021-02-15 22:28:58','2021-02-15 22:28:58',NULL,'juancito@gmail.com-1613428138319.png',0,'','','',''),(11,'Nicolas','Maidana','nicolasmaidana74@gmail.com','$2b$12$vmgUj2ta53WmNCW53eo2q.EN1kMTTnfECbnn9J6F85Yg/XGc5xYca','2021-03-03 18:49:13','2021-03-03 18:49:13',NULL,'nicolasmaidana74@gmail.com-1614729541658.jpg',0,'Caa Guazu 664','Argentina','Corrientes','Curuzu Cuatia');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 17:40:22
