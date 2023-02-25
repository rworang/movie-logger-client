import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AccordionList from "../components/AccordionList";
import ProfileContent from "../uniques/User/ProfileContent";

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

      const res = await axios.get(`/api/users/find/${currentUser._id}`);
      res.data.settings = [];
      setUserData(res.data);
    };
    getUserData();
  }, []);

  const itemComponent = (key) => {
    // Render different components based on the key
    switch (key) {
      case "lists":
        return <div>lists</div>;
      case "reviews":
        return <div>reviews</div>;
      case "ratings":
        return <div>ratings</div>;
      case "files":
        return <div>files</div>;
      case "settings":
        return <div>settings</div>;
      default:
        return <ProfileContent userData={userData} />;
    }
  };

  return (
    <Container>
      <AccordionList listObj={userData} itemComponent={itemComponent} />
    </Container>
  );
};

export default User;
