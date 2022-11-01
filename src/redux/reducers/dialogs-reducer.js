const initialState = {
   dialogs: [
      { id: 1, name: 'Saske' },
      { id: 2, name: 'Sakura' },
      { id: 3, name: 'Kakashi' },
      { id: 4, name: 'Rock Li' }
   ],
   messages: [
      { id: 1, text: 'Hello samurai' },
      { id: 2, text: 'Dattebaeye' }
   ]
}

const DialogsReducer = (state = initialState, action) => {
   switch (action.type) {


      default: return state
   }
}

export default DialogsReducer
