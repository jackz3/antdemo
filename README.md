# antdemo
an ant design demo

### Getting Started

1. git clone , cd antdemo
2. `npm install`
3. `npm start`
5. access http://localhost:3000

### Features
1. url参数cols控制csv文件列数，如：http://localhost:3000/?cols=14 显示14列，默认显示10列
2. csv列数小于schema列数，显示错误提示，执行按钮失效
3. 在csv列表选择映射关系。选中一列，csv表和schema列头变绿色。选中计算列，变橙色。提示信息显示已选列数和未选列数。
4. 下拉选择列表，默认显示前6项，点击更多，显示全部。已经被选中的，从选项中除去。
5. 完成全部选择。提示完成。执行按钮可点击。如csv超过10列，未选中全显示灰色。