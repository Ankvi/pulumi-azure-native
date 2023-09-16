import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DeviceArgs } from "./device";
export type Device = import("./device").Device;
export const Device: typeof import("./device").Device = null as any;
utilities.lazyLoad(exports, ["Device"], () => require("./device"));

export { GetDeviceArgs, GetDeviceResult, GetDeviceOutputArgs } from "./getDevice";
export const getDevice: typeof import("./getDevice").getDevice = null as any;
export const getDeviceOutput: typeof import("./getDevice").getDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getDevice","getDeviceOutput"], () => require("./getDevice"));

export { GetDeviceExtendedInformationArgs, GetDeviceExtendedInformationResult, GetDeviceExtendedInformationOutputArgs } from "./getDeviceExtendedInformation";
export const getDeviceExtendedInformation: typeof import("./getDeviceExtendedInformation").getDeviceExtendedInformation = null as any;
export const getDeviceExtendedInformationOutput: typeof import("./getDeviceExtendedInformation").getDeviceExtendedInformationOutput = null as any;
utilities.lazyLoad(exports, ["getDeviceExtendedInformation","getDeviceExtendedInformationOutput"], () => require("./getDeviceExtendedInformation"));

export { GetOrderArgs, GetOrderResult, GetOrderOutputArgs } from "./getOrder";
export const getOrder: typeof import("./getOrder").getOrder = null as any;
export const getOrderOutput: typeof import("./getOrder").getOrderOutput = null as any;
utilities.lazyLoad(exports, ["getOrder","getOrderOutput"], () => require("./getOrder"));

export { ListOrderDCAccessCodeArgs, ListOrderDCAccessCodeResult, ListOrderDCAccessCodeOutputArgs } from "./listOrderDCAccessCode";
export const listOrderDCAccessCode: typeof import("./listOrderDCAccessCode").listOrderDCAccessCode = null as any;
export const listOrderDCAccessCodeOutput: typeof import("./listOrderDCAccessCode").listOrderDCAccessCodeOutput = null as any;
utilities.lazyLoad(exports, ["listOrderDCAccessCode","listOrderDCAccessCodeOutput"], () => require("./listOrderDCAccessCode"));

export { OrderArgs } from "./order";
export type Order = import("./order").Order;
export const Order: typeof import("./order").Order = null as any;
utilities.lazyLoad(exports, ["Order"], () => require("./order"));


// Export enums:
export * from "../types/enums/v20220401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databoxedge/v20220401preview:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220401preview:Order":
                return new Order(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databoxedge/v20220401preview", _module)
