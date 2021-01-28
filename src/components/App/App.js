import CreateCard from '../CreateCard/CreateCard';
import CardWrapper from '../CardWrapper/CardWrapper';
import './App.css';

const App = () => {

  return (
    <div className='wrapper'>
      <h1>Currency exchanger</h1>
      <CreateCard />
      <CardWrapper />
    </div>
  );
}

export default App;
