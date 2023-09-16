import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMigrationArgs, GetMigrationResult, GetMigrationOutputArgs } from "./getMigration";
export const getMigration: typeof import("./getMigration").getMigration = null as any;
export const getMigrationOutput: typeof import("./getMigration").getMigrationOutput = null as any;
utilities.lazyLoad(exports, ["getMigration","getMigrationOutput"], () => require("./getMigration"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { MigrationArgs } from "./migration";
export type Migration = import("./migration").Migration;
export const Migration: typeof import("./migration").Migration = null as any;
utilities.lazyLoad(exports, ["Migration"], () => require("./migration"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));


// Export enums:
export * from "../types/enums/v20210615privatepreview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql/v20210615privatepreview:Migration":
                return new Migration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20210615privatepreview:Server":
                return new Server(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql/v20210615privatepreview", _module)
