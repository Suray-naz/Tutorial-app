import React from 'react';
import axios from "axios";


const EditBilgi = ({item, setItem, getBilgiler}) => {
  const {id,title,description}=item;

  const url="https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const putBilgiler=async(eleman)=>{
    await axios.put(`${url}${eleman.id}/`, eleman);
    getBilgiler();

  }


  return (
    <div className="modal fade" 
    id="editModal" 
    tabIndex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true">
      
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          value={title || ""}
            type="text"
            className="form-control"
            id="title"
            placeholder="Edit your title"
            onChange={(e)=>setItem({...item,title:e.target.value})}
            
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
          value={description || ""}
            type="text"
            className="form-control"
            id="desc"
            placeholder="Edit your Description"
            onChange={(e)=>setItem({...item,description:e.target.value})}
          
          />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=>putBilgiler({id:id,title:title, description:description})}>Save</button>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default EditBilgi