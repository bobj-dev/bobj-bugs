const canvas = $('canvas');
const context = canvas.getContext('2d');

const player = sprites.player = new Sprite({image: $('#player')});

$('#background').src = `https://via.placeholder.com/${window.innerWidth}x${window.innerHeight}.png`;

window.addEventListener('keydown', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.speed.y = -player.velocity.y;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.speed.x = -player.velocity.x;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.speed.y = player.velocity.y;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.speed.x = player.velocity.x;
	}
});

window.addEventListener('keyup', function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp' || e.key === ' ') {
		player.speed.y = 0;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.speed.x = 0;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.speed.y = 0;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.speed.x = 0;
	}
});

window.addEventListener('load', resize);
window.addEventListener('resize', resize);

draw();
