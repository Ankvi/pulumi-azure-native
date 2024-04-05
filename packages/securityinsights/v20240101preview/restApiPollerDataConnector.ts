import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Rest Api Poller data connector.
 */
export class RestApiPollerDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing RestApiPollerDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RestApiPollerDataConnector {
        return new RestApiPollerDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20240101preview:RestApiPollerDataConnector';

    /**
     * Returns true if the given object is an instance of RestApiPollerDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RestApiPollerDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RestApiPollerDataConnector.__pulumiType;
    }

    /**
     * The add on attributes. The key name will become attribute name (a column) and the value will become the attribute value in the payload.
     */
    public readonly addOnAttributes!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The a authentication model.
     */
    public readonly auth!: pulumi.Output<types.outputs.AWSAuthModelResponse | types.outputs.ApiKeyAuthModelResponse | types.outputs.BasicAuthModelResponse | types.outputs.GCPAuthModelResponse | types.outputs.GenericBlobSbsAuthModelResponse | types.outputs.GitHubAuthModelResponse | types.outputs.JwtAuthModelResponse | types.outputs.NoneAuthModelResponse | types.outputs.OAuthModelResponse | types.outputs.OracleAuthModelResponse | types.outputs.SessionAuthModelResponse>;
    /**
     * The connector definition name (the dataConnectorDefinition resource id).
     */
    public readonly connectorDefinitionName!: pulumi.Output<string>;
    /**
     * The Log Analytics table destination.
     */
    public readonly dataType!: pulumi.Output<string | undefined>;
    /**
     * The DCR related properties.
     */
    public readonly dcrConfig!: pulumi.Output<types.outputs.DCRConfigurationResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the connector is active or not.
     */
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'RestApiPoller'.
     */
    public readonly kind!: pulumi.Output<"RestApiPoller">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The paging configuration.
     */
    public readonly paging!: pulumi.Output<types.outputs.RestApiPollerRequestPagingConfigResponse | undefined>;
    /**
     * The request configuration.
     */
    public readonly request!: pulumi.Output<types.outputs.RestApiPollerRequestConfigResponse>;
    /**
     * The response configuration.
     */
    public readonly response!: pulumi.Output<types.outputs.CcpResponseConfigResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RestApiPollerDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RestApiPollerDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.auth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'auth'");
            }
            if ((!args || args.connectorDefinitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorDefinitionName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.request === undefined) && !opts.urn) {
                throw new Error("Missing required property 'request'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["addOnAttributes"] = args ? args.addOnAttributes : undefined;
            resourceInputs["auth"] = args ? args.auth : undefined;
            resourceInputs["connectorDefinitionName"] = args ? args.connectorDefinitionName : undefined;
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataType"] = args ? args.dataType : undefined;
            resourceInputs["dcrConfig"] = args ? args.dcrConfig : undefined;
            resourceInputs["isActive"] = args ? args.isActive : undefined;
            resourceInputs["kind"] = "RestApiPoller";
            resourceInputs["paging"] = args ? args.paging : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["response"] = args ? (args.response ? pulumi.output(args.response).apply(types.inputs.ccpResponseConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addOnAttributes"] = undefined /*out*/;
            resourceInputs["auth"] = undefined /*out*/;
            resourceInputs["connectorDefinitionName"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["dcrConfig"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isActive"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["paging"] = undefined /*out*/;
            resourceInputs["request"] = undefined /*out*/;
            resourceInputs["response"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20200101:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20211001:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220801:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20221101:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230201:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20231101:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20240301:RestApiPollerDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RestApiPollerDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RestApiPollerDataConnector resource.
 */
export interface RestApiPollerDataConnectorArgs {
    /**
     * The add on attributes. The key name will become attribute name (a column) and the value will become the attribute value in the payload.
     */
    addOnAttributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The a authentication model.
     */
    auth: pulumi.Input<types.inputs.AWSAuthModelArgs | types.inputs.ApiKeyAuthModelArgs | types.inputs.BasicAuthModelArgs | types.inputs.GCPAuthModelArgs | types.inputs.GenericBlobSbsAuthModelArgs | types.inputs.GitHubAuthModelArgs | types.inputs.JwtAuthModelArgs | types.inputs.NoneAuthModelArgs | types.inputs.OAuthModelArgs | types.inputs.OracleAuthModelArgs | types.inputs.SessionAuthModelArgs>;
    /**
     * The connector definition name (the dataConnectorDefinition resource id).
     */
    connectorDefinitionName: pulumi.Input<string>;
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The Log Analytics table destination.
     */
    dataType?: pulumi.Input<string>;
    /**
     * The DCR related properties.
     */
    dcrConfig?: pulumi.Input<types.inputs.DCRConfigurationArgs>;
    /**
     * Indicates whether the connector is active or not.
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * The kind of the data connector
     * Expected value is 'RestApiPoller'.
     */
    kind: pulumi.Input<"RestApiPoller">;
    /**
     * The paging configuration.
     */
    paging?: pulumi.Input<types.inputs.RestApiPollerRequestPagingConfigArgs>;
    /**
     * The request configuration.
     */
    request: pulumi.Input<types.inputs.RestApiPollerRequestConfigArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The response configuration.
     */
    response?: pulumi.Input<types.inputs.CcpResponseConfigArgs>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}