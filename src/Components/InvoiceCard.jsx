import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./invoiceCard.css"

const InvoiceCard = ({
  number,
  month,
  lessonsWorked,
  calculatedFee,
  dateIssued,
  issuedTo,
  onNext,
  onBack,
}) => {
  return (
    <Box position="relative" display="flex" justifyContent="center" alignItems="center" p={2}>
      <Button
        onClick={onBack}
        sx={{
          position: 'absolute',
          left: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          color: 'grey',
        }}
      >
        <ChevronLeftIcon style={{ fontSize: "50px" }} />
      </Button>
      <Card className="invoice-card"sx={{ position: 'relative', backgroundColor: '#f0f0f0', borderRadius: '25px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Typography variant="h6" sx={{ position: 'absolute', top: 0, left: 0, margin: '10px',fontSize:"20px", fontWeight:"700" }}>{`# ${number}`}</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: '5%', fontSize:"18px"}} >{`Month: ${month}`}</Typography>
            <Typography variant="body1" sx={{ mb: '5%', fontSize:"18px"}} >{`Lessons worked: ${lessonsWorked}`}</Typography>
            <Typography variant="body1" sx={{ mb: '5%', fontSize:"18px"}} >{`Calculated fee: ${calculatedFee}`}</Typography>
            <Typography variant="body1"sx={{ mb: '5%', fontSize:"18px"}} >{`Date issued: ${dateIssued}`}</Typography>
            <Typography variant="body1"sx={{ mb: '5%', fontSize:"18px"}} >{`Issued to: ${issuedTo}`}</Typography>
          </Box>
        </CardContent>
      </Card>
      <Button
        onClick={onNext}
        sx={{
          position: 'absolute',
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          color: 'grey',
        }}
      >
        <ChevronRightIcon style={{ fontSize: "50px" }} />
      </Button>
    </Box>
  );
};

export default InvoiceCard;
