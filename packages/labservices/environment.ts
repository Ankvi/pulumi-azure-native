import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an environment instance
 *
 * Uses Azure REST API version 2018-10-15. In version 1.x of the Azure Native provider, it used API version 2018-10-15.
 */
export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * The name or email address of the user who has claimed the environment
     */
    public /*out*/ readonly claimedByUserName!: pulumi.Output<string>;
    /**
     * The AAD object Id of the user who has claimed the environment
     */
    public /*out*/ readonly claimedByUserObjectId!: pulumi.Output<string>;
    /**
     * The user principal Id of the user who has claimed the environment
     */
    public /*out*/ readonly claimedByUserPrincipalId!: pulumi.Output<string>;
    /**
     * Is the environment claimed or not
     */
    public /*out*/ readonly isClaimed!: pulumi.Output<boolean>;
    /**
     * Last known power state of the environment
     */
    public /*out*/ readonly lastKnownPowerState!: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<types.outputs.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network details of the environment
     */
    public /*out*/ readonly networkInterface!: pulumi.Output<types.outputs.NetworkInterfaceResponse>;
    /**
     * When the password was last reset on the environment.
     */
    public /*out*/ readonly passwordLastReset!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The set of a VM and the setting id it was created for
     */
    public readonly resourceSets!: pulumi.Output<types.outputs.ResourceSetResponse | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * How long the environment has been used by a lab user
     */
    public /*out*/ readonly totalUsage!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentSettingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentSettingName'");
            }
            if ((!args || args.labAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labAccountName'");
            }
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["environmentSettingName"] = args ? args.environmentSettingName : undefined;
            resourceInputs["labAccountName"] = args ? args.labAccountName : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceSets"] = args ? args.resourceSets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            resourceInputs["claimedByUserName"] = undefined /*out*/;
            resourceInputs["claimedByUserObjectId"] = undefined /*out*/;
            resourceInputs["claimedByUserPrincipalId"] = undefined /*out*/;
            resourceInputs["isClaimed"] = undefined /*out*/;
            resourceInputs["lastKnownPowerState"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterface"] = undefined /*out*/;
            resourceInputs["passwordLastReset"] = undefined /*out*/;
            resourceInputs["totalUsage"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["claimedByUserName"] = undefined /*out*/;
            resourceInputs["claimedByUserObjectId"] = undefined /*out*/;
            resourceInputs["claimedByUserPrincipalId"] = undefined /*out*/;
            resourceInputs["isClaimed"] = undefined /*out*/;
            resourceInputs["lastKnownPowerState"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterface"] = undefined /*out*/;
            resourceInputs["passwordLastReset"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceSets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalUsage"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20181015:Environment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Environment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * The name of the environment.
     */
    environmentName?: pulumi.Input<string>;
    /**
     * The name of the environment Setting.
     */
    environmentSettingName: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The set of a VM and the setting id it was created for
     */
    resourceSets?: pulumi.Input<types.inputs.ResourceSetArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier?: pulumi.Input<string>;
}