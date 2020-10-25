<template lang="pug">
.screen-panel.data-content
	.scrollable-margin
		.scrollable-content
			.cust-profile.white
				.custboard
					textarea(name="", cols="30", rows="10" placeholder="大雜燴留言板")
					button.btn.btn-primary.floatR 送出
					textarea(name="", cols="30", rows="10" placeholder="個人備註")
					button.btn.btn-primary.floatR 送出



</template>

<script>
export default {
	layout: 'dataview',

}
</script>

<style>

</style>
