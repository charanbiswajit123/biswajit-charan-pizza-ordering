import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small: 0,
      medium: 0,
      large: 0,
      adult:0,
      children:0,
      adultamount:0,
      childrenamount:0,
      decrementamount:0
    }
  }

  increment_small = () => {
    this.setState({
        small: 1
    })
  }

  increment_medium = () => {
    this.setState({
        medium: 1
    })
  }

  increment_large = () => {
    this.setState({
        large: 1
      })
  }

  increment_adult = () => {
    if (this.state.small == 1) {
      return this.state.adult;
    }
    if (this.state.medium == 1) {
      this.setState({
        adult: 1,
        adultamount: 200
      })
    }
    if (this.state.large == 1) {
      if(this.state.adult <= 2) {
        this.setState(
          prevState => ({
            adult: Number(prevState.adult) + 1,
            adultamount: 300
          })
        )
      }
      else {
        return this.state.children;
      }
    }
  }

  increment_children = () => {
    if (this.state.small == 1) {
      this.setState({
          children: 1,
          childrenamount: 150
        })
    }
    if (this.state.medium == 1) {
      if (this.state.children <= 2) {
        this.setState(
          prevState => ({
            children: Number(prevState.children) + 1,
            childrenamount: 200
          })
        )
      } else {
        return this.state.children;
      }
    }
    if (this.state.large == 1) {
      if(this.state.adult == 1 && this.state.children <= 2) {
        this.setState(
          prevState => ({
            children: Number(prevState.children) + 1,
            childrenamount: 300
          })
        )
      } 
      else if (this.state.children <= 4) {
        this.setState(
          prevState => ({
            children: Number(prevState.children) + 1,
            childrenamount: 300
          })
        )
      }
      else {
        return this.state.children;
      }
    }
  }

  decrement_small = () => {
    if (this.state.small < 1) {
      this.setState({
        decrementamount: 150
      })
      return this.state.small;
    } else {
      this.setState(
        prevState => ({
          small: Number(prevState.small) - 1
        })
      )
    }
  }

  decrement_medium = () => {
    if (this.state.medium < 1) {
      this.setState({
        decrementamount: 200
      })
      return this.state.medium;
    } else {
      this.setState(
        prevState => ({
          medium: Number(prevState.medium) - 1
        })
      )
    }
  }

  decrement_large = () => {
    if (this.state.large < 1) {
      this.setState({
        decrementamount: 300
      })
      return this.state.large;
    } else {
      this.setState(
        prevState => ({
          large: Number(prevState.large) - 1
        })
      )
    }
  }

  decrement_adult = () => {
    if (this.state.adult < 1) {
      return this.state.adult;
    } else {
      this.setState(
        prevState => ({
          adult: Number(prevState.adult) - 1
        })
      )
    }
  }

  decrement_children = () => {
    if (this.state.children < 1) {
      return this.state.children;
    } else {
      this.setState(
        prevState => ({
          children: Number(prevState.children) - 1
        })
      )
    }
  }

  render() {
    return (
      <div class="container">
        <h2 className="heading">Order <strong>Pizza</strong></h2>
        <div className="main-container">
          <div class="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <label><div className="small-pizza"></div></label>
              <label><h4 className="content">Small</h4></label>
              <label className="small"><button className="remove-button" onClick={this.decrement_small}></button></label>
              <label><span className="pizza-count">{this.state.small}</span></label>
              <label><button className="add-button" onClick={this.increment_small}></button></label>
            </div>
          </div>
          <div class="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <label><div className="medium-pizza"></div></label>
              <label><h4 className="content">Medium</h4></label>
              <label><button className="remove-button" onClick={this.decrement_medium}></button></label>
              <label><span className="pizza-count">{this.state.medium}</span></label>
              <label><button className="add-button" onClick={this.increment_medium}></button></label>
            </div>
          </div>
          <div class="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <label><div className="large-pizza"></div></label>
              <label><h4 className="content">Large</h4></label>
              <label className="large"><button className="remove-button" onClick={this.decrement_large}></button></label>
              <label><span className="pizza-count">{this.state.large}</span></label>
              <label><button className="add-button" onClick={this.increment_large}></button></label>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div className="col-md-6">
              <label><div className="adults"></div></label>
              <label><h4 className="content person-content">Adults</h4></label>
            </div>
            <div className="col-md-6">
              <label className="person-button"><button className="remove-button" onClick={this.decrement_adult}></button></label>
              <label><span className="pizza-count">{this.state.adult}</span></label>
              <label><button className="add-button" onClick={this.increment_adult}></button></label>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div className="col-md-6">
              <label><div className="children"></div></label>
              <label><h4 className="content person-content">Children</h4></label>
            </div>
            <div className="col-md-6">
              <label className="person-button"><button className="remove-button" onClick={this.decrement_children}></button></label>
              <label><span className="pizza-count">{this.state.children}</span></label>
              <label><button className="add-button" onClick={this.increment_children}></button></label>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">
            <h2 className="heading">Order <strong>Total</strong></h2>
          </div>
          <div className="col-md-6">
    <h3 className="order-price">{this.state.childrenamount + this.state.adultamount - this.state.decrementamount}</h3>
          </div>
      </div>
      </div>
    )
  }
}

export default App;
