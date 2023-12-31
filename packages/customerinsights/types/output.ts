import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The AssignmentPrincipal
 */
export interface AssignmentPrincipalResponse {
    /**
     * The principal id being assigned to.
     */
    principalId: string;
    /**
     * Other metadata for the principal.
     */
    principalMetadata?: {[key: string]: string};
    /**
     * The Type of the principal ID.
     */
    principalType: string;
}

/**
 * Definition of canonical profile.
 */
export interface CanonicalProfileDefinitionResponse {
    /**
     * Canonical profile ID.
     */
    canonicalProfileId?: number;
    /**
     * Properties of the canonical profile.
     */
    properties?: CanonicalProfileDefinitionResponseProperties[];
}

/**
 * The definition of a canonical profile property.
 */
export interface CanonicalProfileDefinitionResponseProperties {
    /**
     * Profile name.
     */
    profileName?: string;
    /**
     * Property name of profile.
     */
    profilePropertyName?: string;
    /**
     * The rank.
     */
    rank?: number;
    /**
     * Type of canonical property value.
     */
    type?: string;
    /**
     * Value of the canonical property.
     */
    value?: string;
}

/**
 * Connector mapping property availability.
 */
export interface ConnectorMappingAvailabilityResponse {
    /**
     * The frequency to update.
     */
    frequency?: string;
    /**
     * The interval of the given frequency to use.
     */
    interval: number;
}

/**
 * The complete operation.
 */
export interface ConnectorMappingCompleteOperationResponse {
    /**
     * The type of completion operation.
     */
    completionOperationType?: string;
    /**
     * The destination folder where files will be moved to once the import is done.
     */
    destinationFolder?: string;
}

/**
 * The error management.
 */
export interface ConnectorMappingErrorManagementResponse {
    /**
     * The error limit allowed while importing data.
     */
    errorLimit?: number;
    /**
     * The type of error management to use for the mapping.
     */
    errorManagementType: string;
}

/**
 * Connector mapping property format.
 */
export interface ConnectorMappingFormatResponse {
    /**
     * The oData language.
     */
    acceptLanguage?: string;
    /**
     * Character separating array elements.
     */
    arraySeparator?: string;
    /**
     * The character that signifies a break between columns.
     */
    columnDelimiter?: string;
    /**
     * The type mapping format.
     */
    formatType: string;
    /**
     * Quote character, used to indicate enquoted fields.
     */
    quoteCharacter?: string;
    /**
     * Escape character for quotes, can be the same as the quoteCharacter.
     */
    quoteEscapeCharacter?: string;
}

/**
 * The connector mapping properties.
 */
export interface ConnectorMappingPropertiesResponse {
    /**
     * The availability of mapping property.
     */
    availability: ConnectorMappingAvailabilityResponse;
    /**
     * The operation after import is done.
     */
    completeOperation: ConnectorMappingCompleteOperationResponse;
    /**
     * The error management setting for the mapping.
     */
    errorManagement: ConnectorMappingErrorManagementResponse;
    /**
     * The file filter for the mapping.
     */
    fileFilter?: string;
    /**
     * The folder path for the mapping.
     */
    folderPath?: string;
    /**
     * The format of mapping property.
     */
    format: ConnectorMappingFormatResponse;
    /**
     * If the file contains a header or not.
     */
    hasHeader?: boolean;
    /**
     * Ingestion mapping information at property level.
     */
    structure: ConnectorMappingStructureResponse[];
}

/**
 * Connector mapping property structure.
 */
export interface ConnectorMappingStructureResponse {
    /**
     * The column name of the import file.
     */
    columnName: string;
    /**
     * Custom format specifier for input parsing.
     */
    customFormatSpecifier?: string;
    /**
     * Indicates if the column is encrypted.
     */
    isEncrypted?: boolean;
    /**
     * The property name of the mapping entity.
     */
    propertyName: string;
}

/**
 * The data source precedence is a way to know the precedence of each data source.
 */
export interface DataSourcePrecedenceResponse {
    /**
     * The data source reference id.
     */
    dataSourceReferenceId: string;
    /**
     * The data source type.
     */
    dataSourceType: string;
    /**
     * The data source ID.
     */
    id: number;
    /**
     * The data source name
     */
    name: string;
    /**
     * the precedence value.
     */
    precedence?: number;
    /**
     * The data source status.
     */
    status: string;
}

/**
 * Hub billing info.
 */
export interface HubBillingInfoFormatResponse {
    /**
     * The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
     */
    maxUnits?: number;
    /**
     * The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
     */
    minUnits?: number;
    /**
     * The sku name.
     */
    skuName?: string;
}

/**
 * The KPI alias.
 */
export interface KpiAliasResponse {
    /**
     * KPI alias name.
     */
    aliasName: string;
    /**
     * The expression.
     */
    expression: string;
}

/**
 * The KPI extract.
 */
export interface KpiExtractResponse {
    /**
     * The expression.
     */
    expression: string;
    /**
     * KPI extract name.
     */
    extractName: string;
}

/**
 * The KPI GroupBy field metadata.
 */
export interface KpiGroupByMetadataResponse {
    /**
     * The display name.
     */
    displayName?: {[key: string]: string};
    /**
     * The name of the field.
     */
    fieldName?: string;
    /**
     * The type of the field.
     */
    fieldType?: string;
}

/**
 * The KPI participant profile metadata.
 */
export interface KpiParticipantProfilesMetadataResponse {
    /**
     * Name of the type.
     */
    typeName: string;
}

/**
 * Defines the KPI Threshold limits.
 */
export interface KpiThresholdsResponse {
    /**
     * Whether or not the KPI is an increasing KPI.
     */
    increasingKpi: boolean;
    /**
     * The lower threshold limit.
     */
    lowerLimit: number;
    /**
     * The upper threshold limit.
     */
    upperLimit: number;
}

/**
 * The participant profile property reference.
 */
export interface ParticipantProfilePropertyReferenceResponse {
    /**
     * The source interaction property that maps to the target profile property.
     */
    interactionPropertyName: string;
    /**
     * The target profile property that maps to the source interaction property.
     */
    profilePropertyName: string;
}

/**
 * The participant property reference.
 */
export interface ParticipantPropertyReferenceResponse {
    /**
     * The source property that maps to the target property.
     */
    sourcePropertyName: string;
    /**
     * The target property that maps to the source property.
     */
    targetPropertyName: string;
}

/**
 * The definition of the prediction distribution.
 */
export interface PredictionDistributionDefinitionResponse {
    /**
     * Distributions of the prediction.
     */
    distributions?: PredictionDistributionDefinitionResponseDistributions[];
    /**
     * Total negatives in the distribution.
     */
    totalNegatives?: number;
    /**
     * Total positive in the distribution.
     */
    totalPositives?: number;
}

/**
 * The definition of a prediction distribution.
 */
export interface PredictionDistributionDefinitionResponseDistributions {
    /**
     * Number of negatives.
     */
    negatives?: number;
    /**
     * Number of negatives above threshold.
     */
    negativesAboveThreshold?: number;
    /**
     * Number of positives.
     */
    positives?: number;
    /**
     * Number of positives above threshold.
     */
    positivesAboveThreshold?: number;
    /**
     * Score threshold.
     */
    scoreThreshold?: number;
}

/**
 * The definition of a prediction grade.
 */
export interface PredictionResponseGrades {
    /**
     * Name of the grade.
     */
    gradeName?: string;
    /**
     * Maximum score threshold.
     */
    maxScoreThreshold?: number;
    /**
     * Minimum score threshold.
     */
    minScoreThreshold?: number;
}

/**
 * Definition of the link mapping of prediction.
 */
export interface PredictionResponseMappings {
    /**
     * The grade of the link mapping.
     */
    grade: string;
    /**
     * The reason of the link mapping.
     */
    reason: string;
    /**
     * The score of the link mapping.
     */
    score: string;
}

/**
 * System generated entities.
 */
export interface PredictionResponseSystemGeneratedEntities {
    /**
     * Generated interaction types.
     */
    generatedInteractionTypes?: string[];
    /**
     * Generated KPIs.
     */
    generatedKpis?: {[key: string]: string};
    /**
     * Generated links.
     */
    generatedLinks?: string[];
}

/**
 * Valid enum values in case of an enum property.
 */
export interface ProfileEnumValidValuesFormatResponse {
    /**
     * Localized names of the enum member.
     */
    localizedValueNames?: {[key: string]: string};
    /**
     * The integer value of the enum member.
     */
    value?: number;
}

/**
 * Property definition.
 */
export interface PropertyDefinitionResponse {
    /**
     * Array value separator for properties with isArray set.
     */
    arrayValueSeparator?: string;
    /**
     * This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
     */
    dataSourcePrecedenceRules: DataSourcePrecedenceResponse[];
    /**
     * Describes valid values for an enum property.
     */
    enumValidValues?: ProfileEnumValidValuesFormatResponse[];
    /**
     * Name of the property.
     */
    fieldName: string;
    /**
     * Type of the property.
     */
    fieldType: string;
    /**
     * Indicates if the property is actually an array of the fieldType above on the data api.
     */
    isArray?: boolean;
    /**
     * Whether property is available in graph or not.
     */
    isAvailableInGraph?: boolean;
    /**
     * Indicates if the property is an enum.
     */
    isEnum?: boolean;
    /**
     * Indicates if the property is an flag enum.
     */
    isFlagEnum?: boolean;
    /**
     * Whether the property is an Image.
     */
    isImage?: boolean;
    /**
     * Whether the property is a localized string.
     */
    isLocalizedString?: boolean;
    /**
     * Whether the property is a name or a part of name.
     */
    isName?: boolean;
    /**
     * Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field.
     */
    isRequired?: boolean;
    /**
     * Max length of string. Used only if type is string.
     */
    maxLength?: number;
    /**
     * The ID associated with the property.
     */
    propertyId?: string;
    /**
     * URL encoded schema.org item prop link for the property.
     */
    schemaItemPropLink?: string;
}

/**
 * The fields mapping for Relationships.
 */
export interface RelationshipLinkFieldMappingResponse {
    /**
     * The field name on the Interaction Type.
     */
    interactionFieldName: string;
    /**
     * Link type.
     */
    linkType?: string;
    /**
     * The field name on the Relationship metadata.
     */
    relationshipFieldName: string;
}

/**
 * Map a field of profile to its corresponding StrongId in Related Profile.
 */
export interface RelationshipTypeFieldMappingResponse {
    /**
     * Specifies the fieldName in profile.
     */
    profileFieldName: string;
    /**
     * Specifies the KeyProperty (from StrongId) of the related profile.
     */
    relatedProfileKeyProperty: string;
}

/**
 * Maps fields in Profile to their corresponding StrongIds in Related Profile.
 */
export interface RelationshipTypeMappingResponse {
    /**
     * Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.
     */
    fieldMappings: RelationshipTypeFieldMappingResponse[];
}

/**
 * The resource set description.
 */
export interface ResourceSetDescriptionResponse {
    /**
     * The elements included in the set.
     */
    elements?: string[];
    /**
     * The elements that are not included in the set, in case elements contains '*' indicating 'all'.
     */
    exceptions?: string[];
}

/**
 * Property/Properties which represent a unique ID.
 */
export interface StrongIdResponse {
    /**
     * Localized descriptions.
     */
    description?: {[key: string]: string};
    /**
     * Localized display name.
     */
    displayName?: {[key: string]: string};
    /**
     * The properties which make up the unique ID.
     */
    keyPropertyNames: string[];
    /**
     * The Name identifying the strong ID.
     */
    strongIdName: string;
}

/**
 * Metadata for a Link's property mapping.
 */
export interface TypePropertiesMappingResponse {
    /**
     * Link type.
     */
    linkType?: string;
    /**
     *  Property name on the source Entity Type.
     */
    sourcePropertyName: string;
    /**
     * Property name on the target Entity Type.
     */
    targetPropertyName: string;
}
