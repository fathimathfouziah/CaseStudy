import React, {  useState } from 'react';
//import './App.css';

const Form1 = (props) => {
    //const { name, setformData } = props;
    //const navigate=useNavigate()
    const [formData,setformData]=useState({fullname:"",mobileno:"",email:"",DOB:"",preferedlocation:"",jobtype:""})
    const handleChange=(event)=>{
        const {name,value}=event.target
        setformData({...formData,[name]:value})
 
    }
  const [applist,setApplist]=useState([])
  async function AddData() {
    const fullname = formData.fullname;
    const mobileno = formData.mobileno;
    const email = formData.email;
    const DOB = formData.DOB;
    const preferedlocation = formData.preferedlocation;
    const jobtype = formData.jobtype;
    
    const response = await fetch(`http://localhost:5001/api/auth/register`, {
        method: 'post',
        body: JSON.stringify({fullname,
            email,
            mobileno,
            jobtype,
            preferedlocation,
            DOB}),
        headers: {
            'Content-Type': 'application/json'
            
        }
    })
    const body = await response.json();
    setApplist(body.userlist)
    
   
    
    //setarticleData(body);
   // setArticleValues({ name: "", title: "" ,description:""});
   // navigate('/article-list')
}
  return(<>
    <div className="wrapper">
      <h1>Registration</h1>
          
          
        <fieldset>
          <label>
            <p>FullName</p>
            <input name="fullname" onChange={handleChange} value={formData.fullname} type="text"/>
          </label>
        </fieldset>
        <div className="row">
            <div className="col-md-3">
                <fieldset>
                    <label>
                    <p>Mobileno</p>
                     <input name="mobileno" onChange={handleChange} value={formData.mobileno} type="text"/>
                     </label>
                </fieldset>
            </div>
            <div className="col-md-3">
                <fieldset>
                    <label>
                    <p>Email</p>
                    <input name="email" onChange={handleChange} value={formData.email} type="text"/>
                    </label>
                </fieldset>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
            <fieldset>
            <label>
            <p>preferedlocation</p>
            <select name="preferedlocation" onChange={handleChange} value={formData.preferedlocation} type="text">
            <option value="">--chooselocation--</option>
            <option value="chennai">chennai</option>
            <option value="banglore">banglore</option>
            <option value="trivandrum">trivandrum</option>
           </select>
         </label>
         </fieldset>
         </div>
            <div className="col-md-3">
            <fieldset>
            <label>
                 <p>DOB</p>
                 <input name="DOB" onChange={handleChange} value={formData.DOB} type="text"/>
            </label>
            </fieldset>
        </div>
       </div>

       <div className="row">
           <div className="col-md-3">
           <fieldset>
            <label>
                 <p>Jobtype</p>
                 <input name="jobtype" onChange={handleChange} value={formData.jobtype} type="text"/>
            </label>
            </fieldset>
            </div>

           <div className="col-md-3">
           <button type="submit" onClick={AddData}>ADD/UPDATE</button>
           </div>
        </div>
      
    </div>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobileno</th>
                <th>Jobtype</th>
                <th>DOB</th>
            </tr>
        </thead>
        {applist.map(item=>(
            <tr>
            <td>{item.fullname}</td>
            <td>{item.email}</td>
            <td>{item.mobileno}</td>
            <td>{item.jobtype}</td>
            <td>{item.DOB}</td>
            </tr>
        ))}
    </table>
 </> )
}
export default Form1