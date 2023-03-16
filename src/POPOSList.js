import React from 'react';
import POPOSSpace from './POPOSSpace';
import data from './data/Homedata.json'

function DataList() {

    const sectiondata= data.map((obj) => {
      return (
        <POPOSSpace
            title={obj.section1.title}
            subtitle={obj.section1.subtitle}
            images={obj.section1.images[0]}
        />
      )
    })
  
    return (
      <div className="POPOSList">
        { sectiondata }
      </div>
    )
  }
  
  export default DataList