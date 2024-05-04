import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';

const DashboardCard1 = ({icon,text1,text2}) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <Container fluid className="position-relative rounded rounded-5">
      <Image className="position-absolute end-0 top-0" width="10%" src={icon} />
      <p style={{ fontSize: "12px" }}>
        {!text1 ? greeting : text1}
      </p>
      <p>
        {text2 && (text2)}
      </p>
    </Container>
  );
};

export default DashboardCard1;
