<template lang="pug">
.screen-panel.data-content
	.scrollable-margin
		.scrollable-content
			.cust-profile.white
				.companybox
					nuxt-link.com-btn(to="cust-company/explore")
						.use
							img(src="@/assets/img/profile/button-explore.png", alt="")
						p.font16 瀏覽
					nuxt-link.com-btn(to="cust-company/complex")
						.use
							img(src="@/assets/img/profile/button-complex.png", alt="")
						p.font16 大雜燴
					nuxt-link.com-btn(to="cust-company/send")
						.use
							img(src="@/assets/img/profile/button-send.png", alt="")
						p.font16 送件
				.infomation
					.infobox
						p.m-t-xs.font18 今天
						span.font16 上午 9:36
						span.totaltime.font16 5分鐘
					.infobox
						p.m-t-xs.font18 電話
						a.font20.text-primary(href="#") 點我打電話
					.infobox
						a.font20.text-primary(href="#") 客戶諮詢

</template>

<script>
export default {
	layout: 'dataview',

}
</script>

<style>

</style>
