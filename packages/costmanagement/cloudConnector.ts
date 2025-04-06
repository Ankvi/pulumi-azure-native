import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Connector model definition
 *
 * Uses Azure REST API version 2019-03-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-03-01-preview.
 */
export class CloudConnector extends pulumi.CustomResource {
    /**
     * Get an existing CloudConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudConnector {
        return new CloudConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:CloudConnector';

    /**
     * Returns true if the given object is an instance of CloudConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudConnector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Connector billing model
     */
    public readonly billingModel!: pulumi.Output<string | undefined>;
    /**
     * Collection information
     */
    public /*out*/ readonly collectionInfo!: pulumi.Output<types.outputs.ConnectorCollectionInfoResponse>;
    /**
     * Connector definition creation datetime
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    public readonly credentialsKey!: pulumi.Output<string | undefined>;
    /**
     * Number of days remaining of trial
     */
    public /*out*/ readonly daysTrialRemaining!: pulumi.Output<number>;
    /**
     * Default ManagementGroupId
     */
    public readonly defaultManagementGroupId!: pulumi.Output<string | undefined>;
    /**
     * Connector DisplayName
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Associated ExternalBillingAccountId
     */
    public /*out*/ readonly externalBillingAccountId!: pulumi.Output<string>;
    /**
     * Connector kind (eg aws)
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Connector last modified datetime
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * Connector name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The display name of the providerBillingAccountId as defined on the external provider
     */
    public /*out*/ readonly providerBillingAccountDisplayName!: pulumi.Output<string>;
    /**
     * Connector providerBillingAccountId, determined from credentials (eg AWS Consolidated account number)
     */
    public /*out*/ readonly providerBillingAccountId!: pulumi.Output<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    public readonly reportId!: pulumi.Output<string | undefined>;
    /**
     * Connector status
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Billing SubscriptionId
     */
    public readonly subscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Connector type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CloudConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["billingModel"] = args ? args.billingModel : undefined;
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["credentialsKey"] = args ? args.credentialsKey : undefined;
            resourceInputs["credentialsSecret"] = args ? args.credentialsSecret : undefined;
            resourceInputs["defaultManagementGroupId"] = args ? args.defaultManagementGroupId : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["reportId"] = args ? args.reportId : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["collectionInfo"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["daysTrialRemaining"] = undefined /*out*/;
            resourceInputs["externalBillingAccountId"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerBillingAccountDisplayName"] = undefined /*out*/;
            resourceInputs["providerBillingAccountId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingModel"] = undefined /*out*/;
            resourceInputs["collectionInfo"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["credentialsKey"] = undefined /*out*/;
            resourceInputs["daysTrialRemaining"] = undefined /*out*/;
            resourceInputs["defaultManagementGroupId"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalBillingAccountId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerBillingAccountDisplayName"] = undefined /*out*/;
            resourceInputs["providerBillingAccountId"] = undefined /*out*/;
            resourceInputs["reportId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20180801preview:CloudConnector" }, { type: "azure-native:costmanagement/v20180801preview:Connector" }, { type: "azure-native:costmanagement/v20190301preview:CloudConnector" }, { type: "azure-native:costmanagement:Connector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudConnector resource.
 */
export interface CloudConnectorArgs {
    /**
     * Connector billing model
     */
    billingModel?: pulumi.Input<string | types.enums.ConnectorBillingModel>;
    /**
     * Connector Name.
     */
    connectorName?: pulumi.Input<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    credentialsKey?: pulumi.Input<string>;
    /**
     * Credentials secret (eg AWS ExternalId)
     */
    credentialsSecret?: pulumi.Input<string>;
    /**
     * Default ManagementGroupId
     */
    defaultManagementGroupId?: pulumi.Input<string>;
    /**
     * Connector DisplayName
     */
    displayName?: pulumi.Input<string>;
    /**
     * Connector kind (eg aws)
     */
    kind?: pulumi.Input<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    reportId?: pulumi.Input<string>;
    /**
     * Billing SubscriptionId
     */
    subscriptionId?: pulumi.Input<string>;
}