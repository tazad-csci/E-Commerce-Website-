import './app.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import APICalls from './functions/APICalls';
import reducers from './redux/reducers';
import { addToCart, setPartsList, setShipping } from './redux/actions';
import PartsList from './container/PartsList';
import FilterList from './container/FilterList';
import Gallery from './container/Gallery';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OrderPage from "./components/Warehouse/OrderPage"
import AdminPage from './components/Admin/AdminPage';

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

APICalls.admin.getRules((data)=>{
  store.dispatch(setShipping(data));
})

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
              <Provider store={store}>
                <div className="container-main">
                  <div className="left-side">
                    <FilterList>
                    </FilterList>
                    <Gallery>
                    </Gallery>
                  </div>
                  <div className="right-side">
                    <PartsList>
                    </PartsList>
                  </div>
                </div>
              </Provider>
            </Route>
          <Route exact path="/s" component={OrderPage}/>
          <Route exact path="/a" component={AdminPage}/>
          <Route exact path="/r" component={""}/>
        </Switch>
      </Router>
  );
}

export default App;
