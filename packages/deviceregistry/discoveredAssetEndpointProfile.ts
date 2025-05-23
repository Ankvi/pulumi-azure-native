import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Discovered Asset Endpoint Profile definition.
 *
 * Uses Azure REST API version 2024-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-09-01-preview.
 */
export class DiscoveredAssetEndpointProfile extends pulumi.CustomResource {
    /**
     * Get an existing DiscoveredAssetEndpointProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiscoveredAssetEndpointProfile {
        return new DiscoveredAssetEndpointProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deviceregistry:DiscoveredAssetEndpointProfile';

    /**
     * Returns true if the given object is an instance of DiscoveredAssetEndpointProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiscoveredAssetEndpointProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiscoveredAssetEndpointProfile.__pulumiType;
    }

    /**
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    public readonly additionalConfiguration!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Identifier used to detect changes in the asset endpoint profile.
     */
    public readonly discoveryId!: pulumi.Output<string>;
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
     * List of supported authentication methods supported by the target server.
     */
    public readonly supportedAuthenticationMethods!: pulumi.Output<string[] | undefined>;
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
     * An integer that is incremented each time the resource is modified.
     */
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a DiscoveredAssetEndpointProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiscoveredAssetEndpointProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.discoveryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'discoveryId'");
            }
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
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["additionalConfiguration"] = args ? args.additionalConfiguration : undefined;
            resourceInputs["discoveredAssetEndpointProfileName"] = args ? args.discoveredAssetEndpointProfileName : undefined;
            resourceInputs["discoveryId"] = args ? args.discoveryId : undefined;
            resourceInputs["endpointProfileType"] = args ? args.endpointProfileType : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["supportedAuthenticationMethods"] = args ? args.supportedAuthenticationMethods : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetAddress"] = args ? args.targetAddress : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["discoveryId"] = undefined /*out*/;
            resourceInputs["endpointProfileType"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["supportedAuthenticationMethods"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetAddress"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deviceregistry/v20240901preview:DiscoveredAssetEndpointProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiscoveredAssetEndpointProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiscoveredAssetEndpointProfile resource.
 */
export interface DiscoveredAssetEndpointProfileArgs {
    /**
     * Stringified JSON that contains connectivity type specific further configuration (e.g. OPC UA, Modbus, ONVIF).
     */
    additionalConfiguration?: pulumi.Input<string>;
    /**
     * Discovered Asset Endpoint Profile name parameter.
     */
    discoveredAssetEndpointProfileName?: pulumi.Input<string>;
    /**
     * Identifier used to detect changes in the asset endpoint profile.
     */
    discoveryId: pulumi.Input<string>;
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
     * List of supported authentication methods supported by the target server.
     */
    supportedAuthenticationMethods?: pulumi.Input<pulumi.Input<string | types.enums.AuthenticationMethod>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The local valid URI specifying the network address/DNS name of a southbound device. The scheme part of the targetAddress URI specifies the type of the device. The additionalConfiguration field holds further connector type specific configuration.
     */
    targetAddress: pulumi.Input<string>;
    /**
     * An integer that is incremented each time the resource is modified.
     */
    version: pulumi.Input<number>;
}