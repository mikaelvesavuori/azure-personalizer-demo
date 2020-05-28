function getActionsList() {
  return [
    {
      id: "pasta",
      features: [
        {
          taste: "salty",
          spiceLevel: "medium",
        },
        {
          nutritionLevel: 5,
          cuisine: "italian",
        },
      ],
    },
    {
      id: "ice cream",
      features: [
        {
          taste: "sweet",
          spiceLevel: "none",
        },
        {
          nutritionalLevel: 2,
        },
      ],
    },
    {
      id: "juice",
      features: [
        {
          taste: "sweet",
          spiceLevel: "none",
        },
        {
          nutritionLevel: 5,
        },
        {
          drink: true,
        },
      ],
    },
    {
      id: "salad",
      features: [
        {
          taste: "salty",
          spiceLevel: "low",
        },
        {
          nutritionLevel: 8,
        },
      ],
    },
  ];
}

module.exports = getActionsList;
