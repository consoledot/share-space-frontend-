import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Login, Home} from './pages'
import Navigation from './components/Navigation/navigation.component'

function App() {
  return (
   <div>
     <Navigation/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
       </Switch>
   </div>
  );
}

export default App;
