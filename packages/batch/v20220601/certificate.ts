import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains information about a certificate.
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
    public static readonly __pulumiType = 'azure-native:batch/v20220601:Certificate';

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
     * This is only returned when the certificate provisioningState is 'Failed'.
     */
    public /*out*/ readonly deleteCertificateError!: pulumi.Output<types.outputs.DeleteCertificateErrorResponse>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The previous provisioned state of the resource
     */
    public /*out*/ readonly previousProvisioningState!: pulumi.Output<string>;
    public /*out*/ readonly previousProvisioningStateTransitionTime!: pulumi.Output<string>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public /*out*/ readonly provisioningStateTransitionTime!: pulumi.Output<string>;
    /**
     * The public key of the certificate.
     */
    public /*out*/ readonly publicData!: pulumi.Output<string>;
    /**
     * This must match the thumbprint from the name.
     */
    public readonly thumbprint!: pulumi.Output<string | undefined>;
    /**
     * This must match the first portion of the certificate name. Currently required to be 'SHA1'.
     */
    public readonly thumbprintAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
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
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.data === undefined) && !opts.urn) {
                throw new Error("Missing required property 'data'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["thumbprint"] = args ? args.thumbprint : undefined;
            resourceInputs["thumbprintAlgorithm"] = args ? args.thumbprintAlgorithm : undefined;
            resourceInputs["deleteCertificateError"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["previousProvisioningState"] = undefined /*out*/;
            resourceInputs["previousProvisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["publicData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deleteCertificateError"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["previousProvisioningState"] = undefined /*out*/;
            resourceInputs["previousProvisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["publicData"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["thumbprintAlgorithm"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:batch/v20170901:Certificate" }, { type: "azure-native:batch/v20181201:Certificate" }, { type: "azure-native:batch/v20190401:Certificate" }, { type: "azure-native:batch/v20190801:Certificate" }, { type: "azure-native:batch/v20200301:Certificate" }, { type: "azure-native:batch/v20200501:Certificate" }, { type: "azure-native:batch/v20200901:Certificate" }, { type: "azure-native:batch/v20210101:Certificate" }, { type: "azure-native:batch/v20210601:Certificate" }, { type: "azure-native:batch/v20220101:Certificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Certificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
     */
    certificateName?: pulumi.Input<string>;
    /**
     * The maximum size is 10KB.
     */
    data: pulumi.Input<string>;
    /**
     * The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
     */
    format?: pulumi.Input<types.enums.CertificateFormat>;
    /**
     * This must not be specified if the certificate format is Cer.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * This must match the thumbprint from the name.
     */
    thumbprint?: pulumi.Input<string>;
    /**
     * This must match the first portion of the certificate name. Currently required to be 'SHA1'.
     */
    thumbprintAlgorithm?: pulumi.Input<string>;
}
