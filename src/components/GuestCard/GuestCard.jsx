import React, { useEffect, useState } from "react";
import "../../styles/guest-card.css";
import { UserSquare, Book, Hashtag } from "iconsax-react";
import {Link} from 'react-router-dom'


const GuestCard = ({ guest }) => {
  const [urlAvatar, setUrlAvatar] = useState(null);
  useEffect(() => {
    const getInfo = async () => {

      let lastNameFirst = guest.lastName.split(/(\s+)/);
      let response = await fetch(
        `https://ui-avatars.com/api/?name=${guest.name}+${lastNameFirst[0]}`
      );
      setUrlAvatar(response.url);
    }
    getInfo();
  }, [guest]);

  

  return (
    <div className="guest-card-container">
      <div className="guest-info">
        <p className="guest-name">
          <UserSquare className="icon-guest" size="50" color="#FF8A65" />{" "}
          {`${guest.name} ${guest.lastName}`}
        </p>
        <a className="guest-email" href={"mailto:" + guest.email}>
          <Book className="icon-guest" size="50" color="#FF8A65" />
          {guest.email}
        </a>
        <br />
        <br />
        <a
          className="guest-twitter"
          href={"https://twitter.com/" + guest.twitter}
        >
          <Hashtag size="50" className="icon-guest" color="#FF8A65" />@
          {guest.twitter}
        </a>
      </div>
      <div>
      <Link to={`/edit-guest/${guest.id}`}>
        <img className="avatar-user" alt={"user"+guest.id} src={urlAvatar} />
      </Link>
      </div>
    </div>
  );
};

export default GuestCard;
