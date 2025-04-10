import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a nGroup.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2024-11-01-preview.
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
     * The Container Group Profiles that could be used in a nGroup.
     */
    public readonly containerGroupProfiles!: pulumi.Output<types.outputs.ContainerGroupProfileStubResponse[] | undefined>;
    /**
     * The elastic profile.
     */
    public readonly elasticProfile!: pulumi.Output<types.outputs.ElasticProfileResponse | undefined>;
    /**
     * The identity of the nGroup, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.NGroupIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The zones for the container group.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["containerGroupProfiles"] = args ? args.containerGroupProfiles : undefined;
            resourceInputs["elasticProfile"] = args ? args.elasticProfile : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["ngroupsName"] = args ? args.ngroupsName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["containerGroupProfiles"] = undefined /*out*/;
            resourceInputs["elasticProfile"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerinstance/v20240901preview:NGroup" }, { type: "azure-native:containerinstance/v20241101preview:NGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NGroup resource.
 */
export interface NGroupArgs {
    /**
     * The Container Group Profiles that could be used in a nGroup.
     */
    containerGroupProfiles?: pulumi.Input<pulumi.Input<types.inputs.ContainerGroupProfileStubArgs>[]>;
    /**
     * The elastic profile.
     */
    elasticProfile?: pulumi.Input<types.inputs.ElasticProfileArgs>;
    /**
     * The identity of the nGroup, if configured.
     */
    identity?: pulumi.Input<types.inputs.NGroupIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The N Groups name.
     */
    ngroupsName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The zones for the container group.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}