import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FirmwareArgs } from "./firmware";
export type Firmware = import("./firmware").Firmware;
export const Firmware: typeof import("./firmware").Firmware = null as any;
utilities.lazyLoad(exports, ["Firmware"], () => require("./firmware"));

export { GetFirmwareArgs, GetFirmwareResult, GetFirmwareOutputArgs } from "./getFirmware";
export const getFirmware: typeof import("./getFirmware").getFirmware = null as any;
export const getFirmwareOutput: typeof import("./getFirmware").getFirmwareOutput = null as any;
utilities.lazyLoad(exports, ["getFirmware","getFirmwareOutput"], () => require("./getFirmware"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotfirmwaredefense:Firmware":
                return new Firmware(name, <any>undefined, { urn })
            case "azure-native:iotfirmwaredefense:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotfirmwaredefense", _module)