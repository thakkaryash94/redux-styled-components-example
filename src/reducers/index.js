import produce from 'immer'

const initialState = {
  themeStyle: 'LIGHT',
  color: 'green'
}

const theme = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'CHANGE_THEME':
        draft.themeStyle = action.themeStyle
        if (action.themeStyle === 'LIGHT') {
          draft.color = 'green'
        } else {
          draft.color = 'white'
        }
        break
    }
  })


export default theme
