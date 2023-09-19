import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A managed instance key.
 */
export class ManagedInstanceKey extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstanceKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedInstanceKey {
        return new ManagedInstanceKey(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:ManagedInstanceKey';

    /**
     * Returns true if the given object is an instance of ManagedInstanceKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedInstanceKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedInstanceKey.__pulumiType;
    }

    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    public /*out*/ readonly autoRotationEnabled!: pulumi.Output<boolean>;
    /**
     * The key creation date.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Thumbprint of the key.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedInstanceKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstanceKeyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverKeyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverKeyType'");
            }
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverKeyType"] = args ? args.serverKeyType : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["autoRotationEnabled"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoRotationEnabled"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ManagedInstanceKey" }, { type: "azure-native:sql/v20171001preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20200202preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20200801preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20201101preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20210201preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20210501preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20210801preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20211101:ManagedInstanceKey" }, { type: "azure-native:sql/v20211101preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20220201preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20220501preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20220801preview:ManagedInstanceKey" }, { type: "azure-native:sql/v20230201preview:ManagedInstanceKey" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedInstanceKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedInstanceKey resource.
 */
export interface ManagedInstanceKeyArgs {
    /**
     * The name of the managed instance key to be operated on (updated or created).
     */
    keyName?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The key type like 'ServiceManaged', 'AzureKeyVault'.
     */
    serverKeyType: pulumi.Input<string | types.enums.ServerKeyType>;
    /**
     * The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
     */
    uri?: pulumi.Input<string>;
}
