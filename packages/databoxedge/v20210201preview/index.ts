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

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databoxedge/v20210201preview:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20210201preview:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databoxedge/v20210201preview", _module)
