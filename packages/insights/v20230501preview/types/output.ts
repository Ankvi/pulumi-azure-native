import * as pulumi from "@pulumi/pulumi";
    /**
     * The Azure mobile App push notification receiver.
     */
    export interface AzureAppPushReceiverResponse {
        /**
         * The email address registered for the Azure mobile app.
         */
        emailAddress: string;
        /**
         * The name of the Azure mobile app push receiver. Names must be unique across all receivers within a tenant action group.
         */
        name: string;
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
         * The name of the email receiver. Names must be unique across all receivers within a tenant action group.
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
     * An SMS receiver.
     */
    export interface SmsReceiverResponse {
        /**
         * The country code of the SMS receiver.
         */
        countryCode: string;
        /**
         * The name of the SMS receiver. Names must be unique across all receivers within a tenant action group.
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
         * The name of the voice receiver. Names must be unique across all receivers within a tenant action group.
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
         * The name of the webhook receiver. Names must be unique across all receivers within a tenant action group.
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
