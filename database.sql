CREATE TABLE IF NOT EXISTS `distribution` (
    `id` int auto_increment not null,
    `id_app` BIGINT NOT NULL,
    `id_version` BIGINT,
    `use_last_version` BOOLEAN default false,
    `app_required` BOOLEAN default false,
    PRIMARY KEY (`id`)) ENGINE=InnoDB;