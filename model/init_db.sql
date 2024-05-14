--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists steps;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `steps`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Description` VARCHAR(255) NOT NULL,
    `Next_1` BIGINT NOT NULL,
    `Next_2` BIGINT NOT NULL,
    `Next_3` BIGINT NOT NULL,
    `Text_1` VARCHAR(255) NOT NULL,
    `Text_2` VARCHAR(255) NOT NULL,
    `Text_3` VARCHAR(255) NOT NULL
);
