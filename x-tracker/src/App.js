
import {SnackbarProvider} from 'notistack'
import Home from './pages/Home/Home';

function App() {
  return (
    <SnackbarProvider>
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
