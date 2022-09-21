import React from "react";
import { Route } from "react-router-dom";
import VesselAccountContainer from "../views/VesselAccountContainer";
import VesselAddContainer from "../views/VesselAddContainer";
import VesselEditContainer from "../views/VesselEditContainer";
import VesselListContainer from "../views/VesselListContainer";

const routesVessel = [
  {
    path: "/vessels/list",
    name: "Vessel List",
    component: VesselListContainer,
    exact: true,
  },
  {
    path: "/vessels/add",
    name: "Vessel Add",
    component: VesselAddContainer,
    exact: true,
  },

  {
    path: "/vessels/edit",
    name: "Vessel Edit",
    component: VesselEditContainer,
    exact: true,
  },
  {
    path: "/vessels/vessel-account",
    name: "Vessel Account",
    component: VesselAccountContainer,
    exact: true,
  },
];

function getVesselRoutes() {
  {
    return routesVessel.map((route, index) => (
      <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  }
}
export default getVesselRoutes;
