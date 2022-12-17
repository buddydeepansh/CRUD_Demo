import React from "react";
import FormStore from "../../Stores/forms";
import { observer } from "mobx-react";

const AddBtn = observer(() => {
  
  const handleAddMore = () => {
    FormStore.setformModal(true);
  };
  return (
    <div>
      <button type="button" onClick={() => handleAddMore()}>
        Add more data
      </button>
    </div>
  );
});

export default AddBtn;
