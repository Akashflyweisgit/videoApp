/** @format */

import React, { useEffect } from "react";
import HOC from "../../Common/Hoc";
import { withRouter } from "react-router-dom";
import { Card } from "@material-ui/core";

import "./Home.css";
const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //local array

  const home = [
    // { show: "Orders", link: "orders", data: "20" },
    // { show: "Customers ", link: "customers", data: "160" },
    { show: "Students", link: "student" },
    { show: "Category", link: "category" },
    { show: "Create Course", link: "course" },
    { show: "Premium Videos", link: "premium-videos" },
    { show: "Coupons", link: "coupon" },
    { show: "Test Videos", link: "test-videos" },
    //{ show: "AddOn Manger", link: "addon/manager" },
    //{ show: "Enrollment History", link: "enrollment-history" },
    //{ show: "Question management", link: "question-management" },
    { show: "Reports", link: "reports" },
    //{ show: "Admin Revenue", link: "admin-revenue" },
    //{ show: "Messages", link: "messages" },
    //{ show: "Addons", link: "addons" },
    // { show: "Addon Manager", link: "addon-manager" },
  ];
  return (
    <div className="home_padding">
      <div className="content_padding_home">
        <div className="main_div ">
          <div className="container">
            <div className="row">
              {home.map((item, index) => (
                <div className="col-md-4  col-lg-4">
                  <Card
                    className="main_card Card_shadow "
                    onClick={() => props.history.push(`${item.link}`)}
                  >
                    <div className="main_content d-flex justify-content-between">
                      <p>
                        <span className="">
                          <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                        </span>
                        {item.show}
                      </p>
                      <span className="">{item.data}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HOC(Home));
