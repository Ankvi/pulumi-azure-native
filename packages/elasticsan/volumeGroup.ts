import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for Volume Group request.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2021-11-20-preview.
 *
 * Other available API versions: 2021-11-20-preview, 2022-12-01-preview, 2023-01-01, 2024-06-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VolumeGroup extends pulumi.CustomResource {
    /**
     * Get an existing VolumeGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeGroup {
        return new VolumeGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:elasticsan:VolumeGroup';

    /**
     * Returns true if the given object is an instance of VolumeGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Type of encryption
     */
    public readonly encryption!: pulumi.Output<string | undefined>;
    /**
     * Encryption Properties describing Key Vault and Identity information
     */
    public readonly encryptionProperties!: pulumi.Output<types.outputs.EncryptionPropertiesResponse | undefined>;
    /**
     * A boolean indicating whether or not Data Integrity Check is enabled
     */
    public readonly enforceDataIntegrityCheckForIscsi!: pulumi.Output<boolean | undefined>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    public readonly networkAcls!: pulumi.Output<types.outputs.NetworkRuleSetResponse | undefined>;
    /**
     * The list of Private Endpoint Connections.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Type of storage target
     */
    public readonly protocolType!: pulumi.Output<string | undefined>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VolumeGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.elasticSanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'elasticSanName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["elasticSanName"] = args ? args.elasticSanName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["encryptionProperties"] = args ? args.encryptionProperties : undefined;
            resourceInputs["enforceDataIntegrityCheckForIscsi"] = args ? args.enforceDataIntegrityCheckForIscsi : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["networkAcls"] = args ? args.networkAcls : undefined;
            resourceInputs["protocolType"] = args ? args.protocolType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["volumeGroupName"] = args ? args.volumeGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["encryptionProperties"] = undefined /*out*/;
            resourceInputs["enforceDataIntegrityCheckForIscsi"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAcls"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["protocolType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elasticsan/v20211120preview:VolumeGroup" }, { type: "azure-native:elasticsan/v20221201preview:VolumeGroup" }, { type: "azure-native:elasticsan/v20230101:VolumeGroup" }, { type: "azure-native:elasticsan/v20240501:VolumeGroup" }, { type: "azure-native:elasticsan/v20240601preview:VolumeGroup" }, { type: "azure-native:elasticsan/v20240701preview:VolumeGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VolumeGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VolumeGroup resource.
 */
export interface VolumeGroupArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * Type of encryption
     */
    encryption?: pulumi.Input<string | types.enums.EncryptionType>;
    /**
     * Encryption Properties describing Key Vault and Identity information
     */
    encryptionProperties?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * A boolean indicating whether or not Data Integrity Check is enabled
     */
    enforceDataIntegrityCheckForIscsi?: pulumi.Input<boolean>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    networkAcls?: pulumi.Input<types.inputs.NetworkRuleSetArgs>;
    /**
     * Type of storage target
     */
    protocolType?: pulumi.Input<string | types.enums.StorageTargetType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName?: pulumi.Input<string>;
}