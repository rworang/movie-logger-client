import { ExpandMore, ExpandLess } from "@mui/icons-material";
import React, { Component, createContext } from "react";
import styled from "styled-components";

const AccordionListItemContext = createContext({});

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6em 1.4em;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-left: 16px;
  text-transform: capitalize;
`;

const Icon = styled.span`
  display: flex;
  margin-left: auto;
`;

const ListItemContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgOpaque};
  padding: 0 12px;
  height: ${({ isOpen, contentHeight }) =>
    isOpen ? `${contentHeight}px` : "0"};
  overflow: hidden;
  transition: height 150ms ease-in-out;
`;

class AccordionListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentHeight: 0,
    };

    this.contentRef = React.createRef();
  }

  componentDidMount() {
    this.setContentHeight();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setContentHeight();
    }
  }

  setContentHeight = () => {
    const contentHeight = this.contentRef.current.scrollHeight;
    this.setState({ contentHeight });
  };

  static ContentSlot = ({ children }) => (
    <AccordionListItemContext.Provider value={{ type: "content" }}>
      {children}
    </AccordionListItemContext.Provider>
  );

  render() {
    const { title, icon, isOpen, toggleContentVisibility, children } =
      this.props;
    const { contentHeight } = this.state;

    const contentSlot = React.Children.toArray(children).find(
      (child) => child.type === AccordionListItem.ContentSlot
    );

    return (
      <AccordionListItemContext.Provider value={{}}>
        <ListItemHeader onClick={toggleContentVisibility}>
          {icon ? icon : null}

          <Title>{title ? title : null}</Title>

          <Icon>{isOpen ? <ExpandLess /> : <ExpandMore />}</Icon>
        </ListItemHeader>

        <ListItemContent
          isOpen={isOpen}
          contentHeight={contentHeight}
          ref={this.contentRef}
        >
          {contentSlot ? contentSlot.props.children : null}
        </ListItemContent>
      </AccordionListItemContext.Provider>
    );
  }
}

export default AccordionListItem;
