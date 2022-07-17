import Router from './router/Router';

function App() {

  console.log("REACT app BASE URL : "+ process.env.REACT_APP_BASEURL + "/nREACT SECRETKEY : "+ process.env.REACT_APP_SECRETKEY)

  return (
    <Router />
  )
}

export default App;
