import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Differentiated Services Code Point configuration for any given network interface
 */
export class DscpConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DscpConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DscpConfiguration {
        return new DscpConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230601:DscpConfiguration';

    /**
     * Returns true if the given object is an instance of DscpConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DscpConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DscpConfiguration.__pulumiType;
    }

    /**
     * Associated Network Interfaces to the DSCP Configuration.
     */
    public /*out*/ readonly associatedNetworkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * Destination IP ranges.
     */
    public readonly destinationIpRanges!: pulumi.Output<types.outputs.QosIpRangeResponse[] | undefined>;
    /**
     * Destination port ranges.
     */
    public readonly destinationPortRanges!: pulumi.Output<types.outputs.QosPortRangeResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * List of markings to be used in the configuration.
     */
    public readonly markings!: pulumi.Output<number[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * RNM supported protocol types.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the DSCP Configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Qos Collection ID generated by RNM.
     */
    public /*out*/ readonly qosCollectionId!: pulumi.Output<string>;
    /**
     * QoS object definitions
     */
    public readonly qosDefinitionCollection!: pulumi.Output<types.outputs.QosDefinitionResponse[] | undefined>;
    /**
     * The resource GUID property of the DSCP Configuration resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Source IP ranges.
     */
    public readonly sourceIpRanges!: pulumi.Output<types.outputs.QosIpRangeResponse[] | undefined>;
    /**
     * Sources port ranges.
     */
    public readonly sourcePortRanges!: pulumi.Output<types.outputs.QosPortRangeResponse[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DscpConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscpConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["destinationIpRanges"] = args ? args.destinationIpRanges : undefined;
            resourceInputs["destinationPortRanges"] = args ? args.destinationPortRanges : undefined;
            resourceInputs["dscpConfigurationName"] = args ? args.dscpConfigurationName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["markings"] = args ? args.markings : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["qosDefinitionCollection"] = args ? args.qosDefinitionCollection : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceIpRanges"] = args ? args.sourceIpRanges : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["associatedNetworkInterfaces"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["qosCollectionId"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedNetworkInterfaces"] = undefined /*out*/;
            resourceInputs["destinationIpRanges"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["markings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["qosCollectionId"] = undefined /*out*/;
            resourceInputs["qosDefinitionCollection"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sourceIpRanges"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:DscpConfiguration" }, { type: "azure-native:network/v20200601:DscpConfiguration" }, { type: "azure-native:network/v20200701:DscpConfiguration" }, { type: "azure-native:network/v20200801:DscpConfiguration" }, { type: "azure-native:network/v20201101:DscpConfiguration" }, { type: "azure-native:network/v20210201:DscpConfiguration" }, { type: "azure-native:network/v20210301:DscpConfiguration" }, { type: "azure-native:network/v20210501:DscpConfiguration" }, { type: "azure-native:network/v20210801:DscpConfiguration" }, { type: "azure-native:network/v20220101:DscpConfiguration" }, { type: "azure-native:network/v20220501:DscpConfiguration" }, { type: "azure-native:network/v20220701:DscpConfiguration" }, { type: "azure-native:network/v20220901:DscpConfiguration" }, { type: "azure-native:network/v20221101:DscpConfiguration" }, { type: "azure-native:network/v20230201:DscpConfiguration" }, { type: "azure-native:network/v20230401:DscpConfiguration" }, { type: "azure-native:network/v20230501:DscpConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DscpConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DscpConfiguration resource.
 */
export interface DscpConfigurationArgs {
    /**
     * Destination IP ranges.
     */
    destinationIpRanges?: pulumi.Input<pulumi.Input<types.inputs.QosIpRangeArgs>[]>;
    /**
     * Destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<types.inputs.QosPortRangeArgs>[]>;
    /**
     * The name of the resource.
     */
    dscpConfigurationName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * List of markings to be used in the configuration.
     */
    markings?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * RNM supported protocol types.
     */
    protocol?: pulumi.Input<string | types.enums.ProtocolType>;
    /**
     * QoS object definitions
     */
    qosDefinitionCollection?: pulumi.Input<pulumi.Input<types.inputs.QosDefinitionArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source IP ranges.
     */
    sourceIpRanges?: pulumi.Input<pulumi.Input<types.inputs.QosIpRangeArgs>[]>;
    /**
     * Sources port ranges.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<types.inputs.QosPortRangeArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}