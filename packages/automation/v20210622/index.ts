import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHybridRunbookWorkerGroupArgs, GetHybridRunbookWorkerGroupResult, GetHybridRunbookWorkerGroupOutputArgs } from "./getHybridRunbookWorkerGroup";
export const getHybridRunbookWorkerGroup: typeof import("./getHybridRunbookWorkerGroup").getHybridRunbookWorkerGroup = null as any;
export const getHybridRunbookWorkerGroupOutput: typeof import("./getHybridRunbookWorkerGroup").getHybridRunbookWorkerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getHybridRunbookWorkerGroup","getHybridRunbookWorkerGroupOutput"], () => require("./getHybridRunbookWorkerGroup"));

export { HybridRunbookWorkerGroupArgs } from "./hybridRunbookWorkerGroup";
export type HybridRunbookWorkerGroup = import("./hybridRunbookWorkerGroup").HybridRunbookWorkerGroup;
export const HybridRunbookWorkerGroup: typeof import("./hybridRunbookWorkerGroup").HybridRunbookWorkerGroup = null as any;
utilities.lazyLoad(exports, ["HybridRunbookWorkerGroup"], () => require("./hybridRunbookWorkerGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:automation/v20210622:HybridRunbookWorkerGroup":
                return new HybridRunbookWorkerGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "automation/v20210622", _module)
