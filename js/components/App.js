import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {Button,Table,Select,Alert,Row,Col} from 'antd';
import {getUrlParam} from '../comm/utils';
import {setMapping,removeMapping} from '../actions/schema';

const colsCount=getUrlParam('cols')||10;

class Home extends React.Component{
	constructor(props){
		super(props);
  }
	showContent(type){
		
	}
	hideMenu(){
		
	}
	render(){
    let columns=this.props.schema.definitions.map(x=>({title:x.label,dataIndex:x.label}));
		let types={key:1};
		let selection=this.props.schema.definitions.filter(x=>x.mapping);
		this.props.schema.definitions.forEach(x=>{
      types[x.label]=x.type;
    });
		let alert={};
		let btnDisabled=true;
		if(colsCount<columns.length){
			alert.type="error",
			alert.message="csv文件列小于Schema定义的列数，请重新上传文件"
		}else{
			if(selection.length===columns.length){
				alert.type="success";
				alert.message="您已完成csv到schema对应关系的设置，请按执行继续";
				btnDisabled=false;
			}else{
				alert.type='info';
				alert.message=`请设置csv文件列的对应关系。已设置${selection.length}列，还需设置${columns.length-selection.length}列`;
			}
		}

		return (
			<div style={{width:'90%',margin:'30px auto',minWidth:'900px'}}>
				<Table bordered columns={columns}  dataSource={[types]} pagination={false}
					title={() => 'Schema定义'}
				 	size="middle" className="schema-table" />
				<Row>
					<Col span={20}><Alert message={alert.message} showIcon type={alert.type} /></Col>
					<Col span={1}></Col>
		      <Col span={3}>
						<Button style={{height:'32px',float:'right'}} disabled={btnDisabled} type="primary"
							icon={btnDisabled?'cross-circle-o':'check-circle-o'}>执行</Button>
					</Col>
				</Row>
				<Csv dispatch={this.props.dispatch} colsCount={colsCount} selection={selection} definitions={this.props.schema.definitions} />
			</div>
  	)
	}
}

class Csv extends React.Component{
	render(){
		const colCount=this.props.colsCount;
		let scrollX=colCount*120;
		let headers=[],rows=[];
		for(let i=0;i<colCount;i++){
			headers.push({
				title:'col'+(i+1),
				dataIndex:'c'+i,
				render:(value,row,index)=>{
					if(index===0){
						return <CsvSelect dispatch={this.props.dispatch} col={i} definitions={this.props.definitions} />
					}else{
						return value;
					}
				}
			});
		}
		for(let i=0;i<10;i++){
			let row={key:i};
			for(let j=0;j<colCount;j++){
				row['c'+j]='data'+i;
			}
			rows.push(row);
		}
		return (
			<div>
				<Table bordered columns={headers}  dataSource={rows} pagination={false}
					title={() => 'CSV文件'} size="middle" scroll={{ x: scrollX }} />
			</div>
		)
	}
}
class CsvSelect extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hideOptions:true
		}
	}
	componentDidMount(){
		let node=ReactDOM.findDOMNode(this).querySelector('li.ant-select-selection__choice span');
		node.style.display='none';
	}
	onChange(values){
	//	debugger
		if(!values.length){
			return this.props.dispatch(removeMapping(this.props.col.toString()));
		}
		let value=values[values.length-1];
		if(value==='--更多--'){
			this.setState({hideOptions:false});
		}else{
			this.props.dispatch(setMapping(value,this.props.col.toString()));
		}
	}
	render(){
		const Option = Select.Option;
		const maxLength=6;
		let value=this.props.definitions.find(x=>x.mapping==this.props.col);
		let v='请选择';
		if(value){
			v=value.label;
		}
		let options=this.props.definitions.filter(x=>!x.mapping);
		if(options.length>maxLength){
			if(this.state.hideOptions){
				options=options.slice(0,maxLength);
				options.push({label:'--更多--'})
			}
		}
		return (
			<Select multiple style={{ width: '100px',height:'30px' }} value={v} onChange={this.onChange.bind(this)}>
			{
				options.map(x=><Option key={x.label} value={x.label}>{x.label}</Option>)
			}
			</Select>
		)
	}
}

function mapStateToProps(state) {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Home);
