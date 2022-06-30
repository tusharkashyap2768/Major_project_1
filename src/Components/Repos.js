import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
 
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    
    const { data } = await Axios.get(repos_url);
   
    setRepos(data);
  };
  
  useEffect(() => {
    fetchRepos(); 
  }, [repos_url]); 

  return (
    <ListGroup>
    //loop through repos list using map
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-secondary">{repo.name}</div>
          <div className="text-info">{repo.language}</div>
          <div className="text-dark">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Repos;
