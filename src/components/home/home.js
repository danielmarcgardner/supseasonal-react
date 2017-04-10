import React, { Component } from 'react';
import MonthDropdown from './month_dropdown';
import IngredientsDropdown from './ingredients_dropdown';
import NavBar from '../navbar';
import './home.css'
import { Grid } from 'semantic-ui-react';
import InfoText from './description'

class IndexPage extends Component {
  render(){
    return (
    <div>
       <NavBar />
      <h1 className='header'>Sup Seasonal</h1>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <MonthDropdown />
          </Grid.Column>
          <Grid.Column>
            <IngredientsDropdown />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <InfoText />
        </Grid.Row>
      </Grid>
   </div>
  )
  }
}

export default IndexPage
