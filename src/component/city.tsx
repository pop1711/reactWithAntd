import {Form, Select} from 'antd';
import React, { useState, useEffect } from 'react';

interface City {
  id: number;
  name_th: string;
}

const CityDropdown: React.FC = () => {

    {/*--- Using Api ---*/}
//   const [cities, setCities] = useState<City[]>([]);
//   const [selectedCity, setSelectedCity] = useState<number | null>(null);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json');
//         const data = await response.json();
//         setCities(data); // Assuming the API returns an array of cities
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const cityId = parseInt(event.target.value);
//     setSelectedCity(cityId);
//   };

  return (
    <div>
    <Form.Item
      name="select"
      label="จังหวัด"
      hasFeedback
      rules={[{ required: true, message: 'Please select your country!' }]}
    >
      <Select placeholder="กรุณาเลือกจังหวัด">
        <option value="bangkok">กรุงเทพ</option>
        <option value="chiangmai">เชียงใหม่</option>
      </Select>
    </Form.Item>
    


    {/*--- Using Api ---*/}

    {/* <Form.Item
      name="select"
      label="จังหวัด"
      hasFeedback
      rules={[{ required: true, message: 'Please select your country!' }]}
    >
      <select placeholder="กรุณาเลือกจังหวัด" value={selectedCity || ''} onChange={handleCityChange}>
      <option value="">กรุณาเลือกจังหวัด</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name_th}
          </option>
        ))}
      </select>
    </Form.Item> */}

    </div>
  );
};

export default CityDropdown;
