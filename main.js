var canvas = new fabric.Canvas('canvas', {width: window.innerWidth, height: window.innerHeight});

// create a rectangle object
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);