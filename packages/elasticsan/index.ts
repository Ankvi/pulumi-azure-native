import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ElasticSanArgs } from "./elasticSan";
export type ElasticSan = import("./elasticSan").ElasticSan;
export const ElasticSan: typeof import("./elasticSan").ElasticSan = null as any;
utilities.lazyLoad(exports, ["ElasticSan"], () => require("./elasticSan"));

export { GetElasticSanArgs, GetElasticSanResult, GetElasticSanOutputArgs } from "./getElasticSan";
export const getElasticSan: typeof import("./getElasticSan").getElasticSan = null as any;
export const getElasticSanOutput: typeof import("./getElasticSan").getElasticSanOutput = null as any;
utilities.lazyLoad(exports, ["getElasticSan","getElasticSanOutput"], () => require("./getElasticSan"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { GetVolumeGroupArgs, GetVolumeGroupResult, GetVolumeGroupOutputArgs } from "./getVolumeGroup";
export const getVolumeGroup: typeof import("./getVolumeGroup").getVolumeGroup = null as any;
export const getVolumeGroupOutput: typeof import("./getVolumeGroup").getVolumeGroupOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeGroup","getVolumeGroupOutput"], () => require("./getVolumeGroup"));

export { GetVolumeSnapshotArgs, GetVolumeSnapshotResult, GetVolumeSnapshotOutputArgs } from "./getVolumeSnapshot";
export const getVolumeSnapshot: typeof import("./getVolumeSnapshot").getVolumeSnapshot = null as any;
export const getVolumeSnapshotOutput: typeof import("./getVolumeSnapshot").getVolumeSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeSnapshot","getVolumeSnapshotOutput"], () => require("./getVolumeSnapshot"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { VolumeArgs } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));

export { VolumeGroupArgs } from "./volumeGroup";
export type VolumeGroup = import("./volumeGroup").VolumeGroup;
export const VolumeGroup: typeof import("./volumeGroup").VolumeGroup = null as any;
utilities.lazyLoad(exports, ["VolumeGroup"], () => require("./volumeGroup"));

export { VolumeSnapshotArgs } from "./volumeSnapshot";
export type VolumeSnapshot = import("./volumeSnapshot").VolumeSnapshot;
export const VolumeSnapshot: typeof import("./volumeSnapshot").VolumeSnapshot = null as any;
utilities.lazyLoad(exports, ["VolumeSnapshot"], () => require("./volumeSnapshot"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:elasticsan:ElasticSan":
                return new ElasticSan(name, <any>undefined, { urn })
            case "azure-native:elasticsan:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:elasticsan:Volume":
                return new Volume(name, <any>undefined, { urn })
            case "azure-native:elasticsan:VolumeGroup":
                return new VolumeGroup(name, <any>undefined, { urn })
            case "azure-native:elasticsan:VolumeSnapshot":
                return new VolumeSnapshot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "elasticsan", _module)