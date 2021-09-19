import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useState, useEffect } from 'react'
import HOPRprint from './HOPRprint'
import Rcprint from './Rcprint'


function HOPR_print(props) {
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
        data={props.location.state.variable_data}
      />
    </div>
  );
}
export { HOPR_print };
function Rc_print(props) {
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
      <Rcprint
       ref={componentRef}
        data={props.location.state.variable_data}
      />
    </div>
  );
}
export {Rc_print };
