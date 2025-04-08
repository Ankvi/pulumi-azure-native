import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ dataLakeConnector/topicMap resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class DataLakeConnectorTopicMap extends pulumi.CustomResource {
    /**
     * Get an existing DataLakeConnectorTopicMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataLakeConnectorTopicMap {
        return new DataLakeConnectorTopicMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:DataLakeConnectorTopicMap';

    /**
     * Returns true if the given object is an instance of DataLakeConnectorTopicMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataLakeConnectorTopicMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataLakeConnectorTopicMap.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * DataLake Connector CRD to use.
     */
    public readonly dataLakeConnectorRef!: pulumi.Output<string>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * TopicMap for DataLake connector.
     */
    public readonly mapping!: pulumi.Output<types.outputs.DataLakeConnectorMapResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataLakeConnectorTopicMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataLakeConnectorTopicMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataLakeConnectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataLakeConnectorName'");
            }
            if ((!args || args.dataLakeConnectorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataLakeConnectorRef'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.mapping === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mapping'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataLakeConnectorName"] = args ? args.dataLakeConnectorName : undefined;
            resourceInputs["dataLakeConnectorRef"] = args ? args.dataLakeConnectorRef : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mapping"] = args ? (args.mapping ? pulumi.output(args.mapping).apply(types.inputs.dataLakeConnectorMapArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topicMapName"] = args ? args.topicMapName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataLakeConnectorRef"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mapping"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:DataLakeConnectorTopicMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataLakeConnectorTopicMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataLakeConnectorTopicMap resource.
 */
export interface DataLakeConnectorTopicMapArgs {
    /**
     * Name of MQ dataLakeConnector resource
     */
    dataLakeConnectorName: pulumi.Input<string>;
    /**
     * DataLake Connector CRD to use.
     */
    dataLakeConnectorRef: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * TopicMap for DataLake connector.
     */
    mapping: pulumi.Input<types.inputs.DataLakeConnectorMapArgs>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of MQ dataLakeConnector/topicMap resource
     */
    topicMapName?: pulumi.Input<string>;
}