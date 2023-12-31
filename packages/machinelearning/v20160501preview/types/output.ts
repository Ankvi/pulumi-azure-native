import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about an asset associated with the web service.
     */
    export interface AssetItemResponse {
        /**
         * Asset's Id.
         */
        id?: string;
        /**
         * Information about the asset's input ports.
         */
        inputPorts?: {[key: string]: InputPortResponse};
        /**
         * Access information for the asset.
         */
        locationInfo: AssetLocationResponse;
        /**
         * If the asset is a custom module, this holds the module's metadata.
         */
        metadata?: {[key: string]: string};
        /**
         * Asset's friendly name.
         */
        name: string;
        /**
         * Information about the asset's output ports.
         */
        outputPorts?: {[key: string]: OutputPortResponse};
        /**
         * If the asset is a custom module, this holds the module's parameters.
         */
        parameters?: ModuleAssetParameterResponse[];
        /**
         * Asset's type.
         */
        type: string;
    }

    /**
     * Describes the access location for a web service asset.
     */
    export interface AssetLocationResponse {
        /**
         * Access credentials for the asset, if applicable (e.g. asset specified by storage account connection string + blob URI)
         */
        credentials?: string;
        /**
         * The URI where the asset is accessible from, (e.g. aml://abc for system assets or https://xyz for user assets
         */
        uri: string;
    }

    /**
     * Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/
     */
    export interface ColumnSpecificationResponse {
        /**
         * If the data type is categorical, this provides the list of accepted categories.
         */
        enum?: any[];
        /**
         * Additional format information for the data type.
         */
        format?: string;
        /**
         * Data type of the column.
         */
        type: string;
        /**
         * Flag indicating if the type supports null values or not.
         */
        xMsIsnullable?: boolean;
        /**
         * Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column.
         */
        xMsIsordered?: boolean;
    }

    /**
     * Properties of an Azure ML commitment plan.
     */
    export interface CommitmentPlanPropertiesResponse {
        /**
         * Indicates whether usage beyond the commitment plan's included quantities will be charged.
         */
        chargeForOverage: boolean;
        /**
         * Indicates whether the commitment plan will incur a charge.
         */
        chargeForPlan: boolean;
        /**
         * The date at which this commitment plan was created, in ISO 8601 format.
         */
        creationDate: string;
        /**
         * The included resource quantities this plan gives you.
         */
        includedQuantities: {[key: string]: PlanQuantityResponse};
        /**
         * The maximum number of commitment associations that can be children of this commitment plan.
         */
        maxAssociationLimit: number;
        /**
         * The maximum scale-out capacity for this commitment plan.
         */
        maxCapacityLimit: number;
        /**
         * The minimum scale-out capacity for this commitment plan.
         */
        minCapacityLimit: number;
        /**
         * The Azure meter which will be used to charge for this commitment plan.
         */
        planMeter: string;
        /**
         * The frequency at which this commitment plan's included quantities are refilled.
         */
        refillFrequencyInDays: number;
        /**
         * Indicates whether this commitment plan will be moved into a suspended state if usage goes beyond the commitment plan's included quantities.
         */
        suspendPlanOnOverage: boolean;
    }

    /**
     * Information about the machine learning commitment plan associated with the web service.
     */
    export interface CommitmentPlanResponse {
        /**
         * Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.
         */
        id: string;
    }

    /**
     * Diagnostics settings for an Azure ML web service.
     */
    export interface DiagnosticsConfigurationResponse {
        /**
         * Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited.
         */
        expiry?: string;
        /**
         * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
         */
        level: string;
    }

    /**
     * Sample input data for the service's input(s).
     */
    export interface ExampleRequestResponse {
        /**
         * Sample input data for the web service's global parameters
         */
        globalParameters?: {[key: string]: any};
        /**
         * Sample input data for the web service's input(s) given as an input name to sample input values matrix map.
         */
        inputs?: {[key: string]: any[][]};
    }

    /**
     * Defines an edge within the web service's graph.
     */
    export interface GraphEdgeResponse {
        /**
         * The source graph node's identifier.
         */
        sourceNodeId?: string;
        /**
         * The identifier of the source node's port that the edge connects from.
         */
        sourcePortId?: string;
        /**
         * The destination graph node's identifier.
         */
        targetNodeId?: string;
        /**
         * The identifier of the destination node's port that the edge connects into.
         */
        targetPortId?: string;
    }

    /**
     * Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time.
     */
    export interface GraphNodeResponse {
        /**
         * The id of the asset represented by this node.
         */
        assetId?: string;
        /**
         * The id of the input element represented by this node.
         */
        inputId?: string;
        /**
         * The id of the output element represented by this node.
         */
        outputId?: string;
        /**
         * If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime.
         */
        parameters?: {[key: string]: string};
    }

    /**
     * Defines the graph of modules making up the machine learning solution.
     */
    export interface GraphPackageResponse {
        /**
         * The list of edges making up the graph.
         */
        edges?: GraphEdgeResponse[];
        /**
         * The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level.
         */
        graphParameters?: {[key: string]: GraphParameterResponse};
        /**
         * The set of nodes making up the graph, provided as a nodeId to GraphNode map
         */
        nodes?: {[key: string]: GraphNodeResponse};
    }

    /**
     * Association link for a graph global parameter to a node in the graph.
     */
    export interface GraphParameterLinkResponse {
        /**
         * The graph node's identifier
         */
        nodeId: string;
        /**
         * The identifier of the node parameter that the global parameter maps to.
         */
        parameterKey: string;
    }

    /**
     * Defines a global parameter in the graph.
     */
    export interface GraphParameterResponse {
        /**
         * Description of this graph parameter.
         */
        description?: string;
        /**
         * Association links for this parameter to nodes in the graph.
         */
        links: GraphParameterLinkResponse[];
        /**
         * Graph parameter's type.
         */
        type: string;
    }

    /**
     * Asset input port
     */
    export interface InputPortResponse {
        /**
         * Port data type.
         */
        type?: string;
    }
    /**
     * inputPortResponseProvideDefaults sets the appropriate defaults for InputPortResponse
     */
    export function inputPortResponseProvideDefaults(val: InputPortResponse): InputPortResponse {
        return {
            ...val,
            type: (val.type) ?? "Dataset",
        };
    }

    /**
     * Information about the machine learning workspace containing the experiment that is source for the web service.
     */
    export interface MachineLearningWorkspaceResponse {
        /**
         * Specifies the workspace ID of the machine learning workspace associated with the web service
         */
        id: string;
    }

    /**
     * Nested parameter definition.
     */
    export interface ModeValueInfoResponse {
        /**
         * The interface string name for the nested parameter.
         */
        interfaceString?: string;
        /**
         * The definition of the parameter.
         */
        parameters?: ModuleAssetParameterResponse[];
    }

    /**
     * Parameter definition for a module asset.
     */
    export interface ModuleAssetParameterResponse {
        /**
         * Definitions for nested interface parameters if this is a complex module parameter.
         */
        modeValuesInfo?: {[key: string]: ModeValueInfoResponse};
        /**
         * Parameter name.
         */
        name?: string;
        /**
         * Parameter type.
         */
        parameterType?: string;
    }

    /**
     * Asset output port
     */
    export interface OutputPortResponse {
        /**
         * Port data type.
         */
        type?: string;
    }
    /**
     * outputPortResponseProvideDefaults sets the appropriate defaults for OutputPortResponse
     */
    export function outputPortResponseProvideDefaults(val: OutputPortResponse): OutputPortResponse {
        return {
            ...val,
            type: (val.type) ?? "Dataset",
        };
    }

    /**
     * Represents the quantity a commitment plan provides of a metered resource.
     */
    export interface PlanQuantityResponse {
        /**
         * The quantity added to the commitment plan at an interval specified by its allowance frequency.
         */
        allowance: number;
        /**
         * The quantity available to the plan the last time usage was calculated.
         */
        amount: number;
        /**
         * The Azure meter for usage against included quantities.
         */
        includedQuantityMeter: string;
        /**
         * The Azure meter for usage which exceeds included quantities.
         */
        overageMeter: string;
    }

    /**
     * Holds the available configuration options for an Azure ML web service endpoint.
     */
    export interface RealtimeConfigurationResponse {
        /**
         * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.
         */
        maxConcurrentCalls?: number;
    }

    /**
     * The SKU of a resource.
     */
    export interface ResourceSkuResponse {
        /**
         * The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
         */
        capacity?: number;
        /**
         * The SKU name. Along with tier, uniquely identifies the SKU.
         */
        name?: string;
        /**
         * The SKU tier. Along with name, uniquely identifies the SKU.
         */
        tier?: string;
    }

    /**
     * The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/
     */
    export interface ServiceInputOutputSpecificationResponse {
        /**
         * The description of the Swagger schema.
         */
        description?: string;
        /**
         * Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
         */
        properties: {[key: string]: TableSpecificationResponse};
        /**
         * The title of your Swagger schema.
         */
        title?: string;
        /**
         * The type of the entity described in swagger. Always 'object'.
         */
        type: string;
    }
    /**
     * serviceInputOutputSpecificationResponseProvideDefaults sets the appropriate defaults for ServiceInputOutputSpecificationResponse
     */
    export function serviceInputOutputSpecificationResponseProvideDefaults(val: ServiceInputOutputSpecificationResponse): ServiceInputOutputSpecificationResponse {
        return {
            ...val,
            type: (val.type) ?? "object",
        };
    }

    /**
     * Access information for a storage account.
     */
    export interface StorageAccountResponse {
        /**
         * Specifies the key used to access the storage account.
         */
        key?: string;
        /**
         * Specifies the name of the storage account.
         */
        name?: string;
    }

    /**
     * The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/
     */
    export interface TableSpecificationResponse {
        /**
         * Swagger schema description.
         */
        description?: string;
        /**
         * The format, if 'type' is not 'object'
         */
        format?: string;
        /**
         * The set of columns within the data table.
         */
        properties?: {[key: string]: ColumnSpecificationResponse};
        /**
         * Swagger schema title.
         */
        title?: string;
        /**
         * The type of the entity described in swagger.
         */
        type: string;
    }
    /**
     * tableSpecificationResponseProvideDefaults sets the appropriate defaults for TableSpecificationResponse
     */
    export function tableSpecificationResponseProvideDefaults(val: TableSpecificationResponse): TableSpecificationResponse {
        return {
            ...val,
            type: (val.type) ?? "object",
        };
    }

    /**
     * Access keys for the web service calls.
     */
    export interface WebServiceKeysResponse {
        /**
         * The primary access key.
         */
        primary?: string;
        /**
         * The secondary access key.
         */
        secondary?: string;
    }

    /**
     * Properties specific to a Graph based web service.
     */
    export interface WebServicePropertiesForGraphResponse {
        /**
         * Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs.
         */
        assets?: {[key: string]: AssetItemResponse};
        /**
         * Contains the commitment plan associated with this web service. Set at creation time. Once set, this value cannot be changed. Note: The commitment plan is not returned from calls to GET operations.
         */
        commitmentPlan?: CommitmentPlanResponse;
        /**
         * Read Only: The date and time when the web service was created.
         */
        createdOn: string;
        /**
         * The description of the web service.
         */
        description?: string;
        /**
         * Settings controlling the diagnostics traces collection for the web service.
         */
        diagnostics?: DiagnosticsConfigurationResponse;
        /**
         * Defines sample input data for one or more of the service's inputs.
         */
        exampleRequest?: ExampleRequestResponse;
        /**
         * When set to true, sample data is included in the web service's swagger definition. The default value is true.
         */
        exposeSampleData?: boolean;
        /**
         * Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more information, see the Swagger specification.
         */
        input?: ServiceInputOutputSpecificationResponse;
        /**
         * Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure Machine Learning system generates them for you. Note: The keys are not returned from calls to GET operations.
         */
        keys?: WebServiceKeysResponse;
        /**
         * Specifies the Machine Learning workspace containing the experiment that is source for the web service.
         */
        machineLearningWorkspace?: MachineLearningWorkspaceResponse;
        /**
         * Read Only: The date and time when the web service was last modified.
         */
        modifiedOn: string;
        /**
         * Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more information, see the Swagger specification.
         */
        output?: ServiceInputOutputSpecificationResponse;
        /**
         * The definition of the graph package making up this web service.
         */
        package?: GraphPackageResponse;
        /**
         * Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
         * Expected value is 'Graph'.
         */
        packageType: "Graph";
        /**
         * The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required.
         */
        parameters?: {[key: string]: string};
        /**
         * Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
         */
        provisioningState: string;
        /**
         * When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
         */
        readOnly?: boolean;
        /**
         * Contains the configuration settings for the web service endpoint.
         */
        realtimeConfiguration?: RealtimeConfigurationResponse;
        /**
         * Specifies the storage account that Azure Machine Learning uses to store information about the web service. Only the name of the storage account is returned from calls to GET operations. When updating the storage account information, you must ensure that all necessary assets are available in the new storage account or calls to your web service will fail.
         */
        storageAccount?: StorageAccountResponse;
        /**
         * Read Only: Contains the URI of the swagger spec associated with this web service.
         */
        swaggerLocation: string;
        /**
         * The title of the web service.
         */
        title?: string;
    }
    /**
     * webServicePropertiesForGraphResponseProvideDefaults sets the appropriate defaults for WebServicePropertiesForGraphResponse
     */
    export function webServicePropertiesForGraphResponseProvideDefaults(val: WebServicePropertiesForGraphResponse): WebServicePropertiesForGraphResponse {
        return {
            ...val,
            input: (val.input ? serviceInputOutputSpecificationResponseProvideDefaults(val.input) : undefined),
            output: (val.output ? serviceInputOutputSpecificationResponseProvideDefaults(val.output) : undefined),
        };
    }
