import React, { useState } from "react";

const NameTitleOutput = (props) => {
  return (
    <div className="flex flex-1 basis-1 flex-col justify-center">
      <h1 className="text-[35px] text-center">
        {`${props.contactInformation.firstName} ${props.contactInformation.lastName}`}
      </h1>
      <h2 className="text-[20px] text-center font-extralight">{`${props.contactInformation.title}`}</h2>
    </div>
  );
};

export default NameTitleOutput;
