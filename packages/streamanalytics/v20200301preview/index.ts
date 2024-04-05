import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetPrivateEndpointArgs, GetPrivateEndpointResult, GetPrivateEndpointOutputArgs } from "./getPrivateEndpoint";
export const getPrivateEndpoint: typeof import("./getPrivateEndpoint").getPrivateEndpoint = null as any;
export const getPrivateEndpointOutput: typeof import("./getPrivateEndpoint").getPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpoint","getPrivateEndpointOutput"], () => require("./getPrivateEndpoint"));

export { ListClusterStreamingJobsArgs, ListClusterStreamingJobsResult, ListClusterStreamingJobsOutputArgs } from "./listClusterStreamingJobs";
export const listClusterStreamingJobs: typeof import("./listClusterStreamingJobs").listClusterStreamingJobs = null as any;
export const listClusterStreamingJobsOutput: typeof import("./listClusterStreamingJobs").listClusterStreamingJobsOutput = null as any;
utilities.lazyLoad(exports, ["listClusterStreamingJobs","listClusterStreamingJobsOutput"], () => require("./listClusterStreamingJobs"));

export { PrivateEndpointArgs } from "./privateEndpoint";
export type PrivateEndpoint = import("./privateEndpoint").PrivateEndpoint;
export const PrivateEndpoint: typeof import("./privateEndpoint").PrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["PrivateEndpoint"], () => require("./privateEndpoint"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:streamanalytics/v20200301preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:streamanalytics/v20200301preview:PrivateEndpoint":
                return new PrivateEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "streamanalytics/v20200301preview", _module)