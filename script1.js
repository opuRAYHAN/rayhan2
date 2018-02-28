$(document).ready(function() {

	$("#hidehome").click(function() {
		$("#home").hide(function() {
			alert("home is hidden");
		});

	});
	$("#showhome").click(function() {
		$("#home").show();
	});

});

function RAYHAN() {
	document.write("hidden");

}

/*.....end home....*/

/*start feeds*/
$(document).ready(function() {
	$("#hidefeeds").click(function() {
		$("#feeds").hide();

	});
	$("#showfeeds").click(function() {
		$("#feeds").show();

	});

});

/*----------feeds end---------------------*/

/*--------------------------zombies start-----------------*/
$(document).ready(function() {
	$("#hidezombies").click(function() {
		$("#zombies").hide(slow);
	});
});

$(document).ready(function() {
	$("#showzombies").click(function() {
		$("#zombies").show(100);
	});
});

/*----------------------zombies end----------*/
/*-------------------------zombies fadeln out toggle --------*/

$(document).ready(function() {
	$("#hidezombies").dblclick(function() {
		$("#zombies").fadeout(20000);
	});
});

/* 						zombies end */

/*
 $(document).ready(function(){
 $("p").dblclick(function(){
 $("this").hide();
 });
 });
 */