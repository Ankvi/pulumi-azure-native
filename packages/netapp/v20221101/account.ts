import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NetApp account resource
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp/v20221101:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * Active Directories
     */
    public readonly activeDirectories!: pulumi.Output<types.outputs.ActiveDirectoryResponse[] | undefined>;
    /**
     * Shows the status of disableShowmount for all volumes under the subscription, null equals false
     */
    public /*out*/ readonly disableShowmount!: pulumi.Output<boolean>;
    /**
     * Encryption settings
     */
    public readonly encryption!: pulumi.Output<types.outputs.AccountEncryptionResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The identity used for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
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
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["activeDirectories"] = args ? args.activeDirectories : undefined;
            resourceInputs["encryption"] = args ? (args.encryption ? pulumi.output(args.encryption).apply(types.inputs.accountEncryptionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["disableShowmount"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activeDirectories"] = undefined /*out*/;
            resourceInputs["disableShowmount"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp:Account" }, { type: "azure-native:netapp/v20170815:Account" }, { type: "azure-native:netapp/v20190501:Account" }, { type: "azure-native:netapp/v20190601:Account" }, { type: "azure-native:netapp/v20190701:Account" }, { type: "azure-native:netapp/v20190801:Account" }, { type: "azure-native:netapp/v20191001:Account" }, { type: "azure-native:netapp/v20191101:Account" }, { type: "azure-native:netapp/v20200201:Account" }, { type: "azure-native:netapp/v20200301:Account" }, { type: "azure-native:netapp/v20200501:Account" }, { type: "azure-native:netapp/v20200601:Account" }, { type: "azure-native:netapp/v20200701:Account" }, { type: "azure-native:netapp/v20200801:Account" }, { type: "azure-native:netapp/v20200901:Account" }, { type: "azure-native:netapp/v20201101:Account" }, { type: "azure-native:netapp/v20201201:Account" }, { type: "azure-native:netapp/v20210201:Account" }, { type: "azure-native:netapp/v20210401:Account" }, { type: "azure-native:netapp/v20210401preview:Account" }, { type: "azure-native:netapp/v20210601:Account" }, { type: "azure-native:netapp/v20210801:Account" }, { type: "azure-native:netapp/v20211001:Account" }, { type: "azure-native:netapp/v20220101:Account" }, { type: "azure-native:netapp/v20220301:Account" }, { type: "azure-native:netapp/v20220501:Account" }, { type: "azure-native:netapp/v20220901:Account" }, { type: "azure-native:netapp/v20221101preview:Account" }, { type: "azure-native:netapp/v20230501:Account" }, { type: "azure-native:netapp/v20230501preview:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the NetApp account
     */
    accountName?: pulumi.Input<string>;
    /**
     * Active Directories
     */
    activeDirectories?: pulumi.Input<pulumi.Input<types.inputs.ActiveDirectoryArgs>[]>;
    /**
     * Encryption settings
     */
    encryption?: pulumi.Input<types.inputs.AccountEncryptionArgs>;
    /**
     * The identity used for the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
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
