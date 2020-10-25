<template lang="pug">
.h-header
	.nav.main
		.box-username
			img(src='~/assets/img/layout/user.png')
			span 洛胖陳
		.page-index 
			span {{ title }}
		.box-login 
			nuxt-link(to='/')
				span 登入

</template>

<script>
export default {
	computed: {
		title () {
			return this.$route.matched.map((r) => {
				return (r.components.default.options ? r.components.default.options.pageTitle : r.components.default.pageTitle)
			})[0]
		},
	},
}
</script>

<style lang="scss" scoped>
// .h-header{
// 	width: 100%;
// 	z-index: 1000;
// }
// .h-navbar{
// 	display: flex;
// 	position: relative;
// 	justify-content: space-around;
// 	align-items: center;
// 	padding: 26px 15px 11px 15px;
// 	text-align: center;
// 	color: #179E99;
// 	background-color: rgb(249,249,249);
// 	// box-shadow: 0px 1px 0px 0px rgba(239,239,244,1), 0px 2px 0px 0px rgba(0,0,0,0.2);
// 	border-bottom: 1px solid #ccc;

// 	&span{
// 		padding: 2px 4px;
// 	}
	
// 	.username{
// 		width: 25%;
// 		font-size: 18px;
// 		img{
// 			width: 25px;
// 		}
// 	}
// 	.page-index{
// 		width: 50%;
// 		font-size: 24px;
// 		color: #747474;
// 		font-weight: bold;
// 	}
// 	.login-box{
// 		width: 25%;
// 		font-size: 18px;
// 	}

// }

</style>
