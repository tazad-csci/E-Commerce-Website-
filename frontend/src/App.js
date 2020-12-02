import './app.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import APICalls from './functions/APICalls';
import reducers from './redux/reducers';
import { setPartsList } from './redux/actions';
import PartsList from './container/PartsList';
import FilterList from './container/FilterList';


const store = createStore(reducers);

var unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

APICalls.parts.list((data) => {
  store.dispatch(setPartsList(data));
});

function App() {
  return (
    <Provider store={store}>
      <div className="left-side">
        <FilterList>
        </FilterList>
        
      </div>
      <div className="right-side">
        <PartsList>
        </PartsList>
      </div>

    </Provider>
  );
}

export default App;
