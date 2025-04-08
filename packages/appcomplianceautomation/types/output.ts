import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A class represent the certification record synchronized from app compliance.
 */
export interface CertSyncRecordResponse {
    /**
     * Indicates the status of certification process.
     */
    certificationStatus?: string;
    /**
     * The control records list to be synchronized.
     */
    controls?: ControlSyncRecordResponse[];
    /**
     * Indicates the status of compliance process.
     */
    ingestionStatus?: string;
    /**
     * The offerGuid which mapping to the reports.
     */
    offerGuid?: string;
}

/**
 * A class represent the control record synchronized from app compliance.
 */
export interface ControlSyncRecordResponse {
    /**
     * The Id of the control. e.g. "Operational_Security_10"
     */
    controlId?: string;
    /**
     * Control status synchronized from app compliance.
     */
    controlStatus?: string;
}

/**
 * The overview of the compliance result for one report.
 */
export interface OverviewStatusResponse {
    /**
     * The count of all failed control.
     */
    failedCount: number;
    /**
     * The count of all manual control.
     */
    manualCount: number;
    /**
     * The count of all not applicable control.
     */
    notApplicableCount: number;
    /**
     * The count of all passed control.
     */
    passedCount: number;
    /**
     * The count of all pending for approval control.
     */
    pendingCount: number;
}

/**
 * A list which includes all the compliance result for one report.
 */
export interface ReportComplianceStatusResponse {
    /**
     * The Microsoft 365 certification name.
     */
    m365: OverviewStatusResponse;
}

/**
 * Single resource Id's metadata.
 */
export interface ResourceMetadataResponse {
    /**
     * Account Id. For example - the AWS account id.
     */
    accountId?: string;
    /**
     * Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
     */
    resourceId: string;
    /**
     * Resource kind.
     */
    resourceKind?: string;
    /**
     * Resource Origin.
     */
    resourceOrigin?: string;
    /**
     * Resource type. e.g. "Microsoft.Compute/virtualMachines"
     */
    resourceType?: string;
}

/**
 * Scoping answer.
 */
export interface ScopingAnswerResponse {
    /**
     * Question answer value list.
     */
    answers: string[];
    /**
     * Question id.
     */
    questionId: string;
}

/**
 * The definition of a scoping question.
 */
export interface ScopingQuestionResponse {
    /**
     * Input type of the question answer.
     */
    inputType: string;
    /**
     * Option id list.
     */
    optionIds: string[];
    /**
     * Question id.
     */
    questionId: string;
    /**
     * The rule of the question.
     */
    rules: string[];
    /**
     * The answer value to show the sub questions.
     */
    showSubQuestionsValue: string;
    /**
     * Superior question id.
     */
    superiorQuestionId: string;
}

/**
 * Single status.
 */
export interface StatusItemResponse {
    /**
     * Status name - e.g. "Active", "Failed".
     */
    statusName?: string;
    /**
     * Status value. e.g. "100", or "100%".
     */
    statusValue?: string;
}

/**
 * The information of 'bring your own storage' account binding to the report
 */
export interface StorageInfoResponse {
    /**
     * 'bring your own storage' account name
     */
    accountName?: string;
    /**
     * The region of 'bring your own storage' account
     */
    location?: string;
    /**
     * The resourceGroup which 'bring your own storage' account belongs to
     */
    resourceGroup?: string;
    /**
     * The subscription id which 'bring your own storage' account belongs to
     */
    subscriptionId?: string;
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
