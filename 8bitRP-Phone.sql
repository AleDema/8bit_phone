-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for essentialmode
CREATE DATABASE IF NOT EXISTS `essentialmode` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `essentialmode`;

-- Dumping structure for table essentialmode.phone_apps
CREATE TABLE IF NOT EXISTS `phone_apps` (
  `charid` int(11) NOT NULL,
  `app` varchar(50) NOT NULL,
  `state` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`charid`,`app`),
  KEY `installed_app_charid` (`charid`,`app`),
  CONSTRAINT `installed_app_charid` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.phone_apps: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_apps` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_apps` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_app_chat
CREATE TABLE IF NOT EXISTS `phone_app_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel` varchar(20) NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_app_chat: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_app_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_app_chat` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_calls
CREATE TABLE IF NOT EXISTS `phone_calls` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sender` varchar(12) NOT NULL,
  `receiver` varchar(12) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(1) NOT NULL DEFAULT 0,
  `anon` int(1) NOT NULL DEFAULT 0,
  `sender_deleted` int(1) NOT NULL DEFAULT 0,
  `receiver_deleted` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table essentialmode.phone_calls: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_calls` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_calls` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_contacts
CREATE TABLE IF NOT EXISTS `phone_contacts` (
  `identifier` varchar(40) NOT NULL,
  `name` longtext NOT NULL,
  `number` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.phone_contacts: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_contacts` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_irc_channels
CREATE TABLE IF NOT EXISTS `phone_irc_channels` (
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `joined` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `channel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table essentialmode.phone_irc_channels: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_irc_channels` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_irc_channels` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_irc_messages
CREATE TABLE IF NOT EXISTS `phone_irc_messages` (
  `channel` varchar(50) DEFAULT NULL,
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table essentialmode.phone_irc_messages: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_irc_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_irc_messages` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_messages
CREATE TABLE IF NOT EXISTS `phone_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(10) NOT NULL,
  `receiver` varchar(10) NOT NULL,
  `message` varchar(255) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `isRead` int(11) NOT NULL DEFAULT 0,
  `owner` int(11) NOT NULL DEFAULT 0,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_messages: 0 rows
/*!40000 ALTER TABLE `phone_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_messages` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_settings
CREATE TABLE IF NOT EXISTS `phone_settings` (
  `id` int(11) NOT NULL,
  `identifier` varchar(60) DEFAULT NULL,
  `data` varchar(1024) NOT NULL DEFAULT '{volume:100,wallpaper:1,ringtone:1,text:1}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.phone_settings: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_settings` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_texts
CREATE TABLE IF NOT EXISTS `phone_texts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sender` varchar(12) NOT NULL DEFAULT '0',
  `receiver` varchar(12) NOT NULL DEFAULT '0',
  `message` varchar(255) NOT NULL DEFAULT '0',
  `sent_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sender_read` int(1) NOT NULL DEFAULT 1,
  `sender_deleted` int(1) NOT NULL DEFAULT 0,
  `receiver_read` int(1) NOT NULL DEFAULT 0,
  `receiver_deleted` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `sender` (`sender`),
  KEY `receiver` (`receiver`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.phone_texts: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_texts` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_texts` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_tweets
CREATE TABLE IF NOT EXISTS `phone_tweets` (
  `id` int(11) DEFAULT NULL,
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `author` varchar(50) NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp(),
  KEY `tweets_charid` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table essentialmode.phone_tweets: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_tweets` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_tweets` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_unread
CREATE TABLE IF NOT EXISTS `phone_unread` (
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `data` varchar(1024) NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table essentialmode.phone_unread: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_unread` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_unread` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_users_contacts
CREATE TABLE IF NOT EXISTS `phone_users_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(60) CHARACTER SET utf8mb4 DEFAULT NULL,
  `number` varchar(10) CHARACTER SET utf8mb4 DEFAULT NULL,
  `display` varchar(64) CHARACTER SET utf8mb4 NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table essentialmode.phone_users_contacts: 0 rows
/*!40000 ALTER TABLE `phone_users_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_users_contacts` ENABLE KEYS */;

-- Dumping structure for table essentialmode.phone_yp
CREATE TABLE IF NOT EXISTS `phone_yp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `advert` varchar(500) DEFAULT NULL,
  `phoneNumber` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table essentialmode.phone_yp: ~0 rows (approximately)
/*!40000 ALTER TABLE `phone_yp` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_yp` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
