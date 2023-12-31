import * as pulumi from "@pulumi/pulumi";
    /**
     * An arm role receiver.
     */
    export interface ArmRoleReceiverArgs {
        /**
         * The name of the arm role receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * The arm role id.
         */
        roleId: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * armRoleReceiverArgsProvideDefaults sets the appropriate defaults for ArmRoleReceiverArgs
     */
    export function armRoleReceiverArgsProvideDefaults(val: ArmRoleReceiverArgs): ArmRoleReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * The Azure Automation Runbook notification receiver.
     */
    export interface AutomationRunbookReceiverArgs {
        /**
         * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
         */
        automationAccountId: pulumi.Input<string>;
        /**
         * Indicates whether this instance is global runbook.
         */
        isGlobalRunbook: pulumi.Input<boolean>;
        /**
         * Indicates name of the webhook.
         */
        name?: pulumi.Input<string>;
        /**
         * The name for this runbook.
         */
        runbookName: pulumi.Input<string>;
        /**
         * The URI where webhooks should be sent.
         */
        serviceUri?: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
        /**
         * The resource id for webhook linked to this runbook.
         */
        webhookResourceId: pulumi.Input<string>;
    }
    /**
     * automationRunbookReceiverArgsProvideDefaults sets the appropriate defaults for AutomationRunbookReceiverArgs
     */
    export function automationRunbookReceiverArgsProvideDefaults(val: AutomationRunbookReceiverArgs): AutomationRunbookReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * The Azure mobile App push notification receiver.
     */
    export interface AzureAppPushReceiverArgs {
        /**
         * The email address registered for the Azure mobile app.
         */
        emailAddress: pulumi.Input<string>;
        /**
         * The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
    }

    /**
     * An azure function receiver.
     */
    export interface AzureFunctionReceiverArgs {
        /**
         * The azure resource id of the function app.
         */
        functionAppResourceId: pulumi.Input<string>;
        /**
         * The function name in the function app.
         */
        functionName: pulumi.Input<string>;
        /**
         * The http trigger url where http request sent to.
         */
        httpTriggerUrl: pulumi.Input<string>;
        /**
         * The name of the azure function receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * azureFunctionReceiverArgsProvideDefaults sets the appropriate defaults for AzureFunctionReceiverArgs
     */
    export function azureFunctionReceiverArgsProvideDefaults(val: AzureFunctionReceiverArgs): AzureFunctionReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An email receiver.
     */
    export interface EmailReceiverArgs {
        /**
         * The email address of this receiver.
         */
        emailAddress: pulumi.Input<string>;
        /**
         * The name of the email receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * emailReceiverArgsProvideDefaults sets the appropriate defaults for EmailReceiverArgs
     */
    export function emailReceiverArgsProvideDefaults(val: EmailReceiverArgs): EmailReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An Event hub receiver.
     */
    export interface EventHubReceiverArgs {
        /**
         * The name of the specific Event Hub queue
         */
        eventHubName: pulumi.Input<string>;
        /**
         * The Event Hub namespace
         */
        eventHubNameSpace: pulumi.Input<string>;
        /**
         * The name of the Event hub receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * The Id for the subscription containing this event hub
         */
        subscriptionId: pulumi.Input<string>;
        /**
         * The tenant Id for the subscription containing this event hub
         */
        tenantId?: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * eventHubReceiverArgsProvideDefaults sets the appropriate defaults for EventHubReceiverArgs
     */
    export function eventHubReceiverArgsProvideDefaults(val: EventHubReceiverArgs): EventHubReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An Itsm receiver.
     */
    export interface ItsmReceiverArgs {
        /**
         * Unique identification of ITSM connection among multiple defined in above workspace.
         */
        connectionId: pulumi.Input<string>;
        /**
         * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
         */
        region: pulumi.Input<string>;
        /**
         * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
         */
        ticketConfiguration: pulumi.Input<string>;
        /**
         * OMS LA instance identifier.
         */
        workspaceId: pulumi.Input<string>;
    }

    /**
     * A logic app receiver.
     */
    export interface LogicAppReceiverArgs {
        /**
         * The callback url where http request sent to.
         */
        callbackUrl: pulumi.Input<string>;
        /**
         * The name of the logic app receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * The azure resource id of the logic app receiver.
         */
        resourceId: pulumi.Input<string>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * logicAppReceiverArgsProvideDefaults sets the appropriate defaults for LogicAppReceiverArgs
     */
    export function logicAppReceiverArgsProvideDefaults(val: LogicAppReceiverArgs): LogicAppReceiverArgs {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An SMS receiver.
     */
    export interface SmsReceiverArgs {
        /**
         * The country code of the SMS receiver.
         */
        countryCode: pulumi.Input<string>;
        /**
         * The name of the SMS receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * The phone number of the SMS receiver.
         */
        phoneNumber: pulumi.Input<string>;
    }

    /**
     * A voice receiver.
     */
    export interface VoiceReceiverArgs {
        /**
         * The country code of the voice receiver.
         */
        countryCode: pulumi.Input<string>;
        /**
         * The name of the voice receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * The phone number of the voice receiver.
         */
        phoneNumber: pulumi.Input<string>;
    }

    /**
     * A webhook receiver.
     */
    export interface WebhookReceiverArgs {
        /**
         * Indicates the identifier uri for aad auth.
         */
        identifierUri?: pulumi.Input<string>;
        /**
         * The name of the webhook receiver. Names must be unique across all receivers within an action group.
         */
        name: pulumi.Input<string>;
        /**
         * Indicates the webhook app object Id for aad auth.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The URI where webhooks should be sent.
         */
        serviceUri: pulumi.Input<string>;
        /**
         * Indicates the tenant id for aad auth.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * Indicates whether or not use AAD authentication.
         */
        useAadAuth?: pulumi.Input<boolean>;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: pulumi.Input<boolean>;
    }
    /**
     * webhookReceiverArgsProvideDefaults sets the appropriate defaults for WebhookReceiverArgs
     */
    export function webhookReceiverArgsProvideDefaults(val: WebhookReceiverArgs): WebhookReceiverArgs {
        return {
            ...val,
            useAadAuth: (val.useAadAuth) ?? false,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }
