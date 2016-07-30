$(function() {
	$("pre").addClass("prettyprint");

	//Load Goodle Code Pretiffy
	// ------------------------------------------
	window.prettyPrint && prettyPrint();

	// Table of Content
	// ------------------------------------------
	$("#doc_toc").tocify({
		theme: 'none',
		scrollHistory: true,
		selectors: "h2, h3, h4"
	});

	// Open External Links in a New Window
	// ------------------------------------------
	$("a[href^='http']").attr('target','_blank').addClass('external_link');

});