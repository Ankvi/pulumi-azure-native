import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The AzureKeyVaultSecretProviderClass resource.
 *
 * Uses Azure REST API version 2024-08-21-preview. In version 2.x of the Azure Native provider, it used API version 2024-08-21-preview.
 */
export class AzureKeyVaultSecretProviderClass extends pulumi.CustomResource {
    /**
     * Get an existing AzureKeyVaultSecretProviderClass resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureKeyVaultSecretProviderClass {
        return new AzureKeyVaultSecretProviderClass(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:secretsynccontroller:AzureKeyVaultSecretProviderClass';

    /**
     * Returns true if the given object is an instance of AzureKeyVaultSecretProviderClass.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureKeyVaultSecretProviderClass {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureKeyVaultSecretProviderClass.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The user assigned managed identity client ID that should be used to access the Azure Key Vault.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * The complex type of the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse | undefined>;
    /**
     * The name of the Azure Key Vault to sync secrets from.
     */
    public readonly keyvaultName!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Objects defines the desired state of synced K8s secret objects
     */
    public readonly objects!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the AzureKeyVaultSecretProviderClass instance.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the Azure Key Vault.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AzureKeyVaultSecretProviderClass resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureKeyVaultSecretProviderClassArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.keyvaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyvaultName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["azureKeyVaultSecretProviderClassName"] = args ? args.azureKeyVaultSecretProviderClassName : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["keyvaultName"] = args ? args.keyvaultName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["objects"] = args ? args.objects : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["keyvaultName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objects"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:secretsynccontroller/v20240821preview:AzureKeyVaultSecretProviderClass" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureKeyVaultSecretProviderClass.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureKeyVaultSecretProviderClass resource.
 */
export interface AzureKeyVaultSecretProviderClassArgs {
    /**
     * The name of the AzureKeyVaultSecretProviderClass
     */
    azureKeyVaultSecretProviderClassName?: pulumi.Input<string>;
    /**
     * The user assigned managed identity client ID that should be used to access the Azure Key Vault.
     */
    clientId: pulumi.Input<string>;
    /**
     * The complex type of the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.AzureResourceManagerCommonTypesExtendedLocationArgs>;
    /**
     * The name of the Azure Key Vault to sync secrets from.
     */
    keyvaultName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Objects defines the desired state of synced K8s secret objects
     */
    objects?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Azure Active Directory tenant ID that should be used for authenticating requests to the Azure Key Vault.
     */
    tenantId: pulumi.Input<string>;
}