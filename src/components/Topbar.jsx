import React, { useState } from "react";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import UserAvatar from "../images/41.png";
import { Sidebar } from "primereact/sidebar";
import { Dialog } from "primereact/dialog";

function Topbar({ toggleSidebar }) {
  const [visibleRightSidebar, setVisibleRightSidebar] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className=" d-flex justify-content-between align-items-center py-4 pe-4 layout-topbar">
      <div className="ps-2">
        <Button icon="pi pi-bars" onClick={toggleSidebar} rounded text></Button>
      </div>

      <div className="d-flex flex-row align-items-center">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText placeholder="Search" />
        </IconField>

        <Button
          className="mx-2"
          icon="pi pi-cog"
          rounded
          text
          onClick={() => setVisible(true)}
        ></Button>

        <Avatar
          image={UserAvatar}
          size="large"
          shape="circle"
          className="p-overlay-badge"
          onClick={() => setVisibleRightSidebar(true)}
        >
          <Badge value="4" severity="danger" />
        </Avatar>

        <Sidebar
          position="right"
          visible={visibleRightSidebar}
          onHide={() => setVisibleRightSidebar(false)}
        >
          <h2>Sidebar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>

        <Dialog header="Ayarlar" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
      </div>

      {/* <p>{new Date().getFullYear()} Some code before this</p>
            Layout topbar
        <Button label="Submit" /> */}
    </div>
  );
}

export default Topbar;
