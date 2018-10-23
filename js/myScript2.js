function enter(event) {
    this.fillColor = 'red';
}

function leave(event) {
    this.fillColor = 'black';
}

var clickcount = 0;
var letters = ['E', 'L', 'L', 'I', 'E', '•', 'A', 'U', 'D', 'E', 'T', '•']

// When the mouse is pressed:
function onMouseDown(event) {
    // Create a circle shaped path at the position of the mouse:
    var path = new PointText(new Point(event.point))
	path.justification = 'center';
    path.fillColor = 'black';
    path.fontFamily = 'Helvetica', 'sans-serif';
    path.fontSize = 20;
    path.content = letters[clickcount];
	clickcount++
	if (clickcount > 11) {
			clickcount = 0;
		}

    // When the mouse enters the item, set its fill color to red:
    path.onMouseEnter = enter;

    // When the mouse leaves the item, set its fill color to black:
    path.onMouseLeave = leave;
}