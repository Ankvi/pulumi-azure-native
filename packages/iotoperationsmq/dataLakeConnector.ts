import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ dataLakeConnector resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class DataLakeConnector extends pulumi.CustomResource {
    /**
     * Get an existing DataLakeConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataLakeConnector {
        return new DataLakeConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:DataLakeConnector';

    /**
     * Returns true if the given object is an instance of DataLakeConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataLakeConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataLakeConnector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * DataLake database format to use.
     */
    public readonly databaseFormat!: pulumi.Output<string>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of DataLakeConnector Docker Image.
     */
    public readonly image!: pulumi.Output<types.outputs.ContainerImageResponse>;
    /**
     * The number of DataLakeConnector pods to spin up.
     */
    public readonly instances!: pulumi.Output<number | undefined>;
    /**
     * The details for connecting with Local Broker.
     */
    public readonly localBrokerConnection!: pulumi.Output<types.outputs.LocalBrokerConnectionSpecResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The log level of the DataLake Connector instances.
     */
    public readonly logLevel!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Node Tolerations for the DataLake Connector pods.
     */
    public readonly nodeTolerations!: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * The protocol to use for connecting with Brokers.
     */
    public readonly protocol!: pulumi.Output<string>;
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
     * The protocol to use for connecting with Brokers. NOTE - Enum only storage is supported at at time.
     */
    public readonly target!: pulumi.Output<types.outputs.DataLakeTargetStorageResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataLakeConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataLakeConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseFormat'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["dataLakeConnectorName"] = args ? args.dataLakeConnectorName : undefined;
            resourceInputs["databaseFormat"] = args ? args.databaseFormat : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["localBrokerConnection"] = args ? (args.localBrokerConnection ? pulumi.output(args.localBrokerConnection).apply(types.inputs.localBrokerConnectionSpecArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logLevel"] = args ? args.logLevel : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["nodeTolerations"] = args ? args.nodeTolerations : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["databaseFormat"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["image"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["localBrokerConnection"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeTolerations"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["target"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:DataLakeConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataLakeConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataLakeConnector resource.
 */
export interface DataLakeConnectorArgs {
    /**
     * Name of MQ dataLakeConnector resource
     */
    dataLakeConnectorName?: pulumi.Input<string>;
    /**
     * DataLake database format to use.
     */
    databaseFormat: pulumi.Input<string | types.enums.DataLakeDatabaseFormat>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The details of DataLakeConnector Docker Image.
     */
    image: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * The number of DataLakeConnector pods to spin up.
     */
    instances?: pulumi.Input<number>;
    /**
     * The details for connecting with Local Broker.
     */
    localBrokerConnection?: pulumi.Input<types.inputs.LocalBrokerConnectionSpecArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The log level of the DataLake Connector instances.
     */
    logLevel?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The Node Tolerations for the DataLake Connector pods.
     */
    nodeTolerations?: pulumi.Input<types.inputs.NodeTolerationsArgs>;
    /**
     * The protocol to use for connecting with Brokers.
     */
    protocol: pulumi.Input<string | types.enums.MqttProtocol>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The protocol to use for connecting with Brokers. NOTE - Enum only storage is supported at at time.
     */
    target: pulumi.Input<types.inputs.DataLakeTargetStorageArgs>;
}