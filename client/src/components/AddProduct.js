import React, { Component } from 'react';
import axios from 'axios';

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             price: ''
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handlesubmit = (event) =>{
        event.preventDefault();
        const newProduct = {
            name: this.state.name,
            price: this.state.price
        }
        axios.post('http://localhost:3001/products', newProduct);
        this.setState({
            name: '',
            price: ''
        })
    }
    
    render() {
        return (
            <div className='container'>
                <div className="form-group">
                <label>Product Name:</label>
                <input type="name" className="form-control" value={this.state.name} onChange={this.handleName} />
                </div>
                <div className="form-group">
                <label>Price:</label>
                <input type="number" className="form-control" value={this.state.price} onChange={this.handlePrice} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handlesubmit}>Add Product</button>
            </div>
        )
    }
}

