import React from 'react';
import { Breadcrumb,Icon,Button,Card,Row,Col } from 'antd';

export default class dataSource extends React.Component {
  
  render() {
    return (
		  <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item><Icon type="link" />数据接入</Breadcrumb.Item>
        </Breadcrumb>
          <Row>
            <Col span="8">
              <Card title="TrackMaster" extra={<a href="#">设置</a>}>
                <div className="flex-center">
                  <img src="http://v.admaster.co/uploads/2015/11/12/1447298657.jpg" />
                  <p>全流程广告效果评估平台</p>
                </div>
              </Card>
            </Col>
      <Col span="8">
        <Card title="SiteMaster" extra={<a href="#">授权</a>}>
          <div className="flex-center">
            <img src="http://v.admaster.co/uploads/2015/11/12/1447298724.jpg" />
            <p>实时高效的企业级网站分析产品</p>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card title="AudienceX" extra={<a href="#">授权</a>}>
          <div className="flex-center">
            <img src="http://www.admaster.com.cn/public/images/menuxia_18.png" />
            <p>全网民数据中心</p>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card title="金数据" extra={<a href="#">授权</a>}>
          <div className="flex-center">
            <img src="http://v.admaster.co/uploads/2015/11/17/1447740840.png" />
            <p>表单管理中心</p>
          </div>
        </Card>
      </Col>
    </Row>

      </div>
			
    );
  }
}
