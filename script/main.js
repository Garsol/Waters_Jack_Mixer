theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
song-sel.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}