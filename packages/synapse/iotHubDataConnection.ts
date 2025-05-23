import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an iot hub data connection.
 *
 * Uses Azure REST API version 2021-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-06-01-preview.
 */
export class IotHubDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing IotHubDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubDataConnection {
        return new IotHubDataConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:IotHubDataConnection';

    /**
     * Returns true if the given object is an instance of IotHubDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubDataConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubDataConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The iot hub consumer group.
     */
    public readonly consumerGroup!: pulumi.Output<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    public readonly dataFormat!: pulumi.Output<string | undefined>;
    /**
     * System properties of the iot hub
     */
    public readonly eventSystemProperties!: pulumi.Output<string[] | undefined>;
    /**
     * The resource ID of the Iot hub to be used to create a data connection.
     */
    public readonly iotHubResourceId!: pulumi.Output<string>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'IotHub'.
     */
    public readonly kind!: pulumi.Output<"IotHub">;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    public readonly mappingRuleName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the share access policy
     */
    public readonly sharedAccessPolicyName!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotHubDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubDataConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.consumerGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroup'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.iotHubResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iotHubResourceId'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.kustoPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sharedAccessPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sharedAccessPolicyName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["dataConnectionName"] = args ? args.dataConnectionName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["eventSystemProperties"] = args ? args.eventSystemProperties : undefined;
            resourceInputs["iotHubResourceId"] = args ? args.iotHubResourceId : undefined;
            resourceInputs["kind"] = "IotHub";
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedAccessPolicyName"] = args ? args.sharedAccessPolicyName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["eventSystemProperties"] = undefined /*out*/;
            resourceInputs["iotHubResourceId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sharedAccessPolicyName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210401preview:IotHubDataConnection" }, { type: "azure-native:synapse/v20210601preview:EventGridDataConnection" }, { type: "azure-native:synapse/v20210601preview:EventHubDataConnection" }, { type: "azure-native:synapse/v20210601preview:IotHubDataConnection" }, { type: "azure-native:synapse:EventGridDataConnection" }, { type: "azure-native:synapse:EventHubDataConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotHubDataConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotHubDataConnection resource.
 */
export interface IotHubDataConnectionArgs {
    /**
     * The iot hub consumer group.
     */
    consumerGroup: pulumi.Input<string>;
    /**
     * The name of the data connection.
     */
    dataConnectionName?: pulumi.Input<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    dataFormat?: pulumi.Input<string | types.enums.IotHubDataFormat>;
    /**
     * The name of the database in the Kusto pool.
     */
    databaseName: pulumi.Input<string>;
    /**
     * System properties of the iot hub
     */
    eventSystemProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the Iot hub to be used to create a data connection.
     */
    iotHubResourceId: pulumi.Input<string>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'IotHub'.
     */
    kind: pulumi.Input<"IotHub">;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share access policy
     */
    sharedAccessPolicyName: pulumi.Input<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    tableName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}