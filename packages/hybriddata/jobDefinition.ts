import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Job Definition.
 *
 * Uses Azure REST API version 2019-06-01. In version 2.x of the Azure Native provider, it used API version 2019-06-01.
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
    public static readonly __pulumiType = 'azure-native:hybriddata:JobDefinition';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    public readonly customerSecrets!: pulumi.Output<types.outputs.CustomerSecretResponse[] | undefined>;
    /**
     * A generic json used differently by each data service type.
     */
    public readonly dataServiceInput!: pulumi.Output<any | undefined>;
    /**
     * Data Sink Id associated to the job definition.
     */
    public readonly dataSinkId!: pulumi.Output<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    public readonly dataSourceId!: pulumi.Output<string>;
    /**
     * Last modified time of the job definition.
     */
    public readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * Name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    public readonly runLocation!: pulumi.Output<string | undefined>;
    /**
     * Schedule for running the job definition
     */
    public readonly schedules!: pulumi.Output<types.outputs.ScheduleResponse[] | undefined>;
    /**
     * State of the job definition.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    public readonly userConfirmation!: pulumi.Output<string | undefined>;

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
            if ((!args || args.dataManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataManagerName'");
            }
            if ((!args || args.dataServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataServiceName'");
            }
            if ((!args || args.dataSinkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSinkId'");
            }
            if ((!args || args.dataSourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["customerSecrets"] = args ? args.customerSecrets : undefined;
            resourceInputs["dataManagerName"] = args ? args.dataManagerName : undefined;
            resourceInputs["dataServiceInput"] = args ? args.dataServiceInput : undefined;
            resourceInputs["dataServiceName"] = args ? args.dataServiceName : undefined;
            resourceInputs["dataSinkId"] = args ? args.dataSinkId : undefined;
            resourceInputs["dataSourceId"] = args ? args.dataSourceId : undefined;
            resourceInputs["jobDefinitionName"] = args ? args.jobDefinitionName : undefined;
            resourceInputs["lastModifiedTime"] = args ? args.lastModifiedTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runLocation"] = args ? args.runLocation : undefined;
            resourceInputs["schedules"] = args ? args.schedules : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["userConfirmation"] = (args ? args.userConfirmation : undefined) ?? "NotRequired";
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customerSecrets"] = undefined /*out*/;
            resourceInputs["dataServiceInput"] = undefined /*out*/;
            resourceInputs["dataSinkId"] = undefined /*out*/;
            resourceInputs["dataSourceId"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["runLocation"] = undefined /*out*/;
            resourceInputs["schedules"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userConfirmation"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybriddata/v20160601:JobDefinition" }, { type: "azure-native:hybriddata/v20190601:JobDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobDefinition resource.
 */
export interface JobDefinitionArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    customerSecrets?: pulumi.Input<pulumi.Input<types.inputs.CustomerSecretArgs>[]>;
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: pulumi.Input<string>;
    /**
     * A generic json used differently by each data service type.
     */
    dataServiceInput?: any;
    /**
     * The data service type of the job definition.
     */
    dataServiceName: pulumi.Input<string>;
    /**
     * Data Sink Id associated to the job definition.
     */
    dataSinkId: pulumi.Input<string>;
    /**
     * Data Source Id associated to the job definition.
     */
    dataSourceId: pulumi.Input<string>;
    /**
     * The job definition name to be created or updated.
     */
    jobDefinitionName?: pulumi.Input<string>;
    /**
     * Last modified time of the job definition.
     */
    lastModifiedTime?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * This is the preferred geo location for the job to run.
     */
    runLocation?: pulumi.Input<types.enums.RunLocation>;
    /**
     * Schedule for running the job definition
     */
    schedules?: pulumi.Input<pulumi.Input<types.inputs.ScheduleArgs>[]>;
    /**
     * State of the job definition.
     */
    state: pulumi.Input<types.enums.State>;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    userConfirmation?: pulumi.Input<types.enums.UserConfirmation>;
}