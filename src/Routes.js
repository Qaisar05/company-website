import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/";
import Register from "./components/register/";
import NotFound from "./components/404";
import categorypage from "./components/categorypage";
import Signinpage from "./components/signinpage/index";
import Detailpage from "./components/detailpage/react";
import Registerpage from "./components/registerpage/index";
import Recomededpage from "./components/recomendedpage/index";
import Draftspage from "./components/draftspage/index";
import Myvideopage from "./components/myvideopage/index";
import Mediapage from "./components/mediapage/index";
import Medialistpage from "./components/medialistpage/index";
import Editmediapage from "./components/editmediapage/index";
import Editthemepage from "./components/editthemepage/index";
import Editcustomisepage from "./components/editcustomisepage/index";
import Videotypedd from "./components/videotypedd/index";
import Profilepage from "./components/profilepage/index";
import Base from "./components/base";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categorypage" component={categorypage} />
    <Route path="/registerpage" component={Registerpage} />
    <Route path="/signinpage" component={Signinpage} />
    <Route path="/detailpage" component={Detailpage} />
    <Route path="/recomendedpage" component={Recomededpage} />
    <Route path="/base" component={Base} />
    <Route path="/draftspage" component={Draftspage} />
    <Route path="/myvideopage" component={Myvideopage} />
    <Route path="/mediapage" component={Mediapage} />
    <Route path="/medialistpage" component={Medialistpage} />
    <Route path="/editmediapage" component={Editmediapage} />
    <Route path="/editthemepage" component={Editthemepage} />
    <Route path="/editcustomisepage" component={Editcustomisepage} />
    <Route path="/videotypedd" component={Videotypedd} />
    <Route path="/profilepage" component={Profilepage} />
    <Route component={NotFound} />
  </Switch>
);
