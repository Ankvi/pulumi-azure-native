import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagedNetworkArgs, GetManagedNetworkResult, GetManagedNetworkOutputArgs } from "./getManagedNetwork";
export const getManagedNetwork: typeof import("./getManagedNetwork").getManagedNetwork = null as any;
export const getManagedNetworkOutput: typeof import("./getManagedNetwork").getManagedNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getManagedNetwork","getManagedNetworkOutput"], () => require("./getManagedNetwork"));

export { GetManagedNetworkGroupArgs, GetManagedNetworkGroupResult, GetManagedNetworkGroupOutputArgs } from "./getManagedNetworkGroup";
export const getManagedNetworkGroup: typeof import("./getManagedNetworkGroup").getManagedNetworkGroup = null as any;
export const getManagedNetworkGroupOutput: typeof import("./getManagedNetworkGroup").getManagedNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["getManagedNetworkGroup","getManagedNetworkGroupOutput"], () => require("./getManagedNetworkGroup"));

export { GetManagedNetworkPeeringPolicyArgs, GetManagedNetworkPeeringPolicyResult, GetManagedNetworkPeeringPolicyOutputArgs } from "./getManagedNetworkPeeringPolicy";
export const getManagedNetworkPeeringPolicy: typeof import("./getManagedNetworkPeeringPolicy").getManagedNetworkPeeringPolicy = null as any;
export const getManagedNetworkPeeringPolicyOutput: typeof import("./getManagedNetworkPeeringPolicy").getManagedNetworkPeeringPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getManagedNetworkPeeringPolicy","getManagedNetworkPeeringPolicyOutput"], () => require("./getManagedNetworkPeeringPolicy"));

export { GetScopeAssignmentArgs, GetScopeAssignmentResult, GetScopeAssignmentOutputArgs } from "./getScopeAssignment";
export const getScopeAssignment: typeof import("./getScopeAssignment").getScopeAssignment = null as any;
export const getScopeAssignmentOutput: typeof import("./getScopeAssignment").getScopeAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getScopeAssignment","getScopeAssignmentOutput"], () => require("./getScopeAssignment"));

export { ManagedNetworkArgs } from "./managedNetwork";
export type ManagedNetwork = import("./managedNetwork").ManagedNetwork;
export const ManagedNetwork: typeof import("./managedNetwork").ManagedNetwork = null as any;
utilities.lazyLoad(exports, ["ManagedNetwork"], () => require("./managedNetwork"));

export { ManagedNetworkGroupArgs } from "./managedNetworkGroup";
export type ManagedNetworkGroup = import("./managedNetworkGroup").ManagedNetworkGroup;
export const ManagedNetworkGroup: typeof import("./managedNetworkGroup").ManagedNetworkGroup = null as any;
utilities.lazyLoad(exports, ["ManagedNetworkGroup"], () => require("./managedNetworkGroup"));

export { ManagedNetworkPeeringPolicyArgs } from "./managedNetworkPeeringPolicy";
export type ManagedNetworkPeeringPolicy = import("./managedNetworkPeeringPolicy").ManagedNetworkPeeringPolicy;
export const ManagedNetworkPeeringPolicy: typeof import("./managedNetworkPeeringPolicy").ManagedNetworkPeeringPolicy = null as any;
utilities.lazyLoad(exports, ["ManagedNetworkPeeringPolicy"], () => require("./managedNetworkPeeringPolicy"));

export { ScopeAssignmentArgs } from "./scopeAssignment";
export type ScopeAssignment = import("./scopeAssignment").ScopeAssignment;
export const ScopeAssignment: typeof import("./scopeAssignment").ScopeAssignment = null as any;
utilities.lazyLoad(exports, ["ScopeAssignment"], () => require("./scopeAssignment"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:managednetwork:ManagedNetwork":
                return new ManagedNetwork(name, <any>undefined, { urn })
            case "azure-native:managednetwork:ManagedNetworkGroup":
                return new ManagedNetworkGroup(name, <any>undefined, { urn })
            case "azure-native:managednetwork:ManagedNetworkPeeringPolicy":
                return new ManagedNetworkPeeringPolicy(name, <any>undefined, { urn })
            case "azure-native:managednetwork:ScopeAssignment":
                return new ScopeAssignment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "managednetwork", _module)