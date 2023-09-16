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


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:portal/v20190101preview:Dashboard":
                return new Dashboard(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "portal/v20190101preview", _module)
