import { Check, Close, DriveFileRenameOutline } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import ChangePassword from "./ChangePassword";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 12px;
  padding-top: 5px;
  flex: 5;
`;

const Entry = styled.div`
  display: flex;
  height: 36px;
  max-height: 36px;
  padding-left: 8px;
  align-items: center;
  padding-bottom: 2px;
  > span {
    display: flex;
    flex: 5;
    cursor: default;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgOpaqueDark};
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 4;
  padding: 0 4px;
`;

const ChangePasswordButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px 8px;
  padding-top: 6px;
  text-transform: capitalize;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textSoft};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Label = styled.div`
  display: flex;
  flex: 3;
  min-width: 80px;
  justify-content: end;
  padding-right: 8px;
  color: ${({ theme }) => theme.textSoft};
  cursor: default;
  flex-grow: 1;
`;

const Value = styled.div`
  display: flex;
  padding-left: 4px;
  flex: 4;
  cursor: pointer;
`;

const EditWrapper = styled.div`
  display: flex;
  margin-left: 6px;
  margin-right: 12px;
  justify-content: end;
`;

const Edit = styled.span`
  display: flex;
  max-width: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.textSofter};
  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Customization = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  flex: 4;
`;

const CurrAvatar = styled.img`
  display: flex;
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const ProfileContent = ({ userData }) => {
  const [editToggled, setEditToggled] = useState({
    name: false,
    email: false,
    location: false,
    changePassword: false,
  });

  const editHandler = (key) => {
    console.log(key);
    setEditToggled((state) => ({
      ...state,
      [key]: !state[key],
    }));
  };

  const openChangePassword = () => {
    setEditToggled((prevState) => ({
      ...prevState,
      changePassword: true,
    }));
  };
  const closeChangePassword = () => {
    setEditToggled((prevState) => ({
      ...prevState,
      changePassword: false,
    }));
  };

  const profile = userData ? userData.profile : null;
  console.log(userData);
  return (
    <Container id="profile-content">
      <List>
        <Entry>
          <Label>Username:</Label>
          {!editToggled.name ? (
            <Value onClick={() => editHandler("name")}>{profile.name}</Value>
          ) : (
            <Input
              name="name"
              type="text"
              placeholder={profile.name}
              onChange={() => {
                /* handle input change */
              }}
            />
          )}
          <EditWrapper>
            {!editToggled.name ? (
              <Edit title="Change name">
                <DriveFileRenameOutline
                  fontSize="small"
                  onClick={() => editHandler("name")}
                />
              </Edit>
            ) : (
              <>
                <Edit title="Save changes">
                  <Check fontSize="small" onClick={() => editHandler("name")} />
                </Edit>
                <Edit title="Discard changes">
                  <Close fontSize="small" onClick={() => editHandler("name")} />
                </Edit>
              </>
            )}
          </EditWrapper>
        </Entry>

        <Entry>
          <Label>Email:</Label>
          {!editToggled.email ? (
            <Value onClick={() => editHandler("email")}>{profile.email}</Value>
          ) : (
            <Input
              name="email"
              type="email"
              placeholder={profile.email}
              onChange={() => {
                /* handle input change */
              }}
            />
          )}
          <EditWrapper>
            {!editToggled.email ? (
              <Edit title="Change email">
                <DriveFileRenameOutline
                  fontSize="small"
                  onClick={() => editHandler("email")}
                />
              </Edit>
            ) : (
              <>
                <Edit title="Save changes">
                  <Check
                    fontSize="small"
                    onClick={() => editHandler("email")}
                  />
                </Edit>
                <Edit title="Discard changes">
                  <Close
                    fontSize="small"
                    onClick={() => editHandler("email")}
                  />
                </Edit>
              </>
            )}
          </EditWrapper>
        </Entry>

        <Entry>
          <Label>Location:</Label>
          {!editToggled.location ? (
            <Value onClick={() => editHandler("location")}>
              {profile.location}
            </Value>
          ) : (
            <Input
              name="location"
              type="text"
              placeholder={profile.location}
              onChange={() => {
                /* handle input change */
              }}
            />
          )}
          <EditWrapper>
            {!editToggled.location ? (
              <Edit title="Change location">
                <DriveFileRenameOutline
                  fontSize="small"
                  onClick={() => editHandler("location")}
                />
              </Edit>
            ) : (
              <>
                <Edit title="Save changes">
                  <Check
                    fontSize="small"
                    onClick={() => editHandler("location")}
                  />
                </Edit>
                <Edit title="Discard changes">
                  <Close
                    fontSize="small"
                    onClick={() => editHandler("location")}
                  />
                </Edit>
              </>
            )}
          </EditWrapper>
        </Entry>

        <Entry>
          <Panel>
            <ChangePasswordButton onClick={openChangePassword}>
              Change password
            </ChangePasswordButton>
          </Panel>
        </Entry>

        <ChangePassword
          onClose={closeChangePassword}
          toggled={editToggled.changePassword}
        />
      </List>

      <Customization>
        <CurrAvatar src={profile.avatar} />
      </Customization>
    </Container>
  );
};

export default ProfileContent;
