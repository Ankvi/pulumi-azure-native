import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * disk encryption set resource.
 *
 * Uses Azure REST API version 2024-03-02. In version 2.x of the Azure Native provider, it used API version 2022-07-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DiskEncryptionSet extends pulumi.CustomResource {
    /**
     * Get an existing DiskEncryptionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiskEncryptionSet {
        return new DiskEncryptionSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:DiskEncryptionSet';

    /**
     * Returns true if the given object is an instance of DiskEncryptionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiskEncryptionSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiskEncryptionSet.__pulumiType;
    }

    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    public readonly activeKey!: pulumi.Output<types.outputs.KeyForDiskEncryptionSetResponse | undefined>;
    /**
     * The error that was encountered during auto-key rotation. If an error is present, then auto-key rotation will not be attempted until the error on this disk encryption set is fixed.
     */
    public /*out*/ readonly autoKeyRotationError!: pulumi.Output<types.outputs.ApiErrorResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    public readonly encryptionType!: pulumi.Output<string | undefined>;
    /**
     * Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property.
     */
    public readonly federatedClientId!: pulumi.Output<string | undefined>;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    public readonly identity!: pulumi.Output<types.outputs.EncryptionSetIdentityResponse | undefined>;
    /**
     * The time when the active key of this disk encryption set was updated.
     */
    public /*out*/ readonly lastKeyRotationTimestamp!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     */
    public /*out*/ readonly previousKeys!: pulumi.Output<types.outputs.KeyForDiskEncryptionSetResponse[]>;
    /**
     * The disk encryption set provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Set this flag to true to enable auto-updating of this disk encryption set to the latest key version.
     */
    public readonly rotationToLatestKeyVersionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DiskEncryptionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskEncryptionSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activeKey"] = args ? args.activeKey : undefined;
            resourceInputs["diskEncryptionSetName"] = args ? args.diskEncryptionSetName : undefined;
            resourceInputs["encryptionType"] = args ? args.encryptionType : undefined;
            resourceInputs["federatedClientId"] = args ? args.federatedClientId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rotationToLatestKeyVersionEnabled"] = args ? args.rotationToLatestKeyVersionEnabled : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["autoKeyRotationError"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastKeyRotationTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["previousKeys"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activeKey"] = undefined /*out*/;
            resourceInputs["autoKeyRotationError"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryptionType"] = undefined /*out*/;
            resourceInputs["federatedClientId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastKeyRotationTimestamp"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["previousKeys"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rotationToLatestKeyVersionEnabled"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20190701:DiskEncryptionSet" }, { type: "azure-native:compute/v20191101:DiskEncryptionSet" }, { type: "azure-native:compute/v20200501:DiskEncryptionSet" }, { type: "azure-native:compute/v20200630:DiskEncryptionSet" }, { type: "azure-native:compute/v20200930:DiskEncryptionSet" }, { type: "azure-native:compute/v20201201:DiskEncryptionSet" }, { type: "azure-native:compute/v20210401:DiskEncryptionSet" }, { type: "azure-native:compute/v20210801:DiskEncryptionSet" }, { type: "azure-native:compute/v20211201:DiskEncryptionSet" }, { type: "azure-native:compute/v20220302:DiskEncryptionSet" }, { type: "azure-native:compute/v20220702:DiskEncryptionSet" }, { type: "azure-native:compute/v20230102:DiskEncryptionSet" }, { type: "azure-native:compute/v20230402:DiskEncryptionSet" }, { type: "azure-native:compute/v20231002:DiskEncryptionSet" }, { type: "azure-native:compute/v20240302:DiskEncryptionSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiskEncryptionSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiskEncryptionSet resource.
 */
export interface DiskEncryptionSetArgs {
    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    activeKey?: pulumi.Input<types.inputs.KeyForDiskEncryptionSetArgs>;
    /**
     * The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskEncryptionSetName?: pulumi.Input<string>;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    encryptionType?: pulumi.Input<string | types.enums.DiskEncryptionSetType>;
    /**
     * Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property.
     */
    federatedClientId?: pulumi.Input<string>;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    identity?: pulumi.Input<types.inputs.EncryptionSetIdentityArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Set this flag to true to enable auto-updating of this disk encryption set to the latest key version.
     */
    rotationToLatestKeyVersionEnabled?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}