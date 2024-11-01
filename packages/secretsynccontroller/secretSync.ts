import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The SecretSync resource.
 * Azure REST API version: 2024-08-21-preview.
 */
export class SecretSync extends pulumi.CustomResource {
    /**
     * Get an existing SecretSync resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecretSync {
        return new SecretSync(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:secretsynccontroller:SecretSync';

    /**
     * Returns true if the given object is an instance of SecretSync.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecretSync {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecretSync.__pulumiType;
    }

    /**
     * The complex type of the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse | undefined>;
    /**
     * ForceSynchronization can be used to force the secret synchronization. The secret synchronization is triggered by changing the value in this field. This field is not used to resolve synchronization conflicts.
     */
    public readonly forceSynchronization!: pulumi.Output<string | undefined>;
    /**
     * Type specifies the type of the Kubernetes secret object, e.g. "Opaque" or"kubernetes.io/tls". The controller must have permission to create secrets of the specified type.
     */
    public readonly kubernetesSecretType!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An array of SecretObjectData that maps secret data from the external secret provider to the Kubernetes secret. Each entry specifies the source secret in the external provider and the corresponding key in the Kubernetes secret.
     */
    public readonly objectSecretMapping!: pulumi.Output<types.outputs.KubernetesSecretObjectMappingResponse[]>;
    /**
     * Provisioning state of the SecretSync instance.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SecretProviderClassName specifies the name of the SecretProviderClass resource, which contains the information needed to access the cloud provider secret store.
     */
    public readonly secretProviderClassName!: pulumi.Output<string>;
    /**
     * ServiceAccountName specifies the name of the service account used to access the cloud provider secret store. The audience field in the service account token must be passed as parameter in the controller configuration. The audience is used when requesting a token from the API server for the service account; the supported audiences are defined by each provider.
     */
    public readonly serviceAccountName!: pulumi.Output<string>;
    /**
     * SecretSyncStatus defines the observed state of the secret synchronization process.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.SecretSyncStatusResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecretSync resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretSyncArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kubernetesSecretType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubernetesSecretType'");
            }
            if ((!args || args.objectSecretMapping === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectSecretMapping'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.secretProviderClassName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretProviderClassName'");
            }
            if ((!args || args.serviceAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceAccountName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["forceSynchronization"] = args ? args.forceSynchronization : undefined;
            resourceInputs["kubernetesSecretType"] = args ? args.kubernetesSecretType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["objectSecretMapping"] = args ? args.objectSecretMapping : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secretProviderClassName"] = args ? args.secretProviderClassName : undefined;
            resourceInputs["secretSyncName"] = args ? args.secretSyncName : undefined;
            resourceInputs["serviceAccountName"] = args ? args.serviceAccountName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["forceSynchronization"] = undefined /*out*/;
            resourceInputs["kubernetesSecretType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectSecretMapping"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["secretProviderClassName"] = undefined /*out*/;
            resourceInputs["serviceAccountName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:secretsynccontroller/v20240821preview:SecretSync" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecretSync.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecretSync resource.
 */
export interface SecretSyncArgs {
    /**
     * The complex type of the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.AzureResourceManagerCommonTypesExtendedLocationArgs>;
    /**
     * ForceSynchronization can be used to force the secret synchronization. The secret synchronization is triggered by changing the value in this field. This field is not used to resolve synchronization conflicts.
     */
    forceSynchronization?: pulumi.Input<string>;
    /**
     * Type specifies the type of the Kubernetes secret object, e.g. "Opaque" or"kubernetes.io/tls". The controller must have permission to create secrets of the specified type.
     */
    kubernetesSecretType: pulumi.Input<string | types.enums.KubernetesSecretType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * An array of SecretObjectData that maps secret data from the external secret provider to the Kubernetes secret. Each entry specifies the source secret in the external provider and the corresponding key in the Kubernetes secret.
     */
    objectSecretMapping: pulumi.Input<pulumi.Input<types.inputs.KubernetesSecretObjectMappingArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SecretProviderClassName specifies the name of the SecretProviderClass resource, which contains the information needed to access the cloud provider secret store.
     */
    secretProviderClassName: pulumi.Input<string>;
    /**
     * The name of the SecretSync
     */
    secretSyncName?: pulumi.Input<string>;
    /**
     * ServiceAccountName specifies the name of the service account used to access the cloud provider secret store. The audience field in the service account token must be passed as parameter in the controller configuration. The audience is used when requesting a token from the API server for the service account; the supported audiences are defined by each provider.
     */
    serviceAccountName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}