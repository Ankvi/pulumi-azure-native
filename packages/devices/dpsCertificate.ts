import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The X509 Certificate.
 *
 * Uses Azure REST API version 2022-12-12. In version 1.x of the Azure Native provider, it used API version 2020-03-01.
 *
 * Other available API versions: 2021-10-15, 2023-03-01-preview, 2025-02-01-preview.
 */
export class DpsCertificate extends pulumi.CustomResource {
    /**
     * Get an existing DpsCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DpsCertificate {
        return new DpsCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devices:DpsCertificate';

    /**
     * Returns true if the given object is an instance of DpsCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DpsCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DpsCertificate.__pulumiType;
    }

    /**
     * The entity tag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the certificate.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * properties of a certificate
     */
    public readonly properties!: pulumi.Output<types.outputs.CertificatePropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DpsCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DpsCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.provisioningServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'provisioningServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["provisioningServiceName"] = args ? args.provisioningServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices/v20170821preview:DpsCertificate" }, { type: "azure-native:devices/v20171115:DpsCertificate" }, { type: "azure-native:devices/v20180122:DpsCertificate" }, { type: "azure-native:devices/v20200101:DpsCertificate" }, { type: "azure-native:devices/v20200301:DpsCertificate" }, { type: "azure-native:devices/v20200901preview:DpsCertificate" }, { type: "azure-native:devices/v20211015:DpsCertificate" }, { type: "azure-native:devices/v20220205:DpsCertificate" }, { type: "azure-native:devices/v20221212:DpsCertificate" }, { type: "azure-native:devices/v20230301preview:DpsCertificate" }, { type: "azure-native:devices/v20250201preview:DpsCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DpsCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DpsCertificate resource.
 */
export interface DpsCertificateArgs {
    /**
     * The name of the certificate create or update.
     */
    certificateName?: pulumi.Input<string>;
    /**
     * properties of a certificate
     */
    properties?: pulumi.Input<types.inputs.CertificatePropertiesArgs>;
    /**
     * The name of the provisioning service.
     */
    provisioningServiceName: pulumi.Input<string>;
    /**
     * Resource group identifier.
     */
    resourceGroupName: pulumi.Input<string>;
}