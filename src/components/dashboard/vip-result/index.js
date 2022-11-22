import React from "react";
import {
  ResultsWrapper,
  Tablet,
  Mobile,
  MobileWrapper,
  MobileRow,
  TabletRow
} from "./vipResult.Styled";
import { Text, HeaderText } from "./components/Text";
import { _vip } from "./data";
import ResultsNavBar from "./components/ResultsNavBar";

// app
const VipResult = () => {
  return (
    <ResultsWrapper>
      <Tablet>
        <section className="wrapper__container">
          <ResultsNavBar />
          <TabletRow>
            <HeaderText text="Name" />
            <HeaderText text="Category" />
            <HeaderText text="Gender" />
            <HeaderText text="Networth" />
            <HeaderText text="Career" />
          </TabletRow>

          {_vip.map((vip, index) => {
            const { name, category, gender, netWorth, career } = vip;
            return (
              <TabletRow key={index}>
                <Text text={name} />
                <Text text={category} />
                <Text text={gender} />
                <Text text={netWorth} />
                <Text text={career} />
              </TabletRow>
            );
          })}
        </section>
      </Tablet>

      <Mobile>
        <ResultsNavBar />

        <MobileWrapper>
          {_vip.map((vip, index) => {
            const { name, category, gender, netWorth, career } = vip;

            return (
              <MobileRow key={index}>
                <div className="row">
                  <span>Name</span>
                  <p>{name}</p>
                </div>
                <div className="row">
                  <span>Category</span>
                  <p>{category}</p>
                </div>
                <div className="row">
                  <span>Gender</span>
                  <p>{gender}</p>
                </div>
                <div className="row">
                  <span>Networth</span>
                  <p>{netWorth}</p>
                </div>
                <div className="row">
                  <span>Career</span>
                  <p>{career}</p>
                </div>
              </MobileRow>
            );
          })}
        </MobileWrapper>
      </Mobile>
    </ResultsWrapper>
  );
};

export default VipResult;
