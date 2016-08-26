import * as actionTypes from '../comm/actionTypes'
import {api} from '../comm/service'

export function fetchList(){
	return dispatch=>{
		api('/posts')
			.then(res=>res.json())
			.then(json=>dispatch({type:actionTypes.FETCH_POSTS,list:json}))
	}
}

export function createPost(post){
	return dispatch=>{
		api('/posts',{
  		method: 'POST',
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
  		},
  		body: JSON.stringify(post)
		}).then(res=>{
			if(res.ok){
				dispatch(fetchList())
			}
		})
	}
}

export function removePost(id){
	return dispatch=>{
		api('/posts/'+id,{
			method:'DELETE',
			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
  		}
		}).then(res=>{
			if(res.ok){
				dispatch(fetchList())
			}
		})
	}
}