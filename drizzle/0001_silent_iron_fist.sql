CREATE TABLE `order_items` (
	`id` text PRIMARY KEY NOT NULL,
	`order_id` text NOT NULL,
	`product_id` text NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`final_price` real NOT NULL,
	`is_served` integer DEFAULT false,
	`payment_method` text DEFAULT '',
	`has_receipt` integer DEFAULT false,
	`customizations` text DEFAULT '{}',
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`product_id`) REFERENCES `menu_items`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`table_id` text NOT NULL,
	`status` text DEFAULT 'ΣΕ ΕΠΕΞΕΡΓΑΣΙΑ' NOT NULL,
	`payment_mode` text DEFAULT 'ΜΑΖΙ' NOT NULL,
	`global_payment_method` text DEFAULT '',
	`global_receipt` integer DEFAULT false,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
