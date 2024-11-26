import './App.css';
import FetchApi from './components/fetchapi/FetchApi';
import FetchAsyncMeth from './components/fetch_async_meth/FetchAsyncMeth';
import FetchingAxiosMethod from './components/fetching_axios_method/FetchingAxiosMethod';

function App() {

  return (
    <>
      <FetchApi />
      <FetchAsyncMeth />
      <FetchingAxiosMethod />
    </>
  )
}

export default App