import { useState } from "react";

const Form = ({ addNewMember }) => {
  const [memberList, setMemberList] = useState({
    name: "",
    email: "",
    rol: "",
    tecrübe: "0",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setMemberList({ ...memberList, [name]: value });
  };

  console.log(memberList);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMember(memberList);
    setMemberList({
      name: "",
      email: "",
      rol: "",
      tecrübe: "0",
    });
  };

  return (
    <div className="m-5">
      <h1>Team Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Full name"
            onChange={changeHandler}
            value={memberList.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={changeHandler}
            value={memberList.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rol">Rol:</label>
          <input
            type="text"
            className="form-control"
            id="rol"
            name="rol"
            placeholder="İş"
            onChange={changeHandler}
            value={memberList.rol}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tecrübe">Tecrübe:</label>
          <select
            className="form-control"
            id="tecrübe"
            name="tecrübe"
            onChange={changeHandler}
            value={memberList.tecrübe}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
