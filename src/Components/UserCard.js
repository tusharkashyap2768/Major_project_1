import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-dark">{user.name}</div>
        <div className="text-dark">{user.location}</div>
        <div className="text-dark">{user.bio}</div>
        <div className="text-dark">website: {user.blog}</div>
        <div className="text-dark">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-dark">Followers {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
