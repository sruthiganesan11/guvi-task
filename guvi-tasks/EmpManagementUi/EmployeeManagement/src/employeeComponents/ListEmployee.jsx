import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  deleteEmployee,
  getAllEmployee,
  getEmployee,
} from "../service/EmpService";
import { isAdminUser } from "../service/AuthService";

const ListEmployee = () => {
  const [employees, setEmployee] = useState([]);
  const navigate = useNavigate();

  const isAdmin = isAdminUser();

  useEffect(() => {
    listEmployee();
  }, []);

  const listEmployee = async () => {
    try {
      const response = await getAllEmployee();
      setEmployee(response.data);
      console.log(employees);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewEmployee = async () => {
    navigate("/addEmployee");
  };

  const updateEmployee = async (id) => {
    navigate(`/updateEmployee/${id}`);
  };

  const removeEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);
      listEmployee();
    } catch (error) {
      console.log(error);
    }
  };

  const viewEmployee = async (id) => {
    try {
      const response = await getEmployee(id);
      navigate(`/viewEmployee/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div className="offset-lg-3 col-lg-6">
          <div className="listContainer">
            <div className="card">
              <div className="card-title">
                <h2 className="text-center">List Of Employee</h2>
              </div>
              <div className="card-body">
                {isAdmin && (
                  <button
                    className="btn btn-primary mb-2"
                    onClick={addNewEmployee}
                  >
                    Add Employee
                  </button>
                )}

                <div>
                  <table className="table table-bordered table-hover shadow">
                    <thead className="table-head">
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.firstName}</td>
                          <td>{employee.lastName}</td>
                          <td>{employee.email}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => viewEmployee(employee.id)}
                            >
                              View
                            </button>
                            {isAdmin && (
                              <button
                                className="btn btn-danger"
                                style={{ marginLeft: "10px" }}
                                onClick={() => removeEmployee(employee.id)}
                              >
                                Delete
                              </button>
                            )}

                            {isAdmin && (
                              <button
                                className="btn btn-info"
                                style={{ marginLeft: "10px" }}
                                onClick={() => updateEmployee(employee.id)}
                              >
                                Update
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployee;
