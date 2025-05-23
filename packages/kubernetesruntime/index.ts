import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BgpPeerArgs } from "./bgpPeer";
export type BgpPeer = import("./bgpPeer").BgpPeer;
export const BgpPeer: typeof import("./bgpPeer").BgpPeer = null as any;
utilities.lazyLoad(exports, ["BgpPeer"], () => require("./bgpPeer"));

export { GetBgpPeerArgs, GetBgpPeerResult, GetBgpPeerOutputArgs } from "./getBgpPeer";
export const getBgpPeer: typeof import("./getBgpPeer").getBgpPeer = null as any;
export const getBgpPeerOutput: typeof import("./getBgpPeer").getBgpPeerOutput = null as any;
utilities.lazyLoad(exports, ["getBgpPeer","getBgpPeerOutput"], () => require("./getBgpPeer"));

export { GetLoadBalancerArgs, GetLoadBalancerResult, GetLoadBalancerOutputArgs } from "./getLoadBalancer";
export const getLoadBalancer: typeof import("./getLoadBalancer").getLoadBalancer = null as any;
export const getLoadBalancerOutput: typeof import("./getLoadBalancer").getLoadBalancerOutput = null as any;
utilities.lazyLoad(exports, ["getLoadBalancer","getLoadBalancerOutput"], () => require("./getLoadBalancer"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetStorageClassArgs, GetStorageClassResult, GetStorageClassOutputArgs } from "./getStorageClass";
export const getStorageClass: typeof import("./getStorageClass").getStorageClass = null as any;
export const getStorageClassOutput: typeof import("./getStorageClass").getStorageClassOutput = null as any;
utilities.lazyLoad(exports, ["getStorageClass","getStorageClassOutput"], () => require("./getStorageClass"));

export { LoadBalancerArgs } from "./loadBalancer";
export type LoadBalancer = import("./loadBalancer").LoadBalancer;
export const LoadBalancer: typeof import("./loadBalancer").LoadBalancer = null as any;
utilities.lazyLoad(exports, ["LoadBalancer"], () => require("./loadBalancer"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { StorageClassArgs } from "./storageClass";
export type StorageClass = import("./storageClass").StorageClass;
export const StorageClass: typeof import("./storageClass").StorageClass = null as any;
utilities.lazyLoad(exports, ["StorageClass"], () => require("./storageClass"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kubernetesruntime:BgpPeer":
                return new BgpPeer(name, <any>undefined, { urn })
            case "azure-native:kubernetesruntime:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "azure-native:kubernetesruntime:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:kubernetesruntime:StorageClass":
                return new StorageClass(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kubernetesruntime", _module)