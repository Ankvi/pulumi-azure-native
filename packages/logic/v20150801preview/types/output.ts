import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface AS2AcknowledgementConnectionSettingsResponse {
        /**
         * The value indicating whether to ignore mismatch in certificate name.
         */
        ignoreCertificateNameMismatch?: boolean;
        /**
         * The value indicating whether to keep the connection alive.
         */
        keepHttpConnectionAlive?: boolean;
        /**
         * The value indicating whether to support HTTP status code 'CONTINUE'.
         */
        supportHttpStatusCodeContinue?: boolean;
        /**
         * The value indicating whether to unfold the HTTP headers.
         */
        unfoldHttpHeaders?: boolean;
    }

    export interface AS2AgreementContentResponse {
        /**
         * The AS2 one-way receive agreement.
         */
        receiveAgreement?: AS2OneWayAgreementResponse;
        /**
         * The AS2 one-way send agreement.
         */
        sendAgreement?: AS2OneWayAgreementResponse;
    }

    export interface AS2EnvelopeSettingsResponse {
        /**
         * The value indicating whether to auto generate file name.
         */
        autogenerateFileName?: boolean;
        /**
         * The template for file name.
         */
        fileNameTemplate?: string;
        /**
         * The message content type.
         */
        messageContentType?: string;
        /**
         * The value indicating whether to suspend message on file name generation error.
         */
        suspendMessageOnFileNameGenerationError?: boolean;
        /**
         * The value indicating whether to transmit file name in mime header.
         */
        transmitFileNameInMimeHeader?: boolean;
    }

    export interface AS2ErrorSettingsResponse {
        /**
         * The value indicating whether to resend message If MDN is not received.
         */
        resendIfMdnNotReceived?: boolean;
        /**
         * The value indicating whether to suspend duplicate message.
         */
        suspendDuplicateMessage?: boolean;
    }

    export interface AS2MdnSettingsResponse {
        /**
         * The disposition notification to header value.
         */
        dispositionNotificationTo?: string;
        /**
         * The MDN text.
         */
        mdnText?: string;
        /**
         * The signing or hashing algorithm.
         */
        micHashingAlgorithm?: string;
        /**
         * The value indicating whether to send or request a MDN.
         */
        needMdn?: boolean;
        /**
         * The receipt delivery URL.
         */
        receiptDeliveryUrl?: string;
        /**
         * The value indicating whether to send inbound MDN to message box.
         */
        sendInboundMdnToMessageBox?: boolean;
        /**
         * The value indicating whether to send the asynchronous MDN.
         */
        sendMdnAsynchronously?: boolean;
        /**
         * The value indicating whether the MDN needs to be signed or not.
         */
        signMdn?: boolean;
        /**
         * The value indicating whether to sign the outbound MDN if optional.
         */
        signOutboundMdnIfOptional?: boolean;
    }

    export interface AS2MessageConnectionSettingsResponse {
        /**
         * The value indicating whether to ignore mismatch in certificate name.
         */
        ignoreCertificateNameMismatch?: boolean;
        /**
         * The value indicating whether to keep the connection alive.
         */
        keepHttpConnectionAlive?: boolean;
        /**
         * The value indicating whether to support HTTP status code 'CONTINUE'.
         */
        supportHttpStatusCodeContinue?: boolean;
        /**
         * The value indicating whether to unfold the HTTP headers.
         */
        unfoldHttpHeaders?: boolean;
    }

    export interface AS2OneWayAgreementResponse {
        /**
         * The AS2 protocol settings.
         */
        protocolSettings?: AS2ProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity?: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity?: BusinessIdentityResponse;
    }

    export interface AS2ProtocolSettingsResponse {
        /**
         * The acknowledgement connection settings.
         */
        acknowledgementConnectionSettings?: AS2AcknowledgementConnectionSettingsResponse;
        /**
         * The envelope settings.
         */
        envelopeSettings?: AS2EnvelopeSettingsResponse;
        /**
         * The error settings.
         */
        errorSettings?: AS2ErrorSettingsResponse;
        /**
         * The MDN settings.
         */
        mdnSettings?: AS2MdnSettingsResponse;
        /**
         * The message connection settings.
         */
        messageConnectionSettings?: AS2MessageConnectionSettingsResponse;
        /**
         * The security settings.
         */
        securitySettings?: AS2SecuritySettingsResponse;
        /**
         * The validation settings.
         */
        validationSettings?: AS2ValidationSettingsResponse;
    }

    export interface AS2SecuritySettingsResponse {
        /**
         * The value indicating whether to enable NRR for inbound decoded messages.
         */
        enableNrrForInboundDecodedMessages?: boolean;
        /**
         * The value indicating whether to enable NRR for inbound encoded messages.
         */
        enableNrrForInboundEncodedMessages?: boolean;
        /**
         * The value indicating whether to enable NRR for inbound MDN.
         */
        enableNrrForInboundMdn?: boolean;
        /**
         * The value indicating whether to enable NRR for outbound decoded messages.
         */
        enableNrrForOutboundDecodedMessages?: boolean;
        /**
         * The value indicating whether to enable NRR for outbound encoded messages.
         */
        enableNrrForOutboundEncodedMessages?: boolean;
        /**
         * The value indicating whether to enable NRR for outbound MDN.
         */
        enableNrrForOutboundMdn?: boolean;
        /**
         * The name of the encryption certificate.
         */
        encryptionCertificateName?: string;
        /**
         * The value indicating whether to send or request a MDN.
         */
        overrideGroupSigningCertificate?: boolean;
        /**
         * The name of the signing certificate.
         */
        signingCertificateName?: string;
    }

    export interface AS2ValidationSettingsResponse {
        /**
         * The value indicating whether to check for certificate revocation list on receive.
         */
        checkCertificateRevocationListOnReceive?: boolean;
        /**
         * The value indicating whether to check for certificate revocation list on send.
         */
        checkCertificateRevocationListOnSend?: boolean;
        /**
         * The value indicating whether to check for duplicate message.
         */
        checkDuplicateMessage?: boolean;
        /**
         * The value indicating whether the message has to be compressed.
         */
        compressMessage?: boolean;
        /**
         * The value indicating whether the message has to be encrypted.
         */
        encryptMessage?: boolean;
        /**
         * The encryption algorithm.
         */
        encryptionAlgorithm?: string;
        /**
         * The number of days to look back for duplicate interchange.
         */
        interchangeDuplicatesValidityDays?: number;
        /**
         * The value indicating whether to override incoming message properties with those in agreement.
         */
        overrideMessageProperties?: boolean;
        /**
         * The value indicating whether the message has to be signed.
         */
        signMessage?: boolean;
    }

    export interface AgreementContentResponse {
        /**
         * The AS2 agreement content.
         */
        aS2?: AS2AgreementContentResponse;
        /**
         * The EDIFACT agreement content.
         */
        edifact?: EdifactAgreementContentResponse;
        /**
         * The X12 agreement content.
         */
        x12?: X12AgreementContentResponse;
    }

    export interface B2BPartnerContentResponse {
        /**
         * The list of partner business identities.
         */
        businessIdentities?: BusinessIdentityResponse[];
    }

    export interface BusinessIdentityResponse {
        /**
         * The business identity qualifier.
         */
        qualifier?: string;
        /**
         * The business identity value.
         */
        value?: string;
    }

    export interface EdifactAcknowledgementSettingsResponse {
        /**
         * The acknowledgement control number lower bound.
         */
        acknowledgementControlNumberLowerBound?: number;
        /**
         * The acknowledgement control number prefix.
         */
        acknowledgementControlNumberPrefix?: string;
        /**
         * The acknowledgement control number suffix.
         */
        acknowledgementControlNumberSuffix?: string;
        /**
         * The acknowledgement control number upper bound.
         */
        acknowledgementControlNumberUpperBound?: number;
        /**
         * The value indicating whether to batch functional acknowledgements.
         */
        batchFunctionalAcknowledgements?: boolean;
        /**
         * The value indicating whether to batch the technical acknowledgements.
         */
        batchTechnicalAcknowledgements?: boolean;
        /**
         * The value indicating whether functional acknowledgement is needed.
         */
        needFunctionalAcknowledgement?: boolean;
        /**
         * The value indicating whether a loop is needed for valid messages.
         */
        needLoopForValidMessages?: boolean;
        /**
         * The value indicating whether technical acknowledgement is needed.
         */
        needTechnicalAcknowledgement?: boolean;
        /**
         * The value indicating whether to rollover acknowledgement control number.
         */
        rolloverAcknowledgementControlNumber?: boolean;
        /**
         * The value indicating whether to send synchronous acknowledgement.
         */
        sendSynchronousAcknowledgement?: boolean;
    }

    export interface EdifactAgreementContentResponse {
        /**
         * The EDIFACT one-way receive agreement.
         */
        receiveAgreement?: EdifactOneWayAgreementResponse;
        /**
         * The EDIFACT one-way send agreement.
         */
        sendAgreement?: EdifactOneWayAgreementResponse;
    }

    export interface EdifactDelimiterOverrideResponse {
        /**
         * The component separator.
         */
        componentSeparator?: number;
        /**
         * The data element separator.
         */
        dataElementSeparator?: number;
        /**
         * The decimal point indicator.
         */
        decimalPointIndicator?: string;
        /**
         * The message association assigned code.
         */
        messageAssociationAssignedCode?: string;
        /**
         * The message id.
         */
        messageId?: string;
        /**
         * The message release version.
         */
        messageRelease?: string;
        /**
         * The message version.
         */
        messageVersion?: string;
        /**
         * The release indicator.
         */
        releaseIndicator?: number;
        /**
         * The repetition separator.
         */
        repetitionSeparator?: number;
        /**
         * The segment terminator.
         */
        segmentTerminator?: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix?: string;
        /**
         * The target namespace on which this delimiter settings has to be applied.
         */
        targetNamespace?: string;
    }

    export interface EdifactEnvelopeOverrideResponse {
        /**
         * The application password.
         */
        applicationPassword?: string;
        /**
         * The association assigned code.
         */
        associationAssignedCode?: string;
        /**
         * The controlling agency code.
         */
        controllingAgencyCode?: string;
        /**
         * The functional group id.
         */
        functionalGroupId?: string;
        /**
         * The group header message release.
         */
        groupHeaderMessageRelease?: string;
        /**
         * The group header message version.
         */
        groupHeaderMessageVersion?: string;
        /**
         * The message association assigned code.
         */
        messageAssociationAssignedCode?: string;
        /**
         * The message id on which this envelope settings has to be applied.
         */
        messageId?: string;
        /**
         * The message release version on which this envelope settings has to be applied.
         */
        messageRelease?: string;
        /**
         * The message version on which this envelope settings has to be applied.
         */
        messageVersion?: string;
        /**
         * The receiver application id.
         */
        receiverApplicationId?: string;
        /**
         * The receiver application qualifier.
         */
        receiverApplicationQualifier?: string;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
        /**
         * The sender application qualifier.
         */
        senderApplicationQualifier?: string;
        /**
         * The target namespace on which this envelope settings has to be applied.
         */
        targetNamespace?: string;
    }

    export interface EdifactEnvelopeSettingsResponse {
        /**
         * The application reference id.
         */
        applicationReferenceId?: string;
        /**
         * The value indicating whether to apply delimiter string advice.
         */
        applyDelimiterStringAdvice?: boolean;
        /**
         * The communication agreement id.
         */
        communicationAgreementId?: string;
        /**
         * The value indicating whether to create grouping segments.
         */
        createGroupingSegments?: boolean;
        /**
         * The value indicating whether to enable default group headers.
         */
        enableDefaultGroupHeaders?: boolean;
        /**
         * The functional group id.
         */
        functionalGroupId?: string;
        /**
         * The group application password.
         */
        groupApplicationPassword?: string;
        /**
         * The group application receiver id.
         */
        groupApplicationReceiverId?: string;
        /**
         * The group application receiver qualifier.
         */
        groupApplicationReceiverQualifier?: string;
        /**
         * The group application sender id.
         */
        groupApplicationSenderId?: string;
        /**
         * The group application sender qualifier.
         */
        groupApplicationSenderQualifier?: string;
        /**
         * The group association assigned code.
         */
        groupAssociationAssignedCode?: string;
        /**
         * The group control number lower bound.
         */
        groupControlNumberLowerBound?: number;
        /**
         * The group control number prefix.
         */
        groupControlNumberPrefix?: string;
        /**
         * The group control number suffix.
         */
        groupControlNumberSuffix?: string;
        /**
         * The group control number upper bound.
         */
        groupControlNumberUpperBound?: number;
        /**
         * The group controlling agency code.
         */
        groupControllingAgencyCode?: string;
        /**
         * The group message release.
         */
        groupMessageRelease?: string;
        /**
         * The group message version.
         */
        groupMessageVersion?: string;
        /**
         * The interchange control number lower bound.
         */
        interchangeControlNumberLowerBound?: number;
        /**
         * The interchange control number prefix.
         */
        interchangeControlNumberPrefix?: string;
        /**
         * The interchange control number suffix.
         */
        interchangeControlNumberSuffix?: string;
        /**
         * The interchange control number upper bound.
         */
        interchangeControlNumberUpperBound?: number;
        /**
         * The value indicating whether the message is a test interchange.
         */
        isTestInterchange?: boolean;
        /**
         * The value indicating whether to overwrite existing transaction set control number.
         */
        overwriteExistingTransactionSetControlNumber?: boolean;
        /**
         * The processing priority code.
         */
        processingPriorityCode?: string;
        /**
         * The receiver internal identification.
         */
        receiverInternalIdentification?: string;
        /**
         * The receiver internal sub identification.
         */
        receiverInternalSubIdentification?: string;
        /**
         * The receiver reverse routing address.
         */
        receiverReverseRoutingAddress?: string;
        /**
         * The recipient reference password qualifier.
         */
        recipientReferencePasswordQualifier?: string;
        /**
         * The recipient reference password value.
         */
        recipientReferencePasswordValue?: string;
        /**
         * The value indicating whether to rollover group control number.
         */
        rolloverGroupControlNumber?: boolean;
        /**
         * The value indicating whether to rollover interchange control number.
         */
        rolloverInterchangeControlNumber?: boolean;
        /**
         * The value indicating whether to rollover transaction set control number.
         */
        rolloverTransactionSetControlNumber?: boolean;
        /**
         * The sender internal identification.
         */
        senderInternalIdentification?: string;
        /**
         * The sender internal sub identification.
         */
        senderInternalSubIdentification?: string;
        /**
         * The sender reverse routing address.
         */
        senderReverseRoutingAddress?: string;
        /**
         * The transaction set control number lower bound.
         */
        transactionSetControlNumberLowerBound?: number;
        /**
         * The transaction set control number prefix.
         */
        transactionSetControlNumberPrefix?: string;
        /**
         * The transaction set control number suffix.
         */
        transactionSetControlNumberSuffix?: string;
        /**
         * The transaction set control number upper bound.
         */
        transactionSetControlNumberUpperBound?: number;
    }

    export interface EdifactFramingSettingsResponse {
        /**
         * The character encoding.
         */
        characterEncoding?: string;
        /**
         * The EDIFACT frame setting characterSet.
         */
        characterSet?: string;
        /**
         * The component separator.
         */
        componentSeparator?: number;
        /**
         * The data element separator.
         */
        dataElementSeparator?: number;
        /**
         * The EDIFACT frame setting decimal indicator.
         */
        decimalPointIndicator?: string;
        /**
         * The protocol version.
         */
        protocolVersion?: number;
        /**
         * The release indicator.
         */
        releaseIndicator?: number;
        /**
         * The repetition separator.
         */
        repetitionSeparator?: number;
        /**
         * The segment terminator.
         */
        segmentTerminator?: number;
        /**
         * The EDIFACT frame setting segment terminator suffix.
         */
        segmentTerminatorSuffix?: string;
        /**
         * The service code list directory version.
         */
        serviceCodeListDirectoryVersion?: string;
    }

    export interface EdifactMessageFilterResponse {
        /**
         * The message filter type.
         */
        messageFilterType?: string;
    }

    export interface EdifactMessageIdentifierResponse {
        /**
         * The message id on which this envelope settings has to be applied.
         */
        messageId?: string;
    }

    export interface EdifactOneWayAgreementResponse {
        /**
         * The EDIFACT protocol settings.
         */
        protocolSettings?: EdifactProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity?: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity?: BusinessIdentityResponse;
    }

    export interface EdifactProcessingSettingsResponse {
        /**
         * The value indicating whether to create empty xml tags for trailing separators.
         */
        createEmptyXmlTagsForTrailingSeparators?: boolean;
        /**
         * The value indicating whether to mask security information.
         */
        maskSecurityInfo?: boolean;
        /**
         * The value indicating whether to preserve interchange.
         */
        preserveInterchange?: boolean;
        /**
         * The value indicating whether to suspend interchange on error.
         */
        suspendInterchangeOnError?: boolean;
        /**
         * The value indicating whether to use dot as decimal separator.
         */
        useDotAsDecimalSeparator?: boolean;
    }

    export interface EdifactProtocolSettingsResponse {
        /**
         * The EDIFACT acknowledgement settings.
         */
        acknowledgementSettings?: EdifactAcknowledgementSettingsResponse;
        /**
         * The EDIFACT delimiter override settings.
         */
        edifactDelimiterOverrides?: EdifactDelimiterOverrideResponse[];
        /**
         * The EDIFACT envelope override settings.
         */
        envelopeOverrides?: EdifactEnvelopeOverrideResponse[];
        /**
         * The EDIFACT envelope settings.
         */
        envelopeSettings?: EdifactEnvelopeSettingsResponse;
        /**
         * The EDIFACT framing settings.
         */
        framingSettings?: EdifactFramingSettingsResponse;
        /**
         * The EDIFACT message filter.
         */
        messageFilter?: EdifactMessageFilterResponse;
        /**
         * The EDIFACT message filter list.
         */
        messageFilterList?: EdifactMessageIdentifierResponse[];
        /**
         * The EDIFACT processing Settings.
         */
        processingSettings?: EdifactProcessingSettingsResponse;
        /**
         * The EDIFACT schema references.
         */
        schemaReferences?: EdifactSchemaReferenceResponse[];
        /**
         * The EDIFACT validation override settings.
         */
        validationOverrides?: EdifactValidationOverrideResponse[];
        /**
         * The EDIFACT validation settings.
         */
        validationSettings?: EdifactValidationSettingsResponse;
    }

    export interface EdifactSchemaReferenceResponse {
        /**
         * The association assigned code.
         */
        associationAssignedCode?: string;
        /**
         * The message id.
         */
        messageId?: string;
        /**
         * The message release version.
         */
        messageRelease?: string;
        /**
         * The message version.
         */
        messageVersion?: string;
        /**
         * The schema name.
         */
        schemaName?: string;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
        /**
         * The sender application qualifier.
         */
        senderApplicationQualifier?: string;
    }

    export interface EdifactValidationOverrideResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to validate character Set.
         */
        enforceCharacterSet?: boolean;
        /**
         * The message id on which the validation settings has to be applied.
         */
        messageId?: string;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy?: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to validate EDI types.
         */
        validateEDITypes?: boolean;
        /**
         * The value indicating whether to validate XSD types.
         */
        validateXSDTypes?: boolean;
    }

    export interface EdifactValidationSettingsResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to check for duplicate group control number.
         */
        checkDuplicateGroupControlNumber?: boolean;
        /**
         * The value indicating whether to check for duplicate interchange control number.
         */
        checkDuplicateInterchangeControlNumber?: boolean;
        /**
         * The value indicating whether to check for duplicate transaction set control number.
         */
        checkDuplicateTransactionSetControlNumber?: boolean;
        /**
         * The validity period of interchange control number.
         */
        interchangeControlNumberValidityDays?: number;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy?: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to validate character set in the message.
         */
        validateCharacterSet?: boolean;
        /**
         * The value indicating whether to Whether to validate EDI types.
         */
        validateEDITypes?: boolean;
        /**
         * The value indicating whether to Whether to validate XSD types.
         */
        validateXSDTypes?: boolean;
    }

    export interface IntegrationAccountContentHashResponse {
        /**
         * The content hash algorithm.
         */
        algorithm?: string;
        /**
         * The content hash value.
         */
        value?: string;
    }

    export interface IntegrationAccountContentLinkResponse {
        /**
         * The content hash.
         */
        contentHash?: IntegrationAccountContentHashResponse;
        /**
         * The content size.
         */
        contentSize?: number;
        /**
         * The content version.
         */
        contentVersion?: string;
        /**
         * The metadata.
         */
        metadata?: any;
        /**
         * The content link URI.
         */
        uri?: string;
    }

    export interface IntegrationAccountSkuResponse {
        /**
         * The sku name.
         */
        name?: string;
    }

    export interface KeyVaultKeyReferenceResponse {
        /**
         * The private key name in key vault.
         */
        keyName?: string;
        /**
         * The key vault reference.
         */
        keyVault?: KeyVaultKeyReferenceResponseKeyVault;
        /**
         * The private key version in key vault.
         */
        keyVersion?: string;
    }

    /**
     * The key vault reference.
     */
    export interface KeyVaultKeyReferenceResponseKeyVault {
        /**
         * The resource id.
         */
        id?: string;
        /**
         * The resource name.
         */
        name: string;
        /**
         * The resource type.
         */
        type: string;
    }

    export interface PartnerContentResponse {
        /**
         * The B2B partner content.
         */
        b2b?: B2BPartnerContentResponse;
    }

    export interface X12AcknowledgementSettingsResponse {
        /**
         * The acknowledgement control number lower bound.
         */
        acknowledgementControlNumberLowerBound?: number;
        /**
         * The acknowledgement control number prefix.
         */
        acknowledgementControlNumberPrefix?: string;
        /**
         * The acknowledgement control number suffix.
         */
        acknowledgementControlNumberSuffix?: string;
        /**
         * The acknowledgement control number upper bound.
         */
        acknowledgementControlNumberUpperBound?: number;
        /**
         * The value indicating whether to batch functional acknowledgements.
         */
        batchFunctionalAcknowledgements?: boolean;
        /**
         * The value indicating whether to batch implementation acknowledgements.
         */
        batchImplementationAcknowledgements?: boolean;
        /**
         * The value indicating whether to batch the technical acknowledgements.
         */
        batchTechnicalAcknowledgements?: boolean;
        /**
         * The functional acknowledgement version.
         */
        functionalAcknowledgementVersion?: string;
        /**
         * The implementation acknowledgement version.
         */
        implementationAcknowledgementVersion?: string;
        /**
         * The value indicating whether functional acknowledgement is needed.
         */
        needFunctionalAcknowledgement?: boolean;
        /**
         * The value indicating whether implementation acknowledgement is needed.
         */
        needImplementationAcknowledgement?: boolean;
        /**
         * The value indicating whether a loop is needed for valid messages.
         */
        needLoopForValidMessages?: boolean;
        /**
         * The value indicating whether technical acknowledgement is needed.
         */
        needTechnicalAcknowledgement?: boolean;
        /**
         * The value indicating whether to rollover acknowledgement control number.
         */
        rolloverAcknowledgementControlNumber?: boolean;
        /**
         * The value indicating whether to send synchronous acknowledgement.
         */
        sendSynchronousAcknowledgement?: boolean;
    }

    export interface X12AgreementContentResponse {
        /**
         * The X12 one-way receive agreement.
         */
        receiveAgreement?: X12OneWayAgreementResponse;
        /**
         * The X12 one-way send agreement.
         */
        sendAgreement?: X12OneWayAgreementResponse;
    }

    export interface X12DelimiterOverridesResponse {
        /**
         * The component separator.
         */
        componentSeparator?: number;
        /**
         * The data element separator.
         */
        dataElementSeparator?: number;
        /**
         * The message id.
         */
        messageId?: string;
        /**
         * The protocol version.
         */
        protocolVersion?: string;
        /**
         * The replacement character.
         */
        replaceCharacter?: number;
        /**
         * The value indicating whether to replace separators in payload.
         */
        replaceSeparatorsInPayload?: boolean;
        /**
         * The segment terminator.
         */
        segmentTerminator?: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix?: string;
        /**
         * The target namespace on which this delimiter settings has to be applied.
         */
        targetNamespace?: string;
    }

    export interface X12EnvelopeOverrideResponse {
        /**
         * The date format.
         */
        dateFormat?: string;
        /**
         * The functional identifier code.
         */
        functionalIdentifierCode?: string;
        /**
         * The header version.
         */
        headerVersion?: string;
        /**
         * The message id on which this envelope settings has to be applied.
         */
        messageId?: string;
        /**
         * The protocol version on which this envelope settings has to be applied.
         */
        protocolVersion?: string;
        /**
         * The receiver application id.
         */
        receiverApplicationId?: string;
        /**
         * The responsible agency code.
         */
        responsibleAgencyCode?: number;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
        /**
         * The target namespace on which this envelope settings has to be applied.
         */
        targetNamespace?: string;
        /**
         * The time format.
         */
        timeFormat?: string;
    }

    export interface X12EnvelopeSettingsResponse {
        /**
         * The controls standards id.
         */
        controlStandardsId?: number;
        /**
         * The control version number.
         */
        controlVersionNumber?: string;
        /**
         * The value indicating whether to enable default group headers.
         */
        enableDefaultGroupHeaders?: boolean;
        /**
         * The functional group id.
         */
        functionalGroupId?: string;
        /**
         * The group control number lower bound.
         */
        groupControlNumberLowerBound?: number;
        /**
         * The group control number upper bound.
         */
        groupControlNumberUpperBound?: number;
        /**
         * The group header agency code.
         */
        groupHeaderAgencyCode?: string;
        /**
         * The group header date format.
         */
        groupHeaderDateFormat?: string;
        /**
         * The group header time format.
         */
        groupHeaderTimeFormat?: string;
        /**
         * The group header version.
         */
        groupHeaderVersion?: string;
        /**
         * The interchange  control number lower bound.
         */
        interchangeControlNumberLowerBound?: number;
        /**
         * The interchange  control number upper bound.
         */
        interchangeControlNumberUpperBound?: number;
        /**
         * The value indicating whether to overwrite existing transaction set control number.
         */
        overwriteExistingTransactionSetControlNumber?: boolean;
        /**
         * The receiver application id.
         */
        receiverApplicationId?: string;
        /**
         * The value indicating whether to rollover group control number.
         */
        rolloverGroupControlNumber?: boolean;
        /**
         * The value indicating whether to rollover interchange control number.
         */
        rolloverInterchangeControlNumber?: boolean;
        /**
         * The value indicating whether to rollover transaction set control number.
         */
        rolloverTransactionSetControlNumber?: boolean;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
        /**
         * The transaction set control number lower bound.
         */
        transactionSetControlNumberLowerBound?: number;
        /**
         * The transaction set control number prefix.
         */
        transactionSetControlNumberPrefix?: string;
        /**
         * The transaction set control number suffix.
         */
        transactionSetControlNumberSuffix?: string;
        /**
         * The transaction set control number upper bound.
         */
        transactionSetControlNumberUpperBound?: number;
        /**
         * The usage indicator.
         */
        usageIndicator?: string;
        /**
         * The value indicating whether to use control standards id as repetition character.
         */
        useControlStandardsIdAsRepetitionCharacter?: boolean;
    }

    export interface X12FramingSettingsResponse {
        /**
         * The X12 character set.
         */
        characterSet?: string;
        /**
         * The component separator.
         */
        componentSeparator?: number;
        /**
         * The data element separator.
         */
        dataElementSeparator?: number;
        /**
         * The replacement character.
         */
        replaceCharacter?: number;
        /**
         * The value indicating whether to replace separators in payload.
         */
        replaceSeparatorsInPayload?: boolean;
        /**
         * The segment terminator.
         */
        segmentTerminator?: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix?: string;
    }

    export interface X12MessageFilterResponse {
        /**
         * The message filter type.
         */
        messageFilterType?: string;
    }

    export interface X12MessageIdentifierResponse {
        /**
         * The message id.
         */
        messageId?: string;
    }

    export interface X12OneWayAgreementResponse {
        /**
         * The X12 protocol settings.
         */
        protocolSettings?: X12ProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity?: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity?: BusinessIdentityResponse;
    }

    export interface X12ProcessingSettingsResponse {
        /**
         * The value indicating whether to convert numerical type to implied decimal.
         */
        convertImpliedDecimal?: boolean;
        /**
         * The value indicating whether to create empty xml tags for trailing separators.
         */
        createEmptyXmlTagsForTrailingSeparators?: boolean;
        /**
         * The value indicating whether to mask security information.
         */
        maskSecurityInfo?: boolean;
        /**
         * The value indicating whether to preserve interchange.
         */
        preserveInterchange?: boolean;
        /**
         * The value indicating whether to suspend interchange on error.
         */
        suspendInterchangeOnError?: boolean;
        /**
         * The value indicating whether to use dot as decimal separator.
         */
        useDotAsDecimalSeparator?: boolean;
    }

    export interface X12ProtocolSettingsResponse {
        /**
         * The X12 acknowledgment settings.
         */
        acknowledgementSettings?: X12AcknowledgementSettingsResponse;
        /**
         * The X12 envelope override settings.
         */
        envelopeOverrides?: X12EnvelopeOverrideResponse[];
        /**
         * The X12 envelope settings.
         */
        envelopeSettings?: X12EnvelopeSettingsResponse;
        /**
         * The X12 framing settings.
         */
        framingSettings?: X12FramingSettingsResponse;
        /**
         * The X12 message filter.
         */
        messageFilter?: X12MessageFilterResponse;
        /**
         * The X12 message filter list.
         */
        messageFilterList?: X12MessageIdentifierResponse[];
        /**
         * The X12 processing settings.
         */
        processingSettings?: X12ProcessingSettingsResponse;
        /**
         * The X12 schema references.
         */
        schemaReferences?: X12SchemaReferenceResponse[];
        /**
         * The X12 security settings.
         */
        securitySettings?: X12SecuritySettingsResponse;
        /**
         * The X12 validation override settings.
         */
        validationOverrides?: X12ValidationOverrideResponse[];
        /**
         * The X12 validation settings.
         */
        validationSettings?: X12ValidationSettingsResponse;
        /**
         * The X12 delimiter override settings.
         */
        x12DelimiterOverrides?: X12DelimiterOverridesResponse[];
    }

    export interface X12SchemaReferenceResponse {
        /**
         * The message id.
         */
        messageId?: string;
        /**
         * The schema name.
         */
        schemaName?: string;
        /**
         * The schema version.
         */
        schemaVersion?: string;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
    }

    export interface X12SecuritySettingsResponse {
        /**
         * The authorization qualifier.
         */
        authorizationQualifier?: string;
        /**
         * The authorization value.
         */
        authorizationValue?: string;
        /**
         * The password value.
         */
        passwordValue?: string;
        /**
         * The security qualifier.
         */
        securityQualifier?: string;
    }

    export interface X12ValidationOverrideResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The message id on which the validation settings has to be applied.
         */
        messageId?: string;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy?: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to validate character Set.
         */
        validateCharacterSet?: boolean;
        /**
         * The value indicating whether to validate EDI types.
         */
        validateEDITypes?: boolean;
        /**
         * The value indicating whether to validate XSD types.
         */
        validateXSDTypes?: boolean;
    }

    export interface X12ValidationSettingsResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to check for duplicate group control number.
         */
        checkDuplicateGroupControlNumber?: boolean;
        /**
         * The value indicating whether to check for duplicate interchange control number.
         */
        checkDuplicateInterchangeControlNumber?: boolean;
        /**
         * The value indicating whether to check for duplicate transaction set control number.
         */
        checkDuplicateTransactionSetControlNumber?: boolean;
        /**
         * The validity period of interchange control number.
         */
        interchangeControlNumberValidityDays?: number;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy?: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes?: boolean;
        /**
         * The value indicating whether to validate character set in the message.
         */
        validateCharacterSet?: boolean;
        /**
         * The value indicating whether to Whether to validate EDI types.
         */
        validateEDITypes?: boolean;
        /**
         * The value indicating whether to Whether to validate XSD types.
         */
        validateXSDTypes?: boolean;
    }
