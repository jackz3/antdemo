import React from 'react';
import {Breadcrumb,Icon,Row,Col,Button,Table,Tooltip,Form, Input,Select,DatePicker,Radio} from 'antd';
import { Link } from 'react-router'
const createForm = Form.create
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group

function noop() {
  return false;
}

class AForm extends React.Component{
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    })
  }
  checkBirthday(rule, values, callback) {
    if (!values || values.length!==2 || !values[1] instanceof Date) {
      callback(new Error('不可能吧!'));
    } else {
      callback();
    }
  }
  render(){
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, min: 5, message: '用户名至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true },
        ],
        trigger: 'onBlur',
      }, {
        rules: [
          { type: 'email', message: '请输入正确的邮箱地址' },
        ],
        trigger: ['onBlur', 'onChange'],
      }],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass },
      ],
    });
    const rePasswdProps = getFieldProps('rePasswd', {
      rules: [{
        required: true,
        whitespace: true,
        message: '请再次输入密码',
      }, {
        validator: this.checkPass2,
      }],
    })
    const selectProps = getFieldProps('select', {
      rules: [
        { required: true, message: '请选择ID类型' },
      ],
    })
    const birthdayProps = getFieldProps('birthday', {
      rules: [
        {
          required: true,
          type: 'array',
          message: '请选择有效期范围？',
        }, {
          validator: this.checkBirthday,
        },
      ],
    });
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 }
    }
    return (
      <Form horizontal>
        <FormItem {...formItemLayout} label="名称" hasFeedback
          help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')}>
          <Input {...nameProps} placeholder="实时校验，输入 JasonWood 看看" />
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          <Input type="textarea" placeholder="备注" id="textarea" name="textarea" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ID类型"
          hasFeedback>
          <Select {...selectProps} placeholder="请选择ID类型" style={{ width: '100%' }}>
            <Select.Option value="china">Cookie</Select.Option>
            <Select.Option value="use">Device ID</Select.Option>
            <Select.Option value="japan">Open ID</Select.Option>
            <Select.Option value="korean">Union ID</Select.Option>
            <Select.Option value="Thailand">Weibo ID</Select.Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="有效期" hasFeedback>
          <RangePicker {...birthdayProps} />
        </FormItem>
        <FormItem {...formItemLayout} label="规则" hasFeedback>
          <Rules />
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 4 }}>
          <Button type="primary" onClick={this.handleSubmit.bind(this)} style={{marginRight:'24px'}}>确定</Button>
          <Button type="ghost" onClick={this.handleReset.bind(this)}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

class Rules extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:1
    }
  }
  onChange(e){
    this.setState({
      value: e.target.value,
    })
  }
  render(){
    return(
      <div>
        <div className="flex-center">
        <span style={{marginRight:'1em'}}>满足以下</span>
        <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value} >
          <Radio value={1}>任意</Radio>
          <Radio value={2}>所有</Radio>
        </RadioGroup>
        <span>条件</span>
        </div>
      </div>
    )
  }
}

export default class AudienceForm extends React.Component {
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
    
    let BasicDemo = createForm()(AForm);
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/audiences">
            <Icon type="user" />人群管理
          </Breadcrumb.Item>
          <Breadcrumb.Item><Icon type="edit" />新增人群</Breadcrumb.Item>
        </Breadcrumb>
        <div className="box" style={{paddingTop:'24px'}}>
          <BasicDemo />
        </div>
      </div>
    );
  }
}
