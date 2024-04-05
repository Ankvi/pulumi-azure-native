import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Data Lake Store trusted identity provider information.
 */
export class TrustedIdProvider extends pulumi.CustomResource {
    /**
     * Get an existing TrustedIdProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrustedIdProvider {
        return new TrustedIdProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datalakestore/v20161101:TrustedIdProvider';

    /**
     * Returns true if the given object is an instance of TrustedIdProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrustedIdProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrustedIdProvider.__pulumiType;
    }

    /**
     * The URL of this trusted identity provider.
     */
    public readonly idProvider!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TrustedIdProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrustedIdProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.idProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idProvider'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["idProvider"] = args ? args.idProvider : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["trustedIdProviderName"] = args ? args.trustedIdProviderName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["idProvider"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datalakestore:TrustedIdProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TrustedIdProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TrustedIdProvider resource.
 */
export interface TrustedIdProviderArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The URL of this trusted identity provider.
     */
    idProvider: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the trusted identity provider. This is used for differentiation of providers in the account.
     */
    trustedIdProviderName?: pulumi.Input<string>;
}