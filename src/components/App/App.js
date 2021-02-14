import { connect } from 'react-redux';
import CreateCard from '../CreateCard/CreateCard';
import CardWrapper from '../CardWrapper/CardWrapper';
import SheetsWrapper from '../SheetsWrapper/SheetsWrapper';

import './App.css';

const App = ({ pages }) => {

  return (
    <div className='wrapper'>
      <h1>Currency exchanger</h1>
      <CreateCard />
      <SheetsWrapper />
      {pages.length !== 0 ? <CardWrapper /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

export default connect(mapStateToProps)(App);
