import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of the Community CommunityTraining Identity Configuration
     */
    export interface IdentityConfigurationPropertiesArgs {
        /**
         * The name of the authentication policy registered in ADB2C for the Community Training Resource
         */
        b2cAuthenticationPolicy?: pulumi.Input<string>;
        /**
         * The name of the password reset policy registered in ADB2C for the Community Training Resource
         */
        b2cPasswordResetPolicy?: pulumi.Input<string>;
        /**
         * The clientId of the application registered in the selected identity provider for the Community Training Resource
         */
        clientId: pulumi.Input<string>;
        /**
         * The client secret of the application registered in the selected identity provider for the Community Training Resource
         */
        clientSecret: pulumi.Input<string>;
        /**
         * The custom login parameters for the Community Training Resource
         */
        customLoginParameters?: pulumi.Input<string>;
        /**
         * The domain name of the selected identity provider for the Community Training Resource
         */
        domainName: pulumi.Input<string>;
        /**
         * The identity type of the Community Training Resource
         */
        identityType: pulumi.Input<string>;
        /**
         * To indicate whether the Community Training Resource has Teams enabled
         */
        teamsEnabled?: pulumi.Input<boolean>;
        /**
         * The tenantId of the selected identity provider for the Community Training Resource
         */
        tenantId: pulumi.Input<string>;
    }
    /**
     * identityConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for IdentityConfigurationPropertiesArgs
     */
    export function identityConfigurationPropertiesArgsProvideDefaults(val: IdentityConfigurationPropertiesArgs): IdentityConfigurationPropertiesArgs {
        return {
            ...val,
            teamsEnabled: (val.teamsEnabled) ?? false,
        };
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: pulumi.Input<enums.SkuTier>;
    }
