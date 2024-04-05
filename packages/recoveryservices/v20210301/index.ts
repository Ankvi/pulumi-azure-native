import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetReplicationNetworkMappingArgs, GetReplicationNetworkMappingResult, GetReplicationNetworkMappingOutputArgs } from "./getReplicationNetworkMapping";
export const getReplicationNetworkMapping: typeof import("./getReplicationNetworkMapping").getReplicationNetworkMapping = null as any;
export const getReplicationNetworkMappingOutput: typeof import("./getReplicationNetworkMapping").getReplicationNetworkMappingOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationNetworkMapping","getReplicationNetworkMappingOutput"], () => require("./getReplicationNetworkMapping"));

export { GetReplicationvCenterArgs, GetReplicationvCenterResult, GetReplicationvCenterOutputArgs } from "./getReplicationvCenter";
export const getReplicationvCenter: typeof import("./getReplicationvCenter").getReplicationvCenter = null as any;
export const getReplicationvCenterOutput: typeof import("./getReplicationvCenter").getReplicationvCenterOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationvCenter","getReplicationvCenterOutput"], () => require("./getReplicationvCenter"));

export { ReplicationNetworkMappingArgs } from "./replicationNetworkMapping";
export type ReplicationNetworkMapping = import("./replicationNetworkMapping").ReplicationNetworkMapping;
export const ReplicationNetworkMapping: typeof import("./replicationNetworkMapping").ReplicationNetworkMapping = null as any;
utilities.lazyLoad(exports, ["ReplicationNetworkMapping"], () => require("./replicationNetworkMapping"));

export { ReplicationvCenterArgs } from "./replicationvCenter";
export type ReplicationvCenter = import("./replicationvCenter").ReplicationvCenter;
export const ReplicationvCenter: typeof import("./replicationvCenter").ReplicationvCenter = null as any;
utilities.lazyLoad(exports, ["ReplicationvCenter"], () => require("./replicationvCenter"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:recoveryservices/v20210301:ReplicationNetworkMapping":
                return new ReplicationNetworkMapping(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20210301:ReplicationvCenter":
                return new ReplicationvCenter(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "recoveryservices/v20210301", _module)