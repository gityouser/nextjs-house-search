import { buildSchemaSync, Resolver, Query } from "type-graphql";
// import { HouseResolver } from "./house";
import { authChecker } from "./auth";
import { ImageResolver } from "./image";

@Resolver()
class DummyResolver {
  @Query((_retuns) => String)
  hello() {
    return "Nice to meet you";
  }
}

export const schema = buildSchemaSync({
  resolvers: [DummyResolver, ImageResolver],
  emitSchemaFile: process.env.NODE_ENV === "development",
  authChecker,
});
