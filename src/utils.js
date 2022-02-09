//You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results

export const getAllProducts = async () => {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    return data
}

export const getSingleProduct = async (id) => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await response.json();
    return data
}

export const limitResults = async () => {
    let response = await fetch('https://fakestoreapi.com/products?limit=5')
    let data = await response.json();
    return data
}

export const sortResults = async () => {
    let response = await fetch('https://fakestoreapi.com/products?sort=desc') // asc or desc
    let data = await response.json();
    return data
}

export const getAllCategories = async () => {
    let response = await fetch('https://fakestoreapi.com/products/categories')
    let data = await response.json();
    return data
}

export const getProductsInCategory = async (category) => {
    let response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    let data = await response.json();
    return data
}

export const getAllCarts = async () => {
    let response = await fetch('https://fakestoreapi.com/carts')
    let data = await response.json();
    return data
}