import { ErrorMessage, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

import { login } from '../../redux/slices/auth-slice'
import RequiredField from '../common/FormControls/RequireField'

import style from './style.module.css'

const Login = ({ isAuth }) => {
   const dispatch = useDispatch()

   const handleSubmit = async (email, password) => {
      return dispatch(login(email, password))
   }

   if (isAuth) {
      return <Navigate to='/profile' />
   }

   return (
      <Formik
         initialValues = {{ email: '', password: '', server: '' }}
         validationSchema = {Yup.object({
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Enter password'),
         })}
         onSubmit = {async (values, { setSubmitting, setFieldError }) => {
            const data = await handleSubmit(values.email, values.password)
            
            if (data.resultCode !== 0 && data.messages) {
               setFieldError('server', data.messages[0])
            }

            setSubmitting(false)
         }} 
      >
         <Form className={style.form}>
            <RequiredField
               name='email'
               type='text'
               placeholder='Email'
            />
            <RequiredField
               name='password'
               type='password'
               placeholder='Password'
            />
            <button type='submit' className={style.button}>Login</button>
            <div className={style.serverError}>
               <ErrorMessage name='server' />   
            </div>
         </Form>
      </Formik>
   )
}

export default Login
