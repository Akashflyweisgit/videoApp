import React, { useState, } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import HOC from "../../../Common/Hoc";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";
// import Loder from "../../Loder/Loder";
// import { getBaseUrl } from "../../utils";
// import { showNotificationMsz } from "../../utils/Validation";
// import axios from "axios";

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

function TestVideos(props) {
// const [isupdated, setisupdated] = useState(false);
// const [isloading, setisloading] = useState(false);
// const [CategoryDataArry, setCategoryDataArry] = useState([]);
const [EditDailogOpen, setEditDailogOpen] = useState("");
const [EditcategoryName, setEditcategoryName] = useState(false);
// const token = localStorage.getItem("token");



// ///update Category Name
// const UpdateBrand = (ID) => {
// let id = ID;
// setisloading(true);
// let url = getBaseUrl() + `updateCategory/${id}`;
// let temp = {
// categoryName: EditcategoryName,
// };

// axios
// .patch(url, temp)
// .then(
// (res) => {
// console.log("data response:::", res);
// setisupdated(!isupdated);
// showNotificationMsz(res.data.msg, "success");
// setEditDailogOpen(!EditDailogOpen);
// setisloading(false);
// },

// (error) => {
// console.log("data response error:::", error);
// showNotificationMsz(error, "danger");
// setisloading(false);
// }
// )
// .catch((e) => {
// console.log("data response error:::", e);
// showNotificationMsz(e, "danger");
// setisloading(false);
// });
// };

// //paginaton

// const UpdateCategoryData = (row) => {
// setEditDailogOpen(!EditDailogOpen);
// setEditcategoryName(row.categoryName);
// setEditId(row._id);
// };

// for pagination hadler
const [rowsPerPage, setRowsPerPage] = React.useState(3);
const [page, setPage] = React.useState(0);

const handleChangePage = (event, newPage) => {
window.scrollTo(0, 0);
setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
setRowsPerPage(parseInt(event.target.value, 10));
setPage(0);
};

const [titlename, settitlename] = useState("");

// const filterData = CategoryDataArry.filter((event) => {
// return (
// event.code.toLowerCase().indexOf(titlename.toLowerCase()) !== -1
// );
// });

const classes = useStyles();

return (
<>
    <div className="home_padding">
        <div className="content_padding">
            <Grid className="Component_main_grid mb-3">
                <Grid item md={9}>
                    <h3 className="mb-2">Test Videos</h3>
                    <button type="button" class="btn btn-info mr-4" onClick={()=> props.history.push("/create/test/videos")}
                        >
                        <i class="fa fa-plus"></i> Create
                    </button>
                    <button type="button" class="btn btn-info mr-4" onClick={()=> props.history.goBack()}
                        >
                        <i class="fa fa-arrow-left"></i>Go Back
                    </button>
                </Grid>
                <Grid item md={3}>
                    <div className="d-flex mt-3">
                        <span className="p-2">
                            <i class="fa fa-search"></i>
                        </span>
                        <span>
                            <input value={titlename} onChange={(e)=> {
                            settitlename(e.target.value);
                            }}
                            type="text"
                            class="form-control"
                            placeholder="Search by Name"
                            />
                        </span>
                    </div>
                </Grid>
            </Grid>

            <Card classname="main_card p-3">
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>Video</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Operations</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                            <TableRow>

                                <TableCell>
                                <video width="220" height="140" controls>
                                <source src="movie.mp4" type="video/mp4"/>
                                <source src="movie.ogg" type="video/ogg"/>
                                Your browser does not support the video tag.
                                </video>
                                    
                                </TableCell>

                                 <TableCell>
                                     Title
                                 </TableCell>
                                 <TableCell>
                                     Description
                                 </TableCell>


                                <TableCell>
                                    <button type="button" class="btn btn-info mr-4" onClick=""
                                        >
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button type="button" class="btn btn-info" onClick=""
                                        >
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </TableCell>
                            </TableRow>
                       
                        </TableBody>
                    </Table>
                    <TablePagination true rowsPerPageOptions={false} component="div" count=""
                        rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage} />
                </TableContainer>
            </Card>

            <br />
            <Dialog open={EditDailogOpen} onClose={()=> setEditDailogOpen(!EditDailogOpen)}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth="fullWidth"
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
                            <input type="text" class="form-control" placeholder="Add Category" value={EditcategoryName}
                                onChange={(e)=> {
                            setEditcategoryName(e.target.value);
                            }}
                            />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    {/* <Button className="button_formatting" onClick={()=> setEditDailogOpen(!EditDailogOpen)}
                        >
                        Cancel
                    </Button>
                    <Button className="button_formatting" onClick={()=> UpdateBrand(EditId)}
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
export default HOC(TestVideos);