import * as pulumi from "@pulumi/pulumi";
    /**
     * The Azure mobile App push notification receiver.
     */
    export interface AzureAppPushReceiverArgs {
        /**
         * The email address registered for the Azure mobile app.
         */
        emailAddress: pulumi.Input<string>;
        /**
         * The name of the Azure mobile app push receiver. Names must be unique across all receivers within a tenant action group.
         */
        name: pulumi.Input<string>;
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
         * The name of the email receiver. Names must be unique across all receivers within a tenant action group.
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
     * An SMS receiver.
     */
    export interface SmsReceiverArgs {
        /**
         * The country code of the SMS receiver.
         */
        countryCode: pulumi.Input<string>;
        /**
         * The name of the SMS receiver. Names must be unique across all receivers within a tenant action group.
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
         * The name of the voice receiver. Names must be unique across all receivers within a tenant action group.
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
         * The name of the webhook receiver. Names must be unique across all receivers within a tenant action group.
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
