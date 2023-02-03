import { GoBell } from "react-icons/go";
import { GoCloudDownload } from "react-icons/go";
import React from "react";
import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline className='mb-5' onClick={() => {}}>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={() => console.log('entered')}>
          <GoCloudDownload />
          Are you going to Click??{" "}
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          SERÁ?{" "}
        </Button>
      </div>
      <div>
        <Button danger>VOCÊ TEM CERTEZA </Button>
      </div>
      <div>
        <Button warning>WARNING </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
