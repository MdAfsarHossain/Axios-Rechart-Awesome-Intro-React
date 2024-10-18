import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineCharts = () => {
  const stuMarks = [
    {
      id: 1,
      name: "Alice",
      Math: 85,
      Physics: 78,
      Chemistry: 92,
    },
    {
      id: 2,
      name: "Bob",
      Math: 75,
      Physics: 88,
      Chemistry: 81,
    },
    {
      id: 3,
      name: "Charlie",
      Math: 90,
      Physics: 85,
      Chemistry: 88,
    },
    {
      id: 4,
      name: "David",
      Math: 70,
      Physics: 80,
      Chemistry: 78,
    },
    {
      id: 5,
      name: "Eva",
      Math: 88,
      Physics: 92,
      Chemistry: 95,
    },
    {
      id: 6,
      name: "Frank",
      Math: 82,
      Physics: 77,
      Chemistry: 85,
    },
    {
      id: 7,
      name: "Grace",
      Math: 95,
      Physics: 89,
      Chemistry: 91,
    },
    {
      id: 8,
      name: "Hannah",
      Math: 78,
      Physics: 84,
      Chemistry: 80,
    },
    {
      id: 9,
      name: "Isaac",
      Math: 85,
      Physics: 90,
      Chemistry: 87,
    },
    {
      id: 10,
      name: "Jack",
      Math: 80,
      Physics: 76,
      Chemistry: 83,
    },
  ];

  const mathMarks = [
    {
      id: 1,
      name: "Alice",
      Math: 85,
    },
    {
      id: 2,
      name: "Bob",
      Math: 75,
    },
    {
      id: 3,
      name: "Charlie",
      Math: 90,
    },
    {
      id: 4,
      name: "David",
      Math: 70,
    },
    {
      id: 5,
      name: "Eva",
      Math: 88,
    },
    {
      id: 6,
      name: "Frank",
      Math: 82,
    },
    {
      id: 7,
      name: "Grace",
      Math: 95,
    },
    {
      id: 8,
      name: "Hannah",
      Math: 78,
    },
    {
      id: 9,
      name: "Isaac",
      Math: 85,
    },
    {
      id: 10,
      name: "Jack",
      Math: 80,
    },
  ];

  return (
    <div>
      <div className="">
        <LChart width={400} height={400} data={mathMarks}>
          <Line type="" dataKey="Math" stroke="#8884d8" />
        </LChart>
      </div>

      <div className="px-10">
        <LChart width={900} height={400} data={stuMarks}>
            <XAxis dataKey={'name'}/>
            <YAxis />
          <Line type="" dataKey="Math" stroke="#8884d8" />
          <Line type="" dataKey="Physics" stroke="#82ca9d" />
          <Line type="" dataKey="Chemistry" stroke="#ff7300" />
        </LChart>
      </div>
    </div>
  );
};

export default LineCharts;
