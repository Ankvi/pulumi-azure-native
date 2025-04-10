import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Access Review History Definition.
 *
 * Uses Azure REST API version 2021-12-01-preview. In version 1.x of the Azure Native provider, it used API version 2021-11-16-preview.
 */
export class AccessReviewHistoryDefinitionById extends pulumi.CustomResource {
    /**
     * Get an existing AccessReviewHistoryDefinitionById resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessReviewHistoryDefinitionById {
        return new AccessReviewHistoryDefinitionById(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:AccessReviewHistoryDefinitionById';

    /**
     * Returns true if the given object is an instance of AccessReviewHistoryDefinitionById.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessReviewHistoryDefinitionById {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessReviewHistoryDefinitionById.__pulumiType;
    }

    /**
     * Date time when history definition was created
     */
    public /*out*/ readonly createdDateTime!: pulumi.Output<string>;
    /**
     * Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
     */
    public readonly decisions!: pulumi.Output<string[] | undefined>;
    /**
     * The display name for the history definition.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    public readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * Set of access review history instances for this history definition.
     */
    public readonly instances!: pulumi.Output<types.outputs.AccessReviewHistoryInstanceResponse[] | undefined>;
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * The access review history definition unique id.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of times to repeat the access review. Required and must be positive if type is numbered.
     */
    public readonly numberOfOccurrences!: pulumi.Output<number | undefined>;
    /**
     * The identity id
     */
    public /*out*/ readonly principalId!: pulumi.Output<string>;
    /**
     * The identity display name
     */
    public /*out*/ readonly principalName!: pulumi.Output<string>;
    /**
     * The identity type : user/servicePrincipal
     */
    public /*out*/ readonly principalType!: pulumi.Output<string>;
    /**
     * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
     */
    public /*out*/ readonly reviewHistoryPeriodEndDateTime!: pulumi.Output<string>;
    /**
     * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
     */
    public /*out*/ readonly reviewHistoryPeriodStartDateTime!: pulumi.Output<string>;
    /**
     * A collection of scopes used when selecting review history data
     */
    public readonly scopes!: pulumi.Output<types.outputs.AccessReviewScopeResponse[] | undefined>;
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    public readonly startDate!: pulumi.Output<string | undefined>;
    /**
     * This read-only field specifies the of the requested review history data. This is either requested, in-progress, done or error.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The resource type.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The user principal name(if valid)
     */
    public /*out*/ readonly userPrincipalName!: pulumi.Output<string>;

    /**
     * Create a AccessReviewHistoryDefinitionById resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccessReviewHistoryDefinitionByIdArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["decisions"] = args ? args.decisions : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["endDate"] = args ? args.endDate : undefined;
            resourceInputs["historyDefinitionId"] = args ? args.historyDefinitionId : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["numberOfOccurrences"] = args ? args.numberOfOccurrences : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodEndDateTime"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodStartDateTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["userPrincipalName"] = undefined /*out*/;
        } else {
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["decisions"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["endDate"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfOccurrences"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodEndDateTime"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodStartDateTime"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userPrincipalName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20211116preview:AccessReviewHistoryDefinitionById" }, { type: "azure-native:authorization/v20211201preview:AccessReviewHistoryDefinitionById" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessReviewHistoryDefinitionById.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessReviewHistoryDefinitionById resource.
 */
export interface AccessReviewHistoryDefinitionByIdArgs {
    /**
     * Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
     */
    decisions?: pulumi.Input<pulumi.Input<string | types.enums.AccessReviewResult>[]>;
    /**
     * The display name for the history definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    endDate?: pulumi.Input<string>;
    /**
     * The id of the access review history definition.
     */
    historyDefinitionId?: pulumi.Input<string>;
    /**
     * Set of access review history instances for this history definition.
     */
    instances?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewHistoryInstanceArgs>[]>;
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    interval?: pulumi.Input<number>;
    /**
     * The number of times to repeat the access review. Required and must be positive if type is numbered.
     */
    numberOfOccurrences?: pulumi.Input<number>;
    /**
     * A collection of scopes used when selecting review history data
     */
    scopes?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewScopeArgs>[]>;
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    startDate?: pulumi.Input<string>;
    /**
     * The recurrence range type. The possible values are: endDate, noEnd, numbered.
     */
    type?: pulumi.Input<string | types.enums.AccessReviewRecurrenceRangeType>;
}