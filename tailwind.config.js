/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(${variableName})`;
  };
};

module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        cyan: withOpacity("--color-cyan"),
        "bright-yellow": withOpacity("--color-bright-yellow"),
        "light-grey": withOpacity("--color-light-grey"),
        "grayish-blue": withOpacity("--color-grayish-blue"),
        "my-color": withOpacity("--color-qasim-favorite"),
      },
      fontFamily: {
        karla: "'Karla', sans-serif",
      },
      screens: {
        phone: "375px",
      },
    },
  },
  plugins: [],
};
