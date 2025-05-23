import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGraphQueryArgs, GetGraphQueryResult, GetGraphQueryOutputArgs } from "./getGraphQuery";
export const getGraphQuery: typeof import("./getGraphQuery").getGraphQuery = null as any;
export const getGraphQueryOutput: typeof import("./getGraphQuery").getGraphQueryOutput = null as any;
utilities.lazyLoad(exports, ["getGraphQuery","getGraphQueryOutput"], () => require("./getGraphQuery"));

export { GraphQueryArgs } from "./graphQuery";
export type GraphQuery = import("./graphQuery").GraphQuery;
export const GraphQuery: typeof import("./graphQuery").GraphQuery = null as any;
utilities.lazyLoad(exports, ["GraphQuery"], () => require("./graphQuery"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resourcegraph:GraphQuery":
                return new GraphQuery(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resourcegraph", _module)