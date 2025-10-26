import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Antivirus scanning rules for replicating data. By default, all antivirus scanning solutions are disabled.
 */
export interface AntivirusRulesetArgs {
    /**
     * Optional. The list of antiviruses to be used as a scanning solution for replicating data.
     */
    avSolutions?: pulumi.Input<pulumi.Input<string | enums.AntivirusSolutions>[]>;
}

/**
 * Rules for regulating supported archive files (BZip2, Cpio, Deb, GZip, Rpm, Tar, Zip) during data replication. All properties are optional and only the configured options will be applied against archives. As an example, suppose minimumSizeForExpansion is 10 MiB and maximumExpansionSizeLimit is 1 GiB. Then all archives smaller than 10 MiB will be treated as though the archive ruleset is disabled, although other rulesets will apply as usual. Furthermore, all archives at least 10 MiB in size but with a decompressed size greater than 1 GiB will fail the ruleset. All other archives will have their contents extracted and each extracted element will be applied to all rulesets.
 */
export interface ArchiveRulesetArgs {
    /**
     * Optional. Provides the multiplication value for an archive in total based on the initial object being validated. This value takes the root object size and multiplies it by this value to create a maximum. Once this maximum is exceeded, the archive is failed. Used to detect and block archives with suspiciously high compression (e.g., zip bombs).
     */
    maximumCompressionRatioLimit?: pulumi.Input<number>;
    /**
     * Optional. The maximum depth of nested archives that can be expanded. Limits how many layers of embedded archives will be processed. Archives exceeding the max limit will be denied for replication.
     */
    maximumDepthLimit?: pulumi.Input<number>;
    /**
     * Optional. The combined maximum size (in bytes) of all extracted files that an expanded archive is allowed to reach. Archives exceeding the max limit will be denied for replication.
     */
    maximumExpansionSizeLimit?: pulumi.Input<number>;
    /**
     * Optional. Default is 0. The minimum archive file size (in bytes) required to trigger expansion during replication. Any archive file size below the configured threshold will skip the rest of the configured rulesets for archives.
     */
    minimumSizeForExpansion?: pulumi.Input<number>;
}
/**
 * archiveRulesetArgsProvideDefaults sets the appropriate defaults for ArchiveRulesetArgs
 */
export function archiveRulesetArgsProvideDefaults(val: ArchiveRulesetArgs): ArchiveRulesetArgs {
    return {
        ...val,
        minimumSizeForExpansion: (val.minimumSizeForExpansion) ?? 0,
    };
}

/**
 * Properties of connection
 */
export interface ConnectionPropertiesArgs {
    /**
     * Direction of data movement
     */
    direction?: pulumi.Input<string | enums.Direction>;
    /**
     * The flow types being requested for this connection
     */
    flowTypes?: pulumi.Input<pulumi.Input<string | enums.FlowType>[]>;
    /**
     * Justification for the connection request
     */
    justification?: pulumi.Input<string>;
    /**
     * PIN to link requests together
     */
    pin?: pulumi.Input<string>;
    /**
     * Pipeline to use to transfer data
     */
    pipeline: pulumi.Input<string>;
    /**
     * The policies for this connection
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The primary contact for this connection request
     */
    primaryContact?: pulumi.Input<string>;
    /**
     * Subscription ID to link cloud subscriptions together
     */
    remoteSubscriptionId?: pulumi.Input<string>;
    /**
     * Requirement ID of the connection
     */
    requirementId?: pulumi.Input<string>;
    /**
     * The schema URIs for this connection
     */
    schemaUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The schemas for this connection
     */
    schemas?: pulumi.Input<pulumi.Input<SchemaArgs>[]>;
    /**
     * The secondary contacts for this connection request
     */
    secondaryContacts?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Defines rules that enforce minimum and maximum file size limits for data replication.
 */
export interface DataSizeRulesetArgs {
    /**
     * Optional. Specifies the maximum allowed size (in bytes) for files to be replicated. Any file size greater than maximum will be denied replication.
     */
    maximum?: pulumi.Input<number>;
    /**
     * Optional. Default is 0. Specifies the minimum required size (in bytes) for a file to be eligible for replication. Any file size less than minimum will be denied replication.
     */
    minimum?: pulumi.Input<number>;
}
/**
 * dataSizeRulesetArgsProvideDefaults sets the appropriate defaults for DataSizeRulesetArgs
 */
export function dataSizeRulesetArgsProvideDefaults(val: DataSizeRulesetArgs): DataSizeRulesetArgs {
    return {
        ...val,
        minimum: (val.minimum) ?? 0,
    };
}

/**
 * Defines the full set of properties for a FlowProfile resource.
 */
export interface FlowProfilePropertiesArgs {
    /**
     * A user-defined description of the FlowProfile.
     */
    description: pulumi.Input<string>;
    /**
     * The data replication scenario handled by this FlowProfile. Please not, that this value cannot be updated after creation.
     */
    replicationScenario: pulumi.Input<string | enums.DataClassType>;
    /**
     * A set of configurable rulesets applied to this FlowProfile.
     */
    rulesets?: pulumi.Input<FlowProfileRulesetsArgs>;
    /**
     * The operational status of the FlowProfile.
     */
    status: pulumi.Input<string | enums.FlowProfileStatus>;
}
/**
 * flowProfilePropertiesArgsProvideDefaults sets the appropriate defaults for FlowProfilePropertiesArgs
 */
export function flowProfilePropertiesArgsProvideDefaults(val: FlowProfilePropertiesArgs): FlowProfilePropertiesArgs {
    return {
        ...val,
        rulesets: (val.rulesets ? pulumi.output(val.rulesets).apply(flowProfileRulesetsArgsProvideDefaults) : undefined),
    };
}

/**
 * The allowed set of configurable rulesets for a FlowProfile resource, used during data replication. All rulesets are optional, and any ruleset configured will be applied to every applicable replicating data. Any data that fails a ruleset will be denied replication. If a ruleset is not configured then the ruleset is considered disabled and will not apply towards replicating data.
 */
export interface FlowProfileRulesetsArgs {
    /**
     * Antivirus scanning rules for replicated data.
     */
    antivirus?: pulumi.Input<AntivirusRulesetArgs>;
    /**
     * Rules for handling archive files during replication.
     */
    archives?: pulumi.Input<ArchiveRulesetArgs>;
    /**
     * Rules that enforce minimum and maximum data size limits.
     */
    dataSize?: pulumi.Input<DataSizeRulesetArgs>;
    /**
     * Rules for filtering files based on MIME types.
     */
    mimeFilters?: pulumi.Input<MimeFilterRulesetArgs>;
    /**
     * Rules for detecting and blocking specific text patterns.
     */
    textMatching?: pulumi.Input<TextMatchingRulesetArgs>;
    /**
     * Rules for filtering XML content using XSD schemas.
     */
    xmlFilters?: pulumi.Input<XmlFilterRulesetArgs>;
}
/**
 * flowProfileRulesetsArgsProvideDefaults sets the appropriate defaults for FlowProfileRulesetsArgs
 */
export function flowProfileRulesetsArgsProvideDefaults(val: FlowProfileRulesetsArgs): FlowProfileRulesetsArgs {
    return {
        ...val,
        archives: (val.archives ? pulumi.output(val.archives).apply(archiveRulesetArgsProvideDefaults) : undefined),
        dataSize: (val.dataSize ? pulumi.output(val.dataSize).apply(dataSizeRulesetArgsProvideDefaults) : undefined),
    };
}

/**
 * Properties of flow
 */
export interface FlowPropertiesArgs {
    /**
     * The connection associated with this flow
     */
    connection?: pulumi.Input<SelectedResourceArgs>;
    /**
     * The URI to the customer managed key for this flow
     */
    customerManagedKeyVaultUri?: pulumi.Input<string>;
    /**
     * Transfer Storage Blobs or Tables
     */
    dataType?: pulumi.Input<string | enums.DataType>;
    /**
     * The destination endpoint ports of the stream
     */
    destinationEndpointPorts?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The destination endpoints of the stream
     */
    destinationEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The flow type for this flow
     */
    flowType?: pulumi.Input<string | enums.FlowType>;
    /**
     * AME, PME, or TORUS only! AKV Chain Containing SAS Token
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The messaging options for this flow
     */
    messagingOptions?: pulumi.Input<MessagingOptionsArgs>;
    /**
     * The passphrase used for SRT streams
     */
    passphrase?: pulumi.Input<string>;
    /**
     * The policies for this flow
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The selected schema for this flow
     */
    schema?: pulumi.Input<SchemaArgs>;
    /**
     * Service Bus Queue ID
     */
    serviceBusQueueId?: pulumi.Input<string>;
    /**
     * The source IP address and CIDR ranges of the stream
     */
    sourceAddresses?: pulumi.Input<StreamSourceAddressesArgs>;
    /**
     * Status of the current flow
     */
    status?: pulumi.Input<string | enums.FlowStatus>;
    /**
     * Storage Account ID
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Storage Account
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Storage Container Name
     */
    storageContainerName?: pulumi.Input<string>;
    /**
     * The flow stream identifier
     */
    streamId?: pulumi.Input<string>;
    /**
     * The latency of the stream in milliseconds
     */
    streamLatency?: pulumi.Input<number>;
    /**
     * The protocol of the stream
     */
    streamProtocol?: pulumi.Input<string | enums.StreamProtocol>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The option associated with messaging flows.
 */
export interface MessagingOptionsArgs {
    /**
     * Billing tier for this messaging flow
     */
    billingTier?: pulumi.Input<string | enums.FlowBillingTier>;
}

/**
 * Rules for filtering files based on Media types (f.k.a MIME types).
 */
export interface MimeFilterRulesetArgs {
    /**
     * Defines the Media types (f.k.a MIME types) and associated file extensions to be filtered. For more detail, please refer to the MimeTypeFiler model.
     */
    filters?: pulumi.Input<pulumi.Input<MimeTypeFilterArgs>[]>;
    /**
     * Specifies whether the filter is an allow list or deny list. For more detail, please refer to the FilterType model.
     */
    type?: pulumi.Input<string | enums.FilterType>;
}

/**
 * Defines a list of Media types (f.k.a MIME Types) and associated file extensions subject to filtering.
 */
export interface MimeTypeFilterArgs {
    /**
     * A list of file extensions associated with the specified Media type (e.g., .json, .png). To specify files with no extension, use an empty string ""."
     */
    extensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Media Types (f.k.a MIME types), following IANA standards (e.g., application/json, image/png). For a more detailed list of allowed media types please refer to the Tika documentation: https://github.com/apache/tika/blob/main/tika-core/src/main/resources/org/apache/tika/mime/tika-mimetypes.xml
     */
    media?: pulumi.Input<string>;
}

/**
 * Properties of pipeline
 */
export interface PipelinePropertiesArgs {
    /**
     * Display name of this pipeline
     */
    displayName?: pulumi.Input<string>;
    /**
     * The flow types allowed for this pipeline
     */
    flowTypes?: pulumi.Input<pulumi.Input<string | enums.FlowType>[]>;
    /**
     * The policies for this pipeline
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Remote cloud of the data to be transferred or received
     */
    remoteCloud: pulumi.Input<string>;
    /**
     * Subscribers of this resource
     */
    subscribers?: pulumi.Input<pulumi.Input<SubscriberArgs>[]>;
}

/**
 * Plan for the resource.
 */
export interface PlanArgs {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: pulumi.Input<string>;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: pulumi.Input<string>;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: pulumi.Input<string>;
    /**
     * The version of the desired product/artifact.
     */
    version?: pulumi.Input<string>;
}

/**
 * The schema object.
 */
export interface SchemaArgs {
    /**
     * Connection ID associated with this schema
     */
    connectionId?: pulumi.Input<string>;
    /**
     * Content of the schema
     */
    content?: pulumi.Input<string>;
    /**
     * The direction of the schema.
     */
    direction?: pulumi.Input<string | enums.SchemaDirection>;
    /**
     * ID associated with this schema
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the schema
     */
    name?: pulumi.Input<string>;
    /**
     * The Schema Type
     */
    schemaType?: pulumi.Input<string | enums.SchemaType>;
    /**
     * Uri containing SAS token for the zipped schema
     */
    schemaUri?: pulumi.Input<string>;
    /**
     * Status of the schema
     */
    status?: pulumi.Input<string | enums.SchemaStatus>;
}

/**
 * A resource selected from ARM
 */
export interface SelectedResourceArgs {
    /**
     * Id of the connection
     */
    id: pulumi.Input<string>;
    /**
     * Location of the connection
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the connection
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the subscription with the connection
     */
    subscriptionName?: pulumi.Input<string>;
}

/**
 * The source IP address and CIDR ranges of the stream
 */
export interface StreamSourceAddressesArgs {
    /**
     * A source IP address or CIDR range
     */
    sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SubscriberArgs {
    /**
     * Email of the subscriber
     */
    email?: pulumi.Input<string>;
    /**
     * Number specifying what notifications to receive
     */
    notifications?: pulumi.Input<number>;
}

/**
 * Configuration options for the text matching ruleset. For example, if the configuration is to deny "hello world" for partial case-insensitive words then "chello worlds" would get detected and the resulting file would be denied.
 */
export interface TextMatchArgs {
    /**
     * Specifies the text matching conditions based on casing. For more detail please refer to the Casing model.
     */
    caseSensitivity: pulumi.Input<string | enums.Casing>;
    /**
     * Specifies the text matching condition for text comparison. For more detail please refer to the MatchType model.
     */
    matchType: pulumi.Input<string | enums.MatchType>;
    /**
     * The word or phrase to match against replicated content. A phrase with spaces will be considered a single substring.
     */
    text: pulumi.Input<string>;
}
/**
 * textMatchArgsProvideDefaults sets the appropriate defaults for TextMatchArgs
 */
export function textMatchArgsProvideDefaults(val: TextMatchArgs): TextMatchArgs {
    return {
        ...val,
        caseSensitivity: (val.caseSensitivity) ?? "Insensitive",
        matchType: (val.matchType) ?? "Partial",
    };
}

/**
 * Rules for detecting and blocking specific text patterns. If a file contains a text pattern that is part of the configured deny list, the file will be denied.
 */
export interface TextMatchingRulesetArgs {
    /**
     * A list of text patterns to block, each with matching rules and case sensitivity options.
     */
    deny?: pulumi.Input<pulumi.Input<TextMatchArgs>[]>;
}

/**
 * Rules for filtering XML content using XSD schemas.
 */
export interface XmlFilterRulesetArgs {
    /**
     * The default XML namespace used for schema validation.
     */
    defaultNamespace?: pulumi.Input<string>;
    /**
     * Defines the method for referencing the xml schema.
     */
    reference?: pulumi.Input<string | enums.XmlReferenceType>;
    /**
     * The inline XSD schema to be used for validation.
     */
    schema?: pulumi.Input<string>;
}
