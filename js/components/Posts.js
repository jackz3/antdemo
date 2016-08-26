import React from 'react'
//import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {Button,Table,Select,Alert,Row,Col,Form, Input} from 'antd'
const FormItem = Form.Item;
import * as postActions from '../actions/posts'


function removePost(id){

}
class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      titleValidateStatus:""
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    let post=this.props.form.getFieldsValue()
    if(post.title.length<3){
      return this.setState({titleValidateStatus:'error'})
    }
    post.user_id=1
    this.props.dispatch(postActions.createPost(post))
  }
  render(){
    const { getFieldProps } = this.props.form
    return (
      <Form inline onSubmit={this.handleSubmit.bind(this)}>
          <FormItem label="标题" validateStatus={this.state.titleValidateStatus}>
            <Input placeholder="" {...getFieldProps('title')} />
          </FormItem>
          <FormItem label="内容">
            <Input placeholder="" {...getFieldProps('contents')} />
          </FormItem>
          <Button type="primary" htmlType="submit">添加</Button>
      </Form>
    )
  }
}
let PF = Form.create()(PostForm);

class Posts extends React.Component{
  componentDidMount(){
    this.props.dispatch(postActions.fetchList())
  }
  removePost(id){
    this.props.dispatch(postActions.removePost(id))
  }
  render(){
    let ds=this.props.posts.list
    const columns=[{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '标题',
  dataIndex: 'title',
  key: 'title',
}, {
  title: '内容',
  dataIndex: 'contents',
  key: 'contents',
},{
  title:'日期',
  dataIndex:'created_at',
  key:'created_at'
},{
  title:'作者',
  dataIndex:'user_id',
  key:'user_id'
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#" onClick={this.removePost.bind(this,record.id)}>删除</a>
      <span className="ant-divider"></span>
      <a href="#">更新</a>
      <span className="ant-divider"></span>
    </span>
  ),
    }]
    return(
      <div>
        <PF dispatch={this.props.dispatch} />
        <Table columns={columns}  dataSource={ds} pagination={false}
					title={() => 'Posts'}
				 	size="middle" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts:state.posts
  }
}
export default connect(mapStateToProps)(Posts)