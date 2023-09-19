import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EventGridDataConnectionArgs } from "./eventGridDataConnection";
export type EventGridDataConnection = import("./eventGridDataConnection").EventGridDataConnection;
export const EventGridDataConnection: typeof import("./eventGridDataConnection").EventGridDataConnection = null as any;
utilities.lazyLoad(exports, ["EventGridDataConnection"], () => require("./eventGridDataConnection"));

export { GetEventGridDataConnectionArgs, GetEventGridDataConnectionResult, GetEventGridDataConnectionOutputArgs } from "./getEventGridDataConnection";
export const getEventGridDataConnection: typeof import("./getEventGridDataConnection").getEventGridDataConnection = null as any;
export const getEventGridDataConnectionOutput: typeof import("./getEventGridDataConnection").getEventGridDataConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEventGridDataConnection","getEventGridDataConnectionOutput"], () => require("./getEventGridDataConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20200215:EventGridDataConnection":
                return new EventGridDataConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20200215", _module)
