import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdvancedThreatProtectionArgs } from "./advancedThreatProtection";
export type AdvancedThreatProtection = import("./advancedThreatProtection").AdvancedThreatProtection;
export const AdvancedThreatProtection: typeof import("./advancedThreatProtection").AdvancedThreatProtection = null as any;
utilities.lazyLoad(exports, ["AdvancedThreatProtection"], () => require("./advancedThreatProtection"));

export { GetAdvancedThreatProtectionArgs, GetAdvancedThreatProtectionResult, GetAdvancedThreatProtectionOutputArgs } from "./getAdvancedThreatProtection";
export const getAdvancedThreatProtection: typeof import("./getAdvancedThreatProtection").getAdvancedThreatProtection = null as any;
export const getAdvancedThreatProtectionOutput: typeof import("./getAdvancedThreatProtection").getAdvancedThreatProtectionOutput = null as any;
utilities.lazyLoad(exports, ["getAdvancedThreatProtection","getAdvancedThreatProtectionOutput"], () => require("./getAdvancedThreatProtection"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20190101:AdvancedThreatProtection":
                return new AdvancedThreatProtection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20190101", _module)
