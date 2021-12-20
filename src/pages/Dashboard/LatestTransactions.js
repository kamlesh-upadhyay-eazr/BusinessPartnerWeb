import React, { Component } from "react";
// import {
//   Col,
//   Dropdown,
//   DropdownMenu,
//   DropdownToggle,
//   DropdownItem,
//   Card,
//   CardBody,
// } from "reactstrap";
// import { Link } from "react-router-dom";
import { Table } from "reactstrap";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import TransactionTableRow from "./TransactionTableRow";
import TranTableHeading from "./TranTableHeading";

// const expandRow = {
//   renderer: (row) => (
//     <>
//       Action :
//       <Link to="#" className="mr-3 text-primary">
//         <i className="mdi mdi-pencil font-size-18"></i>
//       </Link>
//       <Link to="#" className="text-danger">
//         <i className="mdi mdi-trash-can font-size-18"></i>
//       </Link>
//     </>
//   ),
//   showExpandColumn: true,
//   expandByColumnOnly: true,
// };

// const showStatus = () => {
//   if (this.props.status === "Completed") {
//     return (
//       <div className="badge badge-soft-success font-size-12">Completed</div>
//     );
//   } else if (this.props.status === "Refund") {
//     return (
//       <div className="badge badge-soft-primary font-size-12">Refunded</div>
//     );
//   } else {
//     return <div className="badge badge-soft-danger font-size-12">Failed</div>;
//   }
// };
// class LatestTransactions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menu: false,
//     };
//   }

//   render() {
//     const data = {
//       columns: [
//         {
//           dataField: "id",
//           text: "Payment ID",
//         },
//         {
//           dataField: "eazrPayOrderId",
//           text: "Eazrpay Order ID             ",
//         },
//         {
//           dataField: "orderId",
//           text: "Order ID",
//         },
//         {
//           dataField: "amount",
//           text: "Amount",
//         },
//         {
//           dataField: "email",
//           text: "Email ID   ",
//         },
//         {
//           dataField: "contact",
//           text: "Contact",
//         },
//         {
//           dataField: "createdAt",
//           text: "Contact At",
//         },
//         {
//           dataField: "status",
//           text: "Status",
//         },
//       ],
//       rows: [
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-danger font-size-12">Failed</div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-primary font-size-12">
//               Refunded
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           // status: showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//         {
//           id: "pay_foB8deizfgGjLj",
//           eazrPayOrderId: "Order_foB8deijLjR340098",
//           orderId: 1,
//           amount: "&#8377;950",
//           email: "abc.2021@gmail.com",
//           contact: "+919876453243",
//           createdAt: "30 Dec 2021 ,01:50:26pm ",
//           status: (
//             <div className="badge badge-soft-success font-size-12">
//               Completed
//             </div>
//           ),
//           // showStatus(),
//         },
//       ],
//     };

//     const options = {
//       hideSizePerPage: false,
//       hidePageListOnlyOnePage: false,
//       sizePerPageList: [
//         {
//           text: "5th",
//           value: 5,
//         },
//         {
//           text: "10th",
//           value: 10,
//         },
//         {
//           text: "All",
//           value: data.rows.length,
//         },
//       ],
//     };

//     return (
//       <React.Fragment>
//         <Col className="latest-transaction-table">
//           <Card>
//             <CardBody style={{ background: "#1c1c1c" }}>
//               <Dropdown
//                 isOpen={this.state.menu}
//                 toggle={() => this.setState({ menu: !this.state.menu })}
//                 className="float-right"
//               >
//                 <DropdownToggle tag="i" className="arrow-none card-drop">
//                   <i className="mdi mdi-dots-vertical"></i>
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>Sales Report</DropdownItem>

//                   <DropdownItem>Export Report</DropdownItem>

//                   <DropdownItem>Profit</DropdownItem>

//                   <DropdownItem>Action</DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>

//               <h4 className="card-title mb-4">Latest Transactions</h4>

//               <BootstrapTable
//                 keyField="id"
//                 data={data.rows}
//                 columns={data.columns}
//                 // expandRow={expandRow}
//                 pagination={paginationFactory(options)}

//                 // selectRow={selectRow}
//               />
//             </CardBody>
//           </Card>
//         </Col>
//       </React.Fragment>
//     );
//   }
// }

class LatestTransactions extends Component {
  render() {
    return (
      <>
        <Table
          bordered
          hover
          style={{ background: "#1d1d1f", overflowX: "scroll" }}
          className="latest-transaction-table text-center"
        >
          <TranTableHeading />
          {/* <tbody>
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;950"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="30 Dec 2020 ,02:23:12pm"
              status="Completed"
            />
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;700"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="29 Jan 2021 ,05:30:26pm"
              status="Refunded"
            />
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;500"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="23 Jan 2021 ,09:50:26pm"
              status="Failed"
            />
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;950"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="30 Dec 2020 ,02:23:12pm"
              status="Completed"
            />
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;700"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="29 Jan 2021 ,05:30:26pm"
              status="Refunded"
            />
            <TransactionTableRow
              paymentId="pay_foB8deizfgGjLj"
              eazrPayOrderId="Order_foB8deijLjR340098"
              orderId="1"
              amount="&#8377;500"
              emailId="abc.2021@gmail.com"
              contact="+919876453243"
              createdAt="23 Jan 2021 ,09:50:26pm"
              status="Failed"
            />
          </tbody> */}
        </Table>
      </>
    );
  }
}

export default LatestTransactions;
