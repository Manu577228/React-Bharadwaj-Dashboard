import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Bangalore",
    rating: "2 open PR",
  },
  {
    city: "Chennai",
    rating: "1 open PR",
  },
  {
    city: "Pune",
    rating: "0 open PR",
  },
  {
    city: "New Delhi",
    rating: "1 open PR",
  },
  {
    city: "Vishakapatnam",
    rating: "0 open PR",
  },
  {
    city: "Mumbai",
    rating: "0 open PR",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title>Bharadwaj's Hometowns</Title>
      <List>
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;