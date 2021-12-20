import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        console.log(this.props.location.pathname);
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
            parent4.childNodes[0].classList.add("mm-show");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li className="menu-title">{this.props.t('Menu')}</li> */}

            <li>
              <Link
                to="/dashboard"
                className="waves-effect my-2 font-size-16 dashboard"
              >
                <i className="fas fa-2x fa-home font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Dashboard")}</span>
                <br />
                {/* <span className="text-muted ml-4">Tap to see your data</span> */}
              </Link>
            </li>

            <li>
              <Link to="/transaction" className=" waves-effect  font-size-16">
                <i className="fas fa-2x fa-money-check-alt font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Transactions")}</span>
                <br />
                {/* <span className="text-muted ml-4">View All Transaction,Receipt,View inside</span> */}
              </Link>
              {/* <ul
                className="sub-menu"
                aria-expanded="false"
                style={{ display: "none" }}
              >
                <li>
                  <Link to="/failed-transaction">
                    {this.props.t("Manage Products")}
                  </Link>
                </li>
                <li>
                  <Link to="/transaction">
                    {this.props.t("Manage Products")}
                  </Link>
                </li>
                <li>
                  <Link to="/refunded-transaction">
                    {this.props.t("Product Category")}
                  </Link>
                </li>
                <li>
                  <Link to="/completed-transaction">
                    {this.props.t("Product Category")}
                  </Link>
                </li>
              </ul> */}
            </li>

            <li>
              <Link
                to="/settlements"
                className="waves-effect my-2 font-size-16"
              >
                <i className="fas fa-2x fa-landmark font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Settlements")}</span>
                <br />

                {/* <span className="text-muted ml-4">Add/Edit Bank Account Details</span> */}
              </Link>
            </li>

                {/* <span className="text-muted ml-4">View Products,Manage Products</span> */}
            {/* <li>
              <Link to="/#" className="has-arrow waves-effect  font-size-16">
                <i className="fas fa-cube font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("My Products")}</span>

              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/my-products">
                    {this.props.t("Manage Products")}
                  </Link>
                </li>
                <li>
                  <Link to="/product-category">
                    {this.props.t("Product Category")}
                  </Link>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <Link to="my-orders" className="waves-effect my-2 font-size-16">
                <i className="fas fa-2x fa-download font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("My Orders")}</span>
              </Link>
            </li> */}
                {/* <span className="text-muted ml-4">All Orders,Delivered,Cancel,Current Orders</span> */}

            {/* <li>
              <Link to="my-bookings" className="waves-effect my-2 font-size-16">
                <i class="fas fa-microscope font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("My Bookings")}</span>
                <span className="text-muted ml-4">All Orders,Delivered,Cancel,Current Orders</span>
              </Link>
            </li> */}

            <li>
              <Link to="/reports" className="waves-effect my-2 font-size-16">
                <i className="far fa-2x fa-chart-bar font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Reports")}</span>
                <br />
                {/* <span className="text-muted ml-4">Settlement , Transaction,Products & Orders</span> */}
              </Link>
            </li>

            <li>
              <Link to="/manage-qr" className="waves-effect my-2 font-size-16">
                <i className="fas fa-2x fa-qrcode font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Manage QR")}</span>
                {/* <span className="text-muted ml-4">Tap to see your QR code</span> */}
              </Link>
            </li>

            {/* <li>
              <Link to="/my-account" className="waves-effect my-2 font-size-16">
                <i className="fas fa-2x fa-user font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("My Account")}</span>
                <br /> */}
            {/* <span className="text-muted ml-4">A/C Setting,Time,Profile</span> */}
            {/* </Link>
            </li> */}

            <li>
              <Link to="/settings" className="waves-effect my-2 font-size-16">
                <i className="fas fa-2x fa-cog font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Settings")}</span>
                <br />
                {/* <span className="text-muted ml-4">Setup Store,Order,transaction,profile</span> */}
              </Link>
            </li>
            <li>
              <Link
                to="/help-and-support"
                className="has-arrow waves-effect font-size-16"
              >
                <i className="fas fa-2x fa-headset font-size-20 mr-2"></i>
                <span className="ml-1">{this.props.t("Help & Supports")}</span>
                {/* <div>
                                    <p>24/7 Business Support,Your Tickets,FAQs</p>
                                    </div> */}
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/need-help">{this.props.t("Need Help ?")}</Link>
                </li>
                <li>
                  <Link to="/faq">{this.props.t("FAQs")}</Link>
                </li>
              </ul>
            </li>

            <li
              className="eazr-footer px-4 my-4 font-size-10 waves-effect"
              style={{
                color: "#fff",
                letterSpacing: "1px",
                fontWeight: "100",
                fontFamily: "Inter",
              }}
            >
              {this.props.t(
                `© ${new Date().getFullYear()}, Eazr Digipayment Pvt Ltd.`
              )}
            </li>
            {/* <li className="ml-5 font-size-16" style={{ color: "#8590a5" }}>
              {this.props.t("Rate Us Now")}
            </li> */}

            {/* <li className="menu-title">{this.props.t('Components')}</li>*/}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent))
);
