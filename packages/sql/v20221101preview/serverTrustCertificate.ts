import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Server trust certificate imported from box to enable connection between box and Sql Managed Instance.
 */
export class ServerTrustCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ServerTrustCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerTrustCertificate {
        return new ServerTrustCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:ServerTrustCertificate';

    /**
     * Returns true if the given object is an instance of ServerTrustCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerTrustCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerTrustCertificate.__pulumiType;
    }

    /**
     * The certificate name
     */
    public readonly certificateName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The certificate public blob
     */
    public readonly publicBlob!: pulumi.Output<string | undefined>;
    /**
     * The certificate thumbprint
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerTrustCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerTrustCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["publicBlob"] = args ? args.publicBlob : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["certificateName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicBlob"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ServerTrustCertificate" }, { type: "azure-native:sql/v20210501preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20210801preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20211101:ServerTrustCertificate" }, { type: "azure-native:sql/v20211101preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20220201preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20220501preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20220801preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20230201preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20230501preview:ServerTrustCertificate" }, { type: "azure-native:sql/v20230801preview:ServerTrustCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerTrustCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerTrustCertificate resource.
 */
export interface ServerTrustCertificateArgs {
    /**
     * Name of of the certificate to upload.
     */
    certificateName?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The certificate public blob
     */
    publicBlob?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}