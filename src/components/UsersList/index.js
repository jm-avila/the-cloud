import React from "react";
import Table from "./Table";
import generateRows from "./generateRows";
import dummyData from "./data.json";

// pages query => ?page=2
function UsersList() {
  const columns = ["Nombre", "Apellido", "Detalles"];
  const rows = generateRows(dummyData.data);

  return (
    <div>
      Users List
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default UsersList;
