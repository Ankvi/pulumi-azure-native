import * as pulumi from "@pulumi/pulumi";
    /**
     * A pointer to an Azure Action Group.
     */
    export interface ActivityLogAlertActionGroupArgs {
        /**
         * The resourceId of the action group. This cannot be null or empty.
         */
        actionGroupId: pulumi.Input<string>;
        /**
         * the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.
         */
        webhookProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * A list of activity log alert actions.
     */
    export interface ActivityLogAlertActionListArgs {
        /**
         * The list of activity log alerts.
         */
        actionGroups?: pulumi.Input<pulumi.Input<ActivityLogAlertActionGroupArgs>[]>;
    }

    /**
     * An Activity Log alert condition that is met when all its member conditions are met.
     */
    export interface ActivityLogAlertAllOfConditionArgs {
        /**
         * The list of activity log alert conditions.
         */
        allOf: pulumi.Input<pulumi.Input<ActivityLogAlertLeafConditionArgs>[]>;
    }

    /**
     * An Activity Log alert condition that is met by comparing an activity log field and value.
     */
    export interface ActivityLogAlertLeafConditionArgs {
        /**
         * The field value will be compared to this value (case-insensitive) to determine if the condition is met.
         */
        equals: pulumi.Input<string>;
        /**
         * The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.
         */
        field: pulumi.Input<string>;
    }
