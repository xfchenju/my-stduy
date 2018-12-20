<template>
	<div id="index1">
		this is index1
		<input type="text" v-model="inputData">
	</div>
</template>
<script>
	export default {
		name: 'index1',
		data() {
			return {
				inputData: ''
			}
		},
		methods: {
		},
		deactivated() {
			console.log('111')
		}
	}
</script>
<style></style>