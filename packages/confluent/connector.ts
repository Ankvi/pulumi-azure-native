import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of connector record
 *
 * Uses Azure REST API version 2024-07-01. In version 2.x of the Azure Native provider, it used API version 2024-07-01.
 *
 * Other available API versions: 2025-07-17-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector {
        return new Connector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:confluent:Connector';

    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Connector Info Base
     */
    public readonly connectorBasicInfo!: pulumi.Output<types.outputs.ConnectorInfoBaseResponse | undefined>;
    /**
     * Connector Service type info base properties.
     */
    public readonly connectorServiceTypeInfo!: pulumi.Output<types.outputs.AzureBlobStorageSinkConnectorServiceInfoResponse | types.outputs.AzureBlobStorageSourceConnectorServiceInfoResponse | types.outputs.AzureCosmosDBSinkConnectorServiceInfoResponse | types.outputs.AzureCosmosDBSourceConnectorServiceInfoResponse | types.outputs.AzureSynapseAnalyticsSinkConnectorServiceInfoResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The connection information consumed by applications.
     */
    public readonly partnerConnectorInfo!: pulumi.Output<types.outputs.KafkaAzureBlobStorageSinkConnectorInfoResponse | types.outputs.KafkaAzureBlobStorageSourceConnectorInfoResponse | types.outputs.KafkaAzureCosmosDBSinkConnectorInfoResponse | types.outputs.KafkaAzureCosmosDBSourceConnectorInfoResponse | types.outputs.KafkaAzureSynapseAnalyticsSinkConnectorInfoResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.organizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["connectorBasicInfo"] = args ? args.connectorBasicInfo : undefined;
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["connectorServiceTypeInfo"] = args ? args.connectorServiceTypeInfo : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["organizationName"] = args ? args.organizationName : undefined;
            resourceInputs["partnerConnectorInfo"] = args ? args.partnerConnectorInfo : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectorBasicInfo"] = undefined /*out*/;
            resourceInputs["connectorServiceTypeInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerConnectorInfo"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:confluent/v20240701:Connector" }, { type: "azure-native:confluent/v20250717preview:Connector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: pulumi.Input<string>;
    /**
     * Connector Info Base
     */
    connectorBasicInfo?: pulumi.Input<types.inputs.ConnectorInfoBaseArgs>;
    /**
     * Confluent connector name
     */
    connectorName?: pulumi.Input<string>;
    /**
     * Connector Service type info base properties.
     */
    connectorServiceTypeInfo?: pulumi.Input<types.inputs.AzureBlobStorageSinkConnectorServiceInfoArgs | types.inputs.AzureBlobStorageSourceConnectorServiceInfoArgs | types.inputs.AzureCosmosDBSinkConnectorServiceInfoArgs | types.inputs.AzureCosmosDBSourceConnectorServiceInfoArgs | types.inputs.AzureSynapseAnalyticsSinkConnectorServiceInfoArgs>;
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The connection information consumed by applications.
     */
    partnerConnectorInfo?: pulumi.Input<types.inputs.KafkaAzureBlobStorageSinkConnectorInfoArgs | types.inputs.KafkaAzureBlobStorageSourceConnectorInfoArgs | types.inputs.KafkaAzureCosmosDBSinkConnectorInfoArgs | types.inputs.KafkaAzureCosmosDBSourceConnectorInfoArgs | types.inputs.KafkaAzureSynapseAnalyticsSinkConnectorInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}