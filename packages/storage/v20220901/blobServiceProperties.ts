import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The properties of a storage account’s Blob service.
 */
export class BlobServiceProperties extends pulumi.CustomResource {
    /**
     * Get an existing BlobServiceProperties resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobServiceProperties {
        return new BlobServiceProperties(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage/v20220901:BlobServiceProperties';

    /**
     * Returns true if the given object is an instance of BlobServiceProperties.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobServiceProperties {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobServiceProperties.__pulumiType;
    }

    /**
     * Deprecated in favor of isVersioningEnabled property.
     */
    public readonly automaticSnapshotPolicyEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The blob service properties for change feed events.
     */
    public readonly changeFeed!: pulumi.Output<types.outputs.storage.v20220901.ChangeFeedResponse | undefined>;
    /**
     * The blob service properties for container soft delete.
     */
    public readonly containerDeleteRetentionPolicy!: pulumi.Output<types.outputs.storage.v20220901.DeleteRetentionPolicyResponse | undefined>;
    /**
     * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
     */
    public readonly cors!: pulumi.Output<types.outputs.storage.v20220901.CorsRulesResponse | undefined>;
    /**
     * DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
     */
    public readonly defaultServiceVersion!: pulumi.Output<string | undefined>;
    /**
     * The blob service properties for blob soft delete.
     */
    public readonly deleteRetentionPolicy!: pulumi.Output<types.outputs.storage.v20220901.DeleteRetentionPolicyResponse | undefined>;
    /**
     * Versioning is enabled if set to true.
     */
    public readonly isVersioningEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The blob service property to configure last access time based tracking policy.
     */
    public readonly lastAccessTimeTrackingPolicy!: pulumi.Output<types.outputs.storage.v20220901.LastAccessTimeTrackingPolicyResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The blob service properties for blob restore policy.
     */
    public readonly restorePolicy!: pulumi.Output<types.outputs.storage.v20220901.RestorePolicyPropertiesResponse | undefined>;
    /**
     * Sku name and tier.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.storage.v20220901.SkuResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobServiceProperties resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobServicePropertiesArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["automaticSnapshotPolicyEnabled"] = args ? args.automaticSnapshotPolicyEnabled : undefined;
            resourceInputs["blobServicesName"] = args ? args.blobServicesName : undefined;
            resourceInputs["changeFeed"] = args ? args.changeFeed : undefined;
            resourceInputs["containerDeleteRetentionPolicy"] = args ? args.containerDeleteRetentionPolicy : undefined;
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["defaultServiceVersion"] = args ? args.defaultServiceVersion : undefined;
            resourceInputs["deleteRetentionPolicy"] = args ? args.deleteRetentionPolicy : undefined;
            resourceInputs["isVersioningEnabled"] = args ? args.isVersioningEnabled : undefined;
            resourceInputs["lastAccessTimeTrackingPolicy"] = args ? args.lastAccessTimeTrackingPolicy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePolicy"] = args ? args.restorePolicy : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["automaticSnapshotPolicyEnabled"] = undefined /*out*/;
            resourceInputs["changeFeed"] = undefined /*out*/;
            resourceInputs["containerDeleteRetentionPolicy"] = undefined /*out*/;
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["defaultServiceVersion"] = undefined /*out*/;
            resourceInputs["deleteRetentionPolicy"] = undefined /*out*/;
            resourceInputs["isVersioningEnabled"] = undefined /*out*/;
            resourceInputs["lastAccessTimeTrackingPolicy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["restorePolicy"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage:BlobServiceProperties" }, { type: "azure-native:storage/v20180701:BlobServiceProperties" }, { type: "azure-native:storage/v20181101:BlobServiceProperties" }, { type: "azure-native:storage/v20190401:BlobServiceProperties" }, { type: "azure-native:storage/v20190601:BlobServiceProperties" }, { type: "azure-native:storage/v20200801preview:BlobServiceProperties" }, { type: "azure-native:storage/v20210101:BlobServiceProperties" }, { type: "azure-native:storage/v20210201:BlobServiceProperties" }, { type: "azure-native:storage/v20210401:BlobServiceProperties" }, { type: "azure-native:storage/v20210601:BlobServiceProperties" }, { type: "azure-native:storage/v20210801:BlobServiceProperties" }, { type: "azure-native:storage/v20210901:BlobServiceProperties" }, { type: "azure-native:storage/v20220501:BlobServiceProperties" }, { type: "azure-native:storage/v20230101:BlobServiceProperties" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobServiceProperties.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobServiceProperties resource.
 */
export interface BlobServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * Deprecated in favor of isVersioningEnabled property.
     */
    automaticSnapshotPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
     */
    blobServicesName?: pulumi.Input<string>;
    /**
     * The blob service properties for change feed events.
     */
    changeFeed?: pulumi.Input<types.inputs.storage.v20220901.ChangeFeedArgs>;
    /**
     * The blob service properties for container soft delete.
     */
    containerDeleteRetentionPolicy?: pulumi.Input<types.inputs.storage.v20220901.DeleteRetentionPolicyArgs>;
    /**
     * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
     */
    cors?: pulumi.Input<types.inputs.storage.v20220901.CorsRulesArgs>;
    /**
     * DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
     */
    defaultServiceVersion?: pulumi.Input<string>;
    /**
     * The blob service properties for blob soft delete.
     */
    deleteRetentionPolicy?: pulumi.Input<types.inputs.storage.v20220901.DeleteRetentionPolicyArgs>;
    /**
     * Versioning is enabled if set to true.
     */
    isVersioningEnabled?: pulumi.Input<boolean>;
    /**
     * The blob service property to configure last access time based tracking policy.
     */
    lastAccessTimeTrackingPolicy?: pulumi.Input<types.inputs.storage.v20220901.LastAccessTimeTrackingPolicyArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The blob service properties for blob restore policy.
     */
    restorePolicy?: pulumi.Input<types.inputs.storage.v20220901.RestorePolicyPropertiesArgs>;
}
