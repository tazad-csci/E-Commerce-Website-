import './app.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import APICalls from './functions/APICalls';
import reducers from './redux/reducers';
import { addToCart, setPartsList } from './redux/actions';
import PartsList from './container/PartsList';
import FilterList from './container/FilterList';


const store = createStore(reducers);

var unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

APICalls.parts.list((data) => {
  store.dispatch(setPartsList(data));
  store.dispatch(addToCart(data[0], 1))
  store.dispatch(addToCart(data[2], 3))
  store.dispatch(addToCart(data[3], 5))
});

function App() {
  return (
    <Provider store={store}>
      <div className="container-main">
        <div className="left-side">
        <FilterList>
        </FilterList>
        
      </div>
      <div className="right-side">
        <PartsList>
        </PartsList>
      </div>
      </div>
      

    </Provider>
  );
}

export default App;
