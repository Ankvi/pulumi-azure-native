import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetResourceGuardArgs, GetResourceGuardResult, GetResourceGuardOutputArgs } from "./getResourceGuard";
export const getResourceGuard: typeof import("./getResourceGuard").getResourceGuard = null as any;
export const getResourceGuardOutput: typeof import("./getResourceGuard").getResourceGuardOutput = null as any;
utilities.lazyLoad(exports, ["getResourceGuard","getResourceGuardOutput"], () => require("./getResourceGuard"));

export { ResourceGuardArgs } from "./resourceGuard";
export type ResourceGuard = import("./resourceGuard").ResourceGuard;
export const ResourceGuard: typeof import("./resourceGuard").ResourceGuard = null as any;
utilities.lazyLoad(exports, ["ResourceGuard"], () => require("./resourceGuard"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dataprotection/v20221101preview:ResourceGuard":
                return new ResourceGuard(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dataprotection/v20221101preview", _module)
