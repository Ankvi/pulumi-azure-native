import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectionArgs } from "./connection";
export type Connection = import("./connection").Connection;
export const Connection: typeof import("./connection").Connection = null as any;
utilities.lazyLoad(exports, ["Connection"], () => require("./connection"));

export { FlowArgs } from "./flow";
export type Flow = import("./flow").Flow;
export const Flow: typeof import("./flow").Flow = null as any;
utilities.lazyLoad(exports, ["Flow"], () => require("./flow"));

export { GetConnectionArgs, GetConnectionResult, GetConnectionOutputArgs } from "./getConnection";
export const getConnection: typeof import("./getConnection").getConnection = null as any;
export const getConnectionOutput: typeof import("./getConnection").getConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getConnection","getConnectionOutput"], () => require("./getConnection"));

export { GetFlowArgs, GetFlowResult, GetFlowOutputArgs } from "./getFlow";
export const getFlow: typeof import("./getFlow").getFlow = null as any;
export const getFlowOutput: typeof import("./getFlow").getFlowOutput = null as any;
utilities.lazyLoad(exports, ["getFlow","getFlowOutput"], () => require("./getFlow"));

export { GetFlowDestinationEndpointPortsArgs, GetFlowDestinationEndpointPortsResult, GetFlowDestinationEndpointPortsOutputArgs } from "./getFlowDestinationEndpointPorts";
export const getFlowDestinationEndpointPorts: typeof import("./getFlowDestinationEndpointPorts").getFlowDestinationEndpointPorts = null as any;
export const getFlowDestinationEndpointPortsOutput: typeof import("./getFlowDestinationEndpointPorts").getFlowDestinationEndpointPortsOutput = null as any;
utilities.lazyLoad(exports, ["getFlowDestinationEndpointPorts","getFlowDestinationEndpointPortsOutput"], () => require("./getFlowDestinationEndpointPorts"));

export { GetFlowDestinationEndpointsArgs, GetFlowDestinationEndpointsResult, GetFlowDestinationEndpointsOutputArgs } from "./getFlowDestinationEndpoints";
export const getFlowDestinationEndpoints: typeof import("./getFlowDestinationEndpoints").getFlowDestinationEndpoints = null as any;
export const getFlowDestinationEndpointsOutput: typeof import("./getFlowDestinationEndpoints").getFlowDestinationEndpointsOutput = null as any;
utilities.lazyLoad(exports, ["getFlowDestinationEndpoints","getFlowDestinationEndpointsOutput"], () => require("./getFlowDestinationEndpoints"));

export { GetFlowSourceAddressesArgs, GetFlowSourceAddressesResult, GetFlowSourceAddressesOutputArgs } from "./getFlowSourceAddresses";
export const getFlowSourceAddresses: typeof import("./getFlowSourceAddresses").getFlowSourceAddresses = null as any;
export const getFlowSourceAddressesOutput: typeof import("./getFlowSourceAddresses").getFlowSourceAddressesOutput = null as any;
utilities.lazyLoad(exports, ["getFlowSourceAddresses","getFlowSourceAddressesOutput"], () => require("./getFlowSourceAddresses"));

export { GetFlowStreamConnectionStringArgs, GetFlowStreamConnectionStringResult, GetFlowStreamConnectionStringOutputArgs } from "./getFlowStreamConnectionString";
export const getFlowStreamConnectionString: typeof import("./getFlowStreamConnectionString").getFlowStreamConnectionString = null as any;
export const getFlowStreamConnectionStringOutput: typeof import("./getFlowStreamConnectionString").getFlowStreamConnectionStringOutput = null as any;
utilities.lazyLoad(exports, ["getFlowStreamConnectionString","getFlowStreamConnectionStringOutput"], () => require("./getFlowStreamConnectionString"));

export { GetPipelineArgs, GetPipelineResult, GetPipelineOutputArgs } from "./getPipeline";
export const getPipeline: typeof import("./getPipeline").getPipeline = null as any;
export const getPipelineOutput: typeof import("./getPipeline").getPipelineOutput = null as any;
utilities.lazyLoad(exports, ["getPipeline","getPipelineOutput"], () => require("./getPipeline"));

export { ListAzureDataTransferApprovedSchemasArgs, ListAzureDataTransferApprovedSchemasResult, ListAzureDataTransferApprovedSchemasOutputArgs } from "./listAzureDataTransferApprovedSchemas";
export const listAzureDataTransferApprovedSchemas: typeof import("./listAzureDataTransferApprovedSchemas").listAzureDataTransferApprovedSchemas = null as any;
export const listAzureDataTransferApprovedSchemasOutput: typeof import("./listAzureDataTransferApprovedSchemas").listAzureDataTransferApprovedSchemasOutput = null as any;
utilities.lazyLoad(exports, ["listAzureDataTransferApprovedSchemas","listAzureDataTransferApprovedSchemasOutput"], () => require("./listAzureDataTransferApprovedSchemas"));

export { ListListPendingConnectionArgs, ListListPendingConnectionResult, ListListPendingConnectionOutputArgs } from "./listListPendingConnection";
export const listListPendingConnection: typeof import("./listListPendingConnection").listListPendingConnection = null as any;
export const listListPendingConnectionOutput: typeof import("./listListPendingConnection").listListPendingConnectionOutput = null as any;
utilities.lazyLoad(exports, ["listListPendingConnection","listListPendingConnectionOutput"], () => require("./listListPendingConnection"));

export { ListListPendingFlowArgs, ListListPendingFlowResult, ListListPendingFlowOutputArgs } from "./listListPendingFlow";
export const listListPendingFlow: typeof import("./listListPendingFlow").listListPendingFlow = null as any;
export const listListPendingFlowOutput: typeof import("./listListPendingFlow").listListPendingFlowOutput = null as any;
utilities.lazyLoad(exports, ["listListPendingFlow","listListPendingFlowOutput"], () => require("./listListPendingFlow"));

export { ListListSchemaArgs, ListListSchemaResult, ListListSchemaOutputArgs } from "./listListSchema";
export const listListSchema: typeof import("./listListSchema").listListSchema = null as any;
export const listListSchemaOutput: typeof import("./listListSchema").listListSchemaOutput = null as any;
utilities.lazyLoad(exports, ["listListSchema","listListSchemaOutput"], () => require("./listListSchema"));

export { PipelineArgs } from "./pipeline";
export type Pipeline = import("./pipeline").Pipeline;
export const Pipeline: typeof import("./pipeline").Pipeline = null as any;
utilities.lazyLoad(exports, ["Pipeline"], () => require("./pipeline"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azuredatatransfer:Connection":
                return new Connection(name, <any>undefined, { urn })
            case "azure-native:azuredatatransfer:Flow":
                return new Flow(name, <any>undefined, { urn })
            case "azure-native:azuredatatransfer:Pipeline":
                return new Pipeline(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azuredatatransfer", _module)