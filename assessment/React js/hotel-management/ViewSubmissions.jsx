import React, { useEffect, useState } from "react";

function ViewSubmissions() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("customers")) ||
      [];

    setCustomers(data);
  }, []);

  const deleteRecord = (index) => {
    const updated = customers.filter(
      (_, i) => i !== index
    );

    setCustomers(updated);

    localStorage.setItem(
      "customers",
      JSON.stringify(updated)
    );
  };

  const filteredData = customers.filter(
    (item) =>
      item.fullName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.checkIn.includes(search)
  );

  return (
    <div className="container mt-4">
      <h2>Guest Records</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Name or Date"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Check In</th>
            <th>Adults</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.checkIn}</td>
                <td>{item.adults}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteRecord(index)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSubmissions;