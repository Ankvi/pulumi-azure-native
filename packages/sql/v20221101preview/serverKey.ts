import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A server key.
 */
export class ServerKey extends pulumi.CustomResource {
    /**
     * Get an existing ServerKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerKey {
        return new ServerKey(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:ServerKey';

    /**
     * Returns true if the given object is an instance of ServerKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerKey.__pulumiType;
    }

    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    public /*out*/ readonly autoRotationEnabled!: pulumi.Output<boolean>;
    /**
     * The server key creation date.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Subregion of the server key.
     */
    public /*out*/ readonly subregion!: pulumi.Output<string>;
    /**
     * Thumbprint of the server key.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerKeyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverKeyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverKeyType'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverKeyType"] = args ? args.serverKeyType : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["autoRotationEnabled"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subregion"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoRotationEnabled"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subregion"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ServerKey" }, { type: "azure-native:sql/v20150501preview:ServerKey" }, { type: "azure-native:sql/v20200202preview:ServerKey" }, { type: "azure-native:sql/v20200801preview:ServerKey" }, { type: "azure-native:sql/v20201101preview:ServerKey" }, { type: "azure-native:sql/v20210201preview:ServerKey" }, { type: "azure-native:sql/v20210501preview:ServerKey" }, { type: "azure-native:sql/v20210801preview:ServerKey" }, { type: "azure-native:sql/v20211101:ServerKey" }, { type: "azure-native:sql/v20211101preview:ServerKey" }, { type: "azure-native:sql/v20220201preview:ServerKey" }, { type: "azure-native:sql/v20220501preview:ServerKey" }, { type: "azure-native:sql/v20220801preview:ServerKey" }, { type: "azure-native:sql/v20230201preview:ServerKey" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerKey resource.
 */
export interface ServerKeyArgs {
    /**
     * The name of the server key to be operated on (updated or created). The key name is required to be in the format of 'vault_key_version'. For example, if the keyId is https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion, then the server key name should be formatted as: YourVaultName_YourKeyName_YourKeyVersion
     */
    keyName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The server key type like 'ServiceManaged', 'AzureKeyVault'.
     */
    serverKeyType: pulumi.Input<string | types.enums.v20221101preview.ServerKeyType>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required. The AKV URI is required to be in this format: 'https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion'
     */
    uri?: pulumi.Input<string>;
}
