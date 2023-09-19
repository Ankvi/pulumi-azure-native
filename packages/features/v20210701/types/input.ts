import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface SubscriptionFeatureRegistrationPropertiesArgs {
        /**
         * The feature description.
         */
        description?: pulumi.Input<string>;
        /**
         * Key-value pairs for meta data.
         */
        metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Indicates whether feature should be displayed in Portal.
         */
        shouldFeatureDisplayInPortal?: pulumi.Input<boolean>;
        /**
         * The state.
         */
        state?: pulumi.Input<string | enums.SubscriptionFeatureRegistrationState>;
    }
    /**
     * subscriptionFeatureRegistrationPropertiesArgsProvideDefaults sets the appropriate defaults for SubscriptionFeatureRegistrationPropertiesArgs
     */
    export function subscriptionFeatureRegistrationPropertiesArgsProvideDefaults(val: SubscriptionFeatureRegistrationPropertiesArgs): SubscriptionFeatureRegistrationPropertiesArgs {
        return {
            ...val,
            shouldFeatureDisplayInPortal: (val.shouldFeatureDisplayInPortal) ?? false,
        };
    }
