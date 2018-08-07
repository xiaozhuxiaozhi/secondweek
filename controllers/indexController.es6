//创建路由
import indexModel from "../models/indexModel";
import { createContext } from "vm";

const indexController = {
  index() {
    return async (ctx, next) => {
      ctx.body = await ctx.render("index", { title: "Praise" });
    };
  },
  addPraiseCount() {
    return async (ctx, nexr) => {
      const M = new indexModel();
      const data = await M.addPraise();
      ctx.body = data;
    };
  },
  getPraiseCount() {
    return async (ctx, next) => {
      const M = new indexModel();
      const data = await M.getCount();
      ctx.body =data;
    };
  }
};

export default indexController;
