import React, {useState, useEffect} from 'react'
import { List, Avatar, Card, Button, Modal, Input, Space,  } from 'antd';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Table } from 'reactstrap';
const datas = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


  class ResulrowPrint extends React.PureComponent {
 
    render() {
 console.log('this.props.data',this.props.data)
    
    return (
      <Card >
    <h3 style={{  marginTop: "10%",fontWeight: 'bold',textDecorationLine: 'underline', marginLeft: "45%"}}>የውጤት ማሳወቂያ ሰንጠርጅ</h3>
      <Table  style={{  marginTop: "2%","borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>

        <thead>
          <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} className="table-border">
            <th className="table-border"> ተ.ቁ </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">የተመዘገቡ መራጮች ቁጥር </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት</th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}  className="text-center padded-table table-border">በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት  </th>


          </tr >
        </thead >
        
        < tbody >


          <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>1</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>አዲስ አበባ</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data21.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data21.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data21.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata21.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            


           

        </tr>
  <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>2</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>አፋር</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data22.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data22.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data22.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata22.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>3</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>አማራ </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data23.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data23.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data23.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata23.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>4</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ቤኒሻንጉል </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data24.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data24.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data24.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata24.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>5</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ድሬዳዋ </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data25.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data25.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data25.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata25.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>6</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ጋምቤላ </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data26.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data26.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data26.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata26.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>7</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}> ሀረር</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data27.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data27.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data27.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata27.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>8</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ኦሮሚያ</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data28.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data28.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data28.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata28.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>9</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ሲዳማ </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data29.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data29.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data29.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata29.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>10</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ደ/ብ/ብ/ህ/ ክልል </td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data30.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data30.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data30.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata30.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            

           

        </tr>
         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>11</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>ሱማሊ</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data31.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((this.props.data.data31.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.data31.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{this.props.data.rcdata31.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>0</td>
            
            </tr>

           



</tbody >
        <tbody >
        </tbody >
      </Table>
    </Card>)
}}
export default ResulrowPrint
