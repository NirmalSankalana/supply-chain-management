import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewAllTable extends Component {
  render() {
    const {
      columnNames,
      tableData,
      editURL,
      onDelete,
      hide = false,
    } = this.props;

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              {columnNames.length > 0 &&
                columnNames.map((name) => (
                  <th key={name}>
                    {name}
                  </th>
                ))}

              <th hidden={hide}>
                Edit
              </th>

              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 &&
              tableData.map((data) => (
                <tr key={data.id}>
                  {columnNames.length > 0 &&
                    columnNames.map((name) => (
                      <td key={name + data.id}>{data[name]}</td>
                    ))}
                  <td hidden={hide}>
                    <Link
                      to={editURL + data.id}
                      className="btn btn-primary btn-sm"
                      role="button"
                    >
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button
                      type="submit"
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default ViewAllTable;