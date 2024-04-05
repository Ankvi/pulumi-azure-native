import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureADMetricArgs } from "./azureADMetric";
export type AzureADMetric = import("./azureADMetric").AzureADMetric;
export const AzureADMetric: typeof import("./azureADMetric").AzureADMetric = null as any;
utilities.lazyLoad(exports, ["AzureADMetric"], () => require("./azureADMetric"));

export { GetAzureADMetricArgs, GetAzureADMetricResult, GetAzureADMetricOutputArgs } from "./getAzureADMetric";
export const getAzureADMetric: typeof import("./getAzureADMetric").getAzureADMetric = null as any;
export const getAzureADMetricOutput: typeof import("./getAzureADMetric").getAzureADMetricOutput = null as any;
utilities.lazyLoad(exports, ["getAzureADMetric","getAzureADMetricOutput"], () => require("./getAzureADMetric"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:aadiam/v20200701preview:AzureADMetric":
                return new AzureADMetric(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "aadiam/v20200701preview", _module)