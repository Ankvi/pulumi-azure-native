import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The AssignmentPrincipal
     */
    export interface AssignmentPrincipalArgs {
        /**
         * The principal id being assigned to.
         */
        principalId: pulumi.Input<string>;
        /**
         * Other metadata for the principal.
         */
        principalMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The Type of the principal ID.
         */
        principalType: pulumi.Input<string>;
    }

    /**
     * Connector mapping property availability.
     */
    export interface ConnectorMappingAvailabilityArgs {
        /**
         * The frequency to update.
         */
        frequency?: pulumi.Input<enums.FrequencyTypes>;
        /**
         * The interval of the given frequency to use.
         */
        interval: pulumi.Input<number>;
    }

    /**
     * The complete operation.
     */
    export interface ConnectorMappingCompleteOperationArgs {
        /**
         * The type of completion operation.
         */
        completionOperationType?: pulumi.Input<enums.CompletionOperationTypes>;
        /**
         * The destination folder where files will be moved to once the import is done.
         */
        destinationFolder?: pulumi.Input<string>;
    }

    /**
     * The error management.
     */
    export interface ConnectorMappingErrorManagementArgs {
        /**
         * The error limit allowed while importing data.
         */
        errorLimit?: pulumi.Input<number>;
        /**
         * The type of error management to use for the mapping.
         */
        errorManagementType: pulumi.Input<enums.ErrorManagementTypes>;
    }

    /**
     * Connector mapping property format.
     */
    export interface ConnectorMappingFormatArgs {
        /**
         * The oData language.
         */
        acceptLanguage?: pulumi.Input<string>;
        /**
         * Character separating array elements.
         */
        arraySeparator?: pulumi.Input<string>;
        /**
         * The character that signifies a break between columns.
         */
        columnDelimiter?: pulumi.Input<string>;
        /**
         * The type mapping format.
         */
        formatType: pulumi.Input<enums.FormatTypes>;
        /**
         * Quote character, used to indicate enquoted fields.
         */
        quoteCharacter?: pulumi.Input<string>;
        /**
         * Escape character for quotes, can be the same as the quoteCharacter.
         */
        quoteEscapeCharacter?: pulumi.Input<string>;
    }

    /**
     * The connector mapping properties.
     */
    export interface ConnectorMappingPropertiesArgs {
        /**
         * The availability of mapping property.
         */
        availability: pulumi.Input<ConnectorMappingAvailabilityArgs>;
        /**
         * The operation after import is done.
         */
        completeOperation: pulumi.Input<ConnectorMappingCompleteOperationArgs>;
        /**
         * The error management setting for the mapping.
         */
        errorManagement: pulumi.Input<ConnectorMappingErrorManagementArgs>;
        /**
         * The file filter for the mapping.
         */
        fileFilter?: pulumi.Input<string>;
        /**
         * The folder path for the mapping.
         */
        folderPath?: pulumi.Input<string>;
        /**
         * The format of mapping property.
         */
        format: pulumi.Input<ConnectorMappingFormatArgs>;
        /**
         * If the file contains a header or not.
         */
        hasHeader?: pulumi.Input<boolean>;
        /**
         * Ingestion mapping information at property level.
         */
        structure: pulumi.Input<pulumi.Input<ConnectorMappingStructureArgs>[]>;
    }

    /**
     * Connector mapping property structure.
     */
    export interface ConnectorMappingStructureArgs {
        /**
         * The column name of the import file.
         */
        columnName: pulumi.Input<string>;
        /**
         * Custom format specifier for input parsing.
         */
        customFormatSpecifier?: pulumi.Input<string>;
        /**
         * Indicates if the column is encrypted.
         */
        isEncrypted?: pulumi.Input<boolean>;
        /**
         * The property name of the mapping entity.
         */
        propertyName: pulumi.Input<string>;
    }

    /**
     * Hub billing info.
     */
    export interface HubBillingInfoFormatArgs {
        /**
         * The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
         */
        maxUnits?: pulumi.Input<number>;
        /**
         * The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
         */
        minUnits?: pulumi.Input<number>;
        /**
         * The sku name.
         */
        skuName?: pulumi.Input<string>;
    }

    /**
     * The KPI alias.
     */
    export interface KpiAliasArgs {
        /**
         * KPI alias name.
         */
        aliasName: pulumi.Input<string>;
        /**
         * The expression.
         */
        expression: pulumi.Input<string>;
    }

    /**
     * The KPI extract.
     */
    export interface KpiExtractArgs {
        /**
         * The expression.
         */
        expression: pulumi.Input<string>;
        /**
         * KPI extract name.
         */
        extractName: pulumi.Input<string>;
    }

    /**
     * Defines the KPI Threshold limits.
     */
    export interface KpiThresholdsArgs {
        /**
         * Whether or not the KPI is an increasing KPI.
         */
        increasingKpi: pulumi.Input<boolean>;
        /**
         * The lower threshold limit.
         */
        lowerLimit: pulumi.Input<number>;
        /**
         * The upper threshold limit.
         */
        upperLimit: pulumi.Input<number>;
    }

    /**
     * The participant profile property reference.
     */
    export interface ParticipantProfilePropertyReferenceArgs {
        /**
         * The source interaction property that maps to the target profile property.
         */
        interactionPropertyName: pulumi.Input<string>;
        /**
         * The target profile property that maps to the source interaction property.
         */
        profilePropertyName: pulumi.Input<string>;
    }

    /**
     * The participant property reference.
     */
    export interface ParticipantPropertyReferenceArgs {
        /**
         * The source property that maps to the target property.
         */
        sourcePropertyName: pulumi.Input<string>;
        /**
         * The target property that maps to the source property.
         */
        targetPropertyName: pulumi.Input<string>;
    }

    /**
     * The definition of a prediction grade.
     */
    export interface PredictionGradesArgs {
        /**
         * Name of the grade.
         */
        gradeName?: pulumi.Input<string>;
        /**
         * Maximum score threshold.
         */
        maxScoreThreshold?: pulumi.Input<number>;
        /**
         * Minimum score threshold.
         */
        minScoreThreshold?: pulumi.Input<number>;
    }

    /**
     * Definition of the link mapping of prediction.
     */
    export interface PredictionMappingsArgs {
        /**
         * The grade of the link mapping.
         */
        grade: pulumi.Input<string>;
        /**
         * The reason of the link mapping.
         */
        reason: pulumi.Input<string>;
        /**
         * The score of the link mapping.
         */
        score: pulumi.Input<string>;
    }

    /**
     * Valid enum values in case of an enum property.
     */
    export interface ProfileEnumValidValuesFormatArgs {
        /**
         * Localized names of the enum member.
         */
        localizedValueNames?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The integer value of the enum member.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * Property definition.
     */
    export interface PropertyDefinitionArgs {
        /**
         * Array value separator for properties with isArray set.
         */
        arrayValueSeparator?: pulumi.Input<string>;
        /**
         * Describes valid values for an enum property.
         */
        enumValidValues?: pulumi.Input<pulumi.Input<ProfileEnumValidValuesFormatArgs>[]>;
        /**
         * Name of the property.
         */
        fieldName: pulumi.Input<string>;
        /**
         * Type of the property.
         */
        fieldType: pulumi.Input<string>;
        /**
         * Indicates if the property is actually an array of the fieldType above on the data api.
         */
        isArray?: pulumi.Input<boolean>;
        /**
         * Whether property is available in graph or not.
         */
        isAvailableInGraph?: pulumi.Input<boolean>;
        /**
         * Indicates if the property is an enum.
         */
        isEnum?: pulumi.Input<boolean>;
        /**
         * Indicates if the property is an flag enum.
         */
        isFlagEnum?: pulumi.Input<boolean>;
        /**
         * Whether the property is an Image.
         */
        isImage?: pulumi.Input<boolean>;
        /**
         * Whether the property is a localized string.
         */
        isLocalizedString?: pulumi.Input<boolean>;
        /**
         * Whether the property is a name or a part of name.
         */
        isName?: pulumi.Input<boolean>;
        /**
         * Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field.
         */
        isRequired?: pulumi.Input<boolean>;
        /**
         * Max length of string. Used only if type is string.
         */
        maxLength?: pulumi.Input<number>;
        /**
         * The ID associated with the property.
         */
        propertyId?: pulumi.Input<string>;
        /**
         * URL encoded schema.org item prop link for the property.
         */
        schemaItemPropLink?: pulumi.Input<string>;
    }

    /**
     * The fields mapping for Relationships.
     */
    export interface RelationshipLinkFieldMappingArgs {
        /**
         * The field name on the Interaction Type.
         */
        interactionFieldName: pulumi.Input<string>;
        /**
         * Link type.
         */
        linkType?: pulumi.Input<enums.LinkTypes>;
        /**
         * The field name on the Relationship metadata.
         */
        relationshipFieldName: pulumi.Input<string>;
    }

    /**
     * Map a field of profile to its corresponding StrongId in Related Profile.
     */
    export interface RelationshipTypeFieldMappingArgs {
        /**
         * Specifies the fieldName in profile.
         */
        profileFieldName: pulumi.Input<string>;
        /**
         * Specifies the KeyProperty (from StrongId) of the related profile.
         */
        relatedProfileKeyProperty: pulumi.Input<string>;
    }

    /**
     * Maps fields in Profile to their corresponding StrongIds in Related Profile.
     */
    export interface RelationshipTypeMappingArgs {
        /**
         * Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.
         */
        fieldMappings: pulumi.Input<pulumi.Input<RelationshipTypeFieldMappingArgs>[]>;
    }

    /**
     * The resource set description.
     */
    export interface ResourceSetDescriptionArgs {
        /**
         * The elements included in the set.
         */
        elements?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The elements that are not included in the set, in case elements contains '*' indicating 'all'.
         */
        exceptions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Property/Properties which represent a unique ID.
     */
    export interface StrongIdArgs {
        /**
         * Localized descriptions.
         */
        description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Localized display name.
         */
        displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The properties which make up the unique ID.
         */
        keyPropertyNames: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The Name identifying the strong ID.
         */
        strongIdName: pulumi.Input<string>;
    }

    /**
     * Metadata for a Link's property mapping.
     */
    export interface TypePropertiesMappingArgs {
        /**
         * Link type.
         */
        linkType?: pulumi.Input<enums.LinkTypes>;
        /**
         *  Property name on the source Entity Type.
         */
        sourcePropertyName: pulumi.Input<string>;
        /**
         * Property name on the target Entity Type.
         */
        targetPropertyName: pulumi.Input<string>;
    }
