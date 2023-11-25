import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import Cpn from './component/cpn';
import FieldType from './component/cpn'
import CityDropdown from './component/city';
import DynamicForm from './component/dynamicForm';


const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const createType = {
  fieldType:FieldType,
  carType:String
}



const App: React.FC = () => (
  <><Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Cpn></Cpn>

    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
      <Button type="primary" block htmlType="submit">
              Save
      </Button>
    </Form.Item>

      {/* <CityDropdown></CityDropdown> */}

  </Form></>

);

export default App;