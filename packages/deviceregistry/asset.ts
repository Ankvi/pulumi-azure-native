import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Asset definition.
 * Azure REST API version: 2023-11-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01.
 */
export class Asset extends pulumi.CustomResource {
    /**
     * Get an existing Asset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Asset {
        return new Asset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceregistry:Asset';

    /**
     * Returns true if the given object is an instance of Asset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Asset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Asset.__pulumiType;
    }

    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
     */
    public readonly assetEndpointProfileUri!: pulumi.Output<string>;
    /**
     * Resource path to asset type (model) definition.
     */
    public readonly assetType!: pulumi.Output<string | undefined>;
    /**
     * A set of key-value pairs that contain custom attributes set by the customer.
     */
    public readonly attributes!: pulumi.Output<any | undefined>;
    /**
     * Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration.
     */
    public readonly dataPoints!: pulumi.Output<types.outputs.DataPointResponse[] | undefined>;
    /**
     * Stringified JSON that contains protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here.
     */
    public readonly defaultDataPointsConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    public readonly defaultEventsConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Human-readable description of the asset.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Human-readable display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Reference to the documentation.
     */
    public readonly documentationUri!: pulumi.Output<string | undefined>;
    /**
     * Enabled/Disabled status of the asset.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    public readonly events!: pulumi.Output<types.outputs.EventResponse[] | undefined>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Asset id provided by the customer.
     */
    public readonly externalAssetId!: pulumi.Output<string | undefined>;
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
     * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.AssetStatusResponse>;
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
     * Globally unique, immutable, non-reusable id.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a Asset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.assetEndpointProfileUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetEndpointProfileUri'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["assetEndpointProfileUri"] = args ? args.assetEndpointProfileUri : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["assetType"] = args ? args.assetType : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["dataPoints"] = args ? args.dataPoints : undefined;
            resourceInputs["defaultDataPointsConfiguration"] = args ? args.defaultDataPointsConfiguration : undefined;
            resourceInputs["defaultEventsConfiguration"] = args ? args.defaultEventsConfiguration : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["documentationUri"] = args ? args.documentationUri : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["externalAssetId"] = args ? args.externalAssetId : undefined;
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
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["assetEndpointProfileUri"] = undefined /*out*/;
            resourceInputs["assetType"] = undefined /*out*/;
            resourceInputs["attributes"] = undefined /*out*/;
            resourceInputs["dataPoints"] = undefined /*out*/;
            resourceInputs["defaultDataPointsConfiguration"] = undefined /*out*/;
            resourceInputs["defaultEventsConfiguration"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["documentationUri"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["events"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["externalAssetId"] = undefined /*out*/;
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
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry/v20231101preview:Asset" }, { type: "azure-native:deviceregistry/v20240901preview:Asset" }, { type: "azure-native:deviceregistry/v20241101:Asset" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Asset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Asset resource.
 */
export interface AssetArgs {
    /**
     * A reference to the asset endpoint profile (connection information) used by brokers to connect to an endpoint that provides data points for this asset. Must have the format <ModuleCR.metadata.namespace>/<ModuleCR.metadata.name>.
     */
    assetEndpointProfileUri: pulumi.Input<string>;
    /**
     * Asset name parameter.
     */
    assetName?: pulumi.Input<string>;
    /**
     * Resource path to asset type (model) definition.
     */
    assetType?: pulumi.Input<string>;
    /**
     * A set of key-value pairs that contain custom attributes set by the customer.
     */
    attributes?: any;
    /**
     * Array of data points that are part of the asset. Each data point can reference an asset type capability and have per-data point configuration.
     */
    dataPoints?: pulumi.Input<pulumi.Input<types.inputs.DataPointArgs>[]>;
    /**
     * Stringified JSON that contains protocol-specific default configuration for all data points. Each data point can have its own configuration that overrides the default settings here.
     */
    defaultDataPointsConfiguration?: pulumi.Input<string>;
    /**
     * Stringified JSON that contains connector-specific default configuration for all events. Each event can have its own configuration that overrides the default settings here.
     */
    defaultEventsConfiguration?: pulumi.Input<string>;
    /**
     * Human-readable description of the asset.
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Reference to the documentation.
     */
    documentationUri?: pulumi.Input<string>;
    /**
     * Enabled/Disabled status of the asset.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Array of events that are part of the asset. Each event can have per-event configuration.
     */
    events?: pulumi.Input<pulumi.Input<types.inputs.EventArgs>[]>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Asset id provided by the customer.
     */
    externalAssetId?: pulumi.Input<string>;
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
}