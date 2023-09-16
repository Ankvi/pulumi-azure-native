import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessPolicyArgs } from "./accessPolicy";
export type AccessPolicy = import("./accessPolicy").AccessPolicy;
export const AccessPolicy: typeof import("./accessPolicy").AccessPolicy = null as any;
utilities.lazyLoad(exports, ["AccessPolicy"], () => require("./accessPolicy"));

export { GetAccessPolicyArgs, GetAccessPolicyResult, GetAccessPolicyOutputArgs } from "./getAccessPolicy";
export const getAccessPolicy: typeof import("./getAccessPolicy").getAccessPolicy = null as any;
export const getAccessPolicyOutput: typeof import("./getAccessPolicy").getAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicy","getAccessPolicyOutput"], () => require("./getAccessPolicy"));

export { GetReferenceDataSetArgs, GetReferenceDataSetResult, GetReferenceDataSetOutputArgs } from "./getReferenceDataSet";
export const getReferenceDataSet: typeof import("./getReferenceDataSet").getReferenceDataSet = null as any;
export const getReferenceDataSetOutput: typeof import("./getReferenceDataSet").getReferenceDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getReferenceDataSet","getReferenceDataSetOutput"], () => require("./getReferenceDataSet"));

export { ReferenceDataSetArgs } from "./referenceDataSet";
export type ReferenceDataSet = import("./referenceDataSet").ReferenceDataSet;
export const ReferenceDataSet: typeof import("./referenceDataSet").ReferenceDataSet = null as any;
utilities.lazyLoad(exports, ["ReferenceDataSet"], () => require("./referenceDataSet"));


// Export enums:
export * from "../types/enums/v20200515";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:timeseriesinsights/v20200515:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights/v20200515:ReferenceDataSet":
                return new ReferenceDataSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "timeseriesinsights/v20200515", _module)
