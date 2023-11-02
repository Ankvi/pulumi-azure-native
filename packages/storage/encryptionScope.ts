import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Encryption Scope resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01.
 *
 * Other available API versions: 2023-01-01.
 */
export class EncryptionScope extends pulumi.CustomResource {
    /**
     * Get an existing EncryptionScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EncryptionScope {
        return new EncryptionScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:EncryptionScope';

    /**
     * Returns true if the given object is an instance of EncryptionScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EncryptionScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EncryptionScope.__pulumiType;
    }

    /**
     * Gets the creation date and time of the encryption scope in UTC.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
     */
    public readonly keyVaultProperties!: pulumi.Output<types.outputs.EncryptionScopeKeyVaultPropertiesResponse | undefined>;
    /**
     * Gets the last modification date and time of the encryption scope in UTC.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
     */
    public readonly requireInfrastructureEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EncryptionScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EncryptionScopeArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["encryptionScopeName"] = args ? args.encryptionScopeName : undefined;
            resourceInputs["keyVaultProperties"] = args ? args.keyVaultProperties : undefined;
            resourceInputs["requireInfrastructureEncryption"] = args ? args.requireInfrastructureEncryption : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["keyVaultProperties"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requireInfrastructureEncryption"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20190601:EncryptionScope" }, { type: "azure-native:storage/v20200801preview:EncryptionScope" }, { type: "azure-native:storage/v20210101:EncryptionScope" }, { type: "azure-native:storage/v20210201:EncryptionScope" }, { type: "azure-native:storage/v20210401:EncryptionScope" }, { type: "azure-native:storage/v20210601:EncryptionScope" }, { type: "azure-native:storage/v20210801:EncryptionScope" }, { type: "azure-native:storage/v20210901:EncryptionScope" }, { type: "azure-native:storage/v20220501:EncryptionScope" }, { type: "azure-native:storage/v20220901:EncryptionScope" }, { type: "azure-native:storage/v20230101:EncryptionScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EncryptionScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EncryptionScope resource.
 */
export interface EncryptionScopeArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    encryptionScopeName?: pulumi.Input<string>;
    /**
     * The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.
     */
    keyVaultProperties?: pulumi.Input<types.inputs.EncryptionScopeKeyVaultPropertiesArgs>;
    /**
     * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
     */
    requireInfrastructureEncryption?: pulumi.Input<boolean>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.
     */
    source?: pulumi.Input<string | types.enums.EncryptionScopeSource>;
    /**
     * The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.
     */
    state?: pulumi.Input<string | types.enums.EncryptionScopeState>;
}
