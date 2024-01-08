import Info from 'pages/Info';
import Login from 'pages/Login';
import {useAuth} from 'providers/AuthProvider';
import CounterProvider from 'providers/CounterProvider';
import 'App.css';

export default function App() {
  const {user} = useAuth();

  return (
    <div className="App">
      <CounterProvider>
        <h1>My App</h1>
        {!user && <Login />}
        {!!user && <Info />}
      </CounterProvider>
    </div>
  );
}
