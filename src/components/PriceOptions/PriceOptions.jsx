import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness classes",
        "Free Wi-Fi",
        "Access to gym app for workout tracking",
        "Discounts on merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "All Basic Membership features",
        "Unlimited group fitness classes",
        "One personal training session per month",
        "Free guest passes (2 per month)",
        "Access to specialized equipment (e.g., rowing machines, kettlebells)",
        "Monthly fitness assessment",
        "Free parking",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "All Standard Membership features",
        "Access to premium fitness classes (e.g., yoga, spinning)",
        "Two personal training sessions per month",
        "Free towel service",
        "Access to spa and sauna",
        "Priority booking for classes",
        "Complimentary smoothie or beverage after workouts",
        "Access to online workout library",
      ],
    },
    {
      id: 4,
      name: "Elite Membership",
      price: 120,
      features: [
        "All Premium Membership features",
        "Unlimited personal training sessions",
        "Priority booking for classes",
        "Complimentary nutrition consultation",
        "24/7 access to gym facilities",
        "Access to VIP lounge",
        "Exclusive member events and workshops",
        "Personalized workout and meal plans",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h1 className="text-5xl">Best Prices in the town</h1>

      <div className="grid grid-cols-4 gap-4">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
