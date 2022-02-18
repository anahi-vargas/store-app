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

export const sortByID = async (mode) => {
    let response = await fetch(`https://fakestoreapi.com/products?sort=${mode}`) // asc or desc
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


export const states = [
    { name: "Alabama", stateRate: 0.04 },
    { name: "Alaska", stateRate: 0.0 },
    { name: "Arizona", stateRate: 0.056 },
    { name: "Arkansas", stateRate: 0.065 },
    { name: "California", stateRate: 0.0725 },
    { name: "Colorado", stateRate: 0.029 },
    { name: "Connecticut", stateRate: 0.0635 },
    { name: "Delaware", stateRate: 0.0 },
    { name: "District of Columbia", stateRate: 0.06 },
    { name: "Florida", stateRate: 0.06 },
    { name: "Georgia", stateRate: 0.04 },
    { name: "Hawaii", stateRate: 0.04 },
    { name: "Idaho", stateRate: 0.06 },
    { name: "Illinois", stateRate: 0.0625 },
    { name: "Indiana", stateRate: 0.07 },
    { name: "Iowa", stateRate: 0.06 },
    { name: "Kansas", stateRate: 0.065 },
    { name: "Kentucky", stateRate: 0.06 },
    { name: "Louisiana", stateRate: 0.0445 },
    { name: "Maine", stateRate: 0.055 },
    { name: "Maryland", stateRate: 0.06 },
    { name: "Massachusetts", stateRate: 0.0625 },
    { name: "Michigan", stateRate: 0.06 },
    { name: "Minnesota", stateRate: 0.06875 },
    { name: "Mississippi", stateRate: 0.07 },
    { name: "Missouri", stateRate: 0.04225 },
    { name: "Montana", stateRate: 0.0 },
    { name: "Nebraska", stateRate: 0.055 },
    { name: "Nevada", stateRate: 0.0685 },
    { name: "New Hampshire", stateRate: 0.0 },
    { name: "New Jersey", stateRate: 0.06625 },
    { name: "New Mexico", stateRate: 0.05125 },
    { name: "New York", stateRate: 0.04 },
    { name: "North Carolina", stateRate: 0.0475 },
    { name: "North Dakota", stateRate: 0.05 },
    { name: "Ohio", stateRate: 0.0575 },
    { name: "Oklahoma", stateRate: 0.045 },
    { name: "Oregon", stateRate: 0.0 },
    { name: "Pennsylvania", stateRate: 0.06 },
    { name: "Rhode Island", stateRate: 0.07 },
    { name: "South Carolina", stateRate: 0.06 },
    { name: "South Dakota", stateRate: 0.045 },
    { name: "Tennessee", stateRate: 0.07 },
    { name: "Texas", stateRate: 0.0625 },
    { name: "Utah", stateRate: 0.0485 },
    { name: "Vermont", stateRate: 0.06 },
    { name: "Virginia", stateRate: 0.043 },
    { name: "Washington", stateRate: 0.065 },
    { name: "West Virginia", stateRate: 0.06 },
    { name: "Wisconsin", stateRate: 0.05 },
    { name: "Wyoming", stateRate: 0.04 }
]