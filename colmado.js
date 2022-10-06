const pedidos = document.getElementById('pedidos');


const productos = [
   {
    "Botellon de Agua": `<img src="img/Productos/botellon.png" alt="Agua">`,
     Precio: `RD$60.00`
   },
   {
      Aguacate: `<img src="img/Productos/aguacate.png" alt="aguacate"></img>`,
      Precio: `RD$35.00`
   },
   {
      Chuleta: `<img src="img/Productos/chuleta.png" alt="chuleta"></img>`,
      Precio: `RD$150 lb`
   },
   {
    Cocacola: `<img src="img/Productos/cocacola.png" alt="cocacola"></img>`,
    Precio: `RD$70.00`
   },
   {
    Papita: `<img src="img/Productos/papita.png" alt="papita"></img>`,
    Precio: `RD$45.00`
  },
  {
    Sprite: `<img src="img/Productos/sprite.png" alt="refresco"></img>`,
    Precio: `RD$20.00`
  },
  {
    Snickers: `<img src="img/Productos/sniker.png" alt="Sniker"></img>`,
    Precio: `RD$32.00`    
  },
  {
    Yuca: `<img src="img/Productos/yuca.png" alt="yuca"></img>`,
    Precio: `RD$15 lb`
  },
  {
    Pan: `<img src="img/Productos/pan.png" alt="pan"></img>`,
    Precio: `RD$5.00 `
  },
]


function cargarPedidos(){
  
  productos.forEach(item =>{
  const producto = Object.keys(item);
    
      pedidos.innerHTML += `<div class='data'> 
                                <h4> ${producto[0]} </h4> 
                                 ${item[producto[0]]}
                                 <h3>${item.Precio} </h3>
                            </div> `
  })
  
}




cargarPedidos()




