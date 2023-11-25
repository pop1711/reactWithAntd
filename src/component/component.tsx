export type FieldType = {
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
    percentDiscount?:number;
    isInsoection?:boolean;
    inspection?:number;
    isTaxCarService?:boolean;
    taxCarService?:number;
    isAct?:boolean;
    act?:number;
    isInsurance?:boolean;
    insurance?:number;
    isOther1?:boolean
    other1?:string;
    isOther2?:boolean
    other2?:string;
    isOther3?:boolean
    other3?:string;
    note1?:string;
    note2?:string;
    note3?:string;
    note?:string;
    discount?:number;
    payType?:string;
    location?:string;
    // apptDate?:string;
    // toDay?:string;
    isCopy?:boolean;
    totalPrice?:string; //รวมราคาทั้งหมด
  };

//   export const createType = {
//     fieldType:FieldType,
//     carType:String
//   }