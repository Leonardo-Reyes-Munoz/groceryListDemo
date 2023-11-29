import './App.css';
import GroceryList from './GroceryList';

function App() {
  return (
    <>
      <h2>Grocery List</h2>
      <div className="card">
        <p>Put list here</p>
        <GroceryList />
      </div>
    </>
  );
}

export default App;
