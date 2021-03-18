import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Login, Home, Register,ForgetPage,Spaces} from './pages'
import Navigation from './components/Navigation/navigation.component'

function App() {
  return (
   <div>
     <Navigation/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/sign-up" component={Register}/>
          <Route path="/forgot-password" component={ForgetPage}/>
          <Route path="/spaces" component={Spaces}/>
       </Switch>
   </div>
  );
}

export default App;
