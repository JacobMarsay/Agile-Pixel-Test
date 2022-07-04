let paths = document.querySelectorAll('path');
paths = [...paths] // spread operator js
paths.reverse()

function textAnimation(path) {
	path.classList.add('text-animation')
}

paths.forEach((path, i) => {
	setTimeout(() => {
		textAnimation(path);
	}, i * 1000);
  });

//  paths.forEach((path) => {
//	path.classList.add('CLASSNAME')
//});
