import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ArticlesListPages from './pages/ArticlesListPages';
import ArticlePage from './pages/ArticalPage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {

render() {
  return (
  	<Router>
    <div className="App">
     <NavBar />
     <div id="page-body">
     <Switch>
     	<Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage} />
      <Route path="/article-list" component={ArticlesListPages} />
      <Route path="/article/:name" component={ArticlePage} />
	  <Route component={NotFoundPage} />
     
     </Switch>
	  </div>
    </div>
    </Router>
  );
 }
}
export default App;
