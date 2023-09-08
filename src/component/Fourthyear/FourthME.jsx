import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Fourth.css";
import { FourthView } from "./FourthView";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
export const FourthME = () => {
  const [engname, setEngname] = useState("");
  const [currentseat_no, setCurrentSeatNo] = useState("");
  const [engname1, setEngname1] = useState("");
  const [rollno, setRollNo] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [phone_no1, setPhoneno1] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchClicked2, setSearchClicked2] = useState(false);

  const [viewedData, setViewedData] = useState(null);
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const filteredData2 = data2.filter((item) => {
    const engname = item?.engname?.toLowerCase();

    return engname?.includes(searchQuery2?.toLowerCase());
  });
  //searchName
  const filteredData = data.filter((item) => {
    const engname1 = item?.engname1?.toLowerCase();

    return engname1?.includes(searchQuery?.toLowerCase());
  });
  const handleSearchInputChange2 = (event) => {
    setSearchQuery2(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchButtonClick = () => {
    setSearchClicked(true);
  };
  const handleSearchButtonClick2 = () => {
    setSearchClicked2(true);
  };

  useEffect(() => {
    fetchDataAsync2();
  }, []);

  const fetchDataAsync2 = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/student_list_new_fourth_me"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      console.log("fetched data", jsonData);
      setData2(jsonData.students);
      console.log("Fetched data", response.jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  //To add data to table and database
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("engname", engname);
    formData.append("currentseat_no", currentseat_no);
    formData.append("phone_no", phone_no);

    try {
      await fetch(
        "http://127.0.0.1:8000/student_registration/add_student_new_fourth_me_admin",
        {
          method: "POST",
          body: formData,
        }
      );

      setEngname("");
      setCurrentSeatNo("");
      setPhoneno("");
      fetchDataAsync2();
    } catch (error) {
      console.error(error);
    }
  };

  //to show data in table
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/student_list_old_fourth_me"
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
        "http://127.0.0.1:8000/student_registration/add_student_old_fourth_me_admin",
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
  const handleDeleteClick = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/delete_document_new_fourth_me/${studentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updateData = data2.filter((item) => item._id !== studentId);
        setData2(updateData);
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error while deleting item", error);
    }
  };

  const [editContactId, setEditContactId] = useState(null);
  const handleEditFormChange = (event, fieldName, contactId) => {
    const updatedData = data2.map((item) => {
      if (item._id === contactId) {
        return {
          ...item,
          [fieldName]: event.target.value,
        };
      }
      return item;
    });

    setData2(updatedData);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const updateData = {
        engname: data2.find((item) => item._id === editContactId).engname,
        currentseat_no: data2.find((item) => item._id === editContactId)
          .currentseat_no,
        phone_no: data2.find((item) => item._id === editContactId).phone_no,
      };

      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/update_document_new_fourth_me/${editContactId}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateData),
        }
      );

      if (response.ok) {
        const updatedData = data2.map((item) =>
          item._id === editContactId
            ? {
                ...item,
                engname: updateData.engname,
                currentseat_no: updateData.currentseat_no,
                phone_no: updateData.phone_no,
              }
            : item
        );
        setData2(updatedData);
        setEditContactId(null);
      } else {
        console.error("Error editing student");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

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
        `http://127.0.0.1:8000/student_registration/update_document_old_fourth_me/${editContactId1}`,
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
        `http://127.0.0.1:8000/student_registration/delete_document_old_fourth_me/${studentId}`,
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
  const [isPaymentPopupVisible, setIsPaymentPopupVisible] = useState(false);

  const [paymentInfo, setPaymentInfo] = useState({
    engname: "",
    currentseat_no: "",
    email: "",
    fee: "",
  });

  const handlePaymentClick = (data2) => {
    console.log("Payment clicked for", data2._id);

    // Update the paymentInfo state with the data of the selected student
    setPaymentInfo({
      engname: data2.engname,
      currentseat_no: data2.currentseat_no, // Assuming currentseat_no is the roll number
      email: data2.email,
      fee: data2.fee,
    });

    // Show the payment popup
    setIsPaymentPopupVisible(true);
  };

  const handleViewClick = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/view_fourth_me_new/${studentId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();

      const detailedInfo = {
        ...data2.find((item) => item._id === studentId),
        detailedData: jsonData,
      };
      // Pass the fetched data to the Registerform component
      setViewedData(detailedInfo);
      setIsRegisterFormVisible(true);
      document.body.classList.add("no-scroll");
      console.log("data", jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleEditClick = (data2) => {
    console.log("Edit clicked for", data2._id);
    setEditContactId(data2._id);
  };
  const closeModal1 = () => {
    setIsPaymentPopupVisible(false);
    // Remove the "no-scroll" class from the body to show the scrollbar again
    document.body.classList.remove("no-scroll");
  };
  const closeModal = () => {
    setIsRegisterFormVisible(false);
    // Remove the "no-scroll" class from the body to show the scrollbar again
    document.body.classList.remove("no-scroll");
  };

  const sendConfirmationEmail = async () => {
    if (!paymentInfo.email && !paymentInfo.fee) {
      // If email is not available, display a message
      alert(
        "Sorry, your email is not available and please enter Transaction ID"
      );
      return;
    } else if (!paymentInfo.email) {
      // If email is not available, display a message
      alert("Sorry, your email is not available.");
      return;
    } else if (!paymentInfo.fee) {
      // If fee is not available, display a message
      alert("Please enter Transaction ID.");
      return;
    }
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/send_confirmation_email",
        {
          method: "POST",
          body: JSON.stringify({ recipient_email: paymentInfo.email }),
        }
      );

      if (response.ok) {
        alert("Send Confirm message. Look your Email!");
        console.log("Email sent successfully");
        // Optionally, you can close the payment popup or show a success message here
      } else {
        console.error("Failed to send email");
        // Handle the error and provide feedback to the user
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };
  const handleConfirmButtonClick = () => {
    sendConfirmationEmail();
    // Close the payment popup or handle other actions
  };

  return (
    <div className="table">
      <div>
        <Link to={"/fourthchoosemajors"}>
          <MdOutlineKeyboardDoubleArrowLeft
            className="backPage"
            color="blue"
            size={60}
          />
        </Link>
      </div>
      <div class="col-sm-3 mt-5 mb-4 text-gred">
        <h4>
          <b>2022-2023 (Student List)</b>
        </h4>
        <div className="search">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Student"
            aria-label="Search"
            value={searchQuery2}
            onChange={handleSearchInputChange2}
            onClick={handleSearchButtonClick2}
          />
        </div>
      </div>
      <form onSubmit={handleEditFormSubmit}>
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
            {searchClicked2
              ? filteredData2.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td>{item._id}</td>

                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.engname}
                            onChange={(e) =>
                              handleEditFormChange(e, "engname", item._id)
                            }
                          />
                        ) : (
                          item.engname
                        )}
                      </td>

                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.currentseat_no}
                            onChange={(e) =>
                              handleEditFormChange(
                                e,
                                "currentseat_no",
                                item._id
                              )
                            }
                          />
                        ) : (
                          item.currentseat_no
                        )}
                      </td>
                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.phone_no}
                            onChange={(e) =>
                              handleEditFormChange(e, "phone_no", item._id)
                            }
                          />
                        ) : (
                          item.phone_no
                        )}
                      </td>
                      <td>
                        {editContactId === item._id ? (
                          <button
                            className="btn btn-success btn-lg"
                            onClick={handleEditFormSubmit}
                          >
                            Save
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-success btn-lg"
                              onClick={() => handleViewClick(item._id)}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-primary btn-lg"
                              onClick={() => handlePaymentClick(item)}
                            >
                              Payment
                            </button>
                            <button
                              className="btn btn-warning btn-lg"
                              onClick={() => handleEditClick(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={() => handleDeleteClick(item._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                ))
              : data2.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td>{item._id}</td>
                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.engname}
                            onChange={(e) =>
                              handleEditFormChange(e, "engname", item._id)
                            }
                          />
                        ) : (
                          item.engname
                        )}
                      </td>

                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.currentseat_no}
                            onChange={(e) =>
                              handleEditFormChange(
                                e,
                                "currentseat_no",
                                item._id
                              )
                            }
                          />
                        ) : (
                          item.currentseat_no
                        )}
                      </td>
                      <td>
                        {editContactId === item._id ? (
                          <input
                            type="text"
                            value={item.phone_no}
                            onChange={(e) =>
                              handleEditFormChange(e, "phone_no", item._id)
                            }
                          />
                        ) : (
                          item.phone_no
                        )}
                      </td>
                      <td>
                        {editContactId === item._id ? (
                          <button
                            className="btn btn-success btn-lg"
                            onClick={handleEditFormSubmit}
                          >
                            Save
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-success btn-lg"
                              onClick={() => handleViewClick(item._id)}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-primary btn-lg"
                              onClick={() => handlePaymentClick(item)}
                            >
                              Payment
                            </button>
                            <button
                              className="btn btn-warning btn-lg"
                              onClick={() => handleEditClick(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={() => handleDeleteClick(item._id)}
                            >
                              Delete
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
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="engname"
          value={engname}
          required="required"
          placeholder="Enter a name..."
          onChange={(e) => setEngname(e.target.value)}
        />
        <input
          type="text"
          name="currentseat_no"
          value={currentseat_no}
          required="required"
          placeholder="Enter roll no..."
          onChange={(e) => setCurrentSeatNo(e.target.value)}
        />
        <input
          type="text"
          name="phone_no"
          value={phone_no}
          required="required"
          placeholder="Enter a phone number..."
          onChange={(e) => setPhoneno(e.target.value)}
          maxLength={11}
        />

        <button type="submit">Add</button>
      </form>
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
                              className="btn btn-warning btn-lg"
                              onClick={() => handleEditClick1(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={() => handleDeleteClick1(item._id)}
                            >
                              Delete
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
      {isRegisterFormVisible && (
        <div className="register-form-overlay">
          <div className="register-form-container">
            <button onClick={closeModal}>
              <IoMdClose size={25} />
            </button>
            <FourthView isVisible={true} data={viewedData} />
          </div>
        </div>
      )}
      {isPaymentPopupVisible && (
        <div className="payment-popup">
          <div className="payment-popup-content">
            <button className="btnpopup" onClick={closeModal1}>
              <IoMdClose size={20} />
            </button>
            <h3>Payment Information</h3>
            <p>Name: {paymentInfo.engname}</p>
            <p>Roll Number: {paymentInfo.currentseat_no}</p>
            <p>Email: {paymentInfo.email}</p>
            <p>Transaction_ID:{[paymentInfo.fee]}</p>
            <button onClick={handleConfirmButtonClick} className="confirm_btn">
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
