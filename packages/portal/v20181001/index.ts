import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConsoleArgs } from "./console";
export type Console = import("./console").Console;
export const Console: typeof import("./console").Console = null as any;
utilities.lazyLoad(exports, ["Console"], () => require("./console"));

export { ConsoleWithLocationArgs } from "./consoleWithLocation";
export type ConsoleWithLocation = import("./consoleWithLocation").ConsoleWithLocation;
export const ConsoleWithLocation: typeof import("./consoleWithLocation").ConsoleWithLocation = null as any;
utilities.lazyLoad(exports, ["ConsoleWithLocation"], () => require("./consoleWithLocation"));

export { GetConsoleArgs, GetConsoleResult, GetConsoleOutputArgs } from "./getConsole";
export const getConsole: typeof import("./getConsole").getConsole = null as any;
export const getConsoleOutput: typeof import("./getConsole").getConsoleOutput = null as any;
utilities.lazyLoad(exports, ["getConsole","getConsoleOutput"], () => require("./getConsole"));

export { GetConsoleWithLocationArgs, GetConsoleWithLocationResult, GetConsoleWithLocationOutputArgs } from "./getConsoleWithLocation";
export const getConsoleWithLocation: typeof import("./getConsoleWithLocation").getConsoleWithLocation = null as any;
export const getConsoleWithLocationOutput: typeof import("./getConsoleWithLocation").getConsoleWithLocationOutput = null as any;
utilities.lazyLoad(exports, ["getConsoleWithLocation","getConsoleWithLocationOutput"], () => require("./getConsoleWithLocation"));

export { GetUserSettingsArgs, GetUserSettingsResult, GetUserSettingsOutputArgs } from "./getUserSettings";
export const getUserSettings: typeof import("./getUserSettings").getUserSettings = null as any;
export const getUserSettingsOutput: typeof import("./getUserSettings").getUserSettingsOutput = null as any;
utilities.lazyLoad(exports, ["getUserSettings","getUserSettingsOutput"], () => require("./getUserSettings"));

export { GetUserSettingsWithLocationArgs, GetUserSettingsWithLocationResult, GetUserSettingsWithLocationOutputArgs } from "./getUserSettingsWithLocation";
export const getUserSettingsWithLocation: typeof import("./getUserSettingsWithLocation").getUserSettingsWithLocation = null as any;
export const getUserSettingsWithLocationOutput: typeof import("./getUserSettingsWithLocation").getUserSettingsWithLocationOutput = null as any;
utilities.lazyLoad(exports, ["getUserSettingsWithLocation","getUserSettingsWithLocationOutput"], () => require("./getUserSettingsWithLocation"));

export { UserSettingsArgs } from "./userSettings";
export type UserSettings = import("./userSettings").UserSettings;
export const UserSettings: typeof import("./userSettings").UserSettings = null as any;
utilities.lazyLoad(exports, ["UserSettings"], () => require("./userSettings"));

export { UserSettingsWithLocationArgs } from "./userSettingsWithLocation";
export type UserSettingsWithLocation = import("./userSettingsWithLocation").UserSettingsWithLocation;
export const UserSettingsWithLocation: typeof import("./userSettingsWithLocation").UserSettingsWithLocation = null as any;
utilities.lazyLoad(exports, ["UserSettingsWithLocation"], () => require("./userSettingsWithLocation"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:portal/v20181001:Console":
                return new Console(name, <any>undefined, { urn })
            case "azure-native:portal/v20181001:ConsoleWithLocation":
                return new ConsoleWithLocation(name, <any>undefined, { urn })
            case "azure-native:portal/v20181001:UserSettings":
                return new UserSettings(name, <any>undefined, { urn })
            case "azure-native:portal/v20181001:UserSettingsWithLocation":
                return new UserSettingsWithLocation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "portal/v20181001", _module)
