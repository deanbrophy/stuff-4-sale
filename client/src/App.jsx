import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import { ItemCard } from './ItemCard';

const paperWrapper = <Paper zDepth={1} />;


const rootStyle = {
  maxWidth: '1000px',
  margin: '30px auto',
};

const iconStyle = {
  display: 'none',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
  }

  componentWillMount() {

  }

  render() {
    const items = this.state.items.map(value => (
      <GridTile cols={4} containerElement={paperWrapper} >
        <ItemCard {...value} />
      </GridTile>));

    const loader = this.state.isLoading ? (
      <GridTile cols={12} >
        <CircularProgress style={{ margin: '200px auto', display: 'block' }} />
      </GridTile>) : null;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="For Sale" iconStyleLeft={iconStyle} />
          <div style={rootStyle} >
            {loader}
            <GridList cellHeight="auto" cols={12} padding={30} style={{ textAlign: 'center' }} >
              {items}
            </GridList>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {

};

export default App;
