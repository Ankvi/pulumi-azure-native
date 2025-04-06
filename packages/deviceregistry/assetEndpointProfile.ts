import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Asset Endpoint Profile definition.
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2023-11-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:deviceregistry:AssetEndpointProfile';

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
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    public readonly additionalConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Defines the client authentication mechanism to the server.
     */
    public readonly authentication!: pulumi.Output<types.outputs.AuthenticationResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided.
     */
    public readonly discoveredAssetEndpointProfileRef!: pulumi.Output<string | undefined>;
    /**
     * Defines the configuration for the connector type that is being used with the endpoint profile.
     */
    public readonly endpointProfileType!: pulumi.Output<string>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only object to reflect changes that have occurred on the Edge. Similar to Kubernetes status property for custom resources.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.AssetEndpointProfileStatusResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
     */
    public readonly targetAddress!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Globally unique, immutable, non-reusable id.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

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
            if ((!args || args.endpointProfileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointProfileType'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetAddress'");
            }
            resourceInputs["additionalConfiguration"] = args ? args.additionalConfiguration : undefined;
            resourceInputs["assetEndpointProfileName"] = args ? args.assetEndpointProfileName : undefined;
            resourceInputs["authentication"] = args ? (args.authentication ? pulumi.output(args.authentication).apply(types.inputs.authenticationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["discoveredAssetEndpointProfileRef"] = args ? args.discoveredAssetEndpointProfileRef : undefined;
            resourceInputs["endpointProfileType"] = args ? args.endpointProfileType : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetAddress"] = args ? args.targetAddress : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["additionalConfiguration"] = undefined /*out*/;
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["discoveredAssetEndpointProfileRef"] = undefined /*out*/;
            resourceInputs["endpointProfileType"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetAddress"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry/v20231101preview:AssetEndpointProfile" }, { type: "azure-native:deviceregistry/v20240901preview:AssetEndpointProfile" }, { type: "azure-native:deviceregistry/v20241101:AssetEndpointProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AssetEndpointProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AssetEndpointProfile resource.
 */
export interface AssetEndpointProfileArgs {
    /**
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    additionalConfiguration?: pulumi.Input<string>;
    /**
     * Asset Endpoint Profile name parameter.
     */
    assetEndpointProfileName?: pulumi.Input<string>;
    /**
     * Defines the client authentication mechanism to the server.
     */
    authentication?: pulumi.Input<types.inputs.AuthenticationArgs>;
    /**
     * Reference to a discovered asset endpoint profile. Populated only if the asset endpoint profile has been created from discovery flow. Discovered asset endpoint profile name must be provided.
     */
    discoveredAssetEndpointProfileRef?: pulumi.Input<string>;
    /**
     * Defines the configuration for the connector type that is being used with the endpoint profile.
     */
    endpointProfileType: pulumi.Input<string>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
     */
    targetAddress: pulumi.Input<string>;
}