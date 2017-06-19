import React from 'react';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      newRecipe: {}
    }
  }

  handleSubmit(e) {
    if (this.refs.menu.value === "" && this.refs.ingredients.value === "") {
      alert("Menu title and Ingredients can't be Empty!");
    } else {
      this.setState({newRecipe: {
        menu: this.refs.menu.value,
        ingredients: this.refs.ingredients.value
      }}, function() {
        this.props.addRecipe(this.state.newRecipe);
      });
    }
    e.preventDefault();
  }

  render() {
    return(
      <div className="card">
        <h3 className="card-title">Add Recipe</h3>
        <div className="card-block">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="form-control-label">Menu Title</label>
            <input className="form-control" ref="menu" type="text" />
          </div>
          <div className="form-group">
            <label className="form-control-label">Ingredients</label>
            <textarea className="form-control" ref="ingredients"></textarea>
          </div>
          <di>
            <input type="submit" className="btn btn-outline-secondary btn-sm" value="Submit" />
          </di>
        </form>
        </div>
      </div>
    );
  }
}

export default AddRecipe;