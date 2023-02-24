import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AccordionList from "../components/AccordionList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  width: 100%;
`;

const User = () => {
  const [userData, setUserData] = useState({
    profile: {},
    lists: [],
    reviews: [],
    ratings: [],
    files: [],
    settings: [],
  });
  const accordionItems = [
    { title: "Profile", content: userData.profile },
    { title: "Lists", content: userData.lists },
    { title: "Reviews", content: userData.reviews },
    { title: "Ratings", content: userData.ratings },
    { title: "Files", content: userData.files },
    { title: "Settings", content: userData.settings },
  ];
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getUserData = async () => {
      if (!currentUser) {
        return null;
      }

      const res = await axios.get(
        `http://localhost:1784/api/users/find/${currentUser._id}`
      );
      res.data.settings = [];
      setUserData(res.data);
    };
    getUserData();
  }, []);

  const itemComponent = (key, value) => {
    // Render different components based on the key
    switch (key) {
      case "lists":
        return <pre>{value}</pre>;
      case "reviews":
        return <pre>{value}</pre>;
      case "ratings":
        return <pre>{value}</pre>;
      case "files":
        return <pre>{value}</pre>;
      default:
        return <pre>{value}</pre>;
    }
  };

  return (
    <Container>
      <AccordionList listObj={userData} itemComponent={itemComponent} />
    </Container>
  );
};

export default User;