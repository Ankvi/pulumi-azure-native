import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Public certificate object
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class WebAppPublicCertificate extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPublicCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPublicCertificate {
        return new WebAppPublicCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppPublicCertificate';

    /**
     * Returns true if the given object is an instance of WebAppPublicCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppPublicCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppPublicCertificate.__pulumiType;
    }

    /**
     * Public Certificate byte array
     */
    public readonly blob!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Public Certificate Location
     */
    public readonly publicCertificateLocation!: pulumi.Output<string | undefined>;
    /**
     * Certificate Thumbprint
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppPublicCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPublicCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["blob"] = args ? args.blob : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicCertificateLocation"] = args ? args.publicCertificateLocation : undefined;
            resourceInputs["publicCertificateName"] = args ? args.publicCertificateName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["blob"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicCertificateLocation"] = undefined /*out*/;
            resourceInputs["thumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20160801:WebAppPublicCertificate" }, { type: "azure-native:web/v20180201:WebAppPublicCertificate" }, { type: "azure-native:web/v20181101:WebAppPublicCertificate" }, { type: "azure-native:web/v20190801:WebAppPublicCertificate" }, { type: "azure-native:web/v20200601:WebAppPublicCertificate" }, { type: "azure-native:web/v20200901:WebAppPublicCertificate" }, { type: "azure-native:web/v20201001:WebAppPublicCertificate" }, { type: "azure-native:web/v20201201:WebAppPublicCertificate" }, { type: "azure-native:web/v20210101:WebAppPublicCertificate" }, { type: "azure-native:web/v20210115:WebAppPublicCertificate" }, { type: "azure-native:web/v20210201:WebAppPublicCertificate" }, { type: "azure-native:web/v20210301:WebAppPublicCertificate" }, { type: "azure-native:web/v20220301:WebAppPublicCertificate" }, { type: "azure-native:web/v20220901:WebAppPublicCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppPublicCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppPublicCertificate resource.
 */
export interface WebAppPublicCertificateArgs {
    /**
     * Public Certificate byte array
     */
    blob?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Public Certificate Location
     */
    publicCertificateLocation?: pulumi.Input<types.enums.PublicCertificateLocation>;
    /**
     * Public certificate name.
     */
    publicCertificateName?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
