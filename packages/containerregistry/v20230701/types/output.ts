import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The agent that initiated the event. For most situations, this could be from the authorization context of the request.
     */
    export interface ActorResponse {
        /**
         * The subject or username associated with the request context that generated the event.
         */
        name?: string;
    }

    /**
     * Authentication credential stored for an upstream.
     */
    export interface AuthCredentialResponse {
        /**
         * This provides data pertaining to the health of the auth credential.
         */
        credentialHealth: CredentialHealthResponse;
        /**
         * The name of the credential.
         */
        name?: string;
        /**
         * KeyVault Secret URI for accessing the password.
         */
        passwordSecretIdentifier?: string;
        /**
         * KeyVault Secret URI for accessing the username.
         */
        usernameSecretIdentifier?: string;
    }

    /**
     * The health of the auth credential.
     */
    export interface CredentialHealthResponse {
        /**
         * Error code representing the health check error.
         */
        errorCode?: string;
        /**
         * Descriptive message representing the health check error.
         */
        errorMessage?: string;
        /**
         * The health status of credential.
         */
        status?: string;
    }

    export interface EncryptionPropertyResponse {
        /**
         * Key vault properties.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
        /**
         * Indicates whether or not the encryption is enabled for container registry.
         */
        status?: string;
    }

    /**
     * The content of the event request message.
     */
    export interface EventContentResponse {
        /**
         * The action that encompasses the provided event.
         */
        action?: string;
        /**
         * The agent that initiated the event. For most situations, this could be from the authorization context of the request.
         */
        actor?: ActorResponse;
        /**
         * The event ID.
         */
        id?: string;
        /**
         * The request that generated the event.
         */
        request?: RequestResponse;
        /**
         * The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
         */
        source?: SourceResponse;
        /**
         * The target of the event.
         */
        target?: TargetResponse;
        /**
         * The time at which the event occurred.
         */
        timestamp?: string;
    }

    /**
     * The event request message sent to the service URI.
     */
    export interface EventRequestMessageResponse {
        /**
         * The content of the event request message.
         */
        content?: EventContentResponse;
        /**
         * The headers of the event request message.
         */
        headers?: {[key: string]: string};
        /**
         * The HTTP method used to send the event request message.
         */
        method?: string;
        /**
         * The URI used to send the event request message.
         */
        requestUri?: string;
        /**
         * The HTTP message version.
         */
        version?: string;
    }

    /**
     * The event for a webhook.
     */
    export interface EventResponse {
        /**
         * The event request message sent to the service URI.
         */
        eventRequestMessage?: EventRequestMessageResponse;
        /**
         * The event response message received from the service URI.
         */
        eventResponseMessage?: EventResponseMessageResponse;
        /**
         * The event ID.
         */
        id?: string;
    }

    /**
     * The event response message received from the service URI.
     */
    export interface EventResponseMessageResponse {
        /**
         * The content of the event response message.
         */
        content?: string;
        /**
         * The headers of the event response message.
         */
        headers?: {[key: string]: string};
        /**
         * The reason phrase of the event response message.
         */
        reasonPhrase?: string;
        /**
         * The status code of the event response message.
         */
        statusCode?: string;
        /**
         * The HTTP message version.
         */
        version?: string;
    }

    /**
     * The export policy for a container registry.
     */
    export interface ExportPolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * exportPolicyResponseProvideDefaults sets the appropriate defaults for ExportPolicyResponse
     */
    export function exportPolicyResponseProvideDefaults(val: ExportPolicyResponse): ExportPolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "enabled",
        };
    }

    /**
     * IP rule with specific IP or IP range in CIDR format.
     */
    export interface IPRuleResponse {
        /**
         * The action of IP ACL rule.
         */
        action?: string;
        /**
         * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
         */
        iPAddressOrRange: string;
    }
    /**
     * ipruleResponseProvideDefaults sets the appropriate defaults for IPRuleResponse
     */
    export function ipruleResponseProvideDefaults(val: IPRuleResponse): IPRuleResponse {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    /**
     * Managed identity for the resource.
     */
    export interface IdentityPropertiesResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * The client id of the identity which will be used to access key vault.
         */
        identity?: string;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier?: string;
        /**
         * Auto key rotation status for a CMK enabled registry.
         */
        keyRotationEnabled: boolean;
        /**
         * Timestamp of the last successful key rotation.
         */
        lastKeyRotationTimestamp: string;
        /**
         * The fully qualified key identifier that includes the version of the key that is actually used for encryption.
         */
        versionedKeyIdentifier: string;
    }

    /**
     * The network rule set for a container registry.
     */
    export interface NetworkRuleSetResponse {
        /**
         * The default action of allow or deny when no other rules match.
         */
        defaultAction: string;
        /**
         * The IP ACL rules.
         */
        ipRules?: IPRuleResponse[];
    }
    /**
     * networkRuleSetResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetResponse
     */
    export function networkRuleSetResponseProvideDefaults(val: NetworkRuleSetResponse): NetworkRuleSetResponse {
        return {
            ...val,
            defaultAction: (val.defaultAction) ?? "Allow",
        };
    }

    /**
     * The policies for a container registry.
     */
    export interface PoliciesResponse {
        /**
         * The export policy for a container registry.
         */
        exportPolicy?: ExportPolicyResponse;
        /**
         * The quarantine policy for a container registry.
         */
        quarantinePolicy?: QuarantinePolicyResponse;
        /**
         * The retention policy for a container registry.
         */
        retentionPolicy?: RetentionPolicyResponse;
        /**
         * The content trust policy for a container registry.
         */
        trustPolicy?: TrustPolicyResponse;
    }
    /**
     * policiesResponseProvideDefaults sets the appropriate defaults for PoliciesResponse
     */
    export function policiesResponseProvideDefaults(val: PoliciesResponse): PoliciesResponse {
        return {
            ...val,
            exportPolicy: (val.exportPolicy ? exportPolicyResponseProvideDefaults(val.exportPolicy) : undefined),
            quarantinePolicy: (val.quarantinePolicy ? quarantinePolicyResponseProvideDefaults(val.quarantinePolicy) : undefined),
            retentionPolicy: (val.retentionPolicy ? retentionPolicyResponseProvideDefaults(val.retentionPolicy) : undefined),
            trustPolicy: (val.trustPolicy ? trustPolicyResponseProvideDefaults(val.trustPolicy) : undefined),
        };
    }

    /**
     * An object that represents a private endpoint connection for a container registry.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The resource ID.
         */
        id: string;
        /**
         * The name of the resource.
         */
        name: string;
        /**
         * The resource of private endpoint.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource.
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * This is private endpoint resource created with Microsoft.Network resource provider.
         */
        id?: string;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The description for connection status. For example if connection is rejected it can indicate reason for rejection.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * The quarantine policy for a container registry.
     */
    export interface QuarantinePolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * quarantinePolicyResponseProvideDefaults sets the appropriate defaults for QuarantinePolicyResponse
     */
    export function quarantinePolicyResponseProvideDefaults(val: QuarantinePolicyResponse): QuarantinePolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The login password for the container registry.
     */
    export interface RegistryPasswordResponse {
        /**
         * The password name.
         */
        name?: string;
        /**
         * The password value.
         */
        value?: string;
    }

    /**
     * The request that generated the event.
     */
    export interface RequestResponse {
        /**
         * The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
         */
        addr?: string;
        /**
         * The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
         */
        host?: string;
        /**
         * The ID of the request that initiated the event.
         */
        id?: string;
        /**
         * The request method that generated the event.
         */
        method?: string;
        /**
         * The user agent header of the request.
         */
        useragent?: string;
    }

    /**
     * The retention policy for a container registry.
     */
    export interface RetentionPolicyResponse {
        /**
         * The number of days to retain an untagged manifest after which it gets purged.
         */
        days?: number;
        /**
         * The timestamp when the policy was last updated.
         */
        lastUpdatedTime: string;
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * retentionPolicyResponseProvideDefaults sets the appropriate defaults for RetentionPolicyResponse
     */
    export function retentionPolicyResponseProvideDefaults(val: RetentionPolicyResponse): RetentionPolicyResponse {
        return {
            ...val,
            days: (val.days) ?? 7,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The SKU of a container registry.
     */
    export interface SkuResponse {
        /**
         * The SKU name of the container registry. Required for registry creation.
         */
        name: string;
        /**
         * The SKU tier based on the SKU name.
         */
        tier: string;
    }

    /**
     * The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
     */
    export interface SourceResponse {
        /**
         * The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
         */
        addr?: string;
        /**
         * The running instance of an application. Changes after each restart.
         */
        instanceID?: string;
    }

    /**
     * The status of an Azure resource at the time the operation was called.
     */
    export interface StatusResponse {
        /**
         * The short label for the status.
         */
        displayStatus: string;
        /**
         * The detailed message for the status, including alerts and error messages.
         */
        message: string;
        /**
         * The timestamp when the status was changed to the current value.
         */
        timestamp: string;
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
         * The timestamp of resource modification (UTC).
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

    /**
     * The target of the event.
     */
    export interface TargetResponse {
        /**
         * The digest of the content, as defined by the Registry V2 HTTP API Specification.
         */
        digest?: string;
        /**
         * The number of bytes of the content. Same as Size field.
         */
        length?: number;
        /**
         * The MIME type of the referenced object.
         */
        mediaType?: string;
        /**
         * The name of the artifact.
         */
        name?: string;
        /**
         * The repository name.
         */
        repository?: string;
        /**
         * The number of bytes of the content. Same as Length field.
         */
        size?: number;
        /**
         * The tag name.
         */
        tag?: string;
        /**
         * The direct URL to the content.
         */
        url?: string;
        /**
         * The version of the artifact.
         */
        version?: string;
    }

    /**
     * The properties of a certificate used for authenticating a token.
     */
    export interface TokenCertificateResponse {
        /**
         * Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
         */
        encodedPemCertificate?: string;
        /**
         * The expiry datetime of the certificate.
         */
        expiry?: string;
        name?: string;
        /**
         * The thumbprint of the certificate.
         */
        thumbprint?: string;
    }

    /**
     * The properties of the credentials that can be used for authenticating the token.
     */
    export interface TokenCredentialsPropertiesResponse {
        certificates?: TokenCertificateResponse[];
        passwords?: TokenPasswordResponse[];
    }

    /**
     * The password that will be used for authenticating the token of a container registry.
     */
    export interface TokenPasswordResponse {
        /**
         * The creation datetime of the password.
         */
        creationTime?: string;
        /**
         * The expiry datetime of the password.
         */
        expiry?: string;
        /**
         * The password name "password1" or "password2"
         */
        name?: string;
        /**
         * The password value.
         */
        value: string;
    }

    /**
     * The content trust policy for a container registry.
     */
    export interface TrustPolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
        /**
         * The type of trust policy.
         */
        type?: string;
    }
    /**
     * trustPolicyResponseProvideDefaults sets the appropriate defaults for TrustPolicyResponse
     */
    export function trustPolicyResponseProvideDefaults(val: TrustPolicyResponse): TrustPolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "disabled",
            type: (val.type) ?? "Notary",
        };
    }

    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }
