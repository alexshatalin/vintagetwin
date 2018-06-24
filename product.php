<?php require_once(__DIR__ . '/vt_header.php'); ?>
<section class="secondary_page_container product">
	<section class="category">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<ul class="category__page_hierarchy_list">
						<li><a href="/clothing.php">clothing</a></li>
						<li><a href="/unisex.php">unisex</a>
						<li class="highlight"><a href="/sweatshirts.php">sweatshirts</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="product_detail">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="product_detail__content">
						<?php require_once(__DIR__ . '/components/product_detail_slider.php'); ?>
						<?php require_once(__DIR__ . '/components/product_detail_description.php'); ?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="suggested_products">
		<?php require_once(__DIR__ . '/components/product_suggested_slider.php'); ?>
	</section>
	<section class="recently_viewed_products">
		<?php require_once(__DIR__ . '/components/product_recently_viewed_slider.php'); ?>
	</section>
</section>
<?php require_once(__DIR__ . '/vt_footer.php'); ?>
