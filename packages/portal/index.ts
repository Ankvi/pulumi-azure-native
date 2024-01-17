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

export { DashboardArgs } from "./dashboard";
export type Dashboard = import("./dashboard").Dashboard;
export const Dashboard: typeof import("./dashboard").Dashboard = null as any;
utilities.lazyLoad(exports, ["Dashboard"], () => require("./dashboard"));

export { GetConsoleArgs, GetConsoleResult, GetConsoleOutputArgs } from "./getConsole";
export const getConsole: typeof import("./getConsole").getConsole = null as any;
export const getConsoleOutput: typeof import("./getConsole").getConsoleOutput = null as any;
utilities.lazyLoad(exports, ["getConsole","getConsoleOutput"], () => require("./getConsole"));

export { GetConsoleWithLocationArgs, GetConsoleWithLocationResult, GetConsoleWithLocationOutputArgs } from "./getConsoleWithLocation";
export const getConsoleWithLocation: typeof import("./getConsoleWithLocation").getConsoleWithLocation = null as any;
export const getConsoleWithLocationOutput: typeof import("./getConsoleWithLocation").getConsoleWithLocationOutput = null as any;
utilities.lazyLoad(exports, ["getConsoleWithLocation","getConsoleWithLocationOutput"], () => require("./getConsoleWithLocation"));

export { GetDashboardArgs, GetDashboardResult, GetDashboardOutputArgs } from "./getDashboard";
export const getDashboard: typeof import("./getDashboard").getDashboard = null as any;
export const getDashboardOutput: typeof import("./getDashboard").getDashboardOutput = null as any;
utilities.lazyLoad(exports, ["getDashboard","getDashboardOutput"], () => require("./getDashboard"));

export { GetTenantConfigurationArgs, GetTenantConfigurationResult, GetTenantConfigurationOutputArgs } from "./getTenantConfiguration";
export const getTenantConfiguration: typeof import("./getTenantConfiguration").getTenantConfiguration = null as any;
export const getTenantConfigurationOutput: typeof import("./getTenantConfiguration").getTenantConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getTenantConfiguration","getTenantConfigurationOutput"], () => require("./getTenantConfiguration"));

export { GetUserSettingsArgs, GetUserSettingsResult, GetUserSettingsOutputArgs } from "./getUserSettings";
export const getUserSettings: typeof import("./getUserSettings").getUserSettings = null as any;
export const getUserSettingsOutput: typeof import("./getUserSettings").getUserSettingsOutput = null as any;
utilities.lazyLoad(exports, ["getUserSettings","getUserSettingsOutput"], () => require("./getUserSettings"));

export { GetUserSettingsWithLocationArgs, GetUserSettingsWithLocationResult, GetUserSettingsWithLocationOutputArgs } from "./getUserSettingsWithLocation";
export const getUserSettingsWithLocation: typeof import("./getUserSettingsWithLocation").getUserSettingsWithLocation = null as any;
export const getUserSettingsWithLocationOutput: typeof import("./getUserSettingsWithLocation").getUserSettingsWithLocationOutput = null as any;
utilities.lazyLoad(exports, ["getUserSettingsWithLocation","getUserSettingsWithLocationOutput"], () => require("./getUserSettingsWithLocation"));

export { ListListTenantConfigurationViolationArgs, ListListTenantConfigurationViolationResult } from "./listListTenantConfigurationViolation";
export const listListTenantConfigurationViolation: typeof import("./listListTenantConfigurationViolation").listListTenantConfigurationViolation = null as any;
export const listListTenantConfigurationViolationOutput: typeof import("./listListTenantConfigurationViolation").listListTenantConfigurationViolationOutput = null as any;
utilities.lazyLoad(exports, ["listListTenantConfigurationViolation","listListTenantConfigurationViolationOutput"], () => require("./listListTenantConfigurationViolation"));

export { TenantConfigurationArgs } from "./tenantConfiguration";
export type TenantConfiguration = import("./tenantConfiguration").TenantConfiguration;
export const TenantConfiguration: typeof import("./tenantConfiguration").TenantConfiguration = null as any;
utilities.lazyLoad(exports, ["TenantConfiguration"], () => require("./tenantConfiguration"));

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
            case "azure-native:portal:Console":
                return new Console(name, <any>undefined, { urn })
            case "azure-native:portal:ConsoleWithLocation":
                return new ConsoleWithLocation(name, <any>undefined, { urn })
            case "azure-native:portal:Dashboard":
                return new Dashboard(name, <any>undefined, { urn })
            case "azure-native:portal:TenantConfiguration":
                return new TenantConfiguration(name, <any>undefined, { urn })
            case "azure-native:portal:UserSettings":
                return new UserSettings(name, <any>undefined, { urn })
            case "azure-native:portal:UserSettingsWithLocation":
                return new UserSettingsWithLocation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "portal", _module)