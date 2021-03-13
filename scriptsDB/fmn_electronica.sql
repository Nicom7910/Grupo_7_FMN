-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: fmn_electronica
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Celulares'),(2,'Perifericos'),(3,'Gaming');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Sony'),(2,'Motorola'),(3,'Samsung'),(4,'Marshall'),(5,'Xiaomi'),(6,'Huawei'),(7,'Razer'),(8,'Nintendo');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(150) NOT NULL,
  `stock` int(11) NOT NULL,
  `manufacturer_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `manufacturer_id` (`manufacturer_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `manufacturer_id` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (4,'Xiaomi Redmi Note 8       ','funcionara?   ','photo-1615218258961.jpg',10,3,2,'2021-03-08 19:03:00','2021-03-08 15:44:18','2021-03-08 19:03:00',0),(5,'Motorola g7 ','nuevo ','photo-1615218432999.png',8,2,2,'2021-03-08 19:02:57','2021-03-08 15:47:13','2021-03-08 19:02:57',0),(6,'nintendo 64 ','nintenfo 64 ','undefined-1615218618626.jpg',10,3,3,'2021-03-08 19:03:03','2021-03-08 15:50:18','2021-03-08 19:03:03',40),(8,'Playstation 4','Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nSe considera que esta consola es la mejor dentro del mercado, dado que presenta una resolución de hasta 4K.\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nDiseño innovador\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.','photo-1614801562094.jpg',10,1,3,'2021-03-08 19:03:05','2021-03-03 19:59:22','2021-03-08 19:03:05',50),(9,'Playstation 5  ','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás. ','photo-1615219629797.jpg',10,1,3,'2021-03-08 19:03:07','2021-03-08 16:07:09','2021-03-08 19:03:07',100),(10,'Xbox One      ','Con tu consola Xbox One tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nSe considera que esta consola es la mejor dentro del mercado, dado que presenta una resolución de hasta 4K.\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nDiseño innovador\r\nMicrosoft Xbox One S ofrece impresionantes gráficos, sonido de primer nivel e incluso la posibilidad de guardar todas tus partidas en la nube.\r\nAdemás, su control combina un elegante estilo y agarre en relieve para brindar una mayor comodidad.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.      ','photo-1615219763682.jpg',10,2,3,'2021-03-08 19:03:08','2021-03-08 16:09:23','2021-03-08 19:03:08',50000),(11,'iPhone  ','un iphone ','photo-1615219316583.jpg',2,1,1,'2021-03-08 19:03:12','2021-03-08 16:01:56','2021-03-08 19:03:12',1000),(12,'xiaomi airdots  ','sssss  ','photo-1615218144897.jpg',10,2,2,'2021-03-08 19:03:14','2021-03-08 15:42:24','2021-03-08 19:03:14',3000),(13,'prueba             ','sd              ','photo-1615218102544.png',2,2,1,'2021-03-08 19:03:16','2021-03-08 15:41:42','2021-03-08 19:03:16',66),(14,'Playstation 5','play','photo-1615230953238.jpg',10,1,3,'2021-03-08 19:16:03','2021-03-08 19:15:53','2021-03-08 19:16:03',5),(15,'asd','ad','photo-1615231019924.jpg',5,2,2,'2021-03-08 19:17:08','2021-03-08 19:16:59','2021-03-08 19:17:08',5),(16,'asd','56','photo-1615231106914.jpg',4,3,1,'2021-03-08 19:18:30','2021-03-08 19:18:26','2021-03-08 19:18:30',0),(17,'asdasdasd','41','photo-1615231287425.jpg',4,1,1,'2021-03-08 19:27:05','2021-03-08 19:21:27','2021-03-08 19:27:05',4),(18,'asdas','sadad','photo-1615231695980.jpg',8,2,2,'2021-03-08 19:28:18','2021-03-08 19:28:15','2021-03-08 19:28:18',2),(19,'Playstation 5','Z','photo-1615231794201.jpg',4,2,1,'2021-03-08 19:30:05','2021-03-08 19:29:54','2021-03-08 19:30:05',1),(20,'Playstation 5','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.','photo-1615232019990.jpg',10,1,3,'2021-03-08 19:34:30','2021-03-08 19:33:39','2021-03-08 19:34:30',150),(21,'Playstation 5   ','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.\r\n\r\nCalidad de otro nivel\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.\r\n\r\nAdaptada a tus necesidades\r\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.   ','photo-1615668648929.jpg',10,1,3,'2021-03-13 20:50:48','2021-03-13 20:50:48',NULL,150000),(22,'Playstation 4','Play 4','photo-1615243183832.jpg',10,1,3,'2021-03-13 20:50:04','2021-03-08 22:39:43','2021-03-13 20:50:04',50),(23,'Xiaomi Redmi Note 8 ','El Xiaomi Note 8 Pro cuenta con el sistema operativo avanzado Android 9.0 Pie que aprende tus hábitos para adaptarse a tu rutina y lograr la máxima eficiencia de tu equipo. Esta tecnología vuelve a tu dispositivo tan autónomo que podrá reducir el consumo energético, ajustar automáticamente el brillo y gestionar la batería de manera inteligente.\r\n\r\nFotografía profesional en tu bolsillo\r\nDescubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.\r\n\r\nDesbloqueo facial y dactilar\r\nMáxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido.\r\n\r\nBatería de duración superior\r\n¡Desenchufate! Con la súper batería de 4500 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas. ','photo-1615415478595.jpg',9,5,1,'2021-03-10 23:04:28','2021-03-10 23:04:28',NULL,50000),(24,'Marshall Major III ','En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Marshall y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\r\n\r\nEl formato perfecto para vos\r\nAl ser on-ear se apoyan en tus oídos cómodamente y te ofrecen una gran calidad de sonido. Tené preparadas tus listas de música preferidas y usalos en viajes largos o actividades al aire libre. ','photo-1615669222357.jpg',10,4,2,'2021-03-13 21:00:22','2021-03-13 21:00:22',NULL,9999),(25,'Xiaomi Airdots 2','Con un diseño inspirado en la simplicidad, los Redmi AirDots tienen un estilo único. Cuentan con Bluetooth 5.0 que te permite conectarte a distancias largas y mantener una conexión sólida en todo momento. Su tecnología TWS (True Wireless Stereo) elimina los cables y te hace disfrutar plenamente de ritmos y melodías que fluyen libremente.\r\n\r\nEl formato perfecto para vos\r\nAl ser in-ear aíslan el ruido del exterior, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.','photo-1615667016345.jpg',10,5,2,'2021-03-13 20:23:36','2021-03-13 20:23:36',NULL,2499),(26,'Razer Kraken X','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nAl ser headset vas a poder escuchar tu música preferida, mantener llamadas telefónicas y jugar en línea desde tu pc sin perderte ningún detalle.','photo-1615667308520.jpg',10,7,2,'2021-03-13 20:48:04','2021-03-13 20:28:28','2021-03-13 20:48:04',9999),(27,'Razer Kraken X','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nAl ser headset vas a poder escuchar tu música preferida, mantener llamadas telefónicas y jugar en línea desde tu pc sin perderte ningún detalle.','photo-1615668515363.jpg',10,7,2,'2021-03-13 20:48:50','2021-03-13 20:48:35','2021-03-13 20:48:50',9999),(28,'Razer Kraken X','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\r\n\r\nEl formato perfecto para vos\r\nAl ser headset vas a poder escuchar tu música preferida, mantener llamadas telefónicas y jugar en línea desde tu pc sin perderte ningún detalle.','photo-1615668588306.png',10,7,2,'2021-03-13 20:49:48','2021-03-13 20:49:48',NULL,9999),(29,'Huawei P30 lite','Inteligente y predictivo\r\nEl sistema operativo avanzado Android 9.0 Pie aprende tus hábitos para adaptarse a tu rutina y lograr la máxima eficiencia de tu equipo. Tu dispositivo tendrá la autonomía necesaria para reducir el consumo energético ajustando el brillo automáticamente y gestionando la batería de manera inteligente para que puedas priorizar el uso de tus aplicaciones habituales.\r\n\r\nMayor rendimiento\r\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\r\n\r\nMás para ver\r\nCon su pantalla IPS de 6.15\", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\r\n\r\nGran capacidad de almacenamiento\r\nCon su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube. Disfrutá de tus contenidos favoritos en todo momento.\r\n\r\nBatería para todo el día\r\nSu batería de 3340 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga.\r\n\r\nMáxima seguridad\r\nGracias al sensor de huella dactilar, tendrás acceso a tu teléfono de manera segura y podrás desbloquearlo automáticamente con solo un toque.','photo-1615668844781.jpg',10,6,1,'2021-03-13 20:54:04','2021-03-13 20:54:04',NULL,95000),(30,'Sony Xperia 1 II 256 GB negro 8 GB RAM','Pensado para vos\r\nEl Sony 1 II posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.\r\n\r\nFotografía profesional en tu bolsillo\r\nDescubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.\r\n\r\nPerfecta para los amantes del plano detalle. Su zoom óptico te ofrecerá la posibilidad de realizar acercamientos sin que tus capturas pierdan calidad.\r\n\r\nDesbloqueo veloz con tu huella dactilar\r\nCon el sensor de huella dactilar, el acceso es seguro y podrás desbloquearlo automáticamente con un toque.\r\n\r\nBatería de duración superior\r\n¡Desenchufate! Con la súper batería de 4000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.','photo-1615669150486.jpg',10,1,1,'2021-03-13 20:59:10','2021-03-13 20:59:10',NULL,199000),(31,'Nintendo Switch 32gb','Ahora con una duración de batería actualizada de hasta nueve horas, el sistema Nintendo Switch puede proporcionar una experiencia de consola doméstica completa en cualquier momento y en cualquier lugar, incluso más tiempo que el modelo original.\r\n\r\nEn casa, el sistema descansa en el Nintendo Switch Dock, que te permite jugar con familiares y amigos en un televisor en la comodidad de tu sala de estar. Simplemente levantando Nintendo Switch del dock en cualquier momento, el sistema pasa casi instantáneamente al modo portátil, y la misma gran experiencia de juego ahora viaja contigo. La portabilidad de Nintendo Switch se ve reforzada por su pantalla de 6.2 \", que muestra un juego brillante y de alta definición en el parque, en un avión, en un automóvil o en el apartamento de un amigo.\r\n\r\nEl Nintendo Switch viene con dos Joy-Con, cada uno de los cuales puede actuar como un controlador independiente con un stick analógico, un complemento completo de botones de rostro y hombros, sensor de movimiento incorporado y tecnología \"HD Rumble\". Se pueden insertar en el accesorio Joy-Con Grip incluido, lo que permite su uso como un controlador tradicional; sostenido cómodamente en cada mano, permitiendo un movimiento independiente del brazo; o compartido entre dos jugadores, lo que permite un juego multijugador instantáneo. Gracias al soporte incorporado, puede tener sesiones de dos jugadores frente al televisor o en cualquier otro lugar.\r\n\r\nSistema de juegos en casa\r\nEn casa, la unidad principal descansa en el Nintendo Switch Dock, que conecta el sistema al televisor y le permite jugar con familiares y amigos en la comodidad de su sala de estar.\r\n\r\nSobre la marcha\r\nLevante el Nintendo Switch del dock, y pasa casi instantáneamente al modo portátil para juegos en movimiento. Al compartir Joy-Con, los jugadores pueden enfrentarse cara a cara mientras están lejos de su televisor. También puedes disfrutar de los mismos juegos geniales en el modo de mesa usando el soporte incorporado para apuntalar el sistema.\r\n','photo-1615669478177.png',10,8,3,'2021-03-13 21:04:38','2021-03-13 21:04:38',NULL,49999);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `invoice` varchar(45) DEFAULT NULL,
  `sold` int(11) DEFAULT 0,
  `paid_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `invoice_UNIQUE` (`invoice`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
INSERT INTO `sale` VALUES (19,11,21,1,NULL,0,NULL,'2021-03-13 21:32:06','2021-03-13 21:31:36','2021-03-13 21:32:06'),(20,11,31,1,NULL,0,NULL,'2021-03-13 21:32:59','2021-03-13 21:32:53','2021-03-13 21:32:59'),(21,11,31,1,NULL,0,NULL,'2021-03-13 21:33:54','2021-03-13 21:33:52','2021-03-13 21:33:54'),(22,11,21,1,NULL,0,NULL,'2021-03-13 21:40:08','2021-03-13 21:40:05','2021-03-13 21:40:08'),(23,11,31,1,NULL,0,NULL,'2021-03-13 21:45:52','2021-03-13 21:42:37','2021-03-13 21:45:52'),(24,11,31,1,NULL,0,NULL,'2021-03-13 21:48:41','2021-03-13 21:48:38','2021-03-13 21:48:41'),(25,11,31,1,NULL,0,NULL,'2021-03-13 21:49:37','2021-03-13 21:49:36','2021-03-13 21:49:37'),(26,11,21,1,NULL,0,NULL,'2021-03-13 21:50:14','2021-03-13 21:50:08','2021-03-13 21:50:14'),(27,11,31,2,NULL,0,NULL,'2021-03-13 21:50:45','2021-03-13 21:50:41','2021-03-13 21:50:45');
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` text DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `admin` enum('admin','user') DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (11,'Francisco','Csik','francsik23@gmail.com','$2b$12$R8Tlmt/F0XY2UglTyriMHurAnQnbr2tMKouycVI4T3xq4QspXTbgG',NULL,'','','','','admin'),(12,'Francisco',NULL,'fran@gmail.com','$2b$12$bwueEX6K7xB4/XoQpfyjGOut/iwS5zzqiKB9.5mj1hjiHnWx2yIza','fran@gmail.com-1615055147823.jpg',NULL,NULL,NULL,NULL,'user'),(13,'maslaton',NULL,'maslaton@gmail.com','$2b$12$Cb5gNA5vxdkIz9gDL6n8HOPW6JMCdfAjtKrgKvwkM/hcQwrU8uHp2','maslaton@gmail.com-1615055268677.jpg',NULL,NULL,NULL,NULL,'user'),(14,'Maslaton',NULL,'charlymaslaton@gmail.com','$2b$12$glLE9VvmDfFHjwNoHIszgOCl07E1dMNb5l30XVaGqrKetgSJaqmRm','charlymaslaton@gmail.com-1615418695852.jpg',NULL,NULL,NULL,NULL,'user'),(15,'pappo@gmail.com',NULL,'pappo@gmail.com','$2b$12$lCIALhzLHoDTHY/zUx9p2OYXOJ0H8APLZQiuJDw1tv4KFWs80KMfq','pappo@gmail.com-1615419184805.jpg',NULL,NULL,NULL,NULL,'user');
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

-- Dump completed on 2021-03-13 19:00:10
