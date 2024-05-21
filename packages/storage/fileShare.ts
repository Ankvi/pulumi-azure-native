import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties of the file share, including Id, resource name, resource type, Etag.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01.
 */
export class FileShare extends pulumi.CustomResource {
    /**
     * Get an existing FileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileShare {
        return new FileShare(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:FileShare';

    /**
     * Returns true if the given object is an instance of FileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileShare {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileShare.__pulumiType;
    }

    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
     */
    public readonly accessTier!: pulumi.Output<string | undefined>;
    /**
     * Indicates the last modification time for share access tier.
     */
    public /*out*/ readonly accessTierChangeTime!: pulumi.Output<string>;
    /**
     * Indicates if there is a pending transition for access tier.
     */
    public /*out*/ readonly accessTierStatus!: pulumi.Output<string>;
    /**
     * Indicates whether the share was deleted.
     */
    public /*out*/ readonly deleted!: pulumi.Output<boolean>;
    /**
     * The deleted time if the share was deleted.
     */
    public /*out*/ readonly deletedTime!: pulumi.Output<string>;
    /**
     * The authentication protocol that is used for the file share. Can only be specified when creating a share.
     */
    public readonly enabledProtocols!: pulumi.Output<string | undefined>;
    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Returns the date and time the share was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * Specifies whether the lease on a share is of infinite or fixed duration, only when the share is leased.
     */
    public /*out*/ readonly leaseDuration!: pulumi.Output<string>;
    /**
     * Lease state of the share.
     */
    public /*out*/ readonly leaseState!: pulumi.Output<string>;
    /**
     * The lease status of the share.
     */
    public /*out*/ readonly leaseStatus!: pulumi.Output<string>;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Remaining retention days for share that was soft deleted.
     */
    public /*out*/ readonly remainingRetentionDays!: pulumi.Output<number>;
    /**
     * The property is for NFS share only. The default is NoRootSquash.
     */
    public readonly rootSquash!: pulumi.Output<string | undefined>;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
     */
    public readonly shareQuota!: pulumi.Output<number | undefined>;
    /**
     * The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
     */
    public /*out*/ readonly shareUsageBytes!: pulumi.Output<number>;
    /**
     * List of stored access policies specified on the share.
     */
    public readonly signedIdentifiers!: pulumi.Output<types.outputs.SignedIdentifierResponse[] | undefined>;
    /**
     * Creation time of share snapshot returned in the response of list shares with expand param "snapshots".
     */
    public /*out*/ readonly snapshotTime!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the share.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a FileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileShareArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessTier"] = args ? args.accessTier : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["enabledProtocols"] = args ? args.enabledProtocols : undefined;
            resourceInputs["expand"] = args ? args.expand : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rootSquash"] = args ? args.rootSquash : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["shareQuota"] = args ? args.shareQuota : undefined;
            resourceInputs["signedIdentifiers"] = args ? args.signedIdentifiers : undefined;
            resourceInputs["accessTierChangeTime"] = undefined /*out*/;
            resourceInputs["accessTierStatus"] = undefined /*out*/;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["deletedTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["leaseDuration"] = undefined /*out*/;
            resourceInputs["leaseState"] = undefined /*out*/;
            resourceInputs["leaseStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["remainingRetentionDays"] = undefined /*out*/;
            resourceInputs["shareUsageBytes"] = undefined /*out*/;
            resourceInputs["snapshotTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["accessTier"] = undefined /*out*/;
            resourceInputs["accessTierChangeTime"] = undefined /*out*/;
            resourceInputs["accessTierStatus"] = undefined /*out*/;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["deletedTime"] = undefined /*out*/;
            resourceInputs["enabledProtocols"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["leaseDuration"] = undefined /*out*/;
            resourceInputs["leaseState"] = undefined /*out*/;
            resourceInputs["leaseStatus"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["remainingRetentionDays"] = undefined /*out*/;
            resourceInputs["rootSquash"] = undefined /*out*/;
            resourceInputs["shareQuota"] = undefined /*out*/;
            resourceInputs["shareUsageBytes"] = undefined /*out*/;
            resourceInputs["signedIdentifiers"] = undefined /*out*/;
            resourceInputs["snapshotTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20190401:FileShare" }, { type: "azure-native:storage/v20190601:FileShare" }, { type: "azure-native:storage/v20200801preview:FileShare" }, { type: "azure-native:storage/v20210101:FileShare" }, { type: "azure-native:storage/v20210201:FileShare" }, { type: "azure-native:storage/v20210401:FileShare" }, { type: "azure-native:storage/v20210601:FileShare" }, { type: "azure-native:storage/v20210801:FileShare" }, { type: "azure-native:storage/v20210901:FileShare" }, { type: "azure-native:storage/v20220501:FileShare" }, { type: "azure-native:storage/v20220901:FileShare" }, { type: "azure-native:storage/v20230101:FileShare" }, { type: "azure-native:storage/v20230401:FileShare" }, { type: "azure-native:storage/v20230501:FileShare" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FileShare.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FileShare resource.
 */
export interface FileShareArgs {
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
     */
    accessTier?: pulumi.Input<string | types.enums.ShareAccessTier>;
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The authentication protocol that is used for the file share. Can only be specified when creating a share.
     */
    enabledProtocols?: pulumi.Input<string | types.enums.EnabledProtocols>;
    /**
     * Optional, used to expand the properties within share's properties. Valid values are: snapshots. Should be passed as a string with delimiter ','
     */
    expand?: pulumi.Input<string>;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The property is for NFS share only. The default is NoRootSquash.
     */
    rootSquash?: pulumi.Input<string | types.enums.RootSquashType>;
    /**
     * The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    shareName?: pulumi.Input<string>;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
     */
    shareQuota?: pulumi.Input<number>;
    /**
     * List of stored access policies specified on the share.
     */
    signedIdentifiers?: pulumi.Input<pulumi.Input<types.inputs.SignedIdentifierArgs>[]>;
}