console.log('Starting App');

setTimeout(() => {
	console.log('Inside of callback');
}, 2000);

setTimeout(() => {
	console.log('2nd setTimeout');
});

console.log('Finishing Up');
