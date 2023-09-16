import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace securitydevops {
    export interface AuthorizationInfoArgs {
        /**
         * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
         * 
         * Only used during PUT operations. The secret is cleared during GET.
         * In general, RPaaS does not return any property marked as a secret.
         */
        code?: pulumi.Input<string>;
    }

    export interface AzureDevOpsConnectorPropertiesArgs {
        authorization?: pulumi.Input<AuthorizationInfoArgs>;
        /**
         * Gets or sets org onboarding information.
         */
        orgs?: pulumi.Input<pulumi.Input<AzureDevOpsOrgMetadataArgs>[]>;
    }

    /**
     * Org onboarding info.
     */
    export interface AzureDevOpsOrgMetadataArgs {
        autoDiscovery?: pulumi.Input<string | enums.AutoDiscovery>;
        /**
         * Gets or sets name of the AzureDevOps Org.
         */
        name?: pulumi.Input<string>;
        projects?: pulumi.Input<pulumi.Input<AzureDevOpsProjectMetadataArgs>[]>;
    }

    /**
     * Project onboarding info.
     */
    export interface AzureDevOpsProjectMetadataArgs {
        autoDiscovery?: pulumi.Input<string | enums.AutoDiscovery>;
        /**
         * Gets or sets name of the AzureDevOps Project.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets or sets repositories.
         */
        repos?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
     */
    export interface GitHubConnectorPropertiesArgs {
        /**
         * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
         * 
         * Only used during PUT operations. The secret is cleared during GET.
         * In general, RPaaS does not return any property marked as a secret.
         */
        code?: pulumi.Input<string>;
    }

    export namespace v20220901preview {
        export interface AuthorizationInfoArgs {
            /**
             * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
             * 
             * Only used during PUT operations. The secret is cleared during GET.
             * In general, RPaaS does not return any property marked as a secret.
             */
            code?: pulumi.Input<string>;
        }

        export interface AzureDevOpsConnectorPropertiesArgs {
            authorization?: pulumi.Input<v20220901preview.AuthorizationInfoArgs>;
            /**
             * Gets or sets org onboarding information.
             */
            orgs?: pulumi.Input<pulumi.Input<v20220901preview.AzureDevOpsOrgMetadataArgs>[]>;
        }

        /**
         * Org onboarding info.
         */
        export interface AzureDevOpsOrgMetadataArgs {
            autoDiscovery?: pulumi.Input<string | enums.v20220901preview.AutoDiscovery>;
            /**
             * Gets or sets name of the AzureDevOps Org.
             */
            name?: pulumi.Input<string>;
            projects?: pulumi.Input<pulumi.Input<v20220901preview.AzureDevOpsProjectMetadataArgs>[]>;
        }

        /**
         * Project onboarding info.
         */
        export interface AzureDevOpsProjectMetadataArgs {
            autoDiscovery?: pulumi.Input<string | enums.v20220901preview.AutoDiscovery>;
            /**
             * Gets or sets name of the AzureDevOps Project.
             */
            name?: pulumi.Input<string>;
            /**
             * Gets or sets repositories.
             */
            repos?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
         */
        export interface GitHubConnectorPropertiesArgs {
            /**
             * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
             * 
             * Only used during PUT operations. The secret is cleared during GET.
             * In general, RPaaS does not return any property marked as a secret.
             */
            code?: pulumi.Input<string>;
        }

    }
}
