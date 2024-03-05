import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * .
 */
export class BlobContainerLegalHold extends pulumi.CustomResource {
    /**
     * Get an existing BlobContainerLegalHold resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobContainerLegalHold {
        return new BlobContainerLegalHold(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:BlobContainerLegalHold';

    /**
     * Returns true if the given object is an instance of BlobContainerLegalHold.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobContainerLegalHold {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobContainerLegalHold.__pulumiType;
    }

    /**
     * Name of the Storage Account.
     */
    public readonly accountName!: pulumi.Output<string | undefined>;
    /**
     * When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
     */
    public readonly allowProtectedAppendWritesAll!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the Blob Container.
     */
    public readonly containerName!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource group that contains the storage account.
     */
    public readonly resourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * List of legal hold tags. Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a BlobContainerLegalHold resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobContainerLegalHoldArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.tags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tags'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["allowProtectedAppendWritesAll"] = args ? args.allowProtectedAppendWritesAll : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        } else {
            resourceInputs["accountName"] = undefined /*out*/;
            resourceInputs["allowProtectedAppendWritesAll"] = undefined /*out*/;
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["resourceGroupName"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BlobContainerLegalHold.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobContainerLegalHold resource.
 */
export interface BlobContainerLegalHoldArgs {
    /**
     * Name of the Storage Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining legal hold protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
     */
    allowProtectedAppendWritesAll?: pulumi.Input<boolean>;
    /**
     * Name of the Blob Container.
     */
    containerName: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the storage account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of legal hold tags. Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP.
     */
    tags: pulumi.Input<pulumi.Input<string>[]>;
}