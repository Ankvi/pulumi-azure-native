import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the PUT rollout request body.
 * Azure REST API version: 2019-11-01-preview. Prior API version in Azure Native 1.x: 2019-11-01-preview
 */
export class Rollout extends pulumi.CustomResource {
    /**
     * Get an existing Rollout resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Rollout {
        return new Rollout(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:deploymentmanager:Rollout';

    /**
     * Returns true if the given object is an instance of Rollout.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Rollout {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Rollout.__pulumiType;
    }

    /**
     * The reference to the artifact source resource Id where the payload is located.
     */
    public readonly artifactSourceId!: pulumi.Output<string | undefined>;
    /**
     * The version of the build being deployed.
     */
    public readonly buildVersion!: pulumi.Output<string>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.deploymentmanager.IdentityResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of step groups that define the orchestration.
     */
    public readonly stepGroups!: pulumi.Output<types.outputs.deploymentmanager.StepGroupResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
     */
    public readonly targetServiceTopologyId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Rollout resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RolloutArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.buildVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'buildVersion'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.stepGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stepGroups'");
            }
            if ((!args || args.targetServiceTopologyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetServiceTopologyId'");
            }
            resourceInputs["artifactSourceId"] = args ? args.artifactSourceId : undefined;
            resourceInputs["buildVersion"] = args ? args.buildVersion : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rolloutName"] = args ? args.rolloutName : undefined;
            resourceInputs["stepGroups"] = args ? args.stepGroups : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetServiceTopologyId"] = args ? args.targetServiceTopologyId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["artifactSourceId"] = undefined /*out*/;
            resourceInputs["buildVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["stepGroups"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetServiceTopologyId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:deploymentmanager/v20180901preview:Rollout" }, { type: "azure-native:deploymentmanager/v20191101preview:Rollout" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Rollout.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Rollout resource.
 */
export interface RolloutArgs {
    /**
     * The reference to the artifact source resource Id where the payload is located.
     */
    artifactSourceId?: pulumi.Input<string>;
    /**
     * The version of the build being deployed.
     */
    buildVersion: pulumi.Input<string>;
    /**
     * Identity for the resource.
     */
    identity: pulumi.Input<types.inputs.deploymentmanager.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rollout name.
     */
    rolloutName?: pulumi.Input<string>;
    /**
     * The list of step groups that define the orchestration.
     */
    stepGroups: pulumi.Input<pulumi.Input<types.inputs.deploymentmanager.StepGroupArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
     */
    targetServiceTopologyId: pulumi.Input<string>;
}
