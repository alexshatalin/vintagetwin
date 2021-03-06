<header class="main_header">
<div class="main_header__promo_bar"><div class="text"><span>50% sale.</span> just today.</div></div>
<div class="bottom_nav_content">
	<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<div data-id="mobile_nav_button" class="main_header__menu_button"><span class="fa fa-bars"></span></div>
			<div class="main_header__logo"><a href="/"><img src="images/logo.png" alt="The Vintage Twin" /></a></div>
			<div class="main_header__nav">
				<nav>
					<ul>
						<li><a href="#">clothing</a>
							<ul class="submenu clothing">
								<li>
									<dl>
										<dt>unisex</dt>
										<dd><a href="/category.php">t-shirts</a></dd>
										<dd><a href="/category.php">sweatshirts</a></dd>
										<dd><a href="/category.php">button downs</a></dd>
										<dd><a href="/category.php">sweaters</a></dd>
										<dd><a href="/category.php">jackets + coats</a></dd>
										<dd><a href="/category.php">pants</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt>more</dt>
										<dd><a href="/category.php">dresses</a></dd>
										<dd><a href="/category.php">jumpsuits + rompers</a></dd>
										<dd><a href="/category.php">skirts</a></dd>
										<dd><a href="/category.php">blouses</a></dd>
										<dd><a href="/category.php">cropped sweaters</a></dd>
										<dd><a href="/category.php">reworked sweatshirts</a></dd>
									</dl>
								</li>
							</ul>
						</li>
						<li><a href="#">accessories</a>
							<ul class="submenu accessories">
								<li><a href="/category.php">belts</a></li>
								<li><a href="/category.php">jewelry</a></li>
								<li><a href="/category.php">sunglasses + readers</a></li>
								<li><a href="/category.php">pins + patches</a></li>
							</ul>
						</li>
						<li><a href="#">home</a>
							<ul class="submenu home">
								<li><a href="/category.php">lighting</a></li>
								<li><a href="/category.php">storage</a></li>
								<li><a href="/category.php">art + decor</a></li>
								<li><a href="/category.php">kitchen</a></li>
								<li><a href="/category.php">vinyl</a></li>
							</ul>
						</li>
						<li><a href="#">trending</a>
							<ul class="submenu trending">
								<li><a href="/category.php">band tees</a></li>
								<li><a href="/category.php">basics</a></li>
								<li><a href="/category.php">champion</a></li>
								<li><a href="/category.php">adidas</a></li>
								<li><a href="/category.php">reworked</a></li>
								<li><a href="/category.php">harley</a></li>
							</ul>
						</li>
						<li><a href="#">the vault</a></li>
						<li><a href="#">jeanius bar</a></li>
					</ul>
				</nav>
			</div>
			<nav class="main_header__secondary_nav">
				<ul>
					<li data-id="search_content"><i class="fas fa-search"></i></li>
					<li data-id="sign_in_account" class="account_header">account</li>
					<li><a href="/favorites.php"><i class="far fa-heart"></i></a></li>
					<li data-id="cart_content" class="cart"><i class="fas fa-shopping-bag"></i></li>
				</ul>
				<div class="main_header__secondary_nav_body">
					<div data-id="search_content" data-role="single_nav_panel" class="featured_section">
						<label>
							<span class="black">search</span>
							<div class="search_section">
								<input class="search_bar" type="text" name="search">
								<button type="submit" class="submit">
								    <i class="fas fa-search"></i>
								</button>
							</div>
						</label>
					</div>

					<div data-id="sign_in_account" data-role="single_nav_panel" class="featured_section">
						<? require(__DIR__ . '/../components/account_fields.php'); ?>
					</div>

					<div data-id="cart_content" data-role="single_nav_panel" class="featured_section">
						<div class="title black top">ITEMS ADDED TO BAG</div>
						<div class="cart_items">
							<div class="cell">
								<img src="images/cart1.jpg" alt="Featured Image" />
							</div>
							<div class="cell">
								<div class="cart_top_content">
									<div class="title black top">STUDDED PANEL JEAN</div>
									<div class="cart_description">SIZE : M</div>
									<div class="cart_description">Only 1 Left!</div>
									<div class="remove_item">x remove</div>
								</div>
							</div>
							<div class="cell">
								<div class="title black top">$ 1,795.00</div>
							</div>
						</div>
						<div class="cart_checkout_section">
							<div class="title black">subtotal</div>
							<div class="title black">$ 1,795.00</div>
							<div class="secondary_text">Items in your bag are not reserved until you complete checkout</div>
							<div class="checkout"><a href="/cart.php">checkout</a></div>
							<div class="view_my_bag"><a href="#">View my bag</a></div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
	</div>
</div>
</header>