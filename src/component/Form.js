import React, { useState } from 'react';
import FormInput from './FormInput';
import ProfilePictureUpload from './profilePic/ProfilePictureUpload';
import HospitalSearch from './HospitalSearch';
import classes from "./Form.module.css"



function PatientForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profilePicture: null,
    sex: '',
    age: '',
    address: '',
    hospitalNumber: '',
    dateOfRegistration: '',
    dateOfBirth: '',
    lga: '',
    levelOfEducation: '',
    occupation: '',
    religion: '',
    city: '',
    state: '',
    nextOfKinName: '',
    nextOfKinAddress: '',
    nextOfKinGsm: '',
    maritalStatus: '',
    tribe: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePictureChange = (file) => {
    setFormData({ ...formData, profilePicture: file });
  };

  const handleHospitalSearch = (number) => {
    setFormData({ ...formData, hospitalNumber: number });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data Submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      profilePicture: null,
      sex: '',
      age: '',
      address: '',
      hospitalNumber: '',
      dateOfRegistration: '',
      dateOfBirth: '',
      lga: '',
      levelOfEducation: '',
      occupation: '',
      religion: '',
      city: '',
      state: '',
      nextOfKinName: '',
      nextOfKinAddress: '',
      nextOfKinGsm: '',
      maritalStatus: '',
      tribe: ''
    });
  };

  return (
    <>
    <h1 className={classes.heading}>Patient Registration Form</h1>
    <form onSubmit={handleSubmit} className={classes.form_container}  >
      <div className={classes.firstLayer}>
        <ProfilePictureUpload onChange={handleProfilePictureChange}/>
        <HospitalSearch onSearch={handleHospitalSearch} />
        
        <FormInput label="Date of Registration" name="dateOfRegistration" type="date" value={formData.dateOfRegistration} onChange={handleInputChange} />
      </div>
      

      <div className={classes.form_grid}>
      <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      <FormInput label="Middle Name" name="middleName" value={formData.middleName} onChange={handleInputChange} />
      <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      <FormInput label="Email" name="email" value={formData.email} onChange={handleInputChange} placeholder="joe@example.com" />
      <FormInput label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="(000) 000-0000" />
      </div>

      <FormInput label="Address" name="address" value={formData.address} onChange={handleInputChange} className={classes.formAddress} />

      <div className={classes.form_grid}>
      <FormInput label="City" name="city" value={formData.city} onChange={handleInputChange} />
      <FormInput label="State" name="state" value={formData.state} onChange={handleInputChange} />
      <FormInput label="LGA" name="lga" value={formData.lga} onChange={handleInputChange} />
      <div>
        <label>Sex</label>
        <select id="sex" name="sex" value={formData.sex} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="na">N/A</option>
          </select>
      </div>
      
      <FormInput label="Age" name="age" value={formData.age} onChange={handleInputChange} />
      <FormInput type='date' label="Date of Birth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
      <FormInput label="Occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} />
      <FormInput label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} /> 
      <div>
        <label>Marital Status</label>
        <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="female">Married</option>
            <option value="male">Single</option>
            <option value="na">Divorce</option>
            <option value="na">N/A</option>
          </select>
      </div>
      <FormInput label="Tribe" name="tribe" value={formData.tribe} onChange={handleInputChange} /> 
      <FormInput label="Level of Education" name="levelOfEducation" value={formData.levelOfEducation} onChange={handleInputChange} />
      <FormInput label="Name of Next of Kin" name="nextOfKinName" value={formData.nextOfKinName} onChange={handleInputChange} />
      <FormInput label="Address of Next of Kin" name="nextOfKinAddress" value={formData.nextOfKinAddress} onChange={handleInputChange} />
      <FormInput label="GSM of Next of Kin" name="nextOfKinGsm" value={formData.nextOfKinGsm} onChange={handleInputChange} />
      </div>
      
      

      <div className={classes.buttonSubmit_Clear}>
      <button type="submit" >Save Record</button>
      <button type="button" onClick={handleClear}>Clear Record</button>
      </div>
      
    </form>
    </>
    
  );
}

export default PatientForm;