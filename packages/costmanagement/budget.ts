import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A budget resource.
 *
 * Uses Azure REST API version 2024-08-01. In version 2.x of the Azure Native provider, it used API version 2023-04-01-preview.
 *
 * Other available API versions: 2019-04-01-preview, 2023-04-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-10-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native costmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Budget extends pulumi.CustomResource {
    /**
     * Get an existing Budget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Budget {
        return new Budget(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement:Budget';

    /**
     * Returns true if the given object is an instance of Budget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Budget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Budget.__pulumiType;
    }

    /**
     * The total amount of cost to track with the budget.
     *
     *  Supported for CategoryType(s): Cost.
     *
     *  Required for CategoryType(s): Cost.
     */
    public readonly amount!: pulumi.Output<number | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The category of the budget.
     * - 'Cost' defines a Budget.
     * - 'ReservationUtilization' defines a Reservation Utilization Alert Rule.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The current amount of cost which is being tracked for a budget.
     *
     *  Supported for CategoryType(s): Cost.
     */
    public /*out*/ readonly currentSpend!: pulumi.Output<types.outputs.CurrentSpendResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    public readonly filter!: pulumi.Output<types.outputs.BudgetFilterResponse | undefined>;
    /**
     * The forecasted cost which is being tracked for a budget.
     *
     *  Supported for CategoryType(s): Cost.
     */
    public /*out*/ readonly forecastSpend!: pulumi.Output<types.outputs.ForecastSpendResponse>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Dictionary of notifications associated with the budget.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     * - Constraints for **CategoryType: Cost** - Budget can have up to 5 notifications with thresholdType: Actual and 5 notifications with thresholdType: Forecasted.
     * - Constraints for **CategoryType: ReservationUtilization** - Only one notification allowed. thresholdType is not applicable.
     */
    public readonly notifications!: pulumi.Output<{[key: string]: types.outputs.NotificationResponse} | undefined>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     *
     * Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Supported timeGrainTypes for **CategoryType: Cost**
     *
     * - Monthly
     * - Quarterly
     * - Annually
     * - BillingMonth*
     * - BillingQuarter*
     * - BillingAnnual*
     *
     *   *only supported for Web Direct customers.
     *
     *  Supported timeGrainTypes for **CategoryType: ReservationUtilization**
     * - Last7Days
     * - Last30Days
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    public readonly timeGrain!: pulumi.Output<string>;
    /**
     * The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    public readonly timePeriod!: pulumi.Output<types.outputs.BudgetTimePeriodResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Budget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.timeGrain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeGrain'");
            }
            if ((!args || args.timePeriod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timePeriod'");
            }
            resourceInputs["amount"] = args ? args.amount : undefined;
            resourceInputs["budgetName"] = args ? args.budgetName : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["timeGrain"] = args ? args.timeGrain : undefined;
            resourceInputs["timePeriod"] = args ? args.timePeriod : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["currentSpend"] = undefined /*out*/;
            resourceInputs["forecastSpend"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["amount"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["currentSpend"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["filter"] = undefined /*out*/;
            resourceInputs["forecastSpend"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["timeGrain"] = undefined /*out*/;
            resourceInputs["timePeriod"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20190401preview:Budget" }, { type: "azure-native:costmanagement/v20230401preview:Budget" }, { type: "azure-native:costmanagement/v20230801:Budget" }, { type: "azure-native:costmanagement/v20230901:Budget" }, { type: "azure-native:costmanagement/v20231101:Budget" }, { type: "azure-native:costmanagement/v20240801:Budget" }, { type: "azure-native:costmanagement/v20241001preview:Budget" }, { type: "azure-native:costmanagement/v20250301:Budget" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Budget.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Budget resource.
 */
export interface BudgetArgs {
    /**
     * The total amount of cost to track with the budget.
     *
     *  Supported for CategoryType(s): Cost.
     *
     *  Required for CategoryType(s): Cost.
     */
    amount?: pulumi.Input<number>;
    /**
     * Budget Name.
     */
    budgetName?: pulumi.Input<string>;
    /**
     * The category of the budget.
     * - 'Cost' defines a Budget.
     * - 'ReservationUtilization' defines a Reservation Utilization Alert Rule.
     */
    category: pulumi.Input<string | types.enums.CategoryType>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    eTag?: pulumi.Input<string>;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     */
    filter?: pulumi.Input<types.inputs.BudgetFilterArgs>;
    /**
     * Dictionary of notifications associated with the budget.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     * - Constraints for **CategoryType: Cost** - Budget can have up to 5 notifications with thresholdType: Actual and 5 notifications with thresholdType: Forecasted.
     * - Constraints for **CategoryType: ReservationUtilization** - Only one notification allowed. thresholdType is not applicable.
     */
    notifications?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.NotificationArgs>}>;
    /**
     * The scope associated with budget operations.
     *
     *  Supported scopes for **CategoryType: Cost**
     *
     *  Azure RBAC Scopes:
     * - '/subscriptions/{subscriptionId}/' for subscription scope
     * - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope
     * - '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope
     *
     *  EA (Enterprise Agreement) Scopes:
     *
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
     *
     *  MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     *
     *  Supported scopes for **CategoryType: ReservationUtilization**
     *
     *  EA (Enterprise Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account Scope
     *
     * MCA (Modern Customer Agreement) Scopes:
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope (non-CSP only)
     * - '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' for customer scope (CSP only)
     */
    scope: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     *
     * Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Supported timeGrainTypes for **CategoryType: Cost**
     *
     * - Monthly
     * - Quarterly
     * - Annually
     * - BillingMonth*
     * - BillingQuarter*
     * - BillingAnnual*
     *
     *   *only supported for Web Direct customers.
     *
     *  Supported timeGrainTypes for **CategoryType: ReservationUtilization**
     * - Last7Days
     * - Last30Days
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    timeGrain: pulumi.Input<string | types.enums.TimeGrainType>;
    /**
     * The time period that defines the active period of the budget. The budget will evaluate data on or after the startDate and will expire on the endDate.
     *
     *  Supported for CategoryType(s): Cost, ReservationUtilization.
     *
     *  Required for CategoryType(s): Cost, ReservationUtilization.
     */
    timePeriod: pulumi.Input<types.inputs.BudgetTimePeriodArgs>;
}