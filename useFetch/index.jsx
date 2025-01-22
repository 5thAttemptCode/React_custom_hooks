import { useState, useEffect } from 'react'


function useFetchData(url) {

  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try{
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)

      } catch(error){
        setError(error)

      } finally{
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {data, loading, error}
}

export default useFetchData


// export default function App() {

//   const { data, loading, error, } = useFetchData(
//     "https://jsonplaceholder.typicode.com/users"
//   )

//   if(loading){
//     return <p>Loading..</p>
//   }

//   if(error){
//     return <p>Error {error.message}</p>
//   }

//   return (
//     <div>
//       {data?.length ? (
//         <p>This is the fetched data: {JSON.stringify(data)}</p>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   )
// }