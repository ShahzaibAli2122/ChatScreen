/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f5f4f6",
          "200": "#f2f3f6",
        },
        "neutral-00": "#fff",
        "neutral-03": "#efefef",
        "secondary-01": "#ffbc99",
        "neutral-07": "#1a1d1f",
        "neutral-04": "#6f767e",
        "gray-900": "#1d2026",
        royalblue: "#2563eb",
        "primary-50": "#eff6ff",
        new: "#00afef",
        "greyscale-500": "#64748b",
        "greyscale-900": "#0f172a",
        "greyscale-100": "#f1f5f9",
        "light-version-text": "#06152b",
        black1: "#000",
        "success-500": "#23bd33",
        badge: "#ef37ff",
        gray1: "rgba(6, 21, 43, 0.5)",
        deepskyblue: "rgba(0, 175, 239, 0.05)",
        stroke: "#f1f3f9",
        "black-30": "#8b8d97",
        "secondary-20": "#fef5ea",
        "black-100": "#1c1d22",
        "black-20": "#a6a8b1",
        "black-60": "#45464e",
        "secondary-100": "#ffcc91",
        "black-1": "#cfd3d4",
        "black-2": "#abafb1",
        "black-90": "#2c2d33",
        "new-1": "rgba(0, 175, 239, 0.2)",
        darkslategray: "#243144",
        "neutral-02": "#f4f4f4",
        "neutral-shades-04-75": "#9a9fa5",
      },
      spacing: {},
      fontFamily: {
        "base-1-semibold": "Inter",
        small: "'DM Sans'",
        "subheading-3-medium": "Poppins",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "481xl": "500px",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      base: "16px",
      sm: "14px",
      "4xl-2": "23.2px",
      "smi-6": "12.6px",
      "3xs-6": "9.6px",
      "3xs": "10px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
