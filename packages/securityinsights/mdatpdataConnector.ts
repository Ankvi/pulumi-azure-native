import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents MDATP (Microsoft Defender Advanced Threat Protection) data connector.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-01-01.
 */
export class MDATPDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing MDATPDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MDATPDataConnector {
        return new MDATPDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:MDATPDataConnector';

    /**
     * Returns true if the given object is an instance of MDATPDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MDATPDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MDATPDataConnector.__pulumiType;
    }

    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.AlertsDataTypeOfDataConnectorResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftDefenderAdvancedThreatProtection'.
     */
    public readonly kind!: pulumi.Output<"MicrosoftDefenderAdvancedThreatProtection">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MDATPDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MDATPDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["kind"] = "MicrosoftDefenderAdvancedThreatProtection";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20200101:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20211001:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220801:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20221101:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230201:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231101:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240301:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240901:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20250101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20250301:MDATPDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MDATPDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MDATPDataConnector resource.
 */
export interface MDATPDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes?: pulumi.Input<types.inputs.AlertsDataTypeOfDataConnectorArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftDefenderAdvancedThreatProtection'.
     */
    kind: pulumi.Input<"MicrosoftDefenderAdvancedThreatProtection">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}