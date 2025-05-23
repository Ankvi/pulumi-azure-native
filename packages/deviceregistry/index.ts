import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssetArgs } from "./asset";
export type Asset = import("./asset").Asset;
export const Asset: typeof import("./asset").Asset = null as any;
utilities.lazyLoad(exports, ["Asset"], () => require("./asset"));

export { AssetEndpointProfileArgs } from "./assetEndpointProfile";
export type AssetEndpointProfile = import("./assetEndpointProfile").AssetEndpointProfile;
export const AssetEndpointProfile: typeof import("./assetEndpointProfile").AssetEndpointProfile = null as any;
utilities.lazyLoad(exports, ["AssetEndpointProfile"], () => require("./assetEndpointProfile"));

export { DiscoveredAssetArgs } from "./discoveredAsset";
export type DiscoveredAsset = import("./discoveredAsset").DiscoveredAsset;
export const DiscoveredAsset: typeof import("./discoveredAsset").DiscoveredAsset = null as any;
utilities.lazyLoad(exports, ["DiscoveredAsset"], () => require("./discoveredAsset"));

export { DiscoveredAssetEndpointProfileArgs } from "./discoveredAssetEndpointProfile";
export type DiscoveredAssetEndpointProfile = import("./discoveredAssetEndpointProfile").DiscoveredAssetEndpointProfile;
export const DiscoveredAssetEndpointProfile: typeof import("./discoveredAssetEndpointProfile").DiscoveredAssetEndpointProfile = null as any;
utilities.lazyLoad(exports, ["DiscoveredAssetEndpointProfile"], () => require("./discoveredAssetEndpointProfile"));

export { GetAssetArgs, GetAssetResult, GetAssetOutputArgs } from "./getAsset";
export const getAsset: typeof import("./getAsset").getAsset = null as any;
export const getAssetOutput: typeof import("./getAsset").getAssetOutput = null as any;
utilities.lazyLoad(exports, ["getAsset","getAssetOutput"], () => require("./getAsset"));

export { GetAssetEndpointProfileArgs, GetAssetEndpointProfileResult, GetAssetEndpointProfileOutputArgs } from "./getAssetEndpointProfile";
export const getAssetEndpointProfile: typeof import("./getAssetEndpointProfile").getAssetEndpointProfile = null as any;
export const getAssetEndpointProfileOutput: typeof import("./getAssetEndpointProfile").getAssetEndpointProfileOutput = null as any;
utilities.lazyLoad(exports, ["getAssetEndpointProfile","getAssetEndpointProfileOutput"], () => require("./getAssetEndpointProfile"));

export { GetDiscoveredAssetArgs, GetDiscoveredAssetResult, GetDiscoveredAssetOutputArgs } from "./getDiscoveredAsset";
export const getDiscoveredAsset: typeof import("./getDiscoveredAsset").getDiscoveredAsset = null as any;
export const getDiscoveredAssetOutput: typeof import("./getDiscoveredAsset").getDiscoveredAssetOutput = null as any;
utilities.lazyLoad(exports, ["getDiscoveredAsset","getDiscoveredAssetOutput"], () => require("./getDiscoveredAsset"));

export { GetDiscoveredAssetEndpointProfileArgs, GetDiscoveredAssetEndpointProfileResult, GetDiscoveredAssetEndpointProfileOutputArgs } from "./getDiscoveredAssetEndpointProfile";
export const getDiscoveredAssetEndpointProfile: typeof import("./getDiscoveredAssetEndpointProfile").getDiscoveredAssetEndpointProfile = null as any;
export const getDiscoveredAssetEndpointProfileOutput: typeof import("./getDiscoveredAssetEndpointProfile").getDiscoveredAssetEndpointProfileOutput = null as any;
utilities.lazyLoad(exports, ["getDiscoveredAssetEndpointProfile","getDiscoveredAssetEndpointProfileOutput"], () => require("./getDiscoveredAssetEndpointProfile"));

export { GetSchemaArgs, GetSchemaResult, GetSchemaOutputArgs } from "./getSchema";
export const getSchema: typeof import("./getSchema").getSchema = null as any;
export const getSchemaOutput: typeof import("./getSchema").getSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getSchema","getSchemaOutput"], () => require("./getSchema"));

export { GetSchemaRegistryArgs, GetSchemaRegistryResult, GetSchemaRegistryOutputArgs } from "./getSchemaRegistry";
export const getSchemaRegistry: typeof import("./getSchemaRegistry").getSchemaRegistry = null as any;
export const getSchemaRegistryOutput: typeof import("./getSchemaRegistry").getSchemaRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getSchemaRegistry","getSchemaRegistryOutput"], () => require("./getSchemaRegistry"));

export { GetSchemaVersionArgs, GetSchemaVersionResult, GetSchemaVersionOutputArgs } from "./getSchemaVersion";
export const getSchemaVersion: typeof import("./getSchemaVersion").getSchemaVersion = null as any;
export const getSchemaVersionOutput: typeof import("./getSchemaVersion").getSchemaVersionOutput = null as any;
utilities.lazyLoad(exports, ["getSchemaVersion","getSchemaVersionOutput"], () => require("./getSchemaVersion"));

export { SchemaArgs } from "./schema";
export type Schema = import("./schema").Schema;
export const Schema: typeof import("./schema").Schema = null as any;
utilities.lazyLoad(exports, ["Schema"], () => require("./schema"));

export { SchemaRegistryArgs } from "./schemaRegistry";
export type SchemaRegistry = import("./schemaRegistry").SchemaRegistry;
export const SchemaRegistry: typeof import("./schemaRegistry").SchemaRegistry = null as any;
utilities.lazyLoad(exports, ["SchemaRegistry"], () => require("./schemaRegistry"));

export { SchemaVersionArgs } from "./schemaVersion";
export type SchemaVersion = import("./schemaVersion").SchemaVersion;
export const SchemaVersion: typeof import("./schemaVersion").SchemaVersion = null as any;
utilities.lazyLoad(exports, ["SchemaVersion"], () => require("./schemaVersion"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:deviceregistry:Asset":
                return new Asset(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:AssetEndpointProfile":
                return new AssetEndpointProfile(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:DiscoveredAsset":
                return new DiscoveredAsset(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:DiscoveredAssetEndpointProfile":
                return new DiscoveredAssetEndpointProfile(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:Schema":
                return new Schema(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:SchemaRegistry":
                return new SchemaRegistry(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:SchemaVersion":
                return new SchemaVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "deviceregistry", _module)