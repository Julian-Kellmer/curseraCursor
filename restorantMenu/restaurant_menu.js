const breakFastMenu =['Pancakes','Eggs Benedicts','Oatmeal', 'frittata']
const mainCourseMenu = ['Steake', 'Pasta','Burger','Salmon']
const dessertMenu = ['Cake','IceCream','Pudding','Frutit Salad'] 


const breakFastMenuItemsHTML = breakFastMenu.map((item,index)=>`<p>Item ${index + 1}:${item} </p>`)
document.getElementById('breakfastMenuItems').innerHTML= breakFastMenuItemsHTML
let mainCourseItem = '';

mainCourseMenu.forEach((item,index)=>{
    mainCourseItem += `<p>${index + 1}: ${item}</p> `
})
document.getElementById('maincourseMenuItems').innerHTML =mainCourseItem;

let dessertItem ='';

for (let i = 0 ;  i< dessertMenu.length;i++){
dessertItem += `<p>${i + 1}: ${dessertMenu[i]}</p> `
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem