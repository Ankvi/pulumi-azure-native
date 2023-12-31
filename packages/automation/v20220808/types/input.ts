import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleArgs {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: pulumi.Input<pulumi.Input<AdvancedScheduleMonthlyOccurrenceArgs>[]>;
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceArgs {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: pulumi.Input<string | enums.ScheduleDay>;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: pulumi.Input<number>;
    }

    /**
     * The connection type property associated with the entity.
     */
    export interface ConnectionTypeAssociationPropertyArgs {
        /**
         * Gets or sets the name of the connection type.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Definition of the runbook property type.
     */
    export interface ContentHashArgs {
        /**
         * Gets or sets the content hash algorithm used to hash the content.
         */
        algorithm: pulumi.Input<string>;
        /**
         * Gets or sets expected hash value of the content.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Definition of the content link.
     */
    export interface ContentLinkArgs {
        /**
         * Gets or sets the hash.
         */
        contentHash?: pulumi.Input<ContentHashArgs>;
        /**
         * Gets or sets the uri of the runbook content.
         */
        uri?: pulumi.Input<string>;
        /**
         * Gets or sets the version of the content.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Definition of the content source.
     */
    export interface ContentSourceArgs {
        /**
         * Gets or sets the hash.
         */
        hash?: pulumi.Input<ContentHashArgs>;
        /**
         * Gets or sets the content source type.
         */
        type?: pulumi.Input<string | enums.ContentSourceType>;
        /**
         * Gets or sets the value of the content. This is based on the content source type.
         */
        value?: pulumi.Input<string>;
        /**
         * Gets or sets the version of the content.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * The Dsc configuration property associated with the entity.
     */
    export interface DscConfigurationAssociationPropertyArgs {
        /**
         * Gets or sets the name of the Dsc configuration.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Definition of the configuration parameter type.
     */
    export interface DscConfigurationParameterArgs {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: pulumi.Input<boolean>;
        /**
         * Get or sets the position of the parameter.
         */
        position?: pulumi.Input<number>;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The encryption settings for automation account
     */
    export interface EncryptionPropertiesArgs {
        /**
         * User identity used for CMK.
         */
        identity?: pulumi.Input<EncryptionPropertiesIdentityArgs>;
        /**
         * Encryption Key Source
         */
        keySource?: pulumi.Input<enums.EncryptionKeySourceType>;
        /**
         * Key vault properties.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }

    /**
     * User identity used for CMK.
     */
    export interface EncryptionPropertiesIdentityArgs {
        /**
         * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentity?: any;
    }

    /**
     * Definition of the connection fields.
     */
    export interface FieldDefinitionArgs {
        /**
         * Gets or sets the isEncrypted flag of the connection field definition.
         */
        isEncrypted?: pulumi.Input<boolean>;
        /**
         * Gets or sets the isOptional flag of the connection field definition.
         */
        isOptional?: pulumi.Input<boolean>;
        /**
         * Gets or sets the type of the connection field definition.
         */
        type: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Settings concerning key vault encryption for a configuration store.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of key used to encrypt data.
         */
        keyName?: pulumi.Input<string>;
        /**
         * The key version of the key used to encrypt data.
         */
        keyVersion?: pulumi.Input<string>;
        /**
         * The URI of the key vault key used to encrypt data.
         */
        keyvaultUri?: pulumi.Input<string>;
    }

    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyArgs {
        /**
         * Gets or sets the name of the credential.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The runbook property associated with the entity.
     */
    export interface RunbookAssociationPropertyArgs {
        /**
         * Gets or sets the name of the runbook.
         */
        name?: pulumi.Input<string>;
    }

    export interface RunbookDraftArgs {
        /**
         * Gets or sets the creation time of the runbook draft.
         */
        creationTime?: pulumi.Input<string>;
        /**
         * Gets or sets the draft runbook content link.
         */
        draftContentLink?: pulumi.Input<ContentLinkArgs>;
        /**
         * Gets or sets whether runbook is in edit mode.
         */
        inEdit?: pulumi.Input<boolean>;
        /**
         * Gets or sets the last modified time of the runbook draft.
         */
        lastModifiedTime?: pulumi.Input<string>;
        /**
         * Gets or sets the runbook output types.
         */
        outputTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets or sets the runbook draft parameters.
         */
        parameters?: pulumi.Input<{[key: string]: pulumi.Input<RunbookParameterArgs>}>;
    }

    /**
     * Definition of the runbook parameter type.
     */
    export interface RunbookParameterArgs {
        /**
         * Gets or sets the default value of parameter.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
         */
        isMandatory?: pulumi.Input<boolean>;
        /**
         * Get or sets the position of the parameter.
         */
        position?: pulumi.Input<number>;
        /**
         * Gets or sets the type of the parameter.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * The schedule property associated with the entity.
     */
    export interface ScheduleAssociationPropertyArgs {
        /**
         * Gets or sets the name of the Schedule.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * The account SKU.
     */
    export interface SkuArgs {
        /**
         * Gets or sets the SKU capacity.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Gets or sets the SKU family.
         */
        family?: pulumi.Input<string>;
        /**
         * Gets or sets the SKU name of the account.
         */
        name: pulumi.Input<string | enums.SkuNameEnum>;
    }

    export interface SourceControlSecurityTokenPropertiesArgs {
        /**
         * The access token.
         */
        accessToken?: pulumi.Input<string>;
        /**
         * The refresh token.
         */
        refreshToken?: pulumi.Input<string>;
        /**
         * The token type. Must be either PersonalAccessToken or Oauth.
         */
        tokenType?: pulumi.Input<string | enums.TokenType>;
    }
