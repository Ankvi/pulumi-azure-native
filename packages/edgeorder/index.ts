import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AddressArgs } from "./address";
export type Address = import("./address").Address;
export const Address: typeof import("./address").Address = null as any;
utilities.lazyLoad(exports, ["Address"], () => require("./address"));

export { GetAddressArgs, GetAddressResult, GetAddressOutputArgs } from "./getAddress";
export const getAddress: typeof import("./getAddress").getAddress = null as any;
export const getAddressOutput: typeof import("./getAddress").getAddressOutput = null as any;
utilities.lazyLoad(exports, ["getAddress","getAddressOutput"], () => require("./getAddress"));

export { GetOrderItemArgs, GetOrderItemResult, GetOrderItemOutputArgs } from "./getOrderItem";
export const getOrderItem: typeof import("./getOrderItem").getOrderItem = null as any;
export const getOrderItemOutput: typeof import("./getOrderItem").getOrderItemOutput = null as any;
utilities.lazyLoad(exports, ["getOrderItem","getOrderItemOutput"], () => require("./getOrderItem"));

export { ListProductsAndConfigurationProductFamiliesArgs, ListProductsAndConfigurationProductFamiliesResult, ListProductsAndConfigurationProductFamiliesOutputArgs } from "./listProductsAndConfigurationProductFamilies";
export const listProductsAndConfigurationProductFamilies: typeof import("./listProductsAndConfigurationProductFamilies").listProductsAndConfigurationProductFamilies = null as any;
export const listProductsAndConfigurationProductFamiliesOutput: typeof import("./listProductsAndConfigurationProductFamilies").listProductsAndConfigurationProductFamiliesOutput = null as any;
utilities.lazyLoad(exports, ["listProductsAndConfigurationProductFamilies","listProductsAndConfigurationProductFamiliesOutput"], () => require("./listProductsAndConfigurationProductFamilies"));

export { ListProductsAndConfigurationsArgs, ListProductsAndConfigurationsResult, ListProductsAndConfigurationsOutputArgs } from "./listProductsAndConfigurations";
export const listProductsAndConfigurations: typeof import("./listProductsAndConfigurations").listProductsAndConfigurations = null as any;
export const listProductsAndConfigurationsOutput: typeof import("./listProductsAndConfigurations").listProductsAndConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listProductsAndConfigurations","listProductsAndConfigurationsOutput"], () => require("./listProductsAndConfigurations"));

export { OrderItemArgs } from "./orderItem";
export type OrderItem = import("./orderItem").OrderItem;
export const OrderItem: typeof import("./orderItem").OrderItem = null as any;
utilities.lazyLoad(exports, ["OrderItem"], () => require("./orderItem"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:edgeorder:Address":
                return new Address(name, <any>undefined, { urn })
            case "azure-native:edgeorder:OrderItem":
                return new OrderItem(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "edgeorder", _module)