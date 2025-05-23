import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Discovered Asset definition.
 *
 * Uses Azure REST API version 2024-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-09-01-preview.
 */
export class DiscoveredAsset extends pulumi.CustomResource {
    /**
     * Get an existing DiscoveredAsset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiscoveredAsset {
        return new DiscoveredAsset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceregistry:DiscoveredAsset';

    /**
     * Returns true if the given object is an instance of DiscoveredAsset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiscoveredAsset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiscoveredAsset.__pulumiType;
    }

    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name.
     */
    public readonly assetEndpointProfileRef!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
     */
    public readonly datasets!: pulumi.Output<types.outputs.DiscoveredDatasetResponse[] | undefined>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
     */
    public readonly defaultDatasetsConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    public readonly defaultEventsConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Object that describes the default topic information for the asset.
     */
    public readonly defaultTopic!: pulumi.Output<types.outputs.TopicResponse | undefined>;
    /**
     * Identifier used to detect changes in the asset.
     */
    public readonly discoveryId!: pulumi.Output<string>;
    /**
     * Reference to the documentation.
     */
    public readonly documentationUri!: pulumi.Output<string | undefined>;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    public readonly events!: pulumi.Output<types.outputs.DiscoveredEventResponse[] | undefined>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Revision number of the hardware.
     */
    public readonly hardwareRevision!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Asset manufacturer name.
     */
    public readonly manufacturer!: pulumi.Output<string | undefined>;
    /**
     * Asset manufacturer URI.
     */
    public readonly manufacturerUri!: pulumi.Output<string | undefined>;
    /**
     * Asset model name.
     */
    public readonly model!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Asset product code.
     */
    public readonly productCode!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Asset serial number.
     */
    public readonly serialNumber!: pulumi.Output<string | undefined>;
    /**
     * Revision number of the software.
     */
    public readonly softwareRevision!: pulumi.Output<string | undefined>;
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
     * An integer that is incremented each time the resource is modified.
     */
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a DiscoveredAsset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiscoveredAssetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.assetEndpointProfileRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetEndpointProfileRef'");
            }
            if ((!args || args.discoveryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'discoveryId'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["assetEndpointProfileRef"] = args ? args.assetEndpointProfileRef : undefined;
            resourceInputs["datasets"] = args ? args.datasets : undefined;
            resourceInputs["defaultDatasetsConfiguration"] = args ? args.defaultDatasetsConfiguration : undefined;
            resourceInputs["defaultEventsConfiguration"] = args ? args.defaultEventsConfiguration : undefined;
            resourceInputs["defaultTopic"] = args ? (args.defaultTopic ? pulumi.output(args.defaultTopic).apply(types.inputs.topicArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["discoveredAssetName"] = args ? args.discoveredAssetName : undefined;
            resourceInputs["discoveryId"] = args ? args.discoveryId : undefined;
            resourceInputs["documentationUri"] = args ? args.documentationUri : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hardwareRevision"] = args ? args.hardwareRevision : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["manufacturer"] = args ? args.manufacturer : undefined;
            resourceInputs["manufacturerUri"] = args ? args.manufacturerUri : undefined;
            resourceInputs["model"] = args ? args.model : undefined;
            resourceInputs["productCode"] = args ? args.productCode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["softwareRevision"] = args ? args.softwareRevision : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assetEndpointProfileRef"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["datasets"] = undefined /*out*/;
            resourceInputs["defaultDatasetsConfiguration"] = undefined /*out*/;
            resourceInputs["defaultEventsConfiguration"] = undefined /*out*/;
            resourceInputs["defaultTopic"] = undefined /*out*/;
            resourceInputs["discoveryId"] = undefined /*out*/;
            resourceInputs["documentationUri"] = undefined /*out*/;
            resourceInputs["events"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hardwareRevision"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["manufacturer"] = undefined /*out*/;
            resourceInputs["manufacturerUri"] = undefined /*out*/;
            resourceInputs["model"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["productCode"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["softwareRevision"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry/v20240901preview:DiscoveredAsset" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiscoveredAsset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiscoveredAsset resource.
 */
export interface DiscoveredAssetArgs {
    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must provide asset endpoint profile name.
     */
    assetEndpointProfileRef: pulumi.Input<string>;
    /**
     * Array of datasets that are part of the asset. Each dataset spec describes the data points that make up the set.
     */
    datasets?: pulumi.Input<pulumi.Input<types.inputs.DiscoveredDatasetArgs>[]>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all datasets. Each dataset can have its own configuration that overrides the default settings here.
     */
    defaultDatasetsConfiguration?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    defaultEventsConfiguration?: pulumi.Input<string>;
    /**
     * Object that describes the default topic information for the asset.
     */
    defaultTopic?: pulumi.Input<types.inputs.TopicArgs>;
    /**
     * Discovered Asset name parameter.
     */
    discoveredAssetName?: pulumi.Input<string>;
    /**
     * Identifier used to detect changes in the asset.
     */
    discoveryId: pulumi.Input<string>;
    /**
     * Reference to the documentation.
     */
    documentationUri?: pulumi.Input<string>;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    events?: pulumi.Input<pulumi.Input<types.inputs.DiscoveredEventArgs>[]>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Revision number of the hardware.
     */
    hardwareRevision?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Asset manufacturer name.
     */
    manufacturer?: pulumi.Input<string>;
    /**
     * Asset manufacturer URI.
     */
    manufacturerUri?: pulumi.Input<string>;
    /**
     * Asset model name.
     */
    model?: pulumi.Input<string>;
    /**
     * Asset product code.
     */
    productCode?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Asset serial number.
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Revision number of the software.
     */
    softwareRevision?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    version: pulumi.Input<number>;
}