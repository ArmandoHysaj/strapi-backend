module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom",
      handler: "todo.customAction",
      config: {
        auth: false,
      },
    },
  ],
};
