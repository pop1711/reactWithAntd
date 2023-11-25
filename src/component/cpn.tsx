import { Col, Form, Input, Row, Select, Checkbox, Button} from "antd";
import axios from "axios";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';
import { MinusOutlined, PlusCircleOutlined } from "@ant-design/icons";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Mentions } from 'antd';
import { FieldType } from "./component";

  // ภาษีล่าช้า
  type FormData = {
    field1?:string;//month
    field2?:string;//percentLate
    field3?:string;//totalPercentLate
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

const Cpn : React.FC = () => {
  // ภาษีล่าช้า
  const [form] = Form.useForm();
  const [fields, setFields] = useState<FormData[]>([]);

  const addNewField = () => {
    setFields([...fields, { field1: '', field2: '', field3: '' }]);
  };

  const removeField = (indexToRemove: any) => {
    const updatedFields = [...fields];
    updatedFields.splice(indexToRemove, 1);
    setFields(updatedFields);
  };

  const handleInputChange = (index: number, fieldName: keyof FormData, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    setFields(updatedFields);
  };

  const onFinish = () => {
    console.log('Submitted Fields:', fields);
    // Handle form submission logic here
  };

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const currentDate: Date = new Date();
  const formattedDate: string = currentDate.toDateString();

  //Mention
  const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
    value,
    key: value,
    label: value,
  }));

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [carTypeSelected, setCarTypeSelected] = useState<string>('0');

  const carTypeChange = (value:any) => {
    setCarTypeSelected(value)
  }

  const carTypeOptions = [
      { value: '1', label: '[รย.1] รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รถเก๋ง , รถกระบะ 4 ประตู) (645.21 บาท)' },
      { value: '2', label: '[รย.2] รถยนต์นั่งส่วนบุคคลเกิน 7 คน (รถตู้) (1182.35 บาท)' },
      { value: '3', label: '[รย.3] รถยนต์บรรทุกส่วนบุคคล (รถกระบะ 2 ประตู ) (967.28 บาท)' },
      { value: '4', label: '[รย.12] รถจักรยานยนต์ส่วนบุคคล (รถจักรยานยนต์) (161.57 บาท)' },
      // { value: 'disabled', label: 'Disabled', disabled: true },
    ]

  const carType1 = [
    { value: '1', label: 'ไม่เกิน 5 ปี  cc น้อยกว่า 600' },
    { value: '2', label: 'ไม่เกิน 5 ปี  cc 601 - 1,800' },
    { value: '3', label: 'ไม่เกิน 5 ปี  cc เกิน 1,800' },
    { value: '4', label: 'เป็นรถเก่าใช้งานมานานเกิน 6 ปี ให้ลดภาษี' },
    { value: '5', label: 'เป็นรถเก่าใช้งานมานานเกิน 7 ปี ให้ลดภาษี' },
    { value: '6', label: 'เป็นรถเก่าใช้งานมานานเกิน 8 ปี ให้ลดภาษี' },
    { value: '7', label: 'เป็นรถเก่าใช้งานมานานเกิน 9 ปี ให้ลดภาษี' },
    { value: '8', label: 'เป็นรถเก่าใช้งานมานานเกิน 10 ปี ให้ลดภาษี'},
    { value: '9', label: 'รถจักรยานยนต์' },
  ]

  const carType2 = [
    { value: '1', label: 'ไม่เกิน 500' },
    { value: '2', label: '501 - 750' },
    { value: '3', label: '751 - 1,000' },
    { value: '4', label: '1,001 - 1,250' },
    { value: '5', label: '1,251 - 1,500' },
    { value: '6', label: '1,501 - 1,750' },
    { value: '7', label: '1,751 - 2,000' },
    { value: '8', label: '2,001 - 2,500' },
    { value: '9', label: '2,501 - 3,000' },
    { value: '10', label: '3,001 - 3,500' },
    { value: '11', label: '3,501 - 4,000' },
    { value: '12', label: '4,001 - 4,500' },
    { value: '13', label: '4,501 - 5,000' },
    { value: '14', label: '5,001 - 6,000' },
    { value: '15', label: '6,001 - 7,000' },
    { value: '16', label: '7,000 ขึ้นไป' },
  ]
  

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
          <Select
            defaultValue="- โปรดเลือก -"
            onChange={carTypeChange}
            options={carTypeOptions}
    />
        </Form.Item>
      </Col>
    </Row>
    {/* รย1 */}
    {carTypeSelected == '1' &&
      <Row>
      <Col span={24}>
        <Form.Item 
            name="carType1"
            label=""
            hasFeedback
            rules={[{ required: true, message: 'Please select your car type!' }]}
          >
            <Select
              defaultValue="- เลือก อัตราการเสียภาษีรถ ตามความจุกระบอกสูบ(ซีซี.) -"
              options={carType1} />
        </Form.Item>
      </Col>  
    </Row>
    }
    
    {/* รย2 */}
    {carTypeSelected == '2' &&
        <Row>
          <Col span={24}>
            <Form.Item 
                name="carType2"
                label=""
                hasFeedback
                rules={[{ required: true, message: 'Please select your car type!' }]}
              >
                <Select
                  defaultValue="- เลือก อัตราการเสียภาษีรถ คิดตามน้ำหนักรถ -"
                  options={carType2} />
            </Form.Item>
          </Col>
        </Row>
    }
     
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
      {/* <Col span={8}>
      <Form.Item<FieldType>
          label=""
          name="amount"
          rules={[{ required: false, message: 'Please input your amount!' }]}
        >
          <Input placeholder="Amount"/>
        </Form.Item>
      </Col>
      <Col span={8}>
      <Form.Item<FieldType>
          label=""
          name="percentDiscount"
          rules={[{ required: false, message: 'Please input your amount!' }]}
        >
          <Input placeholder="Percent discount"/>
        </Form.Item>
      </Col> */}
      <Col span={8}>
        <Mentions
            name="amount"
            style={{ width: '100%', textAlign: 'center' }}
            placeholder="Amount"
            disabled
            options={options}
          />
      </Col>
      <Col span={8}>
        <Mentions
            name="percentDiscount"
            style={{ width: '100%', textAlign: 'center' }}
            placeholder="Percent Discount"
            disabled
            options={options}
          />
        </Col>
    </Row>


{/* ภาษีล่าช้า */}
    <Row>
      <Col span={6}>
      <Checkbox onChange={onChange} name="lateTax">ค่าปรับเสียภาษีล่าช้า (%เดือน) 
      <Button type="primary" onClick={addNewField} icon={<PlusCircleOutlined />}></Button> 
      <Button type="primary" danger onClick={removeField} icon={<MinusOutlined />}></Button>
      </Checkbox>
      </Col>

      <div>
      <Form form={form} onFinish={onFinish}>
      {fields.map((field, index) => (
        <Row key={index} gutter={16}>
          <Col span={8}>
            <Form.Item name={`field1-${index}`} initialValue={field.field1}>
              <Input
                placeholder="Month"
                value={field.field1}
                onChange={(e) => handleInputChange(index, 'field1', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name={`field2-${index}`} initialValue={field.field2} rules={[{ required: true, message: 'Please input Percent late!' }]}>
              <Input
                placeholder="Percent late"
                value={field.field2}
                onChange={(e) => handleInputChange(index, 'field2', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name={`field3-${index}`} initialValue={field.field3} rules={[{ required: true, message: 'Please input Total late!' }]}>
              <Input
                placeholder="Total late"
                value={field.field3}
                onChange={(e) => handleInputChange(index, 'field3', e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      ))}
    </Form>
      </div>
    </Row>

    <Row>
      <Col span={12}>
      <Checkbox onChange={onChange} name="isInsoection">ค่าตรวจสภาพรถ</Checkbox>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label=""
          name="inspection"
          rules={[{ required: true, message: 'Please input inspection!' }]}
        >
          <Input placeholder="Inspection"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
      <Checkbox onChange={onChange} name="isTaxCarService">ค่าบริการเสียภาษีรถ</Checkbox>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label=""
          name="taxCarService"
          rules={[{ required: true, message: 'Please input tax car service!' }]}
        >
          <Input placeholder="Tax car service"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
      <Checkbox onChange={onChange} name="isAct">ค่าเบี้ยประกัน พรบ.</Checkbox>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label=""
          name="act"
          rules={[{ required: true, message: 'Please input act!' }]}
        >
          <Input placeholder="0.00"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={12}>
      <Checkbox onChange={onChange} name="isInsurance">ค่าเบี้ยประกัน พรบ.</Checkbox>
      </Col>
      <Col span={12}>
        <Form.Item<FieldType>
          label=""
          name="insurance"
          rules={[{ required: true, message: 'Please input insurance!' }]}
        >
          <Input placeholder="0.00"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      <Col span={2}>
      <Checkbox onChange={onChange} name="isOther1">อื่นๆ</Checkbox>
      </Col>
      <Col span={3}>
      <Checkbox onChange={onChange} name="isOther2">อื่นๆ2</Checkbox>
      </Col>
      <Col span={3}>
      <Checkbox onChange={onChange} name="isOther3">อื่นๆ3</Checkbox>
      </Col>
      
      <Col span={5}>
        <Form.Item<FieldType>
          label=""
          name="other1"
          rules={[{ required: true, message: 'Please input Other service!' }]}
        >
          <Input placeholder="Other service"/>
        </Form.Item>
      </Col>
      <Col span={5}>
        <Form.Item<FieldType>
          label=""
          name="other2"
          rules={[{ required: true, message: 'Please input Other service2!' }]}
        >
          <Input placeholder="Other service2"/>
        </Form.Item>
      </Col>
      <Col span={5}>
        <Form.Item<FieldType>
          label=""
          name="other3"
          rules={[{ required: true, message: 'Please input Other service3!' }]}
        >
          <Input placeholder="Other service3"/>
        </Form.Item>
      </Col>
    </Row>

    <Row>
        <Col offset={8} span={16}>
          <Form.Item<FieldType>
            label="หมายเหตุ อื่นๆ1"
            name="note1"
            rules={[{ required: false, message:''}]}
          >
            <Input placeholder="" />
        </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col offset={8} span={16}>
          <Form.Item<FieldType>
            label="หมายเหตุ อื่นๆ2"
            name="note2"
            rules={[{ required: false, message:''}]}
          >
            <Input placeholder="" />
        </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col offset={8} span={16}>
          <Form.Item<FieldType>
            label="หมายเหตุ อื่นๆ3"
            name="note3"
            rules={[{ required: false, message:''}]}
          >
            <Input placeholder="" />
        </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col offset={8} span={16}>
          <Form.Item<FieldType>
            label="หมายเหตุ"
            name="note"
            rules={[{ required: false, message:''}]}
          >
            <Input placeholder="" />
        </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col offset={8} span={16}>
          <Form.Item<FieldType>
            label="ส่วนลด"
            name="discount"
            rules={[{ required: false, message:''}]}
          >
            <Input placeholder="0.00" />
        </Form.Item>
        </Col>
    </Row>
    <Row>
      <Col offset={8} span={16}>
        <Form.Item
        name="payType"
        label="ประเภทชำระเงิน"
        hasFeedback
        rules={[{ required: true, message: 'Please select pay type!' }]}
      >
        <Select placeholder="กรุณาเลือกประเภทการชำระเงิน">
          <option value="cash">เงินสด</option>
          <option value="qrCode">QR Code</option>
        </Select>
      </Form.Item>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <p>วันที่:{formattedDate}</p>
      </Col>
      <Col offset={5} span={11}>
        <Space direction="vertical">
          <DatePicker onChange={onChangeDate}  placeholder="วันนัดรับป้ายภาษี"/>
        </Space>
      </Col>
    </Row>
    <Row>
        <Col offset={6} span={18}>
            <Checkbox onChange={onChange} name="isCopy">เลือก = เล่มทะเบียน / ไม่เลือก = สำเนา</Checkbox>
        </Col>
    </Row>
    <Row>
        <Mentions
          style={{ width: '100%', textAlign: 'center' }}
          placeholder="0.00"
          disabled
          options={options}
        />
    </Row>

        </>
    );
};


export default Cpn;
