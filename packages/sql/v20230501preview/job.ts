import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A job.
 */
export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * User-defined description of the job.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Schedule properties of the job.
     */
    public readonly schedule!: pulumi.Output<types.outputs.JobScheduleResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The job version number.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobAgentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["description"] = (args ? args.description : undefined) ?? "";
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schedule"] = args ? (args.schedule ? pulumi.output(args.schedule).apply(types.inputs.jobScheduleArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schedule"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:Job" }, { type: "azure-native:sql/v20170301preview:Job" }, { type: "azure-native:sql/v20200202preview:Job" }, { type: "azure-native:sql/v20200801preview:Job" }, { type: "azure-native:sql/v20201101preview:Job" }, { type: "azure-native:sql/v20210201preview:Job" }, { type: "azure-native:sql/v20210501preview:Job" }, { type: "azure-native:sql/v20210801preview:Job" }, { type: "azure-native:sql/v20211101:Job" }, { type: "azure-native:sql/v20211101preview:Job" }, { type: "azure-native:sql/v20220201preview:Job" }, { type: "azure-native:sql/v20220501preview:Job" }, { type: "azure-native:sql/v20220801preview:Job" }, { type: "azure-native:sql/v20221101preview:Job" }, { type: "azure-native:sql/v20230201preview:Job" }, { type: "azure-native:sql/v20230801preview:Job" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Job.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * User-defined description of the job.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the job to get.
     */
    jobName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schedule properties of the job.
     */
    schedule?: pulumi.Input<types.inputs.JobScheduleArgs>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}