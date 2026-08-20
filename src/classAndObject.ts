type Product = {
    name: string;
    price: number;
    quantity: number;
}

class DepartmentalStore {
    title: string
    inStock: Product[]
    soldItem: Product[] = [];


    constructor(title: string, inStock: Product[]) {
        this.title = title;
        this.inStock = inStock;
    }


    sold(name: string, price: number, quantity: number) {
        const itemInStock = this.inStock.find(item => item.name === name && item.quantity > 0)
        if(itemInStock){
            this.soldItem.push({name, price, quantity});
            this.inStock.forEach(item => {
                if(item.name === name){
                    item.quantity -= quantity;
                }
            })
            return this.haveItem(name);
        }

        return `${name} not found!`

        
    }


    totalSoldItem() {
        const totalSoldItem = this.soldItem.reduce((acc, current) => {return acc + current['price'] * current['quantity']}, 0)
        return `Total: ${totalSoldItem} TK`;
    }


    haveItem(itemName: string){
        const item = this.inStock.find(item => item.name === itemName && item.quantity);
        return (item)? `${item.quantity} ${itemName} left`: `${itemName} not in store`
    }

    itemPrice(){
       const itemprice = this.inStock.map(item => [item.name, item.price])
       return itemprice;
    }
}




let iiucStore = new DepartmentalStore("IIUC Departmantal Store", [{name: 'chips', price: 10, quantity: 100}, {name: 'notebook', price: 50, quantity: 100}]);
console.log(iiucStore.title)
console.log(iiucStore.sold('notebook', 35, 2))
console.log(iiucStore.itemPrice())
console.log(iiucStore.totalSoldItem())
console.log(iiucStore.haveItem('hello'))




type Role = 'admin' | 'viewer';

