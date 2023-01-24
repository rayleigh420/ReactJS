let request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Tang Kim Long",
        admin: false,
        email: "klong31122001@gmail.com"
      };

      resolve(user);
    }, 5000);
  });
};

module.exports = {
  request
};
