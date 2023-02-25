import { Check, Close, DriveFileRenameOutline } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 12px;
  margin-top: 5px;
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
    background-color: ${({ theme }) => theme.bgOpaque};
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 4;
  padding: 0 4px;
`;

const ChangePassword = styled.button`
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
  });

  const editHandler = (key) => {
    console.log(key);
    setEditToggled((state) => ({
      ...state,
      [key]: !state[key],
    }));
  };

  const { profile } = userData;
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
          <Panel>
            <ChangePassword>Click here to change password</ChangePassword>
          </Panel>
        </Entry>
      </List>

      <Customization>
        <CurrAvatar src={profile.avatar} />
      </Customization>
    </Container>
  );
};

export default ProfileContent;
