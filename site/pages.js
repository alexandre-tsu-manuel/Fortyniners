var numPage = 1;

function change(newNum)
{
	$("#" + numPage).hide(0);
	$("#" + newNum).show(0);
	numPage = newNum;
}

$("#1Link").click(function(){change(1);});
$("#2Link").click(function(){change(2);});
$("#3Link").click(function(){change(3);});

function update()
{
	$("nav ul").css("margin-left", ($(document).width() - 600) / 2);
}update();
$(window).load(function(){update();});
$(window).resize(function(){update();});