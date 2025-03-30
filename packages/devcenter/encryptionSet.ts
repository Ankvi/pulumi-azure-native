import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a devcenter encryption set resource.
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export class EncryptionSet extends pulumi.CustomResource {
    /**
     * Get an existing EncryptionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EncryptionSet {
        return new EncryptionSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:EncryptionSet';

    /**
     * Returns true if the given object is an instance of EncryptionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EncryptionSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EncryptionSet.__pulumiType;
    }

    /**
     * Devbox disk encryption enable or disable status. Indicates if Devbox disks encryption using DevCenter CMK is enabled or not.
     */
    public readonly devboxDisksEncryptionEnableStatus!: pulumi.Output<string | undefined>;
    /**
     * Managed identity properties
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    public readonly keyEncryptionKeyUrl!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EncryptionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EncryptionSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.devCenterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devCenterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["devCenterName"] = args ? args.devCenterName : undefined;
            resourceInputs["devboxDisksEncryptionEnableStatus"] = args ? args.devboxDisksEncryptionEnableStatus : undefined;
            resourceInputs["encryptionSetName"] = args ? args.encryptionSetName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyEncryptionKeyUrl"] = args ? args.keyEncryptionKeyUrl : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["devboxDisksEncryptionEnableStatus"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyEncryptionKeyUrl"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20240501preview:EncryptionSet" }, { type: "azure-native:devcenter/v20240601preview:EncryptionSet" }, { type: "azure-native:devcenter/v20240701preview:EncryptionSet" }, { type: "azure-native:devcenter/v20240801preview:EncryptionSet" }, { type: "azure-native:devcenter/v20241001preview:EncryptionSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EncryptionSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EncryptionSet resource.
 */
export interface EncryptionSetArgs {
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * Devbox disk encryption enable or disable status. Indicates if Devbox disks encryption using DevCenter CMK is enabled or not.
     */
    devboxDisksEncryptionEnableStatus?: pulumi.Input<string | types.enums.DevboxDisksEncryptionEnableStatus>;
    /**
     * The name of the devcenter encryption set.
     */
    encryptionSetName?: pulumi.Input<string>;
    /**
     * Managed identity properties
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}