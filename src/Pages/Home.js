import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);


  const fetchDetails = async () => {
    
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  
  if (!context.user?.uid) {
    return <Redirect to="/Signin" />;
  }
  

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the GitHub username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="dark">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          //if user is present fetch user and pass prop otherwise null
          {user ? <UserCard user={user} /> : null}
        </Col>
          //if user exists repos uthaloo 
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};
export default Home;
