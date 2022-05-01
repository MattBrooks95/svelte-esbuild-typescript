export function test() {
	const message: string = "yay typescript";
	//this would be reported as an error in the npm run validate command
	//const message: string = 42;
	console.log(message);

}
