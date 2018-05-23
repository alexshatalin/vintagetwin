<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Vintage Twins</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/jquery.mobile.min.js"></script>
	<script src="js/nav_menu.js"></script>
	<script src="js/slider.js"></script>
</head>
<body>
	<div class="__dev__"></div>
	<section class="page_container">
		<? require_once(__DIR__ . '/components/mobile_nav.php'); ?>
		<? require_once(__DIR__ . '/layout/header.php');?>
		<main class="page_content">
			<? require_once(__DIR__ . '/components/hero_slider.php'); ?>
			<? require_once(__DIR__ . '/components/collections.php'); ?>
			<? require_once(__DIR__ . '/components/index_featured_section.php'); ?>
			<? require_once(__DIR__ . '/components/new_arrivals_slider.php'); ?>
			<? require_once(__DIR__ . '/components/section_about.php'); ?>
			<? require_once(__DIR__ . '/components/homepage_bottom_slider.php'); ?>
			<? require_once(__DIR__ . '/components/subscribe_section.php'); ?>
		</main>
		<? require_once(__DIR__ . '/layout/footer.php');?>
	</section>
</body>
</html>