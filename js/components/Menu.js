import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu

class MainMenu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      current:'mail'
    }
  }
  onMenuClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return (
      <div id="mainmenu" className={this.props.isShow?'':'fold'}>
        <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline">
          <Menu.Item key="mail">
            <Link to="/data_sources"><Icon type="link" />数据接入</Link>
          </Menu.Item>
        </Menu>
        <div className="line" />
        <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline" defaultOpenKeys={['audiences']}>
          <SubMenu key="audiences" title={<span><Icon type="team" />人群管理</span>}>
            <Menu.Item key="setting:1"><Link to="/audiences"><Icon type="user" />我的人群</Link></Menu.Item>
            <Menu.Item key="setting:2"><Icon type="tags-o" />属性管理</Menu.Item>
            <Menu.Item key="setting:3"><Icon type="filter" />规则管理</Menu.Item>
          </SubMenu>
        </Menu>
        <div className="line" />
        <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline">
          <Menu.Item key="mail1">
            <Link to="/login"><Icon type="user" />消费者360</Link>
          </Menu.Item>
        </Menu>
        <div className="line" />
        <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline">
          <Menu.Item key="mail2">
            <Link to="/posts"><Icon type="appstore" />应用市场</Link>
          </Menu.Item>
        </Menu>
        <div className="line" />
        <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline">
          <Menu.Item key="table">
            <Link to="/table"><Icon type="bars" />table</Link>
          </Menu.Item>
          <Menu.Item key="app" disabled>
          <Icon type="appstore" />导航二
          </Menu.Item>
          <Menu.Item key="alipay">
          <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default MainMenu