import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Data Lake Analytics compute policy information.
 *
 * Uses Azure REST API version 2019-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-11-01-preview.
 */
export class ComputePolicy extends pulumi.CustomResource {
    /**
     * Get an existing ComputePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComputePolicy {
        return new ComputePolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datalakeanalytics:ComputePolicy';

    /**
     * Returns true if the given object is an instance of ComputePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputePolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs.
     */
    public readonly maxDegreeOfParallelismPerJob!: pulumi.Output<number>;
    /**
     * The minimum priority per job this user can use to submit jobs.
     */
    public readonly minPriorityPerJob!: pulumi.Output<number>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    public readonly objectId!: pulumi.Output<string>;
    /**
     * The type of AAD object the object identifier refers to.
     */
    public readonly objectType!: pulumi.Output<string>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ComputePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputePolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.objectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectId'");
            }
            if ((!args || args.objectType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["computePolicyName"] = args ? args.computePolicyName : undefined;
            resourceInputs["maxDegreeOfParallelismPerJob"] = args ? args.maxDegreeOfParallelismPerJob : undefined;
            resourceInputs["minPriorityPerJob"] = args ? args.minPriorityPerJob : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["maxDegreeOfParallelismPerJob"] = undefined /*out*/;
            resourceInputs["minPriorityPerJob"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["objectType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datalakeanalytics/v20151001preview:ComputePolicy" }, { type: "azure-native:datalakeanalytics/v20161101:ComputePolicy" }, { type: "azure-native:datalakeanalytics/v20191101preview:ComputePolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ComputePolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ComputePolicy resource.
 */
export interface ComputePolicyArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the compute policy to create or update.
     */
    computePolicyName?: pulumi.Input<string>;
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
     */
    maxDegreeOfParallelismPerJob?: pulumi.Input<number>;
    /**
     * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
     */
    minPriorityPerJob?: pulumi.Input<number>;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    objectId: pulumi.Input<string>;
    /**
     * The type of AAD object the object identifier refers to.
     */
    objectType: pulumi.Input<string | types.enums.AADObjectType>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}