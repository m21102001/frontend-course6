console.log('method get to fetch data');
fetch('https://fakestoreapi.com/products', {
    method: 'GET'
})
    .then(x => x.json())
    .then(x => {
        // document.getElementById("demo").innerHTML = x
        console.log('method get to fetch data', x)
        console.log(x[0].category);
    })


console.log('method post to add new product');


fetch('https://fakestoreapi.com/products',
    {
        method: 'POST',
        body: JSON.stringify({
            title: 'new product',
            price: 12,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronics'
        })
    }
)
    .then(response => response.json())
    .then(json => console.log(json))

console.log('method PUT to UPDATED product');


fetch('https://fakestoreapi.com/products/7',
    {
        method: 'PUT',
        body: JSON.stringify({
            title: 'new product',
            price: 12,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronics'
        })
    }
)
    .then(response => response.json())
    .then(json => console.log(json))


fetch('https://fakestoreapi.com/products/6', {
    method: 'DELETE'
})
    .then(response => response)
    .then(json => console.log(json))



// axios.post('url')
//     .then(t => tx)

// axios.post('url', {
//     title: 'new product',

// })




fetch('https://fakestoreapi.com/products')
    .then(response => response)
    .then(json => console.log('this is return from api', json))


fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})
    .then(response => response.json())
    .then(json => console.log('this is add', json))



fetch('https://fakestoreapi.com/products/7', {
    method: 'PUT',
    body: JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})
    .then(response => response.json())
    .then(json => console.log('this is add', json))


fetch('https://fakestoreapi.com/products/7', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(json => console.log('this is add', json))
