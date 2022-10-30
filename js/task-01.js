const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

const allItemRef = itemRef.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
})