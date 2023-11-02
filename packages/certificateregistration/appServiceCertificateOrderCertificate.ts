import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Key Vault container ARM resource for a certificate that is purchased through Azure.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-10-01.
 *
 * Other available API versions: 2020-10-01.
 */
export class AppServiceCertificateOrderCertificate extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceCertificateOrderCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceCertificateOrderCertificate {
        return new AppServiceCertificateOrderCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:certificateregistration:AppServiceCertificateOrderCertificate';

    /**
     * Returns true if the given object is an instance of AppServiceCertificateOrderCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServiceCertificateOrderCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServiceCertificateOrderCertificate.__pulumiType;
    }

    /**
     * Key Vault resource Id.
     */
    public readonly keyVaultId!: pulumi.Output<string | undefined>;
    /**
     * Key Vault secret name.
     */
    public readonly keyVaultSecretName!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Status of the Key Vault secret.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AppServiceCertificateOrderCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceCertificateOrderCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.certificateOrderName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateOrderName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["certificateOrderName"] = args ? args.certificateOrderName : undefined;
            resourceInputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            resourceInputs["keyVaultSecretName"] = args ? args.keyVaultSecretName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["keyVaultId"] = undefined /*out*/;
            resourceInputs["keyVaultSecretName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:certificateregistration/v20150801:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20180201:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20190801:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20200601:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20200901:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20201001:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20201201:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20210101:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20210115:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20210201:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20210301:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20220301:AppServiceCertificateOrderCertificate" }, { type: "azure-native:certificateregistration/v20220901:AppServiceCertificateOrderCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServiceCertificateOrderCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServiceCertificateOrderCertificate resource.
 */
export interface AppServiceCertificateOrderCertificateArgs {
    /**
     * Name of the certificate order.
     */
    certificateOrderName: pulumi.Input<string>;
    /**
     * Key Vault resource Id.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * Key Vault secret name.
     */
    keyVaultSecretName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the certificate.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
