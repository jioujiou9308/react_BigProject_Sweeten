CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `birthday` date,
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
  `user_id` int,
  `name` varchar(255),
  `path` varchar(255)
);

CREATE TABLE `favorit_product` (
  `user_id` int,
  `product_id` int
);

CREATE TABLE `favorit_lesson` (
  `user_id` int,
  `lesson_id` int
);

CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `product_id` int,
  `content` varchar(255),
  `score` int,
  `created_at` datetime
);

CREATE TABLE `product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `price` int,
  `description` varchar(255),
  `express_id` int,
  `created_at` datetime
);

CREATE TABLE `product_photo` (
  `product_id` int,
  `name` int,
  `path` varchar(255)
);

CREATE TABLE `express` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `product_category` (
  `product_id` int,
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
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `order_status_id` int,
  `address` varchar(255),
  `payment_id` int,
  `timestamp` timestamp
);

CREATE TABLE `order_product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
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

ALTER TABLE `user` ADD FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`);

ALTER TABLE `user` ADD FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);

ALTER TABLE `user_photo` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `favorit_product` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `favorit_product` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `favorit_lesson` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `favorit_lesson` ADD FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`express_id`) REFERENCES `express` (`id`);

ALTER TABLE `product_photo` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product_category` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

ALTER TABLE `product_category` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `lesson_photo` ADD FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`id`);

ALTER TABLE `order_info` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `order_info` ADD FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`);

ALTER TABLE `order_info` ADD FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`);

ALTER TABLE `coupon_category` ADD FOREIGN KEY (`coupon_id`) REFERENCES `coupon` (`id`);

ALTER TABLE `coupon_category` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
