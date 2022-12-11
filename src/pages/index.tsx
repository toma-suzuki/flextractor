import scss from '../styles/home.module.scss';
import Auth from '../components/auth'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import React, { createContext, Dispatch, useContext, useReducer, useState } from 'react'

export type GlobalState = {
  loading: boolean
}

export const GlobalContext = createContext({} as {
  state: {
    loading: boolean
  }
  setState: Dispatch<React.SetStateAction<GlobalState>>
});

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [state, setState] = useState({
    loading: false
  })

  return (
    <>
      <GlobalContext.Provider value={{state, setState}}>
        <div className={scss.container}>
          {!session ? <Auth /> : <p>Account page will go here.</p>}
        </div>
      </GlobalContext.Provider>
    </>
  )
}

export default Home
