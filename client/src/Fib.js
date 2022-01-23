import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    arr: [],
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current')
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all')
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/values', { index: this.state.index, });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    this.state.arr = [];
    this.state.seenIndexes.map((rank, i, row) => {
      if (i + 11 > row.length) {
        this.state.arr.push(rank)
      }
    })
    return this.state.arr.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];
    for (const key in this.state.arr) {
      entries.push(
        <div key={this.state.arr[key].number}>
          For index {this.state.arr[key].number} I calculated {this.state.values[this.state.arr[key].number]}
        </div>
      );
    }
    return entries;
  }

  reloadPage() {
    window.location.reload(false);
  }


  render() {
    this.renderSeenIndexes()
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input value={this.state.index} onChange={(event) => this.setState({ index: event.target.value })} />
          <label>{this.state.value}</label>
          <button onClick={this.reloadPage} >Submit</button>
        </form>

        <h3>Last 10 calculated Values:</h3>
        {this.renderValues()}
      </div >
    );
  }
}

export default Fib;
