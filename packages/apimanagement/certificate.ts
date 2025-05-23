import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Certificate details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Certificate {
        return new Certificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Certificate';

    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Certificate.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly expirationDate!: pulumi.Output<string>;
    /**
     * KeyVault location details of the certificate.
     */
    public readonly keyVault!: pulumi.Output<types.outputs.KeyVaultContractPropertiesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Subject attribute of the certificate.
     */
    public /*out*/ readonly subject!: pulumi.Output<string>;
    /**
     * Thumbprint of the certificate.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["keyVault"] = args ? args.keyVault : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subject"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["keyVault"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subject"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:Certificate" }, { type: "azure-native:apimanagement/v20161010:Certificate" }, { type: "azure-native:apimanagement/v20170301:Certificate" }, { type: "azure-native:apimanagement/v20180101:Certificate" }, { type: "azure-native:apimanagement/v20180601preview:Certificate" }, { type: "azure-native:apimanagement/v20190101:Certificate" }, { type: "azure-native:apimanagement/v20191201:Certificate" }, { type: "azure-native:apimanagement/v20191201preview:Certificate" }, { type: "azure-native:apimanagement/v20200601preview:Certificate" }, { type: "azure-native:apimanagement/v20201201:Certificate" }, { type: "azure-native:apimanagement/v20210101preview:Certificate" }, { type: "azure-native:apimanagement/v20210401preview:Certificate" }, { type: "azure-native:apimanagement/v20210801:Certificate" }, { type: "azure-native:apimanagement/v20211201preview:Certificate" }, { type: "azure-native:apimanagement/v20220401preview:Certificate" }, { type: "azure-native:apimanagement/v20220801:Certificate" }, { type: "azure-native:apimanagement/v20220901preview:Certificate" }, { type: "azure-native:apimanagement/v20230301preview:Certificate" }, { type: "azure-native:apimanagement/v20230501preview:Certificate" }, { type: "azure-native:apimanagement/v20230901preview:Certificate" }, { type: "azure-native:apimanagement/v20240501:Certificate" }, { type: "azure-native:apimanagement/v20240601preview:Certificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Certificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Base 64 encoded certificate using the application/x-pkcs12 representation.
     */
    data?: pulumi.Input<string>;
    /**
     * KeyVault location details of the certificate.
     */
    keyVault?: pulumi.Input<types.inputs.KeyVaultContractCreatePropertiesArgs>;
    /**
     * Password for the Certificate
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}