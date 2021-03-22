const INITIAL_STATE ={
    token:""
}

const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_TOKEN":
            return{
                ...state,
                token:action.payload
            }
        default:
            return state
    }
}
export default reducer