import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Certificate used for Custom Domain bindings of Container Apps in a Managed Environment
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConnectedEnvironmentsCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedEnvironmentsCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedEnvironmentsCertificate {
        return new ConnectedEnvironmentsCertificate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:ConnectedEnvironmentsCertificate';

    /**
     * Returns true if the given object is an instance of ConnectedEnvironmentsCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedEnvironmentsCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedEnvironmentsCertificate.__pulumiType;
    }

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
     * Certificate resource specific properties
     */
    public readonly properties!: pulumi.Output<types.outputs.CertificateResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectedEnvironmentsCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedEnvironmentsCertificateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedEnvironmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedEnvironmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["connectedEnvironmentName"] = args ? args.connectedEnvironmentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20220601preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20221001:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20221101preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20230401preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20230501:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20230502preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20230801preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20231102preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20240202preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20240301:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20240802preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20241002preview:ConnectedEnvironmentsCertificate" }, { type: "azure-native:app/v20250101:ConnectedEnvironmentsCertificate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedEnvironmentsCertificate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedEnvironmentsCertificate resource.
 */
export interface ConnectedEnvironmentsCertificateArgs {
    /**
     * Name of the Certificate.
     */
    certificateName?: pulumi.Input<string>;
    /**
     * Name of the Connected Environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Certificate resource specific properties
     */
    properties?: pulumi.Input<types.inputs.CertificatePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}