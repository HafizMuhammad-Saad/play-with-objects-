// Modal Login and SignUp

var email = document.getElementById('email1');
var password = document.getElementById('password1');

var emailValue = 'saad123@gmail.com';
var passwordValue = '123'


function show() {
  if (email.value === emailValue && password.value === passwordValue) {
    console.log(email.value);
    console.log(password.value);
    
  } else {
    alert('Please enter a valid email address and password ');
  }
  
}


















// ---------------------------------------------------------------------------------------

// const gadgets = {
//     products: [
//       { name: "Smartphone", price: 1100 },
//       { name: "Smartwatch", price: 400 },
//       { name: "Laptop", price: 1500 },
//       { name: "Tablet", price: 700 },
//       { name: "glass", price: 700 },
//       { name: "cup", price: 1700 },
//       { name: "cofin", price: 100 },
//     ]
//   };

//   function highLowPrice() {
//       gadgets.products.forEach((product) => {
//         console.log(product.name, product.price);
//     var container = document.querySelector('.main')
        
    
//         if (product.price > 1000) {
//             container.innerHTML += `<h4 class="crimson text-light p-2 rounded ">${product.name } is a expensive product with a price of ${product.price}</h4>`;
//        } if (product.price < 1000) {
//            container.innerHTML += `<h4 class="forestgreen text-light p-2 rounded ">${product.name } is a low price product with a price of ${product.price}</h4>`;
//        }
//       })
    
//   }

//   highLowPrice()
//   var gadgets1 = {
//     product1: { smartWatch: { name: "Smartwatch", price: 1999 }, },
//     product2: { smartPhone : { name: "Smartphone", price: 1699 } },
//     product3: { laptop : { name: "Laptop", price: 599 } } ,
//     product4: { tablet : { name: "Tablet", price: 199 } },
//   }



//   function expensiveProduct() {
//     var container = document.querySelector('.main')
//       for (var products in gadgets1) {
//         for (var product in gadgets1[products]) {
//             var details = gadgets1[products][product];
//             if (details.price > 1000) {
//                  container.innerHTML += `<h4 class="crimson text-light p-2 rounded bg-gradient">${details.name } is a expensive product with a price of ${details.price}</h4>`;
//             } if (details.price < 1000) {
//                 container.innerHTML += `<h4 class="forestgreen text-light p-2 rounded bg-gradient">${details.name } is a medium price product with a price of ${details.price}</h4>`;
//             }
            
//       }
//     }
    
//   }
//   expensiveProduct()



// const warehouse = {
//     categories: {
//       furniture: [
//         { name: "Sofa", price: 700 },
//         { name: "Table", price: 300 },
//       ],
//       electronics: [
//         { name: "Speaker", price: 100 },
//         { name: "Monitor", price: 200 },
//       ],
//       mobiles: [
//         { name: "Speaker", price: 100 },
//         { name: "Monitor", price: 200 },
//         { name: "Speaker", price: 100 },
//         { name: "Monitor", price: 200 },
//       ],
//     },
//   };

//   function countsProductInCategory() {
//     var data = '';
//     var cate = warehouse.categories;
//     Object.keys(cate)
//     // console.log(cate);
//     for(let category in cate){
//     //   console.log(`Category: ${category}, Number of items: ${cate[category].length}`);


//        data += `
//         <p class="h4 py-2">
//          Category: <span class="text-secondary bg-light"> ${category} </span>
//          , Number of items: <span class="text-success bg-light"> ${cate[category].length} </span>
//         </p>
//       `
//     }
   
//     document.querySelector('.container').innerHTML = data;
    
//   }
//   countsProductInCategory();








// const inventory = {
//     items: [
//       { name: "Chair", price: 50 },
//       { name: "Desk", price: 150 },
//       { name: "Lamp", price: 30 },
//       { name: "Bookshelf", price: 200 },
//     ],
//   };

//   function maxPrice(price) {
//     const body = document.querySelector("body");
//     let existingTable = document.querySelector(".table");
//     if (existingTable) {
//         existingTable.remove();
//     }

//     let div = document.createElement("div");
//     div.innerHTML = `
//     <table class="table">
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody></tbody>
//     </table>
//     `;

//     let tbody = div.querySelector("tbody");
//     let itemsFound = false;

//     inventory.items.forEach((item) => {
//         if (item.price <= price) {
//             itemsFound = true;
//             let row = `<tr><td>${item.name}</td><td>${item.price}</td></tr>`;
//             tbody.innerHTML += row;
//         }
//     });

//     if (!itemsFound) {
//         tbody.innerHTML = `<tr><td colspan="2">No items found under this price.</td></tr>`;
//     }

//     body.appendChild(div);
// }






//   ------------------------------------------------------------------------
  //   var body = document.querySelector('body')
//   function maxPrice(price) {
//     var div = document.createElement("div");
//     div.innerHTML = `
//          <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Name :</th>
//       <th scope="col">Price :</th>
//     </tr>
//   </thead>
//   <tbody>

//     `
//     if (!div.querySelector("tbody").hasChildNodes()) {
//         div.innerHTML += `<tr><td colspan="2">No items found under this price.</td></tr>`;
//         console.log('no items found');
        
//     }
//     inventory.items.forEach((item) => {
//     if (item.price <= price) {
//         div.innerHTML += `          
//     <tr>
//       <td>${item.name}</td> 
//       <td>${item.price}</td> <br>
//     </tr>
//         `;
//     }
   
//   })
//   div.innerHTML += `
//   </tbody>
// </table>
// `
// body.appendChild(div)
//   }

//   maxPrice(10)






// const store = {
//     electronics: [
//       { name: "TV", brand: "Samsung", price: 1200 },
//       { name: "Headphones", brand: "Sony", price: 150 },
//     ],
//     appliances: [
//       { name: "Refrigerator", brand: "LG", price: 800 },
//       { name: "Microwave", brand: "Panasonic", price: 200 },
//     ],
//   };
// var body = document.querySelector('body')
// var table = document.querySelector('table');
// var header = document.querySelector('thead');

// function storCollection() {
//     var data = Object.keys(store);
//     data.forEach((category) => {
//       // Add category name as a separate header row
//       const categoryRow = document.createElement('tr');
//       categoryRow.innerHTML = `<th colspan="3">${category}</th>`;
//       body.appendChild(categoryRow);
  
//       // Add products under this category
//       store[category].forEach((product) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td>${product.name}</td><td>${product.brand}</td><td>${product.price}</td>`;
//         body.appendChild(row);
//       });
//     });
  
//     // Append table parts to the container
//     table.appendChild(header);
//     table.appendChild(body);
//     document.getElementById('container').appendChild(table);
//   }
  
//   storCollection();
  
//   const columnHeaders = ['Name', 'Brand', 'Price'];
// const headerRow = document.createElement('tr');
// columnHeaders.forEach((col) => {
//   const th = document.createElement('th');
//   th.textContent = col;
//   headerRow.appendChild(th);
// });
// header.appendChild(headerRow);

// row.style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#e0e0e0';
// row.addEventListener('mouseover', () => (row.style.backgroundColor = '#ddd'));
// row.addEventListener('mouseout', () => (row.style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#e0e0e0'));
