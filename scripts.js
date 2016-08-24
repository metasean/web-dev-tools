/* Button event example */
document.getElementById('listener').addEventListener( 'click', function(e) {
	console.log('Awesome clicking!');
})

/* Debugger / Breakpoint example */
function countDown() {
	
	var i = 42;

	while (i--) {
		if (i === 0) {
			console.log('... to the moon!'); 
			return;
		}
		console.log(i);
	}
}

//countDown();
