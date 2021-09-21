import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useState, useEffect } from 'react'
import HOPRprint from './HOPRprint'
import Rcprint from './Rcprint'
import ResulrowPrint from './ResulrowPrint'

function HOPR_print(props) {
 const componentRef = useRef();
  const handlePrint = useReactToPrint({
    
    content: () => componentRef.current,
  });
  var variable_data={'variable_data':props.location.state.variable_data}
  return (
    <div>
      <Button
        className="button"
        size="lg"
        type="Button"
        variant="link"
        onClick={handlePrint}
      >
        <i class="fa fa-print"></i> click here to print
      </Button>
      Below sample data
      <HOPRprint
       ref={componentRef}
        data={variable_data}
      />
    </div>
  );
}
export { HOPR_print };
function Rc_print(props) {
 const componentRef = useRef();
 var variable_data={'variable_data':props.location.state.variable_data}
 const pageStyle = `{ size: 2.5in 4in }`;
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
        data={variable_data}
      />
    </div>
  );
}
export {Rc_print };
function Resulrow_Print(props) {
  const componentRef = useRef();
  var variable_data={'variable_data':props.location.state.variable_data}
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
       <ResulrowPrint
        ref={componentRef}
        data={JSON.parse(variable_data.variable_data)}
       />
     </div>
   );
 }
 export {Resulrow_Print };
