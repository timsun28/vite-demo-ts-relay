import { createMethod } from "meteor/zodern:relay";
import { z } from "zod";
import { LinksCollection } from "../api/links";

export const getLinks = createMethod({
    name: "getLinks",
    schema: z.object({}),
    run() {
        return LinksCollection.find().fetch();
    },
});
