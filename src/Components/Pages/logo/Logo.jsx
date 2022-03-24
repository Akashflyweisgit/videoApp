/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";

// import Paper from "@material-ui/core/Paper";
import HOC from "../../../Common/Hoc";
import { Card, Grid, Input } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

//DIALOG BOX
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Logo(props) {
  // const [EditDailogOpen, setEditDailogOpen] = useState("");
  // const [EditcategoryName, setEditcategoryName] = useState(false);

  // // for pagination hadler
  // const [rowsPerPage, setRowsPerPage] = React.useState(3);
  // const [page, setPage] = React.useState(0);

  // const handleChangePage = (event, newPage) => {
  //   window.scrollTo(0, 0);
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const [titlename, settitlename] = useState("");

  //   const filterData = CategoryDataArry.filter((event) => {
  //     return (
  //       event.code.toLowerCase().indexOf(titlename.toLowerCase()) !== -1
  //     );
  //   });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Upload Logo</h3>

              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.goBack()}
              >
                <i class="fa fa-arrow-left"></i>Go Back
              </button>
            </Grid>
          </Grid>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <FormControl sx={{ ml: 28 }} style={{ minWidth: 320 }}>
                <Input
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={age}
                  type="file"
                  // onChange={handleChange}
                >
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Input>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </CardContent>
          </Card>

          <br />
          <Dialog
          // open={EditDailogOpen}
          // onClose={() => setEditDailogOpen(!EditDailogOpen)}
          // aria-labelledby="form-dialog-title"
          // maxWidth="sm"
          // fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Category
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"></label>
                <div class=" col-md-12">
                  <label for="inputPassword4">Add Category</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Add Category"
                    // value={EditcategoryName}
                    // onChange={(e) => {
                    //   setEditcategoryName(e.target.value);
                    // }}
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              {/* <Button
                className="button_formatting"
                onClick={() => setEditDailogOpen(!EditDailogOpen)}
              >
                Cancel
              </Button>
              <Button
                className="button_formatting"
                onClick={() => UpdateBrand(EditId)}
              >
                Upload
              </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default HOC(Logo);
