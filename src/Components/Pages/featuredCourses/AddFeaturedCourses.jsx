/** @format */

import React, { useEffect, useState } from "react";
import Loder from "../../Loder/Loder";
import HOC from "../../../Common/Hoc";
import { Card, Grid, Button } from "@material-ui/core";
// import Loder from "../../Loder/Loder";
import { getBaseUrl } from "../../utils";
import { showNotificationMsz } from "../../utils/Validation";
import axios from "axios";

const AddFeaturedCourses = (props) => {
  const [isloading, setisloading] = useState(false);
  const [featuredCourseName, setFeaturedCourseName] = useState("");
  const [Instrocter, setInstrocter] = useState("");
  const [Rating, setRating] = useState("");
  const [CourseImg, setCourseImg] = useState("");
  const [CourseVideo, setCourseVideo] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //add Coupon

  const createFeaturedCourse = () => {
    try {
      let url = getBaseUrl() + "api/add/fetured/course";
      setisloading(true);

      const fd = new FormData();
      fd.append("name", featuredCourseName);
      fd.append("instructor", Instrocter);
      fd.append("rating", Rating);
      fd.append("courseimg", CourseImg);
      fd.append("coursevideo", CourseVideo);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data CourseVideo:::", res);
            setisloading(false);
            showNotificationMsz(res.data.message, "success");
          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            showNotificationMsz(error, "danger");
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          showNotificationMsz(e, "danger");
        });
    } catch (error) {}
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="home_padding">
          <div className="content_padding">
            <button
              type="button"
              class="btn btn-info mr-4"
              onClick={() => props.history.goBack()}
            >
              <i class="fa fa-arrow-left"></i>Go Back
            </button>
            <br />
            <Grid className="Component_main_grid p-2 "></Grid>

            <div>
              <Card className=" mb-2 Card_shadow p-3">
                <div className="card_admissiondetails_height">
                  <div className="textfiled_margin">
                    <div className="card_content_instition">
                      <h5 className="text_filed_heading">
                        Add Featured Course
                      </h5>

                      <Grid className="Component_main_grid">
                        <Grid item md={12}>
                          <div className="text_filed_heading">Course Name</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Enter Course Name"
                              autoComplete="off"
                              value={featuredCourseName}
                              onChange={(e) => {
                                setFeaturedCourseName(e.target.value);
                              }}
                            />
                          </div>

                          <div className="text_filed_heading">Instrocter</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Enter instrocter Name"
                              autoComplete="off"
                              value={Instrocter}
                              onChange={(e) => {
                                setInstrocter(e.target.value);
                              }}
                            />
                          </div>
                          <div className="text_filed_heading">Rating</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Enter Rating"
                              autoComplete="off"
                              value={Rating}
                              onChange={(e) => {
                                setRating(e.target.value);
                              }}
                            />
                          </div>
                          <div className="text_filed_heading">
                            Choose Img File
                          </div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="file"
                              className="form-control "
                              placeholder="Enter Name"
                              autoComplete="off"
                              onChange={(e) => {
                                setCourseImg(e.target.files[0]);
                              }}
                            />
                          </div>
                          {/* <div className="text_filed_heading">
                            Choose Video File
                          </div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="file"
                              accept="video/*"
                              className="form-control "
                              placeholder="Enter Name"
                              autoComplete="off"
                              onChange={(e) => {
                                setCourseVideo(e.target.files[0]);
                              }}
                            />
                          </div> */}
                        </Grid>
                      </Grid>
                    </div>
                    <div className="mt-2 pb-3 ">
                      <Button
                        variant="contained"
                        className="button_formatting"
                        onClick={createFeaturedCourse}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Loder loading={isloading} />
    </>
  );
};

export default HOC(AddFeaturedCourses);
