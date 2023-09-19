import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Describes an automation rule action to modify an object's properties
     */
    export interface AutomationRuleModifyPropertiesActionArgs {
        /**
         * The configuration of the modify properties automation rule action
         */
        actionConfiguration: pulumi.Input<AutomationRuleModifyPropertiesActionActionConfigurationArgs>;
        /**
         * The type of the automation rule action
         * Expected value is 'ModifyProperties'.
         */
        actionType: pulumi.Input<"ModifyProperties">;
        /**
         * The order of execution of the automation rule action
         */
        order: pulumi.Input<number>;
    }

    /**
     * The configuration of the modify properties automation rule action
     */
    export interface AutomationRuleModifyPropertiesActionActionConfigurationArgs {
        /**
         * The reason the incident was closed
         */
        classification?: pulumi.Input<string | enums.IncidentClassification>;
        /**
         * Describes the reason the incident was closed
         */
        classificationComment?: pulumi.Input<string>;
        /**
         * The classification reason to close the incident with
         */
        classificationReason?: pulumi.Input<string | enums.IncidentClassificationReason>;
        /**
         * List of labels to add to the incident
         */
        labels?: pulumi.Input<pulumi.Input<IncidentLabelArgs>[]>;
        /**
         * Describes a user that the incident is assigned to
         */
        owner?: pulumi.Input<IncidentOwnerInfoArgs>;
        /**
         * The severity of the incident
         */
        severity?: pulumi.Input<string | enums.IncidentSeverity>;
        /**
         * The status of the incident
         */
        status?: pulumi.Input<string | enums.IncidentStatus>;
    }

    /**
     * Describes an automation rule condition that evaluates a property's value
     */
    export interface AutomationRulePropertyValuesConditionArgs {
        /**
         * The configuration of the automation rule condition
         */
        conditionProperties: pulumi.Input<AutomationRulePropertyValuesConditionConditionPropertiesArgs>;
        /**
         * The type of the automation rule condition
         * Expected value is 'Property'.
         */
        conditionType: pulumi.Input<"Property">;
    }

    /**
     * The configuration of the automation rule condition
     */
    export interface AutomationRulePropertyValuesConditionConditionPropertiesArgs {
        /**
         * The operator to use for evaluation the condition
         */
        operator?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedOperator>;
        /**
         * The property to evaluate
         */
        propertyName?: pulumi.Input<string | enums.AutomationRulePropertyConditionSupportedProperty>;
        /**
         * The values to use for evaluating the condition
         */
        propertyValues?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Describes an automation rule action to run a playbook
     */
    export interface AutomationRuleRunPlaybookActionArgs {
        /**
         * The configuration of the run playbook automation rule action
         */
        actionConfiguration: pulumi.Input<AutomationRuleRunPlaybookActionActionConfigurationArgs>;
        /**
         * The type of the automation rule action
         * Expected value is 'RunPlaybook'.
         */
        actionType: pulumi.Input<"RunPlaybook">;
        /**
         * The order of execution of the automation rule action
         */
        order: pulumi.Input<number>;
    }

    /**
     * The configuration of the run playbook automation rule action
     */
    export interface AutomationRuleRunPlaybookActionActionConfigurationArgs {
        /**
         * The resource id of the playbook resource
         */
        logicAppResourceId?: pulumi.Input<string>;
        /**
         * The tenant id of the playbook resource
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Describes automation rule triggering logic
     */
    export interface AutomationRuleTriggeringLogicArgs {
        /**
         * The conditions to evaluate to determine if the automation rule should be triggered on a given object
         */
        conditions?: pulumi.Input<pulumi.Input<AutomationRulePropertyValuesConditionArgs>[]>;
        /**
         * Determines when the automation rule should automatically expire and be disabled.
         */
        expirationTimeUtc?: pulumi.Input<string>;
        /**
         * Determines whether the automation rule is enabled or disabled.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * The type of object the automation rule triggers on
         */
        triggersOn: pulumi.Input<string | enums.TriggersOn>;
        /**
         * The type of event the automation rule triggers on
         */
        triggersWhen: pulumi.Input<string | enums.TriggersWhen>;
    }

    /**
     * Describes related incident information for the bookmark
     */
    export interface IncidentInfoArgs {
        /**
         * Incident Id
         */
        incidentId?: pulumi.Input<string>;
        /**
         * Relation Name
         */
        relationName?: pulumi.Input<string>;
        /**
         * The severity of the incident
         */
        severity?: pulumi.Input<string | enums.IncidentSeverity>;
        /**
         * The title of the incident
         */
        title?: pulumi.Input<string>;
    }

    /**
     * Represents an incident label
     */
    export interface IncidentLabelArgs {
        /**
         * The name of the label
         */
        labelName: pulumi.Input<string>;
    }

    /**
     * Information on the user an incident is assigned to
     */
    export interface IncidentOwnerInfoArgs {
        /**
         * The name of the user the incident is assigned to.
         */
        assignedTo?: pulumi.Input<string>;
        /**
         * The email of the user the incident is assigned to.
         */
        email?: pulumi.Input<string>;
        /**
         * The object id of the user the incident is assigned to.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: pulumi.Input<string>;
    }

    /**
     * User information that made some action
     */
    export interface UserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }

    /**
     * User information that made some action
     */
    export interface WatchlistUserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }
