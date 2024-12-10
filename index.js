
const products = ['tuxum', 'non', 'strawberry', 'sut', 'banan', 'tuxum', 'non', 'strawberry', 'sut', 'banan','tuxum', 'non', 'strawberry', 'sut', 'banan','tuxum', 'non', 'strawberry', 'sut', 'banan','tuxum', 'non', 'strawberry', 'sut', 'banan','apple']
let startTime = new Date()

const kerakliMaxsulotlar=(maxsulot)=>{
    for(let i =0 ; i<products.length; i++){
        if(products[i]=== maxsulot){
            console.log(`Found PRODUCT ${maxsulot}`)

        }
    }
}
let endTime = new Date()

kerakliMaxsulotlar('apple')
console.log(`${endTime-startTime}`)
//  Big O = O(n)
// const start = new Date()
// console.log(start.getMinutes())
// for(let i =0; i<1000000000; i++){
//     let some= i**3
// }
// const end = new Date()
// console.log(end)
// const float = (end-start)/1000
// console.log(`Loop ishladi ${parseFloat(float)} millisekund`)