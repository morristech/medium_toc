(function() {
	TOC_TAGS = ['h1', 'h2', 'h3'];
	MEDIUM_TAGS = ['.site-main.surface-container', '.postActionsBar', '.metabar']
	TOC_CONTAINER_WIDTH = '200px';

	document.querySelectorAll(MEDIUM_TAGS).forEach(function(element) {
		element.style.width = 'calc(100% - ' + TOC_CONTAINER_WIDTH +')';
	});

	var toc_lines = '';
	document.querySelectorAll(TOC_TAGS).forEach(function(element) {
		if(element.id == '' || element.id == undefined)
			return;
		toc_lines += '<li class="indent-level-'+ element.tagName.substr(-1) + '"> <a href="#'+ element.id +'">' +  element.innerText + '</a></li>';
	});

	var toc_container = document.createElement('div');
	toc_container.setAttribute('id', 'toc-container');
	toc_container.style.width = TOC_CONTAINER_WIDTH;
	toc_container.innerHTML = '<h1 id="toc-title">Table of contents</h1><ul id="toc">' + toc_lines + '</ul>';
	document.body.prepend(toc_container);
})();
