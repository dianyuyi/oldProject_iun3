<template lang="pug">
.screen-panel.data-content
	.scrollable-margin
		.scrollable-content
			.cust-profile.white
				#explore
					.list-table
						.service
							.tab-list
								span.font18 客服人員
							.tab-list.name 
								span.font18 周幸媛
						.group
							.data.name
								p 客戶名稱
							.data.content
								p 伍蔘凡
						.group
							.data.name
								p 手機
							.data.content
								p 0000-0000
						.group
							.data.name
								p 住址
							.data.content
								p 南投縣
						.group
							.data.name
								p 借貸平台
							.data.content
								p 羅賓漢
						.group
							.data.name
								p 借貸平台
							.data.content
								p 羅賓漢
						.group
							.data.name
								p 借貸金額
							.data.content
								p 300000
						.group
							.data.name
								p 借貸用途
							.data.content
								p 還車貸
						.group
							.data.name
								p 每期還款金額
							.data.content
								p 18000
					nuxt-link.btn-cancel.btn-close.font24(to="/cust-company")
						span 關閉


</template>

<script>
export default {
	layout: 'dataview',

}
</script>

<style>

</style>
