import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A MariaDB Server key.
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
    public static readonly __pulumiType = 'azure-native:dbformariadb/v20200101privatepreview:ServerKey';

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
     * The key creation date.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The key type like  'AzureKeyVault'.
     */
    public readonly serverKeyType!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The URI of the key.
     */
    public readonly uri!: pulumi.Output<string | undefined>;

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
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serverKeyType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServerKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerKey resource.
 */
export interface ServerKeyArgs {
    /**
     * The name of the MariaDB Server key to be operated on (updated or created).
     */
    keyName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The key type like  'AzureKeyVault'.
     */
    serverKeyType: pulumi.Input<string | types.enums.ServerKeyType>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The URI of the key.
     */
    uri?: pulumi.Input<string>;
}