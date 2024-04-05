import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetQueryArgs, GetQueryResult, GetQueryOutputArgs } from "./getQuery";
export const getQuery: typeof import("./getQuery").getQuery = null as any;
export const getQueryOutput: typeof import("./getQuery").getQueryOutput = null as any;
utilities.lazyLoad(exports, ["getQuery","getQueryOutput"], () => require("./getQuery"));

export { GetQueryPackArgs, GetQueryPackResult, GetQueryPackOutputArgs } from "./getQueryPack";
export const getQueryPack: typeof import("./getQueryPack").getQueryPack = null as any;
export const getQueryPackOutput: typeof import("./getQueryPack").getQueryPackOutput = null as any;
utilities.lazyLoad(exports, ["getQueryPack","getQueryPackOutput"], () => require("./getQueryPack"));

export { QueryArgs } from "./query";
export type Query = import("./query").Query;
export const Query: typeof import("./query").Query = null as any;
utilities.lazyLoad(exports, ["Query"], () => require("./query"));

export { QueryPackArgs } from "./queryPack";
export type QueryPack = import("./queryPack").QueryPack;
export const QueryPack: typeof import("./queryPack").QueryPack = null as any;
utilities.lazyLoad(exports, ["QueryPack"], () => require("./queryPack"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:operationalinsights/v20190901:Query":
                return new Query(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20190901:QueryPack":
                return new QueryPack(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "operationalinsights/v20190901", _module)