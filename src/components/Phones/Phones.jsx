import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Normal Fetch
  // useEffect(() => {
  //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(res => res.json())
  //     .then(data => setPhones(data.data))
  // }, [])

  // AXIOS fetch
  // useEffect(() => {
  //     axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(data => setPhones(data.data.data));
  // }, [])

  // Slug data
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}

      <h1 className="text-5xl">Phones: {phones.length}</h1>

      <BarChart width={1300} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
