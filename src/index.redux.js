const ADD_GUN = '加机关枪'
const SUBTRACT = '减机关枪'

// reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case SUBTRACT:
      return state - 1
    default:
      return 10
  }
}

export function addGun(){
  return {type:ADD_GUN}
}
export function subtract(){
  return {type:SUBTRACT}
}
export function addGunAsync(){
  return dispatch=>{
    setTimeout(()=>{
      dispatch(addGun())
    },2000)
  }
}