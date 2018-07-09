<div data-login-role="sign_in" class="account_panel active">
	<div class="title black top">login</div>
	<label class="single_label">
		<div class="title grey">email address<sup>*</sup></div>
		<input class="field" type="email" name="email">
	</label>

	<label class="single_label">
		<div class="title grey">password<sup>*</sup></div>
		<input class="field" type="password" name="password" minlength="8" required>
	</label>

	<div data-login-role="forgot_password" class="title grey top active_link">forgot your password?</div>
	<input class="login" type="submit" value="log in">
	<div data-login-role="create_account" class="title black bottom active_link">create account</div>
</div>

<div data-login-role="forgot_password" class="account_panel">
	<div class="title black">forgot your password?</div>
	<p>Please enter your email address below and we’ll send you instructions to reset your password.</p>
	<label class="single_label top">
		<div class="title grey">email address<sup>*</sup></div>
		<input class="field" type="email" name="forgot_password">
	</label>
	<input class="login" type="submit" value="send" name="send_new_password">
</div>

<div data-login-role="create_account" class="account_panel">
	<div class="title black top">create an account</div>
	<label class="single_label">
		<div class="title grey">email address<sup>*</sup></div>
		<input class="field" type="email" name="create_account_email">
	</label>

	<label class="single_label top">
		<div class="title grey">password<sup>*</sup></div>
		<input class="field" type="password" name="create_account_password" minlength="8" required>
	</label>

	<input class="login" type="submit" value="sign up">
	<div data-login-role="sign_in" class="title black bottom active_link">already have an account?</div>
</div>