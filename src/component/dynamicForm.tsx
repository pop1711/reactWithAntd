import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const NumberInputForm: React.FC = () => {
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState<number[]>([1]); // Initially, one input field

  const handleAddInput = () => {
    setInputs([...inputs, inputs.length + 1]);
  };

  return (
    <Form form={form} layout="vertical">
      {inputs.map((index) => (
        <Row key={index} gutter={16}>
          <Col span={8}>
            <Form.Item
                label={` `}
                name={`column1-${index}`}
                rules={[{ required: true, message: 'Please input a number' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
                label={` `}
                name={`column2-${index}`}
                rules={[{ required: true, message: 'Please input a number' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
                label={` `}
                name={`column3-${index}`}
                rules={[{ required: true, message: 'Please input a number' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
      ))}

      <Form.Item>
        <Button type="dashed" onClick={handleAddInput} block icon={<PlusOutlined />}>
          Add Input Field
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NumberInputForm;
