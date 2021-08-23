import { BrowserRouter, Route, Switch } from "react-router-dom"
import AltaPuesto from '../pages/AltaPuesto';
import Colaboradores from '../pages/Colaboradores';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AltaPuesto} path="/alta-puesto" />
        <Route component={Colaboradores} path="/colaboradores" />
      </Switch>
    </BrowserRouter>
  )
}
