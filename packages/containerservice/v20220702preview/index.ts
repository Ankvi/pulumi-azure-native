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

export { GetFleetArgs, GetFleetResult, GetFleetOutputArgs } from "./getFleet";
export const getFleet: typeof import("./getFleet").getFleet = null as any;
export const getFleetOutput: typeof import("./getFleet").getFleetOutput = null as any;
utilities.lazyLoad(exports, ["getFleet","getFleetOutput"], () => require("./getFleet"));

export { GetFleetMemberArgs, GetFleetMemberResult, GetFleetMemberOutputArgs } from "./getFleetMember";
export const getFleetMember: typeof import("./getFleetMember").getFleetMember = null as any;
export const getFleetMemberOutput: typeof import("./getFleetMember").getFleetMemberOutput = null as any;
utilities.lazyLoad(exports, ["getFleetMember","getFleetMemberOutput"], () => require("./getFleetMember"));

export { ListFleetCredentialsArgs, ListFleetCredentialsResult, ListFleetCredentialsOutputArgs } from "./listFleetCredentials";
export const listFleetCredentials: typeof import("./listFleetCredentials").listFleetCredentials = null as any;
export const listFleetCredentialsOutput: typeof import("./listFleetCredentials").listFleetCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listFleetCredentials","listFleetCredentialsOutput"], () => require("./listFleetCredentials"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice/v20220702preview:Fleet":
                return new Fleet(name, <any>undefined, { urn })
            case "azure-native:containerservice/v20220702preview:FleetMember":
                return new FleetMember(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice/v20220702preview", _module)
