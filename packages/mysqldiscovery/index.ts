import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMySQLServerArgs, GetMySQLServerResult, GetMySQLServerOutputArgs } from "./getMySQLServer";
export const getMySQLServer: typeof import("./getMySQLServer").getMySQLServer = null as any;
export const getMySQLServerOutput: typeof import("./getMySQLServer").getMySQLServerOutput = null as any;
utilities.lazyLoad(exports, ["getMySQLServer","getMySQLServerOutput"], () => require("./getMySQLServer"));

export { GetMySQLSiteArgs, GetMySQLSiteResult, GetMySQLSiteOutputArgs } from "./getMySQLSite";
export const getMySQLSite: typeof import("./getMySQLSite").getMySQLSite = null as any;
export const getMySQLSiteOutput: typeof import("./getMySQLSite").getMySQLSiteOutput = null as any;
utilities.lazyLoad(exports, ["getMySQLSite","getMySQLSiteOutput"], () => require("./getMySQLSite"));

export { MySQLServerArgs } from "./mySQLServer";
export type MySQLServer = import("./mySQLServer").MySQLServer;
export const MySQLServer: typeof import("./mySQLServer").MySQLServer = null as any;
utilities.lazyLoad(exports, ["MySQLServer"], () => require("./mySQLServer"));

export { MySQLSiteArgs } from "./mySQLSite";
export type MySQLSite = import("./mySQLSite").MySQLSite;
export const MySQLSite: typeof import("./mySQLSite").MySQLSite = null as any;
utilities.lazyLoad(exports, ["MySQLSite"], () => require("./mySQLSite"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mysqldiscovery:MySQLServer":
                return new MySQLServer(name, <any>undefined, { urn })
            case "azure-native:mysqldiscovery:MySQLSite":
                return new MySQLSite(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mysqldiscovery", _module)