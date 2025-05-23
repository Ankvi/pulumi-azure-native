import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A type of synchronization setting based on schedule
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class ScheduledSynchronizationSetting extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledSynchronizationSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScheduledSynchronizationSetting {
        return new ScheduledSynchronizationSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:ScheduledSynchronizationSetting';

    /**
     * Returns true if the given object is an instance of ScheduledSynchronizationSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScheduledSynchronizationSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScheduledSynchronizationSetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Time at which the synchronization setting was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Kind of synchronization setting.
     * Expected value is 'ScheduleBased'.
     */
    public readonly kind!: pulumi.Output<"ScheduleBased">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Recurrence Interval
     */
    public readonly recurrenceInterval!: pulumi.Output<string>;
    /**
     * Synchronization time
     */
    public readonly synchronizationTime!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Name of the user who created the synchronization setting.
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a ScheduledSynchronizationSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledSynchronizationSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.recurrenceInterval === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recurrenceInterval'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            if ((!args || args.synchronizationTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'synchronizationTime'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["kind"] = "ScheduleBased";
            resourceInputs["recurrenceInterval"] = args ? args.recurrenceInterval : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["synchronizationSettingName"] = args ? args.synchronizationSettingName : undefined;
            resourceInputs["synchronizationTime"] = args ? args.synchronizationTime : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["recurrenceInterval"] = undefined /*out*/;
            resourceInputs["synchronizationTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:ScheduledSynchronizationSetting" }, { type: "azure-native:datashare/v20191101:ScheduledSynchronizationSetting" }, { type: "azure-native:datashare/v20200901:ScheduledSynchronizationSetting" }, { type: "azure-native:datashare/v20201001preview:ScheduledSynchronizationSetting" }, { type: "azure-native:datashare/v20210801:ScheduledSynchronizationSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScheduledSynchronizationSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScheduledSynchronizationSetting resource.
 */
export interface ScheduledSynchronizationSettingArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Kind of synchronization setting.
     * Expected value is 'ScheduleBased'.
     */
    kind: pulumi.Input<"ScheduleBased">;
    /**
     * Recurrence Interval
     */
    recurrenceInterval: pulumi.Input<string | types.enums.RecurrenceInterval>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the synchronization setting to.
     */
    shareName: pulumi.Input<string>;
    /**
     * The name of the synchronizationSetting.
     */
    synchronizationSettingName?: pulumi.Input<string>;
    /**
     * Synchronization time
     */
    synchronizationTime: pulumi.Input<string>;
}