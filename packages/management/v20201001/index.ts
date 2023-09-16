import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetEntityArgs, GetEntityResult, GetEntityOutputArgs } from "./getEntity";
export const getEntity: typeof import("./getEntity").getEntity = null as any;
export const getEntityOutput: typeof import("./getEntity").getEntityOutput = null as any;
utilities.lazyLoad(exports, ["getEntity","getEntityOutput"], () => require("./getEntity"));

