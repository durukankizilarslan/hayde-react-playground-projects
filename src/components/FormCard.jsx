import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { useState } from "react";

import { Calendar } from "primereact/calendar";

function FormCard() {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const footer = (
    <>
      <div className="d-flex justify-content-end">
        <Button label="Kaydet" icon="pi pi-check" severity="success" />
        <Button
          label="İptal"
          severity="danger"
          icon="pi pi-times"
          style={{ marginLeft: "0.5em" }}
        />
      </div>
    </>
  );

  return (
    <Card footer={footer} title="Personel Kayıt" className="text-start">
      <div className=" container-fluid ">
        <div className="row">
          {/* Personel Ismi */}
          <div className="p-inputgroup flex-1 col-12 col-md-6 pb-2 pb-md-0">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Personel İsmi" keyfilter="alpha" />
          </div>

          {/* Personel Telefonu */}
          <div className="p-inputgroup flex-1 col-12 col-md-6  pb-2 pb-md-0">
            <InputMask
              id="phone"
              mask="(999) 999-9999"
              placeholder="Telefon Numarasi Giriniz"
            />
            <span className="p-inputgroup-addon">
              <i className="pi pi-phone"></i>
            </span>
          </div>

          {/* Kurum Ismi */}
          <div className="flex-1 col-12 py-2">
            <InputText
              type="text"
              placeholder="Kurum ismi"
              className="col-12 "
            />
          </div>

          {/* İl Seçim */}
          <div className="p-inputgroup flex-1 col-12 col-md-6 pb-2">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="İl Seçiniz"
              className="w-full md:w-14rem"
            />
          </div>

          {/* İlçe Seçim */}
          <div className="p-inputgroup flex-1 col-12 col-md-6 pb-2 ">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="İlçe Seçiniz"
              className="w-full md:w-14rem"
            />
          </div>

          {/* Sicil Başlangıç */}
          <div className="p-inputgroup flex-1 col-12 col-md-6 pb-2">
            <Calendar
              value={date}
              placeholder="Sicil Başlangıç Tarihi Giriniz"
              onChange={(e) => setDate(e.value)}
            />

            <span className="p-inputgroup-addon">
              <i className="pi pi-calendar"></i>
            </span>
          </div>

          {/* TC Numarasi */}

          <div className="flex-1 col-12 col-md-6 pb-2">
            <InputText
              placeholder="TC No"
              keyfilter="int"
              className="col-12"
            />
          </div>

          {/* Adres Bilgisi */}
          <div className="col-12  ">
            <InputTextarea
              autoResize
              placeholder="Adres Bilgisi"
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={30}
            className="col-12"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FormCard;
