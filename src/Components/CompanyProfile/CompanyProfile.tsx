import React from 'react'
import { CompanyKeyMetrics } from '../../company';

type Props = {}

const CompanyProfile = (props: Props) => {

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
      render: (company: CompanyKeyMetrics) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
    {
      label: "Current Ratio",
      render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
      subTitle:
        "Measures the companies ability to pay short term debt obligations",
    },
    {
      label: "Return On Equity",
      render: (company: CompanyKeyMetrics) => company.roeTTM,
      subTitle:
        "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
      label: "Return On Assets",
      render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM,
      subTitle:
        "Return on assets is the measure of how effective a company is using its assets",
    },
    {
      label: "Free Cashflow Per Share",
      render: (company: CompanyKeyMetrics) => company.freeCashFlowPerShareTTM,
      subTitle:
        "Return on assets is the measure of how effective a company is using its assets",
    },
    {
      label: "Book Value Per Share TTM",
      render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM,
      subTitle:
        "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
    },
    {
      label: "Divdend Yield TTM",
      render: (company: CompanyKeyMetrics) => company.dividendYieldTTM,
      subTitle: "Shows how much a company pays each year relative to stock price",
    },
    {
      label: "Capex Per Share TTM",
      render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
      subTitle:
        "Capex is used by a company to aquire, upgrade, and maintain physical assets",
    },
    {
      label: "Graham Number",
      render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
      subTitle:
        "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
    {
      label: "PE Ratio",
      render: (company: CompanyKeyMetrics) => company.peRatioTTM,
      subTitle:
        "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
  ];
  

  return (
    <div>CompanyProfile</div>
  )
}

export default CompanyProfile