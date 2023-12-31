import * as pulumi from "@pulumi/pulumi";
    /**
     * The approval settings.
     */
    export interface ApprovalSettingsResponse {
        /**
         * The type of rule
         */
        approvalMode?: string;
        /**
         * The approval stages of the request.
         */
        approvalStages?: ApprovalStageResponse[];
        /**
         * Determines whether approval is required or not.
         */
        isApprovalRequired?: boolean;
        /**
         * Determines whether approval is required for assignment extension.
         */
        isApprovalRequiredForExtension?: boolean;
        /**
         * Determine whether requestor justification is required.
         */
        isRequestorJustificationRequired?: boolean;
    }

    /**
     * The approval stage.
     */
    export interface ApprovalStageResponse {
        /**
         * The time in days when approval request would be timed out
         */
        approvalStageTimeOutInDays?: number;
        /**
         * The escalation approver of the request.
         */
        escalationApprovers?: UserSetResponse[];
        /**
         * The time in minutes when the approval request would be escalated if the primary approver does not approve
         */
        escalationTimeInMinutes?: number;
        /**
         * Determines whether approver need to provide justification for his decision.
         */
        isApproverJustificationRequired?: boolean;
        /**
         * The value determine whether escalation feature is enabled.
         */
        isEscalationEnabled?: boolean;
        /**
         * The primary approver of the request.
         */
        primaryApprovers?: UserSetResponse[];
    }

    /**
     * Expanded info of resource scope, role definition and policy
     */
    export interface PolicyAssignmentPropertiesResponse {
        /**
         * Details of the policy
         */
        policy?: PolicyAssignmentPropertiesResponsePolicy;
        /**
         * Details of role definition
         */
        roleDefinition?: PolicyAssignmentPropertiesResponseRoleDefinition;
        /**
         * Details of the resource scope
         */
        scope?: PolicyAssignmentPropertiesResponseScope;
    }

    /**
     * Details of the policy
     */
    export interface PolicyAssignmentPropertiesResponsePolicy {
        /**
         * Id of the policy
         */
        id?: string;
        /**
         * The name of the entity last modified it
         */
        lastModifiedBy: PrincipalResponse;
        /**
         * The last modified date time.
         */
        lastModifiedDateTime?: string;
    }

    /**
     * Details of role definition
     */
    export interface PolicyAssignmentPropertiesResponseRoleDefinition {
        /**
         * Display name of the role definition
         */
        displayName?: string;
        /**
         * Id of the role definition
         */
        id?: string;
        /**
         * Type of the role definition
         */
        type?: string;
    }

    /**
     * Details of the resource scope
     */
    export interface PolicyAssignmentPropertiesResponseScope {
        /**
         * Display name of the resource
         */
        displayName?: string;
        /**
         * Scope id of the resource
         */
        id?: string;
        /**
         * Type of the resource
         */
        type?: string;
    }

    /**
     * The name of the entity last modified it
     */
    export interface PrincipalResponse {
        /**
         * The name of the principal made changes
         */
        displayName?: string;
        /**
         * Email of principal
         */
        email?: string;
        /**
         * The id of the principal made changes
         */
        id?: string;
        /**
         * Type of principal such as user , group etc
         */
        type?: string;
    }

    /**
     * The role management policy approval rule.
     */
    export interface RoleManagementPolicyApprovalRuleResponse {
        /**
         * The id of the rule.
         */
        id?: string;
        /**
         * The type of rule
         * Expected value is 'RoleManagementPolicyApprovalRule'.
         */
        ruleType: "RoleManagementPolicyApprovalRule";
        /**
         * The approval setting
         */
        setting?: ApprovalSettingsResponse;
        /**
         * The target of the current rule.
         */
        target?: RoleManagementPolicyRuleTargetResponse;
    }

    /**
     * The role management policy authentication context rule.
     */
    export interface RoleManagementPolicyAuthenticationContextRuleResponse {
        /**
         * The claim value.
         */
        claimValue?: string;
        /**
         * The id of the rule.
         */
        id?: string;
        /**
         * The value indicating if rule is enabled.
         */
        isEnabled?: boolean;
        /**
         * The type of rule
         * Expected value is 'RoleManagementPolicyAuthenticationContextRule'.
         */
        ruleType: "RoleManagementPolicyAuthenticationContextRule";
        /**
         * The target of the current rule.
         */
        target?: RoleManagementPolicyRuleTargetResponse;
    }

    /**
     * The role management policy enablement rule.
     */
    export interface RoleManagementPolicyEnablementRuleResponse {
        /**
         * The list of enabled rules.
         */
        enabledRules?: string[];
        /**
         * The id of the rule.
         */
        id?: string;
        /**
         * The type of rule
         * Expected value is 'RoleManagementPolicyEnablementRule'.
         */
        ruleType: "RoleManagementPolicyEnablementRule";
        /**
         * The target of the current rule.
         */
        target?: RoleManagementPolicyRuleTargetResponse;
    }

    /**
     * The role management policy expiration rule.
     */
    export interface RoleManagementPolicyExpirationRuleResponse {
        /**
         * The id of the rule.
         */
        id?: string;
        /**
         * The value indicating whether expiration is required.
         */
        isExpirationRequired?: boolean;
        /**
         * The maximum duration of expiration in timespan.
         */
        maximumDuration?: string;
        /**
         * The type of rule
         * Expected value is 'RoleManagementPolicyExpirationRule'.
         */
        ruleType: "RoleManagementPolicyExpirationRule";
        /**
         * The target of the current rule.
         */
        target?: RoleManagementPolicyRuleTargetResponse;
    }

    /**
     * The role management policy notification rule.
     */
    export interface RoleManagementPolicyNotificationRuleResponse {
        /**
         * The id of the rule.
         */
        id?: string;
        /**
         * Determines if the notification will be sent to the recipient type specified in the policy rule.
         */
        isDefaultRecipientsEnabled?: boolean;
        /**
         * The notification level.
         */
        notificationLevel?: string;
        /**
         * The list of notification recipients.
         */
        notificationRecipients?: string[];
        /**
         * The type of notification.
         */
        notificationType?: string;
        /**
         * The recipient type.
         */
        recipientType?: string;
        /**
         * The type of rule
         * Expected value is 'RoleManagementPolicyNotificationRule'.
         */
        ruleType: "RoleManagementPolicyNotificationRule";
        /**
         * The target of the current rule.
         */
        target?: RoleManagementPolicyRuleTargetResponse;
    }

    /**
     * The role management policy rule target.
     */
    export interface RoleManagementPolicyRuleTargetResponse {
        /**
         * The caller of the setting.
         */
        caller?: string;
        /**
         * The list of enforced settings.
         */
        enforcedSettings?: string[];
        /**
         * The list of inheritable settings.
         */
        inheritableSettings?: string[];
        /**
         * The assignment level to which rule is applied.
         */
        level?: string;
        /**
         * The type of operation.
         */
        operations?: string[];
        /**
         * The list of target objects.
         */
        targetObjects?: string[];
    }

    /**
     * The detail of a user.
     */
    export interface UserSetResponse {
        /**
         * The description of the user.
         */
        description?: string;
        /**
         * The object id of the user.
         */
        id?: string;
        /**
         * The value indicating whether the user is a backup fallback approver
         */
        isBackup?: boolean;
        /**
         * The type of user.
         */
        userType?: string;
    }
