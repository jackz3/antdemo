import * as actionTypes from '../comm/actionTypes';

export default function posts(state={
	list:[]
},action){
	let list
	switch(action.type){
		case actionTypes.FETCH_POSTS:
			list=action.list
			return {...state,list}
		default:
			return state;
	}
}