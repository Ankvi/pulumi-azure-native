import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Enables the static website feature of a storage account.
 */
export class StorageAccountStaticWebsite extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccountStaticWebsite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccountStaticWebsite {
        return new StorageAccountStaticWebsite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:StorageAccountStaticWebsite';

    /**
     * Returns true if the given object is an instance of StorageAccountStaticWebsite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccountStaticWebsite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccountStaticWebsite.__pulumiType;
    }

    /**
     * The name of the container to upload blobs to.
     */
    public /*out*/ readonly containerName!: pulumi.Output<string>;
    /**
     * The absolute path to a custom webpage that should be used when a request is made which does not correspond to an existing file.
     */
    public readonly error404Document!: pulumi.Output<string | undefined>;
    /**
     * The webpage that Azure Storage serves for requests to the root of a website or any sub-folder. For example, 'index.html'. The value is case-sensitive.
     */
    public readonly indexDocument!: pulumi.Output<string | undefined>;

    /**
     * Create a StorageAccountStaticWebsite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountStaticWebsiteArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["error404Document"] = args ? args.error404Document : undefined;
            resourceInputs["indexDocument"] = args ? args.indexDocument : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["containerName"] = undefined /*out*/;
        } else {
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["error404Document"] = undefined /*out*/;
            resourceInputs["indexDocument"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StorageAccountStaticWebsite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccountStaticWebsite resource.
 */
export interface StorageAccountStaticWebsiteArgs {
    /**
     * The name of the storage account within the specified resource group.
     */
    accountName: pulumi.Input<string>;
    /**
     * The absolute path to a custom webpage that should be used when a request is made which does not correspond to an existing file.
     */
    error404Document?: pulumi.Input<string>;
    /**
     * The webpage that Azure Storage serves for requests to the root of a website or any sub-folder. For example, 'index.html'. The value is case-sensitive.
     */
    indexDocument?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
