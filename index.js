function newImage(src, left, bottom) {
  let img = document.createElement("img");
  img.src = src;
  img.style.position = "fixed";
  img.style.left = left;
  img.style.bottom = bottom;
  document.body.append(img);
  return img
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
  let item = newImage(src, left, bottom)
  addToInventory(item, src)
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
  inventory.style.position = 'fixed'
  inventory.style.bottom = '0px';
  inventory.style.left = '0px'
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

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

newItem("assets/sword.png", "500px", "405px");
newItem("assets/shield.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");