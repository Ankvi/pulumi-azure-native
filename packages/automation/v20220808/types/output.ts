import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceResponse {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: string;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: number;
    }

    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleResponse {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: number[];
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: AdvancedScheduleMonthlyOccurrenceResponse[];
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: string[];
    }

    /**
     * The connection type property associated with the entity.
     */
    export interface ConnectionTypeAssociationPropertyResponse {
        /**
         * Gets or sets the name of the connection type.
         */
        name?: string;
    }

    /**
     * Definition of the runbook property type.
     */
    export interface ContentHashResponse {
        /**
         * Gets or sets the content hash algorithm used to hash the content.
         */
        algorithm: string;
        /**
         * Gets or sets expected hash value of the content.
         */
        value: string;
    }

    /**
     * Definition of the content link.
     */
    export interface ContentLinkResponse {
        /**
         * Gets or sets the hash.
         */
        contentHash?: ContentHashResponse;
        /**
         * Gets or sets the uri of the runbook content.
         */
        uri?: string;
        /**
         * Gets or sets the version of the content.
         */
        version?: string;
    }

    /**
     * Definition of the content source.
     */
    export interface ContentSourceResponse {
        /**
         * Gets or sets the hash.
         */
        hash?: ContentHashResponse;
        /**
         * Gets or sets the content source type.
         */
        type?: string;
        /**
         * Gets or sets the value of the content. This is based on the content source type.
         */
        value?: string;
        /**
         * Gets or sets the version of the content.
         */
        version?: string;
    }

    /**
     * The Dsc configuration property associated with the entity.
     */
    export interface DscConfigurationAssociationPropertyResponse {
        /**
         * Gets or sets the name of the Dsc configuration.
         */
        name?: string;
    }

    /**
     * Definition of the configuration parameter type.
     */
    export interface DscConfigurationParameterResponse {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: string;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: boolean;
        /**
         * Get or sets the position of the parameter.
         */
        position?: number;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: string;
    }

    /**
     * The encryption settings for automation account
     */
    export interface EncryptionPropertiesResponse {
        /**
         * User identity used for CMK.
         */
        identity?: EncryptionPropertiesResponseIdentity;
        /**
         * Encryption Key Source
         */
        keySource?: string;
        /**
         * Key vault properties.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
    }

    /**
     * User identity used for CMK.
     */
    export interface EncryptionPropertiesResponseIdentity {
        /**
         * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentity?: any;
    }

    /**
     * Definition of the connection fields.
     */
    export interface FieldDefinitionResponse {
        /**
         * Gets or sets the isEncrypted flag of the connection field definition.
         */
        isEncrypted?: boolean;
        /**
         * Gets or sets the isOptional flag of the connection field definition.
         */
        isOptional?: boolean;
        /**
         * Gets or sets the type of the connection field definition.
         */
        type: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
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
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesPropertiesResponse};
    }

    /**
     * Automation key which is used to register a DSC Node
     */
    export interface KeyResponse {
        /**
         * Automation key name.
         */
        keyName: string;
        /**
         * Automation key permissions.
         */
        permissions: string;
        /**
         * Value of the Automation Key used for registration.
         */
        value: string;
    }

    /**
     * Settings concerning key vault encryption for a configuration store.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The name of key used to encrypt data.
         */
        keyName?: string;
        /**
         * The key version of the key used to encrypt data.
         */
        keyVersion?: string;
        /**
         * The URI of the key vault key used to encrypt data.
         */
        keyvaultUri?: string;
    }

    /**
     * Definition of the module error info type.
     */
    export interface ModuleErrorInfoResponse {
        /**
         * Gets or sets the error code.
         */
        code?: string;
        /**
         * Gets or sets the error message.
         */
        message?: string;
    }

    /**
     * A private endpoint connection
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Gets the groupIds.
         */
        groupIds?: string[];
        /**
         * Fully qualified resource Id for the resource
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: PrivateEndpointPropertyResponse;
        /**
         * Connection State of the Private Endpoint Connection.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * The type of the resource.
         */
        type: string;
    }

    /**
     * Private endpoint which the connection belongs to.
     */
    export interface PrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    /**
     * Connection State of the Private Endpoint Connection.
     */
    export interface PrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyResponse {
        /**
         * Gets or sets the name of the credential.
         */
        name?: string;
    }

    /**
     * The runbook property associated with the entity.
     */
    export interface RunbookAssociationPropertyResponse {
        /**
         * Gets or sets the name of the runbook.
         */
        name?: string;
    }

    export interface RunbookDraftResponse {
        /**
         * Gets or sets the creation time of the runbook draft.
         */
        creationTime?: string;
        /**
         * Gets or sets the draft runbook content link.
         */
        draftContentLink?: ContentLinkResponse;
        /**
         * Gets or sets whether runbook is in edit mode.
         */
        inEdit?: boolean;
        /**
         * Gets or sets the last modified time of the runbook draft.
         */
        lastModifiedTime?: string;
        /**
         * Gets or sets the runbook output types.
         */
        outputTypes?: string[];
        /**
         * Gets or sets the runbook draft parameters.
         */
        parameters?: {[key: string]: RunbookParameterResponse};
    }

    /**
     * Definition of the runbook parameter type.
     */
    export interface RunbookParameterResponse {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: string;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: boolean;
        /**
         * Get or sets the position of the parameter.
         */
        position?: number;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: string;
    }

    /**
     * The schedule property associated with the entity.
     */
    export interface ScheduleAssociationPropertyResponse {
        /**
         * Gets or sets the name of the Schedule.
         */
        name?: string;
    }

    /**
     * The account SKU.
     */
    export interface SkuResponse {
        /**
         * Gets or sets the SKU capacity.
         */
        capacity?: number;
        /**
         * Gets or sets the SKU family.
         */
        family?: string;
        /**
         * Gets or sets the SKU name of the account.
         */
        name: string;
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

    export interface UserAssignedIdentitiesPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }
