import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DashboardArgs } from "./dashboard";
export type Dashboard = import("./dashboard").Dashboard;
export const Dashboard: typeof import("./dashboard").Dashboard = null as any;
utilities.lazyLoad(exports, ["Dashboard"], () => require("./dashboard"));

export { GetDashboardArgs, GetDashboardResult, GetDashboardOutputArgs } from "./getDashboard";
export const getDashboard: typeof import("./getDashboard").getDashboard = null as any;
export const getDashboardOutput: typeof import("./getDashboard").getDashboardOutput = null as any;
utilities.lazyLoad(exports, ["getDashboard","getDashboardOutput"], () => require("./getDashboard"));

export { GetTenantConfigurationArgs, GetTenantConfigurationResult, GetTenantConfigurationOutputArgs } from "./getTenantConfiguration";
export const getTenantConfiguration: typeof import("./getTenantConfiguration").getTenantConfiguration = null as any;
export const getTenantConfigurationOutput: typeof import("./getTenantConfiguration").getTenantConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getTenantConfiguration","getTenantConfigurationOutput"], () => require("./getTenantConfiguration"));

export { ListListTenantConfigurationViolationArgs, ListListTenantConfigurationViolationResult } from "./listListTenantConfigurationViolation";
export const listListTenantConfigurationViolation: typeof import("./listListTenantConfigurationViolation").listListTenantConfigurationViolation = null as any;
export const listListTenantConfigurationViolationOutput: typeof import("./listListTenantConfigurationViolation").listListTenantConfigurationViolationOutput = null as any;
utilities.lazyLoad(exports, ["listListTenantConfigurationViolation","listListTenantConfigurationViolationOutput"], () => require("./listListTenantConfigurationViolation"));

export { TenantConfigurationArgs } from "./tenantConfiguration";
export type TenantConfiguration = import("./tenantConfiguration").TenantConfiguration;
export const TenantConfiguration: typeof import("./tenantConfiguration").TenantConfiguration = null as any;
utilities.lazyLoad(exports, ["TenantConfiguration"], () => require("./tenantConfiguration"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:portal/v20200901preview:Dashboard":
                return new Dashboard(name, <any>undefined, { urn })
            case "azure-native:portal/v20200901preview:TenantConfiguration":
                return new TenantConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "portal/v20200901preview", _module)
