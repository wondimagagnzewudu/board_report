import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useState, useEffect } from 'react'
import HOPRprint from './HOPRprint'
import Rcprint from './Rcprint'


function HOPR_print(props) {
  var selectedItems={contact:"",contactPerson:"",phone:""};
  var selectedVehicle={driver:"",phone:""};

  const [data, setshippers] = useState({selectedItems,plate_number:"",selectedVehicle,username:"",columns:"",data:"",owner_username:"",wareselected_phone:"",Driver_confConfirmation:"",Additional_Commented:""});
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Button
        className="button"
        size="lg"
        type="Button"
        variant="link"
        onClick={handlePrint}
      >
        <i class="fa fa-print"></i> Print
      </Button>
      <HOPRprint
       ref={componentRef}
        data={data}
      />
    </div>
  );
}
export { HOPR_print };
function Rc_print(props) {
  var selectedItems={contact:"",contactPerson:"",phone:""};
  const [real_serched_data, setreal_serched_data] = useState([[{ "Polling_Materials": "Stationery_Kit" }], [{ "Polling_Materials": "CO Kit Sticker Label " }], [{ "Polling_Materials": "Polling Station Intake Checklist " }], [{ "Polling_Materials": "HoPR Constituency Tallying Worksheet  " }], [{ "Polling_Materials": "HoPR Constituency Consolidated Tallying Worksheet" }], [{ "Polling_Materials": "RC Constituency Tallying Worksheet Landscape" }], [{ "Polling_Materials": "RC Constituency Consolidated Tallying Worksheet Landscape" }], [{ "Polling_Materials": "RC Constituency Tallying Worksheet Portrait" }], [{ "Polling_Materials": "RC Constituency Consolidated Tallying Worksheet Portrait" }], [{ "Polling_Materials": "HoPR Information listed below" }], [{ "Polling_Materials": "HoPR Constituency pack:" }], [{ "Polling_Materials": "HoPR Constituency RF - 5" }], [{ "Polling_Materials": "HoPR Constituency RF agents copy - 20" }], [{ "Polling_Materials": "HoPR Recount and Corrections RRF - 10" }], [{ "Polling_Materials": "RC Information listed below" }], [{ "Polling_Materials": "RC Constituency pack:" }], [{ "Polling_Materials": "RC Constituency RF - 5" }], [{ "Polling_Materials": "RC Constituency RF agents copy - 20" }], [{ "Polling_Materials": "RC Recount and Corrections RRF - 10" }], [{ "Polling_Materials": "PS RC Tallying Worksheet" }], [{ "Polling_Materials": "MTF" }], [{ "Polling_Materials": "Complaints Form" }], [{ "Polling_Materials": "Receipt of Complaints Form" }], [{ "Polling_Materials": "C3 TEB " }], [{ "Polling_Materials": "C2 TEB" }], [{ "Polling_Materials": "PPE Set" }]]); const componentRef = useRef();
  var selectedVehicle={driver:"",phone:""};
var data ={
  'real_serched_data':real_serched_data,
  'selectedItems':selectedItems,
  'selectedVehicle':selectedVehicle
};
 const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Button
        className="button"
        size="lg"
        type="Button"
        variant="link"
        onClick={handlePrint}
      >
        <i class="fa fa-print"></i> Print
      </Button>
      <Rcprint
       ref={componentRef}
        data={data}
      />
    </div>
  );
}
export {Rc_print };