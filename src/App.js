import './App.css';
import { useEffect } from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import { Switch } from 'react-router'
import './styles/main.scss'
import Home from './pages/Home';
import Signin from './pages/Signin'
import PriavteRoute from './components/PriavteRoute'
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import { useDispatch } from 'react-redux'
import { authActions } from '../src/store/reducers/auth'
import { auth, database } from '../src/misc/firebase'
import { userLoggedIn } from './store/actions/auth';
import { UIActions } from './store/reducers/UI';
import { getRoomList } from './store/actions/rooms';
import { roomsActions } from './store/reducers/rooms';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      dispatch(userLoggedIn())
    } catch { }
  }, [])

  useEffect(() => {
    try {
      dispatch(roomsActions.ResetRooms())
      dispatch(getRoomList())
    } catch { }
  }, [])

  return (

    <Switch>
      <PriavteRoute path="/"  >
        <Home />
      </PriavteRoute>
      <PublicRoute path="/signin" exact={true}>
        <Signin />
      </PublicRoute>

    </Switch>

  );
}

export default App;
