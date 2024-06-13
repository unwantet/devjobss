import React from 'react'

function FeaturesID({params}) {
    console.log(params.featuresID);
  return (
    <div>
      <h1>
        ID: {params.pId} - featires - {params.featuresID}
      </h1>
    </div>
  );
}

export default FeaturesID