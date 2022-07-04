 import './App.css';
import ICECREAAMEMMEM from './Icecreaaaem/IceCreame'
import Cake from './Cack_container/Cake_container';
import {Provider} from 'react-redux';
import STORE from './redux/Store'
function App() {
  return (
    <Provider store={STORE}>

<div className="App">
    <Cake/>
    </div>
    </Provider>
    
  );
}

export default App;
