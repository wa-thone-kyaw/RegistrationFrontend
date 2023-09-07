import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./First.css";
import FirstEdittable from "./FirstEdittable";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export const FirstCivil = () => {
  const [engname1, setEngname1] = useState("");
  const [rollno, setRollNo] = useState("");
  const [phone_no1, setPhoneno1] = useState("");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  //searchName
  const filteredData = data.filter((item) => {
    const engname1 = item?.engname1?.toLowerCase();

    return engname1?.includes(searchQuery?.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchButtonClick = () => {
    setSearchClicked(true);
  };

  //to show data in table
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/first_civil_list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      console.log("fetched data", jsonData);
      setData(jsonData.students);
      console.log("Fetched data", response.jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  //To add data to table and database
  const handleAddFormSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("engname1", engname1);
    formData.append("rollno", rollno);
    formData.append("phone_no1", phone_no1);

    try {
      await fetch(
        "http://127.0.0.1:8000/student_registration/add_student_old_first_civil",
        {
          method: "POST",
          body: formData,
        }
      );

      setEngname1("");
      setRollNo("");
      setPhoneno1("");
      fetchDataAsync();
    } catch (error) {
      console.error(error);
    }
  };

  //delete new civil student

  //Edit Old civil second year
  const [editContactId1, setEditContactId1] = useState(null);
  const handleEditFormChange1 = (event, fieldName, contactId) => {
    const updatedData = data.map((item) => {
      if (item._id === contactId) {
        return {
          ...item,
          [fieldName]: event.target.value,
        };
      }
      return item;
    });

    setData(updatedData);
  };

  const handleEditFormSubmit1 = async (event) => {
    event.preventDefault();
    try {
      const updateData = {
        engname1: data.find((item) => item._id === editContactId1).engname1,
        rollno: data.find((item) => item._id === editContactId1).rollno,
        phone_no1: data.find((item) => item._id === editContactId1).phone_no1,
      };

      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/update_document1/${editContactId1}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateData),
        }
      );

      if (response.ok) {
        const updatedData = data.map((item) =>
          item._id === editContactId1
            ? {
                ...item,
                engname1: updateData.engname1,
                rollno: updateData.rollno,
                phone_no1: updateData.phone_no1,
              }
            : item
        );
        setData(updatedData);
        setEditContactId1(null);
      } else {
        console.error("Error editing student");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleEditClick1 = (data) => {
    console.log("Edit clicked for", data._id);
    setEditContactId1(data._id);
  };
  //end edit old second civil

  //delete old civil student
  const handleDeleteClick1 = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/delete_document1/${studentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updateData = data.filter((item) => item._id !== studentId);
        setData(updateData);
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error while deleting item", error);
    }
  };

  return (
    <div className="table">
      <div>
        <Link to="/firstchoosemajors">
          <MdOutlineKeyboardDoubleArrowLeft
            className="backPage"
            color="blue"
            size={60}
          />
        </Link>
      </div>
      {/* new_civil_second_year_table */}
      <div class="col-sm-3 mt-5 mb-4 text-gred">
        <h4>
          <b>2021-2022 (Exam Result)</b>
        </h4>
        <div className="search">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Student"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClick={handleSearchButtonClick}
          />
        </div>
      </div>
      <form onSubmit={handleEditFormSubmit1}>
        <table>
          <thead>
            <tr className="header">
              <th>ID</th>
              <th>Name</th>
              <th>Roll-no</th>
              <th>Phone-no</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchClicked
              ? filteredData.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td>{item._id}</td>

                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.engname1}
                            onChange={(e) =>
                              handleEditFormChange1(e, "engname1", item._id)
                            }
                          />
                        ) : (
                          item.engname1
                        )}
                      </td>

                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.rollno}
                            onChange={(e) =>
                              handleEditFormChange1(e, "rollno", item._id)
                            }
                          />
                        ) : (
                          item.rollno
                        )}
                      </td>
                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.phone_no1}
                            onChange={(e) =>
                              handleEditFormChange1(e, "phone_no1", item._id)
                            }
                          />
                        ) : (
                          item.phone_no1
                        )}
                      </td>
                      <td>
                        {editContactId1 === item._id ? (
                          <button
                            className="btn btn-success btn-lg"
                            onClick={handleEditFormSubmit1}
                          >
                            Save
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={() => handleDeleteClick1(item._id)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-warning btn-lg"
                              onClick={() => handleEditClick1(item)}
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                ))
              : data.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td>{item._id}</td>
                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.engname1}
                            onChange={(e) =>
                              handleEditFormChange1(e, "engname1", item._id)
                            }
                          />
                        ) : (
                          item.engname1
                        )}
                      </td>

                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.rollno}
                            onChange={(e) =>
                              handleEditFormChange1(e, "rollno", item._id)
                            }
                          />
                        ) : (
                          item.rollno
                        )}
                      </td>
                      <td>
                        {editContactId1 === item._id ? (
                          <input
                            type="text"
                            value={item.phone_no1}
                            onChange={(e) =>
                              handleEditFormChange1(e, "phone_no1", item._id)
                            }
                          />
                        ) : (
                          item.phone_no1
                        )}
                      </td>
                      <td>
                        {editContactId1 === item._id ? (
                          <button
                            className="btn btn-success btn-lg"
                            onClick={handleEditFormSubmit1}
                          >
                            Save
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={() => handleDeleteClick1(item._id)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-warning btn-lg"
                              onClick={() => handleEditClick1(item)}
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                ))}
          </tbody>
        </table>
      </form>
      <h3>Add New Student</h3>
      <form onSubmit={handleAddFormSubmit1}>
        <input
          type="text"
          name="engname1"
          value={engname1}
          required="required"
          placeholder="Enter a name..."
          onChange={(e) => setEngname1(e.target.value)}
        />
        <input
          type="text"
          name="rollno"
          value={rollno}
          required="required"
          placeholder="Enter roll no..."
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="text"
          name="phone_no1"
          value={phone_no1}
          required="required"
          placeholder="Enter a phone number..."
          onChange={(e) => setPhoneno1(e.target.value)}
          maxLength={11}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FirstCivil;
