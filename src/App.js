import './App.css';
import {Route, Switch} from 'react-router-dom'
import {LoginPage, Home} from './pages'

function App() {
  return (
   <div>
       <Switch>
          <Route exact path="/" component={Home}/>
       </Switch>
   </div>
  );
}

export default App;
