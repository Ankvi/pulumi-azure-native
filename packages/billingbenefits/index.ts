import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DiscountArgs } from "./discount";
export type Discount = import("./discount").Discount;
export const Discount: typeof import("./discount").Discount = null as any;
utilities.lazyLoad(exports, ["Discount"], () => require("./discount"));

export { GetDiscountArgs, GetDiscountResult, GetDiscountOutputArgs } from "./getDiscount";
export const getDiscount: typeof import("./getDiscount").getDiscount = null as any;
export const getDiscountOutput: typeof import("./getDiscount").getDiscountOutput = null as any;
utilities.lazyLoad(exports, ["getDiscount","getDiscountOutput"], () => require("./getDiscount"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:billingbenefits:Discount":
                return new Discount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "billingbenefits", _module)