import React from 'react';
import {
  SummaryBox,
  SummaryBoxTitle,
  SummaryBoxSubtitle
} from "./GlobalSummaryBoxStyle";

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
                    return (
                      <SummaryBox key={index}>
                        <SummaryBoxTitle variant="h1">
                          {titles[index]}
                        </SummaryBoxTitle>
                        <SummaryBoxSubtitle variant="h2">{item}</SummaryBoxSubtitle>
                      </SummaryBox>
                    );
                })
            }
        </>
    );
}

export default GlobalSummaryBox;