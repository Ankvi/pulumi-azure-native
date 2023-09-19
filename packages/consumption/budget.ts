import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A budget resource.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2019-10-01
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
    public static readonly __pulumiType = 'azure-native:consumption:Budget';

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
     * The total amount of cost to track with the budget
     */
    public readonly amount!: pulumi.Output<number>;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The current amount of cost which is being tracked for a budget.
     */
    public /*out*/ readonly currentSpend!: pulumi.Output<types.outputs.CurrentSpendResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     */
    public readonly filter!: pulumi.Output<types.outputs.BudgetFilterResponse | undefined>;
    /**
     * The forecasted cost which is being tracked for a budget.
     */
    public /*out*/ readonly forecastSpend!: pulumi.Output<types.outputs.ForecastSpendResponse>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    public readonly notifications!: pulumi.Output<{[key: string]: types.outputs.NotificationResponse} | undefined>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. BillingMonth, BillingQuarter, and BillingAnnual are only supported by WD customers
     */
    public readonly timeGrain!: pulumi.Output<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
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
            if ((!args || args.amount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'amount'");
            }
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
            resourceInputs["currentSpend"] = undefined /*out*/;
            resourceInputs["forecastSpend"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["amount"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:consumption/v20190101:Budget" }, { type: "azure-native:consumption/v20190401preview:Budget" }, { type: "azure-native:consumption/v20190501:Budget" }, { type: "azure-native:consumption/v20190501preview:Budget" }, { type: "azure-native:consumption/v20190601:Budget" }, { type: "azure-native:consumption/v20191001:Budget" }, { type: "azure-native:consumption/v20191101:Budget" }, { type: "azure-native:consumption/v20210501:Budget" }, { type: "azure-native:consumption/v20211001:Budget" }, { type: "azure-native:consumption/v20220901:Budget" }, { type: "azure-native:consumption/v20230301:Budget" }, { type: "azure-native:consumption/v20230501:Budget" }, { type: "azure-native:consumption/v20231101:Budget" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Budget.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Budget resource.
 */
export interface BudgetArgs {
    /**
     * The total amount of cost to track with the budget
     */
    amount: pulumi.Input<number>;
    /**
     * Budget Name.
     */
    budgetName?: pulumi.Input<string>;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    category: pulumi.Input<string | types.enums.CategoryType>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    eTag?: pulumi.Input<string>;
    /**
     * May be used to filter budgets by user-specified dimensions and/or tags.
     */
    filter?: pulumi.Input<types.inputs.BudgetFilterArgs>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    notifications?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.NotificationArgs>}>;
    /**
     * The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
     */
    scope: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. BillingMonth, BillingQuarter, and BillingAnnual are only supported by WD customers
     */
    timeGrain: pulumi.Input<string | types.enums.TimeGrainType>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than twelve months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    timePeriod: pulumi.Input<types.inputs.BudgetTimePeriodArgs>;
}
