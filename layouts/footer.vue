<template lang="pug">
div(ref="formContainer")
	nuxt
	Footer
</template>

<script>
import Footer from '~/components/footer/footer.vue'
export default {
	components: {
		Footer
	}
	
}
</script>
