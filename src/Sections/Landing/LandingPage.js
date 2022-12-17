import React from "react";
import AddBtn from "../AddBtn/AddBtn";
// import FormStore from "../../Stores/forms";
import { observer } from "mobx-react";
import DataTable from "../Table/DataTable";
import FormModal from "../FormModal/FormModal";

const LandingPage = observer(() => {
  return (
    <>
      <AddBtn />
      <DataTable />
      <FormModal />
    </>
  );
});

export default LandingPage;
