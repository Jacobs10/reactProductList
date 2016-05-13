import React from 'react';
import ProductConfirmation from './product-confirmation'
import ProductForm from './product-form'


export default class Product extends React.Component{
  constructor(){
    super()
    this.state={
      showProduct:true,
      isInapropriate: false,
      showEditForm: false
    }
  }

  toggle(e){
    e.preventDefault()
    this.setState({
      showProduct: !this.state.showProduct
    })
  }

  _toggleEdit(e){
    e.preventDefault()
    this.setState({
        showEditForm: !this.state.showEditForm
     })

  }
  render(){
    var productDesc;
    // this.state.isInapropriate ? productDesc = this.props.body : productDesc = <em>Content marked as inapropriate</em>
    if (!this.state.isInapropriate) {
      productDesc = this.props.description;
    } else {
      productDesc = <em>Content marked as inapropriate</em>;
    }
    var removeOrShow = "Remove"
    if (!this.state.showProduct) {
      var authorized = "(Not authorized to remove)"
      removeOrShow = "Show"
    }

    let editContent = "Edit Content"
    let editForm = ''
    if (this.state.showEditForm){
      editContent = 'End Edit'
      editForm = <ProductForm addProduct={this._handleEdit.bind(this)}/>
    }


    return (
      <div>{this.props.id}.. {this.props.name} || {productDesc}
      <a href="#" onClick={this.toggle.bind(this)}> {removeOrShow} </a> ---
      <a href="#" onClick={this._toggleEdit.bind(this)}> {editContent} </a>
      <div><b>{authorized}</b></div>
      <div>{editForm}</div>
        <ProductConfirmation onConfirm={this._handleDelete.bind(this)} >
          Delete Product
        </ProductConfirmation>
        <ProductConfirmation onConfirm={this._toggleInappropriate.bind(this)} >
            Mark as Inapropriate
        </ProductConfirmation>

       </div>
    )
  }

  _toggleInappropriate() {
    this.setState({
      isInapropriate: !this.state.isInapropriate
    });
  }
  _handleDelete() {
    this.props.onDelete(this.props.id);
  }
  _handleEdit(name,desc){
    this.props.onEdit(name,desc, this.props.id)
  }

};
