import scss from '../styles/auth.module.scss'
import { useContext, useState } from 'react'
import { supabase } from '../utils/supabase'
import { GlobalContext } from '../pages'
import { FieldValues, useForm } from 'react-hook-form'
import LoginInput from './inputs/loginInput'

export const Auth = () => {
  type LoginData = {
    email: string
    password: string
  }

  const { state, setState } = useContext(GlobalContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)

    const loginData: LoginData = {
      email: data.email,
      password: data.password
    }

    handleLogin(loginData)
  }

  const handleLogin = async (loginData: LoginData) => {
    try {
      setState({ loading: true })

      const { error } = await supabase.auth.signInWithPassword(loginData)

      if (error) throw error
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setState({ loading: false })
    }
  }

  return (
    <div className={scss.page_wrapper}>
      <h1>flextractor</h1>
      <div className={scss.form_outer}>
        <div className={scss.form_inner}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LoginInput
              register={register}
              name={'email'}
              label={'email'}
            />

            <LoginInput
              register={register}
              name={'password'}
              label={'password'}
            />
            <button type={'submit'}>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
