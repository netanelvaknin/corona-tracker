import React, { useEffect, useState } from "react";
import GlobalSummary from '../../components/global-summary/GlobalSummary';

const Global = () => {
    const [globalData, setGlobalData] = useState<any>([]);
    const { cases, deaths, recovered } = globalData;

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(response => response.json())
            .then(data => setGlobalData(data))
    }, []);

    return (
      <>
        <GlobalSummary
          titles={["מקרי הדבקות", "מקרי מוות", "מחלימים"]}
          globalData={[cases, deaths, recovered]}
        />
      </>
    );
}

export default Global;