import './App.css';
import Mark from './Components/markAssignment';
import Upload from './Components/uploadAssignment';
import Delete from './Components/deleteAssignment';
import Submit from './Components/submitAssignment';
import Home from  "./Components/home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
           <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/upload'>
              <Upload />
            </Route>
            <Route path='/submit'>
              <Submit />
            </Route>
            <Route path='/mark'>
              <Mark />
            </Route>
            <Route path='/delete'>
              <Delete />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;