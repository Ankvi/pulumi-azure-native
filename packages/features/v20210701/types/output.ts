import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization Profile
     */
    export interface AuthorizationProfileResponse {
        /**
         * The approved time
         */
        approvedTime: string;
        /**
         * The approver
         */
        approver: string;
        /**
         * The requested time
         */
        requestedTime: string;
        /**
         * The requester
         */
        requester: string;
        /**
         * The requester object id
         */
        requesterObjectId: string;
    }

    export interface SubscriptionFeatureRegistrationResponseProperties {
        /**
         * The feature approval type.
         */
        approvalType: string;
        /**
         * Authorization Profile
         */
        authorizationProfile?: AuthorizationProfileResponse;
        /**
         * The feature description.
         */
        description?: string;
        /**
         * The featureDisplayName.
         */
        displayName: string;
        /**
         * The feature documentation link.
         */
        documentationLink: string;
        /**
         * The featureName.
         */
        featureName: string;
        /**
         * Key-value pairs for meta data.
         */
        metadata?: {[key: string]: string};
        /**
         * The providerNamespace.
         */
        providerNamespace: string;
        /**
         * The feature registration date.
         */
        registrationDate: string;
        /**
         * The feature release date.
         */
        releaseDate: string;
        /**
         * Indicates whether feature should be displayed in Portal.
         */
        shouldFeatureDisplayInPortal?: boolean;
        /**
         * The state.
         */
        state?: string;
        /**
         * The subscriptionId.
         */
        subscriptionId: string;
        /**
         * The tenantId.
         */
        tenantId: string;
    }
    /**
     * subscriptionFeatureRegistrationResponsePropertiesProvideDefaults sets the appropriate defaults for SubscriptionFeatureRegistrationResponseProperties
     */
    export function subscriptionFeatureRegistrationResponsePropertiesProvideDefaults(val: SubscriptionFeatureRegistrationResponseProperties): SubscriptionFeatureRegistrationResponseProperties {
        return {
            ...val,
            shouldFeatureDisplayInPortal: (val.shouldFeatureDisplayInPortal) ?? false,
        };
    }
