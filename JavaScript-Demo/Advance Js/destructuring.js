// Destructuring makes it easy to extract only what is needed.

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles

// console.log(car);

const smartphone1 = {
    name: "IPhone -16",
    price: "1.2 lacs",
    camera: "80 mp",
    ram: "16 gb",
    battery: "5000 mah"
}

const { name, price,  n2 } = smartphone1

console.log(name,n2);
console.log( price, camera)