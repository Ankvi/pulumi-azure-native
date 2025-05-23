import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Access Review History Definition.
 *
 * Uses Azure REST API version 2021-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-12-01-preview.
 */
export class ScopeAccessReviewHistoryDefinitionById extends pulumi.CustomResource {
    /**
     * Get an existing ScopeAccessReviewHistoryDefinitionById resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScopeAccessReviewHistoryDefinitionById {
        return new ScopeAccessReviewHistoryDefinitionById(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:ScopeAccessReviewHistoryDefinitionById';

    /**
     * Returns true if the given object is an instance of ScopeAccessReviewHistoryDefinitionById.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScopeAccessReviewHistoryDefinitionById {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScopeAccessReviewHistoryDefinitionById.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Access Review History Definition recurrence settings.
     */
    public readonly range!: pulumi.Output<types.outputs.AccessReviewRecurrenceRangeResponse | undefined>;
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
     * Create a ScopeAccessReviewHistoryDefinitionById resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScopeAccessReviewHistoryDefinitionByIdArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["decisions"] = args ? args.decisions : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["historyDefinitionId"] = args ? args.historyDefinitionId : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["range"] = args ? args.range : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["decisions"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["range"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodEndDateTime"] = undefined /*out*/;
            resourceInputs["reviewHistoryPeriodStartDateTime"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userPrincipalName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20211201preview:ScopeAccessReviewHistoryDefinitionById" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScopeAccessReviewHistoryDefinitionById.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScopeAccessReviewHistoryDefinitionById resource.
 */
export interface ScopeAccessReviewHistoryDefinitionByIdArgs {
    /**
     * Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
     */
    decisions?: pulumi.Input<pulumi.Input<string | types.enums.AccessReviewResult>[]>;
    /**
     * The display name for the history definition.
     */
    displayName?: pulumi.Input<string>;
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
     * Access Review History Definition recurrence settings.
     */
    range?: pulumi.Input<types.inputs.AccessReviewRecurrenceRangeArgs>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
    /**
     * A collection of scopes used when selecting review history data
     */
    scopes?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewScopeArgs>[]>;
    /**
     * The recurrence type : weekly, monthly, etc.
     */
    type?: pulumi.Input<string | types.enums.AccessReviewRecurrencePatternType>;
}