CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user_dtl` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kode_user` text NOT NULL,
	`user_id` integer NOT NULL,
	`status_kawin` text NOT NULL,
	`tanggal_lahir` text NOT NULL,
	`kelurahan` text NOT NULL,
	`gender` text NOT NULL,
	`kecamatan` text NOT NULL,
	`kota` text NOT NULL,
	`provinsi` text NOT NULL,
	`nama_ayah` text NOT NULL,
	`anak_ke` integer NOT NULL,
	`dari_bersaudara` integer NOT NULL,
	`suku` text NOT NULL,
	`pendidikan` text NOT NULL,
	`pekerjaan` text NOT NULL,
	`jurusan` text NOT NULL,
	`tinggi` integer NOT NULL,
	`berat` integer NOT NULL,
	`hobi` text NOT NULL,
	`instagram` text NOT NULL,
	`kriteria` text NOT NULL,
	`deskripsi` text DEFAULT '' NOT NULL,
	`foto` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`nama_lengkap` text NOT NULL,
	`no_telepon` text NOT NULL,
	`password` text NOT NULL,
	`email` text NOT NULL,
	`is_active` integer DEFAULT false NOT NULL,
	`is_available` integer DEFAULT true NOT NULL,
	`role` text DEFAULT 'user' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);--> statement-breakpoint
CREATE TABLE `bootcamp` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`price` integer NOT NULL,
	`description` text NOT NULL,
	`place` text NOT NULL,
	`time_from` text NOT NULL,
	`time_to` text NOT NULL,
	`speaker` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `jurusan` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pekerjaan` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pendidikan` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `suku` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `taaruf` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`pemohon_id` integer NOT NULL,
	`tujuan_id` integer NOT NULL,
	`status_persetujuan` text DEFAULT 'Belum diproses' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`pemohon_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tujuan_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
