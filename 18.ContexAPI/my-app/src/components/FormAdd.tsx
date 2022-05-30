import { Button, Form, Input } from 'antd'
import React, { useContext } from 'react'
import { dataContextType, TableContext } from '../Context/ContextProvider';

const FormAdd = () => {
    const {data, saveData} = useContext(TableContext) as dataContextType;
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const key = data.length + 1;
        const result = {...values, key}
        saveData(result)
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="age"
        name="age"
        rules={[{ required: true, message: 'Please input your age!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="address"
        name="address"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormAdd