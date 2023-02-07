//$("ul.mainmenu li").children("ul").addClass("show");
function display(event) {
	$(event.currentTarget).children("ul").addClass("show");
}
	function hide(event) {
$(event.currentTarget).children("ul").removeClass("show");
	}
$("ul.mainmenu li").hover(display,hide);