import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Codeless UI data connector.
 */
export class CodelessUiDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing CodelessUiDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CodelessUiDataConnector {
        return new CodelessUiDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20210301preview:CodelessUiDataConnector';

    /**
     * Returns true if the given object is an instance of CodelessUiDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CodelessUiDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CodelessUiDataConnector.__pulumiType;
    }

    /**
     * Config to describe the instructions blade
     */
    public readonly connectorUiConfig!: pulumi.Output<types.outputs.CodelessUiConnectorConfigPropertiesResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'GenericUI'.
     */
    public readonly kind!: pulumi.Output<"GenericUI">;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CodelessUiDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CodelessUiDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.operationalInsightsResourceProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationalInsightsResourceProvider'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["connectorUiConfig"] = args ? args.connectorUiConfig : undefined;
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["kind"] = "GenericUI";
            resourceInputs["operationalInsightsResourceProvider"] = args ? args.operationalInsightsResourceProvider : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectorUiConfig"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20200101:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20211001:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220801:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20221101:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230201:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:CodelessUiDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CodelessUiDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CodelessUiDataConnector resource.
 */
export interface CodelessUiDataConnectorArgs {
    /**
     * Config to describe the instructions blade
     */
    connectorUiConfig?: pulumi.Input<types.inputs.CodelessUiConnectorConfigPropertiesArgs>;
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The kind of the data connector
     * Expected value is 'GenericUI'.
     */
    kind: pulumi.Input<"GenericUI">;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
