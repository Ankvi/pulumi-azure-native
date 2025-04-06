import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a backup which will be performed.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebAppBackupConfigurationSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppBackupConfigurationSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppBackupConfigurationSlot {
        return new WebAppBackupConfigurationSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppBackupConfigurationSlot';

    /**
     * Returns true if the given object is an instance of WebAppBackupConfigurationSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppBackupConfigurationSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppBackupConfigurationSlot.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Name of the backup.
     */
    public readonly backupName!: pulumi.Output<string | undefined>;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    public readonly backupSchedule!: pulumi.Output<types.outputs.BackupScheduleResponse | undefined>;
    /**
     * Databases included in the backup.
     */
    public readonly databases!: pulumi.Output<types.outputs.DatabaseBackupSettingResponse[] | undefined>;
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * SAS URL to the container.
     */
    public readonly storageAccountUrl!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppBackupConfigurationSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppBackupConfigurationSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            if ((!args || args.storageAccountUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountUrl'");
            }
            resourceInputs["backupName"] = args ? args.backupName : undefined;
            resourceInputs["backupSchedule"] = args ? (args.backupSchedule ? pulumi.output(args.backupSchedule).apply(types.inputs.backupScheduleArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["databases"] = args ? args.databases : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["storageAccountUrl"] = args ? args.storageAccountUrl : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupName"] = undefined /*out*/;
            resourceInputs["backupSchedule"] = undefined /*out*/;
            resourceInputs["databases"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageAccountUrl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20160801:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20180201:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20181101:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20190801:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20200601:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20200901:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20201001:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20201201:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20210101:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20210115:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20210201:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20210301:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20220301:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20220901:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20230101:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20231201:WebAppBackupConfigurationSlot" }, { type: "azure-native:web/v20240401:WebAppBackupConfigurationSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppBackupConfigurationSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppBackupConfigurationSlot resource.
 */
export interface WebAppBackupConfigurationSlotArgs {
    /**
     * Name of the backup.
     */
    backupName?: pulumi.Input<string>;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    backupSchedule?: pulumi.Input<types.inputs.BackupScheduleArgs>;
    /**
     * Databases included in the backup.
     */
    databases?: pulumi.Input<pulumi.Input<types.inputs.DatabaseBackupSettingArgs>[]>;
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the backup configuration for the production slot.
     */
    slot: pulumi.Input<string>;
    /**
     * SAS URL to the container.
     */
    storageAccountUrl: pulumi.Input<string>;
}