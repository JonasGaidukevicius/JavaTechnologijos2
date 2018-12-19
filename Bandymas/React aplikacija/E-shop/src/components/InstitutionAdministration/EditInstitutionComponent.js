import React from 'react';
import PropTypes from 'prop-types';

const EditInstitutionComponet = (props) => {
    
    return (
        <form >
            <div className="form-row">
                <div className="col-md-12 mb-12">
                    <p>{props.fromMenu}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Institution name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="" value={props.currentName} required onChange={props.handleChangeOfName}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Image</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="" value={props.currentImage} required onChange={props.handleChangeOfImage}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="" value={props.currentCity} required onChange={props.handleChangeOfCity}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Category</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="" value={props.currentCategory} required onChange={props.handleChangeOfCategory}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Type</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="" value={props.currentType} required onChange={props.handleChangeOfType}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault06">Type of type</label>
                    <input type="text" className="form-control" id="validationDefault06" placeholder="" value={props.currentTypeOfType} required onChange={props.handleChangeOfTypeOfType}></input>
                </div>
              
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Save</button>
           
                <button className="btn btn-primary" onClick={props.handleDelete}>Delete</button>
            
        </form>
    );
}

export default EditInstitutionComponet;