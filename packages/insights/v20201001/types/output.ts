import * as pulumi from "@pulumi/pulumi";
    /**
     * A pointer to an Azure Action Group.
     */
    export interface ActionGroupResponse {
        /**
         * The resource ID of the Action Group. This cannot be null or empty.
         */
        actionGroupId: string;
        /**
         * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
         */
        webhookProperties?: {[key: string]: string};
    }

    /**
     * A list of Activity Log Alert rule actions.
     */
    export interface ActionListResponse {
        /**
         * The list of the Action Groups.
         */
        actionGroups?: ActionGroupResponse[];
    }

    /**
     * An Activity Log Alert rule condition that is met when all its member conditions are met.
     */
    export interface AlertRuleAllOfConditionResponse {
        /**
         * The list of Activity Log Alert rule conditions.
         */
        allOf: AlertRuleAnyOfOrLeafConditionResponse[];
    }

    /**
     * An Activity Log Alert rule condition that is met when all its member conditions are met.
     * Each condition can be of one of the following types:
     * __Important__: Each type has its unique subset of properties. Properties from different types CANNOT exist in one condition.
     *    * __Leaf Condition -__ must contain 'field' and either 'equals' or 'containsAny'.
     *   _Please note, 'anyOf' should __not__ be set in a Leaf Condition._
     *   * __AnyOf Condition -__ must contain __only__ 'anyOf' (which is an array of Leaf Conditions).
     *   _Please note, 'field', 'equals' and 'containsAny' should __not__ be set in an AnyOf Condition._
     */
    export interface AlertRuleAnyOfOrLeafConditionResponse {
        /**
         * An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
         */
        anyOf?: AlertRuleLeafConditionResponse[];
        /**
         * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
         */
        containsAny?: string[];
        /**
         * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
         */
        equals?: string;
        /**
         * The name of the Activity Log event's field that this condition will examine.
         * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
         */
        field?: string;
    }

    /**
     * An Activity Log Alert rule condition that is met by comparing the field and value of an Activity Log event.
     * This condition must contain 'field' and either 'equals' or 'containsAny'.
     */
    export interface AlertRuleLeafConditionResponse {
        /**
         * The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
         */
        containsAny?: string[];
        /**
         * The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
         */
        equals?: string;
        /**
         * The name of the Activity Log event's field that this condition will examine.
         * The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.
         */
        field?: string;
    }
