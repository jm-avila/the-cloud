import React from "react";
import Table from "./Table";
import dummyData from "./data.json";

// pages query => ?page=2
function UsersList() {
  const columns = ["Nombre", "Apellido"];
  const rows = formatData(dummyData.data);
  function formatData(data) {
    return data.map(({ first_name, last_name }) => [first_name, last_name]);
  }

  return (
    <div>
      Users List
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default UsersList;
