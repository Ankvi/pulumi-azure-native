import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLoadTestArgs, GetLoadTestResult, GetLoadTestOutputArgs } from "./getLoadTest";
export const getLoadTest: typeof import("./getLoadTest").getLoadTest = null as any;
export const getLoadTestOutput: typeof import("./getLoadTest").getLoadTestOutput = null as any;
utilities.lazyLoad(exports, ["getLoadTest","getLoadTestOutput"], () => require("./getLoadTest"));

export { LoadTestArgs } from "./loadTest";
export type LoadTest = import("./loadTest").LoadTest;
export const LoadTest: typeof import("./loadTest").LoadTest = null as any;
utilities.lazyLoad(exports, ["LoadTest"], () => require("./loadTest"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:loadtestservice/v20211201preview:LoadTest":
                return new LoadTest(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "loadtestservice/v20211201preview", _module)