import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A profile is a logical grouping of endpoints that share the same settings.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2016-04-02, 2020-09-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Profile {
        return new Profile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:Profile';

    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Profile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Profile.__pulumiType;
    }

    /**
     * Key-Value pair representing additional properties for profiles.
     */
    public /*out*/ readonly extendedProperties!: pulumi.Output<{[key: string]: string}>;
    /**
     * The Id of the frontdoor.
     */
    public /*out*/ readonly frontDoorId!: pulumi.Output<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities).
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Kind of the profile. Used by portal to differentiate traditional CDN profile and new AFD profile.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
     */
    public readonly originResponseTimeoutSeconds!: pulumi.Output<number | undefined>;
    /**
     * Provisioning status of the profile.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the profile.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["originResponseTimeoutSeconds"] = args ? args.originResponseTimeoutSeconds : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["frontDoorId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["frontDoorId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["originResponseTimeoutSeconds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20150601:Profile" }, { type: "azure-native:cdn/v20160402:Profile" }, { type: "azure-native:cdn/v20161002:Profile" }, { type: "azure-native:cdn/v20170402:Profile" }, { type: "azure-native:cdn/v20171012:Profile" }, { type: "azure-native:cdn/v20190415:Profile" }, { type: "azure-native:cdn/v20190615:Profile" }, { type: "azure-native:cdn/v20190615preview:Profile" }, { type: "azure-native:cdn/v20191231:Profile" }, { type: "azure-native:cdn/v20200331:Profile" }, { type: "azure-native:cdn/v20200415:Profile" }, { type: "azure-native:cdn/v20200901:Profile" }, { type: "azure-native:cdn/v20210601:Profile" }, { type: "azure-native:cdn/v20220501preview:Profile" }, { type: "azure-native:cdn/v20221101preview:Profile" }, { type: "azure-native:cdn/v20230501:Profile" }, { type: "azure-native:cdn/v20230701preview:Profile" }, { type: "azure-native:cdn/v20240201:Profile" }, { type: "azure-native:cdn/v20240501preview:Profile" }, { type: "azure-native:cdn/v20240601preview:Profile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Profile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * Managed service identity (system assigned and/or user assigned identities).
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
     */
    originResponseTimeoutSeconds?: pulumi.Input<number>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}