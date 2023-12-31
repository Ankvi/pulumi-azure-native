import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AWS cloud account connector based assume role, the role enables delegating access to your AWS resources. The role is composed of role Amazon Resource Name (ARN) and external ID. For more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html">Creating a Role to Delegate Permissions to an IAM User (write only)</a>
     */
    export interface AwAssumeRoleAuthenticationDetailsPropertiesArgs {
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'awsAssumeRole'.
         */
        authenticationType: pulumi.Input<"awsAssumeRole">;
        /**
         * Assumed role ID is an identifier that you can use to create temporary security credentials.
         */
        awsAssumeRoleArn: pulumi.Input<string>;
        /**
         * A unique identifier that is required when you assume a role in another account.
         */
        awsExternalId: pulumi.Input<string>;
    }

    /**
     * AWS cloud account connector based credentials, the credentials is composed of access key ID and secret key, for more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Creating an IAM User in Your AWS Account (write only)</a>
     */
    export interface AwsCredsAuthenticationDetailsPropertiesArgs {
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'awsCreds'.
         */
        authenticationType: pulumi.Input<"awsCreds">;
        /**
         * Public key element of the AWS credential object (write only)
         */
        awsAccessKeyId: pulumi.Input<string>;
        /**
         * Secret key element of the AWS credential object (write only)
         */
        awsSecretAccessKey: pulumi.Input<string>;
    }

    /**
     * GCP cloud account connector based service to service credentials, the credentials are composed of the organization ID and a JSON API key (write only)
     */
    export interface GcpCredentialsDetailsPropertiesArgs {
        /**
         * Auth provider x509 certificate URL field of the API key (write only)
         */
        authProviderX509CertUrl: pulumi.Input<string>;
        /**
         * Auth URI field of the API key (write only)
         */
        authUri: pulumi.Input<string>;
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'gcpCredentials'.
         */
        authenticationType: pulumi.Input<"gcpCredentials">;
        /**
         * Client email field of the API key (write only)
         */
        clientEmail: pulumi.Input<string>;
        /**
         * Client ID field of the API key (write only)
         */
        clientId: pulumi.Input<string>;
        /**
         * Client x509 certificate URL field of the API key (write only)
         */
        clientX509CertUrl: pulumi.Input<string>;
        /**
         * The organization ID of the GCP cloud account
         */
        organizationId: pulumi.Input<string>;
        /**
         * Private key field of the API key (write only)
         */
        privateKey: pulumi.Input<string>;
        /**
         * Private key ID field of the API key (write only)
         */
        privateKeyId: pulumi.Input<string>;
        /**
         * Project ID field of the API key (write only)
         */
        projectId: pulumi.Input<string>;
        /**
         * Token URI field of the API key (write only)
         */
        tokenUri: pulumi.Input<string>;
        /**
         * Type field of the API key (write only)
         */
        type: pulumi.Input<string>;
    }

    /**
     * Settings for hybrid compute management
     */
    export interface HybridComputeSettingsPropertiesArgs {
        /**
         * Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
         */
        autoProvision: pulumi.Input<string | enums.AutoProvision>;
        /**
         * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
         */
        proxyServer?: pulumi.Input<ProxyServerPropertiesArgs>;
        /**
         * The location where the metadata of machines will be stored
         */
        region?: pulumi.Input<string>;
        /**
         * The name of the resource group where Arc (Hybrid Compute) connectors are connected.
         */
        resourceGroupName?: pulumi.Input<string>;
        /**
         * An object to access resources that are secured by an Azure AD tenant.
         */
        servicePrincipal?: pulumi.Input<ServicePrincipalPropertiesArgs>;
    }

    /**
     * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
     */
    export interface ProxyServerPropertiesArgs {
        /**
         * Proxy server IP
         */
        ip?: pulumi.Input<string>;
        /**
         * Proxy server port
         */
        port?: pulumi.Input<string>;
    }

    /**
     * Defines whether to send email notifications about new security alerts
     */
    export interface SecurityContactPropertiesAlertNotificationsArgs {
        /**
         * Defines the minimal alert severity which will be sent as email notifications
         */
        minimalSeverity?: pulumi.Input<string | enums.MinimalSeverity>;
        /**
         * Defines if email notifications will be sent about new security alerts
         */
        state?: pulumi.Input<string | enums.State>;
    }

    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    export interface SecurityContactPropertiesNotificationsByRoleArgs {
        /**
         * Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles: 
         */
        roles?: pulumi.Input<pulumi.Input<string | enums.Roles>[]>;
        /**
         * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
         */
        state?: pulumi.Input<string | enums.State>;
    }

    /**
     * Details of the service principal.
     */
    export interface ServicePrincipalPropertiesArgs {
        /**
         * Application ID of service principal.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * A secret string that the application uses to prove its identity, also can be referred to as application password (write only).
         */
        secret?: pulumi.Input<string>;
    }
