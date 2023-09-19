import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backup under a Backup Vault
 */
export class Backup extends pulumi.CustomResource {
    /**
     * Get an existing Backup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Backup {
        return new Backup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp/v20221101preview:Backup';

    /**
     * Returns true if the given object is an instance of Backup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Backup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Backup.__pulumiType;
    }

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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Size of backup in bytes
     */
    public /*out*/ readonly size!: pulumi.Output<number>;
    /**
     * The name of the snapshot
     */
    public readonly snapshotName!: pulumi.Output<string | undefined>;
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
     * ResourceId used to identify the Volume
     */
    public readonly volumeResourceId!: pulumi.Output<string>;

    /**
     * Create a Backup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.backupVaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupVaultName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeResourceId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["backupName"] = args ? args.backupName : undefined;
            resourceInputs["backupVaultName"] = args ? args.backupVaultName : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["useExistingSnapshot"] = (args ? args.useExistingSnapshot : undefined) ?? false;
            resourceInputs["volumeResourceId"] = args ? args.volumeResourceId : undefined;
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
            resourceInputs["backupId"] = undefined /*out*/;
            resourceInputs["backupType"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["failureReason"] = undefined /*out*/;
            resourceInputs["label"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["snapshotName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useExistingSnapshot"] = undefined /*out*/;
            resourceInputs["volumeResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Backup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Backup resource.
 */
export interface BackupArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the backup
     */
    backupName?: pulumi.Input<string>;
    /**
     * The name of the Backup Vault
     */
    backupVaultName: pulumi.Input<string>;
    /**
     * Label for backup
     */
    label?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot
     */
    snapshotName?: pulumi.Input<string>;
    /**
     * Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups
     */
    useExistingSnapshot?: pulumi.Input<boolean>;
    /**
     * ResourceId used to identify the Volume
     */
    volumeResourceId: pulumi.Input<string>;
}
