
<template lang="pug">
.screen-panel.data-content
	.scrollable-margin
		.scrollable-content
			.cust-profile.white
				.cust-tab
					nuxt-link.tab-list(to="")
						span.font18 客戶管理
					nuxt-link.tab-list.active(to="")
						span.font18 送件
				.infomation
					.infobox
						p.m-t-xs.font18 今天
						span.font16 上午 9:36
						span.totaltime.font16 5分鐘
					.infobox
						p.m-t-xs.font18 電話
						a.font20(href="#") 點我打電話
					.infobox
						p.m-t-xs.font18 平台
						p.font20 羅賓漢
					.infobox
						p.m-t-xs.font20 選擇申辦專案
						form
							.form-apply
								.radio-item
									input(id='apply01' type='radio' name='project')
									label(for='apply01') A.手機收購
										span
											span
								.radio-item
									input(id='apply02' type='radio' name='project')
									label(for='apply02') B.機車收購
										span
											span
								.radio-item
									input(id='apply03' type='radio' name='project')
									label(for='apply03') C.機車專案
										span
											span
								.radio-item
									input(id='apply04' type='radio' name='project')
									label(for='apply04') D.機車專案-學生專案
										span
											span
								.radio-item.other
									input(id='apply05' type='radio' name='project')
									label(for='apply05') 新增選項
										span
											span
</template>

<script>
export default {
	layout: 'dataview',

}
</script>

<style>

</style>
