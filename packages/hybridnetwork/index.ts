import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArtifactManifestArgs } from "./artifactManifest";
export type ArtifactManifest = import("./artifactManifest").ArtifactManifest;
export const ArtifactManifest: typeof import("./artifactManifest").ArtifactManifest = null as any;
utilities.lazyLoad(exports, ["ArtifactManifest"], () => require("./artifactManifest"));

export { ArtifactStoreArgs } from "./artifactStore";
export type ArtifactStore = import("./artifactStore").ArtifactStore;
export const ArtifactStore: typeof import("./artifactStore").ArtifactStore = null as any;
utilities.lazyLoad(exports, ["ArtifactStore"], () => require("./artifactStore"));

export { ConfigurationGroupSchemaArgs } from "./configurationGroupSchema";
export type ConfigurationGroupSchema = import("./configurationGroupSchema").ConfigurationGroupSchema;
export const ConfigurationGroupSchema: typeof import("./configurationGroupSchema").ConfigurationGroupSchema = null as any;
utilities.lazyLoad(exports, ["ConfigurationGroupSchema"], () => require("./configurationGroupSchema"));

export { ConfigurationGroupValueArgs } from "./configurationGroupValue";
export type ConfigurationGroupValue = import("./configurationGroupValue").ConfigurationGroupValue;
export const ConfigurationGroupValue: typeof import("./configurationGroupValue").ConfigurationGroupValue = null as any;
utilities.lazyLoad(exports, ["ConfigurationGroupValue"], () => require("./configurationGroupValue"));

export { DeviceArgs } from "./device";
export type Device = import("./device").Device;
export const Device: typeof import("./device").Device = null as any;
utilities.lazyLoad(exports, ["Device"], () => require("./device"));

export { GetArtifactManifestArgs, GetArtifactManifestResult, GetArtifactManifestOutputArgs } from "./getArtifactManifest";
export const getArtifactManifest: typeof import("./getArtifactManifest").getArtifactManifest = null as any;
export const getArtifactManifestOutput: typeof import("./getArtifactManifest").getArtifactManifestOutput = null as any;
utilities.lazyLoad(exports, ["getArtifactManifest","getArtifactManifestOutput"], () => require("./getArtifactManifest"));

export { GetArtifactStoreArgs, GetArtifactStoreResult, GetArtifactStoreOutputArgs } from "./getArtifactStore";
export const getArtifactStore: typeof import("./getArtifactStore").getArtifactStore = null as any;
export const getArtifactStoreOutput: typeof import("./getArtifactStore").getArtifactStoreOutput = null as any;
utilities.lazyLoad(exports, ["getArtifactStore","getArtifactStoreOutput"], () => require("./getArtifactStore"));

export { GetConfigurationGroupSchemaArgs, GetConfigurationGroupSchemaResult, GetConfigurationGroupSchemaOutputArgs } from "./getConfigurationGroupSchema";
export const getConfigurationGroupSchema: typeof import("./getConfigurationGroupSchema").getConfigurationGroupSchema = null as any;
export const getConfigurationGroupSchemaOutput: typeof import("./getConfigurationGroupSchema").getConfigurationGroupSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationGroupSchema","getConfigurationGroupSchemaOutput"], () => require("./getConfigurationGroupSchema"));

export { GetConfigurationGroupValueArgs, GetConfigurationGroupValueResult, GetConfigurationGroupValueOutputArgs } from "./getConfigurationGroupValue";
export const getConfigurationGroupValue: typeof import("./getConfigurationGroupValue").getConfigurationGroupValue = null as any;
export const getConfigurationGroupValueOutput: typeof import("./getConfigurationGroupValue").getConfigurationGroupValueOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationGroupValue","getConfigurationGroupValueOutput"], () => require("./getConfigurationGroupValue"));

export { GetDeviceArgs, GetDeviceResult, GetDeviceOutputArgs } from "./getDevice";
export const getDevice: typeof import("./getDevice").getDevice = null as any;
export const getDeviceOutput: typeof import("./getDevice").getDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getDevice","getDeviceOutput"], () => require("./getDevice"));

export { GetNetworkFunctionArgs, GetNetworkFunctionResult, GetNetworkFunctionOutputArgs } from "./getNetworkFunction";
export const getNetworkFunction: typeof import("./getNetworkFunction").getNetworkFunction = null as any;
export const getNetworkFunctionOutput: typeof import("./getNetworkFunction").getNetworkFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFunction","getNetworkFunctionOutput"], () => require("./getNetworkFunction"));

export { GetNetworkFunctionDefinitionGroupArgs, GetNetworkFunctionDefinitionGroupResult, GetNetworkFunctionDefinitionGroupOutputArgs } from "./getNetworkFunctionDefinitionGroup";
export const getNetworkFunctionDefinitionGroup: typeof import("./getNetworkFunctionDefinitionGroup").getNetworkFunctionDefinitionGroup = null as any;
export const getNetworkFunctionDefinitionGroupOutput: typeof import("./getNetworkFunctionDefinitionGroup").getNetworkFunctionDefinitionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFunctionDefinitionGroup","getNetworkFunctionDefinitionGroupOutput"], () => require("./getNetworkFunctionDefinitionGroup"));

export { GetNetworkFunctionDefinitionVersionArgs, GetNetworkFunctionDefinitionVersionResult, GetNetworkFunctionDefinitionVersionOutputArgs } from "./getNetworkFunctionDefinitionVersion";
export const getNetworkFunctionDefinitionVersion: typeof import("./getNetworkFunctionDefinitionVersion").getNetworkFunctionDefinitionVersion = null as any;
export const getNetworkFunctionDefinitionVersionOutput: typeof import("./getNetworkFunctionDefinitionVersion").getNetworkFunctionDefinitionVersionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkFunctionDefinitionVersion","getNetworkFunctionDefinitionVersionOutput"], () => require("./getNetworkFunctionDefinitionVersion"));

export { GetNetworkServiceDesignGroupArgs, GetNetworkServiceDesignGroupResult, GetNetworkServiceDesignGroupOutputArgs } from "./getNetworkServiceDesignGroup";
export const getNetworkServiceDesignGroup: typeof import("./getNetworkServiceDesignGroup").getNetworkServiceDesignGroup = null as any;
export const getNetworkServiceDesignGroupOutput: typeof import("./getNetworkServiceDesignGroup").getNetworkServiceDesignGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkServiceDesignGroup","getNetworkServiceDesignGroupOutput"], () => require("./getNetworkServiceDesignGroup"));

export { GetNetworkServiceDesignVersionArgs, GetNetworkServiceDesignVersionResult, GetNetworkServiceDesignVersionOutputArgs } from "./getNetworkServiceDesignVersion";
export const getNetworkServiceDesignVersion: typeof import("./getNetworkServiceDesignVersion").getNetworkServiceDesignVersion = null as any;
export const getNetworkServiceDesignVersionOutput: typeof import("./getNetworkServiceDesignVersion").getNetworkServiceDesignVersionOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkServiceDesignVersion","getNetworkServiceDesignVersionOutput"], () => require("./getNetworkServiceDesignVersion"));

export { GetPublisherArgs, GetPublisherResult, GetPublisherOutputArgs } from "./getPublisher";
export const getPublisher: typeof import("./getPublisher").getPublisher = null as any;
export const getPublisherOutput: typeof import("./getPublisher").getPublisherOutput = null as any;
utilities.lazyLoad(exports, ["getPublisher","getPublisherOutput"], () => require("./getPublisher"));

export { GetSiteArgs, GetSiteResult, GetSiteOutputArgs } from "./getSite";
export const getSite: typeof import("./getSite").getSite = null as any;
export const getSiteOutput: typeof import("./getSite").getSiteOutput = null as any;
utilities.lazyLoad(exports, ["getSite","getSiteOutput"], () => require("./getSite"));

export { GetSiteNetworkServiceArgs, GetSiteNetworkServiceResult, GetSiteNetworkServiceOutputArgs } from "./getSiteNetworkService";
export const getSiteNetworkService: typeof import("./getSiteNetworkService").getSiteNetworkService = null as any;
export const getSiteNetworkServiceOutput: typeof import("./getSiteNetworkService").getSiteNetworkServiceOutput = null as any;
utilities.lazyLoad(exports, ["getSiteNetworkService","getSiteNetworkServiceOutput"], () => require("./getSiteNetworkService"));

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

export { ListArtifactManifestCredentialArgs, ListArtifactManifestCredentialResult, ListArtifactManifestCredentialOutputArgs } from "./listArtifactManifestCredential";
export const listArtifactManifestCredential: typeof import("./listArtifactManifestCredential").listArtifactManifestCredential = null as any;
export const listArtifactManifestCredentialOutput: typeof import("./listArtifactManifestCredential").listArtifactManifestCredentialOutput = null as any;
utilities.lazyLoad(exports, ["listArtifactManifestCredential","listArtifactManifestCredentialOutput"], () => require("./listArtifactManifestCredential"));

export { ListArtifactStoreNetworkFabricControllerPrivateEndPointsArgs, ListArtifactStoreNetworkFabricControllerPrivateEndPointsResult, ListArtifactStoreNetworkFabricControllerPrivateEndPointsOutputArgs } from "./listArtifactStoreNetworkFabricControllerPrivateEndPoints";
export const listArtifactStoreNetworkFabricControllerPrivateEndPoints: typeof import("./listArtifactStoreNetworkFabricControllerPrivateEndPoints").listArtifactStoreNetworkFabricControllerPrivateEndPoints = null as any;
export const listArtifactStoreNetworkFabricControllerPrivateEndPointsOutput: typeof import("./listArtifactStoreNetworkFabricControllerPrivateEndPoints").listArtifactStoreNetworkFabricControllerPrivateEndPointsOutput = null as any;
utilities.lazyLoad(exports, ["listArtifactStoreNetworkFabricControllerPrivateEndPoints","listArtifactStoreNetworkFabricControllerPrivateEndPointsOutput"], () => require("./listArtifactStoreNetworkFabricControllerPrivateEndPoints"));

export { ListArtifactStorePrivateEndPointsArgs, ListArtifactStorePrivateEndPointsResult, ListArtifactStorePrivateEndPointsOutputArgs } from "./listArtifactStorePrivateEndPoints";
export const listArtifactStorePrivateEndPoints: typeof import("./listArtifactStorePrivateEndPoints").listArtifactStorePrivateEndPoints = null as any;
export const listArtifactStorePrivateEndPointsOutput: typeof import("./listArtifactStorePrivateEndPoints").listArtifactStorePrivateEndPointsOutput = null as any;
utilities.lazyLoad(exports, ["listArtifactStorePrivateEndPoints","listArtifactStorePrivateEndPointsOutput"], () => require("./listArtifactStorePrivateEndPoints"));

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

export { NetworkFunctionDefinitionGroupArgs } from "./networkFunctionDefinitionGroup";
export type NetworkFunctionDefinitionGroup = import("./networkFunctionDefinitionGroup").NetworkFunctionDefinitionGroup;
export const NetworkFunctionDefinitionGroup: typeof import("./networkFunctionDefinitionGroup").NetworkFunctionDefinitionGroup = null as any;
utilities.lazyLoad(exports, ["NetworkFunctionDefinitionGroup"], () => require("./networkFunctionDefinitionGroup"));

export { NetworkFunctionDefinitionVersionArgs } from "./networkFunctionDefinitionVersion";
export type NetworkFunctionDefinitionVersion = import("./networkFunctionDefinitionVersion").NetworkFunctionDefinitionVersion;
export const NetworkFunctionDefinitionVersion: typeof import("./networkFunctionDefinitionVersion").NetworkFunctionDefinitionVersion = null as any;
utilities.lazyLoad(exports, ["NetworkFunctionDefinitionVersion"], () => require("./networkFunctionDefinitionVersion"));

export { NetworkServiceDesignGroupArgs } from "./networkServiceDesignGroup";
export type NetworkServiceDesignGroup = import("./networkServiceDesignGroup").NetworkServiceDesignGroup;
export const NetworkServiceDesignGroup: typeof import("./networkServiceDesignGroup").NetworkServiceDesignGroup = null as any;
utilities.lazyLoad(exports, ["NetworkServiceDesignGroup"], () => require("./networkServiceDesignGroup"));

export { NetworkServiceDesignVersionArgs } from "./networkServiceDesignVersion";
export type NetworkServiceDesignVersion = import("./networkServiceDesignVersion").NetworkServiceDesignVersion;
export const NetworkServiceDesignVersion: typeof import("./networkServiceDesignVersion").NetworkServiceDesignVersion = null as any;
utilities.lazyLoad(exports, ["NetworkServiceDesignVersion"], () => require("./networkServiceDesignVersion"));

export { PublisherArgs } from "./publisher";
export type Publisher = import("./publisher").Publisher;
export const Publisher: typeof import("./publisher").Publisher = null as any;
utilities.lazyLoad(exports, ["Publisher"], () => require("./publisher"));

export { SiteArgs } from "./site";
export type Site = import("./site").Site;
export const Site: typeof import("./site").Site = null as any;
utilities.lazyLoad(exports, ["Site"], () => require("./site"));

export { SiteNetworkServiceArgs } from "./siteNetworkService";
export type SiteNetworkService = import("./siteNetworkService").SiteNetworkService;
export const SiteNetworkService: typeof import("./siteNetworkService").SiteNetworkService = null as any;
utilities.lazyLoad(exports, ["SiteNetworkService"], () => require("./siteNetworkService"));

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

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridnetwork:ArtifactManifest":
                return new ArtifactManifest(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:ArtifactStore":
                return new ArtifactStore(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:ConfigurationGroupSchema":
                return new ConfigurationGroupSchema(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:ConfigurationGroupValue":
                return new ConfigurationGroupValue(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkFunction":
                return new NetworkFunction(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkFunctionDefinitionGroup":
                return new NetworkFunctionDefinitionGroup(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkFunctionDefinitionVersion":
                return new NetworkFunctionDefinitionVersion(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkServiceDesignGroup":
                return new NetworkServiceDesignGroup(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:NetworkServiceDesignVersion":
                return new NetworkServiceDesignVersion(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:Publisher":
                return new Publisher(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:Site":
                return new Site(name, <any>undefined, { urn })
            case "azure-native:hybridnetwork:SiteNetworkService":
                return new SiteNetworkService(name, <any>undefined, { urn })
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