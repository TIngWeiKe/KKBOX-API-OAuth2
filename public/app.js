import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import HeaderRoutre from './component/headerRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Box from './component/box/box'
import Today from './container/today/today'
import Playlist_category from './container/playlist_category/playlist_category'
import Recent from './container/recents/recents'
import Setting from './container/setting/setting'
import Playlist from './container/playlist/playlist'
import reducer from './reducer';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
  //處裡Async middleware
  applyMiddleware(thunk),
  //chrome redux extenion
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) : compose(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

        <div>
          <HeaderRoutre />
        
            <Switch>
              <Route path='/today' component={Today} />
              <Route path='/playlist' component={Playlist} />
              <Route path='/playlist_category' component={Playlist_category} />
              <Route path='/recents' component={Recent} />
              <Route path='/setting' component={Setting} />
              <Route paht='/category' component={Box}></Route>
              {/* <Redirect exact paht='/' to='/today'></Redirect> */}
            </Switch>
        
         
        </div>

    </BrowserRouter>
  </Provider>

  
  ,
  document.getElementById('app')
);
