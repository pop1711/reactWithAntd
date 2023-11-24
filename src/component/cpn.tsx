import { Col, Form, Input, Row } from "antd";
import axios from "axios";

type FieldType = {
    registerNo?:string;
    name?:string;
    surName?:string;
    registerDate?:string;
    bodyNumber?:string;
    phoneNumber?:string;
    city?:string;
    idCard?:string;
  };

const Cpn : React.FC = () => {
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
      <Form.Item<FieldType>
      label="จังหวัด"
      name="city"
      rules={[{ required: true, message: 'Please input your city!' }]}
    >
      <Input />
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
      {/* เพิ่มมาใหม่
    <div className="province">
      
    </div> */}
        </>
    );
};


export default Cpn;
