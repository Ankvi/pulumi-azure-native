import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SSL certificate purchase order.
 */
export class AppServiceCertificateOrder extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceCertificateOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceCertificateOrder {
        return new AppServiceCertificateOrder(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:certificateregistration/v20201001:AppServiceCertificateOrder';

    /**
     * Returns true if the given object is an instance of AppServiceCertificateOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServiceCertificateOrder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServiceCertificateOrder.__pulumiType;
    }

    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    public /*out*/ readonly appServiceCertificateNotRenewableReasons!: pulumi.Output<string[]>;
    /**
     * <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
     */
    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    /**
     * State of the Key Vault secret.
     */
    public readonly certificates!: pulumi.Output<{[key: string]: types.outputs.AppServiceCertificateResponse} | undefined>;
    /**
     * Last CSR that was created for this order.
     */
    public readonly csr!: pulumi.Output<string | undefined>;
    /**
     * Certificate distinguished name.
     */
    public readonly distinguishedName!: pulumi.Output<string | undefined>;
    /**
     * Domain verification token.
     */
    public /*out*/ readonly domainVerificationToken!: pulumi.Output<string>;
    /**
     * Certificate expiration time.
     */
    public /*out*/ readonly expirationTime!: pulumi.Output<string>;
    /**
     * Intermediate certificate.
     */
    public /*out*/ readonly intermediate!: pulumi.Output<types.outputs.CertificateDetailsResponse>;
    /**
     * <code>true</code> if private key is external; otherwise, <code>false</code>.
     */
    public /*out*/ readonly isPrivateKeyExternal!: pulumi.Output<boolean>;
    /**
     * Certificate key size.
     */
    public readonly keySize!: pulumi.Output<number | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Certificate last issuance time.
     */
    public /*out*/ readonly lastCertificateIssuanceTime!: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Time stamp when the certificate would be auto renewed next
     */
    public /*out*/ readonly nextAutoRenewalTimeStamp!: pulumi.Output<string>;
    /**
     * Certificate product type.
     */
    public readonly productType!: pulumi.Output<string>;
    /**
     * Status of certificate order.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Root certificate.
     */
    public /*out*/ readonly root!: pulumi.Output<types.outputs.CertificateDetailsResponse>;
    /**
     * Current serial number of the certificate.
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * Signed certificate.
     */
    public /*out*/ readonly signedCertificate!: pulumi.Output<types.outputs.CertificateDetailsResponse>;
    /**
     * Current order status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Duration in years (must be between 1 and 3).
     */
    public readonly validityInYears!: pulumi.Output<number | undefined>;

    /**
     * Create a AppServiceCertificateOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceCertificateOrderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.productType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoRenew"] = (args ? args.autoRenew : undefined) ?? true;
            resourceInputs["certificateOrderName"] = args ? args.certificateOrderName : undefined;
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["csr"] = args ? args.csr : undefined;
            resourceInputs["distinguishedName"] = args ? args.distinguishedName : undefined;
            resourceInputs["keySize"] = (args ? args.keySize : undefined) ?? 2048;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["productType"] = args ? args.productType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["validityInYears"] = (args ? args.validityInYears : undefined) ?? 1;
            resourceInputs["appServiceCertificateNotRenewableReasons"] = undefined /*out*/;
            resourceInputs["domainVerificationToken"] = undefined /*out*/;
            resourceInputs["expirationTime"] = undefined /*out*/;
            resourceInputs["intermediate"] = undefined /*out*/;
            resourceInputs["isPrivateKeyExternal"] = undefined /*out*/;
            resourceInputs["lastCertificateIssuanceTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextAutoRenewalTimeStamp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["root"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["signedCertificate"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appServiceCertificateNotRenewableReasons"] = undefined /*out*/;
            resourceInputs["autoRenew"] = undefined /*out*/;
            resourceInputs["certificates"] = undefined /*out*/;
            resourceInputs["csr"] = undefined /*out*/;
            resourceInputs["distinguishedName"] = undefined /*out*/;
            resourceInputs["domainVerificationToken"] = undefined /*out*/;
            resourceInputs["expirationTime"] = undefined /*out*/;
            resourceInputs["intermediate"] = undefined /*out*/;
            resourceInputs["isPrivateKeyExternal"] = undefined /*out*/;
            resourceInputs["keySize"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastCertificateIssuanceTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextAutoRenewalTimeStamp"] = undefined /*out*/;
            resourceInputs["productType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["root"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["signedCertificate"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validityInYears"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:certificateregistration:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20150801:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20180201:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20190801:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20200601:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20200901:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20201201:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20210101:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20210115:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20210201:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20210301:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20220301:AppServiceCertificateOrder" }, { type: "azure-native:certificateregistration/v20220901:AppServiceCertificateOrder" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServiceCertificateOrder.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServiceCertificateOrder resource.
 */
export interface AppServiceCertificateOrderArgs {
    /**
     * <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * Name of the certificate order.
     */
    certificateOrderName?: pulumi.Input<string>;
    /**
     * State of the Key Vault secret.
     */
    certificates?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.AppServiceCertificateArgs>}>;
    /**
     * Last CSR that was created for this order.
     */
    csr?: pulumi.Input<string>;
    /**
     * Certificate distinguished name.
     */
    distinguishedName?: pulumi.Input<string>;
    /**
     * Certificate key size.
     */
    keySize?: pulumi.Input<number>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Certificate product type.
     */
    productType: pulumi.Input<types.enums.CertificateProductType>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Duration in years (must be between 1 and 3).
     */
    validityInYears?: pulumi.Input<number>;
}
