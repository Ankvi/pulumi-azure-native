import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AddressByNameArgs } from "./addressByName";
export type AddressByName = import("./addressByName").AddressByName;
export const AddressByName: typeof import("./addressByName").AddressByName = null as any;
utilities.lazyLoad(exports, ["AddressByName"], () => require("./addressByName"));

export { GetAddressByNameArgs, GetAddressByNameResult, GetAddressByNameOutputArgs } from "./getAddressByName";
export const getAddressByName: typeof import("./getAddressByName").getAddressByName = null as any;
export const getAddressByNameOutput: typeof import("./getAddressByName").getAddressByNameOutput = null as any;
utilities.lazyLoad(exports, ["getAddressByName","getAddressByNameOutput"], () => require("./getAddressByName"));

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
            case "azure-native:edgeorder/v20211201:AddressByName":
                return new AddressByName(name, <any>undefined, { urn })
            case "azure-native:edgeorder/v20211201:OrderItemByName":
                return new OrderItemByName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "edgeorder/v20211201", _module)