import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

import { login } from '../../redux/slices/auth-slice'
import RequiredField from '../common/FormControls/RequireField'

import style from './style.module.css'

const Login = ({ isAuth }) => {
   const dispatch = useDispatch()

   const handleSubmit = (email, password) => {
      dispatch(login(email, password))
   }

   if (isAuth) {
      return <Navigate to='/profile' />
   }

   return (
      <Formik
         initialValues = {{ login: '', password: '' }}
         validationSchema = {Yup.object({
            login: Yup.string().required('Login is required'),
            password: Yup.string().required('Enter password')
         })}
         onSubmit = {(values, { setSubmitting }) => {
            handleSubmit(values.login, values.password)
            setSubmitting(false)
         }} 
      >
         <Form className={style.form}>
            <RequiredField
               name='login'
               type='text'
               placeholder='Login'
            />
            <RequiredField
               name='password'
               type='password'
               placeholder='Password'
            />
            <button type='submit' className={style.button}>Login</button>
         </Form>
      </Formik>
   )
}

export default Login
