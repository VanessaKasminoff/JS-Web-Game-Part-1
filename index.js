function newImage(src) {
  let img = document.createElement("img");
  img.src = src;
  document.body.append(img);
  return img
}

function move(img) {
  img.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    img.style.left = left + 'px';
    img.style.bottom = bottom + 'px';
  }
  return {to: moveToCoordinates}
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

function newItem(src) {
  let item = newImage(src)
  addToInventory(item, src)
  return item
}
  
function addToInventory (item, src) {
  item.addEventListener('click', function () {
    item.remove()
    let inventoryItem = document.createElement('img')
    inventoryItem.src = src
    returnedInventory.append(inventoryItem)
  })
  console.log(addToInventory)
}

function newInventory(){
  let inventory = document.createElement('div')
  inventory.style.width = '100%'
  inventory.style.height = '100px'
  inventory.style.display = 'flex'
  inventory.style.flexDirection = 'row'
  inventory.style.alignItems = 'center'
  inventory.style.justifyContent = 'space-evenly'
  inventory.style.border = '2px solid black'
  inventory.style.backgroundColor = 'brown'
  document.body.append(inventory)
  return inventory
}

tileImg("assets/sky.png", "0px", "0px", "100%", "48%");
tileImg("assets/grass.png", "48%", "0px", "100%", "67%");

let returnedInventory = newInventory();
move(returnedInventory).to(0, 0);

move(newImage("assets/green-character.gif")).to(100, 100);
move(newImage("assets/pine-tree.png")).to(450, 200);
move(newImage("assets/tree.png")).to(200, 300);
move(newImage("assets/pillar.png")).to(350, 100);
move(newImage("assets/crate.png")).to(150, 200);
move(newImage("assets/well.png")).to(500, 425);

move(newItem("assets/sword.png")).to(500, 405);
move(newItem("assets/shield.png")).to(165, 185);
move(newItem("assets/staff.png")).to(600, 100);