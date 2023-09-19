import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a database transparent data encryption configuration.
 */
export class TransparentDataEncryption extends pulumi.CustomResource {
    /**
     * Get an existing TransparentDataEncryption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TransparentDataEncryption {
        return new TransparentDataEncryption(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:TransparentDataEncryption';

    /**
     * Returns true if the given object is an instance of TransparentDataEncryption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransparentDataEncryption {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransparentDataEncryption.__pulumiType;
    }

    /**
     * Resource location.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the database transparent data encryption.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TransparentDataEncryption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransparentDataEncryptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["transparentDataEncryptionName"] = args ? args.transparentDataEncryptionName : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:TransparentDataEncryption" }, { type: "azure-native:sql/v20200202preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20200801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20201101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210201preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210501preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20211101:TransparentDataEncryption" }, { type: "azure-native:sql/v20211101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220201preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220501preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20221101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20230201preview:TransparentDataEncryption" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TransparentDataEncryption.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TransparentDataEncryption resource.
 */
export interface TransparentDataEncryptionArgs {
    /**
     * The name of the database for which setting the transparent data encryption applies.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The status of the database transparent data encryption.
     */
    status?: pulumi.Input<string | types.enums.TransparentDataEncryptionStatus>;
    /**
     * The name of the transparent data encryption configuration.
     */
    transparentDataEncryptionName?: pulumi.Input<string>;
}
