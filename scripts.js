/* Button event example */
document.getElementById('listener').addEventListener( 'click', function(e) {
	console.log('Awesome clicking!');
})

/* Debugger / Breakpoint example */
function countDown() {

	var i = 0;

	while (i--) {
		if (i === 0) {
			console.log('... to the moon!'); return;
		}
		console.log(i);
	}
}

countDown();

/* Localstorage via GUN */
function bandolier () {
	localStorage.clear();

	var gun = Gun();
	Gun.log.squelch = true;

	gun.put({hello: 'JS Learners', from: 'the Gun team'})
} 

bandolier();