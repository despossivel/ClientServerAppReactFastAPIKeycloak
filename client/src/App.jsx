import { useEffect, useState, useCallback } from 'react'
import {
  useKeycloak
} from '@react-keycloak/web'
import axios from 'axios'
import './App.css'
 
function App() {
  const {
    keycloak,
    initialized
  } = useKeycloak()

  const [session, setSession] = useState(null)

  const [dataAPI, setDataAPI] = useState(null)

  useEffect(() => {
    (async () => {
      try {

        if (initialized && !keycloak.authenticated) return keycloak.login({
          redirectUri: 'http://192.168.0.108:5173/'
        })

        if (!initialized && !keycloak?.token) return;
 
        setSession({
          token: keycloak?.token,
          tokenParsed: keycloak?.tokenParsed,
          updateToken: keycloak?.updateToken,
          ...keycloak.userInfo
        })

      } catch (e) {
        console.error(e)
      }
    })()
  }, [initialized, keycloak, keycloak?.token])

  useEffect(() => {
    console.table(session)
  }, [session])


  const getSafeData = useCallback(async () => {
    const data = await axios.get(`http://192.168.0.108:8000/safe`)
    console.log(data)
    setDataAPI(data)
  }, [session])


  return (
    <>
      <button onClick={() => keycloak.logout()}>LOGOUT</button>
      <button onClick={getSafeData}>SAFE?</button>
      <img src="https://cs9.pikabu.ru/post_img/big/2017/06/01/9/1496328787110664424.jpg" />
      <b>{JSON.stringify(dataAPI)}</b>

    </>
  )
}

export default App
