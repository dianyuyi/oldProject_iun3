<template lang="pug">
.screen-panel.front-content
	.scrollable-margin
		.scrollable-content
			.cust-profile
				form
					.form-search
						.search-box
							.search-icon
								img(src="~/assets/img/search.png", alt="")
							input(name='q', type='search',placeholder="輸入名稱或電話號碼")
			.record
				.list-group.default
					ul
						li(v-for='(custom,index) in customers' :key="index")
							nuxt-link(to="/cust-profile").list-group-item
								.name.floatL.text-center {{custom.lastname}}
								p.m-t-xs.font-bold {{custom.name}}
								p 平台: {{custom.platform}}
								span.absolute {{custom.update}}
									nuxt-link(to="/cust-company")
										img.info-icon(src='@/assets/img/info.png')

</template>

<script>

export default {
	layout: 'front',
	// components: {
	// 	PageHeader
	// },
	pageTitle: "客戶管理",
	computed: {
		// ...mapState('datalist', {customlist: 'datalist'})
		customers () {
			return this.$store.state.datalist.customData 
		},
	},
	

}
</script>

<style lang="scss" scoped>

</style>
