import { useState } from "react";
import axios from 'axios'

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  // const [date, setDate] = useState(getCurrentDate()); // initialize with current date
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleContactChange = (e) => {
    // Limit contact input to 9 digits
    if (e.target.value.length <= 10) {
      setContact(e.target.value);
    }
  };
  const handleLocationChange = (e) => setLocation(e.target.value);
  // const handleDateChange = (e) => setDate(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleSubmit = (e)=>{
    
    e.preventDefault()
    

    const postData = async function (){
      console.log('dadfad')
      try{
        const {data}= await axios.post(
          'http://139.162.249.220:9292/api/user/registration_data', {
            'email':email,
            'u_name':name,
            'location':location,
            'phone':contact,
          'password':password,
          'role':role,
          'reg_no': '2021'
          }
        )
        console.log(data)
        // window.location.pathname = '/pages/LoginForm'
      }catch(err){
        console.log(err)
      }
      
    }
    postData()
  }
  return (
    <div className="bg-baki bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="bg-green-500 rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Register Information</h2>
        <form className="flex flex-col items-center justify-center" onSubmit={(e)=>handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name of Picker / Organization"
            className="bg-gray-100 rounded-lg px-4 py-2 w-full mb-4"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 rounded-lg px-4 py-2 w-full mb-4"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex justify-between w-full">
            <input
              type="tel"
              placeholder="Contact"
              className="bg-gray-100 rounded-lg px-4 py-2 w-5/12 mr-2"
              value={contact}
              onChange={handleContactChange}
            />
            <select
              className="bg-gray-100 rounded-lg px-4 py-2 w-7/12"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="">Select Location</option>
              <option value="Temeke">Temeke</option>
              <option value="Kinondoni">Kinondoni</option>
              <option value="Kigamboni">Kigamboni</option>
              <option value="Ubungo">Ubungo</option>
              <option value="Kisarawe">Kisarawe</option>
              <option value="Ilala">Ilala</option>
            </select>
          </div>
          {/* <input
            type="date"
            className="bg-gray-100 rounded-lg px-4 mt-3 py-2 w-full mb-4"
            value={date}
            onChange={handleDateChange}
          /> */}
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-100 rounded-lg px-4 py-2 mt-3 w-full mb-4"
            value={password}
            onChange={handlePasswordChange}
          />
          <select
              className="bg-gray-100 rounded-lg px-4 py-2 mt-3 w-full mb-4"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="">Select Role</option>
              <option value="Picker">Picker</option>
              <option value="Organization">Organization</option>
              <option value="Explorer">Explorer</option>
            </select>
          
          <button type='submit'className="bg-black text-green-500 rounded-lg px-4 py-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
