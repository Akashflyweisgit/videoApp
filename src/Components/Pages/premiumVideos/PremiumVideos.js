/** @format */

import React, { useState, useEffect } from "react";
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
import { getBaseUrl } from "../../utils";
import { showNotificationMsz } from "../../utils/Validation";
import axios from "axios";
import { Button } from "react-bootstrap";

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

function PremiumVideos(props) {
  const [isupdated, setisupdated] = useState(false);
  // const [isloading, setisloading] = useState(false);
  const [video, setVideo] = useState([]);
  const [EditDailogOpen, setEditDailogOpen] = useState("");
  // const [EditcategoryName, setEditcategoryName] = useState(false);
  const [isloading, setisloading] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editId, setEditId] = useState("");
  const [state, setEdit] = useState("");

  // const token = localStorage.getItem("token");

  const EditVideoData = (row) => {
    setEditDailogOpen(!EditDailogOpen);
    setEditTitle(row.title);
    setEditDesc(row.editDesc);
    setEditId(row._id);
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   let url = getBaseUrl() + "api/get/course";

  //   axios
  //     .get(url)
  //     .then(
  //       (res) => {
  //         console.log("data viewCourse:::", res);

  //         setVideo(res.data.getCourse);
  //       },

  //       (error) => {
  //         setisloading(false);
  //         console.log("data response error:::", error);
  //       }
  //     )
  //     .catch((e) => {
  //       setisloading(false);
  //       console.log("data response error:::", e);
  //     });
  // }, [isupdated]);

  const getVideo = () => {
    let url = getBaseUrl() + "api/get/course";

    axios
      .get(url)
      .then(
        (res) => {
          console.log("data viewCourse:::", res.data.getCourse);

          setVideo(res.data.getCourse);
        },

        (error) => {
          setisloading(false);
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        setisloading(false);
        console.log("data response error:::", e);
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  console.log("course data", video);

  const updateVideoData = (ID) => {
    let id = ID;
    setisloading(true);
    let url = `https://videoapp-2020.herokuapp.com/api/edit/course/${id}`;
    let temp = {
      title: editTitle,
      desc: editDesc,
    };

    axios
      .patch(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          setisupdated(!isupdated);
          showNotificationMsz(res.data.msg, "success");
          setEditDailogOpen(!EditDailogOpen);
          setisloading(false);
        },

        (error) => {
          console.log("data response error:::", error);
          showNotificationMsz(error, "danger");
          setisloading(false);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
        showNotificationMsz(e, "danger");
        setisloading(false);
      });
  };

  // const deleteVideoData = (row) => {
  //   let id = row._id;
  //   setisloading(false);
  //   let url = getBaseUrl() + `api/delete/course/${id}`;
  //   axios
  //     .delete(url)
  //     .then(
  //       (res) => {
  //         console.log("data response:::", res);
  //         setisupdated(!isupdated);
  //         showNotificationMsz(res.data.msg, "success");
  //         setisloading(false);
  //       },

  //       (error) => {
  //         console.log("data response error:::", error);
  //         showNotificationMsz(error, "danger");
  //         setisloading(false);
  //       }
  //     )
  //     .catch((e) => {
  //       console.log("data response error:::", e);
  //       showNotificationMsz(e, "danger");
  //       setisloading(false);
  //     });
  // };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "https://videoapp-2020.herokuapp.com/api/delete/course/" + id
      );
      console.log("delete::", res);
      console.log("id", id);
      getVideo();
    } catch (e) {
      console.log("All error:::", e);
    }
  };

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
  const filterData = video.filter((event) => {
    return event.name?.toLowerCase().indexOf(titlename?.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  return (
    <>
      <div className="home_padding">
        <div className="content_padding">
          <Grid className="Component_main_grid mb-3">
            <Grid item md={9}>
              <h3 className="mb-2">Premium Videos</h3>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.push("/create-premuim-video")}
              >
                <i class="fa fa-plus"></i> Create
              </button>
              <button
                type="button"
                class="btn btn-info mr-4"
                onClick={() => props.history.goBack()}
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
                  <input
                    value={titlename}
                    onChange={(e) => {
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
                  {(rowsPerPage > 0
                    ? filterData.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filterData
                  ).map((row) => (
                    <TableRow>
                      <TableCell>
                        <video width="220" height="140" controls>
                          <source
                            src={getBaseUrl() + row.courseVideo}
                            type="video/mp4"
                          />
                          {/* <source src="movie.ogg" type="video/ogg" /> */}
                          Your browser does not support the video tag.
                        </video>
                      </TableCell>

                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>

                      <TableCell>
                        <button
                          type="button"
                          class="btn btn-info mr-4"
                          onClick={() => EditVideoData(row)}
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-info"
                          onClick={() => handleDelete(row._id)}
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                count=""
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>

          <br />
          <Dialog
            open={EditDailogOpen}
            onClose={() => setEditDailogOpen(!EditDailogOpen)}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Edit Video Data
              <span className="float-right icon_color"></span>
            </DialogTitle>
            <DialogContent>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"></label>
                <div class=" col-md-12">
                  <label for="inputPassword4">Edit Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Add Category"
                    value={editTitle}
                    onChange={(e) => {
                      setEditTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"></label>
                <div class=" col-md-12">
                  <label for="inputPassword4">Edit Description</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Add Category"
                    value={editDesc}
                    onChange={(e) => {
                      setEditDesc(e.target.value);
                    }}
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className="button_formatting"
                onClick={() => setEditDailogOpen(!EditDailogOpen)}
              >
                Cancel
              </Button>
              <Button
                className="button_formatting"
                onClick={() => updateVideoData(editId)}
              >
                Upload
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {/* <Loder loading={isloading} /> */}
    </>
  );
}
export default HOC(PremiumVideos);
