import React from "react";
import { Link } from 'react-router-dom';

const FourthReadonly = ({ contact, handleEditClick, handleDeleteClick,}) => {
  return (
    <tr>
      <td>{engname}</td>
      <td>{rollno}</td>
      <td>{phoneno}</td>
      
      <td>
     <Link to ="/fourhtview"> <button type="button" class='btn btn-success btn-lg'>
          View
        </button></Link>
        <button
          type="button" class='btn btn-primary btn-lg'
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" class='btn btn-danger btn-lg' onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default FourthReadonly;