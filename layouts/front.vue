<template lang="pug">
div(ref="formContainer")
	Header
	nuxt
	Footer

</template>

<script>
import Header from '~/components/header/header.vue'
import Footer from '~/components/footer/footer.vue'
export default {
	components: {
        Header,
		Footer
	}
	
}
</script>