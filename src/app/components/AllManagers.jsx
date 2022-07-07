import React, { Component } from "react";
import { Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import managerServices from '../../services/admin/managerServices';
import ViewAllTable from "./common/ViewAllTable";




export class Manager extends Component {
    // state = {
    //     isRedirect: false,
    //     columnNames: ["id", "Start city", "End city"],
    //     tableData: [],
    // };

    // componentDidMount = async () => {
    //     const tableData = [];
    //     try {
    //         const response = await managerServices.getDeliveryRoutes();

    //         if (response.status === 200) {
    //             if (response.data.code === 200) {
    //                 const response_data = response.data.data;
    //                 if (response_data.length > 0) {
    //                     for (let i = 0; i < response_data.length; i++) {
    //                         let row = {
    //                             id: response_data[i].id,
    //                             "Start city": response_data[i].start_city,
    //                             "End city": response_data[i].end_city,
    //                         };
    //                         tableData.push(row);
    //                     }
    //                     this.setState({ tableData, isRedirect: false });
    //                 }
    //             } else {
    //                 this.setState({ isRedirect: true });
    //                 Toast.error("Error occured!");
    //             }
    //         } else {
    //             this.setState({ isRedirect: true });
    //             Toast.error("Error occured!");
    //         }
    //     } catch (error) {
    //         this.setState({ isRedirect: true });
    //         Toast.error("Error occured!");
    //     }
    // };

    render() {
        // if (this.state.isRedirect)
        //     return <Redirect to="/manager/all-managers" />;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Managers</h4>
                        <div className="table-responsive">
                            hehe
                            {/* <ViewAllTable
                                columnNames={this.state.columnNames}
                                tableData={this.state.tableData}
                                editURL="edit-route/"
                                onDelete={this.handleDelete}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Manager;