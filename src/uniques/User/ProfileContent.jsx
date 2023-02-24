import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Entry = styled.div`
  display: flex;

  > span:first-child {
    margin-right: 6px;
  }
`;

const Customization = styled.div`
  display: flex;
  height: auto;
`;

const CurrAvatar = styled.img`
  display: flex;
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const ProfileContent = ({ userData }) => {
  const { profile } = userData;
  console.log(profile);
  return (
    <Container id="profile-content">
      <List>
        <Entry>
          <span>Username:</span>
          <span>{profile.name}</span>
        </Entry>
        <Entry>
          <span>Email:</span>
          <span>{profile.email}</span>
        </Entry>
      </List>

      <Customization>
        <CurrAvatar src={profile.avatar} />
      </Customization>
    </Container>
  );
};

export default ProfileContent;
