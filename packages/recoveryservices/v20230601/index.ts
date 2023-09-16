import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetReplicationFabricArgs, GetReplicationFabricResult, GetReplicationFabricOutputArgs } from "./getReplicationFabric";
export const getReplicationFabric: typeof import("./getReplicationFabric").getReplicationFabric = null as any;
export const getReplicationFabricOutput: typeof import("./getReplicationFabric").getReplicationFabricOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationFabric","getReplicationFabricOutput"], () => require("./getReplicationFabric"));

export { GetReplicationMigrationItemArgs, GetReplicationMigrationItemResult, GetReplicationMigrationItemOutputArgs } from "./getReplicationMigrationItem";
export const getReplicationMigrationItem: typeof import("./getReplicationMigrationItem").getReplicationMigrationItem = null as any;
export const getReplicationMigrationItemOutput: typeof import("./getReplicationMigrationItem").getReplicationMigrationItemOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationMigrationItem","getReplicationMigrationItemOutput"], () => require("./getReplicationMigrationItem"));

export { GetReplicationNetworkMappingArgs, GetReplicationNetworkMappingResult, GetReplicationNetworkMappingOutputArgs } from "./getReplicationNetworkMapping";
export const getReplicationNetworkMapping: typeof import("./getReplicationNetworkMapping").getReplicationNetworkMapping = null as any;
export const getReplicationNetworkMappingOutput: typeof import("./getReplicationNetworkMapping").getReplicationNetworkMappingOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationNetworkMapping","getReplicationNetworkMappingOutput"], () => require("./getReplicationNetworkMapping"));

export { GetReplicationPolicyArgs, GetReplicationPolicyResult, GetReplicationPolicyOutputArgs } from "./getReplicationPolicy";
export const getReplicationPolicy: typeof import("./getReplicationPolicy").getReplicationPolicy = null as any;
export const getReplicationPolicyOutput: typeof import("./getReplicationPolicy").getReplicationPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationPolicy","getReplicationPolicyOutput"], () => require("./getReplicationPolicy"));

export { GetReplicationProtectedItemArgs, GetReplicationProtectedItemResult, GetReplicationProtectedItemOutputArgs } from "./getReplicationProtectedItem";
export const getReplicationProtectedItem: typeof import("./getReplicationProtectedItem").getReplicationProtectedItem = null as any;
export const getReplicationProtectedItemOutput: typeof import("./getReplicationProtectedItem").getReplicationProtectedItemOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationProtectedItem","getReplicationProtectedItemOutput"], () => require("./getReplicationProtectedItem"));

export { GetReplicationProtectionContainerMappingArgs, GetReplicationProtectionContainerMappingResult, GetReplicationProtectionContainerMappingOutputArgs } from "./getReplicationProtectionContainerMapping";
export const getReplicationProtectionContainerMapping: typeof import("./getReplicationProtectionContainerMapping").getReplicationProtectionContainerMapping = null as any;
export const getReplicationProtectionContainerMappingOutput: typeof import("./getReplicationProtectionContainerMapping").getReplicationProtectionContainerMappingOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationProtectionContainerMapping","getReplicationProtectionContainerMappingOutput"], () => require("./getReplicationProtectionContainerMapping"));

export { GetReplicationRecoveryPlanArgs, GetReplicationRecoveryPlanResult, GetReplicationRecoveryPlanOutputArgs } from "./getReplicationRecoveryPlan";
export const getReplicationRecoveryPlan: typeof import("./getReplicationRecoveryPlan").getReplicationRecoveryPlan = null as any;
export const getReplicationRecoveryPlanOutput: typeof import("./getReplicationRecoveryPlan").getReplicationRecoveryPlanOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationRecoveryPlan","getReplicationRecoveryPlanOutput"], () => require("./getReplicationRecoveryPlan"));

export { GetReplicationRecoveryServicesProviderArgs, GetReplicationRecoveryServicesProviderResult, GetReplicationRecoveryServicesProviderOutputArgs } from "./getReplicationRecoveryServicesProvider";
export const getReplicationRecoveryServicesProvider: typeof import("./getReplicationRecoveryServicesProvider").getReplicationRecoveryServicesProvider = null as any;
export const getReplicationRecoveryServicesProviderOutput: typeof import("./getReplicationRecoveryServicesProvider").getReplicationRecoveryServicesProviderOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationRecoveryServicesProvider","getReplicationRecoveryServicesProviderOutput"], () => require("./getReplicationRecoveryServicesProvider"));

export { GetReplicationStorageClassificationMappingArgs, GetReplicationStorageClassificationMappingResult, GetReplicationStorageClassificationMappingOutputArgs } from "./getReplicationStorageClassificationMapping";
export const getReplicationStorageClassificationMapping: typeof import("./getReplicationStorageClassificationMapping").getReplicationStorageClassificationMapping = null as any;
export const getReplicationStorageClassificationMappingOutput: typeof import("./getReplicationStorageClassificationMapping").getReplicationStorageClassificationMappingOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationStorageClassificationMapping","getReplicationStorageClassificationMappingOutput"], () => require("./getReplicationStorageClassificationMapping"));

export { GetReplicationvCenterArgs, GetReplicationvCenterResult, GetReplicationvCenterOutputArgs } from "./getReplicationvCenter";
export const getReplicationvCenter: typeof import("./getReplicationvCenter").getReplicationvCenter = null as any;
export const getReplicationvCenterOutput: typeof import("./getReplicationvCenter").getReplicationvCenterOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationvCenter","getReplicationvCenterOutput"], () => require("./getReplicationvCenter"));

export { ReplicationFabricArgs } from "./replicationFabric";
export type ReplicationFabric = import("./replicationFabric").ReplicationFabric;
export const ReplicationFabric: typeof import("./replicationFabric").ReplicationFabric = null as any;
utilities.lazyLoad(exports, ["ReplicationFabric"], () => require("./replicationFabric"));

export { ReplicationMigrationItemArgs } from "./replicationMigrationItem";
export type ReplicationMigrationItem = import("./replicationMigrationItem").ReplicationMigrationItem;
export const ReplicationMigrationItem: typeof import("./replicationMigrationItem").ReplicationMigrationItem = null as any;
utilities.lazyLoad(exports, ["ReplicationMigrationItem"], () => require("./replicationMigrationItem"));

export { ReplicationNetworkMappingArgs } from "./replicationNetworkMapping";
export type ReplicationNetworkMapping = import("./replicationNetworkMapping").ReplicationNetworkMapping;
export const ReplicationNetworkMapping: typeof import("./replicationNetworkMapping").ReplicationNetworkMapping = null as any;
utilities.lazyLoad(exports, ["ReplicationNetworkMapping"], () => require("./replicationNetworkMapping"));

export { ReplicationPolicyArgs } from "./replicationPolicy";
export type ReplicationPolicy = import("./replicationPolicy").ReplicationPolicy;
export const ReplicationPolicy: typeof import("./replicationPolicy").ReplicationPolicy = null as any;
utilities.lazyLoad(exports, ["ReplicationPolicy"], () => require("./replicationPolicy"));

export { ReplicationProtectedItemArgs } from "./replicationProtectedItem";
export type ReplicationProtectedItem = import("./replicationProtectedItem").ReplicationProtectedItem;
export const ReplicationProtectedItem: typeof import("./replicationProtectedItem").ReplicationProtectedItem = null as any;
utilities.lazyLoad(exports, ["ReplicationProtectedItem"], () => require("./replicationProtectedItem"));

export { ReplicationProtectionContainerMappingArgs } from "./replicationProtectionContainerMapping";
export type ReplicationProtectionContainerMapping = import("./replicationProtectionContainerMapping").ReplicationProtectionContainerMapping;
export const ReplicationProtectionContainerMapping: typeof import("./replicationProtectionContainerMapping").ReplicationProtectionContainerMapping = null as any;
utilities.lazyLoad(exports, ["ReplicationProtectionContainerMapping"], () => require("./replicationProtectionContainerMapping"));

export { ReplicationRecoveryPlanArgs } from "./replicationRecoveryPlan";
export type ReplicationRecoveryPlan = import("./replicationRecoveryPlan").ReplicationRecoveryPlan;
export const ReplicationRecoveryPlan: typeof import("./replicationRecoveryPlan").ReplicationRecoveryPlan = null as any;
utilities.lazyLoad(exports, ["ReplicationRecoveryPlan"], () => require("./replicationRecoveryPlan"));

export { ReplicationRecoveryServicesProviderArgs } from "./replicationRecoveryServicesProvider";
export type ReplicationRecoveryServicesProvider = import("./replicationRecoveryServicesProvider").ReplicationRecoveryServicesProvider;
export const ReplicationRecoveryServicesProvider: typeof import("./replicationRecoveryServicesProvider").ReplicationRecoveryServicesProvider = null as any;
utilities.lazyLoad(exports, ["ReplicationRecoveryServicesProvider"], () => require("./replicationRecoveryServicesProvider"));

export { ReplicationStorageClassificationMappingArgs } from "./replicationStorageClassificationMapping";
export type ReplicationStorageClassificationMapping = import("./replicationStorageClassificationMapping").ReplicationStorageClassificationMapping;
export const ReplicationStorageClassificationMapping: typeof import("./replicationStorageClassificationMapping").ReplicationStorageClassificationMapping = null as any;
utilities.lazyLoad(exports, ["ReplicationStorageClassificationMapping"], () => require("./replicationStorageClassificationMapping"));

export { ReplicationvCenterArgs } from "./replicationvCenter";
export type ReplicationvCenter = import("./replicationvCenter").ReplicationvCenter;
export const ReplicationvCenter: typeof import("./replicationvCenter").ReplicationvCenter = null as any;
utilities.lazyLoad(exports, ["ReplicationvCenter"], () => require("./replicationvCenter"));


// Export enums:
export * from "../types/enums/v20230601";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:recoveryservices/v20230601:ReplicationFabric":
                return new ReplicationFabric(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationMigrationItem":
                return new ReplicationMigrationItem(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationNetworkMapping":
                return new ReplicationNetworkMapping(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationPolicy":
                return new ReplicationPolicy(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationProtectedItem":
                return new ReplicationProtectedItem(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationProtectionContainerMapping":
                return new ReplicationProtectionContainerMapping(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationRecoveryPlan":
                return new ReplicationRecoveryPlan(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationRecoveryServicesProvider":
                return new ReplicationRecoveryServicesProvider(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationStorageClassificationMapping":
                return new ReplicationStorageClassificationMapping(name, <any>undefined, { urn })
            case "azure-native:recoveryservices/v20230601:ReplicationvCenter":
                return new ReplicationvCenter(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "recoveryservices/v20230601", _module)
