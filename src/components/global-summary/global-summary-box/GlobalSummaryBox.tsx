import React from 'react';

interface GlobalSummaryBoxProps {
    globalData: number[];
    titles: string[];
}

const GlobalSummaryBox = (props: GlobalSummaryBoxProps) => {
    const {globalData, titles} = props;

    return (
        <>
            {
                globalData.map((item, index) => {                    
                    return <div key={index}>
                        <h1>{titles[index]}</h1>
                        <span>{item}</span>
                    </div>
                })
            }
        </>
    );
}

export default GlobalSummaryBox;