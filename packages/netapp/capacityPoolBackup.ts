import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backup of a Volume
 *
 * Uses Azure REST API version 2022-11-01.
 */
export class CapacityPoolBackup extends pulumi.CustomResource {
    /**
     * Get an existing CapacityPoolBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityPoolBackup {
        return new CapacityPoolBackup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:CapacityPoolBackup';

    /**
     * Returns true if the given object is an instance of CapacityPoolBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityPoolBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityPoolBackup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * UUID v4 used to identify the Backup
     */
    public /*out*/ readonly backupId!: pulumi.Output<string>;
    /**
     * Type of backup Manual or Scheduled
     */
    public /*out*/ readonly backupType!: pulumi.Output<string>;
    /**
     * The creation date of the backup
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Failure reason
     */
    public /*out*/ readonly failureReason!: pulumi.Output<string>;
    /**
     * Label for backup
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Size of backup
     */
    public /*out*/ readonly size!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
     */
    public readonly useExistingSnapshot!: pulumi.Output<boolean | undefined>;
    /**
     * Volume name
     */
    public readonly volumeName!: pulumi.Output<string>;

    /**
     * Create a CapacityPoolBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityPoolBackupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["backupName"] = args ? args.backupName : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["useExistingSnapshot"] = (args ? args.useExistingSnapshot : undefined) ?? false;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupId"] = undefined /*out*/;
            resourceInputs["backupType"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["failureReason"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupId"] = undefined /*out*/;
            resourceInputs["backupType"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["failureReason"] = undefined /*out*/;
            resourceInputs["label"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useExistingSnapshot"] = undefined /*out*/;
            resourceInputs["volumeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20200501:CapacityPoolBackup" }, { type: "azure-native:netapp/v20200601:CapacityPoolBackup" }, { type: "azure-native:netapp/v20200701:CapacityPoolBackup" }, { type: "azure-native:netapp/v20200801:CapacityPoolBackup" }, { type: "azure-native:netapp/v20200901:CapacityPoolBackup" }, { type: "azure-native:netapp/v20201101:CapacityPoolBackup" }, { type: "azure-native:netapp/v20201201:CapacityPoolBackup" }, { type: "azure-native:netapp/v20210201:CapacityPoolBackup" }, { type: "azure-native:netapp/v20210401:CapacityPoolBackup" }, { type: "azure-native:netapp/v20210401preview:CapacityPoolBackup" }, { type: "azure-native:netapp/v20210601:CapacityPoolBackup" }, { type: "azure-native:netapp/v20210801:CapacityPoolBackup" }, { type: "azure-native:netapp/v20211001:CapacityPoolBackup" }, { type: "azure-native:netapp/v20220101:CapacityPoolBackup" }, { type: "azure-native:netapp/v20220301:CapacityPoolBackup" }, { type: "azure-native:netapp/v20220501:CapacityPoolBackup" }, { type: "azure-native:netapp/v20220901:CapacityPoolBackup" }, { type: "azure-native:netapp/v20221101:Backup" }, { type: "azure-native:netapp/v20221101:CapacityPoolBackup" }, { type: "azure-native:netapp:Backup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CapacityPoolBackup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CapacityPoolBackup resource.
 */
export interface CapacityPoolBackupArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the backup
     */
    backupName?: pulumi.Input<string>;
    /**
     * Label for backup
     */
    label?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
     */
    useExistingSnapshot?: pulumi.Input<boolean>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}