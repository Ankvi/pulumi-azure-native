import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplianceArgs } from "./appliance";
export type Appliance = import("./appliance").Appliance;
export const Appliance: typeof import("./appliance").Appliance = null as any;
utilities.lazyLoad(exports, ["Appliance"], () => require("./appliance"));

export { GetApplianceArgs, GetApplianceResult, GetApplianceOutputArgs } from "./getAppliance";
export const getAppliance: typeof import("./getAppliance").getAppliance = null as any;
export const getApplianceOutput: typeof import("./getAppliance").getApplianceOutput = null as any;
utilities.lazyLoad(exports, ["getAppliance","getApplianceOutput"], () => require("./getAppliance"));

export { ListApplianceClusterUserCredentialArgs, ListApplianceClusterUserCredentialResult, ListApplianceClusterUserCredentialOutputArgs } from "./listApplianceClusterUserCredential";
export const listApplianceClusterUserCredential: typeof import("./listApplianceClusterUserCredential").listApplianceClusterUserCredential = null as any;
export const listApplianceClusterUserCredentialOutput: typeof import("./listApplianceClusterUserCredential").listApplianceClusterUserCredentialOutput = null as any;
utilities.lazyLoad(exports, ["listApplianceClusterUserCredential","listApplianceClusterUserCredentialOutput"], () => require("./listApplianceClusterUserCredential"));

export { ListApplianceKeysArgs, ListApplianceKeysResult, ListApplianceKeysOutputArgs } from "./listApplianceKeys";
export const listApplianceKeys: typeof import("./listApplianceKeys").listApplianceKeys = null as any;
export const listApplianceKeysOutput: typeof import("./listApplianceKeys").listApplianceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listApplianceKeys","listApplianceKeysOutput"], () => require("./listApplianceKeys"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resourceconnector/v20221027:Appliance":
                return new Appliance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resourceconnector/v20221027", _module)