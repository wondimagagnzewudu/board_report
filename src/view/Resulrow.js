import React, { useState, useRef, useEffect } from 'react'
import { List, Avatar, Card, Button, Modal, Input, Space, } from 'antd';
import * as FileSaver from "file-saver";
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import ResulrowPrint from './ResulrowPrint'
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

export default function Resulrow(props) {

  const [data, setdata] = useState([])
  const [data21, setdata21] = useState([])
  const [data22, setdata22] = useState([])
  const [data23, setdata23] = useState([])

  const [data24, setdata24] = useState([])
  const [data25, setdata25] = useState([])
  const [data26, setdata26] = useState([])
  const [data27, setdata27] = useState([])
  const [data28, setdata28] = useState([])
  const [data29, setdata29] = useState([])
  const [data30, setdata30] = useState([])
  const [data31, setdata31] = useState([])
  const [rcdata21, setrcdata21] = useState([]);
  const [rcdata22, setrcdata22] = useState([]);

  const [rcdata23, setrcdata23] = useState([]);
  const [rcdata24, setrcdata24] = useState([]);
  const [rcdata25, setrcdata25] = useState([]);
  const [rcdata26, setrcdata26] = useState([]);
  const [rcdata27, setrcdata27] = useState([]);
  const [rcdata28, setrcdata28] = useState([]);

  const [rcdata29, setrcdata29] = useState([]);
  const [rcdata30, setrcdata30] = useState([]);
  const [rcdata31, setrcdata31] = useState([]);
  const [rcdata32, setrcdata32] = useState([]);

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  var [searchInput, setSearchInput] = useState('')
  const componentRef = useRef();
  const get_the_csv = async (item) => {


    const language = [
      { "ተ.ቁ": "", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "", "የተመዘገቡ መራጮች ቁጥር": "", "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": "", "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": "", "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": "", "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "" },
      { "ተ.ቁ": "1", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "አዲስ አበባ", "የተመዘገቡ መራጮች ቁጥር": data21.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data22.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data21.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata21.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "2", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "አፋር", "የተመዘገቡ መራጮች ቁጥር": data22.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data22.total_balots/(data22.total_balots+data22.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data22.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata22.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "3", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "አማራ", "የተመዘገቡ መራጮች ቁጥር": data23.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data23.total_balots/(data23.total_balots+data23.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data23.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata23.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "4", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ቤኒሻንጉል", "የተመዘገቡ መራጮች ቁጥር": data24.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data24.total_balots/(data24.total_balots+data24.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data24.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata24.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },     
{ "ተ.ቁ": "5", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ድሬዳዋ", "የተመዘገቡ መራጮች ቁጥር": data25.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data25.total_balots/(data25.total_balots+data25.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data25.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata25.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "6", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ጋምቤላ", "የተመዘገቡ መራጮች ቁጥር": data26.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data26.total_balots/(data26.total_balots+data26.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data26.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata26.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "7", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ሀረር", "የተመዘገቡ መራጮች ቁጥር": data27.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data27.total_balots/(data27.total_balots+data27.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data27.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata27.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "8", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ኦሮሚያ", "የተመዘገቡ መራጮች ቁጥር": data28.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data28.total_balots/(data28.total_balots+data28.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data28.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata28.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "9", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ሲዳማ", "የተመዘገቡ መራጮች ቁጥር": data29.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data29.total_balots/(data29.total_balots+data29.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data29.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata29.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "10", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ደ/ብ/ብ/ህ/ ክልል", "የተመዘገቡ መራጮች ቁጥር": data30.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data30.total_balots/(data30.total_balots+data30.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data30.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata30.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
{ "ተ.ቁ": "11", "ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር": "ሱማሊ", "የተመዘገቡ መራጮች ቁጥር": data31.total_balots, "ከተመዘገቡ መራጮች መካከል ድምፅ የሰጡ በመቶኛ": ((data31.total_balots/(data31.total_balots+data31.unused_balots))*100).toFixed(1), "ክልሉ ያለው የተወካዮች ምክር ቤት መቀመጫ ብዛት": data31.number_of_const, "ክልሉ ያለው የክልል ምክር ቤት መቀመጫ ብዛት": rcdata31.number_of_const, "መስከረም 20 ቀን ምርጫ የተከናወነበት የተወካዮች ምክር ቤት ምርጫ ክልል ብዛት": "0", "ለተወካዮች ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "መስከረም 20 ቀን ምርጫ የተከናወነበት የክልል ምክር ቤት ምርጫ ክልል ብዛት": "", "ለክልል ምክር ቤት መቀመጫ ያገኙ ፓርቲዎች እና የመቀመጫ ቁጥር": "0", "ድጋሚ ቆጠራ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "ድጋሚ ምርጫ የሚከናወንበት ምርጫ ክልል ብዛት": "0", "በሁለቱም ምርጫ አይነቶች ምርመራ ላይ ያሉ ምርጫ ክልሎች ብዛት": "0" },
    ]






    const fileName = "try";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(language);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    // const excelBuffer = XLSX.insert_image(image)
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);



  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const Getprint = () => {
  var  variable_data= {rcdata21,rcdata22,rcdata23,rcdata24,rcdata25,rcdata26,rcdata26,rcdata27,rcdata27,rcdata28,rcdata29,rcdata30,rcdata31,data21,data22,data23,data24,data25,data26,data27,data28,data29,data30,data31};   props.history.push({

      pathname: '/Resulrow_Print',

      state: {
      'variable_data':JSON.stringify(variable_data),
    }


    });
  }
  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/21`)
      const res = await response.json()
      console.log(res)
      setdata21(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/22`)
      const res = await response.json()
      console.log(res)
      setdata22(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/23`)
      const res = await response.json()
      console.log(res)
      setdata23(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/24`)
      const res = await response.json()
      console.log(res)
      setdata24(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/25`)
      const res = await response.json()
      console.log(res)
      setdata25(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/26`)
      const res = await response.json()
      console.log(res)
      setdata26(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/27`)
      const res = await response.json()
      console.log(res)
      setdata27(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/28`)
      const res = await response.json()
      console.log(res)
      setdata28(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/29`)
      const res = await response.json()
      console.log(res)
      setdata29(res)

    } catch (e) {
      console.log(e)
    } try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/30`)
      const res = await response.json()
      console.log(res)
      setdata30(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_detail/31`)
      const res = await response.json()
      console.log(res)
      setdata31(res)

    } catch (e) {
      console.log(e)
    } try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/21`)
      const res = await response.json()
      console.log(res)
      setrcdata21(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/22`)
      const res = await response.json()
      console.log(res)
      setrcdata22(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/23`)
      const res = await response.json()
      console.log(res)
      setrcdata23(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/24`)
      const res = await response.json()
      console.log(res)
      setrcdata24(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/25`)
      const res = await response.json()
      console.log(res)
      setrcdata25(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/26`)
      const res = await response.json()
      console.log(res)
      setrcdata26(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/27`)
      const res = await response.json()
      console.log(res)
      setrcdata27(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/28`)
      const res = await response.json()
      console.log(res)
      setrcdata28(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/29`)
      const res = await response.json()
      console.log(res)
      setrcdata29(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/30`)
      const res = await response.json()
      console.log(res)
      setrcdata30(res)

    } catch (e) {
      console.log(e)
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_detail/31`)
      const res = await response.json()
      console.log(res)
      setrcdata31(res)

    } catch (e) {
      console.log(e)
    }
   

  }
  useEffect(() => {
    getData()

  }, [])
  return (

    <Card >
      <button onClick={get_the_csv}>export to excel</button>
      <button onClick={Getprint} >print</button>
      <Table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <thead style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} className="table-border">
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} className="table-border"> ተ.ቁ </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}className="text-center padded-table table-border">ምርጫው የተካሄደበት ክልል/ከተማ መስተዳድር </th>
            <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}className="text-center padded-table table-border">የተመዘገቡ መራጮች ቁጥር </th>
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
        
        < tbody style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>


         <tr  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>1</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>አዲስ አበባ</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data21.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data21.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data21.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata21.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data22.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data22.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data22.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata22.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data23.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data23.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data23.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata23.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data24.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data24.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data24.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata24.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data25.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data25.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data25.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata25.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data26.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data26.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data26.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata26.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data27.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data27.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data27.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata27.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data28.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data28.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data28.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata28.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data29.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data29.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data29.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata29.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data30.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data30.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data30.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata30.number_of_const}</td>
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
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data31.total_balots}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{((data31.total_balots/(data21.total_balots+data21.unused_balots))*100).toFixed(1)}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{data31.number_of_const}</td>
             <td  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{rcdata31.number_of_const}</td>
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
}
