import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

//Import Charts
import ReactApexChart from "react-apexcharts";
import "./dashboard.scss";

class SalesAnalytics extends Component {
  state = {
    series: [42, 26],
    options: {
      labels: ["Online Sales", "Offline Sales"],
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ["#5664d2", "#1cbb8c"],
      stroke: {
        show: false,
      },
    },
  };
  render() {
    return (
      <React.Fragment>
        <Card style={{ background: "#1D1D1F" }}>
          <CardBody>
            <div className="float-right">
              <select className="custom-select custom-select-sm">
                <option defaultValue>Jan</option>
                <option value="1">Feb</option>
                <option value="2">March</option>
                <option value="3">Apr</option>
                <option value="3">May</option>
                <option value="3">June</option>
                <option value="3">July</option>
                <option value="3">Aug</option>
                <option value="3">Sep</option>
                <option value="3">Oct</option>
                <option value="3">Nov</option>
                <option value="3">Dec</option>
              </select>
            </div>
            <h4 className="card-title mb-4">Sales Analytics</h4>

            <div id="donut-chart" className="apex-charts">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="230"
              />
            </div>

            <Row>
              <Col xs={6}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-primary font-size-10 mr-1"></i>{" "}
                    Online Sales
                  </p>
                  <h5>42 %</h5>
                </div>
              </Col>
              <Col xs={6}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{" "}
                    Offline Sales
                  </p>
                  <h5>26 %</h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default SalesAnalytics;
