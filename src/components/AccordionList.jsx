import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AttachFile,
  Inventory,
  Person,
  Reviews,
  Settings,
  ThumbsUpDown,
} from "@mui/icons-material";
import styled from "styled-components";
import AccordionListItem from "./AccordionListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgOpaque};
  border-radius: 16px;
  overflow: clip;
`;

const AccordionList = ({ listObj, itemComponent, children }) => {
  const [contentVisibility, setContentVisibility] = useState({
    profile: false,
    lists: false,
    ratings: false,
    reviews: false,
    files: false,
    settings: false,
  });

  const profileIcon = <Person fontSize="small" />;
  const listsIcon = <Inventory fontSize="small" />;
  const ratingsIcon = <ThumbsUpDown fontSize="small" />;
  const reviewsIcon = <Reviews fontSize="small" />;
  const filesIcon = <AttachFile fontSize="small" />;
  const settingsIcon = <Settings fontSize="small" />;

  const titleIcons = {
    profile: profileIcon,
    lists: listsIcon,
    ratings: ratingsIcon,
    reviews: reviewsIcon,
    files: filesIcon,
    settings: settingsIcon,
  };

  const toggleContentVisibility = (key) => {
    setContentVisibility((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  if (!listObj || Object.keys(listObj).length === 0) {
    return null;
  }

  const accordionListItems = Object.keys(listObj).map((key) => {
    return (
      <AccordionListItem
        key={key}
        icon={titleIcons[key]}
        title={key}
        toggleContentVisibility={() => toggleContentVisibility(key)}
        isOpen={contentVisibility[key]}
      >
        <AccordionListItem.ContentSlot>
          {/* <pre>{listObj[key]}</pre> */}
          {/* {children} */}
          {itemComponent(listObj[key])}
        </AccordionListItem.ContentSlot>
      </AccordionListItem>
    );
  });

  return (
    <Container>
      <List>{accordionListItems}</List>
    </Container>
  );
};

AccordionList.propTypes = {
  listObj: PropTypes.object.isRequired,
  itemComponent: PropTypes.func.isRequired,
};

export default AccordionList;