CREATE TABLE `categories` (
	`id` text PRIMARY KEY NOT NULL,
	`is_not_available` integer DEFAULT false,
	`translations` text NOT NULL,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `menu_items` (
	`id` text PRIMARY KEY NOT NULL,
	`category_id` text NOT NULL,
	`price` real NOT NULL,
	`hide_price` integer DEFAULT false,
	`unit` text,
	`translations` text NOT NULL,
	`is_popular` integer DEFAULT false,
	`is_vegan` integer DEFAULT false,
	`is_gluten_free` integer DEFAULT false,
	`has_egg` integer DEFAULT false,
	`has_dairy` integer DEFAULT false,
	`has_nuts` integer DEFAULT false,
	`has_soy` integer DEFAULT false,
	`is_sold_out` integer DEFAULT false,
	`is_separator` integer DEFAULT false,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `store_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`service_fee` real DEFAULT 0.5 NOT NULL
);
