import React from 'react';
import {GlobalSummaryWrapper} from './GlobalSummaryStyle';
import GlobalSummaryBox from './global-summary-box/GlobalSummaryBox';

interface GlobalSummaryProps {
    globalData: number[];
    titles: string[];
}

const GlobalSummary: React.FC<GlobalSummaryProps> = ({titles, globalData}) => {

    return (
      <GlobalSummaryWrapper>
        <GlobalSummaryBox titles={titles} globalData={globalData} />
      </GlobalSummaryWrapper>
    );
}

export default GlobalSummary;