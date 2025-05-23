import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Properties that define a Continuous Export configuration.
 *
 * Uses Azure REST API version 2015-05-01.
 */
export class ExportConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ExportConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExportConfiguration {
        return new ExportConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:applicationinsights:ExportConfiguration';

    /**
     * Returns true if the given object is an instance of ExportConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExportConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExportConfiguration.__pulumiType;
    }

    /**
     * The name of the Application Insights component.
     */
    public /*out*/ readonly applicationName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the destination storage container.
     */
    public /*out*/ readonly containerName!: pulumi.Output<string>;
    /**
     * The name of destination account.
     */
    public readonly destinationAccountId!: pulumi.Output<string>;
    /**
     * The destination account location ID.
     */
    public readonly destinationStorageLocationId!: pulumi.Output<string>;
    /**
     * The destination storage account subscription ID.
     */
    public readonly destinationStorageSubscriptionId!: pulumi.Output<string>;
    /**
     * The destination type.
     */
    public readonly destinationType!: pulumi.Output<string>;
    /**
     * The unique ID of the export configuration inside an Application Insights component. It is auto generated when the Continuous Export configuration is created.
     */
    public readonly exportId!: pulumi.Output<string>;
    /**
     * This indicates current Continuous Export configuration status. The possible values are 'Preparing', 'Success', 'Failure'.
     */
    public /*out*/ readonly exportStatus!: pulumi.Output<string>;
    /**
     * The instrumentation key of the Application Insights component.
     */
    public /*out*/ readonly instrumentationKey!: pulumi.Output<string>;
    /**
     * This will be 'true' if the Continuous Export configuration is enabled, otherwise it will be 'false'.
     */
    public /*out*/ readonly isUserEnabled!: pulumi.Output<string>;
    /**
     * The last time the Continuous Export configuration started failing.
     */
    public /*out*/ readonly lastGapTime!: pulumi.Output<string>;
    /**
     * The last time data was successfully delivered to the destination storage container for this Continuous Export configuration.
     */
    public /*out*/ readonly lastSuccessTime!: pulumi.Output<string>;
    /**
     * Last time the Continuous Export configuration was updated.
     */
    public /*out*/ readonly lastUserUpdate!: pulumi.Output<string>;
    /**
     * Deprecated
     */
    public readonly notificationQueueEnabled!: pulumi.Output<string | undefined>;
    /**
     * This is the reason the Continuous Export configuration started failing. It can be 'AzureStorageNotFound' or 'AzureStorageAccessDenied'.
     */
    public /*out*/ readonly permanentErrorReason!: pulumi.Output<string>;
    /**
     * This comma separated list of document types that will be exported. The possible values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    public readonly recordTypes!: pulumi.Output<string | undefined>;
    /**
     * The resource group of the Application Insights component.
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * The name of the destination storage account.
     */
    public /*out*/ readonly storageName!: pulumi.Output<string>;
    /**
     * The subscription of the Application Insights component.
     */
    public /*out*/ readonly subscriptionId!: pulumi.Output<string>;

    /**
     * Create a ExportConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["destinationAccountId"] = args ? args.destinationAccountId : undefined;
            resourceInputs["destinationAddress"] = args ? args.destinationAddress : undefined;
            resourceInputs["destinationStorageLocationId"] = args ? args.destinationStorageLocationId : undefined;
            resourceInputs["destinationStorageSubscriptionId"] = args ? args.destinationStorageSubscriptionId : undefined;
            resourceInputs["destinationType"] = args ? args.destinationType : undefined;
            resourceInputs["exportId"] = args ? args.exportId : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["notificationQueueEnabled"] = args ? args.notificationQueueEnabled : undefined;
            resourceInputs["notificationQueueUri"] = args ? args.notificationQueueUri : undefined;
            resourceInputs["recordTypes"] = args ? args.recordTypes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["applicationName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["exportStatus"] = undefined /*out*/;
            resourceInputs["instrumentationKey"] = undefined /*out*/;
            resourceInputs["isUserEnabled"] = undefined /*out*/;
            resourceInputs["lastGapTime"] = undefined /*out*/;
            resourceInputs["lastSuccessTime"] = undefined /*out*/;
            resourceInputs["lastUserUpdate"] = undefined /*out*/;
            resourceInputs["permanentErrorReason"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["storageName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
        } else {
            resourceInputs["applicationName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["destinationAccountId"] = undefined /*out*/;
            resourceInputs["destinationStorageLocationId"] = undefined /*out*/;
            resourceInputs["destinationStorageSubscriptionId"] = undefined /*out*/;
            resourceInputs["destinationType"] = undefined /*out*/;
            resourceInputs["exportId"] = undefined /*out*/;
            resourceInputs["exportStatus"] = undefined /*out*/;
            resourceInputs["instrumentationKey"] = undefined /*out*/;
            resourceInputs["isUserEnabled"] = undefined /*out*/;
            resourceInputs["lastGapTime"] = undefined /*out*/;
            resourceInputs["lastSuccessTime"] = undefined /*out*/;
            resourceInputs["lastUserUpdate"] = undefined /*out*/;
            resourceInputs["notificationQueueEnabled"] = undefined /*out*/;
            resourceInputs["permanentErrorReason"] = undefined /*out*/;
            resourceInputs["recordTypes"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["storageName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:applicationinsights/v20150501:ExportConfiguration" }, { type: "azure-native:insights/v20150501:ExportConfiguration" }, { type: "azure-native:insights:ExportConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExportConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExportConfiguration resource.
 */
export interface ExportConfigurationArgs {
    /**
     * The name of destination storage account.
     */
    destinationAccountId?: pulumi.Input<string>;
    /**
     * The SAS URL for the destination storage container. It must grant write permission.
     */
    destinationAddress?: pulumi.Input<string>;
    /**
     * The location ID of the destination storage container.
     */
    destinationStorageLocationId?: pulumi.Input<string>;
    /**
     * The subscription ID of the destination storage container.
     */
    destinationStorageSubscriptionId?: pulumi.Input<string>;
    /**
     * The Continuous Export destination type. This has to be 'Blob'.
     */
    destinationType?: pulumi.Input<string>;
    /**
     * The Continuous Export configuration ID. This is unique within a Application Insights component.
     */
    exportId?: pulumi.Input<string>;
    /**
     * Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'.
     */
    isEnabled?: pulumi.Input<string>;
    /**
     * Deprecated
     */
    notificationQueueEnabled?: pulumi.Input<string>;
    /**
     * Deprecated
     */
    notificationQueueUri?: pulumi.Input<string>;
    /**
     * The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'.
     */
    recordTypes?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}