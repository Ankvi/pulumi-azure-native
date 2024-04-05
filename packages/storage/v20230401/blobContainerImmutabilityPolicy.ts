import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The ImmutabilityPolicy property of a blob container, including Id, resource name, resource type, Etag.
 */
export class BlobContainerImmutabilityPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BlobContainerImmutabilityPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobContainerImmutabilityPolicy {
        return new BlobContainerImmutabilityPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage/v20230401:BlobContainerImmutabilityPolicy';

    /**
     * Returns true if the given object is an instance of BlobContainerImmutabilityPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobContainerImmutabilityPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobContainerImmutabilityPolicy.__pulumiType;
    }

    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
     */
    public readonly allowProtectedAppendWrites!: pulumi.Output<boolean | undefined>;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
     */
    public readonly allowProtectedAppendWritesAll!: pulumi.Output<boolean | undefined>;
    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    public readonly immutabilityPeriodSinceCreationInDays!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobContainerImmutabilityPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobContainerImmutabilityPolicyArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["allowProtectedAppendWrites"] = args ? args.allowProtectedAppendWrites : undefined;
            resourceInputs["allowProtectedAppendWritesAll"] = args ? args.allowProtectedAppendWritesAll : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["immutabilityPeriodSinceCreationInDays"] = args ? args.immutabilityPeriodSinceCreationInDays : undefined;
            resourceInputs["immutabilityPolicyName"] = args ? args.immutabilityPolicyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowProtectedAppendWrites"] = undefined /*out*/;
            resourceInputs["allowProtectedAppendWritesAll"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["immutabilityPeriodSinceCreationInDays"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20180201:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20180301preview:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20180701:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20181101:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20190401:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20190601:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20200801preview:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210101:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210201:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210401:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210601:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210801:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20210901:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20220501:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20220901:BlobContainerImmutabilityPolicy" }, { type: "azure-native:storage/v20230101:BlobContainerImmutabilityPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobContainerImmutabilityPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobContainerImmutabilityPolicy resource.
 */
export interface BlobContainerImmutabilityPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API.
     */
    allowProtectedAppendWrites?: pulumi.Input<boolean>;
    /**
     * This property can only be changed for unlocked time-based retention policies. When enabled, new blocks can be written to both 'Append and Bock Blobs' while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted. This property cannot be changed with ExtendImmutabilityPolicy API. The 'allowProtectedAppendWrites' and 'allowProtectedAppendWritesAll' properties are mutually exclusive.
     */
    allowProtectedAppendWritesAll?: pulumi.Input<boolean>;
    /**
     * The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    containerName: pulumi.Input<string>;
    /**
     * The immutability period for the blobs in the container since the policy creation, in days.
     */
    immutabilityPeriodSinceCreationInDays?: pulumi.Input<number>;
    /**
     * The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
     */
    immutabilityPolicyName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}