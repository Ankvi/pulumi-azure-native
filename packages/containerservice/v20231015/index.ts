import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FleetArgs } from "./fleet";
export type Fleet = import("./fleet").Fleet;
export const Fleet: typeof import("./fleet").Fleet = null as any;
utilities.lazyLoad(exports, ["Fleet"], () => require("./fleet"));

export { FleetMemberArgs } from "./fleetMember";
export type FleetMember = import("./fleetMember").FleetMember;
export const FleetMember: typeof import("./fleetMember").FleetMember = null as any;
utilities.lazyLoad(exports, ["FleetMember"], () => require("./fleetMember"));

export { FleetUpdateStrategyArgs } from "./fleetUpdateStrategy";
export type FleetUpdateStrategy = import("./fleetUpdateStrategy").FleetUpdateStrategy;
export const FleetUpdateStrategy: typeof import("./fleetUpdateStrategy").FleetUpdateStrategy = null as any;
utilities.lazyLoad(exports, ["FleetUpdateStrategy"], () => require("./fleetUpdateStrategy"));

export { GetFleetArgs, GetFleetResult, GetFleetOutputArgs } from "./getFleet";
export const getFleet: typeof import("./getFleet").getFleet = null as any;
export const getFleetOutput: typeof import("./getFleet").getFleetOutput = null as any;
utilities.lazyLoad(exports, ["getFleet","getFleetOutput"], () => require("./getFleet"));

export { GetFleetMemberArgs, GetFleetMemberResult, GetFleetMemberOutputArgs } from "./getFleetMember";
export const getFleetMember: typeof import("./getFleetMember").getFleetMember = null as any;
export const getFleetMemberOutput: typeof import("./getFleetMember").getFleetMemberOutput = null as any;
utilities.lazyLoad(exports, ["getFleetMember","getFleetMemberOutput"], () => require("./getFleetMember"));

export { GetFleetUpdateStrategyArgs, GetFleetUpdateStrategyResult, GetFleetUpdateStrategyOutputArgs } from "./getFleetUpdateStrategy";
export const getFleetUpdateStrategy: typeof import("./getFleetUpdateStrategy").getFleetUpdateStrategy = null as any;
export const getFleetUpdateStrategyOutput: typeof import("./getFleetUpdateStrategy").getFleetUpdateStrategyOutput = null as any;
utilities.lazyLoad(exports, ["getFleetUpdateStrategy","getFleetUpdateStrategyOutput"], () => require("./getFleetUpdateStrategy"));

export { GetUpdateRunArgs, GetUpdateRunResult, GetUpdateRunOutputArgs } from "./getUpdateRun";
export const getUpdateRun: typeof import("./getUpdateRun").getUpdateRun = null as any;
export const getUpdateRunOutput: typeof import("./getUpdateRun").getUpdateRunOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateRun","getUpdateRunOutput"], () => require("./getUpdateRun"));

export { ListFleetCredentialsArgs, ListFleetCredentialsResult, ListFleetCredentialsOutputArgs } from "./listFleetCredentials";
export const listFleetCredentials: typeof import("./listFleetCredentials").listFleetCredentials = null as any;
export const listFleetCredentialsOutput: typeof import("./listFleetCredentials").listFleetCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listFleetCredentials","listFleetCredentialsOutput"], () => require("./listFleetCredentials"));

export { UpdateRunArgs } from "./updateRun";
export type UpdateRun = import("./updateRun").UpdateRun;
export const UpdateRun: typeof import("./updateRun").UpdateRun = null as any;
utilities.lazyLoad(exports, ["UpdateRun"], () => require("./updateRun"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice/v20231015:Fleet":
                return new Fleet(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20231015:FleetMember":
                return new FleetMember(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20231015:FleetUpdateStrategy":
                return new FleetUpdateStrategy(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20231015:UpdateRun":
                return new UpdateRun(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice/v20231015", _module)