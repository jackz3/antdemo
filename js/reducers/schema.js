import * as actionTypes from '../comm/actionTypes';

let definitions=[
  {label:'姓名',type:'string'},
  {label:'性别',type:'boolean',selected:false},
	{label:'生日',type:'date',selected:false},
	{label:'体重',type:'number',selected:false},
	{label:'住址',type:'string',selected:false},
	{label:'工作',type:'string',selected:false},
	{label:'薪水',type:'number',selected:false,sum:true},
	{label:'城市',type:'string',selected:false},
	{label:'等级',type:'number',selected:false},
	{label:'是否会员',type:'boolean',selected:false}
];
// const csv=[
// 	['col1','col2','col3','col4','col5','col6','col7','col8','col9','col10']
// ]

export default function schema(state={
	definitions
},action){
	let definitions
	switch(action.type){
		case actionTypes.SET_MAPPING:
			definitions=state.definitions.slice();
			definitions.filter(x=>x.mapping===action.col)
				.forEach(x=>x.mapping=null);
			let def=definitions.find(x=>x.label===action.label);
			if(def){
				def.mapping=action.col;
			}
			return {definitions};
		case actionTypes.REMOVE_MAPPING:
			definitions=state.definitions.slice();
			definitions.filter(x=>x.mapping===action.col)
				.forEach(x=>x.mapping=null);
			return {definitions};
		default:
			return state;
	}
}