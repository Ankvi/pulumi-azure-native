import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The server encryption protector.
 */
export class EncryptionProtector extends pulumi.CustomResource {
    /**
     * Get an existing EncryptionProtector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EncryptionProtector {
        return new EncryptionProtector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:EncryptionProtector';

    /**
     * Returns true if the given object is an instance of EncryptionProtector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EncryptionProtector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EncryptionProtector.__pulumiType;
    }

    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    public readonly autoRotationEnabled!: pulumi.Output<boolean | undefined>;
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
     * The name of the server key.
     */
    public readonly serverKeyName!: pulumi.Output<string | undefined>;
    /**
     * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
     */
    public readonly serverKeyType!: pulumi.Output<string>;
    /**
     * Subregion of the encryption protector.
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
     * The URI of the server key.
     */
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a EncryptionProtector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EncryptionProtectorArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["autoRotationEnabled"] = args ? args.autoRotationEnabled : undefined;
            resourceInputs["encryptionProtectorName"] = args ? args.encryptionProtectorName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverKeyName"] = args ? args.serverKeyName : undefined;
            resourceInputs["serverKeyType"] = args ? args.serverKeyType : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subregion"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        } else {
            resourceInputs["autoRotationEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serverKeyName"] = undefined /*out*/;
            resourceInputs["serverKeyType"] = undefined /*out*/;
            resourceInputs["subregion"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:EncryptionProtector" }, { type: "azure-native:sql/v20150501preview:EncryptionProtector" }, { type: "azure-native:sql/v20200202preview:EncryptionProtector" }, { type: "azure-native:sql/v20200801preview:EncryptionProtector" }, { type: "azure-native:sql/v20201101preview:EncryptionProtector" }, { type: "azure-native:sql/v20210201preview:EncryptionProtector" }, { type: "azure-native:sql/v20210501preview:EncryptionProtector" }, { type: "azure-native:sql/v20210801preview:EncryptionProtector" }, { type: "azure-native:sql/v20211101:EncryptionProtector" }, { type: "azure-native:sql/v20211101preview:EncryptionProtector" }, { type: "azure-native:sql/v20220201preview:EncryptionProtector" }, { type: "azure-native:sql/v20220501preview:EncryptionProtector" }, { type: "azure-native:sql/v20220801preview:EncryptionProtector" }, { type: "azure-native:sql/v20230201preview:EncryptionProtector" }, { type: "azure-native:sql/v20230501preview:EncryptionProtector" }, { type: "azure-native:sql/v20230801preview:EncryptionProtector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EncryptionProtector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EncryptionProtector resource.
 */
export interface EncryptionProtectorArgs {
    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    autoRotationEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the encryption protector to be updated.
     */
    encryptionProtectorName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server key.
     */
    serverKeyName?: pulumi.Input<string>;
    /**
     * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
     */
    serverKeyType: pulumi.Input<string | types.enums.ServerKeyType>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}