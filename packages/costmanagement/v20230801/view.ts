import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * States and configurations of Cost Analysis.
 */
export class View extends pulumi.CustomResource {
    /**
     * Get an existing View resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): View {
        return new View(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement/v20230801:View';

    /**
     * Returns true if the given object is an instance of View.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is View {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === View.__pulumiType;
    }

    /**
     * Show costs accumulated over time.
     */
    public readonly accumulated!: pulumi.Output<string | undefined>;
    /**
     * Chart type of the main view in Cost Analysis. Required.
     */
    public readonly chart!: pulumi.Output<string | undefined>;
    /**
     * Date the user created this view.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Currency of the current view.
     */
    public /*out*/ readonly currency!: pulumi.Output<string>;
    /**
     * Has definition for data in this report config.
     */
    public readonly dataSet!: pulumi.Output<types.outputs.ReportConfigDatasetResponse | undefined>;
    /**
     * Date range of the current view.
     */
    public readonly dateRange!: pulumi.Output<string | undefined>;
    /**
     * User input name of the view. Required.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * If true, report includes monetary commitment.
     */
    public readonly includeMonetaryCommitment!: pulumi.Output<boolean | undefined>;
    /**
     * List of KPIs to show in Cost Analysis UI.
     */
    public readonly kpis!: pulumi.Output<types.outputs.KpiPropertiesResponse[] | undefined>;
    /**
     * Metric to use when displaying costs.
     */
    public readonly metric!: pulumi.Output<string | undefined>;
    /**
     * Date when the user last modified this view.
     */
    public readonly modifiedOn!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Configuration of 3 sub-views in the Cost Analysis UI.
     */
    public readonly pivots!: pulumi.Output<types.outputs.PivotPropertiesResponse[] | undefined>;
    /**
     * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Has time period for pulling data for the report.
     */
    public readonly timePeriod!: pulumi.Output<types.outputs.ReportConfigTimePeriodResponse | undefined>;
    /**
     * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
     */
    public readonly timeframe!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a View resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.timeframe === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeframe'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accumulated"] = args ? args.accumulated : undefined;
            resourceInputs["chart"] = args ? args.chart : undefined;
            resourceInputs["dataSet"] = args ? args.dataSet : undefined;
            resourceInputs["dateRange"] = args ? args.dateRange : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["includeMonetaryCommitment"] = args ? args.includeMonetaryCommitment : undefined;
            resourceInputs["kpis"] = args ? args.kpis : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["modifiedOn"] = args ? args.modifiedOn : undefined;
            resourceInputs["pivots"] = args ? args.pivots : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["timePeriod"] = args ? args.timePeriod : undefined;
            resourceInputs["timeframe"] = args ? args.timeframe : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["viewName"] = args ? args.viewName : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        } else {
            resourceInputs["accumulated"] = undefined /*out*/;
            resourceInputs["chart"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["dataSet"] = undefined /*out*/;
            resourceInputs["dateRange"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["includeMonetaryCommitment"] = undefined /*out*/;
            resourceInputs["kpis"] = undefined /*out*/;
            resourceInputs["metric"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pivots"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["timePeriod"] = undefined /*out*/;
            resourceInputs["timeframe"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement:View" }, { type: "azure-native:costmanagement/v20190401preview:View" }, { type: "azure-native:costmanagement/v20191101:View" }, { type: "azure-native:costmanagement/v20200601:View" }, { type: "azure-native:costmanagement/v20211001:View" }, { type: "azure-native:costmanagement/v20220801preview:View" }, { type: "azure-native:costmanagement/v20221001:View" }, { type: "azure-native:costmanagement/v20221001preview:View" }, { type: "azure-native:costmanagement/v20221005preview:View" }, { type: "azure-native:costmanagement/v20230301:View" }, { type: "azure-native:costmanagement/v20230401preview:View" }, { type: "azure-native:costmanagement/v20230901:View" }, { type: "azure-native:costmanagement/v20231101:View" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(View.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a View resource.
 */
export interface ViewArgs {
    /**
     * Show costs accumulated over time.
     */
    accumulated?: pulumi.Input<string | types.enums.AccumulatedType>;
    /**
     * Chart type of the main view in Cost Analysis. Required.
     */
    chart?: pulumi.Input<string | types.enums.ChartType>;
    /**
     * Has definition for data in this report config.
     */
    dataSet?: pulumi.Input<types.inputs.ReportConfigDatasetArgs>;
    /**
     * Date range of the current view.
     */
    dateRange?: pulumi.Input<string>;
    /**
     * User input name of the view. Required.
     */
    displayName?: pulumi.Input<string>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    eTag?: pulumi.Input<string>;
    /**
     * If true, report includes monetary commitment.
     */
    includeMonetaryCommitment?: pulumi.Input<boolean>;
    /**
     * List of KPIs to show in Cost Analysis UI.
     */
    kpis?: pulumi.Input<pulumi.Input<types.inputs.KpiPropertiesArgs>[]>;
    /**
     * Metric to use when displaying costs.
     */
    metric?: pulumi.Input<string | types.enums.MetricType>;
    /**
     * Date when the user last modified this view.
     */
    modifiedOn?: pulumi.Input<string>;
    /**
     * Configuration of 3 sub-views in the Cost Analysis UI.
     */
    pivots?: pulumi.Input<pulumi.Input<types.inputs.PivotPropertiesArgs>[]>;
    /**
     * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    scope?: pulumi.Input<string>;
    /**
     * Has time period for pulling data for the report.
     */
    timePeriod?: pulumi.Input<types.inputs.ReportConfigTimePeriodArgs>;
    /**
     * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
     */
    timeframe: pulumi.Input<string | types.enums.ReportTimeframeType>;
    /**
     * The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
     */
    type: pulumi.Input<string | types.enums.ReportType>;
    /**
     * View name
     */
    viewName?: pulumi.Input<string>;
}