import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { EventHubConnectionArgs } from "./eventHubConnection";
export type EventHubConnection = import("./eventHubConnection").EventHubConnection;
export const EventHubConnection: typeof import("./eventHubConnection").EventHubConnection = null as any;
utilities.lazyLoad(exports, ["EventHubConnection"], () => require("./eventHubConnection"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetEventHubConnectionArgs, GetEventHubConnectionResult, GetEventHubConnectionOutputArgs } from "./getEventHubConnection";
export const getEventHubConnection: typeof import("./getEventHubConnection").getEventHubConnection = null as any;
export const getEventHubConnectionOutput: typeof import("./getEventHubConnection").getEventHubConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEventHubConnection","getEventHubConnectionOutput"], () => require("./getEventHubConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20180907preview:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:kusto/v20180907preview:EventHubConnection":
                return new EventHubConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20180907preview", _module)