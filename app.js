const div = document.querySelector('div')
const data = axios('https://fakestoreapi.com/products');
data.then(res => res.data).then(res => {
    const filtered = res.filter(item => {
        // console.log(item.category === 'electronics');
        return item.category === 'electronics'
    })
    filtered.map(item => {
        console.log(item);
    })
})