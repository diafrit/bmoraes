<template>
	<p>{{ text }}</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
	text: string = 'bmoraes.dev'
}
</script>

<style scoped lang="scss"></style>
