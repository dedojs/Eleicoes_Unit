import { Route, Switch } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import './index.css'
import Header from './components/Header'
import Home from './pages/Home';
import Urna from './pages/Urna';
import Success from './pages/Success';
import Result from './pages/Result';
import MenuPage from './pages/MenuPage';
import CadastrarChapa from './pages/CadastrarChapa';

function App() {

  return (
    <div className="App">
      <MyProvider>
        <Header />
        <Switch>
          <Route exact path={'/'} component={ Home }/>
          <Route exact path={'/menu'} component={ MenuPage }/>
          <Route exact path={'/cadastro'} component={ CadastrarChapa }/>
          <Route exact path={'/urna'} component={ Urna }/>
          <Route exact path={'/success'} component={ Success }/>
          <Route exact path={'/result'} component={ Result }/>
        </Switch>
      </MyProvider>
    </div>
  )
}

export default App
