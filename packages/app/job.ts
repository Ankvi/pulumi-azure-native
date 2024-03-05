import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App Job
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview.
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
    public static readonly __pulumiType = 'azure-native:app:Job';

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
     * Container Apps Job configuration properties.
     */
    public readonly configuration!: pulumi.Output<types.outputs.JobConfigurationResponse | undefined>;
    /**
     * Resource ID of environment.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * The endpoint of the eventstream of the container apps job.
     */
    public /*out*/ readonly eventStreamEndpoint!: pulumi.Output<string>;
    /**
     * Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Outbound IP Addresses of a container apps job.
     */
    public /*out*/ readonly outboundIpAddresses!: pulumi.Output<string[]>;
    /**
     * Provisioning state of the Container Apps Job.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Container Apps job definition.
     */
    public readonly template!: pulumi.Output<types.outputs.JobTemplateResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Workload profile name to pin for container apps job execution.
     */
    public readonly workloadProfileName!: pulumi.Output<string | undefined>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configuration"] = args ? (args.configuration ? pulumi.output(args.configuration).apply(types.inputs.jobConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["workloadProfileName"] = args ? args.workloadProfileName : undefined;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["environmentId"] = undefined /*out*/;
            resourceInputs["eventStreamEndpoint"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["template"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workloadProfileName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20221101preview:Job" }, { type: "azure-native:app/v20230401preview:Job" }, { type: "azure-native:app/v20230501:Job" }, { type: "azure-native:app/v20230502preview:Job" }, { type: "azure-native:app/v20230801preview:Job" }, { type: "azure-native:app/v20231102preview:Job" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Job.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * Container Apps Job configuration properties.
     */
    configuration?: pulumi.Input<types.inputs.JobConfigurationArgs>;
    /**
     * Resource ID of environment.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Job Name
     */
    jobName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Container Apps job definition.
     */
    template?: pulumi.Input<types.inputs.JobTemplateArgs>;
    /**
     * Workload profile name to pin for container apps job execution.
     */
    workloadProfileName?: pulumi.Input<string>;
}