import App from "./App.svelte";

import { test } from './Logic';

const app = new App({
	target: document.body,
	props: {
		testCallback: test,
	},
});

export default app;
