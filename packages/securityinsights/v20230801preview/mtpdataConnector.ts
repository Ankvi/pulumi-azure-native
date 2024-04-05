import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents MTP (Microsoft Threat Protection) data connector.
 */
export class MTPDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing MTPDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MTPDataConnector {
        return new MTPDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230801preview:MTPDataConnector';

    /**
     * Returns true if the given object is an instance of MTPDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MTPDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MTPDataConnector.__pulumiType;
    }

    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.MTPDataConnectorDataTypesResponse>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The available filtered providers for the connector.
     */
    public readonly filteredProviders!: pulumi.Output<types.outputs.MtpFilteredProvidersResponse | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftThreatProtection'.
     */
    public readonly kind!: pulumi.Output<"MicrosoftThreatProtection">;
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
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MTPDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MTPDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataTypes'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["filteredProviders"] = args ? args.filteredProviders : undefined;
            resourceInputs["kind"] = "MicrosoftThreatProtection";
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
            resourceInputs["filteredProviders"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:MTPDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20200101:MTPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20211001:MTPDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220801:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20221101:MTPDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230201:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20231101:MTPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20240301:MTPDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MTPDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MTPDataConnector resource.
 */
export interface MTPDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes: pulumi.Input<types.inputs.MTPDataConnectorDataTypesArgs>;
    /**
     * The available filtered providers for the connector.
     */
    filteredProviders?: pulumi.Input<types.inputs.MtpFilteredProvidersArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftThreatProtection'.
     */
    kind: pulumi.Input<"MicrosoftThreatProtection">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    tenantId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}