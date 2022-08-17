import axios from 'axios';
import  {useState, useEffect} from 'react'
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
// import useFetch from './components/useFetch'; //for fetching one single item.
// npm install react-bootstrap bootstrap
// in index.js add import "bootstrap/dist/css/bootstrap.min.css";
// npm install axios --save

function App() {
  // const {
  //   data: joke,
  //   loading: jokeLoad,
  //   error,
  // } = useFetch("https://v2.jokeapi.dev/joke/Any");

  // if (jokeLoad) return <h1>Loading...</h1>;

  // if (error) console.log(error);
  // for Get user------------------------------------------>
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

   const getData = async () => {
    try{
     const res = await axios.get("https://randomuser.me/api?results=1")
     setData(res.data.results)
     setLoading(true)
    } catch(err) {
      console.error(err.message)
    }
   }
   
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
     <Header/>
      <div className="container">
        <ul>
          {loading &&
            data.map((contact, i) => (
              <li key={contact?.login?.uuid ?? `contact-${i}`}>
                <Contact contact={contact} />
              </li>
            ))}
        </ul>
      </div>
      <div className="container">
        <button className="user-btn" onClick={getData}>
          Get User
        </button>
      </div>
      {/* <h3>{joke?.setup} : {joke?.delivery}</h3>  */}
    </>
  );
}

export default App;
