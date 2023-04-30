import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AutoGraph, Cake } from "@mui/icons-material";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./App.scss";

export default function () {
  return (
    <div className="left-nav-container">
      <h1 className="header"><Cake /> All Filters</h1>
      <h2>
        <AutoGraph /> Selected Filters
      </h2>
      <ButtonGroup
        className="button-group"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" color="success">
          Cotton
        </Button>
        <Button variant="outlined" color="error">
          Red
        </Button>
        <Button color="secondary">Clothes</Button>
      </ButtonGroup>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Shop my store</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="See what's available at Supercenter"
            />
          </FormGroup>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Price</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Price Section details</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <b>Brand</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Brand section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>
            <b>Departments</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Departments section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>
            <b>Speed</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Speed section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>
            <b>Product Category</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Product Category section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>
            <b>Color</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Color section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>
            <b>Material</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Material section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>
            <b>Pattern</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Pattern section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography>
            <b>Features</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Features section details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography>
            <b>Bed Size</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bed Size section details</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
