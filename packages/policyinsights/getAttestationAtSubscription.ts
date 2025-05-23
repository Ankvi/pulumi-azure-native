import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing attestation at subscription scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2022-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAttestationAtSubscription(args: GetAttestationAtSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetAttestationAtSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:policyinsights:getAttestationAtSubscription", {
        "attestationName": args.attestationName,
    }, opts);
}

export interface GetAttestationAtSubscriptionArgs {
    /**
     * The name of the attestation.
     */
    attestationName: string;
}

/**
 * An attestation resource.
 */
export interface GetAttestationAtSubscriptionResult {
    /**
     * The time the evidence was assessed
     */
    readonly assessmentDate?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Comments describing why this attestation was created.
     */
    readonly comments?: string;
    /**
     * The compliance state that should be set on the resource.
     */
    readonly complianceState?: string;
    /**
     * The evidence supporting the compliance state set in this attestation.
     */
    readonly evidence?: types.outputs.AttestationEvidenceResponse[];
    /**
     * The time the compliance state should expire.
     */
    readonly expiresOn?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The time the compliance state was last changed in this attestation.
     */
    readonly lastComplianceStateChangeAt: string;
    /**
     * Additional metadata for this attestation
     */
    readonly metadata?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
     */
    readonly owner?: string;
    /**
     * The resource ID of the policy assignment that the attestation is setting the state for.
     */
    readonly policyAssignmentId: string;
    /**
     * The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
     */
    readonly policyDefinitionReferenceId?: string;
    /**
     * The status of the attestation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an existing attestation at subscription scope.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2022-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAttestationAtSubscriptionOutput(args: GetAttestationAtSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAttestationAtSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:policyinsights:getAttestationAtSubscription", {
        "attestationName": args.attestationName,
    }, opts);
}

export interface GetAttestationAtSubscriptionOutputArgs {
    /**
     * The name of the attestation.
     */
    attestationName: pulumi.Input<string>;
}