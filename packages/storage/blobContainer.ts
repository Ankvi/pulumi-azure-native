import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties of the blob container, including Id, resource name, resource type, Etag.
 *
 * Uses Azure REST API version 2022-09-01. In version 1.x of the Azure Native provider, it used API version 2021-02-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01, 2023-05-01, 2024-01-01.
 */
export class BlobContainer extends pulumi.CustomResource {
    /**
     * Get an existing BlobContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobContainer {
        return new BlobContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:BlobContainer';

    /**
     * Returns true if the given object is an instance of BlobContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobContainer.__pulumiType;
    }

    /**
     * Default the container to use specified encryption scope for all writes.
     */
    public readonly defaultEncryptionScope!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the blob container was deleted.
     */
    public /*out*/ readonly deleted!: pulumi.Output<boolean>;
    /**
     * Blob container deletion time.
     */
    public /*out*/ readonly deletedTime!: pulumi.Output<string>;
    /**
     * Block override of encryption scope from the container default.
     */
    public readonly denyEncryptionScopeOverride!: pulumi.Output<boolean | undefined>;
    /**
     * Enable NFSv3 all squash on blob container.
     */
    public readonly enableNfsV3AllSquash!: pulumi.Output<boolean | undefined>;
    /**
     * Enable NFSv3 root squash on blob container.
     */
    public readonly enableNfsV3RootSquash!: pulumi.Output<boolean | undefined>;
    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
     */
    public /*out*/ readonly hasImmutabilityPolicy!: pulumi.Output<boolean>;
    /**
     * The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
     */
    public /*out*/ readonly hasLegalHold!: pulumi.Output<boolean>;
    /**
     * The ImmutabilityPolicy property of the container.
     */
    public /*out*/ readonly immutabilityPolicy!: pulumi.Output<types.outputs.ImmutabilityPolicyPropertiesResponse>;
    /**
     * The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process.
     */
    public readonly immutableStorageWithVersioning!: pulumi.Output<types.outputs.ImmutableStorageWithVersioningResponse | undefined>;
    /**
     * Returns the date and time the container was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
     */
    public /*out*/ readonly leaseDuration!: pulumi.Output<string>;
    /**
     * Lease state of the container.
     */
    public /*out*/ readonly leaseState!: pulumi.Output<string>;
    /**
     * The lease status of the container.
     */
    public /*out*/ readonly leaseStatus!: pulumi.Output<string>;
    /**
     * The LegalHold property of the container.
     */
    public /*out*/ readonly legalHold!: pulumi.Output<types.outputs.LegalHoldPropertiesResponse>;
    /**
     * A name-value pair to associate with the container as metadata.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies whether data in the container may be accessed publicly and the level of access.
     */
    public readonly publicAccess!: pulumi.Output<string | undefined>;
    /**
     * Remaining retention days for soft deleted blob container.
     */
    public /*out*/ readonly remainingRetentionDays!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the deleted blob container.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a BlobContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobContainerArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["defaultEncryptionScope"] = args ? args.defaultEncryptionScope : undefined;
            resourceInputs["denyEncryptionScopeOverride"] = args ? args.denyEncryptionScopeOverride : undefined;
            resourceInputs["enableNfsV3AllSquash"] = args ? args.enableNfsV3AllSquash : undefined;
            resourceInputs["enableNfsV3RootSquash"] = args ? args.enableNfsV3RootSquash : undefined;
            resourceInputs["immutableStorageWithVersioning"] = args ? args.immutableStorageWithVersioning : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["publicAccess"] = args ? args.publicAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["deletedTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hasImmutabilityPolicy"] = undefined /*out*/;
            resourceInputs["hasLegalHold"] = undefined /*out*/;
            resourceInputs["immutabilityPolicy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["leaseDuration"] = undefined /*out*/;
            resourceInputs["leaseState"] = undefined /*out*/;
            resourceInputs["leaseStatus"] = undefined /*out*/;
            resourceInputs["legalHold"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["remainingRetentionDays"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["defaultEncryptionScope"] = undefined /*out*/;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["deletedTime"] = undefined /*out*/;
            resourceInputs["denyEncryptionScopeOverride"] = undefined /*out*/;
            resourceInputs["enableNfsV3AllSquash"] = undefined /*out*/;
            resourceInputs["enableNfsV3RootSquash"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hasImmutabilityPolicy"] = undefined /*out*/;
            resourceInputs["hasLegalHold"] = undefined /*out*/;
            resourceInputs["immutabilityPolicy"] = undefined /*out*/;
            resourceInputs["immutableStorageWithVersioning"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["leaseDuration"] = undefined /*out*/;
            resourceInputs["leaseState"] = undefined /*out*/;
            resourceInputs["leaseStatus"] = undefined /*out*/;
            resourceInputs["legalHold"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicAccess"] = undefined /*out*/;
            resourceInputs["remainingRetentionDays"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20180201:BlobContainer" }, { type: "azure-native:storage/v20180301preview:BlobContainer" }, { type: "azure-native:storage/v20180701:BlobContainer" }, { type: "azure-native:storage/v20181101:BlobContainer" }, { type: "azure-native:storage/v20190401:BlobContainer" }, { type: "azure-native:storage/v20190601:BlobContainer" }, { type: "azure-native:storage/v20200801preview:BlobContainer" }, { type: "azure-native:storage/v20210101:BlobContainer" }, { type: "azure-native:storage/v20210201:BlobContainer" }, { type: "azure-native:storage/v20210401:BlobContainer" }, { type: "azure-native:storage/v20210601:BlobContainer" }, { type: "azure-native:storage/v20210801:BlobContainer" }, { type: "azure-native:storage/v20210901:BlobContainer" }, { type: "azure-native:storage/v20220501:BlobContainer" }, { type: "azure-native:storage/v20220901:BlobContainer" }, { type: "azure-native:storage/v20230101:BlobContainer" }, { type: "azure-native:storage/v20230401:BlobContainer" }, { type: "azure-native:storage/v20230501:BlobContainer" }, { type: "azure-native:storage/v20240101:BlobContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobContainer resource.
 */
export interface BlobContainerArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Default the container to use specified encryption scope for all writes.
     */
    defaultEncryptionScope?: pulumi.Input<string>;
    /**
     * Block override of encryption scope from the container default.
     */
    denyEncryptionScopeOverride?: pulumi.Input<boolean>;
    /**
     * Enable NFSv3 all squash on blob container.
     */
    enableNfsV3AllSquash?: pulumi.Input<boolean>;
    /**
     * Enable NFSv3 root squash on blob container.
     */
    enableNfsV3RootSquash?: pulumi.Input<boolean>;
    /**
     * The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process.
     */
    immutableStorageWithVersioning?: pulumi.Input<types.inputs.ImmutableStorageWithVersioningArgs>;
    /**
     * A name-value pair to associate with the container as metadata.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies whether data in the container may be accessed publicly and the level of access.
     */
    publicAccess?: pulumi.Input<types.enums.PublicAccess>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}