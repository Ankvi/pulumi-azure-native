import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A logical database transparent data encryption state.
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
    public static readonly __pulumiType = 'azure-native:sql/v20211101:TransparentDataEncryption';

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
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the state of the transparent data encryption.
     */
    public readonly state!: pulumi.Output<string>;
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
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tdeName"] = args ? args.tdeName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:TransparentDataEncryption" }, { type: "azure-native:sql/v20140401:TransparentDataEncryption" }, { type: "azure-native:sql/v20200202preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20200801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20201101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210201preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210501preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20210801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20211101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220201preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220501preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20220801preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20221101preview:TransparentDataEncryption" }, { type: "azure-native:sql/v20230201preview:TransparentDataEncryption" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TransparentDataEncryption.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TransparentDataEncryption resource.
 */
export interface TransparentDataEncryptionArgs {
    /**
     * The name of the logical database for which the security alert policy is defined.
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
     * Specifies the state of the transparent data encryption.
     */
    state: pulumi.Input<types.enums.TransparentDataEncryptionState>;
    /**
     * The name of the transparent data encryption configuration.
     */
    tdeName?: pulumi.Input<string>;
}
