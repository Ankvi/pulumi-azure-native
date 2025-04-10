import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The X509 Certificate.
 *
 * Uses Azure REST API version 2022-04-30-preview. In version 1.x of the Azure Native provider, it used API version 2020-08-31.
 *
 * Other available API versions: 2020-04-01, 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
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
    public static readonly __pulumiType = 'azure-native:devices:Certificate';

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
     * The entity tag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the certificate.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The description of an X509 CA Certificate.
     */
    public readonly properties!: pulumi.Output<types.outputs.CertificatePropertiesResponse>;
    /**
     * The resource type.
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
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices/v20170701:Certificate" }, { type: "azure-native:devices/v20180122:Certificate" }, { type: "azure-native:devices/v20180401:Certificate" }, { type: "azure-native:devices/v20181201preview:Certificate" }, { type: "azure-native:devices/v20190322:Certificate" }, { type: "azure-native:devices/v20190322preview:Certificate" }, { type: "azure-native:devices/v20190701preview:Certificate" }, { type: "azure-native:devices/v20191104:Certificate" }, { type: "azure-native:devices/v20200301:Certificate" }, { type: "azure-native:devices/v20200401:Certificate" }, { type: "azure-native:devices/v20200615:Certificate" }, { type: "azure-native:devices/v20200710preview:Certificate" }, { type: "azure-native:devices/v20200801:Certificate" }, { type: "azure-native:devices/v20200831:Certificate" }, { type: "azure-native:devices/v20200831preview:Certificate" }, { type: "azure-native:devices/v20210201preview:Certificate" }, { type: "azure-native:devices/v20210303preview:Certificate" }, { type: "azure-native:devices/v20210331:Certificate" }, { type: "azure-native:devices/v20210701:Certificate" }, { type: "azure-native:devices/v20210701preview:Certificate" }, { type: "azure-native:devices/v20210702:Certificate" }, { type: "azure-native:devices/v20210702preview:Certificate" }, { type: "azure-native:devices/v20220430preview:Certificate" }, { type: "azure-native:devices/v20221115preview:Certificate" }, { type: "azure-native:devices/v20230630:Certificate" }, { type: "azure-native:devices/v20230630preview:Certificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Certificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The name of the certificate
     */
    certificateName?: pulumi.Input<string>;
    /**
     * The description of an X509 CA Certificate.
     */
    properties?: pulumi.Input<types.inputs.CertificatePropertiesArgs>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}