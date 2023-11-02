import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Google Cloud Platform data connector.
 */
export class GCPDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing GCPDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GCPDataConnector {
        return new GCPDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:GCPDataConnector';

    /**
     * Returns true if the given object is an instance of GCPDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GCPDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GCPDataConnector.__pulumiType;
    }

    /**
     * The auth section of the connector.
     */
    public readonly auth!: pulumi.Output<types.outputs.GCPAuthPropertiesResponse>;
    /**
     * The name of the connector definition that represents the UI config.
     */
    public readonly connectorDefinitionName!: pulumi.Output<string>;
    /**
     * The configuration of the destination of the data.
     */
    public readonly dcrConfig!: pulumi.Output<types.outputs.DCRConfigurationResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'GCP'.
     */
    public readonly kind!: pulumi.Output<"GCP">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The request section of the connector.
     */
    public readonly request!: pulumi.Output<types.outputs.GCPRequestPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GCPDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GCPDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["auth"] = args ? args.auth : undefined;
            resourceInputs["connectorDefinitionName"] = args ? args.connectorDefinitionName : undefined;
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dcrConfig"] = args ? args.dcrConfig : undefined;
            resourceInputs["kind"] = "GCP";
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["auth"] = undefined /*out*/;
            resourceInputs["connectorDefinitionName"] = undefined /*out*/;
            resourceInputs["dcrConfig"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["request"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:GCPDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20200101:GCPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20211001:GCPDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220801:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20221101:GCPDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230201:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:GCPDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GCPDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GCPDataConnector resource.
 */
export interface GCPDataConnectorArgs {
    /**
     * The auth section of the connector.
     */
    auth: pulumi.Input<types.inputs.GCPAuthPropertiesArgs>;
    /**
     * The name of the connector definition that represents the UI config.
     */
    connectorDefinitionName: pulumi.Input<string>;
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The configuration of the destination of the data.
     */
    dcrConfig?: pulumi.Input<types.inputs.DCRConfigurationArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'GCP'.
     */
    kind: pulumi.Input<"GCP">;
    /**
     * The request section of the connector.
     */
    request: pulumi.Input<types.inputs.GCPRequestPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}