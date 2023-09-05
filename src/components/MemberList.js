const MemberList = ({ add }) => {
  return (
    <div className="m-5">
      <h3>Our New Members:</h3>

      {add.map((member, index) => {
        const { name, email, rol, tecrübe } = member;
        return (
          <div
            key={index}
            className="p-3 bg-info bg-opacity-10 border border-info rounded m-3"
            style={{ width: "28rem", textDecoration: "none" }}
          >
            <div className="d-flex">
              <p className="fw-bold text-danger">{index + 1}.Member :</p>
              <p className="card-link mx-1 fw-bold">Name:</p>
              <p className="card-link">{name}</p>
            </div>
            <div className="d-flex">
              <p className="card-link mx-1 fw-bold">Email:</p>
              <p className="card-link">{email}</p>
            </div>
            <div className="d-flex">
              <p className="card-link mx-1 fw-bold">Rol:</p>
              <p className="card-link">{rol}</p>
            </div>
            <div className="d-flex">
              <p className="card-link mx-1 fw-bold">Tecrübe:</p>
              <p className="card-link">{tecrübe}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MemberList;
