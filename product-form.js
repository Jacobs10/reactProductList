import React from 'react';

export default class ProductForm extends React.Component {
  constructor(){
    super()
    this.state = {
      characters:0
    }

  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.addProduct(this._name.value, this._body.value)

    this._name.value = ""
    this._body.value = ""
    this.setState({
      characters:0
    })
  }

  _getCount(){
    this.setState({
      characters : this._body.value.length
    })
  }

  render(){
    return (
      <form onSubmit={this._handleSubmit.bind(this)} >
        <input type="text" ref={ input => this._name = input} />
        <textarea ref={ text => this._body = text } onChange={this._getCount.bind(this)}></textarea>
        <button type="submit"> Submit </button>
        <p> Characters: {this.state.characters} </p>
      </form>
    )
  }

}
