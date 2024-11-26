import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import FormCard from "./FormCard";

function ContentWindow() {
  const [products, setProducts] = useState([]);

  return (
    <div className="flex-grow-1 layout-content">
      {/*  */}
      <div class="container-fluid text-center px-4 pb-4">
        <div class="row d-flex justify-content-between gx-4 gy-4">
          <div class="col-lg-3 col-md-6  col-12">
            <Card className="">
              <span>Kayitli Personel</span>
              <div>
                <span>120</span>
              </div>
            </Card>
          </div>
          <div class="col-lg-3 col-md-6   col-12">
            <Card className="">
              <span>Kayitli Personel</span>
              <div>
                <span>120</span>
              </div>
            </Card>
          </div>
          <div class="col-lg-3 col-md-6   col-12">
            <Card className="">
              <span>Kayitli Personel</span>
              <div>
                <span>120</span>
              </div>
            </Card>
          </div>
          <div class="col-lg-3 col-md-6    col-12">
            <Card className="">
              <span>Kayitli Personel</span>
              <div>
                <span>120</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div class="container-fluid text-center px-4 pb-4">
        <div class="row d-flex justify-content-between gx-4 gy-4">
          <div class="col-lg-8 col-md-12">
          <FormCard></FormCard></div>
          <div class="col-lg-4 col-md-12">
            <Card></Card>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div class="container-fluid text-center px-4 pb-4">
        <div class="row d-flex justify-content-between gx-4 gy-4">
          <div class="col-lg-7 col-md-12">
            <Card className="text-start" title="Personel Liste">
              <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
                <Column field="code" header="Personel"></Column>
                <Column field="name" header="Kurum"></Column>
                <Column field="category" header="Özlük"></Column>
                <Column field="quantity" header="Sicil No"></Column>
              </DataTable>
            </Card>
          </div>
          <div class="col-lg-5 col-md-12">
            <Card className="">
              <span>Kayitli Personel</span>
              <div>
                <span>120</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

       

      {/* <GreetingMessage isLoggedIn={true} username="Duru"></GreetingMessage>
        <Card1></Card1>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        <Student name="Spongebob" age={33} isStudent={true}></Student>
        <Student name="Patrick" age={47} isStudent={false}></Student>
        <Student name="Squidward" age={50} isStudent={false}></Student>
        
        <Student name="Nancy" age={27} isStudent={true}></Student>
        <Student></Student> */}
    </div>
  );
}

export default ContentWindow;
