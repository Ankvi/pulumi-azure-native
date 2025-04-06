import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Access Review Schedule Definition.
 *
 * Uses Azure REST API version 2021-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-12-01-preview.
 */
export class ScopeAccessReviewScheduleDefinitionById extends pulumi.CustomResource {
    /**
     * Get an existing ScopeAccessReviewScheduleDefinitionById resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScopeAccessReviewScheduleDefinitionById {
        return new ScopeAccessReviewScheduleDefinitionById(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:ScopeAccessReviewScheduleDefinitionById';

    /**
     * Returns true if the given object is an instance of ScopeAccessReviewScheduleDefinitionById.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScopeAccessReviewScheduleDefinitionById {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScopeAccessReviewScheduleDefinitionById.__pulumiType;
    }

    /**
     * Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
     */
    public readonly autoApplyDecisionsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * This is the collection of backup reviewers.
     */
    public readonly backupReviewers!: pulumi.Output<types.outputs.AccessReviewReviewerResponse[] | undefined>;
    /**
     * This specifies the behavior for the autoReview feature when an access review completes.
     */
    public readonly defaultDecision!: pulumi.Output<string | undefined>;
    /**
     * Flag to indicate whether reviewers are required to provide a justification when reviewing access.
     */
    public readonly defaultDecisionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The description provided by the access review creator and visible to admins.
     */
    public readonly descriptionForAdmins!: pulumi.Output<string | undefined>;
    /**
     * The description provided by the access review creator to be shown to reviewers.
     */
    public readonly descriptionForReviewers!: pulumi.Output<string | undefined>;
    /**
     * The display name for the schedule definition.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The duration in days for an instance.
     */
    public readonly instanceDurationInDays!: pulumi.Output<number | undefined>;
    /**
     * This is the collection of instances returned when one does an expand on it.
     */
    public readonly instances!: pulumi.Output<types.outputs.AccessReviewInstanceResponse[] | undefined>;
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * Flag to indicate whether the reviewer is required to pass justification when recording a decision.
     */
    public readonly justificationRequiredOnApproval!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to indicate whether sending mails to reviewers and the review creator is enabled.
     */
    public readonly mailNotificationsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The access review schedule definition unique id.
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
     * Access Review schedule definition recurrence range.
     */
    public readonly range!: pulumi.Output<types.outputs.AccessReviewRecurrenceRangeResponse | undefined>;
    /**
     * Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    public readonly recommendationLookBackDuration!: pulumi.Output<string | undefined>;
    /**
     * Flag to indicate whether showing recommendations to reviewers is enabled.
     */
    public readonly recommendationsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to indicate whether sending reminder emails to reviewers are enabled.
     */
    public readonly reminderNotificationsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * This is the collection of reviewers.
     */
    public readonly reviewers!: pulumi.Output<types.outputs.AccessReviewReviewerResponse[] | undefined>;
    /**
     * This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
     */
    public /*out*/ readonly reviewersType!: pulumi.Output<string>;
    /**
     * This is used to define what to include in scope of the review. The scope definition includes the resourceId and roleDefinitionId.
     */
    public readonly scope!: pulumi.Output<types.outputs.AccessReviewScopeResponse>;
    /**
     * This read-only field specifies the status of an accessReview.
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
     * Create a ScopeAccessReviewScheduleDefinitionById resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScopeAccessReviewScheduleDefinitionByIdArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["autoApplyDecisionsEnabled"] = args ? args.autoApplyDecisionsEnabled : undefined;
            resourceInputs["backupReviewers"] = args ? args.backupReviewers : undefined;
            resourceInputs["defaultDecision"] = args ? args.defaultDecision : undefined;
            resourceInputs["defaultDecisionEnabled"] = args ? args.defaultDecisionEnabled : undefined;
            resourceInputs["descriptionForAdmins"] = args ? args.descriptionForAdmins : undefined;
            resourceInputs["descriptionForReviewers"] = args ? args.descriptionForReviewers : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["excludeResourceId"] = args ? args.excludeResourceId : undefined;
            resourceInputs["excludeRoleDefinitionId"] = args ? args.excludeRoleDefinitionId : undefined;
            resourceInputs["expandNestedMemberships"] = args ? args.expandNestedMemberships : undefined;
            resourceInputs["inactiveDuration"] = args ? args.inactiveDuration : undefined;
            resourceInputs["includeAccessBelowResource"] = args ? args.includeAccessBelowResource : undefined;
            resourceInputs["includeInheritedAccess"] = args ? args.includeInheritedAccess : undefined;
            resourceInputs["instanceDurationInDays"] = args ? args.instanceDurationInDays : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["justificationRequiredOnApproval"] = args ? args.justificationRequiredOnApproval : undefined;
            resourceInputs["mailNotificationsEnabled"] = args ? args.mailNotificationsEnabled : undefined;
            resourceInputs["range"] = args ? args.range : undefined;
            resourceInputs["recommendationLookBackDuration"] = args ? args.recommendationLookBackDuration : undefined;
            resourceInputs["recommendationsEnabled"] = args ? args.recommendationsEnabled : undefined;
            resourceInputs["reminderNotificationsEnabled"] = args ? args.reminderNotificationsEnabled : undefined;
            resourceInputs["reviewers"] = args ? args.reviewers : undefined;
            resourceInputs["scheduleDefinitionId"] = args ? args.scheduleDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["reviewersType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["userPrincipalName"] = undefined /*out*/;
        } else {
            resourceInputs["autoApplyDecisionsEnabled"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupReviewers"] = undefined /*out*/;
            resourceInputs["defaultDecision"] = undefined /*out*/;
            resourceInputs["defaultDecisionEnabled"] = undefined /*out*/;
            resourceInputs["descriptionForAdmins"] = undefined /*out*/;
            resourceInputs["descriptionForReviewers"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["instanceDurationInDays"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["justificationRequiredOnApproval"] = undefined /*out*/;
            resourceInputs["mailNotificationsEnabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["range"] = undefined /*out*/;
            resourceInputs["recommendationLookBackDuration"] = undefined /*out*/;
            resourceInputs["recommendationsEnabled"] = undefined /*out*/;
            resourceInputs["reminderNotificationsEnabled"] = undefined /*out*/;
            resourceInputs["reviewers"] = undefined /*out*/;
            resourceInputs["reviewersType"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userPrincipalName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20211201preview:ScopeAccessReviewScheduleDefinitionById" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScopeAccessReviewScheduleDefinitionById.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScopeAccessReviewScheduleDefinitionById resource.
 */
export interface ScopeAccessReviewScheduleDefinitionByIdArgs {
    /**
     * Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
     */
    autoApplyDecisionsEnabled?: pulumi.Input<boolean>;
    /**
     * This is the collection of backup reviewers.
     */
    backupReviewers?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewReviewerArgs>[]>;
    /**
     * This specifies the behavior for the autoReview feature when an access review completes.
     */
    defaultDecision?: pulumi.Input<string | types.enums.DefaultDecisionType>;
    /**
     * Flag to indicate whether reviewers are required to provide a justification when reviewing access.
     */
    defaultDecisionEnabled?: pulumi.Input<boolean>;
    /**
     * The description provided by the access review creator and visible to admins.
     */
    descriptionForAdmins?: pulumi.Input<string>;
    /**
     * The description provided by the access review creator to be shown to reviewers.
     */
    descriptionForReviewers?: pulumi.Input<string>;
    /**
     * The display name for the schedule definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * This is used to indicate the resource id(s) to exclude
     */
    excludeResourceId?: pulumi.Input<string>;
    /**
     * This is used to indicate the role definition id(s) to exclude
     */
    excludeRoleDefinitionId?: pulumi.Input<string>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    expandNestedMemberships?: pulumi.Input<boolean>;
    /**
     * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    inactiveDuration?: pulumi.Input<string>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeAccessBelowResource?: pulumi.Input<boolean>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeInheritedAccess?: pulumi.Input<boolean>;
    /**
     * The duration in days for an instance.
     */
    instanceDurationInDays?: pulumi.Input<number>;
    /**
     * This is the collection of instances returned when one does an expand on it.
     */
    instances?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewInstanceArgs>[]>;
    /**
     * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
     */
    interval?: pulumi.Input<number>;
    /**
     * Flag to indicate whether the reviewer is required to pass justification when recording a decision.
     */
    justificationRequiredOnApproval?: pulumi.Input<boolean>;
    /**
     * Flag to indicate whether sending mails to reviewers and the review creator is enabled.
     */
    mailNotificationsEnabled?: pulumi.Input<boolean>;
    /**
     * Access Review schedule definition recurrence range.
     */
    range?: pulumi.Input<types.inputs.AccessReviewRecurrenceRangeArgs>;
    /**
     * Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    recommendationLookBackDuration?: pulumi.Input<string>;
    /**
     * Flag to indicate whether showing recommendations to reviewers is enabled.
     */
    recommendationsEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to indicate whether sending reminder emails to reviewers are enabled.
     */
    reminderNotificationsEnabled?: pulumi.Input<boolean>;
    /**
     * This is the collection of reviewers.
     */
    reviewers?: pulumi.Input<pulumi.Input<types.inputs.AccessReviewReviewerArgs>[]>;
    /**
     * The id of the access review schedule definition.
     */
    scheduleDefinitionId?: pulumi.Input<string>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
    /**
     * The recurrence type : weekly, monthly, etc.
     */
    type?: pulumi.Input<string | types.enums.AccessReviewRecurrencePatternType>;
}