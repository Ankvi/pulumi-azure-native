import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The CA Certificate resource.
 * Azure REST API version: 2023-06-01-preview.
 */
export class CaCertificate extends pulumi.CustomResource {
    /**
     * Get an existing CaCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CaCertificate {
        return new CaCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:CaCertificate';

    /**
     * Returns true if the given object is an instance of CaCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CaCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CaCertificate.__pulumiType;
    }

    /**
     * Description for the CA Certificate resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Base64 encoded PEM (Privacy Enhanced Mail) format certificate data.
     */
    public readonly encodedCertificate!: pulumi.Output<string | undefined>;
    /**
     * Certificate expiry time in UTC. This is a read-only field.
     */
    public /*out*/ readonly expiryTimeInUtc!: pulumi.Output<string>;
    /**
     * Certificate issue time in UTC. This is a read-only field.
     */
    public /*out*/ readonly issueTimeInUtc!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the CA Certificate resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to the CaCertificate resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.eventgrid.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CaCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CaCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["caCertificateName"] = args ? args.caCertificateName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encodedCertificate"] = args ? args.encodedCertificate : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["expiryTimeInUtc"] = undefined /*out*/;
            resourceInputs["issueTimeInUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["encodedCertificate"] = undefined /*out*/;
            resourceInputs["expiryTimeInUtc"] = undefined /*out*/;
            resourceInputs["issueTimeInUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20230601preview:CaCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CaCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CaCertificate resource.
 */
export interface CaCertificateArgs {
    /**
     * The CA certificate name.
     */
    caCertificateName?: pulumi.Input<string>;
    /**
     * Description for the CA Certificate resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Base64 encoded PEM (Privacy Enhanced Mail) format certificate data.
     */
    encodedCertificate?: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
