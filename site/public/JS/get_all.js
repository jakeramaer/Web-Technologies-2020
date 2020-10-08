var frame = document.getElementById("picture");
var grid = document.querySelector('.grid');

fetch('/getdata/getall', {
  method: 'GET'
}).then(response => response.json()).then((data) => {
  for (const image of data.images) {
    console.log(image.Path);
    var div = document.createElement("div");
    div.classList.add('grid-item');
    var image_name = image.Path.split(new RegExp("\\\\|/"))[2];
    var img = document.createElement("img");
    img.src = image_name;
    div.appendChild(img);
    frame.appendChild(div);
  }
  imagesLoaded(grid, function() {
    console.log('all images are loaded');
    var msnry = new Masonry(grid, {
      // itemSelector: '.grid-item',
      percentPosition: true,
      horizontalOrder: true,
      gutterWidth: 5
    });
  });
});
