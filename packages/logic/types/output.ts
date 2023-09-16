import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace logic {
    /**
     * The AS2 agreement acknowledgement connection settings.
     */
    export interface AS2AcknowledgementConnectionSettingsResponse {
        /**
         * Indicates whether to ignore mismatch in certificate name.
         */
        ignoreCertificateNameMismatch: boolean;
        /**
         * Indicates whether to keep the connection alive.
         */
        keepHttpConnectionAlive: boolean;
        /**
         * Indicates whether to support HTTP status code 'CONTINUE'.
         */
        supportHttpStatusCodeContinue: boolean;
        /**
         * Indicates whether to unfold the HTTP headers.
         */
        unfoldHttpHeaders: boolean;
    }

    /**
     * The integration account AS2 agreement content.
     */
    export interface AS2AgreementContentResponse {
        /**
         * The AS2 one-way receive agreement.
         */
        receiveAgreement: AS2OneWayAgreementResponse;
        /**
         * The AS2 one-way send agreement.
         */
        sendAgreement: AS2OneWayAgreementResponse;
    }

    /**
     * The AS2 agreement envelope settings.
     */
    export interface AS2EnvelopeSettingsResponse {
        /**
         * The value indicating whether to auto generate file name.
         */
        autogenerateFileName: boolean;
        /**
         * The template for file name.
         */
        fileNameTemplate: string;
        /**
         * The message content type.
         */
        messageContentType: string;
        /**
         * The value indicating whether to suspend message on file name generation error.
         */
        suspendMessageOnFileNameGenerationError: boolean;
        /**
         * The value indicating whether to transmit file name in mime header.
         */
        transmitFileNameInMimeHeader: boolean;
    }

    /**
     * The AS2 agreement error settings.
     */
    export interface AS2ErrorSettingsResponse {
        /**
         * The value indicating whether to resend message If MDN is not received.
         */
        resendIfMDNNotReceived: boolean;
        /**
         * The value indicating whether to suspend duplicate message.
         */
        suspendDuplicateMessage: boolean;
    }

    /**
     * The AS2 agreement mdn settings.
     */
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
        micHashingAlgorithm: string;
        /**
         * The value indicating whether to send or request a MDN.
         */
        needMDN: boolean;
        /**
         * The receipt delivery URL.
         */
        receiptDeliveryUrl?: string;
        /**
         * The value indicating whether to send inbound MDN to message box.
         */
        sendInboundMDNToMessageBox: boolean;
        /**
         * The value indicating whether to send the asynchronous MDN.
         */
        sendMDNAsynchronously: boolean;
        /**
         * The value indicating whether the MDN needs to be signed or not.
         */
        signMDN: boolean;
        /**
         * The value indicating whether to sign the outbound MDN if optional.
         */
        signOutboundMDNIfOptional: boolean;
    }

    /**
     * The AS2 agreement message connection settings.
     */
    export interface AS2MessageConnectionSettingsResponse {
        /**
         * The value indicating whether to ignore mismatch in certificate name.
         */
        ignoreCertificateNameMismatch: boolean;
        /**
         * The value indicating whether to keep the connection alive.
         */
        keepHttpConnectionAlive: boolean;
        /**
         * The value indicating whether to support HTTP status code 'CONTINUE'.
         */
        supportHttpStatusCodeContinue: boolean;
        /**
         * The value indicating whether to unfold the HTTP headers.
         */
        unfoldHttpHeaders: boolean;
    }

    /**
     * The integration account AS2 one-way agreement.
     */
    export interface AS2OneWayAgreementResponse {
        /**
         * The AS2 protocol settings.
         */
        protocolSettings: AS2ProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity: BusinessIdentityResponse;
    }

    /**
     * The AS2 agreement protocol settings.
     */
    export interface AS2ProtocolSettingsResponse {
        /**
         * The acknowledgement connection settings.
         */
        acknowledgementConnectionSettings: AS2AcknowledgementConnectionSettingsResponse;
        /**
         * The envelope settings.
         */
        envelopeSettings: AS2EnvelopeSettingsResponse;
        /**
         * The error settings.
         */
        errorSettings: AS2ErrorSettingsResponse;
        /**
         * The MDN settings.
         */
        mdnSettings: AS2MdnSettingsResponse;
        /**
         * The message connection settings.
         */
        messageConnectionSettings: AS2MessageConnectionSettingsResponse;
        /**
         * The security settings.
         */
        securitySettings: AS2SecuritySettingsResponse;
        /**
         * The validation settings.
         */
        validationSettings: AS2ValidationSettingsResponse;
    }

    /**
     * The AS2 agreement security settings.
     */
    export interface AS2SecuritySettingsResponse {
        /**
         * The value indicating whether to enable NRR for inbound decoded messages.
         */
        enableNRRForInboundDecodedMessages: boolean;
        /**
         * The value indicating whether to enable NRR for inbound encoded messages.
         */
        enableNRRForInboundEncodedMessages: boolean;
        /**
         * The value indicating whether to enable NRR for inbound MDN.
         */
        enableNRRForInboundMDN: boolean;
        /**
         * The value indicating whether to enable NRR for outbound decoded messages.
         */
        enableNRRForOutboundDecodedMessages: boolean;
        /**
         * The value indicating whether to enable NRR for outbound encoded messages.
         */
        enableNRRForOutboundEncodedMessages: boolean;
        /**
         * The value indicating whether to enable NRR for outbound MDN.
         */
        enableNRRForOutboundMDN: boolean;
        /**
         * The name of the encryption certificate.
         */
        encryptionCertificateName?: string;
        /**
         * The value indicating whether to send or request a MDN.
         */
        overrideGroupSigningCertificate: boolean;
        /**
         * The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
         */
        sha2AlgorithmFormat?: string;
        /**
         * The name of the signing certificate.
         */
        signingCertificateName?: string;
    }

    /**
     * The AS2 agreement validation settings.
     */
    export interface AS2ValidationSettingsResponse {
        /**
         * The value indicating whether to check for certificate revocation list on receive.
         */
        checkCertificateRevocationListOnReceive: boolean;
        /**
         * The value indicating whether to check for certificate revocation list on send.
         */
        checkCertificateRevocationListOnSend: boolean;
        /**
         * The value indicating whether to check for duplicate message.
         */
        checkDuplicateMessage: boolean;
        /**
         * The value indicating whether the message has to be compressed.
         */
        compressMessage: boolean;
        /**
         * The value indicating whether the message has to be encrypted.
         */
        encryptMessage: boolean;
        /**
         * The encryption algorithm.
         */
        encryptionAlgorithm: string;
        /**
         * The number of days to look back for duplicate interchange.
         */
        interchangeDuplicatesValidityDays: number;
        /**
         * The value indicating whether to override incoming message properties with those in agreement.
         */
        overrideMessageProperties: boolean;
        /**
         * The value indicating whether the message has to be signed.
         */
        signMessage: boolean;
        /**
         * The signing algorithm.
         */
        signingAlgorithm?: string;
    }

    /**
     * The integration account agreement content.
     */
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

    /**
     * The API deployment parameter metadata.
     */
    export interface ApiDeploymentParameterMetadataResponse {
        /**
         * The description.
         */
        description?: string;
        /**
         * The display name.
         */
        displayName?: string;
        /**
         * Indicates whether its required.
         */
        isRequired?: boolean;
        /**
         * The type.
         */
        type?: string;
        /**
         * The visibility.
         */
        visibility?: string;
    }

    /**
     * The API deployment parameters metadata.
     */
    export interface ApiDeploymentParameterMetadataSetResponse {
        /**
         * The package content link parameter.
         */
        packageContentLink?: ApiDeploymentParameterMetadataResponse;
        /**
         * The package content link parameter.
         */
        redisCacheConnectionString?: ApiDeploymentParameterMetadataResponse;
    }

    /**
     * The API backend service.
     */
    export interface ApiResourceBackendServiceResponse {
        /**
         * The service URL.
         */
        serviceUrl?: string;
    }

    /**
     * The Api resource definition.
     */
    export interface ApiResourceDefinitionsResponse {
        /**
         * The modified swagger url.
         */
        modifiedSwaggerUrl?: string;
        /**
         * The original swagger url.
         */
        originalSwaggerUrl?: string;
    }

    /**
     * The API general information.
     */
    export interface ApiResourceGeneralInformationResponse {
        /**
         * The description.
         */
        description?: string;
        /**
         * The display name.
         */
        displayName?: string;
        /**
         * The icon url.
         */
        iconUrl?: string;
        /**
         * The release tag.
         */
        releaseTag?: string;
        /**
         * The terms of use url.
         */
        termsOfUseUrl?: string;
        /**
         * The tier.
         */
        tier?: string;
    }

    /**
     * The api resource metadata.
     */
    export interface ApiResourceMetadataResponse {
        /**
         * The api type.
         */
        apiType?: string;
        /**
         * The brand color.
         */
        brandColor?: string;
        /**
         * The connection type.
         */
        connectionType?: string;
        /**
         * The connector deployment parameters metadata.
         */
        deploymentParameters?: ApiDeploymentParameterMetadataSetResponse;
        /**
         * The hide key.
         */
        hideKey?: string;
        /**
         * The provisioning state.
         */
        provisioningState?: string;
        /**
         * The source.
         */
        source?: string;
        /**
         * The tags.
         */
        tags?: {[key: string]: string};
        /**
         * The WSDL import method.
         */
        wsdlImportMethod?: string;
        /**
         * The WSDL service.
         */
        wsdlService?: WsdlServiceResponse;
    }

    /**
     * The API resource policies.
     */
    export interface ApiResourcePoliciesResponse {
        /**
         * The API level only policies XML as embedded content.
         */
        content?: string;
        /**
         * The content link to the policies.
         */
        contentLink?: string;
    }

    /**
     * The assembly properties definition.
     */
    export interface AssemblyPropertiesResponse {
        /**
         * The assembly culture.
         */
        assemblyCulture?: string;
        /**
         * The assembly name.
         */
        assemblyName: string;
        /**
         * The assembly public key token.
         */
        assemblyPublicKeyToken?: string;
        /**
         * The assembly version.
         */
        assemblyVersion?: string;
        /**
         * The artifact changed time.
         */
        changedTime?: string;
        content?: any;
        /**
         * The content link.
         */
        contentLink?: ContentLinkResponse;
        /**
         * The content type.
         */
        contentType?: string;
        /**
         * The artifact creation time.
         */
        createdTime?: string;
        metadata?: any;
    }

    /**
     * The azure resource error info.
     */
    export interface AzureResourceErrorInfoResponse {
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details?: AzureResourceErrorInfoResponse[];
        /**
         * The error message.
         */
        message: string;
    }

    /**
     * The B2B partner content.
     */
    export interface B2BPartnerContentResponse {
        /**
         * The list of partner business identities.
         */
        businessIdentities?: BusinessIdentityResponse[];
    }

    /**
     * The batch configuration properties definition.
     */
    export interface BatchConfigurationPropertiesResponse {
        /**
         * The name of the batch group.
         */
        batchGroupName: string;
        /**
         * The artifact changed time.
         */
        changedTime?: string;
        /**
         * The artifact creation time.
         */
        createdTime?: string;
        metadata?: any;
        /**
         * The batch release criteria.
         */
        releaseCriteria: BatchReleaseCriteriaResponse;
    }

    /**
     * The batch release criteria.
     */
    export interface BatchReleaseCriteriaResponse {
        /**
         * The batch size in bytes.
         */
        batchSize?: number;
        /**
         * The message count.
         */
        messageCount?: number;
        /**
         * The recurrence.
         */
        recurrence?: WorkflowTriggerRecurrenceResponse;
    }

    /**
     * The integration account partner's business identity.
     */
    export interface BusinessIdentityResponse {
        /**
         * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
         */
        qualifier: string;
        /**
         * The user defined business identity value.
         */
        value: string;
    }

    /**
     * The content hash.
     */
    export interface ContentHashResponse {
        /**
         * The algorithm of the content hash.
         */
        algorithm?: string;
        /**
         * The value of the content hash.
         */
        value?: string;
    }

    /**
     * The content link.
     */
    export interface ContentLinkResponse {
        /**
         * The content hash.
         */
        contentHash: ContentHashResponse;
        /**
         * The content size.
         */
        contentSize: number;
        /**
         * The content version.
         */
        contentVersion: string;
        /**
         * The metadata.
         */
        metadata: any;
        /**
         * The content link URI.
         */
        uri?: string;
    }

    /**
     * The Edifact agreement acknowledgement settings.
     */
    export interface EdifactAcknowledgementSettingsResponse {
        /**
         * The acknowledgement control number lower bound.
         */
        acknowledgementControlNumberLowerBound: number;
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
        acknowledgementControlNumberUpperBound: number;
        /**
         * The value indicating whether to batch functional acknowledgements.
         */
        batchFunctionalAcknowledgements: boolean;
        /**
         * The value indicating whether to batch the technical acknowledgements.
         */
        batchTechnicalAcknowledgements: boolean;
        /**
         * The value indicating whether functional acknowledgement is needed.
         */
        needFunctionalAcknowledgement: boolean;
        /**
         * The value indicating whether a loop is needed for valid messages.
         */
        needLoopForValidMessages: boolean;
        /**
         * The value indicating whether technical acknowledgement is needed.
         */
        needTechnicalAcknowledgement: boolean;
        /**
         * The value indicating whether to rollover acknowledgement control number.
         */
        rolloverAcknowledgementControlNumber: boolean;
        /**
         * The value indicating whether to send synchronous acknowledgement.
         */
        sendSynchronousAcknowledgement: boolean;
    }

    /**
     * The Edifact agreement content.
     */
    export interface EdifactAgreementContentResponse {
        /**
         * The EDIFACT one-way receive agreement.
         */
        receiveAgreement: EdifactOneWayAgreementResponse;
        /**
         * The EDIFACT one-way send agreement.
         */
        sendAgreement: EdifactOneWayAgreementResponse;
    }

    /**
     * The Edifact delimiter override settings.
     */
    export interface EdifactDelimiterOverrideResponse {
        /**
         * The component separator.
         */
        componentSeparator: number;
        /**
         * The data element separator.
         */
        dataElementSeparator: number;
        /**
         * The decimal point indicator.
         */
        decimalPointIndicator: string;
        /**
         * The message association assigned code.
         */
        messageAssociationAssignedCode?: string;
        /**
         * The message id.
         */
        messageId?: string;
        /**
         * The message release.
         */
        messageRelease?: string;
        /**
         * The message version.
         */
        messageVersion?: string;
        /**
         * The release indicator.
         */
        releaseIndicator: number;
        /**
         * The repetition separator.
         */
        repetitionSeparator: number;
        /**
         * The segment terminator.
         */
        segmentTerminator: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix: string;
        /**
         * The target namespace on which this delimiter settings has to be applied.
         */
        targetNamespace?: string;
    }

    /**
     * The Edifact envelope override settings.
     */
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

    /**
     * The Edifact agreement envelope settings.
     */
    export interface EdifactEnvelopeSettingsResponse {
        /**
         * The application reference id.
         */
        applicationReferenceId?: string;
        /**
         * The value indicating whether to apply delimiter string advice.
         */
        applyDelimiterStringAdvice: boolean;
        /**
         * The communication agreement id.
         */
        communicationAgreementId?: string;
        /**
         * The value indicating whether to create grouping segments.
         */
        createGroupingSegments: boolean;
        /**
         * The value indicating whether to enable default group headers.
         */
        enableDefaultGroupHeaders: boolean;
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
        groupControlNumberLowerBound: number;
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
        groupControlNumberUpperBound: number;
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
        interchangeControlNumberLowerBound: number;
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
        interchangeControlNumberUpperBound: number;
        /**
         * The value indicating whether the message is a test interchange.
         */
        isTestInterchange: boolean;
        /**
         * The value indicating whether to overwrite existing transaction set control number.
         */
        overwriteExistingTransactionSetControlNumber: boolean;
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
        rolloverGroupControlNumber: boolean;
        /**
         * The value indicating whether to rollover interchange control number.
         */
        rolloverInterchangeControlNumber: boolean;
        /**
         * The value indicating whether to rollover transaction set control number.
         */
        rolloverTransactionSetControlNumber: boolean;
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
        transactionSetControlNumberLowerBound: number;
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
        transactionSetControlNumberUpperBound: number;
    }

    /**
     * The Edifact agreement framing settings.
     */
    export interface EdifactFramingSettingsResponse {
        /**
         * The character encoding.
         */
        characterEncoding?: string;
        /**
         * The EDIFACT frame setting characterSet.
         */
        characterSet: string;
        /**
         * The component separator.
         */
        componentSeparator: number;
        /**
         * The data element separator.
         */
        dataElementSeparator: number;
        /**
         * The EDIFACT frame setting decimal indicator.
         */
        decimalPointIndicator: string;
        /**
         * The protocol version.
         */
        protocolVersion: number;
        /**
         * The release indicator.
         */
        releaseIndicator: number;
        /**
         * The repetition separator.
         */
        repetitionSeparator: number;
        /**
         * The segment terminator.
         */
        segmentTerminator: number;
        /**
         * The EDIFACT frame setting segment terminator suffix.
         */
        segmentTerminatorSuffix: string;
        /**
         * The service code list directory version.
         */
        serviceCodeListDirectoryVersion?: string;
    }

    /**
     * The Edifact message filter for odata query.
     */
    export interface EdifactMessageFilterResponse {
        /**
         * The message filter type.
         */
        messageFilterType: string;
    }

    /**
     * The Edifact message identifier.
     */
    export interface EdifactMessageIdentifierResponse {
        /**
         * The message id on which this envelope settings has to be applied.
         */
        messageId: string;
    }

    /**
     * The Edifact one way agreement.
     */
    export interface EdifactOneWayAgreementResponse {
        /**
         * The EDIFACT protocol settings.
         */
        protocolSettings: EdifactProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity: BusinessIdentityResponse;
    }

    /**
     * The Edifact agreement protocol settings.
     */
    export interface EdifactProcessingSettingsResponse {
        /**
         * The value indicating whether to create empty xml tags for trailing separators.
         */
        createEmptyXmlTagsForTrailingSeparators: boolean;
        /**
         * The value indicating whether to mask security information.
         */
        maskSecurityInfo: boolean;
        /**
         * The value indicating whether to preserve interchange.
         */
        preserveInterchange: boolean;
        /**
         * The value indicating whether to suspend interchange on error.
         */
        suspendInterchangeOnError: boolean;
        /**
         * The value indicating whether to use dot as decimal separator.
         */
        useDotAsDecimalSeparator: boolean;
    }

    /**
     * The Edifact agreement protocol settings.
     */
    export interface EdifactProtocolSettingsResponse {
        /**
         * The EDIFACT acknowledgement settings.
         */
        acknowledgementSettings: EdifactAcknowledgementSettingsResponse;
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
        envelopeSettings: EdifactEnvelopeSettingsResponse;
        /**
         * The EDIFACT framing settings.
         */
        framingSettings: EdifactFramingSettingsResponse;
        /**
         * The EDIFACT message filter.
         */
        messageFilter: EdifactMessageFilterResponse;
        /**
         * The EDIFACT message filter list.
         */
        messageFilterList?: EdifactMessageIdentifierResponse[];
        /**
         * The EDIFACT processing Settings.
         */
        processingSettings: EdifactProcessingSettingsResponse;
        /**
         * The EDIFACT schema references.
         */
        schemaReferences: EdifactSchemaReferenceResponse[];
        /**
         * The EDIFACT validation override settings.
         */
        validationOverrides?: EdifactValidationOverrideResponse[];
        /**
         * The EDIFACT validation settings.
         */
        validationSettings: EdifactValidationSettingsResponse;
    }

    /**
     * The Edifact schema reference.
     */
    export interface EdifactSchemaReferenceResponse {
        /**
         * The association assigned code.
         */
        associationAssignedCode?: string;
        /**
         * The message id.
         */
        messageId: string;
        /**
         * The message release version.
         */
        messageRelease: string;
        /**
         * The message version.
         */
        messageVersion: string;
        /**
         * The schema name.
         */
        schemaName: string;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
        /**
         * The sender application qualifier.
         */
        senderApplicationQualifier?: string;
    }

    /**
     * The Edifact validation override settings.
     */
    export interface EdifactValidationOverrideResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to validate character Set.
         */
        enforceCharacterSet: boolean;
        /**
         * The message id on which the validation settings has to be applied.
         */
        messageId: string;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to validate EDI types.
         */
        validateEDITypes: boolean;
        /**
         * The value indicating whether to validate XSD types.
         */
        validateXSDTypes: boolean;
    }

    /**
     * The Edifact agreement validation settings.
     */
    export interface EdifactValidationSettingsResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to check for duplicate group control number.
         */
        checkDuplicateGroupControlNumber: boolean;
        /**
         * The value indicating whether to check for duplicate interchange control number.
         */
        checkDuplicateInterchangeControlNumber: boolean;
        /**
         * The value indicating whether to check for duplicate transaction set control number.
         */
        checkDuplicateTransactionSetControlNumber: boolean;
        /**
         * The validity period of interchange control number.
         */
        interchangeControlNumberValidityDays: number;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to validate character set in the message.
         */
        validateCharacterSet: boolean;
        /**
         * The value indicating whether to Whether to validate EDI types.
         */
        validateEDITypes: boolean;
        /**
         * The value indicating whether to Whether to validate XSD types.
         */
        validateXSDTypes: boolean;
    }

    /**
     * The expression.
     */
    export interface ExpressionResponse {
        /**
         * The azure resource error info.
         */
        error?: AzureResourceErrorInfoResponse;
        /**
         * The sub expressions.
         */
        subexpressions?: ExpressionResponse[];
        /**
         * The text.
         */
        text?: string;
        value?: any;
    }

    /**
     * The expression root.
     */
    export interface ExpressionRootResponse {
        /**
         * The azure resource error info.
         */
        error?: AzureResourceErrorInfoResponse;
        /**
         * The path.
         */
        path?: string;
        /**
         * The sub expressions.
         */
        subexpressions?: ExpressionResponse[];
        /**
         * The text.
         */
        text?: string;
        value?: any;
    }

    /**
     * The access control configuration policy.
     */
    export interface FlowAccessControlConfigurationPolicyResponse {
        /**
         * The allowed caller IP address ranges.
         */
        allowedCallerIpAddresses?: IpAddressRangeResponse[];
        /**
         * The authentication policies for workflow.
         */
        openAuthenticationPolicies?: OpenAuthenticationAccessPoliciesResponse;
    }

    /**
     * The access control configuration.
     */
    export interface FlowAccessControlConfigurationResponse {
        /**
         * The access control configuration for workflow actions.
         */
        actions?: FlowAccessControlConfigurationPolicyResponse;
        /**
         * The access control configuration for accessing workflow run contents.
         */
        contents?: FlowAccessControlConfigurationPolicyResponse;
        /**
         * The access control configuration for invoking workflow triggers.
         */
        triggers?: FlowAccessControlConfigurationPolicyResponse;
        /**
         * The access control configuration for workflow management.
         */
        workflowManagement?: FlowAccessControlConfigurationPolicyResponse;
    }

    /**
     * The endpoints configuration.
     */
    export interface FlowEndpointsConfigurationResponse {
        /**
         * The connector endpoints.
         */
        connector?: FlowEndpointsResponse;
        /**
         * The workflow endpoints.
         */
        workflow?: FlowEndpointsResponse;
    }

    /**
     * The flow endpoints configuration.
     */
    export interface FlowEndpointsResponse {
        /**
         * The access endpoint ip address.
         */
        accessEndpointIpAddresses?: IpAddressResponse[];
        /**
         * The outgoing ip address.
         */
        outgoingIpAddresses?: IpAddressResponse[];
    }

    /**
     * The parameters schema of integration account map.
     */
    export interface IntegrationAccountMapPropertiesResponseParametersSchema {
        /**
         * The reference name.
         */
        ref?: string;
    }

    /**
     * The integration account sku.
     */
    export interface IntegrationAccountSkuResponse {
        /**
         * The sku name.
         */
        name: string;
    }

    /**
     * The encryption configuration for the integration service environment.
     */
    export interface IntegrationServiceEnvironmenEncryptionConfigurationResponse {
        /**
         * The encryption key reference.
         */
        encryptionKeyReference?: IntegrationServiceEnvironmenEncryptionKeyReferenceResponse;
    }

    /**
     * The encryption key details for the integration service environment.
     */
    export interface IntegrationServiceEnvironmenEncryptionKeyReferenceResponse {
        /**
         * Gets the key name in the Key Vault.
         */
        keyName?: string;
        /**
         * The key vault reference.
         */
        keyVault?: ResourceReferenceResponse;
        /**
         * Gets the version of the key specified in the keyName property.
         */
        keyVersion?: string;
    }

    /**
     * The integration service environment access endpoint.
     */
    export interface IntegrationServiceEnvironmentAccessEndpointResponse {
        /**
         * The access endpoint type.
         */
        type?: string;
    }

    /**
     * The integration service environment managed api deployment parameters.
     */
    export interface IntegrationServiceEnvironmentManagedApiDeploymentParametersResponse {
        /**
         * The integration service environment managed api content link for deployment.
         */
        contentLinkDefinition?: ContentLinkResponse;
    }

    /**
     * The integration service environment properties.
     */
    export interface IntegrationServiceEnvironmentPropertiesResponse {
        /**
         * The encryption configuration.
         */
        encryptionConfiguration?: IntegrationServiceEnvironmenEncryptionConfigurationResponse;
        /**
         * The endpoints configuration.
         */
        endpointsConfiguration?: FlowEndpointsConfigurationResponse;
        /**
         * Gets the tracking id.
         */
        integrationServiceEnvironmentId?: string;
        /**
         * The network configuration.
         */
        networkConfiguration?: NetworkConfigurationResponse;
        /**
         * The provisioning state.
         */
        provisioningState?: string;
        /**
         * The integration service environment state.
         */
        state?: string;
    }

    /**
     * The integration service environment sku.
     */
    export interface IntegrationServiceEnvironmentSkuResponse {
        /**
         * The sku capacity.
         */
        capacity?: number;
        /**
         * The sku name.
         */
        name?: string;
    }

    /**
     * The ip address range.
     */
    export interface IpAddressRangeResponse {
        /**
         * The IP address range.
         */
        addressRange?: string;
    }

    /**
     * The ip address.
     */
    export interface IpAddressResponse {
        /**
         * The address.
         */
        address?: string;
    }

    /**
     * The reference to the key vault key.
     */
    export interface KeyVaultKeyReferenceResponse {
        /**
         * The private key name in key vault.
         */
        keyName: string;
        /**
         * The key vault reference.
         */
        keyVault: KeyVaultKeyReferenceResponseKeyVault;
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

    /**
     * The key vault key.
     */
    export interface KeyVaultKeyResponse {
        /**
         * The key attributes.
         */
        attributes?: KeyVaultKeyResponseAttributes;
        /**
         * The key id.
         */
        kid?: string;
    }

    /**
     * The key attributes.
     */
    export interface KeyVaultKeyResponseAttributes {
        /**
         * When the key was created.
         */
        created?: number;
        /**
         * Whether the key is enabled or not.
         */
        enabled?: boolean;
        /**
         * When the key was updated.
         */
        updated?: number;
    }

    /**
     * Managed service identity properties.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * Principal Id of managed service identity.
         */
        principalId: string;
        /**
         * Tenant of managed service identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource.
         */
        type: string;
        /**
         * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * The network configuration.
     */
    export interface NetworkConfigurationResponse {
        /**
         * The access endpoint.
         */
        accessEndpoint?: IntegrationServiceEnvironmentAccessEndpointResponse;
        /**
         * The subnets.
         */
        subnets?: ResourceReferenceResponse[];
        /**
         * Gets the virtual network address space.
         */
        virtualNetworkAddressSpace?: string;
    }

    /**
     * AuthenticationPolicy of type Open.
     */
    export interface OpenAuthenticationAccessPoliciesResponse {
        /**
         * Open authentication policies.
         */
        policies?: {[key: string]: OpenAuthenticationAccessPolicyResponse};
    }

    /**
     * Open authentication access policy defined by user.
     */
    export interface OpenAuthenticationAccessPolicyResponse {
        /**
         * The access policy claims.
         */
        claims?: OpenAuthenticationPolicyClaimResponse[];
        /**
         * Type of provider for OAuth.
         */
        type?: string;
    }

    /**
     * Open authentication policy claim.
     */
    export interface OpenAuthenticationPolicyClaimResponse {
        /**
         * The name of the claim.
         */
        name?: string;
        /**
         * The value of the claim.
         */
        value?: string;
    }

    /**
     * The integration account partner content.
     */
    export interface PartnerContentResponse {
        /**
         * The B2B partner content.
         */
        b2b?: B2BPartnerContentResponse;
    }

    /**
     * The recurrence schedule occurrence.
     */
    export interface RecurrenceScheduleOccurrenceResponse {
        /**
         * The day of the week.
         */
        day?: string;
        /**
         * The occurrence.
         */
        occurrence?: number;
    }

    /**
     * The recurrence schedule.
     */
    export interface RecurrenceScheduleResponse {
        /**
         * The hours.
         */
        hours?: number[];
        /**
         * The minutes.
         */
        minutes?: number[];
        /**
         * The month days.
         */
        monthDays?: number[];
        /**
         * The monthly occurrences.
         */
        monthlyOccurrences?: RecurrenceScheduleOccurrenceResponse[];
        /**
         * The days of the week.
         */
        weekDays?: string[];
    }

    /**
     * The resource reference.
     */
    export interface ResourceReferenceResponse {
        /**
         * The resource id.
         */
        id?: string;
        /**
         * Gets the resource name.
         */
        name: string;
        /**
         * Gets the resource type.
         */
        type: string;
    }

    /**
     * The integration account RosettaNet ProcessConfiguration Acknowledgement settings.
     */
    export interface RosettaNetPipAcknowledgmentOfReceiptSettingsResponse {
        /**
         * The non-repudiation is required or not.
         */
        isNonRepudiationRequired: boolean;
        /**
         * The time to acknowledge in seconds.
         */
        timeToAcknowledgeInSeconds: number;
    }

    /**
     * The integration account RosettaNet ProcessConfiguration activity behavior.
     */
    export interface RosettaNetPipActivityBehaviorResponse {
        /**
         * The value indicating whether the RosettaNet PIP is used for a single action.
         */
        actionType: string;
        /**
         * The value indicating whether authorization is required.
         */
        isAuthorizationRequired: boolean;
        /**
         * The value indicating whether secured transport is required.
         */
        isSecuredTransportRequired: boolean;
        /**
         * The value indicating whether non-repudiation is for origin and content.
         */
        nonRepudiationOfOriginAndContent: boolean;
        /**
         * The persistent confidentiality encryption scope.
         */
        persistentConfidentialityScope: string;
        /**
         * The value indicating whether the RosettaNet PIP communication is synchronous.
         */
        responseType: string;
        /**
         * The value indicating retry count.
         */
        retryCount: number;
        /**
         * The time to perform in seconds.
         */
        timeToPerformInSeconds: number;
    }

    /**
     * The integration account RosettaNet ProcessConfiguration activity settings.
     */
    export interface RosettaNetPipActivitySettingsResponse {
        /**
         * The RosettaNet ProcessConfiguration acknowledgement settings.
         */
        acknowledgmentOfReceiptSettings: RosettaNetPipAcknowledgmentOfReceiptSettingsResponse;
        /**
         * The RosettaNet ProcessConfiguration activity behavior.
         */
        activityBehavior: RosettaNetPipActivityBehaviorResponse;
        /**
         * The RosettaNet ProcessConfiguration activity type.
         */
        activityType: string;
    }

    /**
     * The RosettaNet ProcessConfiguration business document settings.
     */
    export interface RosettaNetPipBusinessDocumentResponse {
        /**
         * The business document description.
         */
        description?: string;
        /**
         * The business document name.
         */
        name: string;
        /**
         * The business document version.
         */
        version: string;
    }

    /**
     * The integration account RosettaNet ProcessConfiguration role settings.
     */
    export interface RosettaNetPipRoleSettingsResponse {
        /**
         * The action name.
         */
        action: string;
        /**
         * The RosettaNet ProcessConfiguration business document.
         */
        businessDocument: RosettaNetPipBusinessDocumentResponse;
        /**
         * The description.
         */
        description?: string;
        /**
         * The role name.
         */
        role: string;
        /**
         * The RosettaNet ProcessConfiguration role type.
         */
        roleType: string;
        /**
         * The service name.
         */
        service: string;
        /**
         * The service classification name.
         */
        serviceClassification: string;
    }

    /**
     * The sku type.
     */
    export interface SkuResponse {
        /**
         * The name.
         */
        name: string;
        /**
         * The reference to plan.
         */
        plan?: ResourceReferenceResponse;
    }

    /**
     * User Assigned identity properties.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client Id of user assigned identity
         */
        clientId: string;
        /**
         * Principal Id of user assigned identity
         */
        principalId: string;
    }

    /**
     * The workflow parameters.
     */
    export interface WorkflowParameterResponse {
        /**
         * The description.
         */
        description?: string;
        /**
         * The metadata.
         */
        metadata?: any;
        /**
         * The type.
         */
        type?: string;
        /**
         * The value.
         */
        value?: any;
    }

    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    export interface WorkflowTriggerListCallbackUrlQueriesResponse {
        /**
         * The api version.
         */
        apiVersion?: string;
        /**
         * The SAS timestamp.
         */
        se?: string;
        /**
         * The SAS signature.
         */
        sig?: string;
        /**
         * The SAS permissions.
         */
        sp?: string;
        /**
         * The SAS version.
         */
        sv?: string;
    }

    /**
     * The workflow trigger recurrence.
     */
    export interface WorkflowTriggerRecurrenceResponse {
        /**
         * The end time.
         */
        endTime?: string;
        /**
         * The frequency.
         */
        frequency?: string;
        /**
         * The interval.
         */
        interval?: number;
        /**
         * The recurrence schedule.
         */
        schedule?: RecurrenceScheduleResponse;
        /**
         * The start time.
         */
        startTime?: string;
        /**
         * The time zone.
         */
        timeZone?: string;
    }

    /**
     * The WSDL service.
     */
    export interface WsdlServiceResponse {
        /**
         * The list of endpoints' qualified names.
         */
        endpointQualifiedNames?: string[];
        /**
         * The qualified name.
         */
        qualifiedName?: string;
    }

    /**
     * The X12 agreement acknowledgement settings.
     */
    export interface X12AcknowledgementSettingsResponse {
        /**
         * The acknowledgement control number lower bound.
         */
        acknowledgementControlNumberLowerBound: number;
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
        acknowledgementControlNumberUpperBound: number;
        /**
         * The value indicating whether to batch functional acknowledgements.
         */
        batchFunctionalAcknowledgements: boolean;
        /**
         * The value indicating whether to batch implementation acknowledgements.
         */
        batchImplementationAcknowledgements: boolean;
        /**
         * The value indicating whether to batch the technical acknowledgements.
         */
        batchTechnicalAcknowledgements: boolean;
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
        needFunctionalAcknowledgement: boolean;
        /**
         * The value indicating whether implementation acknowledgement is needed.
         */
        needImplementationAcknowledgement: boolean;
        /**
         * The value indicating whether a loop is needed for valid messages.
         */
        needLoopForValidMessages: boolean;
        /**
         * The value indicating whether technical acknowledgement is needed.
         */
        needTechnicalAcknowledgement: boolean;
        /**
         * The value indicating whether to rollover acknowledgement control number.
         */
        rolloverAcknowledgementControlNumber: boolean;
        /**
         * The value indicating whether to send synchronous acknowledgement.
         */
        sendSynchronousAcknowledgement: boolean;
    }

    /**
     * The X12 agreement content.
     */
    export interface X12AgreementContentResponse {
        /**
         * The X12 one-way receive agreement.
         */
        receiveAgreement: X12OneWayAgreementResponse;
        /**
         * The X12 one-way send agreement.
         */
        sendAgreement: X12OneWayAgreementResponse;
    }

    /**
     * The X12 delimiter override settings.
     */
    export interface X12DelimiterOverridesResponse {
        /**
         * The component separator.
         */
        componentSeparator: number;
        /**
         * The data element separator.
         */
        dataElementSeparator: number;
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
        replaceCharacter: number;
        /**
         * The value indicating whether to replace separators in payload.
         */
        replaceSeparatorsInPayload: boolean;
        /**
         * The segment terminator.
         */
        segmentTerminator: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix: string;
        /**
         * The target namespace on which this delimiter settings has to be applied.
         */
        targetNamespace?: string;
    }

    /**
     * The X12 envelope override settings.
     */
    export interface X12EnvelopeOverrideResponse {
        /**
         * The date format.
         */
        dateFormat: string;
        /**
         * The functional identifier code.
         */
        functionalIdentifierCode?: string;
        /**
         * The header version.
         */
        headerVersion: string;
        /**
         * The message id on which this envelope settings has to be applied.
         */
        messageId: string;
        /**
         * The protocol version on which this envelope settings has to be applied.
         */
        protocolVersion: string;
        /**
         * The receiver application id.
         */
        receiverApplicationId: string;
        /**
         * The responsible agency code.
         */
        responsibleAgencyCode: string;
        /**
         * The sender application id.
         */
        senderApplicationId: string;
        /**
         * The target namespace on which this envelope settings has to be applied.
         */
        targetNamespace: string;
        /**
         * The time format.
         */
        timeFormat: string;
    }

    /**
     * The X12 agreement envelope settings.
     */
    export interface X12EnvelopeSettingsResponse {
        /**
         * The controls standards id.
         */
        controlStandardsId: number;
        /**
         * The control version number.
         */
        controlVersionNumber: string;
        /**
         * The value indicating whether to enable default group headers.
         */
        enableDefaultGroupHeaders: boolean;
        /**
         * The functional group id.
         */
        functionalGroupId?: string;
        /**
         * The group control number lower bound.
         */
        groupControlNumberLowerBound: number;
        /**
         * The group control number upper bound.
         */
        groupControlNumberUpperBound: number;
        /**
         * The group header agency code.
         */
        groupHeaderAgencyCode: string;
        /**
         * The group header date format.
         */
        groupHeaderDateFormat: string;
        /**
         * The group header time format.
         */
        groupHeaderTimeFormat: string;
        /**
         * The group header version.
         */
        groupHeaderVersion: string;
        /**
         * The interchange  control number lower bound.
         */
        interchangeControlNumberLowerBound: number;
        /**
         * The interchange  control number upper bound.
         */
        interchangeControlNumberUpperBound: number;
        /**
         * The value indicating whether to overwrite existing transaction set control number.
         */
        overwriteExistingTransactionSetControlNumber: boolean;
        /**
         * The receiver application id.
         */
        receiverApplicationId: string;
        /**
         * The value indicating whether to rollover group control number.
         */
        rolloverGroupControlNumber: boolean;
        /**
         * The value indicating whether to rollover interchange control number.
         */
        rolloverInterchangeControlNumber: boolean;
        /**
         * The value indicating whether to rollover transaction set control number.
         */
        rolloverTransactionSetControlNumber: boolean;
        /**
         * The sender application id.
         */
        senderApplicationId: string;
        /**
         * The transaction set control number lower bound.
         */
        transactionSetControlNumberLowerBound: number;
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
        transactionSetControlNumberUpperBound: number;
        /**
         * The usage indicator.
         */
        usageIndicator: string;
        /**
         * The value indicating whether to use control standards id as repetition character.
         */
        useControlStandardsIdAsRepetitionCharacter: boolean;
    }

    /**
     * The X12 agreement framing settings.
     */
    export interface X12FramingSettingsResponse {
        /**
         * The X12 character set.
         */
        characterSet: string;
        /**
         * The component separator.
         */
        componentSeparator: number;
        /**
         * The data element separator.
         */
        dataElementSeparator: number;
        /**
         * The replacement character.
         */
        replaceCharacter: number;
        /**
         * The value indicating whether to replace separators in payload.
         */
        replaceSeparatorsInPayload: boolean;
        /**
         * The segment terminator.
         */
        segmentTerminator: number;
        /**
         * The segment terminator suffix.
         */
        segmentTerminatorSuffix: string;
    }

    /**
     * The X12 message filter for odata query.
     */
    export interface X12MessageFilterResponse {
        /**
         * The message filter type.
         */
        messageFilterType: string;
    }

    /**
     * The X12 message identifier.
     */
    export interface X12MessageIdentifierResponse {
        /**
         * The message id.
         */
        messageId: string;
    }

    /**
     * The X12 one-way agreement.
     */
    export interface X12OneWayAgreementResponse {
        /**
         * The X12 protocol settings.
         */
        protocolSettings: X12ProtocolSettingsResponse;
        /**
         * The receiver business identity
         */
        receiverBusinessIdentity: BusinessIdentityResponse;
        /**
         * The sender business identity
         */
        senderBusinessIdentity: BusinessIdentityResponse;
    }

    /**
     * The X12 processing settings.
     */
    export interface X12ProcessingSettingsResponse {
        /**
         * The value indicating whether to convert numerical type to implied decimal.
         */
        convertImpliedDecimal: boolean;
        /**
         * The value indicating whether to create empty xml tags for trailing separators.
         */
        createEmptyXmlTagsForTrailingSeparators: boolean;
        /**
         * The value indicating whether to mask security information.
         */
        maskSecurityInfo: boolean;
        /**
         * The value indicating whether to preserve interchange.
         */
        preserveInterchange: boolean;
        /**
         * The value indicating whether to suspend interchange on error.
         */
        suspendInterchangeOnError: boolean;
        /**
         * The value indicating whether to use dot as decimal separator.
         */
        useDotAsDecimalSeparator: boolean;
    }

    /**
     * The X12 agreement protocol settings.
     */
    export interface X12ProtocolSettingsResponse {
        /**
         * The X12 acknowledgment settings.
         */
        acknowledgementSettings: X12AcknowledgementSettingsResponse;
        /**
         * The X12 envelope override settings.
         */
        envelopeOverrides?: X12EnvelopeOverrideResponse[];
        /**
         * The X12 envelope settings.
         */
        envelopeSettings: X12EnvelopeSettingsResponse;
        /**
         * The X12 framing settings.
         */
        framingSettings: X12FramingSettingsResponse;
        /**
         * The X12 message filter.
         */
        messageFilter: X12MessageFilterResponse;
        /**
         * The X12 message filter list.
         */
        messageFilterList?: X12MessageIdentifierResponse[];
        /**
         * The X12 processing settings.
         */
        processingSettings: X12ProcessingSettingsResponse;
        /**
         * The X12 schema references.
         */
        schemaReferences: X12SchemaReferenceResponse[];
        /**
         * The X12 security settings.
         */
        securitySettings: X12SecuritySettingsResponse;
        /**
         * The X12 validation override settings.
         */
        validationOverrides?: X12ValidationOverrideResponse[];
        /**
         * The X12 validation settings.
         */
        validationSettings: X12ValidationSettingsResponse;
        /**
         * The X12 delimiter override settings.
         */
        x12DelimiterOverrides?: X12DelimiterOverridesResponse[];
    }

    /**
     * The X12 schema reference.
     */
    export interface X12SchemaReferenceResponse {
        /**
         * The message id.
         */
        messageId: string;
        /**
         * The schema name.
         */
        schemaName: string;
        /**
         * The schema version.
         */
        schemaVersion: string;
        /**
         * The sender application id.
         */
        senderApplicationId?: string;
    }

    /**
     * The X12 agreement security settings.
     */
    export interface X12SecuritySettingsResponse {
        /**
         * The authorization qualifier.
         */
        authorizationQualifier: string;
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
        securityQualifier: string;
    }

    /**
     * The X12 validation override settings.
     */
    export interface X12ValidationOverrideResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The message id on which the validation settings has to be applied.
         */
        messageId: string;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to validate character Set.
         */
        validateCharacterSet: boolean;
        /**
         * The value indicating whether to validate EDI types.
         */
        validateEDITypes: boolean;
        /**
         * The value indicating whether to validate XSD types.
         */
        validateXSDTypes: boolean;
    }

    /**
     * The X12 agreement validation settings.
     */
    export interface X12ValidationSettingsResponse {
        /**
         * The value indicating whether to allow leading and trailing spaces and zeroes.
         */
        allowLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to check for duplicate group control number.
         */
        checkDuplicateGroupControlNumber: boolean;
        /**
         * The value indicating whether to check for duplicate interchange control number.
         */
        checkDuplicateInterchangeControlNumber: boolean;
        /**
         * The value indicating whether to check for duplicate transaction set control number.
         */
        checkDuplicateTransactionSetControlNumber: boolean;
        /**
         * The validity period of interchange control number.
         */
        interchangeControlNumberValidityDays: number;
        /**
         * The trailing separator policy.
         */
        trailingSeparatorPolicy: string;
        /**
         * The value indicating whether to trim leading and trailing spaces and zeroes.
         */
        trimLeadingAndTrailingSpacesAndZeroes: boolean;
        /**
         * The value indicating whether to validate character set in the message.
         */
        validateCharacterSet: boolean;
        /**
         * The value indicating whether to Whether to validate EDI types.
         */
        validateEDITypes: boolean;
        /**
         * The value indicating whether to Whether to validate XSD types.
         */
        validateXSDTypes: boolean;
    }

    export namespace v20150201preview {
        export interface ContentHashResponse {
            /**
             * Gets or sets the algorithm.
             */
            algorithm?: string;
            /**
             * Gets or sets the value.
             */
            value?: string;
        }

        export interface ContentLinkResponse {
            /**
             * Gets or sets the content hash.
             */
            contentHash?: v20150201preview.ContentHashResponse;
            /**
             * Gets or sets the content size.
             */
            contentSize?: number;
            /**
             * Gets or sets the content version.
             */
            contentVersion?: string;
            /**
             * Gets or sets the metadata.
             */
            metadata?: any;
            /**
             * Gets or sets the content link URI.
             */
            uri?: string;
        }

        export interface ResourceReferenceResponse {
            /**
             * Gets or sets the resource id.
             */
            id?: string;
            /**
             * Gets the resource name.
             */
            name: string;
            /**
             * Gets the resource type.
             */
            type: string;
        }

        export interface SkuResponse {
            /**
             * Gets or sets the name.
             */
            name?: string;
            /**
             * Gets or sets the reference to plan.
             */
            plan?: v20150201preview.ResourceReferenceResponse;
        }

        export interface WorkflowParameterResponse {
            /**
             * Gets or sets the metadata.
             */
            metadata?: any;
            /**
             * Gets or sets the type.
             */
            type?: string;
            /**
             * Gets or sets the value.
             */
            value?: any;
        }

    }

    export namespace v20150801preview {
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
            receiveAgreement?: v20150801preview.AS2OneWayAgreementResponse;
            /**
             * The AS2 one-way send agreement.
             */
            sendAgreement?: v20150801preview.AS2OneWayAgreementResponse;
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
            protocolSettings?: v20150801preview.AS2ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
        }

        export interface AS2ProtocolSettingsResponse {
            /**
             * The acknowledgement connection settings.
             */
            acknowledgementConnectionSettings?: v20150801preview.AS2AcknowledgementConnectionSettingsResponse;
            /**
             * The envelope settings.
             */
            envelopeSettings?: v20150801preview.AS2EnvelopeSettingsResponse;
            /**
             * The error settings.
             */
            errorSettings?: v20150801preview.AS2ErrorSettingsResponse;
            /**
             * The MDN settings.
             */
            mdnSettings?: v20150801preview.AS2MdnSettingsResponse;
            /**
             * The message connection settings.
             */
            messageConnectionSettings?: v20150801preview.AS2MessageConnectionSettingsResponse;
            /**
             * The security settings.
             */
            securitySettings?: v20150801preview.AS2SecuritySettingsResponse;
            /**
             * The validation settings.
             */
            validationSettings?: v20150801preview.AS2ValidationSettingsResponse;
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
            aS2?: v20150801preview.AS2AgreementContentResponse;
            /**
             * The EDIFACT agreement content.
             */
            edifact?: v20150801preview.EdifactAgreementContentResponse;
            /**
             * The X12 agreement content.
             */
            x12?: v20150801preview.X12AgreementContentResponse;
        }

        export interface B2BPartnerContentResponse {
            /**
             * The list of partner business identities.
             */
            businessIdentities?: v20150801preview.BusinessIdentityResponse[];
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
            receiveAgreement?: v20150801preview.EdifactOneWayAgreementResponse;
            /**
             * The EDIFACT one-way send agreement.
             */
            sendAgreement?: v20150801preview.EdifactOneWayAgreementResponse;
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
            protocolSettings?: v20150801preview.EdifactProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
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
            acknowledgementSettings?: v20150801preview.EdifactAcknowledgementSettingsResponse;
            /**
             * The EDIFACT delimiter override settings.
             */
            edifactDelimiterOverrides?: v20150801preview.EdifactDelimiterOverrideResponse[];
            /**
             * The EDIFACT envelope override settings.
             */
            envelopeOverrides?: v20150801preview.EdifactEnvelopeOverrideResponse[];
            /**
             * The EDIFACT envelope settings.
             */
            envelopeSettings?: v20150801preview.EdifactEnvelopeSettingsResponse;
            /**
             * The EDIFACT framing settings.
             */
            framingSettings?: v20150801preview.EdifactFramingSettingsResponse;
            /**
             * The EDIFACT message filter.
             */
            messageFilter?: v20150801preview.EdifactMessageFilterResponse;
            /**
             * The EDIFACT message filter list.
             */
            messageFilterList?: v20150801preview.EdifactMessageIdentifierResponse[];
            /**
             * The EDIFACT processing Settings.
             */
            processingSettings?: v20150801preview.EdifactProcessingSettingsResponse;
            /**
             * The EDIFACT schema references.
             */
            schemaReferences?: v20150801preview.EdifactSchemaReferenceResponse[];
            /**
             * The EDIFACT validation override settings.
             */
            validationOverrides?: v20150801preview.EdifactValidationOverrideResponse[];
            /**
             * The EDIFACT validation settings.
             */
            validationSettings?: v20150801preview.EdifactValidationSettingsResponse;
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
            contentHash?: v20150801preview.IntegrationAccountContentHashResponse;
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
            keyVault?: v20150801preview.KeyVaultKeyReferenceResponseKeyVault;
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
            b2b?: v20150801preview.B2BPartnerContentResponse;
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
            receiveAgreement?: v20150801preview.X12OneWayAgreementResponse;
            /**
             * The X12 one-way send agreement.
             */
            sendAgreement?: v20150801preview.X12OneWayAgreementResponse;
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
            protocolSettings?: v20150801preview.X12ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity?: v20150801preview.BusinessIdentityResponse;
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
            acknowledgementSettings?: v20150801preview.X12AcknowledgementSettingsResponse;
            /**
             * The X12 envelope override settings.
             */
            envelopeOverrides?: v20150801preview.X12EnvelopeOverrideResponse[];
            /**
             * The X12 envelope settings.
             */
            envelopeSettings?: v20150801preview.X12EnvelopeSettingsResponse;
            /**
             * The X12 framing settings.
             */
            framingSettings?: v20150801preview.X12FramingSettingsResponse;
            /**
             * The X12 message filter.
             */
            messageFilter?: v20150801preview.X12MessageFilterResponse;
            /**
             * The X12 message filter list.
             */
            messageFilterList?: v20150801preview.X12MessageIdentifierResponse[];
            /**
             * The X12 processing settings.
             */
            processingSettings?: v20150801preview.X12ProcessingSettingsResponse;
            /**
             * The X12 schema references.
             */
            schemaReferences?: v20150801preview.X12SchemaReferenceResponse[];
            /**
             * The X12 security settings.
             */
            securitySettings?: v20150801preview.X12SecuritySettingsResponse;
            /**
             * The X12 validation override settings.
             */
            validationOverrides?: v20150801preview.X12ValidationOverrideResponse[];
            /**
             * The X12 validation settings.
             */
            validationSettings?: v20150801preview.X12ValidationSettingsResponse;
            /**
             * The X12 delimiter override settings.
             */
            x12DelimiterOverrides?: v20150801preview.X12DelimiterOverridesResponse[];
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

    }

    export namespace v20160601 {
        /**
         * The AS2 agreement acknowledgement connection settings.
         */
        export interface AS2AcknowledgementConnectionSettingsResponse {
            /**
             * The value indicating whether to ignore mismatch in certificate name.
             */
            ignoreCertificateNameMismatch: boolean;
            /**
             * The value indicating whether to keep the connection alive.
             */
            keepHttpConnectionAlive: boolean;
            /**
             * The value indicating whether to support HTTP status code 'CONTINUE'.
             */
            supportHttpStatusCodeContinue: boolean;
            /**
             * The value indicating whether to unfold the HTTP headers.
             */
            unfoldHttpHeaders: boolean;
        }

        /**
         * The integration account AS2 agreement content.
         */
        export interface AS2AgreementContentResponse {
            /**
             * The AS2 one-way receive agreement.
             */
            receiveAgreement: v20160601.AS2OneWayAgreementResponse;
            /**
             * The AS2 one-way send agreement.
             */
            sendAgreement: v20160601.AS2OneWayAgreementResponse;
        }

        /**
         * The AS2 agreement envelope settings.
         */
        export interface AS2EnvelopeSettingsResponse {
            /**
             * The value indicating whether to auto generate file name.
             */
            autogenerateFileName: boolean;
            /**
             * The template for file name.
             */
            fileNameTemplate: string;
            /**
             * The message content type.
             */
            messageContentType: string;
            /**
             * The value indicating whether to suspend message on file name generation error.
             */
            suspendMessageOnFileNameGenerationError: boolean;
            /**
             * The value indicating whether to transmit file name in mime header.
             */
            transmitFileNameInMimeHeader: boolean;
        }

        /**
         * The AS2 agreement error settings.
         */
        export interface AS2ErrorSettingsResponse {
            /**
             * The value indicating whether to resend message If MDN is not received.
             */
            resendIfMdnNotReceived: boolean;
            /**
             * The value indicating whether to suspend duplicate message.
             */
            suspendDuplicateMessage: boolean;
        }

        /**
         * The AS2 agreement mdn settings.
         */
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
            micHashingAlgorithm: string;
            /**
             * The value indicating whether to send or request a MDN.
             */
            needMdn: boolean;
            /**
             * The receipt delivery URL.
             */
            receiptDeliveryUrl?: string;
            /**
             * The value indicating whether to send inbound MDN to message box.
             */
            sendInboundMdnToMessageBox: boolean;
            /**
             * The value indicating whether to send the asynchronous MDN.
             */
            sendMdnAsynchronously: boolean;
            /**
             * The value indicating whether the MDN needs to be signed or not.
             */
            signMdn: boolean;
            /**
             * The value indicating whether to sign the outbound MDN if optional.
             */
            signOutboundMdnIfOptional: boolean;
        }

        /**
         * The AS2 agreement message connection settings.
         */
        export interface AS2MessageConnectionSettingsResponse {
            /**
             * The value indicating whether to ignore mismatch in certificate name.
             */
            ignoreCertificateNameMismatch: boolean;
            /**
             * The value indicating whether to keep the connection alive.
             */
            keepHttpConnectionAlive: boolean;
            /**
             * The value indicating whether to support HTTP status code 'CONTINUE'.
             */
            supportHttpStatusCodeContinue: boolean;
            /**
             * The value indicating whether to unfold the HTTP headers.
             */
            unfoldHttpHeaders: boolean;
        }

        /**
         * The integration account AS2 one-way agreement.
         */
        export interface AS2OneWayAgreementResponse {
            /**
             * The AS2 protocol settings.
             */
            protocolSettings: v20160601.AS2ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20160601.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20160601.BusinessIdentityResponse;
        }

        /**
         * The AS2 agreement protocol settings.
         */
        export interface AS2ProtocolSettingsResponse {
            /**
             * The acknowledgement connection settings.
             */
            acknowledgementConnectionSettings: v20160601.AS2AcknowledgementConnectionSettingsResponse;
            /**
             * The envelope settings.
             */
            envelopeSettings: v20160601.AS2EnvelopeSettingsResponse;
            /**
             * The error settings.
             */
            errorSettings: v20160601.AS2ErrorSettingsResponse;
            /**
             * The MDN settings.
             */
            mdnSettings: v20160601.AS2MdnSettingsResponse;
            /**
             * The message connection settings.
             */
            messageConnectionSettings: v20160601.AS2MessageConnectionSettingsResponse;
            /**
             * The security settings.
             */
            securitySettings: v20160601.AS2SecuritySettingsResponse;
            /**
             * The validation settings.
             */
            validationSettings: v20160601.AS2ValidationSettingsResponse;
        }

        /**
         * The AS2 agreement security settings.
         */
        export interface AS2SecuritySettingsResponse {
            /**
             * The value indicating whether to enable NRR for inbound decoded messages.
             */
            enableNrrForInboundDecodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for inbound encoded messages.
             */
            enableNrrForInboundEncodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for inbound MDN.
             */
            enableNrrForInboundMdn: boolean;
            /**
             * The value indicating whether to enable NRR for outbound decoded messages.
             */
            enableNrrForOutboundDecodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for outbound encoded messages.
             */
            enableNrrForOutboundEncodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for outbound MDN.
             */
            enableNrrForOutboundMdn: boolean;
            /**
             * The name of the encryption certificate.
             */
            encryptionCertificateName?: string;
            /**
             * The value indicating whether to send or request a MDN.
             */
            overrideGroupSigningCertificate: boolean;
            /**
             * The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
             */
            sha2AlgorithmFormat?: string;
            /**
             * The name of the signing certificate.
             */
            signingCertificateName?: string;
        }

        /**
         * The AS2 agreement validation settings.
         */
        export interface AS2ValidationSettingsResponse {
            /**
             * The value indicating whether to check for certificate revocation list on receive.
             */
            checkCertificateRevocationListOnReceive: boolean;
            /**
             * The value indicating whether to check for certificate revocation list on send.
             */
            checkCertificateRevocationListOnSend: boolean;
            /**
             * The value indicating whether to check for duplicate message.
             */
            checkDuplicateMessage: boolean;
            /**
             * The value indicating whether the message has to be compressed.
             */
            compressMessage: boolean;
            /**
             * The value indicating whether the message has to be encrypted.
             */
            encryptMessage: boolean;
            /**
             * The encryption algorithm.
             */
            encryptionAlgorithm: string;
            /**
             * The number of days to look back for duplicate interchange.
             */
            interchangeDuplicatesValidityDays: number;
            /**
             * The value indicating whether to override incoming message properties with those in agreement.
             */
            overrideMessageProperties: boolean;
            /**
             * The value indicating whether the message has to be signed.
             */
            signMessage: boolean;
            /**
             * The signing algorithm.
             */
            signingAlgorithm?: string;
        }

        /**
         * The integration account agreement content.
         */
        export interface AgreementContentResponse {
            /**
             * The AS2 agreement content.
             */
            aS2?: v20160601.AS2AgreementContentResponse;
            /**
             * The EDIFACT agreement content.
             */
            edifact?: v20160601.EdifactAgreementContentResponse;
            /**
             * The X12 agreement content.
             */
            x12?: v20160601.X12AgreementContentResponse;
        }

        /**
         * The azure resource error info.
         */
        export interface AzureResourceErrorInfoResponse {
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details?: v20160601.AzureResourceErrorInfoResponse[];
            /**
             * The error message.
             */
            message: string;
        }

        /**
         * The B2B partner content.
         */
        export interface B2BPartnerContentResponse {
            /**
             * The list of partner business identities.
             */
            businessIdentities?: v20160601.BusinessIdentityResponse[];
        }

        /**
         * The integration account partner's business identity.
         */
        export interface BusinessIdentityResponse {
            /**
             * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
             */
            qualifier: string;
            /**
             * The user defined business identity value.
             */
            value: string;
        }

        /**
         * The content hash.
         */
        export interface ContentHashResponse {
            /**
             * The algorithm of the content hash.
             */
            algorithm?: string;
            /**
             * The value of the content hash.
             */
            value?: string;
        }

        /**
         * The content link.
         */
        export interface ContentLinkResponse {
            /**
             * The content hash.
             */
            contentHash?: v20160601.ContentHashResponse;
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

        /**
         * The Edifact agreement acknowledgement settings.
         */
        export interface EdifactAcknowledgementSettingsResponse {
            /**
             * The acknowledgement control number lower bound.
             */
            acknowledgementControlNumberLowerBound: number;
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
            acknowledgementControlNumberUpperBound: number;
            /**
             * The value indicating whether to batch functional acknowledgements.
             */
            batchFunctionalAcknowledgements: boolean;
            /**
             * The value indicating whether to batch the technical acknowledgements.
             */
            batchTechnicalAcknowledgements: boolean;
            /**
             * The value indicating whether functional acknowledgement is needed.
             */
            needFunctionalAcknowledgement: boolean;
            /**
             * The value indicating whether a loop is needed for valid messages.
             */
            needLoopForValidMessages: boolean;
            /**
             * The value indicating whether technical acknowledgement is needed.
             */
            needTechnicalAcknowledgement: boolean;
            /**
             * The value indicating whether to rollover acknowledgement control number.
             */
            rolloverAcknowledgementControlNumber: boolean;
            /**
             * The value indicating whether to send synchronous acknowledgement.
             */
            sendSynchronousAcknowledgement: boolean;
        }

        /**
         * The Edifact agreement content.
         */
        export interface EdifactAgreementContentResponse {
            /**
             * The EDIFACT one-way receive agreement.
             */
            receiveAgreement: v20160601.EdifactOneWayAgreementResponse;
            /**
             * The EDIFACT one-way send agreement.
             */
            sendAgreement: v20160601.EdifactOneWayAgreementResponse;
        }

        /**
         * The Edifact delimiter override settings.
         */
        export interface EdifactDelimiterOverrideResponse {
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The decimal point indicator.
             */
            decimalPointIndicator: string;
            /**
             * The message association assigned code.
             */
            messageAssociationAssignedCode?: string;
            /**
             * The message id.
             */
            messageId?: string;
            /**
             * The message release.
             */
            messageRelease?: string;
            /**
             * The message version.
             */
            messageVersion?: string;
            /**
             * The release indicator.
             */
            releaseIndicator: number;
            /**
             * The repetition separator.
             */
            repetitionSeparator: number;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The target namespace on which this delimiter settings has to be applied.
             */
            targetNamespace?: string;
        }

        /**
         * The Edifact envelope override settings.
         */
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

        /**
         * The Edifact agreement envelope settings.
         */
        export interface EdifactEnvelopeSettingsResponse {
            /**
             * The application reference id.
             */
            applicationReferenceId?: string;
            /**
             * The value indicating whether to apply delimiter string advice.
             */
            applyDelimiterStringAdvice: boolean;
            /**
             * The communication agreement id.
             */
            communicationAgreementId?: string;
            /**
             * The value indicating whether to create grouping segments.
             */
            createGroupingSegments: boolean;
            /**
             * The value indicating whether to enable default group headers.
             */
            enableDefaultGroupHeaders: boolean;
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
            groupControlNumberLowerBound: number;
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
            groupControlNumberUpperBound: number;
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
            interchangeControlNumberLowerBound: number;
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
            interchangeControlNumberUpperBound: number;
            /**
             * The value indicating whether the message is a test interchange.
             */
            isTestInterchange: boolean;
            /**
             * The value indicating whether to overwrite existing transaction set control number.
             */
            overwriteExistingTransactionSetControlNumber: boolean;
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
            rolloverGroupControlNumber: boolean;
            /**
             * The value indicating whether to rollover interchange control number.
             */
            rolloverInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to rollover transaction set control number.
             */
            rolloverTransactionSetControlNumber: boolean;
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
            transactionSetControlNumberLowerBound: number;
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
            transactionSetControlNumberUpperBound: number;
        }

        /**
         * The Edifact agreement framing settings.
         */
        export interface EdifactFramingSettingsResponse {
            /**
             * The character encoding.
             */
            characterEncoding?: string;
            /**
             * The EDIFACT frame setting characterSet.
             */
            characterSet: string;
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The EDIFACT frame setting decimal indicator.
             */
            decimalPointIndicator: string;
            /**
             * The protocol version.
             */
            protocolVersion: number;
            /**
             * The release indicator.
             */
            releaseIndicator: number;
            /**
             * The repetition separator.
             */
            repetitionSeparator: number;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The EDIFACT frame setting segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The service code list directory version.
             */
            serviceCodeListDirectoryVersion?: string;
        }

        /**
         * The Edifact message filter for odata query.
         */
        export interface EdifactMessageFilterResponse {
            /**
             * The message filter type.
             */
            messageFilterType: string;
        }

        /**
         * The Edifact message identifier.
         */
        export interface EdifactMessageIdentifierResponse {
            /**
             * The message id on which this envelope settings has to be applied.
             */
            messageId: string;
        }

        /**
         * The Edifact one way agreement.
         */
        export interface EdifactOneWayAgreementResponse {
            /**
             * The EDIFACT protocol settings.
             */
            protocolSettings: v20160601.EdifactProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20160601.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20160601.BusinessIdentityResponse;
        }

        /**
         * The Edifact agreement protocol settings.
         */
        export interface EdifactProcessingSettingsResponse {
            /**
             * The value indicating whether to create empty xml tags for trailing separators.
             */
            createEmptyXmlTagsForTrailingSeparators: boolean;
            /**
             * The value indicating whether to mask security information.
             */
            maskSecurityInfo: boolean;
            /**
             * The value indicating whether to preserve interchange.
             */
            preserveInterchange: boolean;
            /**
             * The value indicating whether to suspend interchange on error.
             */
            suspendInterchangeOnError: boolean;
            /**
             * The value indicating whether to use dot as decimal separator.
             */
            useDotAsDecimalSeparator: boolean;
        }

        /**
         * The Edifact agreement protocol settings.
         */
        export interface EdifactProtocolSettingsResponse {
            /**
             * The EDIFACT acknowledgement settings.
             */
            acknowledgementSettings: v20160601.EdifactAcknowledgementSettingsResponse;
            /**
             * The EDIFACT delimiter override settings.
             */
            edifactDelimiterOverrides?: v20160601.EdifactDelimiterOverrideResponse[];
            /**
             * The EDIFACT envelope override settings.
             */
            envelopeOverrides?: v20160601.EdifactEnvelopeOverrideResponse[];
            /**
             * The EDIFACT envelope settings.
             */
            envelopeSettings: v20160601.EdifactEnvelopeSettingsResponse;
            /**
             * The EDIFACT framing settings.
             */
            framingSettings: v20160601.EdifactFramingSettingsResponse;
            /**
             * The EDIFACT message filter.
             */
            messageFilter: v20160601.EdifactMessageFilterResponse;
            /**
             * The EDIFACT message filter list.
             */
            messageFilterList?: v20160601.EdifactMessageIdentifierResponse[];
            /**
             * The EDIFACT processing Settings.
             */
            processingSettings: v20160601.EdifactProcessingSettingsResponse;
            /**
             * The EDIFACT schema references.
             */
            schemaReferences: v20160601.EdifactSchemaReferenceResponse[];
            /**
             * The EDIFACT validation override settings.
             */
            validationOverrides?: v20160601.EdifactValidationOverrideResponse[];
            /**
             * The EDIFACT validation settings.
             */
            validationSettings: v20160601.EdifactValidationSettingsResponse;
        }

        /**
         * The Edifact schema reference.
         */
        export interface EdifactSchemaReferenceResponse {
            /**
             * The association assigned code.
             */
            associationAssignedCode?: string;
            /**
             * The message id.
             */
            messageId: string;
            /**
             * The message release version.
             */
            messageRelease: string;
            /**
             * The message version.
             */
            messageVersion: string;
            /**
             * The schema name.
             */
            schemaName: string;
            /**
             * The sender application id.
             */
            senderApplicationId?: string;
            /**
             * The sender application qualifier.
             */
            senderApplicationQualifier?: string;
        }

        /**
         * The Edifact validation override settings.
         */
        export interface EdifactValidationOverrideResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character Set.
             */
            enforceCharacterSet: boolean;
            /**
             * The message id on which the validation settings has to be applied.
             */
            messageId: string;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate EDI types.
             */
            validateEdiTypes: boolean;
            /**
             * The value indicating whether to validate XSD types.
             */
            validateXsdTypes: boolean;
        }

        /**
         * The Edifact agreement validation settings.
         */
        export interface EdifactValidationSettingsResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to check for duplicate group control number.
             */
            checkDuplicateGroupControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate interchange control number.
             */
            checkDuplicateInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate transaction set control number.
             */
            checkDuplicateTransactionSetControlNumber: boolean;
            /**
             * The validity period of interchange control number.
             */
            interchangeControlNumberValidityDays: number;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character set in the message.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to Whether to validate EDI types.
             */
            validateEdiTypes: boolean;
            /**
             * The value indicating whether to Whether to validate XSD types.
             */
            validateXsdTypes: boolean;
        }

        export interface ExpressionResponse {
            /**
             * The azure resource error info.
             */
            error?: v20160601.AzureResourceErrorInfoResponse;
            subexpressions?: v20160601.ExpressionResponse[];
            text?: string;
            value?: any;
        }

        export interface ExpressionRootResponse {
            /**
             * The azure resource error info.
             */
            error?: v20160601.AzureResourceErrorInfoResponse;
            /**
             * The path.
             */
            path?: string;
            subexpressions?: v20160601.ExpressionResponse[];
            text?: string;
            value?: any;
        }

        /**
         * The parameters schema of integration account map.
         */
        export interface IntegrationAccountMapPropertiesResponseParametersSchema {
            /**
             * The reference name.
             */
            ref?: string;
        }

        /**
         * The reference to the key vault key.
         */
        export interface KeyVaultKeyReferenceResponse {
            /**
             * The private key name in key vault.
             */
            keyName: string;
            /**
             * The key vault reference.
             */
            keyVault: v20160601.KeyVaultKeyReferenceResponseKeyVault;
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

        /**
         * The integration account partner content.
         */
        export interface PartnerContentResponse {
            /**
             * The B2B partner content.
             */
            b2b?: v20160601.B2BPartnerContentResponse;
        }

        /**
         * The resource reference.
         */
        export interface ResourceReferenceResponse {
            /**
             * The resource id.
             */
            id: string;
            /**
             * Gets the resource name.
             */
            name: string;
            /**
             * Gets the resource type.
             */
            type: string;
        }

        /**
         * The integration account RosettaNet ProcessConfiguration Acknowledgement settings.
         */
        export interface RosettaNetPipAcknowledgmentOfReceiptSettingsResponse {
            /**
             * The non-repudiation is required or not.
             */
            isNonRepudiationRequired: boolean;
            /**
             * The time to acknowledge in seconds.
             */
            timeToAcknowledgeInSeconds: number;
        }

        /**
         * The integration account RosettaNet ProcessConfiguration activity behavior.
         */
        export interface RosettaNetPipActivityBehaviorResponse {
            /**
             * The value indicating whether the RosettaNet PIP is used for a single action.
             */
            actionType: string;
            /**
             * The value indicating whether authorization is required.
             */
            isAuthorizationRequired: boolean;
            /**
             * The value indicating whether secured transport is required.
             */
            isSecuredTransportRequired: boolean;
            /**
             * The value indicating whether non-repudiation is for origin and content.
             */
            nonRepudiationOfOriginAndContent: boolean;
            /**
             * The persistent confidentiality encryption scope.
             */
            persistentConfidentialityScope: string;
            /**
             * The value indicating whether the RosettaNet PIP communication is synchronous.
             */
            responseType: string;
            /**
             * The value indicating retry count.
             */
            retryCount: number;
            /**
             * The time to perform in seconds.
             */
            timeToPerformInSeconds: number;
        }

        /**
         * The integration account RosettaNet ProcessConfiguration activity settings.
         */
        export interface RosettaNetPipActivitySettingsResponse {
            /**
             * The RosettaNet ProcessConfiguration acknowledgement settings.
             */
            acknowledgmentOfReceiptSettings: v20160601.RosettaNetPipAcknowledgmentOfReceiptSettingsResponse;
            /**
             * The RosettaNet ProcessConfiguration activity behavior.
             */
            activityBehavior: v20160601.RosettaNetPipActivityBehaviorResponse;
            /**
             * The RosettaNet ProcessConfiguration activity type.
             */
            activityType: string;
        }

        /**
         * The RosettaNet ProcessConfiguration business document settings.
         */
        export interface RosettaNetPipBusinessDocumentResponse {
            /**
             * The business document description.
             */
            description?: string;
            /**
             * The business document name.
             */
            name: string;
            /**
             * The business document version.
             */
            version: string;
        }

        /**
         * The integration account RosettaNet ProcessConfiguration role settings.
         */
        export interface RosettaNetPipRoleSettingsResponse {
            /**
             * The action name.
             */
            action: string;
            /**
             * The RosettaNet ProcessConfiguration business document.
             */
            businessDocument: v20160601.RosettaNetPipBusinessDocumentResponse;
            /**
             * The description.
             */
            description?: string;
            /**
             * The role name.
             */
            role: string;
            /**
             * The RosettaNet ProcessConfiguration role type.
             */
            roleType: string;
            /**
             * The service name.
             */
            service: string;
            /**
             * The service classification name.
             */
            serviceClassification: string;
        }

        /**
         * The sku type.
         */
        export interface SkuResponse {
            /**
             * The name.
             */
            name: string;
            /**
             * The reference to plan.
             */
            plan?: v20160601.ResourceReferenceResponse;
        }

        /**
         * The workflow parameters.
         */
        export interface WorkflowParameterResponse {
            /**
             * The description.
             */
            description?: string;
            /**
             * The metadata.
             */
            metadata?: any;
            /**
             * The type.
             */
            type?: string;
            /**
             * The value.
             */
            value?: any;
        }

        /**
         * Gets the workflow trigger callback URL query parameters.
         */
        export interface WorkflowTriggerListCallbackUrlQueriesResponse {
            /**
             * The api version.
             */
            apiVersion?: string;
            /**
             * The SAS timestamp.
             */
            se?: string;
            /**
             * The SAS signature.
             */
            sig?: string;
            /**
             * The SAS permissions.
             */
            sp?: string;
            /**
             * The SAS version.
             */
            sv?: string;
        }

        /**
         * The X12 agreement acknowledgement settings.
         */
        export interface X12AcknowledgementSettingsResponse {
            /**
             * The acknowledgement control number lower bound.
             */
            acknowledgementControlNumberLowerBound: number;
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
            acknowledgementControlNumberUpperBound: number;
            /**
             * The value indicating whether to batch functional acknowledgements.
             */
            batchFunctionalAcknowledgements: boolean;
            /**
             * The value indicating whether to batch implementation acknowledgements.
             */
            batchImplementationAcknowledgements: boolean;
            /**
             * The value indicating whether to batch the technical acknowledgements.
             */
            batchTechnicalAcknowledgements: boolean;
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
            needFunctionalAcknowledgement: boolean;
            /**
             * The value indicating whether implementation acknowledgement is needed.
             */
            needImplementationAcknowledgement: boolean;
            /**
             * The value indicating whether a loop is needed for valid messages.
             */
            needLoopForValidMessages: boolean;
            /**
             * The value indicating whether technical acknowledgement is needed.
             */
            needTechnicalAcknowledgement: boolean;
            /**
             * The value indicating whether to rollover acknowledgement control number.
             */
            rolloverAcknowledgementControlNumber: boolean;
            /**
             * The value indicating whether to send synchronous acknowledgement.
             */
            sendSynchronousAcknowledgement: boolean;
        }

        /**
         * The X12 agreement content.
         */
        export interface X12AgreementContentResponse {
            /**
             * The X12 one-way receive agreement.
             */
            receiveAgreement: v20160601.X12OneWayAgreementResponse;
            /**
             * The X12 one-way send agreement.
             */
            sendAgreement: v20160601.X12OneWayAgreementResponse;
        }

        /**
         * The X12 delimiter override settings.
         */
        export interface X12DelimiterOverridesResponse {
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
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
            replaceCharacter: number;
            /**
             * The value indicating whether to replace separators in payload.
             */
            replaceSeparatorsInPayload: boolean;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The target namespace on which this delimiter settings has to be applied.
             */
            targetNamespace?: string;
        }

        /**
         * The X12 envelope override settings.
         */
        export interface X12EnvelopeOverrideResponse {
            /**
             * The date format.
             */
            dateFormat: string;
            /**
             * The functional identifier code.
             */
            functionalIdentifierCode?: string;
            /**
             * The header version.
             */
            headerVersion: string;
            /**
             * The message id on which this envelope settings has to be applied.
             */
            messageId: string;
            /**
             * The protocol version on which this envelope settings has to be applied.
             */
            protocolVersion: string;
            /**
             * The receiver application id.
             */
            receiverApplicationId: string;
            /**
             * The responsible agency code.
             */
            responsibleAgencyCode: string;
            /**
             * The sender application id.
             */
            senderApplicationId: string;
            /**
             * The target namespace on which this envelope settings has to be applied.
             */
            targetNamespace: string;
            /**
             * The time format.
             */
            timeFormat: string;
        }

        /**
         * The X12 agreement envelope settings.
         */
        export interface X12EnvelopeSettingsResponse {
            /**
             * The controls standards id.
             */
            controlStandardsId: number;
            /**
             * The control version number.
             */
            controlVersionNumber: string;
            /**
             * The value indicating whether to enable default group headers.
             */
            enableDefaultGroupHeaders: boolean;
            /**
             * The functional group id.
             */
            functionalGroupId?: string;
            /**
             * The group control number lower bound.
             */
            groupControlNumberLowerBound: number;
            /**
             * The group control number upper bound.
             */
            groupControlNumberUpperBound: number;
            /**
             * The group header agency code.
             */
            groupHeaderAgencyCode: string;
            /**
             * The group header date format.
             */
            groupHeaderDateFormat: string;
            /**
             * The group header time format.
             */
            groupHeaderTimeFormat: string;
            /**
             * The group header version.
             */
            groupHeaderVersion: string;
            /**
             * The interchange  control number lower bound.
             */
            interchangeControlNumberLowerBound: number;
            /**
             * The interchange  control number upper bound.
             */
            interchangeControlNumberUpperBound: number;
            /**
             * The value indicating whether to overwrite existing transaction set control number.
             */
            overwriteExistingTransactionSetControlNumber: boolean;
            /**
             * The receiver application id.
             */
            receiverApplicationId: string;
            /**
             * The value indicating whether to rollover group control number.
             */
            rolloverGroupControlNumber: boolean;
            /**
             * The value indicating whether to rollover interchange control number.
             */
            rolloverInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to rollover transaction set control number.
             */
            rolloverTransactionSetControlNumber: boolean;
            /**
             * The sender application id.
             */
            senderApplicationId: string;
            /**
             * The transaction set control number lower bound.
             */
            transactionSetControlNumberLowerBound: number;
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
            transactionSetControlNumberUpperBound: number;
            /**
             * The usage indicator.
             */
            usageIndicator: string;
            /**
             * The value indicating whether to use control standards id as repetition character.
             */
            useControlStandardsIdAsRepetitionCharacter: boolean;
        }

        /**
         * The X12 agreement framing settings.
         */
        export interface X12FramingSettingsResponse {
            /**
             * The X12 character set.
             */
            characterSet: string;
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The replacement character.
             */
            replaceCharacter: number;
            /**
             * The value indicating whether to replace separators in payload.
             */
            replaceSeparatorsInPayload: boolean;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
        }

        /**
         * The X12 message filter for odata query.
         */
        export interface X12MessageFilterResponse {
            /**
             * The message filter type.
             */
            messageFilterType: string;
        }

        /**
         * The X12 message identifier.
         */
        export interface X12MessageIdentifierResponse {
            /**
             * The message id.
             */
            messageId: string;
        }

        /**
         * The X12 one-way agreement.
         */
        export interface X12OneWayAgreementResponse {
            /**
             * The X12 protocol settings.
             */
            protocolSettings: v20160601.X12ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20160601.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20160601.BusinessIdentityResponse;
        }

        /**
         * The X12 processing settings.
         */
        export interface X12ProcessingSettingsResponse {
            /**
             * The value indicating whether to convert numerical type to implied decimal.
             */
            convertImpliedDecimal: boolean;
            /**
             * The value indicating whether to create empty xml tags for trailing separators.
             */
            createEmptyXmlTagsForTrailingSeparators: boolean;
            /**
             * The value indicating whether to mask security information.
             */
            maskSecurityInfo: boolean;
            /**
             * The value indicating whether to preserve interchange.
             */
            preserveInterchange: boolean;
            /**
             * The value indicating whether to suspend interchange on error.
             */
            suspendInterchangeOnError: boolean;
            /**
             * The value indicating whether to use dot as decimal separator.
             */
            useDotAsDecimalSeparator: boolean;
        }

        /**
         * The X12 agreement protocol settings.
         */
        export interface X12ProtocolSettingsResponse {
            /**
             * The X12 acknowledgment settings.
             */
            acknowledgementSettings: v20160601.X12AcknowledgementSettingsResponse;
            /**
             * The X12 envelope override settings.
             */
            envelopeOverrides?: v20160601.X12EnvelopeOverrideResponse[];
            /**
             * The X12 envelope settings.
             */
            envelopeSettings: v20160601.X12EnvelopeSettingsResponse;
            /**
             * The X12 framing settings.
             */
            framingSettings: v20160601.X12FramingSettingsResponse;
            /**
             * The X12 message filter.
             */
            messageFilter: v20160601.X12MessageFilterResponse;
            /**
             * The X12 message filter list.
             */
            messageFilterList?: v20160601.X12MessageIdentifierResponse[];
            /**
             * The X12 processing settings.
             */
            processingSettings: v20160601.X12ProcessingSettingsResponse;
            /**
             * The X12 schema references.
             */
            schemaReferences: v20160601.X12SchemaReferenceResponse[];
            /**
             * The X12 security settings.
             */
            securitySettings: v20160601.X12SecuritySettingsResponse;
            /**
             * The X12 validation override settings.
             */
            validationOverrides?: v20160601.X12ValidationOverrideResponse[];
            /**
             * The X12 validation settings.
             */
            validationSettings: v20160601.X12ValidationSettingsResponse;
            /**
             * The X12 delimiter override settings.
             */
            x12DelimiterOverrides?: v20160601.X12DelimiterOverridesResponse[];
        }

        /**
         * The X12 schema reference.
         */
        export interface X12SchemaReferenceResponse {
            /**
             * The message id.
             */
            messageId: string;
            /**
             * The schema name.
             */
            schemaName: string;
            /**
             * The schema version.
             */
            schemaVersion: string;
            /**
             * The sender application id.
             */
            senderApplicationId?: string;
        }

        /**
         * The X12 agreement security settings.
         */
        export interface X12SecuritySettingsResponse {
            /**
             * The authorization qualifier.
             */
            authorizationQualifier: string;
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
            securityQualifier: string;
        }

        /**
         * The X12 validation override settings.
         */
        export interface X12ValidationOverrideResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The message id on which the validation settings has to be applied.
             */
            messageId: string;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character Set.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to validate EDI types.
             */
            validateEdiTypes: boolean;
            /**
             * The value indicating whether to validate XSD types.
             */
            validateXsdTypes: boolean;
        }

        /**
         * The X12 agreement validation settings.
         */
        export interface X12ValidationSettingsResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to check for duplicate group control number.
             */
            checkDuplicateGroupControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate interchange control number.
             */
            checkDuplicateInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate transaction set control number.
             */
            checkDuplicateTransactionSetControlNumber: boolean;
            /**
             * The validity period of interchange control number.
             */
            interchangeControlNumberValidityDays: number;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character set in the message.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to Whether to validate EDI types.
             */
            validateEdiTypes: boolean;
            /**
             * The value indicating whether to Whether to validate XSD types.
             */
            validateXsdTypes: boolean;
        }

    }

    export namespace v20180701preview {
        /**
         * The azure resource error info.
         */
        export interface AzureResourceErrorInfoResponse {
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details?: v20180701preview.AzureResourceErrorInfoResponse[];
            /**
             * The error message.
             */
            message: string;
        }

        export interface ExpressionResponse {
            /**
             * The azure resource error info.
             */
            error?: v20180701preview.AzureResourceErrorInfoResponse;
            subexpressions?: v20180701preview.ExpressionResponse[];
            text?: string;
            value?: any;
        }

        export interface ExpressionRootResponse {
            /**
             * The azure resource error info.
             */
            error?: v20180701preview.AzureResourceErrorInfoResponse;
            /**
             * The path.
             */
            path?: string;
            subexpressions?: v20180701preview.ExpressionResponse[];
            text?: string;
            value?: any;
        }

        /**
         * The resource reference.
         */
        export interface ResourceReferenceResponse {
            /**
             * The resource id.
             */
            id?: string;
            /**
             * Gets the resource name.
             */
            name: string;
            /**
             * Gets the resource type.
             */
            type: string;
        }

        /**
         * The sku type.
         */
        export interface SkuResponse {
            /**
             * The name.
             */
            name: string;
            /**
             * The reference to plan.
             */
            plan?: v20180701preview.ResourceReferenceResponse;
        }

        /**
         * The workflow parameters.
         */
        export interface WorkflowParameterResponse {
            /**
             * The description.
             */
            description?: string;
            /**
             * The metadata.
             */
            metadata?: any;
            /**
             * The type.
             */
            type?: string;
            /**
             * The value.
             */
            value?: any;
        }

        /**
         * Gets the workflow trigger callback URL query parameters.
         */
        export interface WorkflowTriggerListCallbackUrlQueriesResponse {
            /**
             * The api version.
             */
            apiVersion?: string;
            /**
             * The SAS timestamp.
             */
            se?: string;
            /**
             * The SAS signature.
             */
            sig?: string;
            /**
             * The SAS permissions.
             */
            sp?: string;
            /**
             * The SAS version.
             */
            sv?: string;
        }

    }

    export namespace v20190501 {
        /**
         * The AS2 agreement acknowledgement connection settings.
         */
        export interface AS2AcknowledgementConnectionSettingsResponse {
            /**
             * Indicates whether to ignore mismatch in certificate name.
             */
            ignoreCertificateNameMismatch: boolean;
            /**
             * Indicates whether to keep the connection alive.
             */
            keepHttpConnectionAlive: boolean;
            /**
             * Indicates whether to support HTTP status code 'CONTINUE'.
             */
            supportHttpStatusCodeContinue: boolean;
            /**
             * Indicates whether to unfold the HTTP headers.
             */
            unfoldHttpHeaders: boolean;
        }

        /**
         * The integration account AS2 agreement content.
         */
        export interface AS2AgreementContentResponse {
            /**
             * The AS2 one-way receive agreement.
             */
            receiveAgreement: v20190501.AS2OneWayAgreementResponse;
            /**
             * The AS2 one-way send agreement.
             */
            sendAgreement: v20190501.AS2OneWayAgreementResponse;
        }

        /**
         * The AS2 agreement envelope settings.
         */
        export interface AS2EnvelopeSettingsResponse {
            /**
             * The value indicating whether to auto generate file name.
             */
            autogenerateFileName: boolean;
            /**
             * The template for file name.
             */
            fileNameTemplate: string;
            /**
             * The message content type.
             */
            messageContentType: string;
            /**
             * The value indicating whether to suspend message on file name generation error.
             */
            suspendMessageOnFileNameGenerationError: boolean;
            /**
             * The value indicating whether to transmit file name in mime header.
             */
            transmitFileNameInMimeHeader: boolean;
        }

        /**
         * The AS2 agreement error settings.
         */
        export interface AS2ErrorSettingsResponse {
            /**
             * The value indicating whether to resend message If MDN is not received.
             */
            resendIfMDNNotReceived: boolean;
            /**
             * The value indicating whether to suspend duplicate message.
             */
            suspendDuplicateMessage: boolean;
        }

        /**
         * The AS2 agreement mdn settings.
         */
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
            micHashingAlgorithm: string;
            /**
             * The value indicating whether to send or request a MDN.
             */
            needMDN: boolean;
            /**
             * The receipt delivery URL.
             */
            receiptDeliveryUrl?: string;
            /**
             * The value indicating whether to send inbound MDN to message box.
             */
            sendInboundMDNToMessageBox: boolean;
            /**
             * The value indicating whether to send the asynchronous MDN.
             */
            sendMDNAsynchronously: boolean;
            /**
             * The value indicating whether the MDN needs to be signed or not.
             */
            signMDN: boolean;
            /**
             * The value indicating whether to sign the outbound MDN if optional.
             */
            signOutboundMDNIfOptional: boolean;
        }

        /**
         * The AS2 agreement message connection settings.
         */
        export interface AS2MessageConnectionSettingsResponse {
            /**
             * The value indicating whether to ignore mismatch in certificate name.
             */
            ignoreCertificateNameMismatch: boolean;
            /**
             * The value indicating whether to keep the connection alive.
             */
            keepHttpConnectionAlive: boolean;
            /**
             * The value indicating whether to support HTTP status code 'CONTINUE'.
             */
            supportHttpStatusCodeContinue: boolean;
            /**
             * The value indicating whether to unfold the HTTP headers.
             */
            unfoldHttpHeaders: boolean;
        }

        /**
         * The integration account AS2 one-way agreement.
         */
        export interface AS2OneWayAgreementResponse {
            /**
             * The AS2 protocol settings.
             */
            protocolSettings: v20190501.AS2ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20190501.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20190501.BusinessIdentityResponse;
        }

        /**
         * The AS2 agreement protocol settings.
         */
        export interface AS2ProtocolSettingsResponse {
            /**
             * The acknowledgement connection settings.
             */
            acknowledgementConnectionSettings: v20190501.AS2AcknowledgementConnectionSettingsResponse;
            /**
             * The envelope settings.
             */
            envelopeSettings: v20190501.AS2EnvelopeSettingsResponse;
            /**
             * The error settings.
             */
            errorSettings: v20190501.AS2ErrorSettingsResponse;
            /**
             * The MDN settings.
             */
            mdnSettings: v20190501.AS2MdnSettingsResponse;
            /**
             * The message connection settings.
             */
            messageConnectionSettings: v20190501.AS2MessageConnectionSettingsResponse;
            /**
             * The security settings.
             */
            securitySettings: v20190501.AS2SecuritySettingsResponse;
            /**
             * The validation settings.
             */
            validationSettings: v20190501.AS2ValidationSettingsResponse;
        }

        /**
         * The AS2 agreement security settings.
         */
        export interface AS2SecuritySettingsResponse {
            /**
             * The value indicating whether to enable NRR for inbound decoded messages.
             */
            enableNRRForInboundDecodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for inbound encoded messages.
             */
            enableNRRForInboundEncodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for inbound MDN.
             */
            enableNRRForInboundMDN: boolean;
            /**
             * The value indicating whether to enable NRR for outbound decoded messages.
             */
            enableNRRForOutboundDecodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for outbound encoded messages.
             */
            enableNRRForOutboundEncodedMessages: boolean;
            /**
             * The value indicating whether to enable NRR for outbound MDN.
             */
            enableNRRForOutboundMDN: boolean;
            /**
             * The name of the encryption certificate.
             */
            encryptionCertificateName?: string;
            /**
             * The value indicating whether to send or request a MDN.
             */
            overrideGroupSigningCertificate: boolean;
            /**
             * The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
             */
            sha2AlgorithmFormat?: string;
            /**
             * The name of the signing certificate.
             */
            signingCertificateName?: string;
        }

        /**
         * The AS2 agreement validation settings.
         */
        export interface AS2ValidationSettingsResponse {
            /**
             * The value indicating whether to check for certificate revocation list on receive.
             */
            checkCertificateRevocationListOnReceive: boolean;
            /**
             * The value indicating whether to check for certificate revocation list on send.
             */
            checkCertificateRevocationListOnSend: boolean;
            /**
             * The value indicating whether to check for duplicate message.
             */
            checkDuplicateMessage: boolean;
            /**
             * The value indicating whether the message has to be compressed.
             */
            compressMessage: boolean;
            /**
             * The value indicating whether the message has to be encrypted.
             */
            encryptMessage: boolean;
            /**
             * The encryption algorithm.
             */
            encryptionAlgorithm: string;
            /**
             * The number of days to look back for duplicate interchange.
             */
            interchangeDuplicatesValidityDays: number;
            /**
             * The value indicating whether to override incoming message properties with those in agreement.
             */
            overrideMessageProperties: boolean;
            /**
             * The value indicating whether the message has to be signed.
             */
            signMessage: boolean;
            /**
             * The signing algorithm.
             */
            signingAlgorithm?: string;
        }

        /**
         * The integration account agreement content.
         */
        export interface AgreementContentResponse {
            /**
             * The AS2 agreement content.
             */
            aS2?: v20190501.AS2AgreementContentResponse;
            /**
             * The EDIFACT agreement content.
             */
            edifact?: v20190501.EdifactAgreementContentResponse;
            /**
             * The X12 agreement content.
             */
            x12?: v20190501.X12AgreementContentResponse;
        }

        /**
         * The API deployment parameter metadata.
         */
        export interface ApiDeploymentParameterMetadataResponse {
            /**
             * The description.
             */
            description?: string;
            /**
             * The display name.
             */
            displayName?: string;
            /**
             * Indicates whether its required.
             */
            isRequired?: boolean;
            /**
             * The type.
             */
            type?: string;
            /**
             * The visibility.
             */
            visibility?: string;
        }

        /**
         * The API deployment parameters metadata.
         */
        export interface ApiDeploymentParameterMetadataSetResponse {
            /**
             * The package content link parameter.
             */
            packageContentLink?: v20190501.ApiDeploymentParameterMetadataResponse;
            /**
             * The package content link parameter.
             */
            redisCacheConnectionString?: v20190501.ApiDeploymentParameterMetadataResponse;
        }

        /**
         * The API backend service.
         */
        export interface ApiResourceBackendServiceResponse {
            /**
             * The service URL.
             */
            serviceUrl?: string;
        }

        /**
         * The Api resource definition.
         */
        export interface ApiResourceDefinitionsResponse {
            /**
             * The modified swagger url.
             */
            modifiedSwaggerUrl?: string;
            /**
             * The original swagger url.
             */
            originalSwaggerUrl?: string;
        }

        /**
         * The API general information.
         */
        export interface ApiResourceGeneralInformationResponse {
            /**
             * The description.
             */
            description?: string;
            /**
             * The display name.
             */
            displayName?: string;
            /**
             * The icon url.
             */
            iconUrl?: string;
            /**
             * The release tag.
             */
            releaseTag?: string;
            /**
             * The terms of use url.
             */
            termsOfUseUrl?: string;
            /**
             * The tier.
             */
            tier?: string;
        }

        /**
         * The api resource metadata.
         */
        export interface ApiResourceMetadataResponse {
            /**
             * The api type.
             */
            apiType?: string;
            /**
             * The brand color.
             */
            brandColor?: string;
            /**
             * The connection type.
             */
            connectionType?: string;
            /**
             * The connector deployment parameters metadata.
             */
            deploymentParameters?: v20190501.ApiDeploymentParameterMetadataSetResponse;
            /**
             * The hide key.
             */
            hideKey?: string;
            /**
             * The provisioning state.
             */
            provisioningState?: string;
            /**
             * The source.
             */
            source?: string;
            /**
             * The tags.
             */
            tags?: {[key: string]: string};
            /**
             * The WSDL import method.
             */
            wsdlImportMethod?: string;
            /**
             * The WSDL service.
             */
            wsdlService?: v20190501.WsdlServiceResponse;
        }

        /**
         * The API resource policies.
         */
        export interface ApiResourcePoliciesResponse {
            /**
             * The API level only policies XML as embedded content.
             */
            content?: string;
            /**
             * The content link to the policies.
             */
            contentLink?: string;
        }

        /**
         * The assembly properties definition.
         */
        export interface AssemblyPropertiesResponse {
            /**
             * The assembly culture.
             */
            assemblyCulture?: string;
            /**
             * The assembly name.
             */
            assemblyName: string;
            /**
             * The assembly public key token.
             */
            assemblyPublicKeyToken?: string;
            /**
             * The assembly version.
             */
            assemblyVersion?: string;
            /**
             * The artifact changed time.
             */
            changedTime?: string;
            content?: any;
            /**
             * The content link.
             */
            contentLink?: v20190501.ContentLinkResponse;
            /**
             * The content type.
             */
            contentType?: string;
            /**
             * The artifact creation time.
             */
            createdTime?: string;
            metadata?: any;
        }

        /**
         * The azure resource error info.
         */
        export interface AzureResourceErrorInfoResponse {
            /**
             * The error code.
             */
            code: string;
            /**
             * The error details.
             */
            details?: v20190501.AzureResourceErrorInfoResponse[];
            /**
             * The error message.
             */
            message: string;
        }

        /**
         * The B2B partner content.
         */
        export interface B2BPartnerContentResponse {
            /**
             * The list of partner business identities.
             */
            businessIdentities?: v20190501.BusinessIdentityResponse[];
        }

        /**
         * The batch configuration properties definition.
         */
        export interface BatchConfigurationPropertiesResponse {
            /**
             * The name of the batch group.
             */
            batchGroupName: string;
            /**
             * The artifact changed time.
             */
            changedTime?: string;
            /**
             * The artifact creation time.
             */
            createdTime?: string;
            metadata?: any;
            /**
             * The batch release criteria.
             */
            releaseCriteria: v20190501.BatchReleaseCriteriaResponse;
        }

        /**
         * The batch release criteria.
         */
        export interface BatchReleaseCriteriaResponse {
            /**
             * The batch size in bytes.
             */
            batchSize?: number;
            /**
             * The message count.
             */
            messageCount?: number;
            /**
             * The recurrence.
             */
            recurrence?: v20190501.WorkflowTriggerRecurrenceResponse;
        }

        /**
         * The integration account partner's business identity.
         */
        export interface BusinessIdentityResponse {
            /**
             * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
             */
            qualifier: string;
            /**
             * The user defined business identity value.
             */
            value: string;
        }

        /**
         * The content hash.
         */
        export interface ContentHashResponse {
            /**
             * The algorithm of the content hash.
             */
            algorithm?: string;
            /**
             * The value of the content hash.
             */
            value?: string;
        }

        /**
         * The content link.
         */
        export interface ContentLinkResponse {
            /**
             * The content hash.
             */
            contentHash: v20190501.ContentHashResponse;
            /**
             * The content size.
             */
            contentSize: number;
            /**
             * The content version.
             */
            contentVersion: string;
            /**
             * The metadata.
             */
            metadata: any;
            /**
             * The content link URI.
             */
            uri?: string;
        }

        /**
         * The Edifact agreement acknowledgement settings.
         */
        export interface EdifactAcknowledgementSettingsResponse {
            /**
             * The acknowledgement control number lower bound.
             */
            acknowledgementControlNumberLowerBound: number;
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
            acknowledgementControlNumberUpperBound: number;
            /**
             * The value indicating whether to batch functional acknowledgements.
             */
            batchFunctionalAcknowledgements: boolean;
            /**
             * The value indicating whether to batch the technical acknowledgements.
             */
            batchTechnicalAcknowledgements: boolean;
            /**
             * The value indicating whether functional acknowledgement is needed.
             */
            needFunctionalAcknowledgement: boolean;
            /**
             * The value indicating whether a loop is needed for valid messages.
             */
            needLoopForValidMessages: boolean;
            /**
             * The value indicating whether technical acknowledgement is needed.
             */
            needTechnicalAcknowledgement: boolean;
            /**
             * The value indicating whether to rollover acknowledgement control number.
             */
            rolloverAcknowledgementControlNumber: boolean;
            /**
             * The value indicating whether to send synchronous acknowledgement.
             */
            sendSynchronousAcknowledgement: boolean;
        }

        /**
         * The Edifact agreement content.
         */
        export interface EdifactAgreementContentResponse {
            /**
             * The EDIFACT one-way receive agreement.
             */
            receiveAgreement: v20190501.EdifactOneWayAgreementResponse;
            /**
             * The EDIFACT one-way send agreement.
             */
            sendAgreement: v20190501.EdifactOneWayAgreementResponse;
        }

        /**
         * The Edifact delimiter override settings.
         */
        export interface EdifactDelimiterOverrideResponse {
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The decimal point indicator.
             */
            decimalPointIndicator: string;
            /**
             * The message association assigned code.
             */
            messageAssociationAssignedCode?: string;
            /**
             * The message id.
             */
            messageId?: string;
            /**
             * The message release.
             */
            messageRelease?: string;
            /**
             * The message version.
             */
            messageVersion?: string;
            /**
             * The release indicator.
             */
            releaseIndicator: number;
            /**
             * The repetition separator.
             */
            repetitionSeparator: number;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The target namespace on which this delimiter settings has to be applied.
             */
            targetNamespace?: string;
        }

        /**
         * The Edifact envelope override settings.
         */
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

        /**
         * The Edifact agreement envelope settings.
         */
        export interface EdifactEnvelopeSettingsResponse {
            /**
             * The application reference id.
             */
            applicationReferenceId?: string;
            /**
             * The value indicating whether to apply delimiter string advice.
             */
            applyDelimiterStringAdvice: boolean;
            /**
             * The communication agreement id.
             */
            communicationAgreementId?: string;
            /**
             * The value indicating whether to create grouping segments.
             */
            createGroupingSegments: boolean;
            /**
             * The value indicating whether to enable default group headers.
             */
            enableDefaultGroupHeaders: boolean;
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
            groupControlNumberLowerBound: number;
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
            groupControlNumberUpperBound: number;
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
            interchangeControlNumberLowerBound: number;
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
            interchangeControlNumberUpperBound: number;
            /**
             * The value indicating whether the message is a test interchange.
             */
            isTestInterchange: boolean;
            /**
             * The value indicating whether to overwrite existing transaction set control number.
             */
            overwriteExistingTransactionSetControlNumber: boolean;
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
            rolloverGroupControlNumber: boolean;
            /**
             * The value indicating whether to rollover interchange control number.
             */
            rolloverInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to rollover transaction set control number.
             */
            rolloverTransactionSetControlNumber: boolean;
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
            transactionSetControlNumberLowerBound: number;
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
            transactionSetControlNumberUpperBound: number;
        }

        /**
         * The Edifact agreement framing settings.
         */
        export interface EdifactFramingSettingsResponse {
            /**
             * The character encoding.
             */
            characterEncoding?: string;
            /**
             * The EDIFACT frame setting characterSet.
             */
            characterSet: string;
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The EDIFACT frame setting decimal indicator.
             */
            decimalPointIndicator: string;
            /**
             * The protocol version.
             */
            protocolVersion: number;
            /**
             * The release indicator.
             */
            releaseIndicator: number;
            /**
             * The repetition separator.
             */
            repetitionSeparator: number;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The EDIFACT frame setting segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The service code list directory version.
             */
            serviceCodeListDirectoryVersion?: string;
        }

        /**
         * The Edifact message filter for odata query.
         */
        export interface EdifactMessageFilterResponse {
            /**
             * The message filter type.
             */
            messageFilterType: string;
        }

        /**
         * The Edifact message identifier.
         */
        export interface EdifactMessageIdentifierResponse {
            /**
             * The message id on which this envelope settings has to be applied.
             */
            messageId: string;
        }

        /**
         * The Edifact one way agreement.
         */
        export interface EdifactOneWayAgreementResponse {
            /**
             * The EDIFACT protocol settings.
             */
            protocolSettings: v20190501.EdifactProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20190501.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20190501.BusinessIdentityResponse;
        }

        /**
         * The Edifact agreement protocol settings.
         */
        export interface EdifactProcessingSettingsResponse {
            /**
             * The value indicating whether to create empty xml tags for trailing separators.
             */
            createEmptyXmlTagsForTrailingSeparators: boolean;
            /**
             * The value indicating whether to mask security information.
             */
            maskSecurityInfo: boolean;
            /**
             * The value indicating whether to preserve interchange.
             */
            preserveInterchange: boolean;
            /**
             * The value indicating whether to suspend interchange on error.
             */
            suspendInterchangeOnError: boolean;
            /**
             * The value indicating whether to use dot as decimal separator.
             */
            useDotAsDecimalSeparator: boolean;
        }

        /**
         * The Edifact agreement protocol settings.
         */
        export interface EdifactProtocolSettingsResponse {
            /**
             * The EDIFACT acknowledgement settings.
             */
            acknowledgementSettings: v20190501.EdifactAcknowledgementSettingsResponse;
            /**
             * The EDIFACT delimiter override settings.
             */
            edifactDelimiterOverrides?: v20190501.EdifactDelimiterOverrideResponse[];
            /**
             * The EDIFACT envelope override settings.
             */
            envelopeOverrides?: v20190501.EdifactEnvelopeOverrideResponse[];
            /**
             * The EDIFACT envelope settings.
             */
            envelopeSettings: v20190501.EdifactEnvelopeSettingsResponse;
            /**
             * The EDIFACT framing settings.
             */
            framingSettings: v20190501.EdifactFramingSettingsResponse;
            /**
             * The EDIFACT message filter.
             */
            messageFilter: v20190501.EdifactMessageFilterResponse;
            /**
             * The EDIFACT message filter list.
             */
            messageFilterList?: v20190501.EdifactMessageIdentifierResponse[];
            /**
             * The EDIFACT processing Settings.
             */
            processingSettings: v20190501.EdifactProcessingSettingsResponse;
            /**
             * The EDIFACT schema references.
             */
            schemaReferences: v20190501.EdifactSchemaReferenceResponse[];
            /**
             * The EDIFACT validation override settings.
             */
            validationOverrides?: v20190501.EdifactValidationOverrideResponse[];
            /**
             * The EDIFACT validation settings.
             */
            validationSettings: v20190501.EdifactValidationSettingsResponse;
        }

        /**
         * The Edifact schema reference.
         */
        export interface EdifactSchemaReferenceResponse {
            /**
             * The association assigned code.
             */
            associationAssignedCode?: string;
            /**
             * The message id.
             */
            messageId: string;
            /**
             * The message release version.
             */
            messageRelease: string;
            /**
             * The message version.
             */
            messageVersion: string;
            /**
             * The schema name.
             */
            schemaName: string;
            /**
             * The sender application id.
             */
            senderApplicationId?: string;
            /**
             * The sender application qualifier.
             */
            senderApplicationQualifier?: string;
        }

        /**
         * The Edifact validation override settings.
         */
        export interface EdifactValidationOverrideResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character Set.
             */
            enforceCharacterSet: boolean;
            /**
             * The message id on which the validation settings has to be applied.
             */
            messageId: string;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate EDI types.
             */
            validateEDITypes: boolean;
            /**
             * The value indicating whether to validate XSD types.
             */
            validateXSDTypes: boolean;
        }

        /**
         * The Edifact agreement validation settings.
         */
        export interface EdifactValidationSettingsResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to check for duplicate group control number.
             */
            checkDuplicateGroupControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate interchange control number.
             */
            checkDuplicateInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate transaction set control number.
             */
            checkDuplicateTransactionSetControlNumber: boolean;
            /**
             * The validity period of interchange control number.
             */
            interchangeControlNumberValidityDays: number;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character set in the message.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to Whether to validate EDI types.
             */
            validateEDITypes: boolean;
            /**
             * The value indicating whether to Whether to validate XSD types.
             */
            validateXSDTypes: boolean;
        }

        /**
         * The expression.
         */
        export interface ExpressionResponse {
            /**
             * The azure resource error info.
             */
            error?: v20190501.AzureResourceErrorInfoResponse;
            /**
             * The sub expressions.
             */
            subexpressions?: v20190501.ExpressionResponse[];
            /**
             * The text.
             */
            text?: string;
            value?: any;
        }

        /**
         * The expression root.
         */
        export interface ExpressionRootResponse {
            /**
             * The azure resource error info.
             */
            error?: v20190501.AzureResourceErrorInfoResponse;
            /**
             * The path.
             */
            path?: string;
            /**
             * The sub expressions.
             */
            subexpressions?: v20190501.ExpressionResponse[];
            /**
             * The text.
             */
            text?: string;
            value?: any;
        }

        /**
         * The access control configuration policy.
         */
        export interface FlowAccessControlConfigurationPolicyResponse {
            /**
             * The allowed caller IP address ranges.
             */
            allowedCallerIpAddresses?: v20190501.IpAddressRangeResponse[];
            /**
             * The authentication policies for workflow.
             */
            openAuthenticationPolicies?: v20190501.OpenAuthenticationAccessPoliciesResponse;
        }

        /**
         * The access control configuration.
         */
        export interface FlowAccessControlConfigurationResponse {
            /**
             * The access control configuration for workflow actions.
             */
            actions?: v20190501.FlowAccessControlConfigurationPolicyResponse;
            /**
             * The access control configuration for accessing workflow run contents.
             */
            contents?: v20190501.FlowAccessControlConfigurationPolicyResponse;
            /**
             * The access control configuration for invoking workflow triggers.
             */
            triggers?: v20190501.FlowAccessControlConfigurationPolicyResponse;
            /**
             * The access control configuration for workflow management.
             */
            workflowManagement?: v20190501.FlowAccessControlConfigurationPolicyResponse;
        }

        /**
         * The endpoints configuration.
         */
        export interface FlowEndpointsConfigurationResponse {
            /**
             * The connector endpoints.
             */
            connector?: v20190501.FlowEndpointsResponse;
            /**
             * The workflow endpoints.
             */
            workflow?: v20190501.FlowEndpointsResponse;
        }

        /**
         * The flow endpoints configuration.
         */
        export interface FlowEndpointsResponse {
            /**
             * The access endpoint ip address.
             */
            accessEndpointIpAddresses?: v20190501.IpAddressResponse[];
            /**
             * The outgoing ip address.
             */
            outgoingIpAddresses?: v20190501.IpAddressResponse[];
        }

        /**
         * The parameters schema of integration account map.
         */
        export interface IntegrationAccountMapPropertiesResponseParametersSchema {
            /**
             * The reference name.
             */
            ref?: string;
        }

        /**
         * The integration account sku.
         */
        export interface IntegrationAccountSkuResponse {
            /**
             * The sku name.
             */
            name: string;
        }

        /**
         * The encryption configuration for the integration service environment.
         */
        export interface IntegrationServiceEnvironmenEncryptionConfigurationResponse {
            /**
             * The encryption key reference.
             */
            encryptionKeyReference?: v20190501.IntegrationServiceEnvironmenEncryptionKeyReferenceResponse;
        }

        /**
         * The encryption key details for the integration service environment.
         */
        export interface IntegrationServiceEnvironmenEncryptionKeyReferenceResponse {
            /**
             * Gets the key name in the Key Vault.
             */
            keyName?: string;
            /**
             * The key vault reference.
             */
            keyVault?: v20190501.ResourceReferenceResponse;
            /**
             * Gets the version of the key specified in the keyName property.
             */
            keyVersion?: string;
        }

        /**
         * The integration service environment access endpoint.
         */
        export interface IntegrationServiceEnvironmentAccessEndpointResponse {
            /**
             * The access endpoint type.
             */
            type?: string;
        }

        /**
         * The integration service environment managed api deployment parameters.
         */
        export interface IntegrationServiceEnvironmentManagedApiDeploymentParametersResponse {
            /**
             * The integration service environment managed api content link for deployment.
             */
            contentLinkDefinition?: v20190501.ContentLinkResponse;
        }

        /**
         * The integration service environment properties.
         */
        export interface IntegrationServiceEnvironmentPropertiesResponse {
            /**
             * The encryption configuration.
             */
            encryptionConfiguration?: v20190501.IntegrationServiceEnvironmenEncryptionConfigurationResponse;
            /**
             * The endpoints configuration.
             */
            endpointsConfiguration?: v20190501.FlowEndpointsConfigurationResponse;
            /**
             * Gets the tracking id.
             */
            integrationServiceEnvironmentId?: string;
            /**
             * The network configuration.
             */
            networkConfiguration?: v20190501.NetworkConfigurationResponse;
            /**
             * The provisioning state.
             */
            provisioningState?: string;
            /**
             * The integration service environment state.
             */
            state?: string;
        }

        /**
         * The integration service environment sku.
         */
        export interface IntegrationServiceEnvironmentSkuResponse {
            /**
             * The sku capacity.
             */
            capacity?: number;
            /**
             * The sku name.
             */
            name?: string;
        }

        /**
         * The ip address range.
         */
        export interface IpAddressRangeResponse {
            /**
             * The IP address range.
             */
            addressRange?: string;
        }

        /**
         * The ip address.
         */
        export interface IpAddressResponse {
            /**
             * The address.
             */
            address?: string;
        }

        /**
         * The reference to the key vault key.
         */
        export interface KeyVaultKeyReferenceResponse {
            /**
             * The private key name in key vault.
             */
            keyName: string;
            /**
             * The key vault reference.
             */
            keyVault: v20190501.KeyVaultKeyReferenceResponseKeyVault;
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

        /**
         * The key vault key.
         */
        export interface KeyVaultKeyResponse {
            /**
             * The key attributes.
             */
            attributes?: v20190501.KeyVaultKeyResponseAttributes;
            /**
             * The key id.
             */
            kid?: string;
        }

        /**
         * The key attributes.
         */
        export interface KeyVaultKeyResponseAttributes {
            /**
             * When the key was created.
             */
            created?: number;
            /**
             * Whether the key is enabled or not.
             */
            enabled?: boolean;
            /**
             * When the key was updated.
             */
            updated?: number;
        }

        /**
         * Managed service identity properties.
         */
        export interface ManagedServiceIdentityResponse {
            /**
             * Principal Id of managed service identity.
             */
            principalId: string;
            /**
             * Tenant of managed service identity.
             */
            tenantId: string;
            /**
             * Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource.
             */
            type: string;
            /**
             * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
             */
            userAssignedIdentities?: {[key: string]: v20190501.UserAssignedIdentityResponse};
        }

        /**
         * The network configuration.
         */
        export interface NetworkConfigurationResponse {
            /**
             * The access endpoint.
             */
            accessEndpoint?: v20190501.IntegrationServiceEnvironmentAccessEndpointResponse;
            /**
             * The subnets.
             */
            subnets?: v20190501.ResourceReferenceResponse[];
            /**
             * Gets the virtual network address space.
             */
            virtualNetworkAddressSpace?: string;
        }

        /**
         * AuthenticationPolicy of type Open.
         */
        export interface OpenAuthenticationAccessPoliciesResponse {
            /**
             * Open authentication policies.
             */
            policies?: {[key: string]: v20190501.OpenAuthenticationAccessPolicyResponse};
        }

        /**
         * Open authentication access policy defined by user.
         */
        export interface OpenAuthenticationAccessPolicyResponse {
            /**
             * The access policy claims.
             */
            claims?: v20190501.OpenAuthenticationPolicyClaimResponse[];
            /**
             * Type of provider for OAuth.
             */
            type?: string;
        }

        /**
         * Open authentication policy claim.
         */
        export interface OpenAuthenticationPolicyClaimResponse {
            /**
             * The name of the claim.
             */
            name?: string;
            /**
             * The value of the claim.
             */
            value?: string;
        }

        /**
         * The integration account partner content.
         */
        export interface PartnerContentResponse {
            /**
             * The B2B partner content.
             */
            b2b?: v20190501.B2BPartnerContentResponse;
        }

        /**
         * The recurrence schedule occurrence.
         */
        export interface RecurrenceScheduleOccurrenceResponse {
            /**
             * The day of the week.
             */
            day?: string;
            /**
             * The occurrence.
             */
            occurrence?: number;
        }

        /**
         * The recurrence schedule.
         */
        export interface RecurrenceScheduleResponse {
            /**
             * The hours.
             */
            hours?: number[];
            /**
             * The minutes.
             */
            minutes?: number[];
            /**
             * The month days.
             */
            monthDays?: number[];
            /**
             * The monthly occurrences.
             */
            monthlyOccurrences?: v20190501.RecurrenceScheduleOccurrenceResponse[];
            /**
             * The days of the week.
             */
            weekDays?: string[];
        }

        /**
         * The resource reference.
         */
        export interface ResourceReferenceResponse {
            /**
             * The resource id.
             */
            id?: string;
            /**
             * Gets the resource name.
             */
            name: string;
            /**
             * Gets the resource type.
             */
            type: string;
        }

        /**
         * The sku type.
         */
        export interface SkuResponse {
            /**
             * The name.
             */
            name: string;
            /**
             * The reference to plan.
             */
            plan?: v20190501.ResourceReferenceResponse;
        }

        /**
         * User Assigned identity properties.
         */
        export interface UserAssignedIdentityResponse {
            /**
             * Client Id of user assigned identity
             */
            clientId: string;
            /**
             * Principal Id of user assigned identity
             */
            principalId: string;
        }

        /**
         * The workflow parameters.
         */
        export interface WorkflowParameterResponse {
            /**
             * The description.
             */
            description?: string;
            /**
             * The metadata.
             */
            metadata?: any;
            /**
             * The type.
             */
            type?: string;
            /**
             * The value.
             */
            value?: any;
        }

        /**
         * Gets the workflow trigger callback URL query parameters.
         */
        export interface WorkflowTriggerListCallbackUrlQueriesResponse {
            /**
             * The api version.
             */
            apiVersion?: string;
            /**
             * The SAS timestamp.
             */
            se?: string;
            /**
             * The SAS signature.
             */
            sig?: string;
            /**
             * The SAS permissions.
             */
            sp?: string;
            /**
             * The SAS version.
             */
            sv?: string;
        }

        /**
         * The workflow trigger recurrence.
         */
        export interface WorkflowTriggerRecurrenceResponse {
            /**
             * The end time.
             */
            endTime?: string;
            /**
             * The frequency.
             */
            frequency?: string;
            /**
             * The interval.
             */
            interval?: number;
            /**
             * The recurrence schedule.
             */
            schedule?: v20190501.RecurrenceScheduleResponse;
            /**
             * The start time.
             */
            startTime?: string;
            /**
             * The time zone.
             */
            timeZone?: string;
        }

        /**
         * The WSDL service.
         */
        export interface WsdlServiceResponse {
            /**
             * The list of endpoints' qualified names.
             */
            endpointQualifiedNames?: string[];
            /**
             * The qualified name.
             */
            qualifiedName?: string;
        }

        /**
         * The X12 agreement acknowledgement settings.
         */
        export interface X12AcknowledgementSettingsResponse {
            /**
             * The acknowledgement control number lower bound.
             */
            acknowledgementControlNumberLowerBound: number;
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
            acknowledgementControlNumberUpperBound: number;
            /**
             * The value indicating whether to batch functional acknowledgements.
             */
            batchFunctionalAcknowledgements: boolean;
            /**
             * The value indicating whether to batch implementation acknowledgements.
             */
            batchImplementationAcknowledgements: boolean;
            /**
             * The value indicating whether to batch the technical acknowledgements.
             */
            batchTechnicalAcknowledgements: boolean;
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
            needFunctionalAcknowledgement: boolean;
            /**
             * The value indicating whether implementation acknowledgement is needed.
             */
            needImplementationAcknowledgement: boolean;
            /**
             * The value indicating whether a loop is needed for valid messages.
             */
            needLoopForValidMessages: boolean;
            /**
             * The value indicating whether technical acknowledgement is needed.
             */
            needTechnicalAcknowledgement: boolean;
            /**
             * The value indicating whether to rollover acknowledgement control number.
             */
            rolloverAcknowledgementControlNumber: boolean;
            /**
             * The value indicating whether to send synchronous acknowledgement.
             */
            sendSynchronousAcknowledgement: boolean;
        }

        /**
         * The X12 agreement content.
         */
        export interface X12AgreementContentResponse {
            /**
             * The X12 one-way receive agreement.
             */
            receiveAgreement: v20190501.X12OneWayAgreementResponse;
            /**
             * The X12 one-way send agreement.
             */
            sendAgreement: v20190501.X12OneWayAgreementResponse;
        }

        /**
         * The X12 delimiter override settings.
         */
        export interface X12DelimiterOverridesResponse {
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
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
            replaceCharacter: number;
            /**
             * The value indicating whether to replace separators in payload.
             */
            replaceSeparatorsInPayload: boolean;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
            /**
             * The target namespace on which this delimiter settings has to be applied.
             */
            targetNamespace?: string;
        }

        /**
         * The X12 envelope override settings.
         */
        export interface X12EnvelopeOverrideResponse {
            /**
             * The date format.
             */
            dateFormat: string;
            /**
             * The functional identifier code.
             */
            functionalIdentifierCode?: string;
            /**
             * The header version.
             */
            headerVersion: string;
            /**
             * The message id on which this envelope settings has to be applied.
             */
            messageId: string;
            /**
             * The protocol version on which this envelope settings has to be applied.
             */
            protocolVersion: string;
            /**
             * The receiver application id.
             */
            receiverApplicationId: string;
            /**
             * The responsible agency code.
             */
            responsibleAgencyCode: string;
            /**
             * The sender application id.
             */
            senderApplicationId: string;
            /**
             * The target namespace on which this envelope settings has to be applied.
             */
            targetNamespace: string;
            /**
             * The time format.
             */
            timeFormat: string;
        }

        /**
         * The X12 agreement envelope settings.
         */
        export interface X12EnvelopeSettingsResponse {
            /**
             * The controls standards id.
             */
            controlStandardsId: number;
            /**
             * The control version number.
             */
            controlVersionNumber: string;
            /**
             * The value indicating whether to enable default group headers.
             */
            enableDefaultGroupHeaders: boolean;
            /**
             * The functional group id.
             */
            functionalGroupId?: string;
            /**
             * The group control number lower bound.
             */
            groupControlNumberLowerBound: number;
            /**
             * The group control number upper bound.
             */
            groupControlNumberUpperBound: number;
            /**
             * The group header agency code.
             */
            groupHeaderAgencyCode: string;
            /**
             * The group header date format.
             */
            groupHeaderDateFormat: string;
            /**
             * The group header time format.
             */
            groupHeaderTimeFormat: string;
            /**
             * The group header version.
             */
            groupHeaderVersion: string;
            /**
             * The interchange  control number lower bound.
             */
            interchangeControlNumberLowerBound: number;
            /**
             * The interchange  control number upper bound.
             */
            interchangeControlNumberUpperBound: number;
            /**
             * The value indicating whether to overwrite existing transaction set control number.
             */
            overwriteExistingTransactionSetControlNumber: boolean;
            /**
             * The receiver application id.
             */
            receiverApplicationId: string;
            /**
             * The value indicating whether to rollover group control number.
             */
            rolloverGroupControlNumber: boolean;
            /**
             * The value indicating whether to rollover interchange control number.
             */
            rolloverInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to rollover transaction set control number.
             */
            rolloverTransactionSetControlNumber: boolean;
            /**
             * The sender application id.
             */
            senderApplicationId: string;
            /**
             * The transaction set control number lower bound.
             */
            transactionSetControlNumberLowerBound: number;
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
            transactionSetControlNumberUpperBound: number;
            /**
             * The usage indicator.
             */
            usageIndicator: string;
            /**
             * The value indicating whether to use control standards id as repetition character.
             */
            useControlStandardsIdAsRepetitionCharacter: boolean;
        }

        /**
         * The X12 agreement framing settings.
         */
        export interface X12FramingSettingsResponse {
            /**
             * The X12 character set.
             */
            characterSet: string;
            /**
             * The component separator.
             */
            componentSeparator: number;
            /**
             * The data element separator.
             */
            dataElementSeparator: number;
            /**
             * The replacement character.
             */
            replaceCharacter: number;
            /**
             * The value indicating whether to replace separators in payload.
             */
            replaceSeparatorsInPayload: boolean;
            /**
             * The segment terminator.
             */
            segmentTerminator: number;
            /**
             * The segment terminator suffix.
             */
            segmentTerminatorSuffix: string;
        }

        /**
         * The X12 message filter for odata query.
         */
        export interface X12MessageFilterResponse {
            /**
             * The message filter type.
             */
            messageFilterType: string;
        }

        /**
         * The X12 message identifier.
         */
        export interface X12MessageIdentifierResponse {
            /**
             * The message id.
             */
            messageId: string;
        }

        /**
         * The X12 one-way agreement.
         */
        export interface X12OneWayAgreementResponse {
            /**
             * The X12 protocol settings.
             */
            protocolSettings: v20190501.X12ProtocolSettingsResponse;
            /**
             * The receiver business identity
             */
            receiverBusinessIdentity: v20190501.BusinessIdentityResponse;
            /**
             * The sender business identity
             */
            senderBusinessIdentity: v20190501.BusinessIdentityResponse;
        }

        /**
         * The X12 processing settings.
         */
        export interface X12ProcessingSettingsResponse {
            /**
             * The value indicating whether to convert numerical type to implied decimal.
             */
            convertImpliedDecimal: boolean;
            /**
             * The value indicating whether to create empty xml tags for trailing separators.
             */
            createEmptyXmlTagsForTrailingSeparators: boolean;
            /**
             * The value indicating whether to mask security information.
             */
            maskSecurityInfo: boolean;
            /**
             * The value indicating whether to preserve interchange.
             */
            preserveInterchange: boolean;
            /**
             * The value indicating whether to suspend interchange on error.
             */
            suspendInterchangeOnError: boolean;
            /**
             * The value indicating whether to use dot as decimal separator.
             */
            useDotAsDecimalSeparator: boolean;
        }

        /**
         * The X12 agreement protocol settings.
         */
        export interface X12ProtocolSettingsResponse {
            /**
             * The X12 acknowledgment settings.
             */
            acknowledgementSettings: v20190501.X12AcknowledgementSettingsResponse;
            /**
             * The X12 envelope override settings.
             */
            envelopeOverrides?: v20190501.X12EnvelopeOverrideResponse[];
            /**
             * The X12 envelope settings.
             */
            envelopeSettings: v20190501.X12EnvelopeSettingsResponse;
            /**
             * The X12 framing settings.
             */
            framingSettings: v20190501.X12FramingSettingsResponse;
            /**
             * The X12 message filter.
             */
            messageFilter: v20190501.X12MessageFilterResponse;
            /**
             * The X12 message filter list.
             */
            messageFilterList?: v20190501.X12MessageIdentifierResponse[];
            /**
             * The X12 processing settings.
             */
            processingSettings: v20190501.X12ProcessingSettingsResponse;
            /**
             * The X12 schema references.
             */
            schemaReferences: v20190501.X12SchemaReferenceResponse[];
            /**
             * The X12 security settings.
             */
            securitySettings: v20190501.X12SecuritySettingsResponse;
            /**
             * The X12 validation override settings.
             */
            validationOverrides?: v20190501.X12ValidationOverrideResponse[];
            /**
             * The X12 validation settings.
             */
            validationSettings: v20190501.X12ValidationSettingsResponse;
            /**
             * The X12 delimiter override settings.
             */
            x12DelimiterOverrides?: v20190501.X12DelimiterOverridesResponse[];
        }

        /**
         * The X12 schema reference.
         */
        export interface X12SchemaReferenceResponse {
            /**
             * The message id.
             */
            messageId: string;
            /**
             * The schema name.
             */
            schemaName: string;
            /**
             * The schema version.
             */
            schemaVersion: string;
            /**
             * The sender application id.
             */
            senderApplicationId?: string;
        }

        /**
         * The X12 agreement security settings.
         */
        export interface X12SecuritySettingsResponse {
            /**
             * The authorization qualifier.
             */
            authorizationQualifier: string;
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
            securityQualifier: string;
        }

        /**
         * The X12 validation override settings.
         */
        export interface X12ValidationOverrideResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The message id on which the validation settings has to be applied.
             */
            messageId: string;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character Set.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to validate EDI types.
             */
            validateEDITypes: boolean;
            /**
             * The value indicating whether to validate XSD types.
             */
            validateXSDTypes: boolean;
        }

        /**
         * The X12 agreement validation settings.
         */
        export interface X12ValidationSettingsResponse {
            /**
             * The value indicating whether to allow leading and trailing spaces and zeroes.
             */
            allowLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to check for duplicate group control number.
             */
            checkDuplicateGroupControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate interchange control number.
             */
            checkDuplicateInterchangeControlNumber: boolean;
            /**
             * The value indicating whether to check for duplicate transaction set control number.
             */
            checkDuplicateTransactionSetControlNumber: boolean;
            /**
             * The validity period of interchange control number.
             */
            interchangeControlNumberValidityDays: number;
            /**
             * The trailing separator policy.
             */
            trailingSeparatorPolicy: string;
            /**
             * The value indicating whether to trim leading and trailing spaces and zeroes.
             */
            trimLeadingAndTrailingSpacesAndZeroes: boolean;
            /**
             * The value indicating whether to validate character set in the message.
             */
            validateCharacterSet: boolean;
            /**
             * The value indicating whether to Whether to validate EDI types.
             */
            validateEDITypes: boolean;
            /**
             * The value indicating whether to Whether to validate XSD types.
             */
            validateXSDTypes: boolean;
        }

    }
}
