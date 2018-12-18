import React from 'react';
import PropTypes from 'prop-types';

const NewInstitutionComponet = (props) => {

    return (
        <form >
            <div className="form-row">
                <div className="col-md-12 mb-12">
                    <p>{props.fromMenu}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Institution name title</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Institution name" value={props.name} required onChange={props.handleChangeOfName}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Image URL</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="Image URL" value={props.image}required onChange={props.handleChangeOfImage}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="City" value={props.city}required onChange={props.handleChangeOfCity}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Category</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="Category" value={props.category}required onChange={props.handleChangeOfCategory}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Type</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="type" value={props.type}required onChange={props.handleChangeOfType}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Type of type</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Type of type" value={props.typeOfType}required onChange={props.handleChangeOfTypeOfType}></input>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Save</button>
            {/* perdaryti pagal sita
            <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}>Save</button>
            */}
        </form>
    );
}

export default NewInstitutionComponet;