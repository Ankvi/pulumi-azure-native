import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gateway certificate authority details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GatewayCertificateAuthority extends pulumi.CustomResource {
    /**
     * Get an existing GatewayCertificateAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayCertificateAuthority {
        return new GatewayCertificateAuthority(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:GatewayCertificateAuthority';

    /**
     * Returns true if the given object is an instance of GatewayCertificateAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GatewayCertificateAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GatewayCertificateAuthority.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Determines whether certificate authority is trusted.
     */
    public readonly isTrusted!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GatewayCertificateAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayCertificateAuthorityArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.gatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["gatewayId"] = args ? args.gatewayId : undefined;
            resourceInputs["isTrusted"] = args ? args.isTrusted : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["isTrusted"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20200601preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20201201:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20210101preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20210401preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20210801:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20211201preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20220401preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20220801:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20220901preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20230301preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20230501preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20230901preview:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20240501:GatewayCertificateAuthority" }, { type: "azure-native:apimanagement/v20240601preview:GatewayCertificateAuthority" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GatewayCertificateAuthority.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GatewayCertificateAuthority resource.
 */
export interface GatewayCertificateAuthorityArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * Determines whether certificate authority is trusted.
     */
    isTrusted?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}