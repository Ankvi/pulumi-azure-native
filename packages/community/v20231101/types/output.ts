import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of the Community CommunityTraining Identity Configuration
     */
    export interface IdentityConfigurationPropertiesResponse {
        /**
         * The name of the authentication policy registered in ADB2C for the Community Training Resource
         */
        b2cAuthenticationPolicy?: string;
        /**
         * The name of the password reset policy registered in ADB2C for the Community Training Resource
         */
        b2cPasswordResetPolicy?: string;
        /**
         * The clientId of the application registered in the selected identity provider for the Community Training Resource
         */
        clientId: string;
        /**
         * The client secret of the application registered in the selected identity provider for the Community Training Resource
         */
        clientSecret: string;
        /**
         * The custom login parameters for the Community Training Resource
         */
        customLoginParameters?: string;
        /**
         * The domain name of the selected identity provider for the Community Training Resource
         */
        domainName: string;
        /**
         * The identity type of the Community Training Resource
         */
        identityType: string;
        /**
         * To indicate whether the Community Training Resource has Teams enabled
         */
        teamsEnabled?: boolean;
        /**
         * The tenantId of the selected identity provider for the Community Training Resource
         */
        tenantId: string;
    }
    /**
     * identityConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for IdentityConfigurationPropertiesResponse
     */
    export function identityConfigurationPropertiesResponseProvideDefaults(val: IdentityConfigurationPropertiesResponse): IdentityConfigurationPropertiesResponse {
        return {
            ...val,
            teamsEnabled: (val.teamsEnabled) ?? false,
        };
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
