import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Attestation service response message.
 *
 * Uses Azure REST API version 2021-06-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 */
export class AttestationProvider extends pulumi.CustomResource {
    /**
     * Get an existing AttestationProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttestationProvider {
        return new AttestationProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:attestation:AttestationProvider';

    /**
     * Returns true if the given object is an instance of AttestationProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AttestationProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AttestationProvider.__pulumiType;
    }

    /**
     * Gets the uri of attestation service
     */
    public /*out*/ readonly attestUri!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connections associated with the attestation provider.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
     */
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Status of attestation service.
     */
    public /*out*/ readonly status!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The setting that controls whether authentication is enabled or disabled for TPM Attestation REST APIs.
     */
    public /*out*/ readonly tpmAttestationAuthentication!: pulumi.Output<string | undefined>;
    /**
     * Trust model for the attestation provider.
     */
    public /*out*/ readonly trustModel!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AttestationProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttestationProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["attestUri"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tpmAttestationAuthentication"] = undefined /*out*/;
            resourceInputs["trustModel"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attestUri"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tpmAttestationAuthentication"] = undefined /*out*/;
            resourceInputs["trustModel"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:attestation/v20180901preview:AttestationProvider" }, { type: "azure-native:attestation/v20201001:AttestationProvider" }, { type: "azure-native:attestation/v20210601:AttestationProvider" }, { type: "azure-native:attestation/v20210601preview:AttestationProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AttestationProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AttestationProvider resource.
 */
export interface AttestationProviderArgs {
    /**
     * The supported Azure location where the attestation provider should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of the attestation provider
     */
    properties: pulumi.Input<types.inputs.AttestationServiceCreationSpecificParamsArgs>;
    /**
     * Name of the attestation provider.
     */
    providerName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the attestation provider.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}