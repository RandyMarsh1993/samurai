import React from 'react'
import { useField } from 'formik'

import style from './style.module.css'

const RequiredField = ({ ...props }) => {
   const [field, meta] = useField(props)

   return (
      <div className={style.field}>
         <input {...field} {...props} className={style.input} />
         {meta.touched && meta.error ? (
            <div className={style.errorMessage}>{meta.error}</div>
         ) : null}
      </div>
   )
}

export default RequiredField
