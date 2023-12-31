import * as pulumi from "@pulumi/pulumi";
    /**
     * An arm role receiver.
     */
    export interface ArmRoleReceiverResponse {
        /**
         * The name of the arm role receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The arm role id.
         */
        roleId: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * armRoleReceiverResponseProvideDefaults sets the appropriate defaults for ArmRoleReceiverResponse
     */
    export function armRoleReceiverResponseProvideDefaults(val: ArmRoleReceiverResponse): ArmRoleReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * The Azure Automation Runbook notification receiver.
     */
    export interface AutomationRunbookReceiverResponse {
        /**
         * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
         */
        automationAccountId: string;
        /**
         * Indicates whether this instance is global runbook.
         */
        isGlobalRunbook: boolean;
        /**
         * Indicates name of the webhook.
         */
        name?: string;
        /**
         * The name for this runbook.
         */
        runbookName: string;
        /**
         * The URI where webhooks should be sent.
         */
        serviceUri?: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
        /**
         * The resource id for webhook linked to this runbook.
         */
        webhookResourceId: string;
    }
    /**
     * automationRunbookReceiverResponseProvideDefaults sets the appropriate defaults for AutomationRunbookReceiverResponse
     */
    export function automationRunbookReceiverResponseProvideDefaults(val: AutomationRunbookReceiverResponse): AutomationRunbookReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * The Azure mobile App push notification receiver.
     */
    export interface AzureAppPushReceiverResponse {
        /**
         * The email address registered for the Azure mobile app.
         */
        emailAddress: string;
        /**
         * The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
    }

    /**
     * An azure function receiver.
     */
    export interface AzureFunctionReceiverResponse {
        /**
         * The azure resource id of the function app.
         */
        functionAppResourceId: string;
        /**
         * The function name in the function app.
         */
        functionName: string;
        /**
         * The http trigger url where http request sent to.
         */
        httpTriggerUrl: string;
        /**
         * The name of the azure function receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * azureFunctionReceiverResponseProvideDefaults sets the appropriate defaults for AzureFunctionReceiverResponse
     */
    export function azureFunctionReceiverResponseProvideDefaults(val: AzureFunctionReceiverResponse): AzureFunctionReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An email receiver.
     */
    export interface EmailReceiverResponse {
        /**
         * The email address of this receiver.
         */
        emailAddress: string;
        /**
         * The name of the email receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The receiver status of the e-mail.
         */
        status: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * emailReceiverResponseProvideDefaults sets the appropriate defaults for EmailReceiverResponse
     */
    export function emailReceiverResponseProvideDefaults(val: EmailReceiverResponse): EmailReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An Event hub receiver.
     */
    export interface EventHubReceiverResponse {
        /**
         * The name of the specific Event Hub queue
         */
        eventHubName: string;
        /**
         * The Event Hub namespace
         */
        eventHubNameSpace: string;
        /**
         * The name of the Event hub receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The Id for the subscription containing this event hub
         */
        subscriptionId: string;
        /**
         * The tenant Id for the subscription containing this event hub
         */
        tenantId?: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * eventHubReceiverResponseProvideDefaults sets the appropriate defaults for EventHubReceiverResponse
     */
    export function eventHubReceiverResponseProvideDefaults(val: EventHubReceiverResponse): EventHubReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An Itsm receiver.
     */
    export interface ItsmReceiverResponse {
        /**
         * Unique identification of ITSM connection among multiple defined in above workspace.
         */
        connectionId: string;
        /**
         * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
         */
        region: string;
        /**
         * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
         */
        ticketConfiguration: string;
        /**
         * OMS LA instance identifier.
         */
        workspaceId: string;
    }

    /**
     * A logic app receiver.
     */
    export interface LogicAppReceiverResponse {
        /**
         * The callback url where http request sent to.
         */
        callbackUrl: string;
        /**
         * The name of the logic app receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The azure resource id of the logic app receiver.
         */
        resourceId: string;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * logicAppReceiverResponseProvideDefaults sets the appropriate defaults for LogicAppReceiverResponse
     */
    export function logicAppReceiverResponseProvideDefaults(val: LogicAppReceiverResponse): LogicAppReceiverResponse {
        return {
            ...val,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }

    /**
     * An SMS receiver.
     */
    export interface SmsReceiverResponse {
        /**
         * The country code of the SMS receiver.
         */
        countryCode: string;
        /**
         * The name of the SMS receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The phone number of the SMS receiver.
         */
        phoneNumber: string;
        /**
         * The status of the receiver.
         */
        status: string;
    }

    /**
     * A voice receiver.
     */
    export interface VoiceReceiverResponse {
        /**
         * The country code of the voice receiver.
         */
        countryCode: string;
        /**
         * The name of the voice receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * The phone number of the voice receiver.
         */
        phoneNumber: string;
    }

    /**
     * A webhook receiver.
     */
    export interface WebhookReceiverResponse {
        /**
         * Indicates the identifier uri for aad auth.
         */
        identifierUri?: string;
        /**
         * The name of the webhook receiver. Names must be unique across all receivers within an action group.
         */
        name: string;
        /**
         * Indicates the webhook app object Id for aad auth.
         */
        objectId?: string;
        /**
         * The URI where webhooks should be sent.
         */
        serviceUri: string;
        /**
         * Indicates the tenant id for aad auth.
         */
        tenantId?: string;
        /**
         * Indicates whether or not use AAD authentication.
         */
        useAadAuth?: boolean;
        /**
         * Indicates whether to use common alert schema.
         */
        useCommonAlertSchema?: boolean;
    }
    /**
     * webhookReceiverResponseProvideDefaults sets the appropriate defaults for WebhookReceiverResponse
     */
    export function webhookReceiverResponseProvideDefaults(val: WebhookReceiverResponse): WebhookReceiverResponse {
        return {
            ...val,
            useAadAuth: (val.useAadAuth) ?? false,
            useCommonAlertSchema: (val.useCommonAlertSchema) ?? false,
        };
    }
