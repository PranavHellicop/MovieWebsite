
import { useEffect,useState } from 'react'
import { Home } from './components/home'
import { Movies } from './components/Movies'
import { AppProvider } from './context/AppContext'
import { json } from 'react-router-dom'
export const Api_url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`

function App() {


  const [movie,setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError,setIsError] = useState({show:false,msg:""})
  const[query,setQuery] = useState("Silence of the lambs")

  const getMovies = async (url)=>{
    try{

      const data = await fetch(url)
      const jsonData = await data.json()
      console.log(jsonData)
      if (jsonData.Response==="True"){
        setIsLoading(false)
        setMovie(jsonData['Search'])
        setIsError({
          show:false
        })
      }else{
        setIsError({
          show:true,
          msg:jsonData.Error
        })
      }
  
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    let timeoutFunc = setTimeout(()=>{

      getMovies(Api_url+`&s=${query}`)
    }, 1000)

    return ()=>clearTimeout(timeoutFunc)
},[query])
  
  return (
    <>

      <AppProvider value={{movie,isLoading,isError,query,setQuery}}>
        <Home></Home>
      </AppProvider>

    </>
  )
}

export default App
