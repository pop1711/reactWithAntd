import { Col, Form, Input, Row, Select, Checkbox, Button} from "antd";
import axios from "axios";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";

type FieldType = {
    registerNo?:string;
    name?:string;
    surName?:string;
    registerDate?:string;
    bodyNumber?:string;
    phoneNumber?:string;
    city?:string;
    idCard?:string;
    carType?:string;
    cc?:number;
    weigth?:number;
    legalEntity?:boolean;
    ngv?:boolean;
    hybrid?:boolean;
    carTax?:boolean;
    rate?:number;
    fiveYearsCar?:boolean;
    amount?:number;
    month?:number;
    percentLate?:number;
    totalPercentLate?:number;
  };
  // ภาษีล่าช้า
  interface InputForm {
    id: number;
    value: string;
  }

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

const Cpn : React.FC = () => {
  // ภาษีล่าช้า
  const [inputForms, setInputForms] = useState<InputForm[]>([{ id: 1, value: '' }]);

  const addInputForm = () => {
    const newInputForms = [
      ...inputForms,
      {
        id: inputForms.length + 1,
        value: '',
      },
    ];
    setInputForms(newInputForms);
  };

  const handleInputChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForms = inputForms.map(form =>
      form.id === id ? { ...form, value: event.target.value } : form
    );
    setInputForms(updatedForms);
  };

    return(
        <> 
            <Row>
      <Col span={12}>
      <Form.Item<FieldType>
      label="เลขทะเบียนรถ"
      name="registerNo"
      rules={[{ required: true, message: 'Please input your register number!' }]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={12}>
      {/* <Form.Item<FieldType>
      label="จังหวัด"
      name="city"
      rules={[{ required: true, message: 'Please input your city!' }]}
    >
      <Input />
    </Form.Item> */}
    <Form.Item
      name="city"
      label="จังหวัด"
      hasFeedback
      rules={[{ required: true, message: 'Please select your province!' }]}
    >
      <Select placeholder="กรุณาเลือกจังหวัด">
        <option value="bangkok">กรุงเทพ</option>
        <option value="chiangmai">เชียงใหม่</option>
      </Select>
    </Form.Item>
      </Col>
    </Row>
    
    <Row>
      <Col span={8}>
        <Form.Item<FieldType>
          label="ชื่อ"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
      >
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item<FieldType>
         label="สกุล"
          name="surName"
          rules={[{ required: true, message: 'Please input your surname!' }]}
    >
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item<FieldType>
         label="เบอร์โทร"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
    >
          <Input />
        </Form.Item>
      </Col>
    </Row>
    
    <Row>
      <Col span={8}>
        <Form.Item<FieldType>
              label="วันที่จดทะเบียน"
              name="registerDate"
              rules={[{ required: true, message: 'Please input your regiter date!' }]}
            >
              <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item<FieldType>
           label="หมายเลขตัวถัง"
            name="bodyNumber"
            rules={[{ required: true, message: 'Please input your body number!' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item<FieldType>
          label="เลขที่ผู้เสียภาษี"
          name="idCard"
          rules={[{ required: true, message: 'Please input your ID Card!' }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Form.Item
          name="carType"
          label="ประเภทรถ"
          hasFeedback
          rules={[{ required: true, message: 'Please select your car type!' }]}
        >
          <Select placeholder="- โปรดเลือก -">
            <option value="type1">รย.1</option>
            <option value="type2">รย.2</option>
            <option value="type3">รย.3</option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
      <Form.Item<FieldType>
      label="CC"
      name="cc"
      rules={[{ required: true, message: 'Please input your CC!' }]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item<FieldType>
      label="Weigth"
      name="weigth"
      rules={[{ required: true, message: 'Please input your weigth!' }]}
    >
      <Input />
    </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={8}>
      <Checkbox onChange={onChange} name="legalEntity">นิติบุคคลที่มิได้เป็นผู้ให้เช้าซื้อ(คูณ x)</Checkbox>
      </Col>
      <Col span={8}>
      <Checkbox onChange={onChange} name="ngv">ส่วนลด NGV/CNG(%)</Checkbox>
      </Col>
      <Col span={8}>
      <Checkbox onChange={onChange} name="hybrid">ส่วนลด Hybrid(%)</Checkbox>
      </Col>
    </Row>

    <Row>
      <Col span={8}>
      <Checkbox onChange={onChange} name="carTax">ค่าภาษีรถประจำปี</Checkbox>
      </Col>
      <Col span={16}>
      <Form.Item<FieldType>
          label=""
          name="rate"
          rules={[{ required: true, message: 'Please input your rate!' }]}
        >
          <Input placeholder="Rate"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={8}>
      <Checkbox onChange={onChange} name="fiveYearsCar">รถเก่าใช้มานานเกิน 5 ปี ให้ลดภาษี(% จากภาษี)</Checkbox>
      </Col>
      <Col span={16}>
      <Form.Item<FieldType>
          label=""
          name="amount"
          rules={[{ required: true, message: 'Please input your amount!' }]}
        >
          <Input placeholder="Amount"/>
        </Form.Item>
      </Col>
    </Row>


{/* ภาษีล่าช้า */}

    <Row>
      <Col span={6}>
      <Checkbox onChange={onChange} name="lateTax">ค่าปรับเสียภาษีล่าช้า (%เดือน)</Checkbox>
      </Col>
      <Col span={6}>
        <Form.Item<FieldType>
          label=""
          name="month"
          rules={[{ required: true, message: 'Please input month!' }]}
        >
          <Input placeholder="Month"/>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item<FieldType>
          label=""
          name="percentLate"
          rules={[{ required: true, message: 'Please input your percent late!' }]}
        >
          <Input placeholder="Percent late"/>
        </Form.Item>
      </Col>
      <Col span={6}>
       <Form.Item<FieldType>
          label=""
          name="totalPercentLate"
          rules={[{ required: true, message: 'Please input your total percent late!' }]}
        >
          <Input placeholder="Total percent late"/>
        </Form.Item>
      </Col>
    </Row>

    {inputForms.map(form => (
        <div key={form.id} style={{ marginBottom: '10px' }}>
          <Row>
            <Col span={6}>
            <Input
              value={form.value}
              onChange={e => handleInputChange(form.id, e)}
              placeholder="Enter a value"
            />
            </Col>
            <Col span={6}>
            <Input
              value={form.value}
              onChange={e => handleInputChange(form.id, e)}
              placeholder="Enter a value"
            />
            </Col>
            <Col span={6}>
            <Input
              value={form.value}
              onChange={e => handleInputChange(form.id, e)}
              placeholder="Enter a value"
            />
            </Col>
          </Row>
          
        </div>
      ))}
      <Button type="primary" onClick={addInputForm} icon={<PlusCircleOutlined />}>
        
      </Button>

        </>
    );
};


export default Cpn;
