import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { GetSolutionArgs, GetSolutionResult, GetSolutionOutputArgs } from "./getSolution";
export const getSolution: typeof import("./getSolution").getSolution = null as any;
export const getSolutionOutput: typeof import("./getSolution").getSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolution","getSolutionOutput"], () => require("./getSolution"));

export { GetTargetArgs, GetTargetResult, GetTargetOutputArgs } from "./getTarget";
export const getTarget: typeof import("./getTarget").getTarget = null as any;
export const getTargetOutput: typeof import("./getTarget").getTargetOutput = null as any;
utilities.lazyLoad(exports, ["getTarget","getTargetOutput"], () => require("./getTarget"));

export { InstanceArgs } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));

export { SolutionArgs } from "./solution";
export type Solution = import("./solution").Solution;
export const Solution: typeof import("./solution").Solution = null as any;
utilities.lazyLoad(exports, ["Solution"], () => require("./solution"));

export { TargetArgs } from "./target";
export type Target = import("./target").Target;
export const Target: typeof import("./target").Target = null as any;
utilities.lazyLoad(exports, ["Target"], () => require("./target"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotoperationsorchestrator:Instance":
                return new Instance(name, <any>undefined, { urn })
            case "azure-native:iotoperationsorchestrator:Solution":
                return new Solution(name, <any>undefined, { urn })
            case "azure-native:iotoperationsorchestrator:Target":
                return new Target(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotoperationsorchestrator", _module)