import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a security assessment on your scanned resource
 * Azure REST API version: 2021-06-01.
 */
export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAssessment", {
        "assessmentName": args.assessmentName,
        "expand": args.expand,
        "resourceId": args.resourceId,
    }, opts);
}

export interface GetAssessmentArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentName: string;
    /**
     * OData expand. Optional.
     */
    expand?: string;
    /**
     * The identifier of the resource.
     */
    resourceId: string;
}

/**
 * Security assessment on a resource - response format
 */
export interface GetAssessmentResult {
    /**
     * Additional data regarding the assessment
     */
    readonly additionalData?: {[key: string]: string};
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Links relevant to the assessment
     */
    readonly links: types.outputs.security.AssessmentLinksResponse;
    /**
     * Describes properties of an assessment metadata.
     */
    readonly metadata?: types.outputs.security.SecurityAssessmentMetadataPropertiesResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Data regarding 3rd party partner integration
     */
    readonly partnersData?: types.outputs.security.SecurityAssessmentPartnerDataResponse;
    /**
     * Details of the resource that was assessed
     */
    readonly resourceDetails: types.outputs.security.AzureResourceDetailsResponse | types.outputs.security.OnPremiseResourceDetailsResponse | types.outputs.security.OnPremiseSqlResourceDetailsResponse;
    /**
     * The result of the assessment
     */
    readonly status: types.outputs.security.AssessmentStatusResponseResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a security assessment on your scanned resource
 * Azure REST API version: 2021-06-01.
 */
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssessmentResult> {
    return pulumi.output(args).apply((a: any) => getAssessment(a, opts))
}

export interface GetAssessmentOutputArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentName: pulumi.Input<string>;
    /**
     * OData expand. Optional.
     */
    expand?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
}
