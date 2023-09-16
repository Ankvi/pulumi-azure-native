import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGrafanaArgs, GetGrafanaResult, GetGrafanaOutputArgs } from "./getGrafana";
export const getGrafana: typeof import("./getGrafana").getGrafana = null as any;
export const getGrafanaOutput: typeof import("./getGrafana").getGrafanaOutput = null as any;
utilities.lazyLoad(exports, ["getGrafana","getGrafanaOutput"], () => require("./getGrafana"));

export { GrafanaArgs } from "./grafana";
export type Grafana = import("./grafana").Grafana;
export const Grafana: typeof import("./grafana").Grafana = null as any;
utilities.lazyLoad(exports, ["Grafana"], () => require("./grafana"));


// Export enums:
export * from "../types/enums/v20210901preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dashboard/v20210901preview:Grafana":
                return new Grafana(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dashboard/v20210901preview", _module)
