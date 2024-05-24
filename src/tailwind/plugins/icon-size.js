const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        "icon-size": (value) => ({
          width: value,
          height: value,
          minWidth: value,
          minHeight: value,
          fontSize: value,
          lineHeight: value,
          [`svg`]: {
            width: value,
            height: value,
          },
        }),
      },
      {
        values: theme("iconSize"),
      },
    );
  },
  {
    theme: {
      iconSize: {
        1: "0.3rem",
        2: "0.5rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        8.5: "2.25rem",
        10: "2.5rem",
        11: "2.8rem",
        12: "3rem",
        14: "3.5rem",
        14.5: "3.875rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
      },
    },
  },
);
