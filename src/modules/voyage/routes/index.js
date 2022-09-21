import React from "react";
import { Route } from "react-router-dom";
import VoyageActivityContainer from "../views/VoyageActivityContainer";
import VoyageActivityCreateContainer from "../views/VoyageActivityCreateContainer";
import VoyageActivityDetailContainer from "../views/VoyageActivityDetailContainer";
import VoyageDetailContainer from "../views/VoyageActivityDetailContainer";
import VoyageListContainer from "../views/VoyageListContainer";
import VoyageListDetailContainer from "../views/VoyageListDetailContainer";
import VoyageAddContainer from "../views/VoyageAddContainer";
import VoyageActivityEditContainer from "../views/VoyageActivityEditContainer";
import VoyageActivityCreateEngineer from "../components/voyage-activity/create/VoyageActivityCreateEngineer";

const routeVoyage = [
  {
    path: "/voyage/list",
    name: "Voyage List",
    component: VoyageListContainer,
    exact: true,
  },
  {
    path: "/voyage/add",
    name: "Voyage Add",
    component: VoyageAddContainer,
    exact: true,
  },
  {
    path: "/voyage/list/:id",
    name: "Voyage List Detail",
    component: VoyageListDetailContainer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity",
    name: "Voyage Activity",
    component: VoyageActivityContainer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity/detail/:id",
    name: "Voyage Activity Detail",
    component: VoyageActivityDetailContainer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity/create/",
    name: "Voyage Activity Create",
    component: VoyageActivityCreateContainer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity/create/engineer",
    name: "Voyage Activity Create By Engineer",
    component: VoyageActivityCreateEngineer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity/edit/:id",
    name: "Voyage Activity Edit",
    component: VoyageActivityEditContainer,
    exact: true,
  },
  {
    path: "/voyage/voyage-activity/create",
    name: "Voyage Activity Create",
    component: VoyageActivityCreateContainer,
    exact: true,
  },
];

function getVoyageRoutes() {
  {
    return routeVoyage.map((route, index) => (
      <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  }
}
export default getVoyageRoutes;
