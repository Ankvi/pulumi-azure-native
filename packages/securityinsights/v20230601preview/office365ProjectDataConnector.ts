import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Office Microsoft Project data connector.
 */
export class Office365ProjectDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing Office365ProjectDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Office365ProjectDataConnector {
        return new Office365ProjectDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:Office365ProjectDataConnector';

    /**
     * Returns true if the given object is an instance of Office365ProjectDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Office365ProjectDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Office365ProjectDataConnector.__pulumiType;
    }

    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.Office365ProjectConnectorDataTypesResponse>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'Office365Project'.
     */
    public readonly kind!: pulumi.Output<"Office365Project">;
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
     * Create a Office365ProjectDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Office365ProjectDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["kind"] = "Office365Project";
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
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20200101:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20211001:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220801:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20221101:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230201:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:Office365ProjectDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Office365ProjectDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Office365ProjectDataConnector resource.
 */
export interface Office365ProjectDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes: pulumi.Input<types.inputs.Office365ProjectConnectorDataTypesArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'Office365Project'.
     */
    kind: pulumi.Input<"Office365Project">;
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
