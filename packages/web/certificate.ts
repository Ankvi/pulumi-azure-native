import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SSL certificate for an app.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2015-08-01, 2016-03-01, 2020-10-01, 2023-01-01.
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
    public static readonly __pulumiType = 'azure-native:web:Certificate';

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
     * CNAME of the certificate to be issued via free certificate
     */
    public readonly canonicalName!: pulumi.Output<string | undefined>;
    /**
     * Raw bytes of .cer file
     */
    public /*out*/ readonly cerBlob!: pulumi.Output<string>;
    /**
     * Method of domain validation for free cert
     */
    public readonly domainValidationMethod!: pulumi.Output<string | undefined>;
    /**
     * Certificate expiration date.
     */
    public /*out*/ readonly expirationDate!: pulumi.Output<string>;
    /**
     * Friendly name of the certificate.
     */
    public /*out*/ readonly friendlyName!: pulumi.Output<string>;
    /**
     * Host names the certificate applies to.
     */
    public readonly hostNames!: pulumi.Output<string[] | undefined>;
    /**
     * Specification for the App Service Environment to use for the certificate.
     */
    public /*out*/ readonly hostingEnvironmentProfile!: pulumi.Output<types.outputs.HostingEnvironmentProfileResponse>;
    /**
     * Certificate issue Date.
     */
    public /*out*/ readonly issueDate!: pulumi.Output<string>;
    /**
     * Certificate issuer.
     */
    public /*out*/ readonly issuer!: pulumi.Output<string>;
    /**
     * Key Vault Csm resource Id.
     */
    public readonly keyVaultId!: pulumi.Output<string | undefined>;
    /**
     * Key Vault secret name.
     */
    public readonly keyVaultSecretName!: pulumi.Output<string | undefined>;
    /**
     * Status of the Key Vault secret.
     */
    public /*out*/ readonly keyVaultSecretStatus!: pulumi.Output<string>;
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
     * Pfx blob.
     */
    public readonly pfxBlob!: pulumi.Output<string | undefined>;
    /**
     * Public key hash.
     */
    public /*out*/ readonly publicKeyHash!: pulumi.Output<string>;
    /**
     * Self link.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    public readonly serverFarmId!: pulumi.Output<string | undefined>;
    /**
     * App name.
     */
    public /*out*/ readonly siteName!: pulumi.Output<string>;
    /**
     * Subject name of the certificate.
     */
    public /*out*/ readonly subjectName!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Certificate thumbprint.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Is the certificate valid?.
     */
    public /*out*/ readonly valid!: pulumi.Output<boolean>;

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
            resourceInputs["canonicalName"] = args ? args.canonicalName : undefined;
            resourceInputs["domainValidationMethod"] = args ? args.domainValidationMethod : undefined;
            resourceInputs["hostNames"] = args ? args.hostNames : undefined;
            resourceInputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            resourceInputs["keyVaultSecretName"] = args ? args.keyVaultSecretName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["pfxBlob"] = args ? args.pfxBlob : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverFarmId"] = args ? args.serverFarmId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["cerBlob"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hostingEnvironmentProfile"] = undefined /*out*/;
            resourceInputs["issueDate"] = undefined /*out*/;
            resourceInputs["issuer"] = undefined /*out*/;
            resourceInputs["keyVaultSecretStatus"] = undefined /*out*/;
            resourceInputs["publicKeyHash"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["siteName"] = undefined /*out*/;
            resourceInputs["subjectName"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["valid"] = undefined /*out*/;
        } else {
            resourceInputs["canonicalName"] = undefined /*out*/;
            resourceInputs["cerBlob"] = undefined /*out*/;
            resourceInputs["domainValidationMethod"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hostNames"] = undefined /*out*/;
            resourceInputs["hostingEnvironmentProfile"] = undefined /*out*/;
            resourceInputs["issueDate"] = undefined /*out*/;
            resourceInputs["issuer"] = undefined /*out*/;
            resourceInputs["keyVaultId"] = undefined /*out*/;
            resourceInputs["keyVaultSecretName"] = undefined /*out*/;
            resourceInputs["keyVaultSecretStatus"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pfxBlob"] = undefined /*out*/;
            resourceInputs["publicKeyHash"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["serverFarmId"] = undefined /*out*/;
            resourceInputs["siteName"] = undefined /*out*/;
            resourceInputs["subjectName"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["valid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:Certificate" }, { type: "azure-native:web/v20160301:Certificate" }, { type: "azure-native:web/v20180201:Certificate" }, { type: "azure-native:web/v20181101:Certificate" }, { type: "azure-native:web/v20190801:Certificate" }, { type: "azure-native:web/v20200601:Certificate" }, { type: "azure-native:web/v20200901:Certificate" }, { type: "azure-native:web/v20201001:Certificate" }, { type: "azure-native:web/v20201201:Certificate" }, { type: "azure-native:web/v20210101:Certificate" }, { type: "azure-native:web/v20210115:Certificate" }, { type: "azure-native:web/v20210201:Certificate" }, { type: "azure-native:web/v20210301:Certificate" }, { type: "azure-native:web/v20220301:Certificate" }, { type: "azure-native:web/v20220901:Certificate" }, { type: "azure-native:web/v20230101:Certificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Certificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * CNAME of the certificate to be issued via free certificate
     */
    canonicalName?: pulumi.Input<string>;
    /**
     * Method of domain validation for free cert
     */
    domainValidationMethod?: pulumi.Input<string>;
    /**
     * Host names the certificate applies to.
     */
    hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key Vault Csm resource Id.
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
     * Certificate password.
     */
    password?: pulumi.Input<string>;
    /**
     * Pfx blob.
     */
    pfxBlob?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    serverFarmId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
