<script lang="ts">
let message: string = "hello, svelte";
const { testCallback } = $$props;
if (testCallback) {
	testCallback();
} else {
	console.log('no callback in props', $$props);
}
</script>

<main>
<div class="container">
<span>{message}</span>
</div>
</main>

<style>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: red;
	width: 300px;
	height: 300px;
}
</style>
