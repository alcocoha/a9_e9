import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import AltaPuesto from '../pages/AltaPuesto'
import Colaboradores from '../pages/Colaboradores'
import './styles.css'

export default function AppRouter() {
  return (
    <div>
      <h1>Aplicación</h1>
      <BrowserRouter>
      <nav>
        <Link to="/alta-puestos" className="link-btn">Alta puestos</Link>
        <Link to="/colaboradores" className="link-btn">Colaboradores</Link>
      </nav>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/alta-puestos" />
          </Route>
          <Route component={AltaPuesto} path="/alta-puestos" exact/>
          <Route component={Colaboradores} path="/colaboradores" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
