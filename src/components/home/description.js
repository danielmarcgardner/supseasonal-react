import React , { Component } from 'react';

class InfoText extends Component {
  render(){
    return (
      <div className="description">
        <p>
          Welcome to Sup Seasonal, the produce app that let's you know what is in season! To see what ingredients are
          available in a given month use the 'Search By Month' drop down above. To search by an ingredient to see when it is in season
          use the 'Search By Ingredient' drop down above. If you search by month you can additionally search for recipes with the
          monthly ingredients on that page.
        </p>
      </div>
    )
  }
}

export default InfoText
