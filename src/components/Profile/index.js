const ProfileMenu = () => {
  return (
    <div className="text-end">
      <div className="card text-start">
        <div className="card-body ">
          <div
            className="list-group list-group-flush"
          >
            <button className="list-group-item list-group-item-action px-4">
              <small>My Profile</small>
            </button>
            <button className="list-group-item list-group-item-action px-4">
              <small>My Contacts</small>
            </button>
          </div>

          <div className="d-grid">
            <button className="btn btn-secondary">
              <small>Logout</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
