import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLoadTestArgs, GetLoadTestResult, GetLoadTestOutputArgs } from "./getLoadTest";
export const getLoadTest: typeof import("./getLoadTest").getLoadTest = null as any;
export const getLoadTestOutput: typeof import("./getLoadTest").getLoadTestOutput = null as any;
utilities.lazyLoad(exports, ["getLoadTest","getLoadTestOutput"], () => require("./getLoadTest"));

export { GetLoadTestMappingArgs, GetLoadTestMappingResult, GetLoadTestMappingOutputArgs } from "./getLoadTestMapping";
export const getLoadTestMapping: typeof import("./getLoadTestMapping").getLoadTestMapping = null as any;
export const getLoadTestMappingOutput: typeof import("./getLoadTestMapping").getLoadTestMappingOutput = null as any;
utilities.lazyLoad(exports, ["getLoadTestMapping","getLoadTestMappingOutput"], () => require("./getLoadTestMapping"));

export { GetLoadTestProfileMappingArgs, GetLoadTestProfileMappingResult, GetLoadTestProfileMappingOutputArgs } from "./getLoadTestProfileMapping";
export const getLoadTestProfileMapping: typeof import("./getLoadTestProfileMapping").getLoadTestProfileMapping = null as any;
export const getLoadTestProfileMappingOutput: typeof import("./getLoadTestProfileMapping").getLoadTestProfileMappingOutput = null as any;
utilities.lazyLoad(exports, ["getLoadTestProfileMapping","getLoadTestProfileMappingOutput"], () => require("./getLoadTestProfileMapping"));

export { LoadTestArgs } from "./loadTest";
export type LoadTest = import("./loadTest").LoadTest;
export const LoadTest: typeof import("./loadTest").LoadTest = null as any;
utilities.lazyLoad(exports, ["LoadTest"], () => require("./loadTest"));

export { LoadTestMappingArgs } from "./loadTestMapping";
export type LoadTestMapping = import("./loadTestMapping").LoadTestMapping;
export const LoadTestMapping: typeof import("./loadTestMapping").LoadTestMapping = null as any;
utilities.lazyLoad(exports, ["LoadTestMapping"], () => require("./loadTestMapping"));

export { LoadTestProfileMappingArgs } from "./loadTestProfileMapping";
export type LoadTestProfileMapping = import("./loadTestProfileMapping").LoadTestProfileMapping;
export const LoadTestProfileMapping: typeof import("./loadTestProfileMapping").LoadTestProfileMapping = null as any;
utilities.lazyLoad(exports, ["LoadTestProfileMapping"], () => require("./loadTestProfileMapping"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:loadtestservice:LoadTest":
                return new LoadTest(name, <any>undefined, { urn })
            case "azure-native:loadtestservice:LoadTestMapping":
                return new LoadTestMapping(name, <any>undefined, { urn })
            case "azure-native:loadtestservice:LoadTestProfileMapping":
                return new LoadTestProfileMapping(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "loadtestservice", _module)