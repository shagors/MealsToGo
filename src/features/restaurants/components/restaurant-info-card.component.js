import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";

const RestaurantCard = styled(Card)`
  background-color: "#FFFFFF";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: "#FFFFFF";
`;
const Title = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  padding: ${(props) => props.theme.space[3]};
  color: "#262626";
`;

const Address = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
