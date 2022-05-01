<script lang="ts">
let message: string = "hello, svelte";
const { testCallback } = $$props;
if (testCallback) {
	testCallback();
} else {
	console.log('no callback in props', $$props);
}
//x();//no in-editor error messages, probably because I don't have a language server for svelte yet
//BUT npx svelte-check will catch this

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
