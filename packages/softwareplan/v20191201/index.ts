import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHybridUseBenefitArgs, GetHybridUseBenefitResult, GetHybridUseBenefitOutputArgs } from "./getHybridUseBenefit";
export const getHybridUseBenefit: typeof import("./getHybridUseBenefit").getHybridUseBenefit = null as any;
export const getHybridUseBenefitOutput: typeof import("./getHybridUseBenefit").getHybridUseBenefitOutput = null as any;
utilities.lazyLoad(exports, ["getHybridUseBenefit","getHybridUseBenefitOutput"], () => require("./getHybridUseBenefit"));

export { HybridUseBenefitArgs } from "./hybridUseBenefit";
export type HybridUseBenefit = import("./hybridUseBenefit").HybridUseBenefit;
export const HybridUseBenefit: typeof import("./hybridUseBenefit").HybridUseBenefit = null as any;
utilities.lazyLoad(exports, ["HybridUseBenefit"], () => require("./hybridUseBenefit"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:softwareplan/v20191201:HybridUseBenefit":
                return new HybridUseBenefit(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "softwareplan/v20191201", _module)