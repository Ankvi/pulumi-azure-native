import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AWS cloud account connector based assume role, the role enables delegating access to your AWS resources. The role is composed of role Amazon Resource Name (ARN) and external ID. For more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html">Creating a Role to Delegate Permissions to an IAM User (write only)</a>
     */
    export interface AwAssumeRoleAuthenticationDetailsPropertiesResponse {
        /**
         * The ID of the cloud account
         */
        accountId: string;
        /**
         * State of the multi-cloud connector
         */
        authenticationProvisioningState: string;
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'awsAssumeRole'.
         */
        authenticationType: "awsAssumeRole";
        /**
         * Assumed role ID is an identifier that you can use to create temporary security credentials.
         */
        awsAssumeRoleArn: string;
        /**
         * A unique identifier that is required when you assume a role in another account.
         */
        awsExternalId: string;
        /**
         * The permissions detected in the cloud account.
         */
        grantedPermissions: string[];
    }

    /**
     * AWS cloud account connector based credentials, the credentials is composed of access key ID and secret key, for more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Creating an IAM User in Your AWS Account (write only)</a>
     */
    export interface AwsCredsAuthenticationDetailsPropertiesResponse {
        /**
         * The ID of the cloud account
         */
        accountId: string;
        /**
         * State of the multi-cloud connector
         */
        authenticationProvisioningState: string;
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'awsCreds'.
         */
        authenticationType: "awsCreds";
        /**
         * Public key element of the AWS credential object (write only)
         */
        awsAccessKeyId: string;
        /**
         * Secret key element of the AWS credential object (write only)
         */
        awsSecretAccessKey: string;
        /**
         * The permissions detected in the cloud account.
         */
        grantedPermissions: string[];
    }

    /**
     * GCP cloud account connector based service to service credentials, the credentials are composed of the organization ID and a JSON API key (write only)
     */
    export interface GcpCredentialsDetailsPropertiesResponse {
        /**
         * Auth provider x509 certificate URL field of the API key (write only)
         */
        authProviderX509CertUrl: string;
        /**
         * Auth URI field of the API key (write only)
         */
        authUri: string;
        /**
         * State of the multi-cloud connector
         */
        authenticationProvisioningState: string;
        /**
         * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
         * Expected value is 'gcpCredentials'.
         */
        authenticationType: "gcpCredentials";
        /**
         * Client email field of the API key (write only)
         */
        clientEmail: string;
        /**
         * Client ID field of the API key (write only)
         */
        clientId: string;
        /**
         * Client x509 certificate URL field of the API key (write only)
         */
        clientX509CertUrl: string;
        /**
         * The permissions detected in the cloud account.
         */
        grantedPermissions: string[];
        /**
         * The organization ID of the GCP cloud account
         */
        organizationId: string;
        /**
         * Private key field of the API key (write only)
         */
        privateKey: string;
        /**
         * Private key ID field of the API key (write only)
         */
        privateKeyId: string;
        /**
         * Project ID field of the API key (write only)
         */
        projectId: string;
        /**
         * Token URI field of the API key (write only)
         */
        tokenUri: string;
        /**
         * Type field of the API key (write only)
         */
        type: string;
    }

    /**
     * Settings for hybrid compute management
     */
    export interface HybridComputeSettingsPropertiesResponse {
        /**
         * Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
         */
        autoProvision: string;
        /**
         * State of the service principal and its secret
         */
        hybridComputeProvisioningState: string;
        /**
         * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
         */
        proxyServer?: ProxyServerPropertiesResponse;
        /**
         * The location where the metadata of machines will be stored
         */
        region?: string;
        /**
         * The name of the resource group where Arc (Hybrid Compute) connectors are connected.
         */
        resourceGroupName?: string;
        /**
         * An object to access resources that are secured by an Azure AD tenant.
         */
        servicePrincipal?: ServicePrincipalPropertiesResponse;
    }

    /**
     * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
     */
    export interface ProxyServerPropertiesResponse {
        /**
         * Proxy server IP
         */
        ip?: string;
        /**
         * Proxy server port
         */
        port?: string;
    }

    /**
     * Defines whether to send email notifications about new security alerts
     */
    export interface SecurityContactPropertiesResponseAlertNotifications {
        /**
         * Defines the minimal alert severity which will be sent as email notifications
         */
        minimalSeverity?: string;
        /**
         * Defines if email notifications will be sent about new security alerts
         */
        state?: string;
    }

    /**
     * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    export interface SecurityContactPropertiesResponseNotificationsByRole {
        /**
         * Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles: 
         */
        roles?: string[];
        /**
         * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
         */
        state?: string;
    }

    /**
     * Details of the service principal.
     */
    export interface ServicePrincipalPropertiesResponse {
        /**
         * Application ID of service principal.
         */
        applicationId?: string;
        /**
         * A secret string that the application uses to prove its identity, also can be referred to as application password (write only).
         */
        secret?: string;
    }
