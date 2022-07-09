CREATE TABLE `user` (
  `id` varchar(255) PRIMARY KEY,
  `full_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `birthday` varchar(255),
  `gender_id` int,
  `country_id` int,
  `created_at` timestamp,
  `phone` varchar(255),
  `user_photo_id` int,
  `valid` int DEFAULT 1
);

CREATE TABLE `gender` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `country` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `user_photo` (
  `user_id` varchar(255),
  `name` varchar(255),
  `path` varchar(255)
);

CREATE TABLE `favorit_product` (
  `user_id` varchar(255),
  `product_id` varchar(255)
);

CREATE TABLE `favorit_lesson` (
  `user_id` varchar(255),
  `lesson_id` int
);

CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(255),
  `product_id` varchar(255),
  `content` varchar(255),
  `score` int,
  `created_at` datetime
);

CREATE TABLE `product` (
  `id` varchar(255) PRIMARY KEY,
  `name` varchar(255),
  `price` int,
  `description` varchar(255),
  `express_id` int,
  `created_at` datetime,
  `valid` int DEFAULT 1
);

CREATE TABLE `product_photo` (
  `product_id` varchar(255),
  `name` int,
  `path` varchar(255)
);

CREATE TABLE `express` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `category` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `product_category` (
  `product_id` varchar(255),
  `category_id` int
);

CREATE TABLE `order_status` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `lesson` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `price` int,
  `description` varchar(255),
  `start_date` datetime,
  `duration` int
);

CREATE TABLE `lesson_photo` (
  `lesson_id` int,
  `name` varchar(255),
  `path` varchar(255)
);

CREATE TABLE `order_info` (
  `id` varchar(255) PRIMARY KEY,
  `user_id` varchar(255),
  `order_status_id` int,
  `address` varchar(255),
  `payment_id` int,
  `timestamp` timestamp
);

CREATE TABLE `order_product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `order_info_id` varchar(255),
  `product_id` varchar(255),
  `coupon_id` int DEFAULT 0,
  `memo` varchar(255),
  `price` int
);

CREATE TABLE `payment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `coupon` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `code` varchar(255),
  `discount` int,
  `start_date` date,
  `end_date` date,
  `limited` int DEFAULT 0
);

CREATE TABLE `coupon_category` (
  `coupon_id` int,
  `category_id` int
);

CREATE TABLE `expiry` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` varchar(255),
  `expiry_date` date,
  `count` int,
  `discount` int
);
