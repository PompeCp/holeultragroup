/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - pruebaultragroup
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pruebaultragroup` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `pruebaultragroup`;

/*Table structure for table `habitaciones` */

DROP TABLE IF EXISTS `habitaciones`;

CREATE TABLE `habitaciones` (
  `id_habitaciones` int(11) NOT NULL AUTO_INCREMENT,
  `id_hotel` int(11) DEFAULT NULL,
  `id_tipohab` int(11) DEFAULT NULL,
  `precio` decimal(65,0) DEFAULT NULL,
  `impuesto` decimal(10,0) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_update` datetime DEFAULT NULL,
  PRIMARY KEY (`id_habitaciones`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

/*Data for the table `habitaciones` */

insert  into `habitaciones`(`id_habitaciones`,`id_hotel`,`id_tipohab`,`precio`,`impuesto`,`estado`,`fecha_creacion`,`fecha_update`) values (1,1,2,231111,61111,1,'2024-05-08 13:36:56','2024-05-13 00:25:14'),(2,2,2,231111,61111,1,'2024-05-08 12:23:07','2024-05-10 17:09:06'),(3,1,2,231111,61111,1,'2024-05-08 13:45:31','2024-05-13 16:22:38'),(4,2,1,131111,51111,0,'2024-05-10 15:11:47','2024-05-13 02:48:05'),(5,3,1,131111,51111,0,'2024-05-10 15:12:13','2024-05-13 01:26:09'),(6,1,2,131111,51111,1,'2024-05-10 17:46:06','2024-05-13 19:05:44'),(7,1,2,231111,61111,1,'2024-05-11 09:44:40',NULL),(8,1,2,231111,61111,1,'2024-05-11 11:52:46',NULL),(9,5,2,231111,61111,1,'2024-05-11 11:54:32',NULL),(10,5,1,131111,51111,1,'2024-05-11 11:55:46',NULL),(11,5,1,131111,51111,1,'2024-05-11 11:56:43',NULL),(12,5,1,131111,51111,1,'2024-05-11 11:57:34',NULL),(13,5,1,131111,51111,1,'2024-05-11 11:59:53',NULL),(14,1,2,231111,61111,1,'2024-05-11 12:00:25',NULL),(15,2,1,131111,51111,0,'2024-05-11 12:00:45','2024-05-13 02:43:09'),(16,8,3,311111,81111,1,'2024-05-11 18:28:16',NULL),(18,1,1,234567,123456,1,'2024-05-13 18:52:53','2024-05-13 19:00:31'),(19,1,2,13111111111111,51111,0,'2024-05-13 19:06:00','2024-05-14 03:24:20'),(20,1,1,1234,123,1,'2024-05-14 03:19:29',NULL),(21,1,2,131111,51111,1,'2024-05-14 03:22:39',NULL);

/*Table structure for table `hotel` */

DROP TABLE IF EXISTS `hotel`;

CREATE TABLE `hotel` (
  `id_hotel` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(199) DEFAULT NULL,
  `numhabitaciones` decimal(65,0) DEFAULT NULL,
  `direccion` varchar(199) DEFAULT NULL,
  `estrellas` decimal(5,0) DEFAULT NULL,
  `servicios` varchar(199) DEFAULT NULL,
  `ubicacion` varchar(199) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_update` datetime DEFAULT NULL,
  PRIMARY KEY (`id_hotel`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Data for the table `hotel` */

insert  into `hotel`(`id_hotel`,`nombre`,`numhabitaciones`,`direccion`,`estrellas`,`servicios`,`ubicacion`,`estado`,`fecha_creacion`,`fecha_update`) values (1,'hotel chicala',9,'calle7123',5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ','Neiva (Huila)',1,'2024-05-08 08:42:50','2024-05-13 20:38:58'),(2,'hotelitoo',3,'calle13',5,'Lorem ipsum dolor sit amet, conslit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut asdsd','Bogotá (Cundinamarca)',1,'2024-05-08 10:01:25','2024-05-11 18:50:34'),(3,'hotelito3',1,'calle71232222',4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ','Medellín (Antioquia)',1,'2024-05-08 10:02:45','2024-05-10 11:36:38'),(4,'hotelprooooooooooo',0,'callrdaa23123',3,'\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut','sabatenta(antioquia)',1,'2024-05-09 12:18:25','2024-05-10 11:36:44'),(5,'asdugas',5,'asdasdsa',5,'\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut','Villavieja (Huila)',1,'2024-05-09 18:48:38','2024-05-10 11:36:41'),(6,'hotel el si',0,'carrera 52 n 52 -5',5,'\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut','santa marta (magdalena)',1,'2024-05-10 16:49:07','2024-05-11 15:36:10'),(7,'hotel anapoima',0,'calle 6 n245',3,'bano, wifi, television, nevera,restaurante','Anapoima (Cundinamarca)',1,'2024-05-11 17:52:02','2024-05-11 18:40:23'),(8,'11111111111111111111111111',1,'calle 42618',5,'sayfuagihdia','San Andrés (San Andrés y Providencia)',1,'2024-05-11 18:24:29','2024-05-11 18:28:46'),(9,'hotel villavieja',0,'calle 2',4,'wifi y tv','Villavieja (Huila)',1,'2024-05-11 18:43:31','2024-05-13 20:44:17'),(10,'hotel chicalaaaaaaaaa',0,'calle7123',5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ','Neiva (Huila)',0,'2024-05-14 03:13:49','2024-05-14 03:15:22');

/*Table structure for table `reservas` */

DROP TABLE IF EXISTS `reservas`;

CREATE TABLE `reservas` (
  `id_reserva` int(11) NOT NULL AUTO_INCREMENT,
  `id_hotel` int(11) DEFAULT NULL,
  `id_habitacion` int(11) DEFAULT NULL,
  `cliente` varchar(199) DEFAULT NULL,
  `apellido` varchar(199) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `tipo_doc` int(11) DEFAULT NULL,
  `num_doc` decimal(10,0) DEFAULT NULL,
  `email` varchar(199) DEFAULT NULL,
  `telefono` decimal(10,0) DEFAULT NULL,
  `nombre_emer` varchar(199) DEFAULT NULL,
  `telefono_emer` decimal(10,0) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_update` datetime DEFAULT NULL,
  PRIMARY KEY (`id_reserva`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `reservas` */

insert  into `reservas`(`id_reserva`,`id_hotel`,`id_habitacion`,`cliente`,`apellido`,`fecha_nacimiento`,`tipo_doc`,`num_doc`,`email`,`telefono`,`nombre_emer`,`telefono_emer`,`fecha_inicio`,`fecha_fin`,`estado`,`fecha_creacion`,`fecha_update`) values (1,1,1,'juan ','pineda','2000-03-08',2,191381923,'msajhda@hsjadh.com',3213213,'harol',3123324,'2024-05-08','2024-05-12',1,'2024-05-08 15:04:39','2024-05-08 15:08:27'),(2,2,2,'sebastian','yatra','2000-03-08',2,123123123,'213jhda@hsjadh.com',4124,'pedro',4213214,'2024-05-16','2024-05-19',1,'2024-05-08 15:03:40',NULL),(3,2,2,'sebastian','camacho','2000-03-08',2,1321324,'dsda@hsjadh.com',42135132,'santiago',42423123,'2024-05-09','2024-05-19',1,'2024-05-08 15:36:25',NULL),(4,2,1,'juan ','camacho','2000-03-08',1,4213321,'32dsddh.com',124213141,'manuel',31231234,'2024-05-12','2024-05-12',1,'2024-05-08 15:52:35','2024-05-08 15:54:10'),(5,1,6,'GUSTAVO','MENDEZ','1985-06-13',2,1234567,'tavomendez@mail.com',3042267504,'juan',3042267504,'2024-05-13','2024-05-14',1,'2024-05-13 00:37:32',NULL),(6,1,7,'sus','white','2000-01-13',2,123456789,'gus@gmail.com',3042323123,'pedro',326779146,'2024-05-13','2024-05-14',1,'2024-05-13 00:42:30',NULL),(7,2,15,'walta','keep','1991-07-25',2,76543562,'wata@gmail.com',3042323123,'pedro',3156798316,'2024-05-13','2024-05-14',1,'2024-05-13 01:06:01',NULL),(8,3,5,'walte','wait','2000-06-13',2,76543562,'wata@gmail.com',3042323123,'pedro',304323267,'2024-05-13','2024-05-14',1,'2024-05-13 01:26:08',NULL),(9,2,15,'walte','wait','2024-05-08',2,76543562,'wata@gmail.com',3042323123,'pedro',3156798316,'2024-05-14','2024-05-18',1,'2024-05-13 02:43:09',NULL),(10,2,4,'walte','wait','2000-02-09',2,76543562,'wata@gmail.com',3042323123,'pedro',3156798316,'2024-05-14','2024-05-18',1,'2024-05-13 02:48:05',NULL),(11,NULL,1,'juan ','pineda','2000-03-08',NULL,191381923,'msajhda@hsjadh.com',3213213,'harol',3123324,'2024-05-08','2024-05-12',1,'2024-05-14 03:29:03',NULL);

/*Table structure for table `tipo_doc` */

DROP TABLE IF EXISTS `tipo_doc`;

CREATE TABLE `tipo_doc` (
  `id_tipodoc` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(29) DEFAULT NULL,
  PRIMARY KEY (`id_tipodoc`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tipo_doc` */

insert  into `tipo_doc`(`id_tipodoc`,`nombre`) values (1,'ti'),(2,'cc'),(3,'ce');

/*Table structure for table `tipo_habitacion` */

DROP TABLE IF EXISTS `tipo_habitacion`;

CREATE TABLE `tipo_habitacion` (
  `id_tipohab` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(199) DEFAULT NULL,
  PRIMARY KEY (`id_tipohab`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tipo_habitacion` */

insert  into `tipo_habitacion`(`id_tipohab`,`nombre`) values (1,'sencilla'),(2,'doble'),(3,'suit');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
