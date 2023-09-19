import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the job schedule.
 */
export class JobSchedule extends pulumi.CustomResource {
    /**
     * Get an existing JobSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobSchedule {
        return new JobSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation/v20220808:JobSchedule';

    /**
     * Returns true if the given object is an instance of JobSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobSchedule.__pulumiType;
    }

    /**
     * Gets or sets the id of job schedule.
     */
    public readonly jobScheduleId!: pulumi.Output<string | undefined>;
    /**
     * Gets the name of the variable.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the parameters of the job schedule.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    public readonly runOn!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the runbook.
     */
    public readonly runbook!: pulumi.Output<types.outputs.RunbookAssociationPropertyResponse | undefined>;
    /**
     * Gets or sets the schedule.
     */
    public readonly schedule!: pulumi.Output<types.outputs.ScheduleAssociationPropertyResponse | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.runbook === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runbook'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["jobScheduleId"] = args ? args.jobScheduleId : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runOn"] = args ? args.runOn : undefined;
            resourceInputs["runbook"] = args ? args.runbook : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["jobScheduleId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["runOn"] = undefined /*out*/;
            resourceInputs["runbook"] = undefined /*out*/;
            resourceInputs["schedule"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation:JobSchedule" }, { type: "azure-native:automation/v20151031:JobSchedule" }, { type: "azure-native:automation/v20190601:JobSchedule" }, { type: "azure-native:automation/v20200113preview:JobSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobSchedule resource.
 */
export interface JobScheduleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The job schedule name.
     */
    jobScheduleId?: pulumi.Input<string>;
    /**
     * Gets or sets a list of job properties.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    runOn?: pulumi.Input<string>;
    /**
     * Gets or sets the runbook.
     */
    runbook: pulumi.Input<types.inputs.RunbookAssociationPropertyArgs>;
    /**
     * Gets or sets the schedule.
     */
    schedule: pulumi.Input<types.inputs.ScheduleAssociationPropertyArgs>;
}
