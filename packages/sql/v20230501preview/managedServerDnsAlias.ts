import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A managed server DNS alias.
 */
export class ManagedServerDnsAlias extends pulumi.CustomResource {
    /**
     * Get an existing ManagedServerDnsAlias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedServerDnsAlias {
        return new ManagedServerDnsAlias(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:ManagedServerDnsAlias';

    /**
     * Returns true if the given object is an instance of ManagedServerDnsAlias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedServerDnsAlias {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedServerDnsAlias.__pulumiType;
    }

    /**
     * The fully qualified DNS record for managed server alias
     */
    public /*out*/ readonly azureDnsRecord!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The fully qualified public DNS record for managed server alias
     */
    public /*out*/ readonly publicAzureDnsRecord!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedServerDnsAlias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedServerDnsAliasArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["createDnsRecord"] = (args ? args.createDnsRecord : undefined) ?? true;
            resourceInputs["dnsAliasName"] = args ? args.dnsAliasName : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureDnsRecord"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicAzureDnsRecord"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureDnsRecord"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicAzureDnsRecord"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20211101:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20211101preview:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20220201preview:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20220501preview:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20220801preview:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20221101preview:ManagedServerDnsAlias" }, { type: "azure-native:sql/v20230201preview:ManagedServerDnsAlias" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedServerDnsAlias.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedServerDnsAlias resource.
 */
export interface ManagedServerDnsAliasArgs {
    /**
     * Whether or not DNS record should be created for this alias.
     */
    createDnsRecord?: pulumi.Input<boolean>;
    dnsAliasName?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
