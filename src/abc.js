import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      price: [],
      stock: [],
      rating: []
    };
  }

  async componentDidMount() {
    //Fetch and convert data to JSON
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();

    const price = [];
    const product = [];
    const stock = [];
    const rating = [];

    //Parsing the JSON data to arrays
    json.map(item => {
      price.push(item.price);
      product.push(item.title);
      stock.push(item.rating.count);
      rating.push(item.rating.rate)
      return null;
    });

    this.setState({
      labels: product,
      price: price,
      stock: stock,
      rating: rating,
    });
  }

  render() {
    const barData = {
      labels: this.state.labels,
      datasets: [
        {
          backgroundColor: "rgba(55,59,132,0.4)",
          width: 10,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.price,
          label: "price"
        },
        {
            backgroundColor: "rgba(255,79,32,0.4)",
            width: 10,
            hoverBackgroundColor: "rgba(255,29,132,0.4)",
            hoverBorderColor: "rgba(255,29,132,1)",
            data: this.state.stock,
            label: "stock"
          }
      ]
      
    };

    const ratingData = {
      labels: this.state.labels,
      datasets: [
        {
          backgroundColor: "rgba(85,69,132,0.4)",
          width: 10,
          hoverBackgroundColor: "rgba(150,79,82,0.4)",
          data: this.state.rating,
          label: "rating"
        }
      ]
      
    };

    const options = {

      maintainAspectRatio: true,
      legend: {
        display: true
      }
    };

    return (
      <div>
        <h2>Minh BS20DSY033 - Visual Analytics Assignment 2</h2>
        <h1>Price and In Stock</h1>
        <Bar data={barData} width={5} height={3} options={options} />
        <h1>Rating</h1>
        <Bar data={ratingData} width={5} height={3} options={options} />
      </div>
    );
  }
}