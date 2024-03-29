/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../_helpers";
import { GetMenuListsByPermission } from "../../../../../../app/modules/Auth/_redux/menu-permission/authMenuPermissionAction";

export function AsideMenuList({ layoutProps }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const getMenuItemActive = (url) => {
    return checkIsActive(location, url)
      ? " menu-item-active menu-item-open "
      : "";
  };

  useEffect(() => {
    dispatch(GetMenuListsByPermission());
  }, [dispatch]);

  const menuList = useSelector((state) => state.menu.menuList);
  console.log("menuList", menuList);

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Modules */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Modules</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {menuList &&
          menuList.map((menu, index) => (
            <>
              {/*begin::1 Level*/}

              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  menu.moduleRouteUrl
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink
                  className="menu-link menu-toggle"
                  to={menu.moduleRouteUrl}
                >
                  <span className="svg-icon menu-icon">
                    <SVG src={toAbsoluteUrl(menu.moduleImageIcon)} />
                  </span>
                  <span className="menu-text">{menu.moduleName}</span>
                  <i className="menu-arrow" />
                </NavLink>

                {/* Sub Menus of Module */}
                {menu.subModules.map((subMenu, subIndex) => (
                  <>
                    <div className="menu-submenu ">
                      <i className="menu-arrow" />
                      <ul className="menu-subnav">
                        <li
                          className="menu-item  menu-item-parent"
                          aria-haspopup="true"
                        >
                          <span className="menu-link">
                            <span className="menu-text">{menu.menuName}</span>
                          </span>
                        </li>

                        {/* Inputs */}
                        {/*begin::2 Level*/}
                        <li
                          className={`menu-item menu-item-submenu ${getMenuItemActive(
                            subMenu.subModuleRouteUrl
                          )}`}
                          aria-haspopup="true"
                          data-menu-toggle="hover"
                        >
                          <NavLink
                            className="menu-link menu-toggle"
                            to="/google-material/inputs"
                          >
                            <i className={subMenu.subModuleIcon}>
                              <span />
                            </i>
                            <span className="menu-text">
                              {subMenu.subModuleName}
                            </span>
                            <i className="menu-arrow" />
                          </NavLink>
                          <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                              {subMenu.features.map(
                                (featureMenu, featureIndex) => (
                                  <>
                                    {/*begin::3 Level*/}
                                    <li
                                      className={`menu-item  ${getMenuItemActive(
                                        featureMenu.featureRouteUrl
                                      )}`}
                                      aria-haspopup="true"
                                    >
                                      <NavLink
                                        className="menu-link"
                                        to={featureMenu.featureRouteUrl}
                                      >
                                        <i className={featureMenu.featureIcon}>
                                          <span />
                                        </i>
                                        <span className="menu-text">
                                          {featureMenu.featureName}
                                        </span>
                                      </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                  </>
                                )
                              )}
                            </ul>
                          </div>
                        </li>
                        {/*end::2 Level*/}
                      </ul>
                    </div>
                  </>
                ))}
              </li>

              {/*end::1 Level*/}
            </>
          ))}

        {/* Helper Components */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Helper Components</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Error Pages */}
        {/* All */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/react-bootstrap"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
            </span>
            <span className="menu-text">All</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">All</span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/alert"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/alert">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Alerts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/badge"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/badge">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Badge</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/breadcrumb"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/breadcrumb"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Breadcrumb</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/buttons"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/buttons">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Buttons</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/button-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/button-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Button Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/cards"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/cards">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Cards</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/carousel"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/carousel">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Carousel</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/dropdowns"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/dropdowns"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Dropdowns</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/forms"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/forms">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Forms</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/input-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/input-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Input Group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/images"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/images">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Images</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/figures"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/figures">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Figures</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/jumbotron"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/jumbotron"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Jumbotron</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/list-group"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/list-group"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">List group</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/modal"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/modal">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Modal</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/navbar"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/navbar">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navbar</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/overlays"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/overlays">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Overlays</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/pagination"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink
                    className="menu-link"
                    to="/react-bootstrap/pagination"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Pagination</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/popovers"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/popovers">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Popovers</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/progress"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/progress">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Progress</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/spinners"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/spinners">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Spinners</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/table"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/table">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Table</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tabs"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tabs">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tabs</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/tooltips"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Tooltips</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/*begin::2 Level*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/react-bootstrap/toasts"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/react-bootstrap/toasts">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Toasts</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}

                {/* Navigation */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu  ${getMenuItemActive(
                    "/google-material/navigation"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/navigation"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Navigation</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/bottom-navigation"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/bottom-navigation"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Bottom Navigation</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/breadcrumbs"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/breadcrumbs"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Breadcrumbs</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/drawern"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/drawer"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Drawers</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/links"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/links"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">NavLinks</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/menus"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/menus"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Menus</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/steppers"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/steppers"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Steppers</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/navigation/tabs"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/navigation/tabs"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Tabs</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}

                {/* Surfaces */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/surfaces"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/surfaces"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Surfaces</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/surfaces/app-bar"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/surfaces/app-bar"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">App Bar</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/surfaces/paper"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/surfaces/paper"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Paper</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/surfaces/cards"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/surfaces/cards"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Cards</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/surfaces/expansion-panels"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/surfaces/expansion-panels"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Expansion Panels</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}

                {/* Feedback */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/feedback"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/feedback"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Feedback</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/feedback/progress"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/feedback/progress"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Progress</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/feedback/dialogs"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/feedback/dialogs"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Dialogs</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/feedback/snackbars"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/feedback/snackbars"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Snackbars</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}

                {/* Data Display */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/data-displays"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/data-displays"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Data Display</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/avatars"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/avatars"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Avatars</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/badges"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/badges"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Badges</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/chips"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/chips"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Chips</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/dividers"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/dividers"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Dividers</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/icons"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/icons"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Icons</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/lists"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/lists"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Lists</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/tables"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/tables"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Tables</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/tooltips"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/tooltips"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Tooltips</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/data-displays/typography"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/data-displays/typography"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Typography</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}

                {/* Utils */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/utils"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/utils"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Utils</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/click-away-listener"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/click-away-listener"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Click Away Listener</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/no-ssr"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/no-ssr"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">No SSR</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/popover"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/popover"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Popover</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/popper"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/popper"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Popper</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/portal"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/portal"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Portal</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/transitions"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/transitions"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Transitions</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/utils/use-media-query"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/utils/use-media-query"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">useMediaQuery</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}

                {/* Layout */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/layout"
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/layout"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Layout</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/layout/box"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/layout/box"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Box</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/layout/container"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/layout/container"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Container</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/layout/grid"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/layout/grid"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Grid</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/layout/grid-list"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/layout/grid-list"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Grid list</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}

                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item ${getMenuItemActive(
                          "/google-material/layout/hidden"
                        )}`}
                        aria-haspopup="true"
                      >
                        <NavLink
                          className="menu-link"
                          to="/google-material/layout/hidden"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">Hidden</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}
              </ul>
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/error"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/error">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Error Pages</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 1</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v2")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v2">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page -2</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v3")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v3">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 3</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v4")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v4">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 4</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v5")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v5">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 5</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/error/error-v6">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Error Page - 6</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
