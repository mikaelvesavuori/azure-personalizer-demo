function getExcludedActionsList() {
  return [
    {
      id: "forbidden",
      features: [
        {
          taste: "sweet",
          spiceLevel: "high",
        },
        {
          nutritionLevel: 1,
        },
      ],
    },
  ];
}

module.exports = getExcludedActionsList;
