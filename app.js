//PRELOADER
var preloader = document.getElementById('preloader');
var preloaderLoad = preloader.querySelector('.load');

function hidePreloader() {
	preloaderLoad.classList.add('is-hide');

	setTimeout(function() {

	    preloader.classList.add('is-hide');
	    showPage("hero");

	}, 200);
}




//PROGRESSBAR
var progress = document.querySelectorAll('.js-progress');
var maxValue = 10;

function SetProgressMax(max) {
	maxValue = max;
}
function SetProgressMin() {
	[].forEach.call(progress, function(item) {
		item.querySelector('.js-progress-value').style.width = "0%";
	});
}
function SetProgressValue(arg) {
	if (arg === undefined) {
		[].forEach.call(progress, function(item) {
			item.classList.add('is-loop');
		});
	} else {
		var val = arg/maxValue * 100;
		[].forEach.call(progress, function(item) {
			item.querySelector('.js-progress-value').style.width = val + "%";
		});
	}
}

//PAGES
var pages = document.querySelectorAll('.container');

function hidePages() {
	[].forEach.call(pages, function(page) {
		page.style.display = 'none';
	});
}

function showPage(page) {
	hidePages();
	document.getElementById(page).style.display = 'block';
}


hidePages();
showPage("preloader");