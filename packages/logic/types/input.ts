import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The AS2 agreement acknowledgement connection settings.
 */
export interface AS2AcknowledgementConnectionSettingsArgs {
    /**
     * Indicates whether to ignore mismatch in certificate name.
     */
    ignoreCertificateNameMismatch: pulumi.Input<boolean>;
    /**
     * Indicates whether to keep the connection alive.
     */
    keepHttpConnectionAlive: pulumi.Input<boolean>;
    /**
     * Indicates whether to support HTTP status code 'CONTINUE'.
     */
    supportHttpStatusCodeContinue: pulumi.Input<boolean>;
    /**
     * Indicates whether to unfold the HTTP headers.
     */
    unfoldHttpHeaders: pulumi.Input<boolean>;
}

/**
 * The integration account AS2 agreement content.
 */
export interface AS2AgreementContentArgs {
    /**
     * The AS2 one-way receive agreement.
     */
    receiveAgreement: pulumi.Input<AS2OneWayAgreementArgs>;
    /**
     * The AS2 one-way send agreement.
     */
    sendAgreement: pulumi.Input<AS2OneWayAgreementArgs>;
}

/**
 * The AS2 agreement envelope settings.
 */
export interface AS2EnvelopeSettingsArgs {
    /**
     * The value indicating whether to auto generate file name.
     */
    autogenerateFileName: pulumi.Input<boolean>;
    /**
     * The template for file name.
     */
    fileNameTemplate: pulumi.Input<string>;
    /**
     * The message content type.
     */
    messageContentType: pulumi.Input<string>;
    /**
     * The value indicating whether to suspend message on file name generation error.
     */
    suspendMessageOnFileNameGenerationError: pulumi.Input<boolean>;
    /**
     * The value indicating whether to transmit file name in mime header.
     */
    transmitFileNameInMimeHeader: pulumi.Input<boolean>;
}

/**
 * The AS2 agreement error settings.
 */
export interface AS2ErrorSettingsArgs {
    /**
     * The value indicating whether to resend message If MDN is not received.
     */
    resendIfMDNNotReceived: pulumi.Input<boolean>;
    /**
     * The value indicating whether to suspend duplicate message.
     */
    suspendDuplicateMessage: pulumi.Input<boolean>;
}

/**
 * The AS2 agreement mdn settings.
 */
export interface AS2MdnSettingsArgs {
    /**
     * The disposition notification to header value.
     */
    dispositionNotificationTo?: pulumi.Input<string>;
    /**
     * The MDN text.
     */
    mdnText?: pulumi.Input<string>;
    /**
     * The signing or hashing algorithm.
     */
    micHashingAlgorithm: pulumi.Input<string | enums.HashingAlgorithm>;
    /**
     * The value indicating whether to send or request a MDN.
     */
    needMDN: pulumi.Input<boolean>;
    /**
     * The receipt delivery URL.
     */
    receiptDeliveryUrl?: pulumi.Input<string>;
    /**
     * The value indicating whether to send inbound MDN to message box.
     */
    sendInboundMDNToMessageBox: pulumi.Input<boolean>;
    /**
     * The value indicating whether to send the asynchronous MDN.
     */
    sendMDNAsynchronously: pulumi.Input<boolean>;
    /**
     * The value indicating whether the MDN needs to be signed or not.
     */
    signMDN: pulumi.Input<boolean>;
    /**
     * The value indicating whether to sign the outbound MDN if optional.
     */
    signOutboundMDNIfOptional: pulumi.Input<boolean>;
}

/**
 * The AS2 agreement message connection settings.
 */
export interface AS2MessageConnectionSettingsArgs {
    /**
     * The value indicating whether to ignore mismatch in certificate name.
     */
    ignoreCertificateNameMismatch: pulumi.Input<boolean>;
    /**
     * The value indicating whether to keep the connection alive.
     */
    keepHttpConnectionAlive: pulumi.Input<boolean>;
    /**
     * The value indicating whether to support HTTP status code 'CONTINUE'.
     */
    supportHttpStatusCodeContinue: pulumi.Input<boolean>;
    /**
     * The value indicating whether to unfold the HTTP headers.
     */
    unfoldHttpHeaders: pulumi.Input<boolean>;
}

/**
 * The integration account AS2 one-way agreement.
 */
export interface AS2OneWayAgreementArgs {
    /**
     * The AS2 protocol settings.
     */
    protocolSettings: pulumi.Input<AS2ProtocolSettingsArgs>;
    /**
     * The receiver business identity
     */
    receiverBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
    /**
     * The sender business identity
     */
    senderBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
}

/**
 * The AS2 agreement protocol settings.
 */
export interface AS2ProtocolSettingsArgs {
    /**
     * The acknowledgement connection settings.
     */
    acknowledgementConnectionSettings: pulumi.Input<AS2AcknowledgementConnectionSettingsArgs>;
    /**
     * The envelope settings.
     */
    envelopeSettings: pulumi.Input<AS2EnvelopeSettingsArgs>;
    /**
     * The error settings.
     */
    errorSettings: pulumi.Input<AS2ErrorSettingsArgs>;
    /**
     * The MDN settings.
     */
    mdnSettings: pulumi.Input<AS2MdnSettingsArgs>;
    /**
     * The message connection settings.
     */
    messageConnectionSettings: pulumi.Input<AS2MessageConnectionSettingsArgs>;
    /**
     * The security settings.
     */
    securitySettings: pulumi.Input<AS2SecuritySettingsArgs>;
    /**
     * The validation settings.
     */
    validationSettings: pulumi.Input<AS2ValidationSettingsArgs>;
}

/**
 * The AS2 agreement security settings.
 */
export interface AS2SecuritySettingsArgs {
    /**
     * The value indicating whether to enable NRR for inbound decoded messages.
     */
    enableNRRForInboundDecodedMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable NRR for inbound encoded messages.
     */
    enableNRRForInboundEncodedMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable NRR for inbound MDN.
     */
    enableNRRForInboundMDN: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable NRR for outbound decoded messages.
     */
    enableNRRForOutboundDecodedMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable NRR for outbound encoded messages.
     */
    enableNRRForOutboundEncodedMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable NRR for outbound MDN.
     */
    enableNRRForOutboundMDN: pulumi.Input<boolean>;
    /**
     * The name of the encryption certificate.
     */
    encryptionCertificateName?: pulumi.Input<string>;
    /**
     * The value indicating whether to send or request a MDN.
     */
    overrideGroupSigningCertificate: pulumi.Input<boolean>;
    /**
     * The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
     */
    sha2AlgorithmFormat?: pulumi.Input<string>;
    /**
     * The name of the signing certificate.
     */
    signingCertificateName?: pulumi.Input<string>;
}

/**
 * The AS2 agreement validation settings.
 */
export interface AS2ValidationSettingsArgs {
    /**
     * The value indicating whether to check for certificate revocation list on receive.
     */
    checkCertificateRevocationListOnReceive: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for certificate revocation list on send.
     */
    checkCertificateRevocationListOnSend: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate message.
     */
    checkDuplicateMessage: pulumi.Input<boolean>;
    /**
     * The value indicating whether the message has to be compressed.
     */
    compressMessage: pulumi.Input<boolean>;
    /**
     * The value indicating whether the message has to be encrypted.
     */
    encryptMessage: pulumi.Input<boolean>;
    /**
     * The encryption algorithm.
     */
    encryptionAlgorithm: pulumi.Input<string | enums.EncryptionAlgorithm>;
    /**
     * The number of days to look back for duplicate interchange.
     */
    interchangeDuplicatesValidityDays: pulumi.Input<number>;
    /**
     * The value indicating whether to override incoming message properties with those in agreement.
     */
    overrideMessageProperties: pulumi.Input<boolean>;
    /**
     * The value indicating whether the message has to be signed.
     */
    signMessage: pulumi.Input<boolean>;
    /**
     * The signing algorithm.
     */
    signingAlgorithm?: pulumi.Input<string | enums.SigningAlgorithm>;
}

/**
 * The integration account agreement content.
 */
export interface AgreementContentArgs {
    /**
     * The AS2 agreement content.
     */
    aS2?: pulumi.Input<AS2AgreementContentArgs>;
    /**
     * The EDIFACT agreement content.
     */
    edifact?: pulumi.Input<EdifactAgreementContentArgs>;
    /**
     * The X12 agreement content.
     */
    x12?: pulumi.Input<X12AgreementContentArgs>;
}

/**
 * The assembly properties definition.
 */
export interface AssemblyPropertiesArgs {
    /**
     * The assembly culture.
     */
    assemblyCulture?: pulumi.Input<string>;
    /**
     * The assembly name.
     */
    assemblyName: pulumi.Input<string>;
    /**
     * The assembly public key token.
     */
    assemblyPublicKeyToken?: pulumi.Input<string>;
    /**
     * The assembly version.
     */
    assemblyVersion?: pulumi.Input<string>;
    /**
     * The artifact changed time.
     */
    changedTime?: pulumi.Input<string>;
    content?: any;
    /**
     * The content link.
     */
    contentLink?: pulumi.Input<ContentLinkArgs>;
    /**
     * The content type.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The artifact creation time.
     */
    createdTime?: pulumi.Input<string>;
    metadata?: any;
}

/**
 * The B2B partner content.
 */
export interface B2BPartnerContentArgs {
    /**
     * The list of partner business identities.
     */
    businessIdentities?: pulumi.Input<pulumi.Input<BusinessIdentityArgs>[]>;
}

/**
 * The batch configuration properties definition.
 */
export interface BatchConfigurationPropertiesArgs {
    /**
     * The name of the batch group.
     */
    batchGroupName: pulumi.Input<string>;
    /**
     * The artifact changed time.
     */
    changedTime?: pulumi.Input<string>;
    /**
     * The artifact creation time.
     */
    createdTime?: pulumi.Input<string>;
    metadata?: any;
    /**
     * The batch release criteria.
     */
    releaseCriteria: pulumi.Input<BatchReleaseCriteriaArgs>;
}

/**
 * The batch release criteria.
 */
export interface BatchReleaseCriteriaArgs {
    /**
     * The batch size in bytes.
     */
    batchSize?: pulumi.Input<number>;
    /**
     * The message count.
     */
    messageCount?: pulumi.Input<number>;
    /**
     * The recurrence.
     */
    recurrence?: pulumi.Input<WorkflowTriggerRecurrenceArgs>;
}

/**
 * The integration account partner's business identity.
 */
export interface BusinessIdentityArgs {
    /**
     * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
     */
    qualifier: pulumi.Input<string>;
    /**
     * The user defined business identity value.
     */
    value: pulumi.Input<string>;
}

/**
 * The content link.
 */
export interface ContentLinkArgs {
    /**
     * The content link URI.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The Edifact agreement acknowledgement settings.
 */
export interface EdifactAcknowledgementSettingsArgs {
    /**
     * The acknowledgement control number lower bound.
     */
    acknowledgementControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The acknowledgement control number prefix.
     */
    acknowledgementControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The acknowledgement control number suffix.
     */
    acknowledgementControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The acknowledgement control number upper bound.
     */
    acknowledgementControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The value indicating whether to batch functional acknowledgements.
     */
    batchFunctionalAcknowledgements: pulumi.Input<boolean>;
    /**
     * The value indicating whether to batch the technical acknowledgements.
     */
    batchTechnicalAcknowledgements: pulumi.Input<boolean>;
    /**
     * The value indicating whether functional acknowledgement is needed.
     */
    needFunctionalAcknowledgement: pulumi.Input<boolean>;
    /**
     * The value indicating whether a loop is needed for valid messages.
     */
    needLoopForValidMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether technical acknowledgement is needed.
     */
    needTechnicalAcknowledgement: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover acknowledgement control number.
     */
    rolloverAcknowledgementControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to send synchronous acknowledgement.
     */
    sendSynchronousAcknowledgement: pulumi.Input<boolean>;
}

/**
 * The Edifact agreement content.
 */
export interface EdifactAgreementContentArgs {
    /**
     * The EDIFACT one-way receive agreement.
     */
    receiveAgreement: pulumi.Input<EdifactOneWayAgreementArgs>;
    /**
     * The EDIFACT one-way send agreement.
     */
    sendAgreement: pulumi.Input<EdifactOneWayAgreementArgs>;
}

/**
 * The Edifact delimiter override settings.
 */
export interface EdifactDelimiterOverrideArgs {
    /**
     * The component separator.
     */
    componentSeparator: pulumi.Input<number>;
    /**
     * The data element separator.
     */
    dataElementSeparator: pulumi.Input<number>;
    /**
     * The decimal point indicator.
     */
    decimalPointIndicator: pulumi.Input<enums.EdifactDecimalIndicator>;
    /**
     * The message association assigned code.
     */
    messageAssociationAssignedCode?: pulumi.Input<string>;
    /**
     * The message id.
     */
    messageId?: pulumi.Input<string>;
    /**
     * The message release.
     */
    messageRelease?: pulumi.Input<string>;
    /**
     * The message version.
     */
    messageVersion?: pulumi.Input<string>;
    /**
     * The release indicator.
     */
    releaseIndicator: pulumi.Input<number>;
    /**
     * The repetition separator.
     */
    repetitionSeparator: pulumi.Input<number>;
    /**
     * The segment terminator.
     */
    segmentTerminator: pulumi.Input<number>;
    /**
     * The segment terminator suffix.
     */
    segmentTerminatorSuffix: pulumi.Input<enums.SegmentTerminatorSuffix>;
    /**
     * The target namespace on which this delimiter settings has to be applied.
     */
    targetNamespace?: pulumi.Input<string>;
}

/**
 * The Edifact envelope override settings.
 */
export interface EdifactEnvelopeOverrideArgs {
    /**
     * The application password.
     */
    applicationPassword?: pulumi.Input<string>;
    /**
     * The association assigned code.
     */
    associationAssignedCode?: pulumi.Input<string>;
    /**
     * The controlling agency code.
     */
    controllingAgencyCode?: pulumi.Input<string>;
    /**
     * The functional group id.
     */
    functionalGroupId?: pulumi.Input<string>;
    /**
     * The group header message release.
     */
    groupHeaderMessageRelease?: pulumi.Input<string>;
    /**
     * The group header message version.
     */
    groupHeaderMessageVersion?: pulumi.Input<string>;
    /**
     * The message association assigned code.
     */
    messageAssociationAssignedCode?: pulumi.Input<string>;
    /**
     * The message id on which this envelope settings has to be applied.
     */
    messageId?: pulumi.Input<string>;
    /**
     * The message release version on which this envelope settings has to be applied.
     */
    messageRelease?: pulumi.Input<string>;
    /**
     * The message version on which this envelope settings has to be applied.
     */
    messageVersion?: pulumi.Input<string>;
    /**
     * The receiver application id.
     */
    receiverApplicationId?: pulumi.Input<string>;
    /**
     * The receiver application qualifier.
     */
    receiverApplicationQualifier?: pulumi.Input<string>;
    /**
     * The sender application id.
     */
    senderApplicationId?: pulumi.Input<string>;
    /**
     * The sender application qualifier.
     */
    senderApplicationQualifier?: pulumi.Input<string>;
    /**
     * The target namespace on which this envelope settings has to be applied.
     */
    targetNamespace?: pulumi.Input<string>;
}

/**
 * The Edifact agreement envelope settings.
 */
export interface EdifactEnvelopeSettingsArgs {
    /**
     * The application reference id.
     */
    applicationReferenceId?: pulumi.Input<string>;
    /**
     * The value indicating whether to apply delimiter string advice.
     */
    applyDelimiterStringAdvice: pulumi.Input<boolean>;
    /**
     * The communication agreement id.
     */
    communicationAgreementId?: pulumi.Input<string>;
    /**
     * The value indicating whether to create grouping segments.
     */
    createGroupingSegments: pulumi.Input<boolean>;
    /**
     * The value indicating whether to enable default group headers.
     */
    enableDefaultGroupHeaders: pulumi.Input<boolean>;
    /**
     * The functional group id.
     */
    functionalGroupId?: pulumi.Input<string>;
    /**
     * The group application password.
     */
    groupApplicationPassword?: pulumi.Input<string>;
    /**
     * The group application receiver id.
     */
    groupApplicationReceiverId?: pulumi.Input<string>;
    /**
     * The group application receiver qualifier.
     */
    groupApplicationReceiverQualifier?: pulumi.Input<string>;
    /**
     * The group application sender id.
     */
    groupApplicationSenderId?: pulumi.Input<string>;
    /**
     * The group application sender qualifier.
     */
    groupApplicationSenderQualifier?: pulumi.Input<string>;
    /**
     * The group association assigned code.
     */
    groupAssociationAssignedCode?: pulumi.Input<string>;
    /**
     * The group control number lower bound.
     */
    groupControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The group control number prefix.
     */
    groupControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The group control number suffix.
     */
    groupControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The group control number upper bound.
     */
    groupControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The group controlling agency code.
     */
    groupControllingAgencyCode?: pulumi.Input<string>;
    /**
     * The group message release.
     */
    groupMessageRelease?: pulumi.Input<string>;
    /**
     * The group message version.
     */
    groupMessageVersion?: pulumi.Input<string>;
    /**
     * The interchange control number lower bound.
     */
    interchangeControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The interchange control number prefix.
     */
    interchangeControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The interchange control number suffix.
     */
    interchangeControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The interchange control number upper bound.
     */
    interchangeControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The value indicating whether the message is a test interchange.
     */
    isTestInterchange: pulumi.Input<boolean>;
    /**
     * The value indicating whether to overwrite existing transaction set control number.
     */
    overwriteExistingTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The processing priority code.
     */
    processingPriorityCode?: pulumi.Input<string>;
    /**
     * The receiver internal identification.
     */
    receiverInternalIdentification?: pulumi.Input<string>;
    /**
     * The receiver internal sub identification.
     */
    receiverInternalSubIdentification?: pulumi.Input<string>;
    /**
     * The receiver reverse routing address.
     */
    receiverReverseRoutingAddress?: pulumi.Input<string>;
    /**
     * The recipient reference password qualifier.
     */
    recipientReferencePasswordQualifier?: pulumi.Input<string>;
    /**
     * The recipient reference password value.
     */
    recipientReferencePasswordValue?: pulumi.Input<string>;
    /**
     * The value indicating whether to rollover group control number.
     */
    rolloverGroupControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover interchange control number.
     */
    rolloverInterchangeControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover transaction set control number.
     */
    rolloverTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The sender internal identification.
     */
    senderInternalIdentification?: pulumi.Input<string>;
    /**
     * The sender internal sub identification.
     */
    senderInternalSubIdentification?: pulumi.Input<string>;
    /**
     * The sender reverse routing address.
     */
    senderReverseRoutingAddress?: pulumi.Input<string>;
    /**
     * The transaction set control number lower bound.
     */
    transactionSetControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The transaction set control number prefix.
     */
    transactionSetControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The transaction set control number suffix.
     */
    transactionSetControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The transaction set control number upper bound.
     */
    transactionSetControlNumberUpperBound: pulumi.Input<number>;
}

/**
 * The Edifact agreement framing settings.
 */
export interface EdifactFramingSettingsArgs {
    /**
     * The character encoding.
     */
    characterEncoding?: pulumi.Input<string>;
    /**
     * The EDIFACT frame setting characterSet.
     */
    characterSet: pulumi.Input<string | enums.EdifactCharacterSet>;
    /**
     * The component separator.
     */
    componentSeparator: pulumi.Input<number>;
    /**
     * The data element separator.
     */
    dataElementSeparator: pulumi.Input<number>;
    /**
     * The EDIFACT frame setting decimal indicator.
     */
    decimalPointIndicator: pulumi.Input<enums.EdifactDecimalIndicator>;
    /**
     * The protocol version.
     */
    protocolVersion: pulumi.Input<number>;
    /**
     * The release indicator.
     */
    releaseIndicator: pulumi.Input<number>;
    /**
     * The repetition separator.
     */
    repetitionSeparator: pulumi.Input<number>;
    /**
     * The segment terminator.
     */
    segmentTerminator: pulumi.Input<number>;
    /**
     * The EDIFACT frame setting segment terminator suffix.
     */
    segmentTerminatorSuffix: pulumi.Input<enums.SegmentTerminatorSuffix>;
    /**
     * The service code list directory version.
     */
    serviceCodeListDirectoryVersion?: pulumi.Input<string>;
}

/**
 * The Edifact message filter for odata query.
 */
export interface EdifactMessageFilterArgs {
    /**
     * The message filter type.
     */
    messageFilterType: pulumi.Input<string | enums.MessageFilterType>;
}

/**
 * The Edifact message identifier.
 */
export interface EdifactMessageIdentifierArgs {
    /**
     * The message id on which this envelope settings has to be applied.
     */
    messageId: pulumi.Input<string>;
}

/**
 * The Edifact one way agreement.
 */
export interface EdifactOneWayAgreementArgs {
    /**
     * The EDIFACT protocol settings.
     */
    protocolSettings: pulumi.Input<EdifactProtocolSettingsArgs>;
    /**
     * The receiver business identity
     */
    receiverBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
    /**
     * The sender business identity
     */
    senderBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
}

/**
 * The Edifact agreement protocol settings.
 */
export interface EdifactProcessingSettingsArgs {
    /**
     * The value indicating whether to create empty xml tags for trailing separators.
     */
    createEmptyXmlTagsForTrailingSeparators: pulumi.Input<boolean>;
    /**
     * The value indicating whether to mask security information.
     */
    maskSecurityInfo: pulumi.Input<boolean>;
    /**
     * The value indicating whether to preserve interchange.
     */
    preserveInterchange: pulumi.Input<boolean>;
    /**
     * The value indicating whether to suspend interchange on error.
     */
    suspendInterchangeOnError: pulumi.Input<boolean>;
    /**
     * The value indicating whether to use dot as decimal separator.
     */
    useDotAsDecimalSeparator: pulumi.Input<boolean>;
}

/**
 * The Edifact agreement protocol settings.
 */
export interface EdifactProtocolSettingsArgs {
    /**
     * The EDIFACT acknowledgement settings.
     */
    acknowledgementSettings: pulumi.Input<EdifactAcknowledgementSettingsArgs>;
    /**
     * The EDIFACT delimiter override settings.
     */
    edifactDelimiterOverrides?: pulumi.Input<pulumi.Input<EdifactDelimiterOverrideArgs>[]>;
    /**
     * The EDIFACT envelope override settings.
     */
    envelopeOverrides?: pulumi.Input<pulumi.Input<EdifactEnvelopeOverrideArgs>[]>;
    /**
     * The EDIFACT envelope settings.
     */
    envelopeSettings: pulumi.Input<EdifactEnvelopeSettingsArgs>;
    /**
     * The EDIFACT framing settings.
     */
    framingSettings: pulumi.Input<EdifactFramingSettingsArgs>;
    /**
     * The EDIFACT message filter.
     */
    messageFilter: pulumi.Input<EdifactMessageFilterArgs>;
    /**
     * The EDIFACT message filter list.
     */
    messageFilterList?: pulumi.Input<pulumi.Input<EdifactMessageIdentifierArgs>[]>;
    /**
     * The EDIFACT processing Settings.
     */
    processingSettings: pulumi.Input<EdifactProcessingSettingsArgs>;
    /**
     * The EDIFACT schema references.
     */
    schemaReferences: pulumi.Input<pulumi.Input<EdifactSchemaReferenceArgs>[]>;
    /**
     * The EDIFACT validation override settings.
     */
    validationOverrides?: pulumi.Input<pulumi.Input<EdifactValidationOverrideArgs>[]>;
    /**
     * The EDIFACT validation settings.
     */
    validationSettings: pulumi.Input<EdifactValidationSettingsArgs>;
}

/**
 * The Edifact schema reference.
 */
export interface EdifactSchemaReferenceArgs {
    /**
     * The association assigned code.
     */
    associationAssignedCode?: pulumi.Input<string>;
    /**
     * The message id.
     */
    messageId: pulumi.Input<string>;
    /**
     * The message release version.
     */
    messageRelease: pulumi.Input<string>;
    /**
     * The message version.
     */
    messageVersion: pulumi.Input<string>;
    /**
     * The schema name.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The sender application id.
     */
    senderApplicationId?: pulumi.Input<string>;
    /**
     * The sender application qualifier.
     */
    senderApplicationQualifier?: pulumi.Input<string>;
}

/**
 * The Edifact validation override settings.
 */
export interface EdifactValidationOverrideArgs {
    /**
     * The value indicating whether to allow leading and trailing spaces and zeroes.
     */
    allowLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate character Set.
     */
    enforceCharacterSet: pulumi.Input<boolean>;
    /**
     * The message id on which the validation settings has to be applied.
     */
    messageId: pulumi.Input<string>;
    /**
     * The trailing separator policy.
     */
    trailingSeparatorPolicy: pulumi.Input<string | enums.TrailingSeparatorPolicy>;
    /**
     * The value indicating whether to trim leading and trailing spaces and zeroes.
     */
    trimLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate EDI types.
     */
    validateEDITypes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate XSD types.
     */
    validateXSDTypes: pulumi.Input<boolean>;
}

/**
 * The Edifact agreement validation settings.
 */
export interface EdifactValidationSettingsArgs {
    /**
     * The value indicating whether to allow leading and trailing spaces and zeroes.
     */
    allowLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate group control number.
     */
    checkDuplicateGroupControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate interchange control number.
     */
    checkDuplicateInterchangeControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate transaction set control number.
     */
    checkDuplicateTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The validity period of interchange control number.
     */
    interchangeControlNumberValidityDays: pulumi.Input<number>;
    /**
     * The trailing separator policy.
     */
    trailingSeparatorPolicy: pulumi.Input<string | enums.TrailingSeparatorPolicy>;
    /**
     * The value indicating whether to trim leading and trailing spaces and zeroes.
     */
    trimLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate character set in the message.
     */
    validateCharacterSet: pulumi.Input<boolean>;
    /**
     * The value indicating whether to Whether to validate EDI types.
     */
    validateEDITypes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to Whether to validate XSD types.
     */
    validateXSDTypes: pulumi.Input<boolean>;
}

/**
 * The access control configuration.
 */
export interface FlowAccessControlConfigurationArgs {
    /**
     * The access control configuration for workflow actions.
     */
    actions?: pulumi.Input<FlowAccessControlConfigurationPolicyArgs>;
    /**
     * The access control configuration for accessing workflow run contents.
     */
    contents?: pulumi.Input<FlowAccessControlConfigurationPolicyArgs>;
    /**
     * The access control configuration for invoking workflow triggers.
     */
    triggers?: pulumi.Input<FlowAccessControlConfigurationPolicyArgs>;
    /**
     * The access control configuration for workflow management.
     */
    workflowManagement?: pulumi.Input<FlowAccessControlConfigurationPolicyArgs>;
}

/**
 * The access control configuration policy.
 */
export interface FlowAccessControlConfigurationPolicyArgs {
    /**
     * The allowed caller IP address ranges.
     */
    allowedCallerIpAddresses?: pulumi.Input<pulumi.Input<IpAddressRangeArgs>[]>;
    /**
     * The authentication policies for workflow.
     */
    openAuthenticationPolicies?: pulumi.Input<OpenAuthenticationAccessPoliciesArgs>;
}

/**
 * The flow endpoints configuration.
 */
export interface FlowEndpointsArgs {
    /**
     * The access endpoint ip address.
     */
    accessEndpointIpAddresses?: pulumi.Input<pulumi.Input<IpAddressArgs>[]>;
    /**
     * The outgoing ip address.
     */
    outgoingIpAddresses?: pulumi.Input<pulumi.Input<IpAddressArgs>[]>;
}

/**
 * The endpoints configuration.
 */
export interface FlowEndpointsConfigurationArgs {
    /**
     * The connector endpoints.
     */
    connector?: pulumi.Input<FlowEndpointsArgs>;
    /**
     * The workflow endpoints.
     */
    workflow?: pulumi.Input<FlowEndpointsArgs>;
}

/**
 * The parameters schema of integration account map.
 */
export interface IntegrationAccountMapPropertiesParametersSchemaArgs {
    /**
     * The reference name.
     */
    ref?: pulumi.Input<string>;
}

/**
 * The integration account sku.
 */
export interface IntegrationAccountSkuArgs {
    /**
     * The sku name.
     */
    name: pulumi.Input<string | enums.IntegrationAccountSkuName>;
}

/**
 * The encryption configuration for the integration service environment.
 */
export interface IntegrationServiceEnvironmenEncryptionConfigurationArgs {
    /**
     * The encryption key reference.
     */
    encryptionKeyReference?: pulumi.Input<IntegrationServiceEnvironmenEncryptionKeyReferenceArgs>;
}

/**
 * The encryption key details for the integration service environment.
 */
export interface IntegrationServiceEnvironmenEncryptionKeyReferenceArgs {
    /**
     * Gets the key name in the Key Vault.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The key vault reference.
     */
    keyVault?: pulumi.Input<ResourceReferenceArgs>;
    /**
     * Gets the version of the key specified in the keyName property.
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * The integration service environment access endpoint.
 */
export interface IntegrationServiceEnvironmentAccessEndpointArgs {
    /**
     * The access endpoint type.
     */
    type?: pulumi.Input<string | enums.IntegrationServiceEnvironmentAccessEndpointType>;
}

/**
 * The integration service environment managed api deployment parameters.
 */
export interface IntegrationServiceEnvironmentManagedApiDeploymentParametersArgs {
    /**
     * The integration service environment managed api content link for deployment.
     */
    contentLinkDefinition?: pulumi.Input<ContentLinkArgs>;
}

/**
 * The integration service environment properties.
 */
export interface IntegrationServiceEnvironmentPropertiesArgs {
    /**
     * The encryption configuration.
     */
    encryptionConfiguration?: pulumi.Input<IntegrationServiceEnvironmenEncryptionConfigurationArgs>;
    /**
     * The endpoints configuration.
     */
    endpointsConfiguration?: pulumi.Input<FlowEndpointsConfigurationArgs>;
    /**
     * Gets the tracking id.
     */
    integrationServiceEnvironmentId?: pulumi.Input<string>;
    /**
     * The network configuration.
     */
    networkConfiguration?: pulumi.Input<NetworkConfigurationArgs>;
    /**
     * The provisioning state.
     */
    provisioningState?: pulumi.Input<string | enums.WorkflowProvisioningState>;
    /**
     * The integration service environment state.
     */
    state?: pulumi.Input<string | enums.WorkflowState>;
}

/**
 * The integration service environment sku.
 */
export interface IntegrationServiceEnvironmentSkuArgs {
    /**
     * The sku capacity.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The sku name.
     */
    name?: pulumi.Input<string | enums.IntegrationServiceEnvironmentSkuName>;
}

/**
 * The ip address.
 */
export interface IpAddressArgs {
    /**
     * The address.
     */
    address?: pulumi.Input<string>;
}

/**
 * The ip address range.
 */
export interface IpAddressRangeArgs {
    /**
     * The IP address range.
     */
    addressRange?: pulumi.Input<string>;
}

/**
 * The reference to the key vault key.
 */
export interface KeyVaultKeyReferenceArgs {
    /**
     * The private key name in key vault.
     */
    keyName: pulumi.Input<string>;
    /**
     * The key vault reference.
     */
    keyVault: pulumi.Input<KeyVaultKeyReferenceKeyVaultArgs>;
    /**
     * The private key version in key vault.
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * The key vault reference.
 */
export interface KeyVaultKeyReferenceKeyVaultArgs {
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
}

/**
 * The key vault reference.
 */
export interface KeyVaultReference {
    /**
     * The resource id.
     */
    id?: string;
    /**
     * The key vault name.
     */
    name?: string;
}

/**
 * The key vault reference.
 */
export interface KeyVaultReferenceArgs {
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
    /**
     * The key vault name.
     */
    name?: pulumi.Input<string>;
}

/**
 * Managed service identity properties.
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource.
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The network configuration.
 */
export interface NetworkConfigurationArgs {
    /**
     * The access endpoint.
     */
    accessEndpoint?: pulumi.Input<IntegrationServiceEnvironmentAccessEndpointArgs>;
    /**
     * The subnets.
     */
    subnets?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[]>;
    /**
     * Gets the virtual network address space.
     */
    virtualNetworkAddressSpace?: pulumi.Input<string>;
}

/**
 * AuthenticationPolicy of type Open.
 */
export interface OpenAuthenticationAccessPoliciesArgs {
    /**
     * Open authentication policies.
     */
    policies?: pulumi.Input<{[key: string]: pulumi.Input<OpenAuthenticationAccessPolicyArgs>}>;
}

/**
 * Open authentication access policy defined by user.
 */
export interface OpenAuthenticationAccessPolicyArgs {
    /**
     * The access policy claims.
     */
    claims?: pulumi.Input<pulumi.Input<OpenAuthenticationPolicyClaimArgs>[]>;
    /**
     * Type of provider for OAuth.
     */
    type?: pulumi.Input<string | enums.OpenAuthenticationProviderType>;
}

/**
 * Open authentication policy claim.
 */
export interface OpenAuthenticationPolicyClaimArgs {
    /**
     * The name of the claim.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the claim.
     */
    value?: pulumi.Input<string>;
}

/**
 * The integration account partner content.
 */
export interface PartnerContentArgs {
    /**
     * The B2B partner content.
     */
    b2b?: pulumi.Input<B2BPartnerContentArgs>;
}

/**
 * The recurrence schedule.
 */
export interface RecurrenceScheduleArgs {
    /**
     * The hours.
     */
    hours?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The minutes.
     */
    minutes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The month days.
     */
    monthDays?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The monthly occurrences.
     */
    monthlyOccurrences?: pulumi.Input<pulumi.Input<RecurrenceScheduleOccurrenceArgs>[]>;
    /**
     * The days of the week.
     */
    weekDays?: pulumi.Input<pulumi.Input<enums.DaysOfWeek>[]>;
}

/**
 * The recurrence schedule occurrence.
 */
export interface RecurrenceScheduleOccurrenceArgs {
    /**
     * The day of the week.
     */
    day?: pulumi.Input<enums.DayOfWeek>;
    /**
     * The occurrence.
     */
    occurrence?: pulumi.Input<number>;
}

/**
 * The resource reference.
 */
export interface ResourceReferenceArgs {
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
}

/**
 * The integration account RosettaNet ProcessConfiguration Acknowledgement settings.
 */
export interface RosettaNetPipAcknowledgmentOfReceiptSettingsArgs {
    /**
     * The non-repudiation is required or not.
     */
    isNonRepudiationRequired: pulumi.Input<boolean>;
    /**
     * The time to acknowledge in seconds.
     */
    timeToAcknowledgeInSeconds: pulumi.Input<number>;
}

/**
 * The integration account RosettaNet ProcessConfiguration activity behavior.
 */
export interface RosettaNetPipActivityBehaviorArgs {
    /**
     * The value indicating whether the RosettaNet PIP is used for a single action.
     */
    actionType: pulumi.Input<enums.RosettaNetActionType>;
    /**
     * The value indicating whether authorization is required.
     */
    isAuthorizationRequired: pulumi.Input<boolean>;
    /**
     * The value indicating whether secured transport is required.
     */
    isSecuredTransportRequired: pulumi.Input<boolean>;
    /**
     * The value indicating whether non-repudiation is for origin and content.
     */
    nonRepudiationOfOriginAndContent: pulumi.Input<boolean>;
    /**
     * The persistent confidentiality encryption scope.
     */
    persistentConfidentialityScope: pulumi.Input<enums.RosettaNetPipConfidentialityScope>;
    /**
     * The value indicating whether the RosettaNet PIP communication is synchronous.
     */
    responseType: pulumi.Input<enums.RosettaNetResponseType>;
    /**
     * The value indicating retry count.
     */
    retryCount: pulumi.Input<number>;
    /**
     * The time to perform in seconds.
     */
    timeToPerformInSeconds: pulumi.Input<number>;
}

/**
 * The integration account RosettaNet ProcessConfiguration activity settings.
 */
export interface RosettaNetPipActivitySettingsArgs {
    /**
     * The RosettaNet ProcessConfiguration acknowledgement settings.
     */
    acknowledgmentOfReceiptSettings: pulumi.Input<RosettaNetPipAcknowledgmentOfReceiptSettingsArgs>;
    /**
     * The RosettaNet ProcessConfiguration activity behavior.
     */
    activityBehavior: pulumi.Input<RosettaNetPipActivityBehaviorArgs>;
    /**
     * The RosettaNet ProcessConfiguration activity type.
     */
    activityType: pulumi.Input<enums.RosettaNetPipActivityType>;
}

/**
 * The RosettaNet ProcessConfiguration business document settings.
 */
export interface RosettaNetPipBusinessDocumentArgs {
    /**
     * The business document description.
     */
    description?: pulumi.Input<string>;
    /**
     * The business document name.
     */
    name: pulumi.Input<string>;
    /**
     * The business document version.
     */
    version: pulumi.Input<string>;
}

/**
 * The integration account RosettaNet ProcessConfiguration role settings.
 */
export interface RosettaNetPipRoleSettingsArgs {
    /**
     * The action name.
     */
    action: pulumi.Input<string>;
    /**
     * The RosettaNet ProcessConfiguration business document.
     */
    businessDocument: pulumi.Input<RosettaNetPipBusinessDocumentArgs>;
    /**
     * The description.
     */
    description?: pulumi.Input<string>;
    /**
     * The role name.
     */
    role: pulumi.Input<string>;
    /**
     * The RosettaNet ProcessConfiguration role type.
     */
    roleType: pulumi.Input<enums.RosettaNetPipRoleType>;
    /**
     * The service name.
     */
    service: pulumi.Input<string>;
    /**
     * The service classification name.
     */
    serviceClassification: pulumi.Input<string>;
}

/**
 * The workflow parameters.
 */
export interface WorkflowParameterArgs {
    /**
     * The description.
     */
    description?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The type.
     */
    type?: pulumi.Input<string | enums.ParameterType>;
    /**
     * The value.
     */
    value?: any;
}

/**
 * The workflow trigger recurrence.
 */
export interface WorkflowTriggerRecurrenceArgs {
    /**
     * The end time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The frequency.
     */
    frequency?: pulumi.Input<string | enums.RecurrenceFrequency>;
    /**
     * The interval.
     */
    interval?: pulumi.Input<number>;
    /**
     * The recurrence schedule.
     */
    schedule?: pulumi.Input<RecurrenceScheduleArgs>;
    /**
     * The start time.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The time zone.
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * The X12 agreement acknowledgement settings.
 */
export interface X12AcknowledgementSettingsArgs {
    /**
     * The acknowledgement control number lower bound.
     */
    acknowledgementControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The acknowledgement control number prefix.
     */
    acknowledgementControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The acknowledgement control number suffix.
     */
    acknowledgementControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The acknowledgement control number upper bound.
     */
    acknowledgementControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The value indicating whether to batch functional acknowledgements.
     */
    batchFunctionalAcknowledgements: pulumi.Input<boolean>;
    /**
     * The value indicating whether to batch implementation acknowledgements.
     */
    batchImplementationAcknowledgements: pulumi.Input<boolean>;
    /**
     * The value indicating whether to batch the technical acknowledgements.
     */
    batchTechnicalAcknowledgements: pulumi.Input<boolean>;
    /**
     * The functional acknowledgement version.
     */
    functionalAcknowledgementVersion?: pulumi.Input<string>;
    /**
     * The implementation acknowledgement version.
     */
    implementationAcknowledgementVersion?: pulumi.Input<string>;
    /**
     * The value indicating whether functional acknowledgement is needed.
     */
    needFunctionalAcknowledgement: pulumi.Input<boolean>;
    /**
     * The value indicating whether implementation acknowledgement is needed.
     */
    needImplementationAcknowledgement: pulumi.Input<boolean>;
    /**
     * The value indicating whether a loop is needed for valid messages.
     */
    needLoopForValidMessages: pulumi.Input<boolean>;
    /**
     * The value indicating whether technical acknowledgement is needed.
     */
    needTechnicalAcknowledgement: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover acknowledgement control number.
     */
    rolloverAcknowledgementControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to send synchronous acknowledgement.
     */
    sendSynchronousAcknowledgement: pulumi.Input<boolean>;
}

/**
 * The X12 agreement content.
 */
export interface X12AgreementContentArgs {
    /**
     * The X12 one-way receive agreement.
     */
    receiveAgreement: pulumi.Input<X12OneWayAgreementArgs>;
    /**
     * The X12 one-way send agreement.
     */
    sendAgreement: pulumi.Input<X12OneWayAgreementArgs>;
}

/**
 * The X12 delimiter override settings.
 */
export interface X12DelimiterOverridesArgs {
    /**
     * The component separator.
     */
    componentSeparator: pulumi.Input<number>;
    /**
     * The data element separator.
     */
    dataElementSeparator: pulumi.Input<number>;
    /**
     * The message id.
     */
    messageId?: pulumi.Input<string>;
    /**
     * The protocol version.
     */
    protocolVersion?: pulumi.Input<string>;
    /**
     * The replacement character.
     */
    replaceCharacter: pulumi.Input<number>;
    /**
     * The value indicating whether to replace separators in payload.
     */
    replaceSeparatorsInPayload: pulumi.Input<boolean>;
    /**
     * The segment terminator.
     */
    segmentTerminator: pulumi.Input<number>;
    /**
     * The segment terminator suffix.
     */
    segmentTerminatorSuffix: pulumi.Input<enums.SegmentTerminatorSuffix>;
    /**
     * The target namespace on which this delimiter settings has to be applied.
     */
    targetNamespace?: pulumi.Input<string>;
}

/**
 * The X12 envelope override settings.
 */
export interface X12EnvelopeOverrideArgs {
    /**
     * The date format.
     */
    dateFormat: pulumi.Input<string | enums.X12DateFormat>;
    /**
     * The functional identifier code.
     */
    functionalIdentifierCode?: pulumi.Input<string>;
    /**
     * The header version.
     */
    headerVersion: pulumi.Input<string>;
    /**
     * The message id on which this envelope settings has to be applied.
     */
    messageId: pulumi.Input<string>;
    /**
     * The protocol version on which this envelope settings has to be applied.
     */
    protocolVersion: pulumi.Input<string>;
    /**
     * The receiver application id.
     */
    receiverApplicationId: pulumi.Input<string>;
    /**
     * The responsible agency code.
     */
    responsibleAgencyCode: pulumi.Input<string>;
    /**
     * The sender application id.
     */
    senderApplicationId: pulumi.Input<string>;
    /**
     * The target namespace on which this envelope settings has to be applied.
     */
    targetNamespace: pulumi.Input<string>;
    /**
     * The time format.
     */
    timeFormat: pulumi.Input<string | enums.X12TimeFormat>;
}

/**
 * The X12 agreement envelope settings.
 */
export interface X12EnvelopeSettingsArgs {
    /**
     * The controls standards id.
     */
    controlStandardsId: pulumi.Input<number>;
    /**
     * The control version number.
     */
    controlVersionNumber: pulumi.Input<string>;
    /**
     * The value indicating whether to enable default group headers.
     */
    enableDefaultGroupHeaders: pulumi.Input<boolean>;
    /**
     * The functional group id.
     */
    functionalGroupId?: pulumi.Input<string>;
    /**
     * The group control number lower bound.
     */
    groupControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The group control number upper bound.
     */
    groupControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The group header agency code.
     */
    groupHeaderAgencyCode: pulumi.Input<string>;
    /**
     * The group header date format.
     */
    groupHeaderDateFormat: pulumi.Input<string | enums.X12DateFormat>;
    /**
     * The group header time format.
     */
    groupHeaderTimeFormat: pulumi.Input<string | enums.X12TimeFormat>;
    /**
     * The group header version.
     */
    groupHeaderVersion: pulumi.Input<string>;
    /**
     * The interchange  control number lower bound.
     */
    interchangeControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The interchange  control number upper bound.
     */
    interchangeControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The value indicating whether to overwrite existing transaction set control number.
     */
    overwriteExistingTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The receiver application id.
     */
    receiverApplicationId: pulumi.Input<string>;
    /**
     * The value indicating whether to rollover group control number.
     */
    rolloverGroupControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover interchange control number.
     */
    rolloverInterchangeControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to rollover transaction set control number.
     */
    rolloverTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The sender application id.
     */
    senderApplicationId: pulumi.Input<string>;
    /**
     * The transaction set control number lower bound.
     */
    transactionSetControlNumberLowerBound: pulumi.Input<number>;
    /**
     * The transaction set control number prefix.
     */
    transactionSetControlNumberPrefix?: pulumi.Input<string>;
    /**
     * The transaction set control number suffix.
     */
    transactionSetControlNumberSuffix?: pulumi.Input<string>;
    /**
     * The transaction set control number upper bound.
     */
    transactionSetControlNumberUpperBound: pulumi.Input<number>;
    /**
     * The usage indicator.
     */
    usageIndicator: pulumi.Input<string | enums.UsageIndicator>;
    /**
     * The value indicating whether to use control standards id as repetition character.
     */
    useControlStandardsIdAsRepetitionCharacter: pulumi.Input<boolean>;
}

/**
 * The X12 agreement framing settings.
 */
export interface X12FramingSettingsArgs {
    /**
     * The X12 character set.
     */
    characterSet: pulumi.Input<string | enums.X12CharacterSet>;
    /**
     * The component separator.
     */
    componentSeparator: pulumi.Input<number>;
    /**
     * The data element separator.
     */
    dataElementSeparator: pulumi.Input<number>;
    /**
     * The replacement character.
     */
    replaceCharacter: pulumi.Input<number>;
    /**
     * The value indicating whether to replace separators in payload.
     */
    replaceSeparatorsInPayload: pulumi.Input<boolean>;
    /**
     * The segment terminator.
     */
    segmentTerminator: pulumi.Input<number>;
    /**
     * The segment terminator suffix.
     */
    segmentTerminatorSuffix: pulumi.Input<enums.SegmentTerminatorSuffix>;
}

/**
 * The X12 message filter for odata query.
 */
export interface X12MessageFilterArgs {
    /**
     * The message filter type.
     */
    messageFilterType: pulumi.Input<string | enums.MessageFilterType>;
}

/**
 * The X12 message identifier.
 */
export interface X12MessageIdentifierArgs {
    /**
     * The message id.
     */
    messageId: pulumi.Input<string>;
}

/**
 * The X12 one-way agreement.
 */
export interface X12OneWayAgreementArgs {
    /**
     * The X12 protocol settings.
     */
    protocolSettings: pulumi.Input<X12ProtocolSettingsArgs>;
    /**
     * The receiver business identity
     */
    receiverBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
    /**
     * The sender business identity
     */
    senderBusinessIdentity: pulumi.Input<BusinessIdentityArgs>;
}

/**
 * The X12 processing settings.
 */
export interface X12ProcessingSettingsArgs {
    /**
     * The value indicating whether to convert numerical type to implied decimal.
     */
    convertImpliedDecimal: pulumi.Input<boolean>;
    /**
     * The value indicating whether to create empty xml tags for trailing separators.
     */
    createEmptyXmlTagsForTrailingSeparators: pulumi.Input<boolean>;
    /**
     * The value indicating whether to mask security information.
     */
    maskSecurityInfo: pulumi.Input<boolean>;
    /**
     * The value indicating whether to preserve interchange.
     */
    preserveInterchange: pulumi.Input<boolean>;
    /**
     * The value indicating whether to suspend interchange on error.
     */
    suspendInterchangeOnError: pulumi.Input<boolean>;
    /**
     * The value indicating whether to use dot as decimal separator.
     */
    useDotAsDecimalSeparator: pulumi.Input<boolean>;
}

/**
 * The X12 agreement protocol settings.
 */
export interface X12ProtocolSettingsArgs {
    /**
     * The X12 acknowledgment settings.
     */
    acknowledgementSettings: pulumi.Input<X12AcknowledgementSettingsArgs>;
    /**
     * The X12 envelope override settings.
     */
    envelopeOverrides?: pulumi.Input<pulumi.Input<X12EnvelopeOverrideArgs>[]>;
    /**
     * The X12 envelope settings.
     */
    envelopeSettings: pulumi.Input<X12EnvelopeSettingsArgs>;
    /**
     * The X12 framing settings.
     */
    framingSettings: pulumi.Input<X12FramingSettingsArgs>;
    /**
     * The X12 message filter.
     */
    messageFilter: pulumi.Input<X12MessageFilterArgs>;
    /**
     * The X12 message filter list.
     */
    messageFilterList?: pulumi.Input<pulumi.Input<X12MessageIdentifierArgs>[]>;
    /**
     * The X12 processing settings.
     */
    processingSettings: pulumi.Input<X12ProcessingSettingsArgs>;
    /**
     * The X12 schema references.
     */
    schemaReferences: pulumi.Input<pulumi.Input<X12SchemaReferenceArgs>[]>;
    /**
     * The X12 security settings.
     */
    securitySettings: pulumi.Input<X12SecuritySettingsArgs>;
    /**
     * The X12 validation override settings.
     */
    validationOverrides?: pulumi.Input<pulumi.Input<X12ValidationOverrideArgs>[]>;
    /**
     * The X12 validation settings.
     */
    validationSettings: pulumi.Input<X12ValidationSettingsArgs>;
    /**
     * The X12 delimiter override settings.
     */
    x12DelimiterOverrides?: pulumi.Input<pulumi.Input<X12DelimiterOverridesArgs>[]>;
}

/**
 * The X12 schema reference.
 */
export interface X12SchemaReferenceArgs {
    /**
     * The message id.
     */
    messageId: pulumi.Input<string>;
    /**
     * The schema name.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The schema version.
     */
    schemaVersion: pulumi.Input<string>;
    /**
     * The sender application id.
     */
    senderApplicationId?: pulumi.Input<string>;
}

/**
 * The X12 agreement security settings.
 */
export interface X12SecuritySettingsArgs {
    /**
     * The authorization qualifier.
     */
    authorizationQualifier: pulumi.Input<string>;
    /**
     * The authorization value.
     */
    authorizationValue?: pulumi.Input<string>;
    /**
     * The password value.
     */
    passwordValue?: pulumi.Input<string>;
    /**
     * The security qualifier.
     */
    securityQualifier: pulumi.Input<string>;
}

/**
 * The X12 validation override settings.
 */
export interface X12ValidationOverrideArgs {
    /**
     * The value indicating whether to allow leading and trailing spaces and zeroes.
     */
    allowLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The message id on which the validation settings has to be applied.
     */
    messageId: pulumi.Input<string>;
    /**
     * The trailing separator policy.
     */
    trailingSeparatorPolicy: pulumi.Input<string | enums.TrailingSeparatorPolicy>;
    /**
     * The value indicating whether to trim leading and trailing spaces and zeroes.
     */
    trimLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate character Set.
     */
    validateCharacterSet: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate EDI types.
     */
    validateEDITypes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate XSD types.
     */
    validateXSDTypes: pulumi.Input<boolean>;
}

/**
 * The X12 agreement validation settings.
 */
export interface X12ValidationSettingsArgs {
    /**
     * The value indicating whether to allow leading and trailing spaces and zeroes.
     */
    allowLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate group control number.
     */
    checkDuplicateGroupControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate interchange control number.
     */
    checkDuplicateInterchangeControlNumber: pulumi.Input<boolean>;
    /**
     * The value indicating whether to check for duplicate transaction set control number.
     */
    checkDuplicateTransactionSetControlNumber: pulumi.Input<boolean>;
    /**
     * The validity period of interchange control number.
     */
    interchangeControlNumberValidityDays: pulumi.Input<number>;
    /**
     * The trailing separator policy.
     */
    trailingSeparatorPolicy: pulumi.Input<string | enums.TrailingSeparatorPolicy>;
    /**
     * The value indicating whether to trim leading and trailing spaces and zeroes.
     */
    trimLeadingAndTrailingSpacesAndZeroes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to validate character set in the message.
     */
    validateCharacterSet: pulumi.Input<boolean>;
    /**
     * The value indicating whether to Whether to validate EDI types.
     */
    validateEDITypes: pulumi.Input<boolean>;
    /**
     * The value indicating whether to Whether to validate XSD types.
     */
    validateXSDTypes: pulumi.Input<boolean>;
}
