import React, { useState } from 'react';
import Sidebar from '../../../Components/Drawers/drawer_l';
import InvoiceCard from '../../../Components/InvoiceCard';
import RowRadioButtonsGroup from "../../../Components/RadioButtons"
import './invoice.css';

const Invoice = () => {
  const [currentInvoice, setCurrentInvoice] = useState(1);

  const handleNext = () => {
    setCurrentInvoice((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentInvoice((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="invoice">
      <Sidebar />
      <div className="invoiceContent">
        <InvoiceCard
          number={currentInvoice}
          month="June 2024" 
          lessonsWorked={20} 
          calculatedFee="R2000" 
          dateIssued="June 25, 2024" 
          issuedTo="Andries Matenjwa" 
          onNext={handleNext}
          onBack={handleBack}
        />
        <div className="radio">
          <RowRadioButtonsGroup/>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
