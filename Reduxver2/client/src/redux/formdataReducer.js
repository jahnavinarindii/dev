import { GET_FORMDATA, SET_FORMDATA } from './actionTypes.js'

const initialState = {
	formData:null,
	loading:false
}

const formdataReducer = (state = initialState, action) => {
	console.log('hi')
	switch(action.type){
		case SET_FORMDATA:
			console.log('set format hit')
		return {
			...state,
			data: 1000,
			
		}
		case GET_FORMDATA: return {
			loading:true
		}
		default: return state
	}
}

export default formdataReducer;