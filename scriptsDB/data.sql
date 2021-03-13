-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fmn_electronica
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
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Celulares'),(2,'Perifericos'),(3,'Gaming');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Sony'),(2,'Motorola'),(3,'Samsung'),(4,'Marshall'),(5,'Xiaomi'),(6,'Huawei'),(7,'Razer'),(8,'Nintendo');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,'Xiaomi Redmi Note 8       ','funcionara?   ','photo-1615218258961.jpg',10,3,2,'2021-03-08 19:03:00','2021-03-08 15:44:18','2021-03-08 19:03:00',0),(5,'Motorola g7 ','nuevo ','photo-1615218432999.png',8,2,2,'2021-03-08 19:02:57','2021-03-08 15:47:13','2021-03-08 19:02:57',0),(6,'nintendo 64 ','nintenfo 64 ','undefined-1615218618626.jpg',10,3,3,'2021-03-08 19:03:03','2021-03-08 15:50:18','2021-03-08 19:03:03',40),(8,'Playstation 4','Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nSe considera que esta consola es la mejor dentro del mercado, dado que presenta una resolución de hasta 4K.\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nDiseño innovador\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.','photo-1614801562094.jpg',10,1,3,'2021-03-08 19:03:05','2021-03-03 19:59:22','2021-03-08 19:03:05',50),(9,'Playstation 5  ','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás. ','photo-1615219629797.jpg',10,1,3,'2021-03-08 19:03:07','2021-03-08 16:07:09','2021-03-08 19:03:07',100),(10,'Xbox One      ','Con tu consola Xbox One tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nSe considera que esta consola es la mejor dentro del mercado, dado que presenta una resolución de hasta 4K.\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nDiseño innovador\r\nMicrosoft Xbox One S ofrece impresionantes gráficos, sonido de primer nivel e incluso la posibilidad de guardar todas tus partidas en la nube.\r\nAdemás, su control combina un elegante estilo y agarre en relieve para brindar una mayor comodidad.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.      ','photo-1615219763682.jpg',10,2,3,'2021-03-08 19:03:08','2021-03-08 16:09:23','2021-03-08 19:03:08',50000),(11,'iPhone  ','un iphone ','photo-1615219316583.jpg',2,1,1,'2021-03-08 19:03:12','2021-03-08 16:01:56','2021-03-08 19:03:12',1000),(12,'xiaomi airdots  ','sssss  ','photo-1615218144897.jpg',10,2,2,'2021-03-08 19:03:14','2021-03-08 15:42:24','2021-03-08 19:03:14',3000),(13,'prueba             ','sd              ','photo-1615218102544.png',2,2,1,'2021-03-08 19:03:16','2021-03-08 15:41:42','2021-03-08 19:03:16',66),(14,'Playstation 5','play','photo-1615230953238.jpg',10,1,3,'2021-03-08 19:16:03','2021-03-08 19:15:53','2021-03-08 19:16:03',5),(15,'asd','ad','photo-1615231019924.jpg',5,2,2,'2021-03-08 19:17:08','2021-03-08 19:16:59','2021-03-08 19:17:08',5),(16,'asd','56','photo-1615231106914.jpg',4,3,1,'2021-03-08 19:18:30','2021-03-08 19:18:26','2021-03-08 19:18:30',0),(17,'asdasdasd','41','photo-1615231287425.jpg',4,1,1,'2021-03-08 19:27:05','2021-03-08 19:21:27','2021-03-08 19:27:05',4),(18,'asdas','sadad','photo-1615231695980.jpg',8,2,2,'2021-03-08 19:28:18','2021-03-08 19:28:15','2021-03-08 19:28:18',2),(19,'Playstation 5','Z','photo-1615231794201.jpg',4,2,1,'2021-03-08 19:30:05','2021-03-08 19:29:54','2021-03-08 19:30:05',1),(20,'Playstation 5','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.','photo-1615232019990.jpg',10,1,3,'2021-03-08 19:34:30','2021-03-08 19:33:39','2021-03-08 19:34:30',150),(21,'Playstation 5','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.','photo-1615232103998.jpg',10,1,3,'2021-03-08 19:35:03','2021-03-08 19:35:03',NULL,150000),(22,'Playstation 4','Play 4','photo-1615243183832.jpg',10,1,3,'2021-03-08 22:39:43','2021-03-08 22:39:43',NULL,50),(23,'Samsung Galaxy S20','Pensado para vos\r\nEl Samsung S20 FE posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutas al máximo tu dispositivo.\r\nExperiencia visual increíble\r\nMirá tus series y películas favoritas con la mejor definición a través de su pantalla Super AMOLED de 6.5 \". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.','photo-1615651502052.jpg',5,3,1,'2021-03-13 16:05:02','2021-03-13 16:05:02',NULL,80000);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
INSERT INTO `sale` VALUES (17,11,22,4,NULL,0,NULL,'2021-03-09 00:21:10','2021-03-09 00:21:10',NULL),(18,11,21,1,NULL,0,NULL,'2021-03-09 00:22:50','2021-03-09 00:22:50',NULL),(19,14,21,1,NULL,0,NULL,'2021-03-13 15:56:27','2021-03-13 15:56:27',NULL),(20,14,23,1,NULL,0,NULL,'2021-03-13 16:06:52','2021-03-13 16:06:52',NULL);
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (11,'Francisco',NULL,'francsik23@gmail.com','$2b$12$R8Tlmt/F0XY2UglTyriMHurAnQnbr2tMKouycVI4T3xq4QspXTbgG',NULL,NULL,NULL,NULL,NULL,'admin'),(12,'Francisco',NULL,'fran@gmail.com','$2b$12$bwueEX6K7xB4/XoQpfyjGOut/iwS5zzqiKB9.5mj1hjiHnWx2yIza','fran@gmail.com-1615055147823.jpg',NULL,NULL,NULL,NULL,'user'),(13,'maslaton',NULL,'maslaton@gmail.com','$2b$12$Cb5gNA5vxdkIz9gDL6n8HOPW6JMCdfAjtKrgKvwkM/hcQwrU8uHp2','maslaton@gmail.com-1615055268677.jpg',NULL,NULL,NULL,NULL,'user'),(14,'Nicolas','Maidana','nicolasmaidana74@gmail.com','$2b$12$4Bm66e0p6/E6JZ7VTn8joefPBU/eWBQ1Et.KnMoWMcMU2PVxLV3RK','nicolasmaidana74@gmail.com-1615650871355.jpg','Argentina','Corrientes','Caa Guazu 664','Curuzu Cuatia','user'),(15,'Nico',NULL,'maidana.nico@hotmail.com','$2b$12$7oAg1dDrdtQB7D356we9hOTWgshSrltM996ZAecyXGL72liSVfSju','maidana.nico@hotmail.com-1615651101313.jpg',NULL,NULL,NULL,NULL,'admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-13 19:58:55
