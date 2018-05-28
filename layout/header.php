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
										<dd><a href="#">t-shirts</a></dd>
										<dd><a href="#">sweatshirts</a></dd>
										<dd><a href="#">button downs</a></dd>
										<dd><a href="#">sweaters</a></dd>
										<dd><a href="#">jackets + coats</a></dd>
										<dd><a href="#">pants</a></dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt>more</dt>
										<dd><a href="#">dresses</a></dd>
										<dd><a href="#">jumpsuits + rompers</a></dd>
										<dd><a href="#">skirts</a></dd>
										<dd><a href="#">blouses</a></dd>
										<dd><a href="#">cropped sweaters</a></dd>
										<dd><a href="#">reworked sweatshirts</a></dd>
									</dl>
								</li>
							</ul>
						</li>
						<li><a href="#">accessories</a>
							<ul class="submenu accessories">
								<li><a href="#">belts</a></li>
								<li><a href="#">jewelry</a></li>
								<li><a href="#">sunglasses + readers</a></li>
								<li><a href="#">pins + patches</a></li>
							</ul>
						</li>
						<li><a href="#">home</a>
							<ul class="submenu home">
								<li><a href="#">lighting</a></li>
								<li><a href="#">storage</a></li>
								<li><a href="#">art + decor</a></li>
								<li><a href="#">kitchen</a></li>
								<li><a href="#">vinyl</a></li>
							</ul>
						</li>
						<li><a href="#">trending</a>
							<ul class="submenu trending">
								<li><a href="#">band tees</a></li>
								<li><a href="#">basics</a></li>
								<li><a href="#">champion</a></li>
								<li><a href="#">adidas</a></li>
								<li><a href="#">reworked</a></li>
								<li><a href="#">harley</a></li>
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
					<li data-id="sign_in" class="account_header">account</li>
					<li><a href="/favorites"><i class="far fa-heart"></i></a></li>
					<li data-id="cart_content" class="cart"><i class="fas fa-shopping-bag"></i></li>
				</ul>
				<div class="main_header__secondary_nav_body">
					<div data-id="search_content" class="featured_section">
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

					<div data-id="sign_in" class="featured_section">
						<? require(__DIR__ . '/../components/account_fields.php'); ?>
					</div>

					<div data-id="cart_content" class="featured_section">
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
							<button type="submit" class="checkout">checkout</button>
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