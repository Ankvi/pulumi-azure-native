import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A custom certificate.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview.
 */
export class WebPubSubCustomCertificate extends pulumi.CustomResource {
    /**
     * Get an existing WebPubSubCustomCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebPubSubCustomCertificate {
        return new WebPubSubCustomCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:webpubsub:WebPubSubCustomCertificate';

    /**
     * Returns true if the given object is an instance of WebPubSubCustomCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebPubSubCustomCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebPubSubCustomCertificate.__pulumiType;
    }

    /**
     * Base uri of the KeyVault that stores certificate.
     */
    public readonly keyVaultBaseUri!: pulumi.Output<string>;
    /**
     * Certificate secret name.
     */
    public readonly keyVaultSecretName!: pulumi.Output<string>;
    /**
     * Certificate secret version.
     */
    public readonly keyVaultSecretVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebPubSubCustomCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebPubSubCustomCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.keyVaultBaseUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVaultBaseUri'");
            }
            if ((!args || args.keyVaultSecretName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVaultSecretName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["keyVaultBaseUri"] = args ? args.keyVaultBaseUri : undefined;
            resourceInputs["keyVaultSecretName"] = args ? args.keyVaultSecretName : undefined;
            resourceInputs["keyVaultSecretVersion"] = args ? args.keyVaultSecretVersion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["keyVaultBaseUri"] = undefined /*out*/;
            resourceInputs["keyVaultSecretName"] = undefined /*out*/;
            resourceInputs["keyVaultSecretVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:webpubsub/v20220801preview:WebPubSubCustomCertificate" }, { type: "azure-native:webpubsub/v20230201:WebPubSubCustomCertificate" }, { type: "azure-native:webpubsub/v20230301preview:WebPubSubCustomCertificate" }, { type: "azure-native:webpubsub/v20230601preview:WebPubSubCustomCertificate" }, { type: "azure-native:webpubsub/v20230801preview:WebPubSubCustomCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebPubSubCustomCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebPubSubCustomCertificate resource.
 */
export interface WebPubSubCustomCertificateArgs {
    /**
     * Custom certificate name
     */
    certificateName?: pulumi.Input<string>;
    /**
     * Base uri of the KeyVault that stores certificate.
     */
    keyVaultBaseUri: pulumi.Input<string>;
    /**
     * Certificate secret name.
     */
    keyVaultSecretName: pulumi.Input<string>;
    /**
     * Certificate secret version.
     */
    keyVaultSecretVersion?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}