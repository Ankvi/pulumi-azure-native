import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGrafanaArgs, GetGrafanaResult, GetGrafanaOutputArgs } from "./getGrafana";
export const getGrafana: typeof import("./getGrafana").getGrafana = null as any;
export const getGrafanaOutput: typeof import("./getGrafana").getGrafanaOutput = null as any;
utilities.lazyLoad(exports, ["getGrafana","getGrafanaOutput"], () => require("./getGrafana"));

export { GetManagedPrivateEndpointArgs, GetManagedPrivateEndpointResult, GetManagedPrivateEndpointOutputArgs } from "./getManagedPrivateEndpoint";
export const getManagedPrivateEndpoint: typeof import("./getManagedPrivateEndpoint").getManagedPrivateEndpoint = null as any;
export const getManagedPrivateEndpointOutput: typeof import("./getManagedPrivateEndpoint").getManagedPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getManagedPrivateEndpoint","getManagedPrivateEndpointOutput"], () => require("./getManagedPrivateEndpoint"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GrafanaArgs } from "./grafana";
export type Grafana = import("./grafana").Grafana;
export const Grafana: typeof import("./grafana").Grafana = null as any;
utilities.lazyLoad(exports, ["Grafana"], () => require("./grafana"));

export { ManagedPrivateEndpointArgs } from "./managedPrivateEndpoint";
export type ManagedPrivateEndpoint = import("./managedPrivateEndpoint").ManagedPrivateEndpoint;
export const ManagedPrivateEndpoint: typeof import("./managedPrivateEndpoint").ManagedPrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["ManagedPrivateEndpoint"], () => require("./managedPrivateEndpoint"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dashboard/v20221001preview:Grafana":
                return new Grafana(name, <any>undefined, { urn })
            case "azure-native:dashboard/v20221001preview:ManagedPrivateEndpoint":
                return new ManagedPrivateEndpoint(name, <any>undefined, { urn })
            case "azure-native:dashboard/v20221001preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dashboard/v20221001preview", _module)