import React, { useEffect, useState } from 'react'

import style from './style.module.css'

const Pagginator = ({
   totalItemsCount,
   pageSize,
   currentPage,
   onSetPage,
   isLoading,
   portionSize = 10
}) => {
   const pagesCount = Math.ceil(totalItemsCount / pageSize)
   const [ portionNumber, setPortionNumber ] = useState(1)

   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   const rightPortionPageNumber = portionNumber * portionSize

   const pageItems = []
   for (let i = 1; i <= pagesCount; i++) {
      pageItems.push(i)
   }

   const onPreviousPortionClick = () => {
      if (portionNumber > 1) {
         setPortionNumber(portionNumber - 1)
      }
   }

   const onNextPortionClick = () => {
      setPortionNumber(portionNumber + 1)
   }

   const onPageClick = (p) => {
      if (!isLoading) {
         onSetPage(p)
      }
   }

   useEffect(() => {
      onSetPage(leftPortionPageNumber)
   }, [portionNumber])

   let pageElements = pageItems.map(p => {
      if (p >= leftPortionPageNumber && p <= rightPortionPageNumber) {
         return (
            <span className={p === currentPage ? `${style.page} ${style.active}` : `${style.page}`}
                  onClick={() => {onPageClick(p)}}
                  key={p}>
               {p}
            </span>
         )
      }
   })

   return (
      <div className={style.pages}>
         <button disabled={isLoading} onClick={onPreviousPortionClick} className={style.arrowButton}>{'<'}</button>
            {pageElements}
         <button disabled={isLoading} onClick={onNextPortionClick} className={style.arrowButton}>{'>'}</button>
      </div>
   )
}

export default Pagginator
