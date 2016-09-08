import React from 'react';
import {Breadcrumb,Icon,Row,Col,Button,Table,Tooltip} from 'antd';
import { Link } from 'react-router'

export default class Audiences extends React.Component {
  componentDidMount(){
    
  }
  remove(){

  }
  render() {
    let ds=[{
      id:1,
      title:'我的规则',
      id_type:'DEVICEID',
      memo:'服务费说减肥 i 说；峰色峰'
    },{
      id:1,
      title:'我的规则',
      id_type:'DEVICEID',
      memo:'服务费说色峰'
    },{
      id:1,
      title:'我的规则',
      id_type:'DEVICEID',
      memo:'服务费说减肥峰色峰'
    }]
    const columns=[{
      title: '序号',
      dataIndex: 'id',
    }, {
      title: '规则名称',
      dataIndex: 'title',
    }, {
      title: 'ID类型',
      dataIndex: 'id_type',
    },{
      title:'备注',
      dataIndex:'memo',
    }, {
      title: '',
      key: 'operation',
      render: (text, record) => (
      <span style={{display:'flex'}}>
        <Tooltip placement="left" title="删除记录">
          <Button className="btn-noborder" type="ghost" size="large" icon="cross-circle-o" onClick={this.remove.bind(this,record.id)} />
        </Tooltip>
        <span className="seperate-line"></span>
        <Tooltip placement="right" title="修改">
          <Button className="btn-noborder" type="ghost" size="large" icon="edit" />
        </Tooltip>
      </span>
    ),
    }]
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>我的人群</Breadcrumb.Item>
        </Breadcrumb>
        <div className="box" style={{paddingTop:'0',paddingBottom:'40px'}}>
          <Table columns={columns}  dataSource={ds} pagination={false}
					  title={() => <Row>
            <Col span={16} className="flex-center" style={{height:'32px',fontSize:'14px'}}>
              <span>人群列表</span>
            </Col>
            <Col span={8}>
              <Link to="/audiences/create">
                <Button type="primary" icon="plus" style={{height:'32px',float:'right'}}>新增人群</Button>
              </Link>
            </Col>
          </Row>} />
        </div>
      </div>
    );
  }
}
