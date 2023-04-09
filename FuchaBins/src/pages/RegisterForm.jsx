import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleContactChange = (e) => {
    // Limit contact input to 9 digits
    if (e.target.value.length <= 9) {
      setContact(e.target.value);
    }
  };
  const handleLocationChange = (e) => setLocation(e.target.value);

  return (
    <div className="bg-baki bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="bg-green-500 rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Register Information</h2>
        <form className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Name of Picker / Organization"
            className="bg-gray-100 rounded-lg px-4 py-2 w-full mb-4"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="date"
            className="bg-gray-100 rounded-lg px-4 py-2 w-full mb-4"
            value={date}
            onChange={handleDateChange}
          />
          <div className="relative w-full mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              +255
            </span>
            <input
              type="tel"
              className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 w-full"
              value={contact}
              onChange={handleContactChange}
            />
          </div>
          <select
            className="bg-gray-100 rounded-lg px-4 py-2 w-full mb-4"
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
          <button className="bg-black text-green-500 rounded-lg px-4 py-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
