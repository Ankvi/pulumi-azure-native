import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Manages a Blob within a Storage Container. For the supported combinations of properties and features please see [here](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-feature-support-in-storage-accounts).
 */
export class Blob extends pulumi.CustomResource {
    /**
     * Get an existing Blob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Blob {
        return new Blob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:Blob';

    /**
     * Returns true if the given object is an instance of Blob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Blob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Blob.__pulumiType;
    }

    /**
     * The access tier of the storage blob. Only supported for standard storage accounts, not premium.
     */
    public readonly accessTier!: pulumi.Output<types.enums.BlobAccessTier | undefined>;
    /**
     * The MD5 sum of the blob contents.
     */
    public readonly contentMd5!: pulumi.Output<string | undefined>;
    /**
     * The content type of the storage blob.
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * A map of custom blob metadata.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string}>;
    /**
     * The name of the storage blob.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the storage blob to be created.
     */
    public readonly type!: pulumi.Output<types.enums.BlobType>;
    /**
     * The URL of the blob.
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a Blob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.containerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessTier"] = args ? args.accessTier : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["blobName"] = args ? args.blobName : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["contentMd5"] = args ? args.contentMd5 : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["type"] = (args ? args.type : undefined) ?? "Block";
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        } else {
            resourceInputs["accessTier"] = undefined /*out*/;
            resourceInputs["contentMd5"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Blob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Blob resource.
 */
export interface BlobArgs {
    /**
     * The access tier of the storage blob. Only supported for standard storage accounts, not premium.
     */
    accessTier?: pulumi.Input<types.enums.BlobAccessTier>;
    /**
     * Specifies the storage account in which to create the storage container.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located. If this property is not specified it will be set to the name of the resource.
     */
    blobName?: pulumi.Input<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    containerName: pulumi.Input<string>;
    /**
     * The MD5 sum of the blob contents, base64-encoded. Cannot be defined if blob type is Append.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * The content type of the storage blob. Defaults to `application/octet-stream`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * A map of custom blob metadata.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * An asset to copy to the blob contents. This field cannot be specified for Append blobs.
     */
    source?: pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * The type of the storage blob to be created. Defaults to 'Block'.
     */
    type?: pulumi.Input<types.enums.BlobType>;
}