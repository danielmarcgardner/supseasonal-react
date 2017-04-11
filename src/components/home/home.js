import React, { Component } from 'react';
import MonthDropdown from './month_dropdown';
import IngredientsDropdown from './ingredients_dropdown';
import NavBar from '../navbar';
import './home.css'
import { Grid } from 'semantic-ui-react';
import InfoText from './description';
import Footer from '../footer'

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
          <img className="image" src='http://www.freepptbackground.com/wp-content/uploads/2015/04/fresh-fruits-and-vegetables-ppt-background.jpg' />
          <InfoText />
        </Grid.Row>
        <Grid.Row columns={1}>
          <Footer />
        </Grid.Row>
      </Grid>
   </div>
  )
  }
}

export default IndexPage
