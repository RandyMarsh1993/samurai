import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { login } from '../../redux/slices/auth-slice'
import RequiredField from '../common/FormControls/RequireField'

import style from './style.module.css'

const Login = () => {
   const dispatch = useDispatch()

   const handleSubmit = (values) => {
      
   }

   return (
      <Formik
         initialValues = {{ login: '', password: '' }}
         validationSchema = {Yup.object({
            login: Yup.string().required('Login is required'),
            password: Yup.string().required('Enter password')
         })}
         onSubmit = {(values, { setSubmitting }) => {
            console.log(values)
            dispatch(login(values.login, values.password))
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
