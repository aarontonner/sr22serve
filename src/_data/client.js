module.exports = {
    name: "SR22 Serve Ohio",
    email: "info@sr22serveohio.com",
    phoneForTel: "857-201-2994",
    phoneFormatted: "(857) 201-2994",
    address: {
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "Ohio",
        zip: "",
        country: "US",
        mapLink: "https://www.google.com/maps/d/u/0/edit?mid=1OMhaugkFvjrJdFGbQyCmD1dB-u4MwOM&ll=41.65611928294693%2C-83.57189701170866&z=12",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.sr22serveohio.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
