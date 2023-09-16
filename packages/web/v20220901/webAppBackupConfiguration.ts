import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Description of a backup which will be performed.
 */
export class WebAppBackupConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing WebAppBackupConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppBackupConfiguration {
        return new WebAppBackupConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppBackupConfiguration';

    /**
     * Returns true if the given object is an instance of WebAppBackupConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppBackupConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppBackupConfiguration.__pulumiType;
    }

    /**
     * Name of the backup.
     */
    public readonly backupName!: pulumi.Output<string | undefined>;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    public readonly backupSchedule!: pulumi.Output<types.outputs.web.v20220901.BackupScheduleResponse | undefined>;
    /**
     * Databases included in the backup.
     */
    public readonly databases!: pulumi.Output<types.outputs.web.v20220901.DatabaseBackupSettingResponse[] | undefined>;
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
     * Create a WebAppBackupConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppBackupConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccountUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountUrl'");
            }
            resourceInputs["backupName"] = args ? args.backupName : undefined;
            resourceInputs["backupSchedule"] = args ? (args.backupSchedule ? pulumi.output(args.backupSchedule).apply(types.inputs.web.v20220901.backupScheduleArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["databases"] = args ? args.databases : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountUrl"] = args ? args.storageAccountUrl : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppBackupConfiguration" }, { type: "azure-native:web/v20150801:WebAppBackupConfiguration" }, { type: "azure-native:web/v20160801:WebAppBackupConfiguration" }, { type: "azure-native:web/v20180201:WebAppBackupConfiguration" }, { type: "azure-native:web/v20181101:WebAppBackupConfiguration" }, { type: "azure-native:web/v20190801:WebAppBackupConfiguration" }, { type: "azure-native:web/v20200601:WebAppBackupConfiguration" }, { type: "azure-native:web/v20200901:WebAppBackupConfiguration" }, { type: "azure-native:web/v20201001:WebAppBackupConfiguration" }, { type: "azure-native:web/v20201201:WebAppBackupConfiguration" }, { type: "azure-native:web/v20210101:WebAppBackupConfiguration" }, { type: "azure-native:web/v20210115:WebAppBackupConfiguration" }, { type: "azure-native:web/v20210201:WebAppBackupConfiguration" }, { type: "azure-native:web/v20210301:WebAppBackupConfiguration" }, { type: "azure-native:web/v20220301:WebAppBackupConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppBackupConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppBackupConfiguration resource.
 */
export interface WebAppBackupConfigurationArgs {
    /**
     * Name of the backup.
     */
    backupName?: pulumi.Input<string>;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    backupSchedule?: pulumi.Input<types.inputs.web.v20220901.BackupScheduleArgs>;
    /**
     * Databases included in the backup.
     */
    databases?: pulumi.Input<pulumi.Input<types.inputs.web.v20220901.DatabaseBackupSettingArgs>[]>;
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
     * SAS URL to the container.
     */
    storageAccountUrl: pulumi.Input<string>;
}
