import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMigrationArgs, GetMigrationResult, GetMigrationOutputArgs } from "./getMigration";
export const getMigration: typeof import("./getMigration").getMigration = null as any;
export const getMigrationOutput: typeof import("./getMigration").getMigrationOutput = null as any;
utilities.lazyLoad(exports, ["getMigration","getMigrationOutput"], () => require("./getMigration"));

export { MigrationArgs } from "./migration";
export type Migration = import("./migration").Migration;
export const Migration: typeof import("./migration").Migration = null as any;
utilities.lazyLoad(exports, ["Migration"], () => require("./migration"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql/v20220501preview:Migration":
                return new Migration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql/v20220501preview", _module)
