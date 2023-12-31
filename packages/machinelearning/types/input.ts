import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about an asset associated with the web service.
 */
export interface AssetItemArgs {
    /**
     * Asset's Id.
     */
    id?: pulumi.Input<string>;
    /**
     * Information about the asset's input ports.
     */
    inputPorts?: pulumi.Input<{[key: string]: pulumi.Input<InputPortArgs>}>;
    /**
     * Access information for the asset.
     */
    locationInfo: pulumi.Input<BlobLocationArgs>;
    /**
     * If the asset is a custom module, this holds the module's metadata.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Asset's friendly name.
     */
    name: pulumi.Input<string>;
    /**
     * Information about the asset's output ports.
     */
    outputPorts?: pulumi.Input<{[key: string]: pulumi.Input<OutputPortArgs>}>;
    /**
     * If the asset is a custom module, this holds the module's parameters.
     */
    parameters?: pulumi.Input<pulumi.Input<ModuleAssetParameterArgs>[]>;
    /**
     * Asset's type.
     */
    type: pulumi.Input<string | enums.AssetType>;
}

/**
 * Describes the access location for a blob.
 */
export interface BlobLocationArgs {
    /**
     * Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI)
     */
    credentials?: pulumi.Input<string>;
    /**
     * The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload.
     */
    uri: pulumi.Input<string>;
}

/**
 * Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/
 */
export interface ColumnSpecificationArgs {
    /**
     * If the data type is categorical, this provides the list of accepted categories.
     */
    enum?: pulumi.Input<any[]>;
    /**
     * Additional format information for the data type.
     */
    format?: pulumi.Input<string | enums.ColumnFormat>;
    /**
     * Data type of the column.
     */
    type: pulumi.Input<string | enums.ColumnType>;
    /**
     * Flag indicating if the type supports null values or not.
     */
    xMsIsnullable?: pulumi.Input<boolean>;
    /**
     * Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.
     */
    xMsIsordered?: pulumi.Input<boolean>;
}

/**
 * Information about the machine learning commitment plan associated with the web service.
 */
export interface CommitmentPlanArgs {
    /**
     * Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.
     */
    id: pulumi.Input<string>;
}

/**
 * Diagnostics settings for an Azure ML web service.
 */
export interface DiagnosticsConfigurationArgs {
    /**
     * Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
     */
    expiry?: pulumi.Input<string>;
    /**
     * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
     */
    level: pulumi.Input<string | enums.DiagnosticsLevel>;
}

/**
 * Sample input data for the service's input(s).
 */
export interface ExampleRequestArgs {
    /**
     * Sample input data for the web service's global parameters
     */
    globalParameters?: pulumi.Input<{[key: string]: any}>;
    /**
     * Sample input data for the web service's input(s) given as an input name to sample input values matrix map.
     */
    inputs?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<any[]>[]>}>;
}

/**
 * Defines an edge within the web service's graph.
 */
export interface GraphEdgeArgs {
    /**
     * The source graph node's identifier.
     */
    sourceNodeId?: pulumi.Input<string>;
    /**
     * The identifier of the source node's port that the edge connects from.
     */
    sourcePortId?: pulumi.Input<string>;
    /**
     * The destination graph node's identifier.
     */
    targetNodeId?: pulumi.Input<string>;
    /**
     * The identifier of the destination node's port that the edge connects into.
     */
    targetPortId?: pulumi.Input<string>;
}

/**
 * Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time.
 */
export interface GraphNodeArgs {
    /**
     * The id of the asset represented by this node.
     */
    assetId?: pulumi.Input<string>;
    /**
     * The id of the input element represented by this node.
     */
    inputId?: pulumi.Input<string>;
    /**
     * The id of the output element represented by this node.
     */
    outputId?: pulumi.Input<string>;
    /**
     * If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<WebServiceParameterArgs>}>;
}

/**
 * Defines the graph of modules making up the machine learning solution.
 */
export interface GraphPackageArgs {
    /**
     * The list of edges making up the graph.
     */
    edges?: pulumi.Input<pulumi.Input<GraphEdgeArgs>[]>;
    /**
     * The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
     */
    graphParameters?: pulumi.Input<{[key: string]: pulumi.Input<GraphParameterArgs>}>;
    /**
     * The set of nodes making up the graph, provided as a nodeId to GraphNode map
     */
    nodes?: pulumi.Input<{[key: string]: pulumi.Input<GraphNodeArgs>}>;
}

/**
 * Defines a global parameter in the graph.
 */
export interface GraphParameterArgs {
    /**
     * Description of this graph parameter.
     */
    description?: pulumi.Input<string>;
    /**
     * Association links for this parameter to nodes in the graph.
     */
    links: pulumi.Input<pulumi.Input<GraphParameterLinkArgs>[]>;
    /**
     * Graph parameter's type.
     */
    type: pulumi.Input<string | enums.ParameterType>;
}

/**
 * Association link for a graph global parameter to a node in the graph.
 */
export interface GraphParameterLinkArgs {
    /**
     * The graph node's identifier
     */
    nodeId: pulumi.Input<string>;
    /**
     * The identifier of the node parameter that the global parameter maps to.
     */
    parameterKey: pulumi.Input<string>;
}

/**
 * Asset input port
 */
export interface InputPortArgs {
    /**
     * Port data type.
     */
    type?: pulumi.Input<string | enums.InputPortType>;
}
/**
 * inputPortArgsProvideDefaults sets the appropriate defaults for InputPortArgs
 */
export function inputPortArgsProvideDefaults(val: InputPortArgs): InputPortArgs {
    return {
        ...val,
        type: (val.type) ?? "Dataset",
    };
}

/**
 * Information about the machine learning workspace containing the experiment that is source for the web service.
 */
export interface MachineLearningWorkspaceArgs {
    /**
     * Specifies the workspace ID of the machine learning workspace associated with the web service
     */
    id: pulumi.Input<string>;
}

/**
 * Nested parameter definition.
 */
export interface ModeValueInfoArgs {
    /**
     * The interface string name for the nested parameter.
     */
    interfaceString?: pulumi.Input<string>;
    /**
     * The definition of the parameter.
     */
    parameters?: pulumi.Input<pulumi.Input<ModuleAssetParameterArgs>[]>;
}

/**
 * Parameter definition for a module asset.
 */
export interface ModuleAssetParameterArgs {
    /**
     * Definitions for nested interface parameters if this is a complex module parameter.
     */
    modeValuesInfo?: pulumi.Input<{[key: string]: pulumi.Input<ModeValueInfoArgs>}>;
    /**
     * Parameter name.
     */
    name?: pulumi.Input<string>;
    /**
     * Parameter type.
     */
    parameterType?: pulumi.Input<string>;
}

/**
 * Asset output port
 */
export interface OutputPortArgs {
    /**
     * Port data type.
     */
    type?: pulumi.Input<string | enums.OutputPortType>;
}
/**
 * outputPortArgsProvideDefaults sets the appropriate defaults for OutputPortArgs
 */
export function outputPortArgsProvideDefaults(val: OutputPortArgs): OutputPortArgs {
    return {
        ...val,
        type: (val.type) ?? "Dataset",
    };
}

/**
 * Holds the available configuration options for an Azure ML web service endpoint.
 */
export interface RealtimeConfigurationArgs {
    /**
     * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.
     */
    maxConcurrentCalls?: pulumi.Input<number>;
}

/**
 * The SKU of a resource.
 */
export interface ResourceSkuArgs {
    /**
     * The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The SKU name. Along with tier, uniquely identifies the SKU.
     */
    name?: pulumi.Input<string>;
    /**
     * The SKU tier. Along with name, uniquely identifies the SKU.
     */
    tier?: pulumi.Input<string>;
}

/**
 * The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/
 */
export interface ServiceInputOutputSpecificationArgs {
    /**
     * The description of the Swagger schema.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
     */
    properties: pulumi.Input<{[key: string]: pulumi.Input<TableSpecificationArgs>}>;
    /**
     * The title of your Swagger schema.
     */
    title?: pulumi.Input<string>;
    /**
     * The type of the entity described in swagger. Always 'object'.
     */
    type: pulumi.Input<string>;
}
/**
 * serviceInputOutputSpecificationArgsProvideDefaults sets the appropriate defaults for ServiceInputOutputSpecificationArgs
 */
export function serviceInputOutputSpecificationArgsProvideDefaults(val: ServiceInputOutputSpecificationArgs): ServiceInputOutputSpecificationArgs {
    return {
        ...val,
        type: (val.type) ?? "object",
    };
}

/**
 * Sku of the resource
 */
export interface SkuArgs {
    /**
     * Name of the sku
     */
    name?: pulumi.Input<string>;
    /**
     * Tier of the sku like Basic or Enterprise
     */
    tier?: pulumi.Input<string>;
}

/**
 * Access information for a storage account.
 */
export interface StorageAccountArgs {
    /**
     * Specifies the key used to access the storage account.
     */
    key?: pulumi.Input<string>;
    /**
     * Specifies the name of the storage account.
     */
    name?: pulumi.Input<string>;
}

/**
 * The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/
 */
export interface TableSpecificationArgs {
    /**
     * Swagger schema description.
     */
    description?: pulumi.Input<string>;
    /**
     * The format, if 'type' is not 'object'
     */
    format?: pulumi.Input<string>;
    /**
     * The set of columns within the data table.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<ColumnSpecificationArgs>}>;
    /**
     * Swagger schema title.
     */
    title?: pulumi.Input<string>;
    /**
     * The type of the entity described in swagger.
     */
    type: pulumi.Input<string>;
}
/**
 * tableSpecificationArgsProvideDefaults sets the appropriate defaults for TableSpecificationArgs
 */
export function tableSpecificationArgsProvideDefaults(val: TableSpecificationArgs): TableSpecificationArgs {
    return {
        ...val,
        type: (val.type) ?? "object",
    };
}

/**
 * Access keys for the web service calls.
 */
export interface WebServiceKeysArgs {
    /**
     * The primary access key.
     */
    primary?: pulumi.Input<string>;
    /**
     * The secondary access key.
     */
    secondary?: pulumi.Input<string>;
}

/**
 * Web Service Parameter object for node and global parameter
 */
export interface WebServiceParameterArgs {
    /**
     * If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here.
     */
    certificateThumbprint?: pulumi.Input<string>;
    /**
     * The parameter value
     */
    value?: any;
}

/**
 * Properties specific to a Graph based web service.
 */
export interface WebServicePropertiesForGraphArgs {
    /**
     * Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
     */
    assets?: pulumi.Input<{[key: string]: pulumi.Input<AssetItemArgs>}>;
    /**
     * Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations.
     */
    commitmentPlan?: pulumi.Input<CommitmentPlanArgs>;
    /**
     * The description of the web service.
     */
    description?: pulumi.Input<string>;
    /**
     * Settings controlling the diagnostics traces collection for the web service.
     */
    diagnostics?: pulumi.Input<DiagnosticsConfigurationArgs>;
    /**
     * Defines sample input data for one or more of the service's inputs.
     */
    exampleRequest?: pulumi.Input<ExampleRequestArgs>;
    /**
     * When set to true, sample data is included in the web service's swagger definition. The default value is true.
     */
    exposeSampleData?: pulumi.Input<boolean>;
    /**
     * Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more information, see the Swagger specification.
     */
    input?: pulumi.Input<ServiceInputOutputSpecificationArgs>;
    /**
     * Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure Machine Learning system generates them for you. Note: The keys are not returned from calls to GET operations.
     */
    keys?: pulumi.Input<WebServiceKeysArgs>;
    /**
     * Specifies the Machine Learning workspace containing the experiment that is source for the web service.
     */
    machineLearningWorkspace?: pulumi.Input<MachineLearningWorkspaceArgs>;
    /**
     * Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more information, see the Swagger specification.
     */
    output?: pulumi.Input<ServiceInputOutputSpecificationArgs>;
    /**
     * The definition of the graph package making up this web service.
     */
    package?: pulumi.Input<GraphPackageArgs>;
    /**
     * Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
     * Expected value is 'Graph'.
     */
    packageType: pulumi.Input<"Graph">;
    /**
     * The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<WebServiceParameterArgs>}>;
    /**
     * When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
     */
    payloadsInBlobStorage?: pulumi.Input<boolean>;
    /**
     * The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage parameter is set to true. Otherwise is set to null.
     */
    payloadsLocation?: pulumi.Input<BlobLocationArgs>;
    /**
     * When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
     */
    readOnly?: pulumi.Input<boolean>;
    /**
     * Contains the configuration settings for the web service endpoint.
     */
    realtimeConfiguration?: pulumi.Input<RealtimeConfigurationArgs>;
    /**
     * Specifies the storage account that Azure Machine Learning uses to store information about the web service. Only the name of the storage account is returned from calls to GET operations. When updating the storage account information, you must ensure that all necessary assets are available in the new storage account or calls to your web service will fail.
     */
    storageAccount?: pulumi.Input<StorageAccountArgs>;
    /**
     * The title of the web service.
     */
    title?: pulumi.Input<string>;
}
/**
 * webServicePropertiesForGraphArgsProvideDefaults sets the appropriate defaults for WebServicePropertiesForGraphArgs
 */
export function webServicePropertiesForGraphArgsProvideDefaults(val: WebServicePropertiesForGraphArgs): WebServicePropertiesForGraphArgs {
    return {
        ...val,
        input: (val.input ? pulumi.output(val.input).apply(serviceInputOutputSpecificationArgsProvideDefaults) : undefined),
        output: (val.output ? pulumi.output(val.output).apply(serviceInputOutputSpecificationArgsProvideDefaults) : undefined),
    };
}


