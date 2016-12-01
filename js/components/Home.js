import React from 'react'

var menu=[
      {
        name:'customers',
        label:'客户',
        items:[
          {url:"/application/customer/list.html",label:'客户'},
          {url:"/application/targetgroup/index.html",label:'目标组'},
          {url:"/application/customer/setting/fields.html",label:'客户设置'},
          {url:'/application/setting/memberSettingByV.html',label:'会员设置'},
          {url:'/application/source/sources.html',label:'来源管理'}
        ]
      },
      {
        name:'channels',
        label:'内容',
        items:[
          {url:'/application/wechat/channelSetting.html',label:'公众号设置'},
          {url:'/application/setting/app.dev.html',label:'开放与集成'}
        ]
      }
    ]

class Home extends React.Component{
  clickMenu=function(menu,e){
          if(this.state.curMenu===menu){
            this.setState({curMenu:''});
          }else{
            this.setState({curMenu:menu});
          }
          
  }
  render(){
    var url=location.pathname;
    return (
      <div>Home
        <a href="http://127.0.0.1:5000/auth/weibo">登入</a>
        <p></p>
        <div className="sidemenu" ref="sideMenu">
                <ul>
                {
                  menu.map(function(x){
                    return <li className="menu-l1">
                    <a title={x.label} className={this.state.curMenu===x.name?'active':null} onClick={this.clickMenu.bind(this,x.name)} role="button" href="#">
                      <i className={"icon-"+x.name} />
                    </a>
                   {this.state.curMenu===x.name?
                    <ul className="menuitems">
                    {
                      x.items.map(function(item){
                        return  <li className={url===item.url?"active":''}>
                                  <a aria-expanded="false" href={item.url}>
                                    <i className="fa fa-user" />
                                    {item.label}</a>
                                </li>
                      })
                    }
                    </ul>:null
                  }
                  </li>
                  }.bind(this))
                }
                </ul>
              </div>
      </div>)
  }
}

  export default Home