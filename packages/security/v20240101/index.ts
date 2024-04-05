import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPricingArgs, GetPricingResult, GetPricingOutputArgs } from "./getPricing";
export const getPricing: typeof import("./getPricing").getPricing = null as any;
export const getPricingOutput: typeof import("./getPricing").getPricingOutput = null as any;
utilities.lazyLoad(exports, ["getPricing","getPricingOutput"], () => require("./getPricing"));

export { PricingArgs } from "./pricing";
export type Pricing = import("./pricing").Pricing;
export const Pricing: typeof import("./pricing").Pricing = null as any;
utilities.lazyLoad(exports, ["Pricing"], () => require("./pricing"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20240101:Pricing":
                return new Pricing(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20240101", _module)