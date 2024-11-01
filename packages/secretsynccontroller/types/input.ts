import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The complex type of the extended location.
 */
export interface AzureResourceManagerCommonTypesExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type: pulumi.Input<string | enums.ExtendedLocationType>;
}

/**
 * Properties defining the mapping between a cloud secret store object and a Kubernetes Secret.
 */
export interface KubernetesSecretObjectMappingArgs {
    /**
     * SourcePath is the identifier for the secret data as defined by the external secret provider. This is the key or path to the secret in the provider's system, which gets mounted to a specific path in the pod. The value should match the name of the secret as specified in the SecretProviderClass's objects array.
     */
    sourcePath: pulumi.Input<string>;
    /**
     * TargetKey is the key in the Kubernetes secret's data field where the secret value will be stored. This key is used to reference the secret data within Kubernetes, and it should be unique within the secret.
     */
    targetKey: pulumi.Input<string>;
}
