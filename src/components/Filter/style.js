import React from "react";
import styled from "styled-components";
import filter from "../../assets/icons/filter-input.svg";
import search from "../../assets/icons/search.svg";
import advanced from "../../assets/icons/advanced.svg";
import { Select } from "antd";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Icons = styled.div``;
Icons.Filter = styled.img`
  margin-left: 8px;
`;
Icons.Search = styled.img`
  margin-right: 8px;
`;
Icons.Advanced = styled.img`
  margin-right: 8px;
`;
const FilterIcon = () => <Icons.Filter src={filter} alt="Filter Icon" />;
const SearchIcon = () => <Icons.Search src={search} alt="" />;
const AdvancedIcon = () => <Icons.Advanced src={advanced} alt="" />;

const MenuWrapper = styled.div`
  padding: 30px;
  border: 1px solid #e6e9ec;
  background: white;
`;
const Section = styled.div`
  margin-bottom: 20px;
  justify-content: start;
  display: flex;
  gap: 20px;
`;
const SelectAnt = styled(Select)`
  max-width: 150px;
  min-width: 150px;
  width: 100%;
  height: 44px;
.ant-select-selection-item{
    height: 44px !important;
  }
`;
export {
  Container,
  FilterIcon,
  SearchIcon,
  AdvancedIcon,
  MenuWrapper,
  Section,
  SelectAnt,
};
