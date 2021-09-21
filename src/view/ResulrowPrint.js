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
    
      <Table>
        <thead>
          <tr className="table-border">
            <th className="table-border"> ተ.ቁ </th>
            <th className="text-center padded-table table-border">ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር </th>
            <th className="text-center padded-table table-border">የተመዘገቡ መራጮች ቁጥር </th>
            <th className="text-center padded-table table-border">ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ </th>
            <th className="text-center padded-table table-border">ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት </th>
            <th className="text-center padded-table table-border">ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት</th>
            <th className="text-center padded-table table-border">መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት  </th>
            <th className="text-center padded-table table-border">ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር  </th>
            <th className="text-center padded-table table-border">ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th className="text-center padded-table table-border">ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th className="text-center padded-table table-border">መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት  </th>
            <th className="text-center padded-table table-border">ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር  </th>
            <th className="text-center padded-table table-border">ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት </th>
            <th className="text-center padded-table table-border">ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት  </th>
            <th className="text-center padded-table table-border">በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት  </th>


          </tr >
        </thead >
        
        < tbody >


         <tr>
         <td>1</td>
            <td>አዲስ አበባ</td>
            <td>{this.props.data.data21.total_balots}</td>
            <td>{((this.props.data.data21.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data21.number_of_const}</td>
            <td>{this.props.data.rcdata21.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            


           

        </tr>
 <tr>
         <td>2</td>
            <td>አፋር</td>
            <td>{this.props.data.data22.total_balots}</td>
            <td>{((this.props.data.data22.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data22.number_of_const}</td>
            <td>{this.props.data.rcdata22.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>3</td>
            <td>አማራ </td>
            <td>{this.props.data.data23.total_balots}</td>
            <td>{((this.props.data.data23.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data23.number_of_const}</td>
            <td>{this.props.data.rcdata23.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>4</td>
            <td>ቤኒሻንጉል </td>
            <td>{this.props.data.data24.total_balots}</td>
            <td>{((this.props.data.data24.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data24.number_of_const}</td>
            <td>{this.props.data.rcdata24.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>5</td>
            <td>ድሬዳዋ </td>
            <td>{this.props.data.data25.total_balots}</td>
            <td>{((this.props.data.data25.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data25.number_of_const}</td>
            <td>{this.props.data.rcdata25.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>6</td>
            <td>ጋምቤላ </td>
            <td>{this.props.data.data26.total_balots}</td>
            <td>{((this.props.data.data26.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data26.number_of_const}</td>
            <td>{this.props.data.rcdata26.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>7</td>
            <td> ሀረር</td>
            <td>{this.props.data.data27.total_balots}</td>
            <td>{((this.props.data.data27.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data27.number_of_const}</td>
            <td>{this.props.data.rcdata27.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>8</td>
            <td>ኦሮሚያ</td>
            <td>{this.props.data.data28.total_balots}</td>
            <td>{((this.props.data.data28.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data28.number_of_const}</td>
            <td>{this.props.data.rcdata28.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>9</td>
            <td>ሲዳማ </td>
            <td>{this.props.data.data29.total_balots}</td>
            <td>{((this.props.data.data29.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data29.number_of_const}</td>
            <td>{this.props.data.rcdata29.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>10</td>
            <td>ደ/ብ/ብ/ህ/ ክልል </td>
            <td>{this.props.data.data30.total_balots}</td>
            <td>{((this.props.data.data30.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data30.number_of_const}</td>
            <td>{this.props.data.rcdata30.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            

           

        </tr>
        <tr>
         <td>11</td>
            <td>ሱማሊ</td>
            <td>{this.props.data.data31.total_balots}</td>
            <td>{((this.props.data.data31.total_balots/(this.props.data.data21.total_balots+this.props.data.data21.unused_balots))*100).toFixed(1)}</td>
            <td>{this.props.data.data31.number_of_const}</td>
            <td>{this.props.data.rcdata31.number_of_const}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            
            </tr>

           



</tbody >
        <tbody >
        </tbody >
      </Table>
    </Card>)
}}
export default ResulrowPrint