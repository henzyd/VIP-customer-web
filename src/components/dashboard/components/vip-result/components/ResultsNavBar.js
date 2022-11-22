import React from "react";
import { FilterBar, SortBar } from "./FiltersBar";
import { ResultsNavBarWrapper } from "./resultsNavBar.styled";
const ResultsNavBar = () => {
  return (
    <ResultsNavBarWrapper>
      <h2 className="header">Vip</h2>

      <div className="filters__container">
        <FilterBar />
        <SortBar />
      </div>
    </ResultsNavBarWrapper>
  );
};

export default ResultsNavBar;
