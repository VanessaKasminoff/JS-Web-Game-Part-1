function newImage(src, left, bottom) {
  let img = document.createElement("img");
  img.src = src;
  img.style.position = "fixed";
  img.style.left = left;
  img.style.bottom = bottom;
  document.body.append(img);
}

function tileImg(url, top, left, width, height) {
  let bgDiv = document.createElement("div");
  bgDiv.style.backgroundImage = `url('${url}')`;
  bgDiv.style.backgroundRepeat = "repeat";
  bgDiv.style.position = "fixed";
  bgDiv.style.top = top;
  bgDiv.style.left = left;
  bgDiv.style.width = width;
  bgDiv.style.height = height;
  document.body.append(bgDiv);
}

function newItem(src, left, bottom) {
  let playerItem = document.createElement("img");
  playerItem.src = src;
  playerItem.style.position = "fixed";
  playerItem.style.left = left;
  playerItem.style.bottom = bottom;
  document.body.append(playerItem);

  playerItem.addEventListener('dblclick', function () {
    playerItem.remove()
  })
}

tileImg("assets/sky.png", "0px", "0px", "100%", "48%");
tileImg("assets/grass.png", "48%", "0px", "100%", "67%");

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

newItem("assets/sword.png", "500px", "405px");
newItem("assets/shield.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");