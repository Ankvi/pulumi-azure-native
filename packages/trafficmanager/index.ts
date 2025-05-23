import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EndpointArgs } from "./endpoint";
export type Endpoint = import("./endpoint").Endpoint;
export const Endpoint: typeof import("./endpoint").Endpoint = null as any;
utilities.lazyLoad(exports, ["Endpoint"], () => require("./endpoint"));

export { GetEndpointArgs, GetEndpointResult, GetEndpointOutputArgs } from "./getEndpoint";
export const getEndpoint: typeof import("./getEndpoint").getEndpoint = null as any;
export const getEndpointOutput: typeof import("./getEndpoint").getEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getEndpoint","getEndpointOutput"], () => require("./getEndpoint"));

export { GetProfileArgs, GetProfileResult, GetProfileOutputArgs } from "./getProfile";
export const getProfile: typeof import("./getProfile").getProfile = null as any;
export const getProfileOutput: typeof import("./getProfile").getProfileOutput = null as any;
utilities.lazyLoad(exports, ["getProfile","getProfileOutput"], () => require("./getProfile"));

export { GetTrafficManagerUserMetricsKeyArgs, GetTrafficManagerUserMetricsKeyResult } from "./getTrafficManagerUserMetricsKey";
export const getTrafficManagerUserMetricsKey: typeof import("./getTrafficManagerUserMetricsKey").getTrafficManagerUserMetricsKey = null as any;
export const getTrafficManagerUserMetricsKeyOutput: typeof import("./getTrafficManagerUserMetricsKey").getTrafficManagerUserMetricsKeyOutput = null as any;
utilities.lazyLoad(exports, ["getTrafficManagerUserMetricsKey","getTrafficManagerUserMetricsKeyOutput"], () => require("./getTrafficManagerUserMetricsKey"));

export { ProfileArgs } from "./profile";
export type Profile = import("./profile").Profile;
export const Profile: typeof import("./profile").Profile = null as any;
utilities.lazyLoad(exports, ["Profile"], () => require("./profile"));

export { TrafficManagerUserMetricsKeyArgs } from "./trafficManagerUserMetricsKey";
export type TrafficManagerUserMetricsKey = import("./trafficManagerUserMetricsKey").TrafficManagerUserMetricsKey;
export const TrafficManagerUserMetricsKey: typeof import("./trafficManagerUserMetricsKey").TrafficManagerUserMetricsKey = null as any;
utilities.lazyLoad(exports, ["TrafficManagerUserMetricsKey"], () => require("./trafficManagerUserMetricsKey"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:trafficmanager:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-native:trafficmanager:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-native:trafficmanager:TrafficManagerUserMetricsKey":
                return new TrafficManagerUserMetricsKey(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "trafficmanager", _module)