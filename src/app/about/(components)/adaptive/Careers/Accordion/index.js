'use client';

import React from 'react';
import { bindClasses } from 'utils/functions';
import SendForm from 'components/adaptive/SendForm';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from './res/drop-down.svg?component';
import CloseIcon from './res/close.svg?component';

import classes from './styles.module.scss';

const bc = bindClasses(classes, 'accordion');

export default function index({ list }) {
  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: '#121212',
    '.MuiAccordionSummary-expandIconWrapper': {
      position: 'absolute',
      top: '24px',
      right: '24px',
      [theme.breakpoints.down('sm')]: {
        top: '16px',
        right: '16px',
      },
    },
    '.MuiAccordionSummary-root': {
      padding: '0 24px',
      position: 'relative',
      alignItems: 'flex-start',
      '.MuiAccordionSummary-content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        margin: '24px 0',
        '.MuiAccordionDetails-root': {
          padding: '8px 24px 16px',
          h2: {
            color: 'rgba(103, 103, 103, 1)',
          },
        },
      },
    },
  }));

  const CustomAccordion2 = styled(Accordion)(() => ({
    boxShadow: 'none',
    backgroundColor: '#121212',
    '.MuiAccordionSummary-root': {
      padding: '0 !important',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      '.MuiAccordionSummary-content': {
        width: 'min-content',
        height: 'min-content',
        padding: '16px 40px',
        backgroundColor: 'white',
        flex: 0,
        borderRadius: '30px',
        margin: '64px 0 !important',
      },
    },
  }));

  const CustomExpandIcon = () => (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none',
        },
        '.expandIconWrapper': {
          display: 'none',
        },
        '.Mui-expanded & > .expandIconWrapper': {
          display: 'block',
        },
      }}
    >
      <div className="expandIconWrapper">
        <CloseIcon />
      </div>
      <div className="collapsIconWrapper">
        <ArrowDownwardIcon />
      </div>
    </Box>
  );

  return list.map((vacancie) => (
    <CustomAccordion
      sx={{ backgroundColor: '#121212' }}
      key={vacancie.id}
      style={{ borderRadius: '30px', marginBottom: '24px' }}
    >
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className={bc.__label}>label</div>
        <div className={bc.__name}>{vacancie.name}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div
          className={bc.__description}
          dangerouslySetInnerHTML={{ __html: vacancie.description }}
        />
        <CustomAccordion2 disableGutters>
          <AccordionSummary>FORM</AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <SendForm buttonName="Send a application" title="Job application" withFile />
          </AccordionDetails>
        </CustomAccordion2>
      </AccordionDetails>
    </CustomAccordion>
  ));
}
