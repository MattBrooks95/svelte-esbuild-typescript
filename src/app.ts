import App from "./ui/App.svelte";

import { test } from './logic/Logic';

const app = new App({
	target: document.body,
	props: {
		testCallback: test,
	},
});

export default app;
