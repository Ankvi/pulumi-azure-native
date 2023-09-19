import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Job Definition resource.
 */
export class JobDefinition extends pulumi.CustomResource {
    /**
     * Get an existing JobDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobDefinition {
        return new JobDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagemover/v20230701preview:JobDefinition';

    /**
     * Returns true if the given object is an instance of JobDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobDefinition.__pulumiType;
    }

    /**
     * Name of the Agent to assign for new Job Runs of this Job Definition.
     */
    public readonly agentName!: pulumi.Output<string | undefined>;
    /**
     * Fully qualified resource id of the Agent to assign for new Job Runs of this Job Definition.
     */
    public /*out*/ readonly agentResourceId!: pulumi.Output<string>;
    /**
     * Strategy to use for copy.
     */
    public readonly copyMode!: pulumi.Output<string>;
    /**
     * A description for the Job Definition.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the Job Run in a non-terminal state, if exists.
     */
    public /*out*/ readonly latestJobRunName!: pulumi.Output<string>;
    /**
     * The fully qualified resource ID of the Job Run in a non-terminal state, if exists.
     */
    public /*out*/ readonly latestJobRunResourceId!: pulumi.Output<string>;
    /**
     * The current status of the Job Run in a non-terminal state, if exists.
     */
    public /*out*/ readonly latestJobRunStatus!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of this resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the source Endpoint.
     */
    public readonly sourceName!: pulumi.Output<string>;
    /**
     * Fully qualified resource ID of the source Endpoint.
     */
    public /*out*/ readonly sourceResourceId!: pulumi.Output<string>;
    /**
     * The subpath to use when reading from the source Endpoint.
     */
    public readonly sourceSubpath!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The name of the target Endpoint.
     */
    public readonly targetName!: pulumi.Output<string>;
    /**
     * Fully qualified resource ID of the target Endpoint.
     */
    public /*out*/ readonly targetResourceId!: pulumi.Output<string>;
    /**
     * The subpath to use when writing to the target Endpoint.
     */
    public readonly targetSubpath!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.copyMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'copyMode'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceName'");
            }
            if ((!args || args.storageMoverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageMoverName'");
            }
            if ((!args || args.targetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetName'");
            }
            resourceInputs["agentName"] = args ? args.agentName : undefined;
            resourceInputs["copyMode"] = args ? args.copyMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["jobDefinitionName"] = args ? args.jobDefinitionName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceName"] = args ? args.sourceName : undefined;
            resourceInputs["sourceSubpath"] = args ? args.sourceSubpath : undefined;
            resourceInputs["storageMoverName"] = args ? args.storageMoverName : undefined;
            resourceInputs["targetName"] = args ? args.targetName : undefined;
            resourceInputs["targetSubpath"] = args ? args.targetSubpath : undefined;
            resourceInputs["agentResourceId"] = undefined /*out*/;
            resourceInputs["latestJobRunName"] = undefined /*out*/;
            resourceInputs["latestJobRunResourceId"] = undefined /*out*/;
            resourceInputs["latestJobRunStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentName"] = undefined /*out*/;
            resourceInputs["agentResourceId"] = undefined /*out*/;
            resourceInputs["copyMode"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["latestJobRunName"] = undefined /*out*/;
            resourceInputs["latestJobRunResourceId"] = undefined /*out*/;
            resourceInputs["latestJobRunStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceName"] = undefined /*out*/;
            resourceInputs["sourceResourceId"] = undefined /*out*/;
            resourceInputs["sourceSubpath"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetName"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["targetSubpath"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagemover:JobDefinition" }, { type: "azure-native:storagemover/v20220701preview:JobDefinition" }, { type: "azure-native:storagemover/v20230301:JobDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobDefinition resource.
 */
export interface JobDefinitionArgs {
    /**
     * Name of the Agent to assign for new Job Runs of this Job Definition.
     */
    agentName?: pulumi.Input<string>;
    /**
     * Strategy to use for copy.
     */
    copyMode: pulumi.Input<string | types.enums.CopyMode>;
    /**
     * A description for the Job Definition.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Job Definition resource.
     */
    jobDefinitionName?: pulumi.Input<string>;
    /**
     * The name of the Project resource.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the source Endpoint.
     */
    sourceName: pulumi.Input<string>;
    /**
     * The subpath to use when reading from the source Endpoint.
     */
    sourceSubpath?: pulumi.Input<string>;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: pulumi.Input<string>;
    /**
     * The name of the target Endpoint.
     */
    targetName: pulumi.Input<string>;
    /**
     * The subpath to use when writing to the target Endpoint.
     */
    targetSubpath?: pulumi.Input<string>;
}
