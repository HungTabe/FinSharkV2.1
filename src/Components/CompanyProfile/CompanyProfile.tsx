import React, { useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../company';
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';
import { useOutletContext } from 'react-router-dom';

type Props = {}

 /*
       File config have important role in act manage how to show data

       1.Reusability : By separating configuration tableConfig
         you can reuse it in many different place withour rework
       2. ETC

       How to wotk
       1. Define construct : tableConfig is array of object each Obj
          define in4 about finance :
            label : name
            render : function take in an object CompanyKeyMetrics and 
            and return corresponding for that metric
            subTitle
        2.
    Cách file config đó hoạt động như thế nào https://www.youtube.com/watch?v=yJCVAIxGPSQ&t=217s
        */
    const tableConfig = [
      {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => company.marketCapTTM
      },
      {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => company.currentRatioTTM
      },
      {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => company.roeTTM
      },
      {
        label: "Return On Assets",
        render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM
      },
      {
        label: "Free Cashflow Per Share",
        render: (company: CompanyKeyMetrics) => company.freeCashFlowPerShareTTM      
      },
      {
        label: "Book Value Per Share TTM",
        render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM
      },
      {
        label: "Divdend Yield TTM",
        render: (company: CompanyKeyMetrics) => company.dividendYieldTTM
      },
      {
        label: "Capex Per Share TTM",
        render: (company: CompanyKeyMetrics) => company.capexPerShareTTM
      },
      {
        label: "Graham Number",
        render: (company: CompanyKeyMetrics) => company.grahamNumberTTM
      },
      {
        label: "PE Ratio",
        render: (company: CompanyKeyMetrics) => company.peRatioTTM
      },
    ];


const CompanyProfile = (props: Props) => {
  // ticker get data from context - get company ticker
  const ticker = useOutletContext<string>(); // Can cause unknow type so have to <string>
  // State to save data finance of Company
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  // Hook will run when component mount - It will call func getCompanyKeyRatios
  useEffect(() => {
    // Call api to get value and save in state
    const getCompanyKeyRatios = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyRatios();
  }, []);
  return ( // render componentll
    <>
      {/*
        If have companyData - com will render RatioList and pass data
        tableConfig and companyData into
        If companyData still not get yet : Spinner will show to message data is
        loading
      */}
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />l
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  )
}

export default CompanyProfile