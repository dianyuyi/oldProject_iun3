<template lang="pug">
.h-header.data-header
	.nav.person
		.box-prev
			a(@click="$router.go(-1)")
				span 〈 返回
		.page-data-img
			.name-circle
				span 公司
			.name-data
				p 公司
		.box-edit 
			nuxt-link(to='/')
				span 編輯

</template>

<script>
export default {
	// computed: {
	// 	userdata () {
	// 		return this.$route.params.id
	// 	}
	// },
	// watch: {
    //     $route (to,from){
    //         this.userdata = to.params.id
    //     }
    // }
}
</script>

<style lang="scss" scoped>
</style>