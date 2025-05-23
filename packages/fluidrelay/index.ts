import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FluidRelayServerArgs } from "./fluidRelayServer";
export type FluidRelayServer = import("./fluidRelayServer").FluidRelayServer;
export const FluidRelayServer: typeof import("./fluidRelayServer").FluidRelayServer = null as any;
utilities.lazyLoad(exports, ["FluidRelayServer"], () => require("./fluidRelayServer"));

export { GetFluidRelayServerArgs, GetFluidRelayServerResult, GetFluidRelayServerOutputArgs } from "./getFluidRelayServer";
export const getFluidRelayServer: typeof import("./getFluidRelayServer").getFluidRelayServer = null as any;
export const getFluidRelayServerOutput: typeof import("./getFluidRelayServer").getFluidRelayServerOutput = null as any;
utilities.lazyLoad(exports, ["getFluidRelayServer","getFluidRelayServerOutput"], () => require("./getFluidRelayServer"));

export { ListFluidRelayServerKeysArgs, ListFluidRelayServerKeysResult, ListFluidRelayServerKeysOutputArgs } from "./listFluidRelayServerKeys";
export const listFluidRelayServerKeys: typeof import("./listFluidRelayServerKeys").listFluidRelayServerKeys = null as any;
export const listFluidRelayServerKeysOutput: typeof import("./listFluidRelayServerKeys").listFluidRelayServerKeysOutput = null as any;
utilities.lazyLoad(exports, ["listFluidRelayServerKeys","listFluidRelayServerKeysOutput"], () => require("./listFluidRelayServerKeys"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:fluidrelay:FluidRelayServer":
                return new FluidRelayServer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "fluidrelay", _module)