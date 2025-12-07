import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes the NGroups resource.
 *
 * Uses Azure REST API version 2025-09-01. In version 2.x of the Azure Native provider, it used API version 2024-09-01-preview.
 *
 * Other available API versions: 2024-09-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerinstance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NGroup extends pulumi.CustomResource {
    /**
     * Get an existing NGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NGroup {
        return new NGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerinstance:NGroup';

    /**
     * Returns true if the given object is an instance of NGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The Container Group Profiles that could be used in the NGroups resource.
     */
    declare public readonly containerGroupProfiles: pulumi.Output<types.outputs.ContainerGroupProfileStubResponse[] | undefined>;
    /**
     * The elastic profile.
     */
    declare public readonly elasticProfile: pulumi.Output<types.outputs.ElasticProfileResponse | undefined>;
    /**
     * The identity of the NGroup, if configured.
     */
    declare public readonly identity: pulumi.Output<types.outputs.NGroupIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    declare public readonly location: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * Provides options w.r.t allocation and management w.r.t certain placement policies. These utilize capabilities provided by the underlying Azure infrastructure. They are typically used for high availability scenarios. E.g., distributing CGs across fault domains.
     */
    declare public readonly placementProfile: pulumi.Output<types.outputs.PlacementProfileResponse | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;
    /**
     * Used by the customer to specify the way to update the Container Groups in NGroup.
     */
    declare public readonly updateProfile: pulumi.Output<types.outputs.UpdateProfileResponse | undefined>;
    /**
     * The zones for the container group.
     */
    declare public readonly zones: pulumi.Output<string[] | undefined>;

    /**
     * Create a NGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["containerGroupProfiles"] = args?.containerGroupProfiles;
            resourceInputs["elasticProfile"] = args?.elasticProfile;
            resourceInputs["identity"] = args?.identity;
            resourceInputs["location"] = args?.location;
            resourceInputs["ngroupsName"] = args?.ngroupsName;
            resourceInputs["placementProfile"] = args?.placementProfile;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["tags"] = args?.tags;
            resourceInputs["updateProfile"] = args?.updateProfile;
            resourceInputs["zones"] = args?.zones;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerGroupProfiles"] = undefined /*out*/;
            resourceInputs["elasticProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["placementProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateProfile"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerinstance/v20240901preview:NGroup" }, { type: "azure-native:containerinstance/v20241101preview:NGroup" }, { type: "azure-native:containerinstance/v20250901:NGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NGroup resource.
 */
export interface NGroupArgs {
    /**
     * The Container Group Profiles that could be used in the NGroups resource.
     */
    containerGroupProfiles?: pulumi.Input<pulumi.Input<types.inputs.ContainerGroupProfileStubArgs>[]>;
    /**
     * The elastic profile.
     */
    elasticProfile?: pulumi.Input<types.inputs.ElasticProfileArgs>;
    /**
     * The identity of the NGroup, if configured.
     */
    identity?: pulumi.Input<types.inputs.NGroupIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The NGroups name.
     */
    ngroupsName?: pulumi.Input<string>;
    /**
     * Provides options w.r.t allocation and management w.r.t certain placement policies. These utilize capabilities provided by the underlying Azure infrastructure. They are typically used for high availability scenarios. E.g., distributing CGs across fault domains.
     */
    placementProfile?: pulumi.Input<types.inputs.PlacementProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Used by the customer to specify the way to update the Container Groups in NGroup.
     */
    updateProfile?: pulumi.Input<types.inputs.UpdateProfileArgs>;
    /**
     * The zones for the container group.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}