import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A group of job targets.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export class JobTargetGroup extends pulumi.CustomResource {
    /**
     * Get an existing JobTargetGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobTargetGroup {
        return new JobTargetGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:JobTargetGroup';

    /**
     * Returns true if the given object is an instance of JobTargetGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobTargetGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobTargetGroup.__pulumiType;
    }

    /**
     * Members of the target group.
     */
    public readonly members!: pulumi.Output<types.outputs.JobTargetResponse[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobTargetGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobTargetGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobAgentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["targetGroupName"] = args ? args.targetGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["members"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20170301preview:JobTargetGroup" }, { type: "azure-native:sql/v20200202preview:JobTargetGroup" }, { type: "azure-native:sql/v20200801preview:JobTargetGroup" }, { type: "azure-native:sql/v20201101preview:JobTargetGroup" }, { type: "azure-native:sql/v20210201preview:JobTargetGroup" }, { type: "azure-native:sql/v20210501preview:JobTargetGroup" }, { type: "azure-native:sql/v20210801preview:JobTargetGroup" }, { type: "azure-native:sql/v20211101:JobTargetGroup" }, { type: "azure-native:sql/v20211101preview:JobTargetGroup" }, { type: "azure-native:sql/v20220201preview:JobTargetGroup" }, { type: "azure-native:sql/v20220501preview:JobTargetGroup" }, { type: "azure-native:sql/v20220801preview:JobTargetGroup" }, { type: "azure-native:sql/v20221101preview:JobTargetGroup" }, { type: "azure-native:sql/v20230201preview:JobTargetGroup" }, { type: "azure-native:sql/v20230501preview:JobTargetGroup" }, { type: "azure-native:sql/v20230801preview:JobTargetGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobTargetGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobTargetGroup resource.
 */
export interface JobTargetGroupArgs {
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * Members of the target group.
     */
    members: pulumi.Input<pulumi.Input<types.inputs.JobTargetArgs>[]>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the target group.
     */
    targetGroupName?: pulumi.Input<string>;
}