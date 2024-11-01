import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name: string;
    /**
     * The type of the extended location.
     */
    type: string;
}

/**
 * Properties defining the mapping between a cloud secret store object and a Kubernetes Secret.
 */
export interface KubernetesSecretObjectMappingResponse {
    /**
     * SourcePath is the identifier for the secret data as defined by the external secret provider. This is the key or path to the secret in the provider's system, which gets mounted to a specific path in the pod. The value should match the name of the secret as specified in the SecretProviderClass's objects array.
     */
    sourcePath: string;
    /**
     * TargetKey is the key in the Kubernetes secret's data field where the secret value will be stored. This key is used to reference the secret data within Kubernetes, and it should be unique within the secret.
     */
    targetKey: string;
}

/**
 * A condition represents the status of the secret create and update processes.
 */
export interface SecretSyncConditionResponse {
    /**
     * LastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed. If that is not known, then using the time when the API field changed is acceptable.
     */
    lastTransitionTime: string;
    /**
     * Message is a human readable message indicating details about the transition. This may be an empty string.
     */
    message: string;
    /**
     * ObservedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
     */
    observedGeneration: number;
    /**
     * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
     */
    reason: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status: string;
    /**
     * Type of condition in CamelCase or in foo.example.com/CamelCase. Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to de-conflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
     */
    type: string;
}

/**
 * SecretSyncStatus defines the observed state of the secret synchronization process.
 */
export interface SecretSyncStatusResponse {
    /**
     * Conditions represent the status of the secret create and update processes. The status can be True, False, or Unknown with various reasons and messages explaining the state. Examples of reasons include CreateSucceeded, ProviderError, InvalidClusterSecretLabelError, InvalidClusterSecretAnnotationError, UnknownError, ValidatingAdmissionPolicyCheckFailed, UserInputValidationFailed, ControllerSpcError, ControllerInternalError, NoValueChange, and ValueChangeOrForceUpdateDetected.
     */
    conditions: SecretSyncConditionResponse[];
    /**
     * LastSuccessfulSyncTime represents the last time the secret was retrieved from the Provider and updated.
     */
    lastSuccessfulSyncTime: string;
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
