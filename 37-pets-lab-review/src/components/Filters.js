import React from 'react'

class Filters extends React.Component {
  render() {
    const { updateFilter, fetchPets } = this.props
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={updateFilter} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={fetchPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters