import * as pulumi from "@pulumi/pulumi";
    /**
     * A pointer to an Azure Action Group.
     */
    export interface ActivityLogAlertActionGroupResponse {
        /**
         * The resourceId of the action group. This cannot be null or empty.
         */
        actionGroupId: string;
        /**
         * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
         */
        webhookProperties?: {[key: string]: string};
    }

    /**
     * A list of activity log alert actions.
     */
    export interface ActivityLogAlertActionListResponse {
        /**
         * The list of activity log alerts.
         */
        actionGroups?: ActivityLogAlertActionGroupResponse[];
    }

    /**
     * An Activity Log alert condition that is met when all its member conditions are met.
     */
    export interface ActivityLogAlertAllOfConditionResponse {
        /**
         * The list of activity log alert conditions.
         */
        allOf: ActivityLogAlertLeafConditionResponse[];
    }

    /**
     * An Activity Log alert condition that is met by comparing an activity log field and value.
     */
    export interface ActivityLogAlertLeafConditionResponse {
        /**
         * The field value will be compared to this value (case-insensitive) to determine if the condition is met.
         */
        equals: string;
        /**
         * The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.
         */
        field: string;
    }
