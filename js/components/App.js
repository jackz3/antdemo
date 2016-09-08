import React from 'react'
import { Icon,Row,Col,Button,Dropdown } from 'antd'
import { Link } from 'react-router'
import MainMenu from './Menu'

class UserMenu extends React.Component{
  render(){
    return (
      <div className="user-profile-card-wrapper">
        <Row style={{margin:'16px auto'}} justify="center">
          <Col span={8}>
            <div className="avatar-wrapper">
              <img src='/img/user1-128x128.jpg'></img>
              <Button>更 改</Button>
            </div>
          </Col>

          <Col span={16} className="info-wrapper">
            <h2 className="title"><span >Jack</span>[<b>管理员</b>]</h2>
            <div className="items">
              <p>jack@bdh.com</p>
            </div>
            <Row>
              <Col span={12}><Button icon="setting">个人设置</Button></Col>
              <Col span={12}><Button icon="exclamation-circle">修改密码</Button></Col>
            </Row>
          </Col>
        </Row>
        <Row className="row footer-bar-wrapper">
          <Col span={8}>
            <Button icon="user">个人信息</Button>
          </Col>
          <div style={{textAlign:'right'}} span={8} offset={8}>
            <Button type="ghost" icon="double-right">退出</Button>
          </div>
        </Row>
      </div>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showMenu:true,
      showUserMenu:false
    }
  }
  onMenuClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggleMenu(e){
    this.setState({showMenu:!this.state.showMenu})
  }
  render(){
    return (
      <div id="app">
        <Row id="header-bar" style={{height:'48px'}} align="middle">
          <Col span={8}>
            <div className="logo-wrapper" style={{height:'48px'}}>
              <Button onClick={this.toggleMenu.bind(this)} icon={this.state.showMenu?"menu-fold":'menu-unfold'} />
              <img src="http://www.admaster.com.cn/public/images/menuxia_14.png" />
              <h1>
                <Link to="/">BD-Hub</Link>
              </h1>
            </div>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Dropdown overlay={<UserMenu />} trigger={['click']}>
              <div className="userinfo">
              <a className="ant-dropdown-link" href="#">
                <img className="avatar" src="/img/user1-128x128.jpg" />
                Jack.Zhu <Icon type="down" />
              </a>
              </div>
            </Dropdown>
          </Col>
        </Row>
        <MainMenu isShow={this.state.showMenu} />
        <div id="content-wrapper" className={this.state.showMenu?'':'full-page'}>
        {this.props.children}
        </div>
      </div>)
  }
}

export default App