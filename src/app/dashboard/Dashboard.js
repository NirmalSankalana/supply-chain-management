import React, { Component } from 'react';
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line, Bar, Radar } from 'react-chartjs-2';

import { ProgressBar, Dropdown } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart';
import { VectorMap } from "react-jvectormap"


function Dashboard() {




<<<<<<< HEAD
  return (
    <div>
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Dashboard</h4>
=======
  

    const salesStatisticsData = {
      labels: ["Jan 1", "Jan 7", "Jan 14", "Jan 21", "Jan 28", "Feb 4", "Feb 11", "Feb 18"],
      datasets: [{
        label: 'Revenue',
        data: Datas,
        borderColor: '#8862e0',
        backgroundColor: gradientBar5,
        borderWidth: 2,
        fill: true
      }, {
        label: 'Sales',
        data: Datas1,
        borderColor: '#5ed2a1',
        backgroundColor: gradientBar6,
        borderWidth: 2,
        fill: true
      }]
    };

    this.setState(salesStatisticsData);



    const netProfitData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
            label: "Sales",
            backgroundColor: 'rgba(88, 208, 222,0.8)',
            borderColor: 'rgba(88, 208, 222,0.8)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [54, 45, 60, 70, 54, 75, 60, 54]
          }, {
            label: "Orders",
            backgroundColor: 'rgba(150, 77, 247,1)',
            borderColor: 'rgba(150, 77, 247,1)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(150, 77, 247,1)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [65, 75, 70, 80, 60, 80, 36, 60]
          }]
    };
    const totaltransactionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: 'Sessions',
        data: [320, 280, 300, 280, 300, 270, 350],
        backgroundColor: gradientBar7,
        borderColor: '#fa394e',
        borderWidth: 0,
        pointBackgroundColor: "#fa394e",
        pointRadius: 7,
        pointBorderWidth: 3,
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#fa394e",
        pointHoverBorderColor: "#fa394e",
        pointHoverBorderWidth: 2,
        pointHitRadius: 7,
      }]
    };
    this.setState({visitChartData: visitData, impressionChartData:impressionData, conversionChartData:conversionData, downloadChartData:downloadData, salesStatisticsChartData:salesStatisticsData, netProfitChartData:netProfitData, totaltransactionChartData:totaltransactionData} )
  }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
 
  render () {
    // console.log(localStorage.getItem('token'))
    return (
      <div>
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Dashboard</h4>
              <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                <ul className="quick-links">
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>ICE Market data</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>Own analysis</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>Historic market data</a></li>
                </ul>
                <ul className="quick-links ml-auto">
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>Settings</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>Analytics</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}>Watchlist</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="page-header-toolbar">
              <div className="btn-group toolbar-item" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-left"></i></button>
                <button type="button" className="btn btn-secondary">03/02/2019 - 20/08/2019</button>
                <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-right"></i></button>
              </div>
              <div className="filter-wrapper">
                <div className="dropdown toolbar-item">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1">
                    All Day
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Last Day</Dropdown.Header>
                      <Dropdown.Item>Last Month</Dropdown.Item>
                      <Dropdown.Item>Last Year</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <a href="!#" onClick={evt =>evt.preventDefault()} className="advanced-link toolbar-item">Advanced Options</a>
              </div>
              <div className="sort-wrapper justify-content-between">
              <button type="button" className="btn btn-primary">New</button>
                <Dropdown>
                  <Dropdown.Toggle variant="btn btn-secondary dropdown-toggle  toolbar-item" id="dropdownMenuButton2">
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>Export as PDF</Dropdown.Header>
                    <Dropdown.Item>Export as DOCX</Dropdown.Item>
                    <Dropdown.Item>Export as CDR</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
>>>>>>> d68ae374d4f22e17291b37c1e11299db7b0b5d8a
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;