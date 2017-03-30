var	period = 5, 
	counter = 0;

var news = [
	['facebook news1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' + 
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
	['facebook news2','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ' + 
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'],
	['facebook news3','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  ' + 
	'anim id est laborum. xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit']
];

function createContentBlock(newsTitle, newsContent){
	return 	'<div class="_1dwg">' + 
				'<h5 class="_5pbw">' + 
					'<span class="fwb">' + 
						'<a href="">'+ newsTitle + '</a>' +
					'</span>' +
				'</h5>' +
				'<div class="_5pbx">' +
					'<p>' + newsContent + '</p>' +
				'</div>' + 
			'</div>';
}

function newBlock(newsTitle, newsContent) {
	var newBlock = document.createElement('div');
	newBlock.className += 'new-block _4-u2 _5v3q _4-u8 mbm pbm';
	newBlock.setAttribute('data-target', 'true');
	newBlock.innerHTML = createContentBlock(newsTitle, newsContent);
	return newBlock;
}

function addElement() {
    var newNewsBlock,
    	newsWrapper = document.getElementById('contentArea'), 
    	newsBlock = newsWrapper.querySelectorAll('._4-u8:not([data-target])');
	
	for (var i = 0; i < newsBlock.length; i++) {
		var selectedBlock = newsBlock[i];
    	selectedBlock.setAttribute('data-target', 'true');
    	if(i%period == 2) {
    		newNewsBlock = newBlock(news[counter][0], news[counter][1]);
			counter ++;
    		selectedBlock.parentNode.insertBefore(newNewsBlock, selectedBlock);
    		if(counter >= news.length) {
    			counter = 0;
	    	}
	    }
	}
}

window.onscroll = function(){
	addElement();
}
