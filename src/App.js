/** @format */

import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "../src/Components/Home/Home";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import EmailVerify from "./Components/AdminLogin/EmailVerify";
import Resetpassword from "./Components/AdminLogin/Resetpassword";

//for notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// import ProtectedRoute from "./Components/utils/ProtectedRoute";
import AddCategory from "./Components/Pages/AddCategory/AddCategory";
import CreateCategory from "./Components/Pages/AddCategory/CreateCategory";
import Student from "./Components/Pages/Student";
import AddCoupon from "./Components/Pages/Coupon/AddCoupon";
import CreateCoupon from "./Components/Pages/Coupon/CreateCoupon";
import Course from "./Components/Pages/Course/course";
import createCourse from "./Components/Pages/Course/createCourse";
import PremiumVideos from "./Components/Pages/premiumVideos/PremiumVideos";
import CreatePrmVideos from "./Components/Pages/premiumVideos/createPremiumVideos";
import TestVideos from "./Components/Pages/TestVideos/testVideos";
import CreateTestVideos from "./Components/Pages/TestVideos/createTestVideo";
import AddManger from "./Components/Pages/Manager/AddManager";
import CreateManger from "./Components/Pages/Manager/CreateManger";
import CreateQuestion from "./Components/Pages/QuestionManagement/CreateQuestion";
import AddQuestion from "./Components/Pages/QuestionManagement/AddQuestion";
import Reports from "./Components/Pages/Reports/Reports";
import AdminRevenue from "./Components/Pages/AdminRevenue/AdminRevenue";
import Language from "./Components/Pages/languagesettings/Language";
import Logo from "./Components/Pages/logo/Logo";
import GetFeaturedCourses from "./Components/Pages/featuredCourses/GetFeaturedCourses";
import  AddFeaturedCourses  from "./Components/Pages/featuredCourses/AddFeaturedCourses";
import  GetRatings  from "./Components/Pages/ratings/GetRatings";
import AddRatings from "./Components/Pages/ratings/AddRatings";
import GetPackage from "./Components/Pages/packages/GetPackage";

function App() {
  return (
    <>
      <ReactNotification />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/emailverify" component={EmailVerify} />
        <Route exact path="/resetpassword" component={Resetpassword} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/category" component={AddCategory} />
        <Route exact path="/createcategory" component={CreateCategory} />
        <Route exact path="/coupon" component={AddCoupon} />
        <Route exact path="/createcoupon" component={CreateCoupon} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/create-course" component={createCourse} />
        <Route exact path="/get-featured" component={GetFeaturedCourses} />
        <Route exact path="/get-ratings" component={GetRatings} />
        <Route exact path="/add-ratings" component={AddRatings} />
        <Route exact path="/get-packages" component={GetPackage} />
        <Route exact path="/create-featured" component={AddFeaturedCourses} />
        <Route exact path="/premium-videos" component={PremiumVideos} />
        <Route exact path="/create-premuim-video" component={CreatePrmVideos} />
        <Route exact path="/test-videos" component={TestVideos} />
        <Route exact path="/create/test/videos" component={CreateTestVideos} />
        <Route exact path="/addon/manager" component={AddManger} />
        <Route exact path="/add/manger" component={CreateManger} />
        <Route exact path="/create/qustion" component={CreateQuestion} />
        <Route exact path="/question-management" component={AddQuestion} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/admin-revenue" component={AdminRevenue} />
        <Route exact path="/language" component={Language} />
        <Route exact path="/logo" component={Logo} />
      </Switch>
    </>
  );
}

export default App;
