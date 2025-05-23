import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains a list of references of UrlSigningKey type secret objects.
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-07-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class KeyGroup extends pulumi.CustomResource {
    /**
     * Get an existing KeyGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KeyGroup {
        return new KeyGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:KeyGroup';

    /**
     * Returns true if the given object is an instance of KeyGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Names of UrlSigningKey type secret objects
     */
    public readonly keyReferences!: pulumi.Output<types.outputs.ResourceReferenceResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KeyGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["keyGroupName"] = args ? args.keyGroupName : undefined;
            resourceInputs["keyReferences"] = args ? args.keyReferences : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["keyReferences"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20230701preview:KeyGroup" }, { type: "azure-native:cdn/v20240501preview:KeyGroup" }, { type: "azure-native:cdn/v20240601preview:KeyGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KeyGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KeyGroup resource.
 */
export interface KeyGroupArgs {
    /**
     * Name of the KeyGroup under the profile.
     */
    keyGroupName?: pulumi.Input<string>;
    /**
     * Names of UrlSigningKey type secret objects
     */
    keyReferences?: pulumi.Input<pulumi.Input<types.inputs.ResourceReferenceArgs>[]>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}