$(document).ready(function(){
	$('#header .inside').load('shared/header.html');
	$('#footer .inside').load('shared/footer.html');	

	// Banner image slider
	
	setInterval(() => {
		document.getElementById("banner").style.display="none";
	}, 120000);
});
