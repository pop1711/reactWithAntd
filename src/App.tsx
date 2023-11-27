import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Col, Flex, Form, Input, Row } from 'antd';
import Cpn from './component/cpn';
import { FieldType } from './component/component';
import TypeCarOneValueOne from './component/typeOneValueOne';


const App: React.FC = () => {
  
  
    
  // const onFormChange = (values:FieldType) => {
  //   setFormSave({
  //     ...formSave, 
  //     registerNo:values.registerNo,
  //     name:values.name
  //   })
  //   console.log(formSave)
  // }
const [formPp] = Form.useForm<FieldType>();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', formSave);
    console.log('send to api .....');
};

const [formSave, setFormSave] = useState<FieldType>();
  const onValuesChange = (changedValues: Partial<FieldType>, values: FieldType) => {
    setFormSave(prevState => {
        return {
            ...prevState,
            registerNo: values.registerNo+"#",
            name: values.name
        }
    })
    console.log(formSave)
}

  return (
  
    <><Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // form={formPp}
      onValuesChange={onValuesChange}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Cpn></Cpn>

      <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
        <Button type="primary" block htmlType="submit">
                Save
        </Button>
      </Form.Item>

        {/* <CityDropdown></CityDropdown> */}

    </Form>

    {/* <TypeCarOneValueOne></TypeCarOneValueOne> */}
    </>
  )
};

export default App;