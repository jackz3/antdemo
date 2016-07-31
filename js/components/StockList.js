import React from 'react';
import {Page,List,ListItem,ListHeader,Toolbar, Button} from 'react-onsenui';

export default class StockList extends React.Component {
  
  render() {
		debugger
    return (
		  <Page renderToolbar={()=>
				<Toolbar>
      		<div className='center'>{this.props.title}</div>
    		</Toolbar>
  			}>
      	<List renderRow={menu=> <ListItem key={menu} tappable>{menu}</ListItem>}
          dataSource={['自选股','涨幅榜','跌幅榜','关于']}
				/>
      </Page>
			
    );
  }
}
