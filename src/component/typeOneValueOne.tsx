import React, { FC, useState } from 'react'
import Cpn from './cpn';
import { FieldType } from './component';
import { Button, Form, Input } from 'antd';

// let ccMultiple = 0.5;

// const typeCarOne_valueOne = (e:any) => {
//     this;ccMultiple = ccMultiple
// }

// const fieldType:FieldType = {
//     ccMultiple: 0.5
// }


const TypeCarOneValueOne : React.FC = () => {

    // const [inputValue, setInputValue] = useState(fieldType.ccMultiple); // Value to display

    // const setValue = () => {
    //     // setFields([...fields, { field1: '', field2: '', field3: '' }]);
    //     setInputValue([
            
    //     ])
    // }

    interface MyFormProps {
        // Define your form fields here
      }


    const [form] = Form.useForm();

    const initialValues = {
  // Set default values for form fields
  username: 'defaultUsername',
  email: 'default@example.com',
  // Add other form fields and their default values here
};

const onFinish = (values: any) => {
  console.log('Form values:', values);
};

    return (
        <>




<Form
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            {/* <div> */}
      {/* Uncontrolled component */}
      {/* <input
        type="text"
        defaultValue={inputValue}
        disabled
      /> */}

      {/* Controlled component */}
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled
      /> */}
    {/* </div> */}
        </>
    );
}
export default TypeCarOneValueOne;