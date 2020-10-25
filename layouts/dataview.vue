<template lang="pug">
div(ref="formContainer")
	HeaderData
	nuxt
	Footer

</template>

<script>
import HeaderData from '~/components/header/headerData.vue'
import Footer from '~/components/footer/footer.vue'

export default {
	components: {
		HeaderData,
		Footer
	}
	
}
</script>