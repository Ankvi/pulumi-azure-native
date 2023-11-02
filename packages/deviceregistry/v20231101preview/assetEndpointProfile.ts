import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Asset Endpoint Profile definition.
 */
export class AssetEndpointProfile extends pulumi.CustomResource {
    /**
     * Get an existing AssetEndpointProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssetEndpointProfile {
        return new AssetEndpointProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceregistry/v20231101preview:AssetEndpointProfile';

    /**
     * Returns true if the given object is an instance of AssetEndpointProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssetEndpointProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssetEndpointProfile.__pulumiType;
    }

    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.AssetEndpointProfileResponseExtendedLocation>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Asset Endpoint Profile resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.AssetEndpointProfilePropertiesResponse>;
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
     * Create a AssetEndpointProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetEndpointProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["assetEndpointProfileName"] = args ? args.assetEndpointProfileName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.assetEndpointProfilePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry:AssetEndpointProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssetEndpointProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssetEndpointProfile resource.
 */
export interface AssetEndpointProfileArgs {
    /**
     * Asset Endpoint Profile name parameter.
     */
    assetEndpointProfileName?: pulumi.Input<string>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.AssetEndpointProfileExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Asset Endpoint Profile resource properties.
     */
    properties?: pulumi.Input<types.inputs.AssetEndpointProfilePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
