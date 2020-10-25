<template lang="pug">
.screen-panel(@submit.prevent="submit")
	.scrollable-content.login-bg
		.login
			.login-title.text-center
				h1 IUN3
				p 請輸入帳號密碼登入
			form
				fieldset
				.form-group(style='margin-bottom: -1px;')
					.form-input-group
							//- span(v-t="$t('LOGIN_EMAIL')")
					input#inputLoginEmail.form-control.login-form(placeholder='Username or Email', type='email')
				.form-group.has-feedback
					.form-input-group
							//- span(v-t="$t('LOGIN_PASSWORD')")
					input#inputLoginPassword.form-control.login-form(placeholder='Password', type='password')
				//- button.btn.btn-default.btn-radius.btn-block(@click='') Test Login
				//- nuxt-link(to='/cust') 
				button.btn.btn-primary.btn-radius.btn-block.font23 登入
					//- span(v-t="$t('BTN_LOGIN')") 登入
				.remembered-section.m-b-xl
					span.pull-right
							a(href='#forgot_password', @click='')
								.text-light 忘記密碼?

</template>

<script>
export default {
	pageTitle: "通訊紀錄",
	transition: 'fade',
	layout: 'header',
	data() {
		return {
			fullPage: false
		}
	},
	methods: {
		submit() {
			let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: true,
				onCancel: this.onCancel,
			});
			// simulate AJAX
			setTimeout(() => {
				loader.hide()
				this.$router.push('/cust');
			},1500)                 
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
