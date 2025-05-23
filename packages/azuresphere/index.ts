import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CatalogArgs } from "./catalog";
export type Catalog = import("./catalog").Catalog;
export const Catalog: typeof import("./catalog").Catalog = null as any;
utilities.lazyLoad(exports, ["Catalog"], () => require("./catalog"));

export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));

export { DeviceArgs } from "./device";
export type Device = import("./device").Device;
export const Device: typeof import("./device").Device = null as any;
utilities.lazyLoad(exports, ["Device"], () => require("./device"));

export { DeviceGroupArgs } from "./deviceGroup";
export type DeviceGroup = import("./deviceGroup").DeviceGroup;
export const DeviceGroup: typeof import("./deviceGroup").DeviceGroup = null as any;
utilities.lazyLoad(exports, ["DeviceGroup"], () => require("./deviceGroup"));

export { GetCatalogArgs, GetCatalogResult, GetCatalogOutputArgs } from "./getCatalog";
export const getCatalog: typeof import("./getCatalog").getCatalog = null as any;
export const getCatalogOutput: typeof import("./getCatalog").getCatalogOutput = null as any;
utilities.lazyLoad(exports, ["getCatalog","getCatalogOutput"], () => require("./getCatalog"));

export { GetDeploymentArgs, GetDeploymentResult, GetDeploymentOutputArgs } from "./getDeployment";
export const getDeployment: typeof import("./getDeployment").getDeployment = null as any;
export const getDeploymentOutput: typeof import("./getDeployment").getDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getDeployment","getDeploymentOutput"], () => require("./getDeployment"));

export { GetDeviceArgs, GetDeviceResult, GetDeviceOutputArgs } from "./getDevice";
export const getDevice: typeof import("./getDevice").getDevice = null as any;
export const getDeviceOutput: typeof import("./getDevice").getDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getDevice","getDeviceOutput"], () => require("./getDevice"));

export { GetDeviceGroupArgs, GetDeviceGroupResult, GetDeviceGroupOutputArgs } from "./getDeviceGroup";
export const getDeviceGroup: typeof import("./getDeviceGroup").getDeviceGroup = null as any;
export const getDeviceGroupOutput: typeof import("./getDeviceGroup").getDeviceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDeviceGroup","getDeviceGroupOutput"], () => require("./getDeviceGroup"));

export { GetImageArgs, GetImageResult, GetImageOutputArgs } from "./getImage";
export const getImage: typeof import("./getImage").getImage = null as any;
export const getImageOutput: typeof import("./getImage").getImageOutput = null as any;
utilities.lazyLoad(exports, ["getImage","getImageOutput"], () => require("./getImage"));

export { GetProductArgs, GetProductResult, GetProductOutputArgs } from "./getProduct";
export const getProduct: typeof import("./getProduct").getProduct = null as any;
export const getProductOutput: typeof import("./getProduct").getProductOutput = null as any;
utilities.lazyLoad(exports, ["getProduct","getProductOutput"], () => require("./getProduct"));

export { ImageArgs } from "./image";
export type Image = import("./image").Image;
export const Image: typeof import("./image").Image = null as any;
utilities.lazyLoad(exports, ["Image"], () => require("./image"));

export { ListCatalogDeploymentsArgs, ListCatalogDeploymentsResult, ListCatalogDeploymentsOutputArgs } from "./listCatalogDeployments";
export const listCatalogDeployments: typeof import("./listCatalogDeployments").listCatalogDeployments = null as any;
export const listCatalogDeploymentsOutput: typeof import("./listCatalogDeployments").listCatalogDeploymentsOutput = null as any;
utilities.lazyLoad(exports, ["listCatalogDeployments","listCatalogDeploymentsOutput"], () => require("./listCatalogDeployments"));

export { ListCatalogDeviceGroupsArgs, ListCatalogDeviceGroupsResult, ListCatalogDeviceGroupsOutputArgs } from "./listCatalogDeviceGroups";
export const listCatalogDeviceGroups: typeof import("./listCatalogDeviceGroups").listCatalogDeviceGroups = null as any;
export const listCatalogDeviceGroupsOutput: typeof import("./listCatalogDeviceGroups").listCatalogDeviceGroupsOutput = null as any;
utilities.lazyLoad(exports, ["listCatalogDeviceGroups","listCatalogDeviceGroupsOutput"], () => require("./listCatalogDeviceGroups"));

export { ListCatalogDeviceInsightsArgs, ListCatalogDeviceInsightsResult, ListCatalogDeviceInsightsOutputArgs } from "./listCatalogDeviceInsights";
export const listCatalogDeviceInsights: typeof import("./listCatalogDeviceInsights").listCatalogDeviceInsights = null as any;
export const listCatalogDeviceInsightsOutput: typeof import("./listCatalogDeviceInsights").listCatalogDeviceInsightsOutput = null as any;
utilities.lazyLoad(exports, ["listCatalogDeviceInsights","listCatalogDeviceInsightsOutput"], () => require("./listCatalogDeviceInsights"));

export { ListCatalogDevicesArgs, ListCatalogDevicesResult, ListCatalogDevicesOutputArgs } from "./listCatalogDevices";
export const listCatalogDevices: typeof import("./listCatalogDevices").listCatalogDevices = null as any;
export const listCatalogDevicesOutput: typeof import("./listCatalogDevices").listCatalogDevicesOutput = null as any;
utilities.lazyLoad(exports, ["listCatalogDevices","listCatalogDevicesOutput"], () => require("./listCatalogDevices"));

export { ProductArgs } from "./product";
export type Product = import("./product").Product;
export const Product: typeof import("./product").Product = null as any;
utilities.lazyLoad(exports, ["Product"], () => require("./product"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azuresphere:Catalog":
                return new Catalog(name, <any>undefined, { urn })
            case "azure-native:azuresphere:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:azuresphere:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:azuresphere:DeviceGroup":
                return new DeviceGroup(name, <any>undefined, { urn })
            case "azure-native:azuresphere:Image":
                return new Image(name, <any>undefined, { urn })
            case "azure-native:azuresphere:Product":
                return new Product(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azuresphere", _module)