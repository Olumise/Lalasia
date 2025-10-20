const express = require('express')
const productRouter = express()
const products = [
  {
    "id": 1,
    "name": "White Aesthetic Chair",
    "description": "Combination of wood and wool",
    "price": 99.98,
    "category": "Furniture",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
    "variations": {
      "color": ["Black", "Dark Green", "Natural Wood", "White"],
      "size": ["Standard"]
    },
    "created_at": "2025-09-15T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Wooden Aesthetic Chair",
    "description": "Combination of wood and wool",
    "price": 58.39,
    "category": "Furniture",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80",
    "variations": {
      "color": ["Natural Wood", "White", "Black"],
      "size": ["Standard"]
    },
    "created_at": "2025-08-22T14:15:00Z"
  },
  {
    "id": 3,
    "name": "Plant With Clay Stand",
    "description": "Combination of wood and wool",
    "price": 61.49,
    "category": "Decoration",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?w=1200&q=80",
    "variations": {
      "color": ["Gray", "Terracotta", "White"],
      "size": ["Small", "Medium"]
    },
    "created_at": "2025-09-01T09:45:00Z"
  },
  {
    "id": 4,
    "name": "Oval Gold Mirror",
    "description": "Combination of wood and wool",
    "price": 32.43,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80",
    "variations": {
      "color": ["Gold", "Silver", "Bronze"],
      "size": ["Medium", "Large"]
    },
    "created_at": "2025-07-18T16:20:00Z"
  },
  {
    "id": 5,
    "name": "Modern Desk Lamp",
    "description": "Minimalist white desk lamp with adjustable arm",
    "price": 45.99,
    "category": "Lighting",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    "variations": {
      "color": ["White", "Black", "Gray"]
    },
    "created_at": "2025-08-10T11:30:00Z"
  },
  {
    "id": 6,
    "name": "Ceramic Planter Set",
    "description": "Set of 3 white ceramic planters with drainage",
    "price": 28.75,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?w=1200&q=80",
    "variations": {
      "color": ["White", "Gray", "Mint Green"],
      "size": ["Small", "Medium", "Large"]
    },
    "created_at": "2025-09-05T08:00:00Z"
  },
  {
    "id": 7,
    "name": "Scandinavian Bookshelf",
    "description": "Wooden bookshelf with 5 tiers",
    "price": 189.50,
    "category": "Furniture",
    "featured": true,
    "in_stock": false,
    "image_url": "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=80",
    "variations": {
      "color": ["Oak", "Walnut", "White"],
      "size": ["Small", "Large"]
    },
    "created_at": "2025-06-30T13:45:00Z"
  },
  {
    "id": 8,
    "name": "Round Wall Clock",
    "description": "Rose gold frame with minimalist design",
    "price": 24.99,
    "category": "Decoration",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.pexels.com/photos/19801745/pexels-photo-19801745.jpeg?w=1200&q=80",
    "variations": {
      "color": ["Rose Gold", "Silver", "Black"]
    },
    "created_at": "2025-08-28T15:10:00Z"
  },
  {
    "id": 9,
    "name": "Woven Storage Basket",
    "description": "Natural fiber basket with handles",
    "price": 19.99,
    "category": "Storage",
    "featured": false,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?w=1200&q=80",
    "variations": {
      "color": ["Natural", "White", "Gray"],
      "size": ["Small", "Medium", "Large"]
    },
    "created_at": "2025-09-12T10:00:00Z"
  },
  {
    "id": 10,
    "name": "Velvet Throw Pillow",
    "description": "Soft velvet cushion with zipper closure",
    "price": 16.50,
    "category": "Textiles",
    "featured": true,
    "in_stock": true,
    "image_url": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80",
    "variations": {
      "color": ["Emerald Green", "Navy Blue", "Blush Pink", "Mustard Yellow"],
      "size": ["16x16", "18x18", "20x20"]
    },
    "created_at": "2025-09-20T12:30:00Z"
  }
]

productRouter.get('/products', (req, res)=>{
try{
  const searchValue = req.query.search
  const category = req.query.category
  const priceRange = req.query.price
  const featured = req.query.featured
  const inStock = req.query.in_stock

  let filtered = products

  if(searchValue){
    filtered = filtered.filter((product)=>{
      return product.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    })
  }
  
  if(category){
    filtered = filtered.filter((product)=>{
     return  product.category.toLowerCase() === category.toLowerCase()
    })
  }

  if(featured){
    filtered =filtered.filter((product)=>{
     return product.featured === true
    })
  }

  if(inStock){
    filtered = filtered.filter((product)=>{
     return product.in_stock === true
    })

  }

  if(priceRange){
    const [min, max] = priceRange.split('-').map((value)=>parseFloat(value))
    filtered = filtered.filter((product)=>{
      return product.price >= min && product.price <= max

    })
  }

    res.send(filtered)
  
}catch(err){
res.status(400).send(err.message)
console.log(err.message)
}
})

productRouter.get('/categories',(req,res)=>{
  try{
      const categories = products.map((item)=> {
        return item.category
      } )
      const uniqueSet = new Set(categories)
      const updatedCategories = [...uniqueSet]

      const priceRange = [
        {
          text:"Less than $20",
          value:'0-19'
        },
        {
          text:"$20 - $60",
          value:'20-60'
        },
        {
          text:"$60 - $200",
          value:'60-200'
        },
      ]

      const filters = {
        category:{
          
          list: updatedCategories,
          length: updatedCategories.length,
        },
        price:{
          
          list: priceRange,
          length: priceRange.length,
        },
      }
      res.send(filters) 
  }catch(err){
    res.status(400).send(err.message)
  }
})

module.exports = {productRouter}