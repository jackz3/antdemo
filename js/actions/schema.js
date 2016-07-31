import * as actionTypes from '../comm/actionTypes';

export function setMapping(label,col){
	return {type:actionTypes.SET_MAPPING,label,col}
}

export function removeMapping(col){
	return {type:actionTypes.REMOVE_MAPPING,col}
}
