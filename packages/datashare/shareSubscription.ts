import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A share subscription data transfer object.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class ShareSubscription extends pulumi.CustomResource {
    /**
     * Get an existing ShareSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ShareSubscription {
        return new ShareSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:ShareSubscription';

    /**
     * Returns true if the given object is an instance of ShareSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ShareSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ShareSubscription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Time at which the share subscription was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The expiration date of the share subscription.
     */
    public readonly expirationDate!: pulumi.Output<string | undefined>;
    /**
     * The invitation id.
     */
    public readonly invitationId!: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Email of the provider who created the resource
     */
    public /*out*/ readonly providerEmail!: pulumi.Output<string>;
    /**
     * Name of the provider who created the resource
     */
    public /*out*/ readonly providerName!: pulumi.Output<string>;
    /**
     * Tenant name of the provider who created the resource
     */
    public /*out*/ readonly providerTenantName!: pulumi.Output<string>;
    /**
     * Provisioning state of the share subscription
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Description of share
     */
    public /*out*/ readonly shareDescription!: pulumi.Output<string>;
    /**
     * Kind of share
     */
    public /*out*/ readonly shareKind!: pulumi.Output<string>;
    /**
     * Name of the share
     */
    public /*out*/ readonly shareName!: pulumi.Output<string>;
    /**
     * Gets the current status of share subscription.
     */
    public /*out*/ readonly shareSubscriptionStatus!: pulumi.Output<string>;
    /**
     * Terms of a share
     */
    public /*out*/ readonly shareTerms!: pulumi.Output<string>;
    /**
     * Source share location.
     */
    public readonly sourceShareLocation!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    public /*out*/ readonly userEmail!: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a ShareSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.invitationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'invitationId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceShareLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceShareLocation'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["invitationId"] = args ? args.invitationId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareSubscriptionName"] = args ? args.shareSubscriptionName : undefined;
            resourceInputs["sourceShareLocation"] = args ? args.sourceShareLocation : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerEmail"] = undefined /*out*/;
            resourceInputs["providerName"] = undefined /*out*/;
            resourceInputs["providerTenantName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["shareDescription"] = undefined /*out*/;
            resourceInputs["shareKind"] = undefined /*out*/;
            resourceInputs["shareName"] = undefined /*out*/;
            resourceInputs["shareSubscriptionStatus"] = undefined /*out*/;
            resourceInputs["shareTerms"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["invitationId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerEmail"] = undefined /*out*/;
            resourceInputs["providerName"] = undefined /*out*/;
            resourceInputs["providerTenantName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["shareDescription"] = undefined /*out*/;
            resourceInputs["shareKind"] = undefined /*out*/;
            resourceInputs["shareName"] = undefined /*out*/;
            resourceInputs["shareSubscriptionStatus"] = undefined /*out*/;
            resourceInputs["shareTerms"] = undefined /*out*/;
            resourceInputs["sourceShareLocation"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEmail"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:ShareSubscription" }, { type: "azure-native:datashare/v20191101:ShareSubscription" }, { type: "azure-native:datashare/v20200901:ShareSubscription" }, { type: "azure-native:datashare/v20201001preview:ShareSubscription" }, { type: "azure-native:datashare/v20210801:ShareSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ShareSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ShareSubscription resource.
 */
export interface ShareSubscriptionArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The expiration date of the share subscription.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The invitation id.
     */
    invitationId: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName?: pulumi.Input<string>;
    /**
     * Source share location.
     */
    sourceShareLocation: pulumi.Input<string>;
}