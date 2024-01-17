import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AddressArgs } from "./address";
export type Address = import("./address").Address;
export const Address: typeof import("./address").Address = null as any;
utilities.lazyLoad(exports, ["Address"], () => require("./address"));

export { AddressByNameArgs } from "./addressByName";
export type AddressByName = import("./addressByName").AddressByName;
export const AddressByName: typeof import("./addressByName").AddressByName = null as any;
utilities.lazyLoad(exports, ["AddressByName"], () => require("./addressByName"));

export { GetAddressArgs, GetAddressResult, GetAddressOutputArgs } from "./getAddress";
export const getAddress: typeof import("./getAddress").getAddress = null as any;
export const getAddressOutput: typeof import("./getAddress").getAddressOutput = null as any;
utilities.lazyLoad(exports, ["getAddress","getAddressOutput"], () => require("./getAddress"));

export { GetAddressByNameArgs, GetAddressByNameResult, GetAddressByNameOutputArgs } from "./getAddressByName";
export const getAddressByName: typeof import("./getAddressByName").getAddressByName = null as any;
export const getAddressByNameOutput: typeof import("./getAddressByName").getAddressByNameOutput = null as any;
utilities.lazyLoad(exports, ["getAddressByName","getAddressByNameOutput"], () => require("./getAddressByName"));

export { GetOrderItemArgs, GetOrderItemResult, GetOrderItemOutputArgs } from "./getOrderItem";
export const getOrderItem: typeof import("./getOrderItem").getOrderItem = null as any;
export const getOrderItemOutput: typeof import("./getOrderItem").getOrderItemOutput = null as any;
utilities.lazyLoad(exports, ["getOrderItem","getOrderItemOutput"], () => require("./getOrderItem"));

export { GetOrderItemByNameArgs, GetOrderItemByNameResult, GetOrderItemByNameOutputArgs } from "./getOrderItemByName";
export const getOrderItemByName: typeof import("./getOrderItemByName").getOrderItemByName = null as any;
export const getOrderItemByNameOutput: typeof import("./getOrderItemByName").getOrderItemByNameOutput = null as any;
utilities.lazyLoad(exports, ["getOrderItemByName","getOrderItemByNameOutput"], () => require("./getOrderItemByName"));

export { ListConfigurationsArgs, ListConfigurationsResult, ListConfigurationsOutputArgs } from "./listConfigurations";
export const listConfigurations: typeof import("./listConfigurations").listConfigurations = null as any;
export const listConfigurationsOutput: typeof import("./listConfigurations").listConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listConfigurations","listConfigurationsOutput"], () => require("./listConfigurations"));

export { ListProductFamiliesArgs, ListProductFamiliesResult, ListProductFamiliesOutputArgs } from "./listProductFamilies";
export const listProductFamilies: typeof import("./listProductFamilies").listProductFamilies = null as any;
export const listProductFamiliesOutput: typeof import("./listProductFamilies").listProductFamiliesOutput = null as any;
utilities.lazyLoad(exports, ["listProductFamilies","listProductFamiliesOutput"], () => require("./listProductFamilies"));

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

export { OrderItemByNameArgs } from "./orderItemByName";
export type OrderItemByName = import("./orderItemByName").OrderItemByName;
export const OrderItemByName: typeof import("./orderItemByName").OrderItemByName = null as any;
utilities.lazyLoad(exports, ["OrderItemByName"], () => require("./orderItemByName"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:edgeorder:Address":
                return new Address(name, <any>undefined, { urn })
            case "azure-native:edgeorder:AddressByName":
                return new AddressByName(name, <any>undefined, { urn })
            case "azure-native:edgeorder:OrderItem":
                return new OrderItem(name, <any>undefined, { urn })
            case "azure-native:edgeorder:OrderItemByName":
                return new OrderItemByName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "edgeorder", _module)