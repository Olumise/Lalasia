const express = require('express')
const productRouter = express()
const products = require('../utils/products')

productRouter.get('/products', (req, res)=>{
try{
  const searchValue = req.query.search
  const category = req.query.category
  const priceRange = req.query.price
  const featured = req.query.featured
  const inStock = req.query.in_stock
  const numberOfProducts = req.query.list
  const currentProduct = req.query.current_product

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
  if(numberOfProducts){
    
    filtered = currentProduct ? filtered.filter((item)=>item.slug !== currentProduct).slice(0,numberOfProducts)
     : filtered.slice(0,numberOfProducts)
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

productRouter.get('/product/:product', (req,res)=>{
  try{
    const slug = req.params.product
    const selectedProduct = products.find((item)=>item.slug === slug)
    res.send(selectedProduct)

  }catch(err){
    res.status(400).send(err.message)
  }
})
module.exports = {productRouter}