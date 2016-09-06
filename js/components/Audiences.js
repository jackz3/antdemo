import React from 'react';
import {Breadcrumb,Icon,Row,Col,Button,Table} from 'antd';
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
    }]
    const columns=[{
      title: '序号',
      dataIndex: 'id',
    }, {
  title: '规则名称',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'ID类型',
  dataIndex: 'id_type',
  key: 'contents',
},{
  title:'备注',
  dataIndex:'memo',
  key:'created_at'
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#" onClick={this.remove.bind(this,record.id)}>删除</a>
      <span className="seperate-line"></span>
      <a href="#">更新</a>
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
        <div className="box">
          <Table columns={columns}  dataSource={ds} pagination={false}
					  title={() => <Row>
            <Col span={16} className="flex-center" style={{height:'32px'}}>
              <span><strong>人群列表</strong></span>
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
