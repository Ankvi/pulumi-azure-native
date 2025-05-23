import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AnalyticsConnectorArgs } from "./analyticsConnector";
export type AnalyticsConnector = import("./analyticsConnector").AnalyticsConnector;
export const AnalyticsConnector: typeof import("./analyticsConnector").AnalyticsConnector = null as any;
utilities.lazyLoad(exports, ["AnalyticsConnector"], () => require("./analyticsConnector"));

export { DicomServiceArgs } from "./dicomService";
export type DicomService = import("./dicomService").DicomService;
export const DicomService: typeof import("./dicomService").DicomService = null as any;
utilities.lazyLoad(exports, ["DicomService"], () => require("./dicomService"));

export { FhirServiceArgs } from "./fhirService";
export type FhirService = import("./fhirService").FhirService;
export const FhirService: typeof import("./fhirService").FhirService = null as any;
utilities.lazyLoad(exports, ["FhirService"], () => require("./fhirService"));

export { GetAnalyticsConnectorArgs, GetAnalyticsConnectorResult, GetAnalyticsConnectorOutputArgs } from "./getAnalyticsConnector";
export const getAnalyticsConnector: typeof import("./getAnalyticsConnector").getAnalyticsConnector = null as any;
export const getAnalyticsConnectorOutput: typeof import("./getAnalyticsConnector").getAnalyticsConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAnalyticsConnector","getAnalyticsConnectorOutput"], () => require("./getAnalyticsConnector"));

export { GetDicomServiceArgs, GetDicomServiceResult, GetDicomServiceOutputArgs } from "./getDicomService";
export const getDicomService: typeof import("./getDicomService").getDicomService = null as any;
export const getDicomServiceOutput: typeof import("./getDicomService").getDicomServiceOutput = null as any;
utilities.lazyLoad(exports, ["getDicomService","getDicomServiceOutput"], () => require("./getDicomService"));

export { GetFhirServiceArgs, GetFhirServiceResult, GetFhirServiceOutputArgs } from "./getFhirService";
export const getFhirService: typeof import("./getFhirService").getFhirService = null as any;
export const getFhirServiceOutput: typeof import("./getFhirService").getFhirServiceOutput = null as any;
utilities.lazyLoad(exports, ["getFhirService","getFhirServiceOutput"], () => require("./getFhirService"));

export { GetIotConnectorArgs, GetIotConnectorResult, GetIotConnectorOutputArgs } from "./getIotConnector";
export const getIotConnector: typeof import("./getIotConnector").getIotConnector = null as any;
export const getIotConnectorOutput: typeof import("./getIotConnector").getIotConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getIotConnector","getIotConnectorOutput"], () => require("./getIotConnector"));

export { GetIotConnectorFhirDestinationArgs, GetIotConnectorFhirDestinationResult, GetIotConnectorFhirDestinationOutputArgs } from "./getIotConnectorFhirDestination";
export const getIotConnectorFhirDestination: typeof import("./getIotConnectorFhirDestination").getIotConnectorFhirDestination = null as any;
export const getIotConnectorFhirDestinationOutput: typeof import("./getIotConnectorFhirDestination").getIotConnectorFhirDestinationOutput = null as any;
utilities.lazyLoad(exports, ["getIotConnectorFhirDestination","getIotConnectorFhirDestinationOutput"], () => require("./getIotConnectorFhirDestination"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { GetWorkspacePrivateEndpointConnectionArgs, GetWorkspacePrivateEndpointConnectionResult, GetWorkspacePrivateEndpointConnectionOutputArgs } from "./getWorkspacePrivateEndpointConnection";
export const getWorkspacePrivateEndpointConnection: typeof import("./getWorkspacePrivateEndpointConnection").getWorkspacePrivateEndpointConnection = null as any;
export const getWorkspacePrivateEndpointConnectionOutput: typeof import("./getWorkspacePrivateEndpointConnection").getWorkspacePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspacePrivateEndpointConnection","getWorkspacePrivateEndpointConnectionOutput"], () => require("./getWorkspacePrivateEndpointConnection"));

export { IotConnectorArgs } from "./iotConnector";
export type IotConnector = import("./iotConnector").IotConnector;
export const IotConnector: typeof import("./iotConnector").IotConnector = null as any;
utilities.lazyLoad(exports, ["IotConnector"], () => require("./iotConnector"));

export { IotConnectorFhirDestinationArgs } from "./iotConnectorFhirDestination";
export type IotConnectorFhirDestination = import("./iotConnectorFhirDestination").IotConnectorFhirDestination;
export const IotConnectorFhirDestination: typeof import("./iotConnectorFhirDestination").IotConnectorFhirDestination = null as any;
utilities.lazyLoad(exports, ["IotConnectorFhirDestination"], () => require("./iotConnectorFhirDestination"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));

export { WorkspacePrivateEndpointConnectionArgs } from "./workspacePrivateEndpointConnection";
export type WorkspacePrivateEndpointConnection = import("./workspacePrivateEndpointConnection").WorkspacePrivateEndpointConnection;
export const WorkspacePrivateEndpointConnection: typeof import("./workspacePrivateEndpointConnection").WorkspacePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["WorkspacePrivateEndpointConnection"], () => require("./workspacePrivateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:healthcareapis:AnalyticsConnector":
                return new AnalyticsConnector(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:DicomService":
                return new DicomService(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:FhirService":
                return new FhirService(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:IotConnector":
                return new IotConnector(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:IotConnectorFhirDestination":
                return new IotConnectorFhirDestination(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            case "azure-native:healthcareapis:WorkspacePrivateEndpointConnection":
                return new WorkspacePrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "healthcareapis", _module)