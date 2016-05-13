import React from 'react';
import { Component } from 'react';
import Product from './product.js'
import ProductForm from './product-form.js'

export default class ProductBox extends React.Component{
  constructor(){
    super()
    this.state = {
      products : [
        {name: "Broccoli", description: "Green, good for the heart", id:1},
        {name: "Carrots", description: "Orange, good for the eyes", id:2}
      ]
  }
}

_additionalProduct(name, description){
  var product = {
    name: name,
    description: description,
    id: this.state.products.length + 1
  }
  this.setState({
    products: this.state.products.concat([product])
  })
}
_deleteProduct(productID){
  const products = this.state.products.filter(product => product.id !== productID)
  this.setState({ products})
}

 _getProducts(){
   return this.state.products.map( (product,i) => {
     return <Product {...product} key={product.id}
     onDelete={this._deleteProduct.bind(this)} onEdit={this._editProduct.bind(this)} />
   })
  }

_editProduct(name, description, id){
  var product = {
    name: name,
    description: description,
    id: id
  }
  var products = this.state.products.slice()
  products.splice(id-1,1,product)
  this.setState({
    products
  })
}

  render(){
    var products = this._getProducts()
    return(
      <div>
      <h1>Product List</h1>
        {products}
        <h2>Add New Product</h2>
        <ProductForm addProduct={this._additionalProduct.bind(this)} />
      </div>
    )
  }


}

// class ProductList extends React.Component{
//   render(){
//     var products = this.props.products.map( product =>{
//         return <ProductItem name={product.name} price={product.price} />
//      })
//
//     return(
//         <div> {products} ---- </div>
//     )
//   }
// };
