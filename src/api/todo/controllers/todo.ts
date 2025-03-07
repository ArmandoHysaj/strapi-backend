/**
 * todo controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::todo.todo",
  ({ strapi }) => ({
    async customAction(ctx) {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
    async find(ctx) {
      ctx.query = { ...ctx.query, local: "en" };
      const { data, meta } = await super.find(ctx);
      meta.date = Date.now;

      return { data, meta };
    },
  })
);
