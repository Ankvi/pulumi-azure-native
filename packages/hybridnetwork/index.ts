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

export { GetNetworkFunctionArgs, GetNetworkFunctionResult, GetNetworkFunctionOutputArgs } from "./getNetworkFunction";
export const getNetworkFunction: typeof import("./getNetworkFunction").getNetworkFunction = null as any;
export const getNetworkFunctionOutput: typeof import("./getNetworkFunction").getNetworkFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFunction","getNetworkFunctionOutput"], () => require("./getNetworkFunction"));

export { GetVendorArgs, GetVendorResult, GetVendorOutputArgs } from "./getVendor";
export const getVendor: typeof import("./getVendor").getVendor = null as any;
export const getVendorOutput: typeof import("./getVendor").getVendorOutput = null as any;
utilities.lazyLoad(exports, ["getVendor","getVendorOutput"], () => require("./getVendor"));

export { GetVendorSkuPreviewArgs, GetVendorSkuPreviewResult, GetVendorSkuPreviewOutputArgs } from "./getVendorSkuPreview";
export const getVendorSkuPreview: typeof import("./getVendorSkuPreview").getVendorSkuPreview = null as any;
export const getVendorSkuPreviewOutput: typeof import("./getVendorSkuPreview").getVendorSkuPreviewOutput = null as any;
utilities.lazyLoad(exports, ["getVendorSkuPreview","getVendorSkuPreviewOutput"], () => require("./getVendorSkuPreview"));

export { GetVendorSkusArgs, GetVendorSkusResult, GetVendorSkusOutputArgs } from "./getVendorSkus";
export const getVendorSkus: typeof import("./getVendorSkus").getVendorSkus = null as any;
export const getVendorSkusOutput: typeof import("./getVendorSkus").getVendorSkusOutput = null as any;
utilities.lazyLoad(exports, ["getVendorSkus","getVendorSkusOutput"], () => require("./getVendorSkus"));

export { ListDeviceRegistrationKeyArgs, ListDeviceRegistrationKeyResult, ListDeviceRegistrationKeyOutputArgs } from "./listDeviceRegistrationKey";
export const listDeviceRegistrationKey: typeof import("./listDeviceRegistrationKey").listDeviceRegistrationKey = null as any;
export const listDeviceRegistrationKeyOutput: typeof import("./listDeviceRegistrationKey").listDeviceRegistrationKeyOutput = null as any;
utilities.lazyLoad(exports, ["listDeviceRegistrationKey","listDeviceRegistrationKeyOutput"], () => require("./listDeviceRegistrationKey"));

export { ListVendorSkusCredentialArgs, ListVendorSkusCredentialResult, ListVendorSkusCredentialOutputArgs } from "./listVendorSkusCredential";
export const listVendorSkusCredential: typeof import("./listVendorSkusCredential").listVendorSkusCredential = null as any;
export const listVendorSkusCredentialOutput: typeof import("./listVendorSkusCredential").listVendorSkusCredentialOutput = null as any;
utilities.lazyLoad(exports, ["listVendorSkusCredential","listVendorSkusCredentialOutput"], () => require("./listVendorSkusCredential"));

export { NetworkFunctionArgs } from "./networkFunction";
export type NetworkFunction = import("./networkFunction").NetworkFunction;
export const NetworkFunction: typeof import("./networkFunction").NetworkFunction = null as any;
utilities.lazyLoad(exports, ["NetworkFunction"], () => require("./networkFunction"));

export { VendorArgs } from "./vendor";
export type Vendor = import("./vendor").Vendor;
export const Vendor: typeof import("./vendor").Vendor = null as any;
utilities.lazyLoad(exports, ["Vendor"], () => require("./vendor"));

export { VendorSkuPreviewArgs } from "./vendorSkuPreview";
export type VendorSkuPreview = import("./vendorSkuPreview").VendorSkuPreview;
export const VendorSkuPreview: typeof import("./vendorSkuPreview").VendorSkuPreview = null as any;
utilities.lazyLoad(exports, ["VendorSkuPreview"], () => require("./vendorSkuPreview"));

export { VendorSkusArgs } from "./vendorSkus";
export type VendorSkus = import("./vendorSkus").VendorSkus;
export const VendorSkus: typeof import("./vendorSkus").VendorSkus = null as any;
utilities.lazyLoad(exports, ["VendorSkus"], () => require("./vendorSkus"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20220101preview from "./v20220101preview";

export {
    v20220101preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridnetwork:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkFunction":
                return new NetworkFunction(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:Vendor":
                return new Vendor(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:VendorSkuPreview":
                return new VendorSkuPreview(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:VendorSkus":
                return new VendorSkus(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridnetwork", _module)
