import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AutoScaleVCoreArgs } from "./autoScaleVCore";
export type AutoScaleVCore = import("./autoScaleVCore").AutoScaleVCore;
export const AutoScaleVCore: typeof import("./autoScaleVCore").AutoScaleVCore = null as any;
utilities.lazyLoad(exports, ["AutoScaleVCore"], () => require("./autoScaleVCore"));

export { CapacityDetailsArgs } from "./capacityDetails";
export type CapacityDetails = import("./capacityDetails").CapacityDetails;
export const CapacityDetails: typeof import("./capacityDetails").CapacityDetails = null as any;
utilities.lazyLoad(exports, ["CapacityDetails"], () => require("./capacityDetails"));

export { GetAutoScaleVCoreArgs, GetAutoScaleVCoreResult, GetAutoScaleVCoreOutputArgs } from "./getAutoScaleVCore";
export const getAutoScaleVCore: typeof import("./getAutoScaleVCore").getAutoScaleVCore = null as any;
export const getAutoScaleVCoreOutput: typeof import("./getAutoScaleVCore").getAutoScaleVCoreOutput = null as any;
utilities.lazyLoad(exports, ["getAutoScaleVCore","getAutoScaleVCoreOutput"], () => require("./getAutoScaleVCore"));

export { GetCapacityDetailsArgs, GetCapacityDetailsResult, GetCapacityDetailsOutputArgs } from "./getCapacityDetails";
export const getCapacityDetails: typeof import("./getCapacityDetails").getCapacityDetails = null as any;
export const getCapacityDetailsOutput: typeof import("./getCapacityDetails").getCapacityDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityDetails","getCapacityDetailsOutput"], () => require("./getCapacityDetails"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:powerbidedicated:AutoScaleVCore":
                return new AutoScaleVCore(name, <any>undefined, { urn })
            case "azure-native:powerbidedicated:CapacityDetails":
                return new CapacityDetails(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "powerbidedicated", _module)